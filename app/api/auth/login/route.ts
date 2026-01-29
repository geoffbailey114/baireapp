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
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password required' },
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
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    const customer = customers.data[0]
    
    // Get stored password hash from customer metadata
    const storedPasswordHash = customer.metadata?.password_hash
    
    if (!storedPasswordHash) {
      // No password set - user hasn't completed signup
      return NextResponse.json(
        { error: 'Account not found. Please sign up first.' },
        { status: 401 }
      )
    }

    // Verify password
    const passwordHash = await hashPassword(password)
    if (passwordHash !== storedPasswordHash) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Get trial end from metadata if exists
    let trialEndsAt: number | undefined
    if (customer.metadata?.trial_ends_at) {
      trialEndsAt = parseInt(customer.metadata.trial_ends_at)
    }

    // If no trial end stored, calculate new one (48 hours)
    if (!trialEndsAt) {
      trialEndsAt = Math.floor(Date.now() / 1000) + (48 * 60 * 60)
    }

    // Check if comp user
    const isComp = customer.metadata?.comp_access === 'true'

    // Create JWT
    const token = await new SignJWT({
      sub: normalizedEmail,
      email: normalizedEmail,
      stripe_customer_id: customer.id,
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
      maxAge: 60 * 60 * 24 * 30,
    })

    return NextResponse.json({ 
      success: true,
      isComp, // Let frontend know if this is a comp user
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    )
  }
}
