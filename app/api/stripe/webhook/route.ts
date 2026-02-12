import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: Request) {
  try {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')!

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return NextResponse.json(
        { error: 'Webhook signature verification failed' },
        { status: 400 }
      )
    }

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        console.log('Checkout completed:', {
          sessionId: session.id,
          customerId: session.customer,
          tier: session.metadata?.tier,
        })

        if (session.customer && session.metadata?.tier) {
          const customerId = typeof session.customer === 'string' 
            ? session.customer 
            : session.customer.id

          const tier = session.metadata.tier
          const customer = await stripe.customers.retrieve(customerId)
          if (customer.deleted) break

          const existingMetadata = customer.metadata || {}
          const updates: Record<string, string> = { ...existingMetadata }

          if (tier === 'trial') {
            updates.trial_started_at = Math.floor(Date.now() / 1000).toString()
            updates.has_payment_method = 'true'
            // trial_ends_at is set during signup
          } else if (tier === 'full_access') {
            updates.full_access_purchased_at = Math.floor(Date.now() / 1000).toString()
          }
          // Legacy support: still handle old tiers if they come through
          else if (tier === 'access') {
            updates.access_purchased_at = Math.floor(Date.now() / 1000).toString()
          } else if (tier === 'offer' || tier === 'showings') {
            updates.offer_purchased_at = Math.floor(Date.now() / 1000).toString()
          }

          await stripe.customers.update(customerId, { metadata: updates })
          console.log('Customer metadata updated:', updates)
        }
        break
      }

      case 'setup_intent.succeeded': {
        const setupIntent = event.data.object as Stripe.SetupIntent
        console.log('Setup intent succeeded:', {
          id: setupIntent.id,
          customerId: setupIntent.customer,
          paymentMethod: setupIntent.payment_method,
        })

        if (setupIntent.customer && setupIntent.payment_method) {
          const customerId = typeof setupIntent.customer === 'string'
            ? setupIntent.customer
            : setupIntent.customer.id

          const paymentMethodId = typeof setupIntent.payment_method === 'string'
            ? setupIntent.payment_method
            : setupIntent.payment_method.id

          await stripe.customers.update(customerId, {
            invoice_settings: {
              default_payment_method: paymentMethodId,
            },
          })

          console.log('Default payment method set for customer:', customerId)
        }
        break
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.log('Payment succeeded:', {
          id: paymentIntent.id,
          amount: paymentIntent.amount,
          customerId: paymentIntent.customer,
          tier: paymentIntent.metadata?.tier,
        })

        // If this is a trial conversion or direct purchase, update metadata
        if (paymentIntent.customer && paymentIntent.metadata?.tier === 'full_access') {
          const customerId = typeof paymentIntent.customer === 'string'
            ? paymentIntent.customer
            : paymentIntent.customer.id

          const customer = await stripe.customers.retrieve(customerId)
          if (!customer.deleted) {
            await stripe.customers.update(customerId, {
              metadata: {
                ...customer.metadata,
                full_access_purchased_at: Math.floor(Date.now() / 1000).toString(),
              },
            })
          }
        }
        break
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.error('Payment failed:', {
          id: paymentIntent.id,
          customerId: paymentIntent.customer,
          error: paymentIntent.last_payment_error?.message,
        })
        break
      }

      default:
        console.log('Unhandled event type:', event.type)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}
