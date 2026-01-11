import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export async function POST() {
  try {
    const baseUrl = process.env.APP_BASE_URL || 'https://baireapp.vercel.app'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'BAIRE Buyer Consultant',
              description: 'Full access to BAIRE for your home-buying transaction. Educational guidance until closing.',
            },
            unit_amount: 59900,
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/access?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/pricing`,
      metadata: {
        product: 'BAIRE Buyer Consultant',
        purchasePurpose: 'home-buying',
      },
    })

    if (!session.url) {
      return NextResponse.json(
        { error: 'Failed to create checkout session' },
        { status: 500 }
      )
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
