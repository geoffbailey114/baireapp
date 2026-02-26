import type { Metadata } from 'next'
import { HeroV2 } from '@/components/v2/hero'
import { MathChanged } from '@/components/v2/math-changed'
import { CompetitiveAdvantage } from '@/components/v2/competitive-advantage'
import { JourneyV2 } from '@/components/v2/journey'
import { TrustSection } from '@/components/v2/trust-section'
import { PricingV2 } from '@/components/v2/pricing'
import { FAQV2 } from '@/components/v2/faq'
import { CTAV2 } from '@/components/v2/cta'
import { APP_NAME, APP_URL, APP_DESCRIPTION } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${APP_NAME} — Buy a Home Without a Buyer's Agent | Save $10,000+`,
  description: APP_DESCRIPTION,
  alternates: {
    canonical: APP_URL,
  },
}

// FAQ data for schema — MUST match the visible FAQV2 component exactly
const homepageFAQs = [
  {
    question: 'How do I tour homes without an agent?',
    answer: "BAIRE pulls the listing agent's name and contact info straight from the listing, then gives you word-for-word scripts that present you as a serious, qualified buyer. Most listing agents prefer this — they represent the seller, and an unrepresented buyer means no competing agent to coordinate around.",
  },
  {
    question: 'Will sellers take my offer seriously?',
    answer: "More seriously, not less. An unrepresented buyer's offer costs the seller nothing in buyer-agent commission. On a $400K home, your offer effectively puts $10,000 more in the seller's pocket compared to a represented buyer at the same price.",
  },
  {
    question: 'How do I know what the home is actually worth?',
    answer: "BAIRE runs the same comparable sales analysis agents use — pulled from the same data, without the spin. You'll see what similar homes sold for, how long they sat, and what that means for your offer. You decide. Not your agent.",
  },
  {
    question: 'What about negotiations when things go sideways?',
    answer: "BAIRE's negotiation module covers inspection responses, appraisal gaps, seller concessions, and deal-threatening scenarios in real time. You'll have a specific framework for every situation — not vague advice to \"talk to your agent.\"",
  },
  {
    question: "I've never bought a home before. Is this realistic?",
    answer: "BAIRE was built for buyers who are smart, resourceful, and done paying for things they can handle themselves. You managed harder things on a smaller budget. The process is learnable. BAIRE makes sure you don't have to learn it alone.",
  },
  {
    question: 'What if the deal falls through and I need to back out?',
    answer: "The exit strategy playbook covers every contingency: inspection, financing, appraisal, and cold feet. You'll know exactly which clauses protect you, when your earnest money is at risk, and how to exit cleanly when that's the right call.",
  },
  {
    question: 'Does BAIRE negotiate for me?',
    answer: "BAIRE gives you the strategy, the framing, and the specific language to use. You execute it. That's the distinction — and it's the one that keeps you in control of the biggest financial decision of your life, not a stranger on commission.",
  },
  {
    question: 'Is BAIRE a licensed brokerage or law firm?',
    answer: "No. BAIRE is an educational technology platform. We provide knowledge, frameworks, and guidance — not legal advice and not brokerage representation. You represent yourself. BAIRE makes sure you're the most prepared person in the room when you do.",
  },
]

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

      {/* Organization Schema (upgraded) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: APP_NAME,
            legalName: 'BAIREAPP, LLC',
            url: APP_URL,
            logo: `${APP_URL}/logo.svg`,
            description: 'AI-powered home buying consultant. Everything an agent does — comp analysis, negotiation coaching, closing guidance — for $995 instead of $10,000+.',
            email: 'hello@baireapp.com',
            foundingDate: '2025',
            founder: {
              '@type': 'Person',
              name: 'Geoff',
              jobTitle: 'Founder',
              description: '13+ years in residential real estate. Built BAIRE to give home buyers a better option than paying $10,000+ in agent commissions.',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'hello@baireapp.com',
              contactType: 'customer service',
            },
            sameAs: [],
          }),
        }}
      />

      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: APP_NAME,
            url: APP_URL,
            description: 'AI-powered home buying consultant that replaces the buyer\'s agent. Comp analysis, negotiation coaching, and closing guidance for $995.',
            publisher: {
              '@type': 'Organization',
              name: APP_NAME,
              url: APP_URL,
            },
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
          }),
        }}
      />

      {/* FAQPage Schema — matches FAQV2 component content exactly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: homepageFAQs.map(faq => ({
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
    </>
  )
}
