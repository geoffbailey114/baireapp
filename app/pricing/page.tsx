import type { Metadata } from 'next'
import { PricingCard } from '@/components/pricing-card'
import { APP_NAME, APP_URL, DISCLAIMER_SHORT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Get full access to BAIRE for $599 one-time. No commissions, no recurring fees. Educational guidance for your entire home-buying transaction.',
  openGraph: {
    title: `Pricing | ${APP_NAME}`,
    description:
      'Get full access to BAIRE for $599 one-time. No commissions, no recurring fees.',
    url: `${APP_URL}/pricing`,
  },
}

export default function PricingPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            One fee. One transaction. No surprises. BAIRE provides educational 
            guidance throughout your home-buying journey for a single, flat fee.
          </p>
        </div>

        <div className="mx-auto max-w-md">
          <PricingCard />
        </div>

        {/* Value proposition */}
        <div className="mx-auto max-w-2xl mt-16">
          <div className="bg-slate-50 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              What makes BAIRE different?
            </h2>
            <div className="space-y-4 text-slate-600">
              <p>
                Traditional buyer agent commissions often range from 2-3% of the home 
                price. On a $400,000 home, that's $8,000 to $12,000. With changes in 
                how buyer agent compensation works, many buyers are exploring alternatives.
              </p>
              <p>
                BAIRE offers educational support for a flat $599—helping you understand 
                the process, documents, and terminology so you can make informed decisions. 
                We're not a replacement for professional services when you need them, but 
                we can help you navigate your journey with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mx-auto max-w-2xl mt-12">
          <p className="text-sm text-slate-500 text-center leading-relaxed">
            {DISCLAIMER_SHORT}
          </p>
        </div>

        {/* Pricing Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'BAIRE Buyer Consultant',
              description:
                'AI-powered educational consultant for self-represented home buyers.',
              offers: {
                '@type': 'Offer',
                price: '599',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
                priceValidUntil: new Date(
                  new Date().setFullYear(new Date().getFullYear() + 1)
                )
                  .toISOString()
                  .split('T')[0],
              },
            }),
          }}
        />
      </div>
    </div>
  )
}
