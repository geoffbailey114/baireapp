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

// Same in-memory store (would be replaced with Stripe customer lookup in production)
const users = new Map<string, { passwordHash: string }>()

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
    const user = users.get(normalizedEmail)

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    const passwordHash = await hashPassword(password)
    if (passwordHash !== user.passwordHash) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Look up Stripe customer by email
    let stripeCustomerId: string | undefined
    let trialEndsAt: number | undefined

    try {
      const customers = await stripe.customers.list({
        email: normalizedEmail,
        limit: 1,
      })

      if (customers.data.length > 0) {
        const customer = customers.data[0]
        stripeCustomerId = customer.id
        
        // Get trial end from metadata if exists
        if (customer.metadata?.trial_ends_at) {
          trialEndsAt = parseInt(customer.metadata.trial_ends_at)
        }
      }
    } catch (error) {
      console.error('Error fetching Stripe customer:', error)
    }

    // If no trial end stored, calculate new one (7 days)
    if (!trialEndsAt) {
      trialEndsAt = Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60)
    }

    // Create JWT
    const token = await new SignJWT({
      sub: normalizedEmail,
      email: normalizedEmail,
      stripe_customer_id: stripeCustomerId,
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

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    )
  }
}
