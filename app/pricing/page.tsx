import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { APP_NAME, APP_URL } from '@/lib/constants'
import { PricingAccordion } from './pricing-accordion'

export const metadata: Metadata = {
  title: 'Pricing',
  description: `Start free with ${APP_NAME}. Pay as you go: $99 after trial, $200 at offer, $300 after closing. Total: $599 (normally $999).`,
  openGraph: {
    title: `Pricing | ${APP_NAME}`,
    description: 'Start free. Pay as you go. Total: $599 (normally $999).',
    url: `${APP_URL}/pricing`,
  },
}

export default function PricingPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-flex items-center rounded-full bg-sage-100 px-3 py-1 text-sm font-medium text-sage-700 mb-6">
            Limited Time: Save $400
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Pay as you go
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Start with a free 48-hour trial. Only pay when you're ready to move forward.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="mx-auto max-w-lg">
          <div className="bg-white rounded-2xl border-2 border-sage-500 p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Start Your Free Trial
              </h2>
              <p className="text-slate-600">
                48 hours of full access. No charge if you cancel.
              </p>
            </div>

            <Button asChild size="xl" className="w-full mb-6">
              <Link href="/signup">
                Start Free — 48-Hour Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <div className="text-center">
              <p className="text-sm text-slate-500 mb-2">
                Credit card required · No charge today · Cancel anytime
              </p>
              <div className="inline-flex items-center gap-2 text-sm">
                <span className="text-slate-400 line-through">$999 total</span>
                <span className="text-sage-700 font-semibold">$599 total</span>
                <span className="bg-sage-100 text-sage-700 px-2 py-0.5 rounded text-xs font-medium">
                  SAVE $400
                </span>
              </div>
            </div>
          </div>

          {/* Skip Trial Option */}
          <div className="text-center mt-4">
            <Link 
              href="/signup?tier=access" 
              className="text-sm text-sage-600 hover:text-sage-700 underline"
            >
              Skip trial and start with Access ($99) →
            </Link>
          </div>
        </div>

        {/* Pricing Accordion */}
        <div className="mx-auto max-w-2xl mt-16">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            How pricing works
          </h2>
          <PricingAccordion />
        </div>

        {/* Trust Section */}
        <div className="mx-auto max-w-2xl mt-16 text-center">
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Only pay when you're ready
            </h3>
            <p className="text-slate-600">
              BAIRE grows with your journey. You're never charged until you need the next level of support.
              No surprises. No subscriptions. Just pay as you go.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mx-auto max-w-2xl mt-12">
          <p className="text-sm text-slate-500 text-center leading-relaxed">
            BAIRE is an educational tool, not a real estate agent, broker, lawyer, or financial advisor. 
            BAIRE does not negotiate on your behalf or provide legal, tax, or financial advice.
          </p>
        </div>
      </div>
    </div>
  )
}
