import { NextResponse } from 'next/server'
import { SignJWT } from 'jose'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET)
const JWT_COOKIE_NAME = 'baire_auth'

// Simple in-memory store for demo (in production, you'd use Stripe customer metadata)
// This is acceptable since Stripe is the source of truth for access
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

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters' },
        { status: 400 }
      )
    }

    // Check if user already exists (in production, check Stripe customers)
    const normalizedEmail = email.toLowerCase().trim()
    
    if (users.has(normalizedEmail)) {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 409 }
      )
    }

    // Create user (in production, this would be stored in Stripe customer metadata)
    const passwordHash = await hashPassword(password)
    users.set(normalizedEmail, { passwordHash })

    // Calculate trial end (48 hours from now)
    const trialEndsAt = Math.floor(Date.now() / 1000) + (48 * 60 * 60)

    // Create JWT
    const token = await new SignJWT({
      sub: normalizedEmail, // Using email as user ID (simple approach)
      email: normalizedEmail,
      trial_ends_at: trialEndsAt,
      // stripe_customer_id will be added after checkout
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










