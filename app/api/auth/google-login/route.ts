import { NextResponse } from 'next/server'
import { SignJWT } from 'jose'
import { cookies } from 'next/headers'
import Stripe from 'stripe'

export const dynamic = 'force-dynamic'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET)
const JWT_COOKIE_NAME = 'baire_auth'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email required' },
        { status: 400 }
      )
    }

    const normalizedEmail = email.toLowerCase().trim()

    // Look up Stripe customer by email
    const customers = await stripe.customers.list({
      email: normalizedEmail,
      limit: 1,
    })

    if (customers.data.length === 0) {
      return NextResponse.json(
        { error: 'USER_NOT_FOUND' },
        { status: 404 }
      )
    }

    const customer = customers.data[0]

    // Get trial end from metadata if exists
    let trialEndsAt: number | undefined
    if (customer.metadata?.trial_ends_at) {
      trialEndsAt = parseInt(customer.metadata.trial_ends_at)
    }

    // If no trial end stored, calculate new one (7 days)
    if (!trialEndsAt) {
      trialEndsAt = Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60)
    }

    // Determine access level from Stripe metadata
    const isComp = customer.metadata?.comp_access === 'true'
    const hasPaid = customer.metadata?.paid === 'true' || customer.metadata?.tier === 'access' || customer.metadata?.tier === 'offer'
    
    // Determine tier
    let tier: 'trial' | 'access' | 'offer' | 'comp' = 'trial'
    if (isComp) {
      tier = 'comp'
    } else if (customer.metadata?.tier === 'offer') {
      tier = 'offer'
    } else if (customer.metadata?.tier === 'access' || hasPaid) {
      tier = 'access'
    }

    // Create JWT with all access info
    const token = await new SignJWT({
      sub: normalizedEmail,
      email: normalizedEmail,
      stripe_customer_id: customer.id,
      trial_ends_at: trialEndsAt,
      paid: isComp || hasPaid,
      tier: tier,
      isComp: isComp,
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('30d')
      .sign(JWT_SECRET)

    // Set HttpOnly cookie
    const cookieStore = await cookies()
    cookieStore.set(JWT_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Google login error:', error)
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    )
  }
}
