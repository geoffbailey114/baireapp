import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { cookies } from 'next/headers'
import { verifyJWT } from '@/lib/jwt'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

const baseUrl = process.env.APP_BASE_URL || 'https://baireapp.com'

type Tier = 'trial' | 'access' | 'offer' | 'closing'

function getPriceIdForTier(tier: Tier): string | null {
  switch (tier) {
    case 'trial':
      return null // Trial uses setup mode, not a price
    case 'access':
      return process.env.STRIPE_PRICE_ACCESS!
    case 'offer':
      return process.env.STRIPE_PRICE_OFFER || process.env.STRIPE_PRICE_SHOWINGS!
    case 'closing':
      return process.env.STRIPE_PRICE_CLOSING!
    default:
      return null
  }
}

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

    // Validate tier
    const validTiers: Tier[] = ['trial', 'access', 'offer', 'closing']
    if (!validTiers.includes(tier)) {
      return NextResponse.json(
        { error: 'Invalid tier' },
        { status: 400 }
      )
    }

    // For offer/closing tiers, verify user has purchased previous tier
    if (tier === 'offer' || tier === 'closing') {
      const cookieStore = await cookies()
      const token = cookieStore.get('baire_auth')?.value

      if (!token) {
        return NextResponse.json(
          { error: 'Authentication required' },
          { status: 401 }
        )
      }

      const payload = await verifyJWT(token)
      if (!payload) {
        return NextResponse.json(
          { error: 'Invalid session' },
          { status: 401 }
        )
      }

      const purchases = payload.purchases as Record<string, boolean> || {}

      // Block offer tier if access not purchased
      if (tier === 'offer' && !purchases.access) {
        return NextResponse.redirect(`${baseUrl}/pricing?error=access_required`)
      }

      // Block closing tier if offer not purchased
      if (tier === 'closing' && !purchases.offer) {
        return NextResponse.redirect(`${baseUrl}/pricing?error=offer_required`)
      }

      // Prevent re-purchasing owned tiers
      if (purchases[tier]) {
        return NextResponse.redirect(`${baseUrl}/billing?error=already_purchased`)
      }
    }

    // Build metadata with consent info
    const metadata: Record<string, string> = {
      tier,
      userEmail: email,
    }

    // Add consent tracking if provided
    if (consentTimestamp) {
      metadata.consentTimestamp = consentTimestamp
      metadata.agreementVersion = agreementVersion || '1.0'
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
      
      // Update customer metadata with consent info
      if (consentTimestamp) {
        await stripe.customers.update(customerId, {
          metadata: {
            ...customers.data[0].metadata,
            consentTimestamp,
            agreementVersion: agreementVersion || '1.0',
            consentType: 'self_representation_agreement',
          },
        })
      }
    } else {
      const customerData: Stripe.CustomerCreateParams = {
        email,
        metadata: consentTimestamp ? {
          consentTimestamp,
          agreementVersion: agreementVersion || '1.0',
          consentType: 'self_representation_agreement',
        } : {},
      }
      
      const customer = await stripe.customers.create(customerData)
      customerId = customer.id
    }

    // Trial flow: setup mode to collect card without charging
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

    // Paid tier flow
    const priceId = getPriceIdForTier(tier as Tier)
    if (!priceId) {
      return NextResponse.json(
        { error: 'Invalid tier configuration' },
        { status: 500 }
      )
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
      success_url: `${baseUrl}/access?session_id={CHECKOUT_SESSION_ID}&tier=${tier}`,
      cancel_url: `${baseUrl}/pricing`,
      metadata,
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
