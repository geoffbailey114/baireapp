import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { APP_NAME, APP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Pricing',
  description: `Start free with ${APP_NAME}. Pay only for what you need: $99 for offer prep, $200 for showing scripts, $300 for closing support.`,
  openGraph: {
    title: `Pricing | ${APP_NAME}`,
    description: 'Start free. Pay as you go. Total: $599 (normally $999).',
    url: `${APP_URL}/pricing`,
  },
}

const tiers = [
  {
    name: 'Trial',
    price: '$0',
    priceStrike: null,
    period: '48 hours',
    description: 'Try BAIRE free for 48 hours. No charge if you cancel.',
    features: [
      'General Q&A about home buying',
      'Educational content',
      'Basic process guidance',
      'Full chat access',
    ],
    locked: [],
    cta: 'Start Free — 48-Hour Trial',
    ctaLink: '/signup',
    highlight: false,
  },
  {
    name: 'Access',
    price: '$99',
    priceStrike: null, // No strikethrough - always $99
    period: 'one-time',
    description: 'Unlock offer preparation and negotiation tools.',
    features: [
      'Everything in Trial',
      'Offer generation & strategy',
      'Negotiation playbooks',
      'State-specific language',
      'Price & terms guidance',
    ],
    locked: [],
    cta: 'Upgrade to Access',
    ctaLink: '/api/stripe/checkout?tier=access',
    highlight: true,
  },
  {
    name: 'Showings',
    price: '$200',
    priceStrike: '$300',
    period: 'one-time',
    description: 'Get scripts and tools to tour homes confidently.',
    features: [
      'Everything in Access',
      'Showing request scripts',
      'Buyer waivers',
      'Walkthrough checklists',
      'Red flag spotting guide',
    ],
    locked: ['Requires Access tier'],
    cta: 'Unlock Showings',
    ctaLink: '/api/stripe/checkout?tier=showings',
    highlight: false,
  },
  {
    name: 'Closing',
    price: '$300',
    priceStrike: '$600',
    period: 'one-time',
    description: 'Full support through closing day.',
    features: [
      'Everything in Showings',
      'Closing disclosure review',
      'Deadline tracking',
      'Final walkthrough prep',
      'Closing day readiness',
    ],
    locked: ['Requires Showings tier'],
    cta: 'Unlock Closing',
    ctaLink: '/api/stripe/checkout?tier=closing',
    highlight: false,
  },
]

export default function PricingPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-sage-100 px-3 py-1 text-sm font-medium text-sage-700 mb-6">
            Limited Time: Save $400
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Pay only for what you need
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Start with a free 48-hour trial. Unlock features as you progress through your home buying journey.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-500">
            <span className="line-through">$999 total</span>
            <span className="text-sage-700 font-semibold">$599 total</span>
            <span className="bg-sage-100 text-sage-700 px-2 py-0.5 rounded text-xs font-medium">
              PROMO
            </span>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 ${
                tier.highlight
                  ? 'border-sage-500 bg-sage-50/50 shadow-lg'
                  : 'border-slate-200 bg-white'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-sage-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-slate-900">{tier.price}</span>
                  {tier.priceStrike && (
                    <span className="text-sm text-slate-400 line-through">{tier.priceStrike}</span>
                  )}
                  <span className="text-sm text-slate-500">{tier.period}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="h-4 w-4 text-sage-600 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
                {tier.locked.map((lock) => (
                  <li key={lock} className="flex items-start gap-2 text-sm text-slate-400">
                    <Lock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{lock}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  tier.highlight
                    ? ''
                    : tier.name === 'Trial'
                    ? ''
                    : 'bg-slate-800 hover:bg-slate-700'
                }`}
                variant={tier.name === 'Trial' ? 'outline' : 'default'}
              >
                <Link href={tier.ctaLink}>
                  {tier.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mx-auto max-w-3xl mt-20">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            How the pricing works
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center text-sage-700 font-semibold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Start free for 48 hours</h3>
                <p className="text-slate-600 text-sm mt-1">
                  Enter your card. We won't charge you. Cancel anytime within 48 hours — or skip the trial and pay $99 now.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center text-sage-700 font-semibold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Auto-upgrade to Access ($99)</h3>
                <p className="text-slate-600 text-sm mt-1">
                  After 48 hours, you're charged $99 and unlock offer prep, negotiation playbooks, and state-specific guidance.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center text-sage-700 font-semibold text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Unlock Showings when ready ($200)</h3>
                <p className="text-slate-600 text-sm mt-1">
                  When BAIRE asks if you're ready to see a house, you can unlock showing scripts, waivers, and checklists.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center text-sage-700 font-semibold text-sm">
                4
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Unlock Closing after disclosure review ($300)</h3>
                <p className="text-slate-600 text-sm mt-1">
                  After BAIRE reviews your closing disclosure, you confirm your closing date and unlock full closing support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mx-auto max-w-2xl mt-16 text-center">
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Credit card required · No charge today · Cancel within 48 hours to avoid billing
            </h3>
            <p className="text-sm text-slate-600">
              No refunds after charges are made. Each tier unlocks permanently for your home buying journey.
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
