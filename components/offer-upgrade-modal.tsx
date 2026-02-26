'use client'

import { useState } from 'react'
import { X, ArrowRight, FileText, Target, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface OfferUpgradeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function OfferUpgradeModal({ isOpen, onClose }: OfferUpgradeModalProps) {
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleUpgrade = () => {
    setLoading(true)
    // Redirect to checkout
    window.location.href = '/api/stripe/checkout?tier=offer'
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
            <FileText className="h-6 w-6 text-sage-700" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Ready to Make an Offer?
          </h2>
          <p className="text-slate-600">
            Unlock full offer preparation, negotiation tools, and closing support.
          </p>
        </div>

        {/* Features */}
        <div className="bg-slate-50 rounded-xl p-4 mb-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-slate-700">
              <FileText className="h-4 w-4 text-sage-600 mt-0.5 flex-shrink-0" />
              <span>Full offer generation &amp; strategy</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-700">
              <Target className="h-4 w-4 text-sage-600 mt-0.5 flex-shrink-0" />
              <span>Negotiation playbooks &amp; counteroffer strategies</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-700">
              <Scale className="h-4 w-4 text-sage-600 mt-0.5 flex-shrink-0" />
              <span>State-specific language &amp; closing support</span>
            </li>
          </ul>
        </div>

        {/* Pricing */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl font-bold text-slate-900">$995</span>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            One payment. Everything included through closing.
          </p>
        </div>

        {/* CTA */}
        <Button 
          onClick={handleUpgrade}
          disabled={loading}
          className="w-full"
          size="lg"
        >
          {loading ? 'Redirecting...' : (
            <>
              Unlock Full Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>

        <p className="text-xs text-slate-500 text-center mt-4">
          30-day money-back guarantee. No buyer&apos;s agreement required.
        </p>
      </div>
    </div>
  )
}
