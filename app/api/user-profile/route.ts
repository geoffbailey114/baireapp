import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'
import { 
  UserProfile, 
  DEFAULT_PROFILE, 
  serializeProfile, 
  deserializeProfile 
} from '@/lib/user-profile'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export const dynamic = 'force-dynamic'

interface JWTPayload {
  sub: string
  email: string
  stripe_customer_id?: string
}

async function getJWTPayload(): Promise<JWTPayload | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('baire_auth')?.value
    
    if (!token) return null
    
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    const { payload } = await jwtVerify(token, secret)
    
    return payload as unknown as JWTPayload
  } catch {
    return null
  }
}

// GET - Retrieve user profile
export async function GET() {
  try {
    const jwt = await getJWTPayload()
    
    if (!jwt) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      )
    }

    if (!jwt.stripe_customer_id) {
      // User exists but no Stripe customer yet - return default profile
      return NextResponse.json({
        profile: DEFAULT_PROFILE,
        hasStripeCustomer: false,
      })
    }

    // Fetch customer from Stripe
    const customer = await stripe.customers.retrieve(jwt.stripe_customer_id)
    
    if ('deleted' in customer) {
      return NextResponse.json({
        profile: DEFAULT_PROFILE,
        hasStripeCustomer: false,
      })
    }

    const profile = deserializeProfile(customer.metadata)

    return NextResponse.json({
      profile,
      hasStripeCustomer: true,
    })
  } catch (error) {
    console.error('Error fetching profile:', error)
    return NextResponse.json(
      { error: 'Failed to fetch profile' },
      { status: 500 }
    )
  }
}

// POST - Save user profile
export async function POST(request: NextRequest) {
  try {
    const jwt = await getJWTPayload()
    
    if (!jwt) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const profile = body.profile as UserProfile

    if (!profile) {
      return NextResponse.json(
        { error: 'Profile data required' },
        { status: 400 }
      )
    }

    let customerId = jwt.stripe_customer_id

    // Create Stripe customer if doesn't exist
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: jwt.email,
        metadata: serializeProfile(profile),
      })
      customerId = customer.id
      
      // Note: In a real app, we'd update the JWT here
      // For now, the customer ID will be picked up on next login
    } else {
      // Update existing customer metadata
      await stripe.customers.update(customerId, {
        metadata: serializeProfile(profile),
      })
    }

    return NextResponse.json({
      success: true,
      profile,
    })
  } catch (error) {
    console.error('Error saving profile:', error)
    return NextResponse.json(
      { error: 'Failed to save profile' },
      { status: 500 }
    )
  }
}
