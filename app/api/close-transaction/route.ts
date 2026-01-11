import { NextResponse } from 'next/server'
import { verifyJWT } from '@/lib/jwt'
import { getAuthCookie, clearAuthCookie } from '@/lib/cookies'

export async function POST() {
  try {
    const token = await getAuthCookie()

    if (!token) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      )
    }

    const payload = await verifyJWT(token)

    if (!payload || !payload.paid) {
      return NextResponse.json(
        { error: 'Not authorized' },
        { status: 403 }
      )
    }

    // Log the closing event
    console.log('Transaction closed:', {
      email: payload.email,
      createdAt: new Date(payload.createdAt).toISOString(),
      closedAt: new Date().toISOString(),
    })

    // Clear the auth cookie to invalidate access
    await clearAuthCookie()

    // In a production app with DB, you would:
    // 1. Mark the user's subscription as closed
    // 2. Store closing timestamp
    // 3. Send closing confirmation email
    // 4. Generate any closing reports

    return NextResponse.json({
      success: true,
      message: 'Transaction marked as closed. Congratulations on your new home!',
    })
  } catch (error) {
    console.error('Close transaction error:', error)
    return NextResponse.json(
      { error: 'Failed to close transaction' },
      { status: 500 }
    )
  }
}
