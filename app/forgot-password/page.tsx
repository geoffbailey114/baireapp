'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Loader2, Mail, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [resetLink, setResetLink] = useState<string | null>(null) // For dev/testing

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to process request')
      }

      setSuccess(true)
      
      // For dev/testing - show the reset link if provided
      if (data.resetLink) {
        setResetLink(data.resetLink)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sage-50/50 to-white py-20">
        <div className="container">
          <div className="mx-auto max-w-md">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900 mb-2">
                Check your email
              </h1>
              <p className="text-slate-600 mb-6">
                If an account exists for <strong>{email}</strong>, you'll receive a password reset link shortly.
              </p>
              
              {/* Dev/testing: Show reset link if available */}
              {resetLink && (
                <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-left">
                  <p className="text-sm font-medium text-amber-800 mb-2">
                    Development Mode - Reset Link:
                  </p>
                  <a 
                    href={resetLink}
                    className="text-sm text-amber-700 underline break-all"
                  >
                    {resetLink}
                  </a>
                </div>
              )}

              <Link 
                href="/login"
                className="text-sage-600 hover:text-sage-700 font-medium"
              >
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50/50 to-white py-20">
      <div className="container">
        <div className="mx-auto max-w-md">
          <div className="mb-8">
            <Link 
              href="/login"
              className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to login
            </Link>
          </div>

          <div className="text-center mb-8">
            <div className="mx-auto w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-sage-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">
              Forgot password?
            </h1>
            <p className="mt-2 text-slate-600">
              Enter your email and we'll send you a reset link.
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
                    Sending...
                  </>
                ) : (
                  'Send reset link'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
