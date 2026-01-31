'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ArrowRight, Loader2, Eye, EyeOff, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { UserAgreement } from '@/components/user-agreement'


function SignupForm() {
  const searchParams = useSearchParams()
  const tierParam = searchParams.get('tier')
  
  // Determine which tier to checkout for
  const tier = tierParam === 'access' ? 'access' : 'trial'
  const isAccessTier = tier === 'access'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [agreementAccepted, setAgreementAccepted] = useState(false)
  const [agreementError, setAgreementError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate agreement checkbox
    if (!agreementAccepted) {
      setAgreementError(true)
      return
    }
    
    setLoading(true)
    setError(null)
    setAgreementError(false)

    // Capture consent timestamp
    const consentTimestamp = new Date().toISOString()

    try {
      // First create the account
      const signupRes = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          password,
          consentTimestamp,
          agreementVersion: '1.0',
        }),
      })

      const signupData = await signupRes.json()

      if (!signupRes.ok) {
        throw new Error(signupData.error || 'Failed to create account')
      }

      // Then redirect to Stripe checkout for the appropriate tier
      const checkoutRes = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email,
          tier,
          consentTimestamp,
          agreementVersion: '1.0',
        }),
      })

      const checkoutData = await checkoutRes.json()

      if (!checkoutRes.ok) {
        throw new Error(checkoutData.error || 'Failed to start checkout')
      }

      // Redirect to Stripe
      window.location.href = checkoutData.url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 mb-4 border border-amber-200">
          <Clock className="h-3.5 w-3.5" />
          Limited Time Pricing
        </span>
        <h1 className="text-3xl font-bold text-slate-900">
          {isAccessTier ? 'Get Started with Access' : 'Start your free trial'}
        </h1>
        <p className="mt-2 text-slate-600">
          {isAccessTier 
            ? 'Skip the trial and get immediate access for $99.' 
            : '48 hours free. No charge if you cancel.'}
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* User Agreement */}
          <UserAgreement
            checked={agreementAccepted}
            onCheckedChange={(checked) => {
              setAgreementAccepted(checked)
              if (checked) setAgreementError(false)
            }}
            error={agreementError}
          />

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            size="lg"
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Setting up...
              </>
            ) : (
              <>
                {isAccessTier ? 'Continue to Payment ($99)' : 'Start Free Trial'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          <p className="text-center text-sm text-slate-500">
            {isAccessTier 
              ? 'You will be charged $99 after completing checkout.'
              : 'Credit card required · No charge today · Cancel within 48 hours to avoid billing'}
          </p>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-200">
          <p className="text-center text-sm text-slate-600">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-sage-600 hover:text-sage-700">
              Log in
            </Link>
          </p>
        </div>

        {/* Toggle option */}
        <div className="mt-4 text-center">
          {isAccessTier ? (
            <Link href="/signup" className="text-sm text-slate-500 hover:text-slate-700 underline">
              ← Start with free trial instead
            </Link>
          ) : (
            <Link href="/signup?tier=access" className="text-sm text-slate-500 hover:text-slate-700 underline">
              Skip trial and start with Access ($99) →
            </Link>
          )}
        </div>

        {/* Pricing summary */}
        <div className="mt-4 p-3 bg-slate-50 rounded-lg text-center">
          <p className="text-xs text-slate-600">
            <span className="font-semibold text-sage-700">$599 flat fee</span>{' '}
            — $99 to start · $500 when you make an offer
          </p>
        </div>
      </div>
    </div>
  )
}

function SignupFormFallback() {
  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Start your free trial</h1>
        <p className="mt-2 text-slate-600">48 hours free. Cancel anytime.</p>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-sage-600" />
        </div>
      </div>
    </div>
  )
}

export default function SignupPage() {
  return (
    
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <Suspense fallback={<SignupFormFallback />}>
        <SignupForm />
      </Suspense>
    </div>
    
  )
}
