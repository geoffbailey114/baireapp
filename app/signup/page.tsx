'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Signup failed')
      }

      // Redirect to checkout to capture card and start trial
      router.push('/api/stripe/checkout?tier=trial')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50/50 to-white py-20">
      <div className="container">
        <div className="mx-auto max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900">
              Start Your Free Trial
            </h1>
            <p className="mt-2 text-slate-600">
              48 hours of full access to BAIRE
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="password" 
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-colors"
                  placeholder="At least 8 characters"
                />
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                size="xl" 
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  <>
                    Continue to Payment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500">
                Credit card required · No charge today · Cancel within 48 hours to avoid billing
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 text-center">
              <p className="text-sm text-slate-600">
                Already have an account?{' '}
                <Link href="/login" className="text-sage-600 hover:text-sage-700 font-medium">
                  Log in
                </Link>
              </p>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-400">
              By signing up, you agree to our{' '}
              <Link href="/terms" className="underline hover:text-slate-600">Terms of Use</Link>
              {' '}and{' '}
              <Link href="/privacy" className="underline hover:text-slate-600">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
