'use client'

import { useState } from 'react'
import { X, ArrowRight, Home, CheckCircle, PartyPopper } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ClosingPaymentModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ClosingPaymentModal({ isOpen, onClose }: ClosingPaymentModalProps) {
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handlePayment = () => {
    setLoading(true)
    // Redirect to checkout
    window.location.href = '/api/stripe/checkout?tier=closing'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="text-center mb-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 mb-4">
            <PartyPopper className="h-6 w-6 text-sage-700" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Congratulations on Closing!
          </h2>
          <p className="text-slate-600">
            You did it! Complete your final BAIRE payment to wrap up your journey.
          </p>
        </div>

        {/* What you accomplished */}
        <div className="bg-sage-50 rounded-xl p-4 mb-6">
          <p className="text-sm font-medium text-sage-800 mb-3">What you accomplished with BAIRE:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3 text-sm text-slate-700">
              <CheckCircle className="h-4 w-4 text-sage-600 mt-0.5 flex-shrink-0" />
              <span>Toured homes confidently</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-700">
              <CheckCircle className="h-4 w-4 text-sage-600 mt-0.5 flex-shrink-0" />
              <span>Made a winning offer</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-700">
              <CheckCircle className="h-4 w-4 text-sage-600 mt-0.5 flex-shrink-0" />
              <span>Navigated negotiations</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-700">
              <CheckCircle className="h-4 w-4 text-sage-600 mt-0.5 flex-shrink-0" />
              <span>Closed on your new home!</span>
            </li>
          </ul>
        </div>

        {/* Savings callout */}
        <div className="bg-slate-50 rounded-xl p-4 mb-6 text-center">
          <p className="text-sm text-slate-600 mb-1">You saved approximately</p>
          <p className="text-2xl font-bold text-sage-700">$10,000 - $15,000</p>
          <p className="text-sm text-slate-500">by not paying a buyer's agent commission</p>
        </div>

        {/* Pricing */}
        <div className="text-center mb-6">
          <p className="text-sm text-slate-600 mb-1">Final payment</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl font-bold text-slate-900">$300</span>
            <span className="text-slate-400 line-through">$600</span>
          </div>
          <p className="text-sm text-sage-600 font-medium">Promo pricing - Save $300</p>
        </div>

        {/* CTA */}
        <Button 
          onClick={handlePayment}
          disabled={loading}
          className="w-full"
          size="lg"
        >
          {loading ? 'Redirecting...' : (
            <>
              Complete Final Payment
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>

        <p className="text-xs text-slate-500 text-center mt-4">
          Thank you for trusting BAIRE with your home buying journey.
        </p>
      </div>
    </div>
  )
}
