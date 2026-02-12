'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { ArrowRight, Loader2, Eye, EyeOff, Shield, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { UserAgreement } from '@/components/user-agreement'

// Google Icon Component
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

function SignupForm() {
  const searchParams = useSearchParams()
  
  // Default to full access ($995)
  const tier = 'access'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [agreementAccepted, setAgreementAccepted] = useState(false)
  const [agreementError, setAgreementError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGoogleSignIn = async () => {
    if (!agreementAccepted) {
      setAgreementError(true)
      return
    }
    
    setGoogleLoading(true)
    setError(null)
    setAgreementError(false)
    
    try {
      await signIn('google', {
        callbackUrl: `/auth/google-callback?tier=${tier}`,
      })
    } catch (err) {
      setError('Failed to sign in with Google')
      setGoogleLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!agreementAccepted) {
      setAgreementError(true)
      return
    }
    
    setLoading(true)
    setError(null)
    setAgreementError(false)

    const consentTimestamp = new Date().toISOString()

    try {
      const signupRes = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          password,
          consentTimestamp,
          agreementVersion: '2.0',
        }),
      })

      const signupData = await signupRes.json()

      if (!signupRes.ok) {
        throw new Error(signupData.error || 'Failed to create account')
      }

      // Redirect to Stripe checkout for $995 full access
      const checkoutRes = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email,
          tier,
          consentTimestamp,
          agreementVersion: '2.0',
        }),
      })

      const checkoutData = await checkoutRes.json()

      if (!checkoutRes.ok) {
        throw new Error(checkoutData.error || 'Failed to start checkout')
      }

      window.location.href = checkoutData.url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Get started with BAIRE
        </h1>
        <p className="mt-2 text-slate-600">
          Full access. $995 one time. 30-day money-back guarantee.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        {/* Google Sign-In Button */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={googleLoading || loading}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {googleLoading ? (
            <Loader2 className="h-5 w-5 animate-spin text-slate-600" />
          ) : (
            <GoogleIcon className="h-5 w-5" />
          )}
          <span className="font-medium text-slate-700">Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-3 bg-white text-slate-500">or</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
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
          <div className={`flex items-start gap-3 p-4 rounded-lg ${agreementError ? 'bg-red-50 border border-red-200' : 'bg-slate-50'}`}>
            <input
              type="checkbox"
              id="agreement"
              checked={agreementAccepted}
              onChange={(e) => {
                setAgreementAccepted(e.target.checked)
                if (e.target.checked) setAgreementError(false)
              }}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-sage-600 focus:ring-sage-500"
            />
            <label htmlFor="agreement" className="text-sm text-slate-600">
              I agree to the{' '}
              <Link href="/terms" className="text-sage-600 underline hover:text-sage-700">Terms of Service</Link>
              {' '}and{' '}
              <Link href="/privacy" className="text-sage-600 underline hover:text-sage-700">Privacy Policy</Link>
            </label>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={loading || googleLoading}
            size="lg"
            className="w-full rounded-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Setting up...
              </>
            ) : (
              <>
                Get Started — $995
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-200">
          <p className="text-center text-sm text-slate-600">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-sage-600 hover:text-sage-700">
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* Trust props below card */}
      <div className="mt-6 space-y-4">
        <div className="flex items-start gap-3 bg-sage-50 border border-sage-100 rounded-xl p-4">
          <Shield className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-slate-900">30-day money-back guarantee</p>
            <p className="text-sm text-slate-600">If BAIRE doesn&apos;t deliver, you get a full refund. No questions asked.</p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400">
          {['One payment', 'Instant access', 'Keep forever', 'No buyer\'s agreement'].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <Check className="h-3 w-3" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function SignupFormFallback() {
  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Get started with BAIRE</h1>
        <p className="mt-2 text-slate-600">Full access. $995 one time. 30-day money-back guarantee.</p>
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
