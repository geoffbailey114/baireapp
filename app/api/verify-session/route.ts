import { NextResponse } from 'next/server'
import { getUserAccess } from '@/lib/access'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // Get full access info from Stripe (source of truth)
    const access = await getUserAccess()

    if (!access.email) {
      return NextResponse.json({
        authenticated: false,
        paid: false,
      })
    }

    // User is "paid" if they have comp access OR have purchased access/offer tier
    const isPaid = access.isComp || access.purchases.access || access.purchases.offer || access.purchases.closing
    
    return NextResponse.json({
      authenticated: true,
      paid: isPaid,
      isComp: access.isComp,
      email: access.email,
      tier: access.tier,
      trialEndsAt: access.trialEndsAt,
      isTrialExpired: access.isTrialExpired,
    })
  } catch (error) {
    console.error('Session verification error:', error)
    return NextResponse.json({
      authenticated: false,
      paid: false,
    })
  }
}
