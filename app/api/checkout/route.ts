import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { PRICE_AMOUNT, PRODUCT_NAME, APP_URL } from '@/lib/constants'

export async function POST() {
  try {
    const baseUrl = process.env.APP_BASE_URL || APP_URL

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: PRODUCT_NAME,
              description: 'Full access to BAIRE for your home-buying transaction. Educational guidance until closing.',
            },
            unit_amount: PRICE_AMOUNT * 100, // Stripe uses cents
          },
          quantity: 1,
        },
      ],
      customer_email: undefined, // Let customer enter email
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
