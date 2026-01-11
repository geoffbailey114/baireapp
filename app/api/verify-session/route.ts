import { NextResponse } from 'next/server'
import { verifyJWT } from '@/lib/jwt'
import { getAuthCookie } from '@/lib/cookies'

export async function GET() {
  try {
    const token = await getAuthCookie()

    if (!token) {
      return NextResponse.json({
        authenticated: false,
        paid: false,
      })
    }

    const payload = await verifyJWT(token)

    if (!payload) {
      return NextResponse.json({
        authenticated: false,
        paid: false,
      })
    }

    return NextResponse.json({
      authenticated: true,
      paid: payload.paid === true,
      email: payload.email,
      tier: payload.tier,
      createdAt: payload.createdAt,
    })
  } catch (error) {
    console.error('Session verification error:', error)
    return NextResponse.json({
      authenticated: false,
      paid: false,
    })
  }
}
