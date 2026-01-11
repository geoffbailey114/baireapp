import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { stripe } from '@/lib/stripe'
import { signJWT, createJWTPayload } from '@/lib/jwt'
import { setAuthCookie, getAuthCookie } from '@/lib/cookies'
import { verifyJWT } from '@/lib/jwt'
import { APP_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Access Granted',
  description: 'Welcome to BAIRE. Your AI home-buying consultant is ready.',
  robots: {
    index: false,
    follow: false,
  },
}

interface AccessPageProps {
  searchParams: Promise<{ session_id?: string }>
}

export default async function AccessPage({ searchParams }: AccessPageProps) {
  const params = await searchParams
  const sessionId = params.session_id

  // Check if user already has valid auth
  const existingToken = await getAuthCookie()
  if (existingToken) {
    const payload = await verifyJWT(existingToken)
    if (payload?.paid) {
      // Already authenticated, show welcome back
      return <AccessContent email={payload.email} isNewPurchase={false} />
    }
  }

  // No existing auth, need session_id to verify purchase
  if (!sessionId) {
    redirect('/pricing')
  }

  try {
    // Verify the Stripe session
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid') {
      redirect('/pricing')
    }

    const email = session.customer_email || session.customer_details?.email

    if (!email) {
      console.error('No email found in Stripe session')
      redirect('/pricing')
    }

    // Create and set JWT
    const jwtPayload = createJWTPayload(email)
    const token = await signJWT(jwtPayload)
    await setAuthCookie(token)

    return <AccessContent email={email} isNewPurchase={true} />
  } catch (error) {
    console.error('Error verifying session:', error)
    redirect('/pricing')
  }
}

function AccessContent({ 
  email, 
  isNewPurchase 
}: { 
  email: string
  isNewPurchase: boolean 
}) {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage-100 mb-6">
              <CheckCircle className="h-8 w-8 text-sage-600" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {isNewPurchase ? 'Welcome to BAIRE!' : 'Welcome Back!'}
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              {isNewPurchase 
                ? 'Your payment was successful. You now have full access to BAIRE for your home-buying journey.'
                : 'You have active access to BAIRE. Continue your home-buying journey.'}
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Account</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-slate-500">Email</dt>
                  <dd className="mt-1 text-slate-900">{email}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-slate-500">Plan</dt>
                  <dd className="mt-1 text-slate-900">BAIRE Buyer Consultant</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-slate-500">Access</dt>
                  <dd className="mt-1 text-slate-900">
                    Active until you close on your home
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card className="mb-8 border-sage-200 bg-sage-50">
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                BAIRE is here to help you understand every step of your home-buying 
                journey. Here are some things you can ask about:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Understanding purchase agreements and contracts</li>
                <li>• What to expect during home inspections</li>
                <li>• Explaining closing costs and fees</li>
                <li>• Questions to ask your mortgage lender</li>
                <li>• Understanding contingencies and timelines</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button asChild size="xl">
              <Link href="/consultant">
                Start Chatting with BAIRE
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              Remember: BAIRE provides educational information only. For specific 
              legal, financial, or professional advice, please consult licensed 
              professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
