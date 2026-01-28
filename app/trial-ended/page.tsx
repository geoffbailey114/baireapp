import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function TrialEndedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50/50 to-white py-20">
      <div className="container">
        <div className="mx-auto max-w-md text-center">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 mb-6">
              <svg className="h-8 w-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold text-slate-900 mb-4">
              Your trial has ended
            </h1>
            
            <p className="text-slate-600 mb-6">
              Ready to schedule showings or make an offer? Unlock full access to continue your journey.
            </p>

            {/* Pricing */}
            <div className="mb-6 p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl font-bold text-slate-900">$500</span>
                <span className="text-slate-400 line-through">$900</span>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-amber-700 font-semibold bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
                <Clock className="h-3 w-3" />
                LIMITED TIME
              </span>
            </div>

            <Button asChild size="xl" className="w-full mb-4">
              <Link href="/api/stripe/checkout?tier=offer">
                Unlock Full Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <p className="text-sm text-slate-500">
              Includes showing scripts, waivers, offer prep, and closing support.
            </p>
          </div>

          <div className="mt-6">
            <Link href="/pricing" className="text-sm text-sage-600 hover:text-sage-700">
              View pricing details →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
