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
                name: 'How do I tour homes without an agent?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'BAIRE pulls the listing agent\'s name and contact info straight from the listing, then gives you word-for-word scripts that present you as a serious, qualified buyer. Most listing agents prefer this — they represent the seller, and an unrepresented buyer means no competing agent to coordinate around.',
                },
              },
              {
                '@type': 'Question',
                name: 'Will sellers take my offer seriously without a buyer\'s agent?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'More seriously, not less. An unrepresented buyer\'s offer costs the seller nothing in buyer-agent commission. On a $400K home, your offer effectively puts $10,000 more in the seller\'s pocket compared to a represented buyer at the same price.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I know what a home is actually worth without an agent?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'BAIRE runs the same comparable sales analysis agents use — pulled from the same data, without the spin. You\'ll see what similar homes sold for, how long they sat, and what that means for your offer.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does BAIRE negotiate for me?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'BAIRE gives you the strategy, the framing, and the specific language to use. You execute it. That\'s the distinction — and it\'s the one that keeps you in control of the biggest financial decision of your life, not a stranger on commission.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is BAIRE a licensed brokerage or law firm?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. BAIRE is an educational technology platform. We provide knowledge, frameworks, and guidance — not legal advice and not brokerage representation. You represent yourself. BAIRE makes sure you\'re the most prepared person in the room when you do.',
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
