import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { openai, OPENAI_MODEL } from '@/lib/openai'
import { verifyJWT } from '@/lib/jwt'
import { DISCLAIMER_CHAT, FREE_TRIAL_QUERY_LIMIT, JWT_COOKIE_NAME } from '@/lib/constants'

export const dynamic = 'force-dynamic'

const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000
const RATE_LIMIT_MAX = 20

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
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please slow down.' },
        { status: 429 }
      )
    }

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

    const cookieStore = cookies()
    const token = cookieStore.get(JWT_COOKIE_NAME)?.value
    let isPaid = false
    
    if (token) {
      const payload = await verifyJWT(token)
      isPaid = payload?.paid === true
    }

    const messages: ChatMessage[] = [
      {
        role: 'system',
        content: DISCLAIMER_CHAT,
      },
    ]

    const limitedHistory = (history as ChatMessage[]).slice(-10)
    messages.push(...limitedHistory)

    messages.push({
      role: 'user',
      content: message,
    })

    if (!isPaid) {
      messages.push({
        role: 'system',
        content: 'Note: This user is on a free trial. Provide helpful educational information, but avoid providing detailed templates, checklists, or step-by-step action plans. Keep responses informative but general. Encourage them to upgrade for full access to detailed guidance.',
      })
    }

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

    let finalMessage = responseMessage
    let isTrialRestricted = false

    if (!isPaid) {
      const restrictedPatterns = [
        /checklist:/i,
        /step-by-step:/i,
        /template:/i,
        /action items:/i,
        /\[\s*\]/g,
      ]

      const hasRestrictedContent = restrictedPatterns.some(pattern => 
        pattern.test(responseMessage)
      )

      if (hasRestrictedContent && responseMessage.length > 500) {
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
