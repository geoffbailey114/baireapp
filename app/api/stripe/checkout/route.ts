import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { jwtVerify, SignJWT } from 'jose'
import Stripe from 'stripe'

export const dynamic = 'force-dynamic'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET)
const JWT_COOKIE_NAME = 'baire_auth'

interface JWTPayload {
  sub: string
  email: string
  stripe_customer_id?: string
  trial_ends_at?: number
}

async function getJWTPayload(): Promise<JWTPayload | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get(JWT_COOKIE_NAME)?.value
    if (!token) return null
    
    const { payload } = await jwtVerify(token, JWT_SECRET)
    return payload as unknown as JWTPayload
  } catch {
    return null
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const tier = searchParams.get('tier') || 'trial'
    
    const jwt = await getJWTPayload()
    
    if (!jwt) {
      return NextResponse.redirect(new URL('/signup', request.url))
    }

    const baseUrl = process.env.APP_BASE_URL || 'https://baireapp.com'

    // Get or create Stripe customer
    let customerId = jwt.stripe_customer_id

    if (!customerId) {
      // Check if customer exists by email
      const existingCustomers = await stripe.customers.list({
        email: jwt.email,
        limit: 1,
      })

      if (existingCustomers.data.length > 0) {
        customerId = existingCustomers.data[0].id
      } else {
        // Create new customer
        const customer = await stripe.customers.create({
          email: jwt.email,
          metadata: {
            user_id: jwt.sub,
            trial_ends_at: jwt.trial_ends_at?.toString() || '',
          },
        })
        customerId = customer.id
      }

      // Update JWT with customer ID
      const newToken = await new SignJWT({
        ...jwt,
        stripe_customer_id: customerId,
      })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('30d')
        .sign(JWT_SECRET)

      const cookieStore = await cookies()
      cookieStore.set(JWT_COOKIE_NAME, newToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 30,
      })
    }

    // Determine price and settings based on tier
    let priceId: string
    let mode: 'payment' | 'setup' = 'payment'
    let trialEnd: number | undefined
    let successUrl: string

    switch (tier) {
      case 'trial':
        // For trial, we use setup mode to capture card without charging
        mode = 'setup'
        priceId = '' // No price for setup mode
        trialEnd = Math.floor(Date.now() / 1000) + (48 * 60 * 60)
        successUrl = `${baseUrl}/consultant?trial_started=true`
        break
      
      case 'access':
        priceId = process.env.STRIPE_PRICE_ACCESS!
        successUrl = `${baseUrl}/consultant?upgraded=access`
        break
      
      case 'offer':
        // Support both STRIPE_PRICE_OFFER and STRIPE_PRICE_SHOWINGS for backwards compatibility
        priceId = process.env.STRIPE_PRICE_OFFER || process.env.STRIPE_PRICE_SHOWINGS!
        successUrl = `${baseUrl}/consultant?upgraded=offer`
        break
      
      case 'closing':
        priceId = process.env.STRIPE_PRICE_CLOSING!
        successUrl = `${baseUrl}/consultant?upgraded=closing`
        break
      
      default:
        return NextResponse.json({ error: 'Invalid tier' }, { status: 400 })
    }

    // Create checkout session
    let session: Stripe.Checkout.Session

    if (mode === 'setup') {
      // Setup mode for trial (capture card without charging)
      session = await stripe.checkout.sessions.create({
        mode: 'setup',
        customer: customerId,
        payment_method_types: ['card'],
        success_url: successUrl,
        cancel_url: `${baseUrl}/pricing`,
        metadata: {
          user_id: jwt.sub,
          tier: 'trial',
          trial_ends_at: trialEnd?.toString() || '',
        },
      })
    } else {
      // Payment mode for tier purchases
      session = await stripe.checkout.sessions.create({
        mode: 'payment',
        customer: customerId,
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        success_url: successUrl,
        cancel_url: `${baseUrl}/pricing`,
        metadata: {
          user_id: jwt.sub,
          tier,
          price_id: priceId,
        },
      })
    }

    // Redirect to Stripe Checkout
    return NextResponse.redirect(session.url!)
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
