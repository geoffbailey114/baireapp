'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { Loader2 } from 'lucide-react'

export default function GoogleCallbackPage() {
  const { data: session, status } = useSession()
  const searchParams = useSearchParams()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function handleGoogleSignIn() {
      if (status === 'loading') return
      
      if (status === 'unauthenticated' || !session?.user?.email) {
        setError('Authentication failed. Please try again.')
        return
      }

      try {
        const email = session.user.email
        const tier = searchParams.get('tier') || 'trial'

        // Create account in our system
        const signupRes = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            password: null, // Google users don't have a password
            googleAuth: true,
            consentTimestamp: new Date().toISOString(),
            agreementVersion: '1.0',
          }),
        })

        const signupData = await signupRes.json()

        // If account already exists, that's okay - proceed to checkout or login
        if (!signupRes.ok && !signupData.error?.includes('already exists')) {
          throw new Error(signupData.error || 'Failed to create account')
        }

        // If account exists, check if they have active access
        if (signupData.error?.includes('already exists')) {
          // Redirect to login with a message
          window.location.href = '/login?message=account-exists'
          return
        }

        // Create Stripe checkout session
        const checkoutRes = await fetch('/api/stripe/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            tier,
            consentTimestamp: new Date().toISOString(),
            agreementVersion: '1.0',
            googleAuth: true,
          }),
        })

        const checkoutData = await checkoutRes.json()

        if (!checkoutRes.ok) {
          throw new Error(checkoutData.error || 'Failed to start checkout')
        }

        // Redirect to Stripe
        window.location.href = checkoutData.url
      } catch (err) {
        console.error('Google callback error:', err)
        setError(err instanceof Error ? err.message : 'Something went wrong')
      }
    }

    handleGoogleSignIn()
  }, [session, status, searchParams])

  if (error) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <a href="/signup" className="text-sage-600 hover:text-sage-700 underline">
            Back to signup
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin text-sage-600 mx-auto mb-4" />
        <p className="text-slate-600">Setting up your account...</p>
      </div>
    </div>
  )
}
