import { NextResponse } from 'next/server'

// This route previously handled auto-charging after trial expiry.
// In the new pricing model (48-hour trial + $500 at offer), we don't auto-charge.
// Users pay when they're ready to make an offer.

export const dynamic = 'force-dynamic'

const CRON_SECRET = process.env.CRON_SECRET

export async function POST(request: Request) {
  // Verify cron secret
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // No auto-charging in new pricing model
  // Trial ends naturally, users upgrade when ready to make an offer
  return NextResponse.json({
    success: true,
    message: 'No auto-charge in current pricing model. Users pay when ready to make an offer.',
    chargedCount: 0,
  })
}
