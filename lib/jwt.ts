import { SignJWT, jwtVerify, type JWTPayload } from 'jose'

export interface BAIREJWTPayload extends JWTPayload {
  paid: boolean
  email: string
  tier: string
  purchasePurpose: string
  createdAt: number
  expiryMode: string
}

const getJWTSecret = () => {
  const secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error('JWT_SECRET environment variable is required')
  }
  return new TextEncoder().encode(secret)
}

export async function signJWT(payload: Omit<BAIREJWTPayload, 'iat' | 'exp'>): Promise<string> {
  const secret = getJWTSecret()
  
  const token = await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    // Set expiry far in future since we use closing-based expiry
    .setExpirationTime('365d')
    .sign(secret)
  
  return token
}

export async function verifyJWT(token: string): Promise<BAIREJWTPayload | null> {
  try {
    const secret = getJWTSecret()
    const { payload } = await jwtVerify(token, secret)
    return payload as BAIREJWTPayload
  } catch (error) {
    console.error('JWT verification failed:', error)
    return null
  }
}

export function createJWTPayload(email: string): Omit<BAIREJWTPayload, 'iat' | 'exp'> {
  return {
    paid: true,
    email,
    tier: 'BAIRE',
    purchasePurpose: 'home-buying',
    createdAt: Date.now(),
    expiryMode: 'userClosing',
  }
}
