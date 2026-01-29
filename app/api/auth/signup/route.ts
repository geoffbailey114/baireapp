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

    // Hash password (in production, you'd store this more securely)
    const passwordHash = await hashPassword(password)

    // Calculate trial end (48 hours from now)
    let trialEndsAt = Math.floor(Date.now() / 1000) + (48 * 60 * 60)
    
    // Look up existing Stripe customer (may exist from comp access grant or previous signup)
    let stripeCustomerId: string | undefined
    let isComp = false
    
    try {
      const customers = await stripe.customers.list({
        email: normalizedEmail,
        limit: 1,
      })
      
      if (customers.data.length > 0) {
        const customer = customers.data[0]
        stripeCustomerId = customer.id
        
        // Check if this is a comp user
        if (customer.metadata?.comp_access === 'true') {
          isComp = true
        }
        
        // Get trial end from metadata if exists (preserve existing trial)
        if (customer.metadata?.trial_ends_at) {
          trialEndsAt = parseInt(customer.metadata.trial_ends_at)
        }
        
        // Store password hash in customer metadata for future logins
        await stripe.customers.update(customer.id, {
          metadata: {
            ...customer.metadata,
            password_hash: passwordHash,
            signup_at: new Date().toISOString(),
          },
        })
      } else {
        // No existing customer - create one
        const newCustomer = await stripe.customers.create({
          email: normalizedEmail,
          metadata: {
            password_hash: passwordHash,
            trial_ends_at: trialEndsAt.toString(),
            signup_at: new Date().toISOString(),
          },
        })
        stripeCustomerId = newCustomer.id
      }
    } catch (error) {
      console.error('Stripe customer lookup/create error:', error)
      // Continue without Stripe customer - user will just have trial access
    }

    // Create JWT with consent info
    const tokenPayload: Record<string, unknown> = {
      sub: normalizedEmail,
      email: normalizedEmail,
      trial_ends_at: trialEndsAt,
      stripe_customer_id: stripeCustomerId,
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
      isComp, // Let frontend know if this is a comp user
    })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Signup failed' },
      { status: 500 }
    )
  }
}
