import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { APP_NAME, APP_URL } from '@/lib/constants'


export const metadata: Metadata = {
  title: 'Pricing',
  description: `One price. Everything included. ${APP_NAME} costs $995 — a buyer's agent costs $10,000–$15,000. 7-day free trial.`,
  openGraph: {
    title: `Pricing | ${APP_NAME}`,
    description: "One price. Everything included. $995 with a 7-day free trial. No tiers. No upsells.",
    url: `${APP_URL}/pricing`,
  },
}

const features = [
  'Full AI consultant — from first search to closing day',
  'Comp analysis & pricing intelligence',
  'Showing scripts & listing agent contact guidance',
  'Offer strategy & negotiation coaching',
  'Inspection & appraisal guidance',
  'Exit strategy playbook',
  'NFM Lending pre-qualification (49 states)',
  'Priority support',
]

export default function PricingPage() {
  return (
    
    <div className="py-20 md:py-28">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-sage-600 mb-4">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
            One price. Everything included.
            <br />
            No tiers. No upsells. No surprises.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            A buyer&apos;s agent costs $10,000&ndash;$15,000 on a $400K&ndash;$600K home.
            <br />
            BAIRE costs $995. You do the math &mdash; you already have.
          </p>
        </div>

        {/* Pricing Card — two-tone: sage-600 top, white bottom */}
        <div className="mx-auto max-w-lg">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
            {/* Sage top section */}
            <div className="bg-sage-600 px-8 py-10 text-white">
              <p className="text-xs font-bold tracking-[0.12em] uppercase text-white/50 mb-5">
                Full access &middot; All 5 stages &middot; Every market
              </p>
              <p className="mb-1">
                <span className="text-lg text-white/50 font-medium align-top">$</span>
                <span className="text-6xl font-bold tracking-tight">995</span>
              </p>
              <p className="text-base text-white/60 leading-relaxed mt-3 mb-8">
                One payment. Yours forever. <strong className="text-white font-semibold">7-day free trial &mdash; no charge until day 8.</strong>
                <br />
                Cancel anytime before then.
              </p>
              <Button
                asChild
                className="w-full bg-white text-sage-700 hover:bg-sage-50 rounded-full h-14 text-base font-semibold"
              >
                <Link href="/signup">
                  Start Your Free 7-Day Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* White bottom section — feature checklist */}
            <div className="bg-white px-8 py-8">
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risk reversal bar */}
            <div className="bg-white border-t border-slate-100 px-8 py-5">
              <div className="rounded-xl border-2 border-amber-300/60 bg-amber-50/50 px-5 py-3.5 text-center">
                <p className="text-sm font-medium text-slate-700">
                  30-day money-back guarantee &middot; No buyer&apos;s agreement &middot; No lock-in &middot; Cancel trial anytime
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mx-auto max-w-2xl mt-16">
          <p className="text-sm text-slate-500 text-center leading-relaxed">
            BAIRE is an educational tool, not a real estate agent, broker, lawyer, or financial advisor. 
            BAIRE does not negotiate on your behalf or provide legal, tax, or financial advice.
          </p>
        </div>
      </div>
    </div>
    
  )
}
