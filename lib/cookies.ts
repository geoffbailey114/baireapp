import { cookies } from 'next/headers'
import { JWT_COOKIE_NAME } from './constants'

export async function setAuthCookie(token: string): Promise<void> {
  const cookieStore = await cookies()
  
  cookieStore.set(JWT_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year (closing-based expiry)
  })
}

export async function getAuthCookie(): Promise<string | undefined> {
  const cookieStore = await cookies()
  return cookieStore.get(JWT_COOKIE_NAME)?.value
}

export async function clearAuthCookie(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(JWT_COOKIE_NAME)
}
