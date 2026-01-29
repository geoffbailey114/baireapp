import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyJWT } from '@/lib/jwt'
import { JWT_COOKIE_NAME } from '@/lib/constants'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get(JWT_COOKIE_NAME)?.value

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
