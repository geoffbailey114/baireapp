import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'

export const dynamic = 'force-dynamic'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET)

async function getJWTPayload() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('baire_auth')?.value
    if (!token) return null
    const { payload } = await jwtVerify(token, JWT_SECRET)
    return payload as { sub: string; email: string; stripe_customer_id?: string }
  } catch {
    return null
  }
}

export async function POST(request: Request) {
  try {
    const jwt = await getJWTPayload()
    
    if (!jwt) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const { customerId } = await request.json()

    // Verify the customer ID matches the logged-in user
    if (customerId !== jwt.stripe_customer_id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    // Get the customer
    const customer = await stripe.customers.retrieve(customerId)
    
    if (customer.deleted) {
      return NextResponse.json({ error: 'Customer not found' }, { status: 404 })
    }

    // Mark trial as canceled in metadata
    // The user keeps access until trial_ends_at, but won't be charged
    await stripe.customers.update(customerId, {
      metadata: {
        ...customer.metadata,
        trial_canceled_at: Math.floor(Date.now() / 1000).toString(),
        has_payment_method: 'false', // This prevents auto-charge
      },
    })

    // Remove payment methods to prevent future charges
    const paymentMethods = await stripe.paymentMethods.list({
      customer: customerId,
      type: 'card',
    })

    for (const pm of paymentMethods.data) {
      await stripe.paymentMethods.detach(pm.id)
    }

    console.log('Trial canceled for customer:', customerId)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Cancel trial error:', error)
    return NextResponse.json(
      { error: 'Failed to cancel trial' },
      { status: 500 }
    )
  }
}
