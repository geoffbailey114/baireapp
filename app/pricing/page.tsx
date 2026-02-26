import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { APP_NAME, APP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Pricing',
  description: `One price. Everything included. ${APP_NAME} costs $995 — a buyer's agent costs $10,000–$15,000. 7-day free trial.`,
  alternates: {
    canonical: `${APP_URL}/pricing`,
  },
  openGraph: {
    title: `Pricing | ${APP_NAME}`,
    description: 'One price. Everything included. $995 with a 7-day free trial. No tiers. No upsells.',
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

// Pricing-specific FAQ data for schema + visible rendering
const pricingFAQs = [
  {
    question: 'How much does BAIRE cost?',
    answer: 'BAIRE costs $995 — one payment for full access to every feature, every stage, every market. No tiers, no upsells, no hidden fees.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes. BAIRE offers a 7-day free trial with full access. You won\'t be charged until day 8. Cancel anytime before then — no questions asked.',
  },
  {
    question: 'What is the money-back guarantee?',
    answer: 'BAIRE includes a 30-day money-back guarantee. If you\'re not satisfied after your trial converts, contact us within 30 days for a full refund.',
  },
  {
    question: 'How does $995 compare to a buyer\'s agent commission?',
    answer: 'A buyer\'s agent typically charges 2-3% of the home price. On a $400,000 home, that\'s $8,000–$12,000. BAIRE gives you the same guidance — comp analysis, negotiation coaching, closing support — for $995. You keep the difference.',
  },
  {
    question: 'Do I need to sign a buyer\'s agreement with BAIRE?',
    answer: 'No. BAIRE is not a brokerage and does not require a buyer\'s agreement. There\'s no lock-in, no exclusivity, and no commission. You can cancel your trial or stop using BAIRE at any time.',
  },
]

export default function PricingPage() {
  return (
    <>
      <div className="py-20 md:py-28">
        <div className="container">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-sage-600 mb-4">Pricing</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4">
              One price. Everything included.
            </h1>
            <p className="text-lg text-slate-600">
              No tiers. No upsells. No surprises.
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

          {/* Pricing FAQ Section */}
          <div className="mx-auto max-w-2xl mt-20">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Pricing Questions
            </h2>
            <div className="space-y-6">
              {pricingFAQs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Schema with Offer */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'BAIRE AI Home Buying Consultant',
            description: 'AI-powered guidance through every step of buying a home — from first search to closing day. Replaces the buyer\'s agent entirely.',
            brand: {
              '@type': 'Brand',
              name: APP_NAME,
            },
            offers: {
              '@type': 'Offer',
              price: '995.00',
              priceCurrency: 'USD',
              priceValidUntil: '2026-12-31',
              availability: 'https://schema.org/InStock',
              url: `${APP_URL}/pricing`,
              description: 'One payment. Full access. All 5 stages. Every market. 7-day free trial included. 30-day money-back guarantee.',
              hasMerchantReturnPolicy: {
                '@type': 'MerchantReturnPolicy',
                applicableCountry: 'US',
                returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
                merchantReturnDays: 30,
                returnMethod: 'https://schema.org/ReturnByMail',
                returnFees: 'https://schema.org/FreeReturn',
              },
            },
          }),
        }}
      />

      {/* FAQPage Schema — pricing-specific */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: pricingFAQs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: APP_URL,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Pricing',
                item: `${APP_URL}/pricing`,
              },
            ],
          }),
        }}
      />
    </>
  )
}
