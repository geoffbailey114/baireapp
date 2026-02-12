import { NextResponse } from 'next/server'
import Stripe from 'stripe'

// Cron job: charges expired trial users $995 for full access
// Run every hour via Vercel Cron

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export const dynamic = 'force-dynamic'

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
        const fullAccessPurchased = customer.metadata?.full_access_purchased_at
        const trialCanceled = customer.metadata?.trial_canceled_at
        const trialCharged = customer.metadata?.trial_charged_at

        // Also check legacy: if they already bought under old model, skip
        const legacyAccess = customer.metadata?.access_purchased_at

        // Skip if:
        // - No trial end time
        // - Trial hasn't ended yet
        // - No payment method on file
        // - Already purchased full access (new or legacy)
        // - Trial was canceled
        // - Already charged
        if (
          !trialEndsAt ||
          parseInt(trialEndsAt) > now ||
          !hasPaymentMethod ||
          fullAccessPurchased ||
          legacyAccess ||
          trialCanceled ||
          trialCharged
        ) {
          continue
        }

        // Trial expired — charge $995 for full access
        try {
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

          const paymentIntent = await stripe.paymentIntents.create({
            amount: 99500, // $995.00
            currency: 'usd',
            customer: customer.id,
            payment_method: paymentMethod.id,
            off_session: true,
            confirm: true,
            description: 'BAIRE Full Access — trial conversion',
            metadata: {
              tier: 'full_access',
              price_id: process.env.STRIPE_PRICE_FULL_ACCESS || '',
              conversion_type: 'trial_auto_charge',
            },
          })

          if (paymentIntent.status === 'succeeded') {
            await stripe.customers.update(customer.id, {
              metadata: {
                ...customer.metadata,
                trial_charged_at: now.toString(),
                full_access_purchased_at: now.toString(),
              },
            })

            chargedCustomers.push(customer.id)
            console.log(`Charged customer ${customer.id} for trial conversion ($995 Full Access)`)
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
