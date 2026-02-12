import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { openai, OPENAI_MODEL } from '@/lib/openai'
import { verifyJWT } from '@/lib/jwt'
import { JWT_COOKIE_NAME } from '@/lib/constants'
import { assembleSystemPrompt } from '@/lib/knowledge'
import { AccessTier } from '@/lib/access'
import { deserializeProfile, generateProfileSummary } from '@/lib/user-profile'
import { processListingUrl } from '@/lib/listing-lookup'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

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

async function getUserProfileSummary(stripeCustomerId: string | null): Promise<string> {
  if (!stripeCustomerId) return ''
  
  try {
    const customer = await stripe.customers.retrieve(stripeCustomerId)
    if ('deleted' in customer) return ''
    
    const profile = deserializeProfile(customer.metadata)
    return generateProfileSummary(profile)
  } catch (error) {
    console.error('Error fetching user profile:', error)
    return ''
  }
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
    let userTier: AccessTier = 'trial'
    let stripeCustomerId: string | null = null
    
    if (token) {
      const payload = await verifyJWT(token)
      stripeCustomerId = payload?.stripe_customer_id as string || null
      
      // Check Stripe directly for the latest access status (handles comp granted after login)
      if (stripeCustomerId) {
        try {
          const stripe = new (await import('stripe')).default(process.env.STRIPE_SECRET_KEY!, {
            apiVersion: '2024-06-20',
          })
          const customer = await stripe.customers.retrieve(stripeCustomerId)
          
          if (customer && !customer.deleted) {
            const metadata = customer.metadata || {}
            const isComp = metadata.comp_access === 'true' || metadata.admin_granted === 'true'
            const hasFullAccess = metadata.full_access_purchased_at
            // Legacy: old tier purchases also grant access
            const hasLegacyAccess = metadata.access_purchased_at || metadata.tier === 'access' || metadata.tier === 'offer'
            const hasPaidFlag = metadata.paid === 'true'
            
            // Determine tier from Stripe (source of truth)
            if (isComp) {
              userTier = 'comp'
              isPaid = true
            } else if (hasFullAccess || hasLegacyAccess || hasPaidFlag) {
              userTier = 'full_access'
              isPaid = true
            }
          }
        } catch (stripeError) {
          console.error('Error checking Stripe for access:', stripeError)
          // Fall back to JWT values
          if (payload?.tier) {
            userTier = payload.tier as AccessTier
          }
          isPaid = payload?.paid === true || 
                   payload?.tier === 'full_access' ||
                   payload?.tier === 'access' || 
                   payload?.tier === 'offer' || 
                   payload?.tier === 'comp' ||
                   payload?.isComp === true
        }
      }
    }

    // Get user profile summary for personalization
    const profileSummary = await getUserProfileSummary(stripeCustomerId)

    // Check for listing URLs and fetch data
    const { hasListing, listingContext, listingData } = await processListingUrl(message)

    // Assemble system prompt using knowledge modules
    const { systemPrompt, modulesIncluded } = assembleSystemPrompt({
      userTier,
      userProfile: profileSummary,
    })

    const messages: ChatMessage[] = [
      {
        role: 'system',
        content: systemPrompt,
      },
    ]

    // If listing URL detected, inject listing context
    if (hasListing && listingContext) {
      messages.push({
        role: 'system',
        content: listingContext,
      })
    }

    const limitedHistory = (history as ChatMessage[]).slice(-10)
    messages.push(...limitedHistory)

    messages.push({
      role: 'user',
      content: message,
    })

    if (!isPaid) {
      messages.push({
        role: 'system',
        content: `IMPORTANT - TRIAL USER INSTRUCTIONS:
This user is on a 7-DAY FREE TRIAL. Follow these rules:
1. Provide helpful, complete responses — give them the full experience so they see the value
2. Trial users get FULL access to all features during their 7 days
3. Do NOT mention upgrades, pricing, or upsells during the trial — let the product speak for itself
4. Treat them exactly like a paid user during the trial period`,
      })
    } else {
      messages.push({
        role: 'system',
        content: `IMPORTANT - PAID USER INSTRUCTIONS:
This user has FULL ACCESS (${userTier} tier). Follow these rules:
1. Provide complete, detailed responses with full templates, scripts, and step-by-step guidance
2. Do NOT mention upgrades, pricing, or upsells — they already have full access
3. Do NOT say things like "consider upgrading" or "for more detailed guidance, upgrade"
4. Give them the full value they paid for — comprehensive, actionable information`,
      })
    }

    const completion = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      messages: messages as any,
      max_tokens: 1500,
      temperature: 0.7,
    })

    const responseMessage = completion.choices[0]?.message?.content

    if (!responseMessage) {
      return NextResponse.json(
        { error: 'No response generated' },
        { status: 500 }
      )
    }

    const finalMessage = responseMessage

    return NextResponse.json({
      message: finalMessage,
      // Include listing info if found (useful for frontend display)
      listing: hasListing ? {
        found: listingData?.found,
        source: listingData?.source,
        address: listingData?.address,
        price: listingData?.priceFormatted,
        agent: listingData?.listingAgent?.name,
        agentPhone: listingData?.listingAgent?.phone,
      } : undefined,
      // Include for debugging (can remove in production)
      _debug: process.env.NODE_ENV === 'development' ? { 
        modulesIncluded,
        hasListing,
        listingSource: listingData?.source,
      } : undefined,
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
