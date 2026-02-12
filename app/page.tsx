import type { Metadata } from 'next'
import { HeroV2 } from '@/components/v2/hero'
import { MathChanged } from '@/components/v2/math-changed'
import { CompetitiveAdvantage } from '@/components/v2/competitive-advantage'
import { JourneyV2 } from '@/components/v2/journey'
import { TrustSection } from '@/components/v2/trust-section'
import { PricingV2 } from '@/components/v2/pricing'
import { FAQV2 } from '@/components/v2/faq'
import { CTAV2 } from '@/components/v2/cta'
import { APP_NAME, APP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${APP_NAME} — Buy a Home Without a Buyer's Agent | Save $10,000+`,
  description: 'BAIRE is an AI-powered home buying consultant that replaces the buyer\'s agent. Try free for 7 days — get comp analysis, negotiation coaching, and closing guidance for $995 and save $10,000+ in commissions.',
  alternates: {
    canonical: APP_URL,
  },
}

export default function HomePage() {
  return (
    <>
      <HeroV2 />
      <MathChanged />
      <CompetitiveAdvantage />
      <JourneyV2 />
      <TrustSection />
      <PricingV2 />
      <FAQV2 />
      <CTAV2 />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: APP_NAME,
            url: APP_URL,
            logo: `${APP_URL}/logo.svg`,
            description: 'AI-powered home buying consultant for self-represented buyers.',
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'hello@baireapp.com',
              contactType: 'customer service',
            },
            sameAs: [],
          }),
        }}
      />

      {/* SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: `${APP_NAME} — AI Home Buying Consultant`,
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web',
            description: 'AI-powered consultant that replaces the buyer\'s agent. Comp analysis, negotiation coaching, offer strategy, and closing guidance — from first search to closing day.',
            offers: {
              '@type': 'Offer',
              price: '995',
              priceCurrency: 'USD',
              description: 'Full access — AI home buying consultant. One payment, keep forever.',
            },
            aggregateRating: undefined, // Add when you have reviews
          }),
        }}
      />

      {/* FAQPage Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Can I really buy a home without a buyer\'s agent?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. There is no law requiring you to hire a buyer\'s agent. You can tour homes, write offers, and close — all without one. BAIRE gives you the knowledge agents have, so you can do it confidently.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much does BAIRE cost compared to a buyer\'s agent?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'BAIRE costs $995 one time. A buyer\'s agent typically costs 2-3% of the home price — that\'s $10,000 to $15,000 on a $400K-$600K home. And since the NAR settlement, that commission comes out of your pocket, not the seller\'s.',
                },
              },
              {
                '@type': 'Question',
                name: 'What if I can\'t get pre-qualified for a mortgage?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'BAIRE connects you directly with NFM Lending — a national lender licensed in 49 states — for pre-qualification. If you can\'t get pre-qualified, BAIRE refunds you in full.',
                },
              },
              {
                '@type': 'Question',
                name: 'What changed with the NAR settlement?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Before August 2024, the seller paid the buyer\'s agent commission and it was baked into the listing price. Now, buyer agent compensation is negotiated separately. If you don\'t use a buyer\'s agent, the seller doesn\'t have to pay that commission — making your offer 2-3% stronger.',
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
