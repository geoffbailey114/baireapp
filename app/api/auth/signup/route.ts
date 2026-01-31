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

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password + process.env.JWT_SECRET)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Buffer.from(hash).toString('hex')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { 
      email, 
      password,
      consentTimestamp,
      agreementVersion,
    } = body

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password required' },
        { status: 400 }
      )
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters' },
        { status: 400 }
      )
    }

    const normalizedEmail = email.toLowerCase().trim()

    // Check if user already exists in Stripe
    const existingCustomers = await stripe.customers.list({
      email: normalizedEmail,
      limit: 1,
    })

    if (existingCustomers.data.length > 0) {
      const existing = existingCustomers.data[0]
      // If they have a password hash, they already have an account
      if (existing.metadata?.password_hash) {
        return NextResponse.json(
          { error: 'An account with this email already exists. Please log in.' },
          { status: 400 }
        )
      }
    }

    // Hash password
    const passwordHash = await hashPassword(password)

    // Calculate trial end (48 hours from now)
    const trialEndsAt = Math.floor(Date.now() / 1000) + (48 * 60 * 60)

    // Build metadata
    const metadata: Record<string, string> = {
      password_hash: passwordHash,
      trial_ends_at: trialEndsAt.toString(),
      created_at: new Date().toISOString(),
    }

    // Add consent tracking if provided
    if (consentTimestamp) {
      metadata.consent_timestamp = consentTimestamp
      metadata.agreement_version = agreementVersion || '1.0'
    }

    // Create or update Stripe customer with password hash
    let customerId: string

    if (existingCustomers.data.length > 0) {
      // Update existing customer (they went through checkout but no password yet)
      customerId = existingCustomers.data[0].id
      await stripe.customers.update(customerId, { metadata })
    } else {
      // Create new customer
      const customer = await stripe.customers.create({
        email: normalizedEmail,
        metadata,
      })
      customerId = customer.id
    }

    // Create JWT
    const token = await new SignJWT({
      sub: normalizedEmail,
      email: normalizedEmail,
      stripe_customer_id: customerId,
      trial_ends_at: trialEndsAt,
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
      maxAge: 60 * 60 * 24 * 30, // 30 days
    })

    return NextResponse.json({ 
      success: true,
      trialEndsAt,
    })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Signup failed' },
      { status: 500 }
    )
  }
}
