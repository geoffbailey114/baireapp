import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { APP_NAME, APP_URL } from '@/lib/constants'
import { PricingAccordion } from './pricing-accordion'
import { PageWrapper } from '@/components/page-wrapper'

export const metadata: Metadata = {
  title: 'Pricing',
  description: `Start free with ${APP_NAME}. 48-hour trial, then $99 for Access, $500 when you make an offer. Limited time: $599 total (normally $999).`,
  openGraph: {
    title: `Pricing | ${APP_NAME}`,
    description: "Start free. $99 after trial, $500 at offer. Limited time: $599 total (normally $999).",
    url: `${APP_URL}/pricing`,
  },
}

export default function PricingPage() {
  return (
    <PageWrapper>
    <div className="py-20 md:py-28">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-800 mb-6 border border-amber-200">
            <Clock className="h-4 w-4" />
            Limited Time: Save $400
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Simple pricing
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Try free for 48 hours. $99 to continue, $500 when you make an offer.
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
                48 hours to explore BAIRE. No charge if you cancel.
              </p>
            </div>

            <Button asChild size="xl" className="w-full mb-6">
              <Link href="/signup">
                Start Free — 48-Hour Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <div className="text-center">
              <p className="text-sm text-slate-500 mb-3">
                Credit card required · No charge today · Cancel anytime
              </p>
              <div className="inline-flex items-center gap-2 text-sm">
                <span className="text-slate-400 line-through text-lg">$999</span>
                <span className="text-sage-700 font-bold text-2xl">$599</span>
              </div>
              <div className="mt-2">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold border border-amber-200">
                  LIMITED TIME PRICING
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
              Pay as you go
            </h3>
            <p className="text-slate-600">
              Start free, then pay $99 after your trial to keep using BAIRE for showings and prep. 
              When you're ready to make an offer, unlock the rest for $500. No surprises. No subscriptions.
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
    </PageWrapper>
  )
}
