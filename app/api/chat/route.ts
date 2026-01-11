import { NextRequest, NextResponse } from 'next/server'
import { openai, OPENAI_MODEL } from '@/lib/openai'
import { verifyJWT } from '@/lib/jwt'
import { getAuthCookie } from '@/lib/cookies'
import { DISCLAIMER_CHAT, FREE_TRIAL_QUERY_LIMIT } from '@/lib/constants'

// Simple in-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 20 // requests per minute

function checkRateLimit(identifier: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(identifier)

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false
  }

  entry.count++
  return true
}

interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please slow down.' },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()
    const { message, history = [] } = body

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    if (message.length > 4000) {
      return NextResponse.json(
        { error: 'Message too long. Please keep it under 4000 characters.' },
        { status: 400 }
      )
    }

    // Check authentication
    const token = await getAuthCookie()
    let isPaid = false
    
    if (token) {
      const payload = await verifyJWT(token)
      isPaid = payload?.paid === true
    }

    // Build messages array
    const messages: ChatMessage[] = [
      {
        role: 'system',
        content: DISCLAIMER_CHAT,
      },
    ]

    // Add conversation history (limited)
    const limitedHistory = (history as ChatMessage[]).slice(-10)
    messages.push(...limitedHistory)

    // Add current user message
    messages.push({
      role: 'user',
      content: message,
    })

    // Additional system message for trial users
    if (!isPaid) {
      messages.push({
        role: 'system',
        content: 'Note: This user is on a free trial. Provide helpful educational information, but avoid providing detailed templates, checklists, or step-by-step action plans. Keep responses informative but general. Encourage them to upgrade for full access to detailed guidance.',
      })
    }

    // Call OpenAI
    const completion = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      messages: messages as any,
      max_tokens: isPaid ? 1500 : 800,
      temperature: 0.7,
    })

    const responseMessage = completion.choices[0]?.message?.content

    if (!responseMessage) {
      return NextResponse.json(
        { error: 'No response generated' },
        { status: 500 }
      )
    }

    // For trial users, potentially restrict certain content
    let finalMessage = responseMessage
    let isTrialRestricted = false

    if (!isPaid) {
      // Check if response contains templates or detailed checklists
      const restrictedPatterns = [
        /checklist:/i,
        /step-by-step:/i,
        /template:/i,
        /action items:/i,
        /\[\s*\]/g, // Checkbox patterns
      ]

      const hasRestrictedContent = restrictedPatterns.some(pattern => 
        pattern.test(responseMessage)
      )

      if (hasRestrictedContent && responseMessage.length > 500) {
        // Truncate and blur indication
        finalMessage = responseMessage.substring(0, 500) + '...\n\n[Upgrade to BAIRE for full access to detailed templates and checklists]'
        isTrialRestricted = true
      }
    }

    return NextResponse.json({
      message: finalMessage,
      isTrialRestricted,
    })
  } catch (error) {
    console.error('Chat API error:', error)
    
    // Check for specific OpenAI errors
    if (error instanceof Error) {
      if (error.message.includes('rate limit')) {
        return NextResponse.json(
          { error: 'Service is busy. Please try again in a moment.' },
          { status: 429 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    )
  }
}
