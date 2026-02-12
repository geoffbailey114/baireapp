import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { cookies } from 'next/headers'
import { verifyJWT } from '@/lib/jwt'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

const baseUrl = process.env.APP_BASE_URL || 'https://baireapp.com'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      email, 
      tier = 'trial',
      consentTimestamp,
      agreementVersion,
    } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Build metadata with consent info
    const metadata: Record<string, string> = {
      tier,
      userEmail: email,
    }

    if (consentTimestamp) {
      metadata.consentTimestamp = consentTimestamp
      metadata.agreementVersion = agreementVersion || '2.0'
      metadata.consentType = 'self_representation_agreement'
    }

    // Create or get customer
    const customers = await stripe.customers.list({
      email,
      limit: 1,
    })

    let customerId: string

    if (customers.data.length > 0) {
      customerId = customers.data[0].id
      
      if (consentTimestamp) {
        await stripe.customers.update(customerId, {
          metadata: {
            ...customers.data[0].metadata,
            consentTimestamp,
            agreementVersion: agreementVersion || '2.0',
            consentType: 'self_representation_agreement',
          },
        })
      }
    } else {
      const customer = await stripe.customers.create({
        email,
        metadata: consentTimestamp ? {
          consentTimestamp,
          agreementVersion: agreementVersion || '2.0',
          consentType: 'self_representation_agreement',
        } : {},
      })
      customerId = customer.id
    }

    // ============================================
    // TRIAL FLOW: Setup mode — collect card, no charge
    // User gets 7 days free, then cron charges $995
    // ============================================
    if (tier === 'trial') {
      const session = await stripe.checkout.sessions.create({
        customer: customerId,
        mode: 'setup',
        payment_method_types: ['card'],
        success_url: `${baseUrl}/access?session_id={CHECKOUT_SESSION_ID}&tier=trial`,
        cancel_url: `${baseUrl}/pricing`,
        metadata,
      })

      return NextResponse.json({ url: session.url })
    }

    // ============================================
    // DIRECT PURCHASE: $995 full access (skip trial)
    // Used if we add a "skip trial" option later
    // ============================================
    const priceId = process.env.STRIPE_PRICE_FULL_ACCESS
    if (!priceId) {
      console.error('STRIPE_PRICE_FULL_ACCESS not configured')
      return NextResponse.json(
        { error: 'Pricing not configured' },
        { status: 500 }
      )
    }

    // Verify auth for direct purchase
    const cookieStore = await cookies()
    const token = cookieStore.get('baire_auth')?.value
    if (token) {
      const payload = await verifyJWT(token)
      if (payload) {
        const purchases = payload.purchases as Record<string, boolean> || {}
        if (purchases.full_access) {
          return NextResponse.redirect(`${baseUrl}/billing?error=already_purchased`)
        }
      }
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/access?session_id={CHECKOUT_SESSION_ID}&tier=full_access`,
      cancel_url: `${baseUrl}/pricing`,
      metadata: {
        ...metadata,
        tier: 'full_access',
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
