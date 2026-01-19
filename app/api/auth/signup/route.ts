import { NextResponse } from 'next/server'
import { SignJWT } from 'jose'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

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

    // Hash password (in production, you'd store this more securely)
    const passwordHash = await hashPassword(password)

    // Calculate trial end (48 hours from now)
    const trialEndsAt = Math.floor(Date.now() / 1000) + (48 * 60 * 60)

    // Create JWT with consent info
    const tokenPayload: Record<string, unknown> = {
      sub: normalizedEmail,
      email: normalizedEmail,
      trial_ends_at: trialEndsAt,
      password_hash: passwordHash,
    }

    // Add consent tracking if provided
    if (consentTimestamp) {
      tokenPayload.consent_timestamp = consentTimestamp
      tokenPayload.agreement_version = agreementVersion || '1.0'
    }

    const token = await new SignJWT(tokenPayload)
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
