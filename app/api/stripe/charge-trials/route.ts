import { NextResponse } from 'next/server'
import Stripe from 'stripe'

// This route can be called by a cron job (e.g., Vercel Cron) to charge trial users
// Run every hour to check for expired trials

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export const dynamic = 'force-dynamic'

// Secure this endpoint with a secret key
const CRON_SECRET = process.env.CRON_SECRET

export async function POST(request: Request) {
  try {
    // Verify cron secret
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const now = Math.floor(Date.now() / 1000)
    const chargedCustomers: string[] = []
    const errors: string[] = []

    // List all customers with trial_ends_at in metadata
    let hasMore = true
    let startingAfter: string | undefined

    while (hasMore) {
      const customers = await stripe.customers.list({
        limit: 100,
        starting_after: startingAfter,
      })

      for (const customer of customers.data) {
        const trialEndsAt = customer.metadata?.trial_ends_at
        const hasPaymentMethod = customer.metadata?.has_payment_method === 'true'
        const accessPurchased = customer.metadata?.access_purchased_at
        const trialCharged = customer.metadata?.trial_charged_at

        // Skip if:
        // - No trial end time
        // - Trial hasn't ended yet
        // - No payment method on file
        // - Already purchased access
        // - Already charged for trial conversion
        if (
          !trialEndsAt ||
          parseInt(trialEndsAt) > now ||
          !hasPaymentMethod ||
          accessPurchased ||
          trialCharged
        ) {
          continue
        }

        // Trial has ended, charge the customer $99 for Access
        try {
          // Get the default payment method
          const paymentMethods = await stripe.paymentMethods.list({
            customer: customer.id,
            type: 'card',
            limit: 1,
          })

          if (paymentMethods.data.length === 0) {
            errors.push(`No payment method for customer ${customer.id}`)
            continue
          }

          const paymentMethod = paymentMethods.data[0]

          // Create a payment intent and charge immediately
          const paymentIntent = await stripe.paymentIntents.create({
            amount: 9900, // $99.00
            currency: 'usd',
            customer: customer.id,
            payment_method: paymentMethod.id,
            off_session: true,
            confirm: true,
            description: 'BAIRE Access - Trial conversion',
            metadata: {
              tier: 'access',
              price_id: process.env.STRIPE_PRICE_ACCESS || '',
              conversion_type: 'trial_auto_charge',
            },
          })

          if (paymentIntent.status === 'succeeded') {
            // Update customer metadata
            await stripe.customers.update(customer.id, {
              metadata: {
                ...customer.metadata,
                trial_charged_at: now.toString(),
                access_purchased_at: now.toString(),
              },
            })

            chargedCustomers.push(customer.id)
            console.log(`Charged customer ${customer.id} for trial conversion ($99 Access)`)
          }
        } catch (chargeError) {
          const errorMessage = chargeError instanceof Error ? chargeError.message : 'Unknown error'
          errors.push(`Failed to charge customer ${customer.id}: ${errorMessage}`)
          console.error(`Failed to charge customer ${customer.id}:`, chargeError)
        }
      }

      hasMore = customers.has_more
      if (customers.data.length > 0) {
        startingAfter = customers.data[customers.data.length - 1].id
      }
    }

    return NextResponse.json({
      success: true,
      chargedCount: chargedCustomers.length,
      chargedCustomers,
      errors,
    })
  } catch (error) {
    console.error('Cron job error:', error)
    return NextResponse.json(
      { error: 'Cron job failed' },
      { status: 500 }
    )
  }
}
