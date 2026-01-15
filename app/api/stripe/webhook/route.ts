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

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        console.log('Checkout completed:', {
          sessionId: session.id,
          customerId: session.customer,
          tier: session.metadata?.tier,
          priceId: session.metadata?.price_id,
        })

        // Update customer metadata with purchase info
        if (session.customer && session.metadata?.tier) {
          const customerId = typeof session.customer === 'string' 
            ? session.customer 
            : session.customer.id

          const tier = session.metadata.tier

          // Get existing metadata
          const customer = await stripe.customers.retrieve(customerId)
          if (customer.deleted) break

          const existingMetadata = customer.metadata || {}

          // Update metadata to track purchases
          const updates: Record<string, string> = {
            ...existingMetadata,
          }

          if (tier === 'trial') {
            updates.trial_started_at = Math.floor(Date.now() / 1000).toString()
            updates.trial_ends_at = session.metadata.trial_ends_at || ''
            updates.has_payment_method = 'true'
          } else if (tier === 'access') {
            updates.access_purchased_at = Math.floor(Date.now() / 1000).toString()
          } else if (tier === 'showings') {
            updates.showings_purchased_at = Math.floor(Date.now() / 1000).toString()
          } else if (tier === 'closing') {
            updates.closing_purchased_at = Math.floor(Date.now() / 1000).toString()
          }

          await stripe.customers.update(customerId, {
            metadata: updates,
          })

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

        // Attach the payment method as default for future charges
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
          priceId: paymentIntent.metadata?.price_id,
        })
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

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        console.log('Subscription event:', {
          type: event.type,
          subscriptionId: subscription.id,
          status: subscription.status,
          customerId: subscription.customer,
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
