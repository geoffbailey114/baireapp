import { HeroV2 } from '@/components/v2/hero'
import { MathChanged } from '@/components/v2/math-changed'
import { CompetitiveAdvantage } from '@/components/v2/competitive-advantage'
import { JourneyV2 } from '@/components/v2/journey'
import { TrustSection } from '@/components/v2/trust-section'
import { PricingV2 } from '@/components/v2/pricing'
import { FAQV2 } from '@/components/v2/faq'
import { CTAV2 } from '@/components/v2/cta'
import { APP_NAME, APP_URL } from '@/lib/constants'

export default function HomePageV2() {
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

      {/* Service Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `${APP_NAME} - AI Home Buying Consultant`,
            description:
              'AI-powered educational consultant for self-represented home buyers. Get guidance, understand documents, and feel confident throughout your home-buying journey.',
            provider: {
              '@type': 'Organization',
              name: APP_NAME,
              url: APP_URL,
            },
            serviceType: 'Educational Consulting',
            areaServed: 'US',
            offers: {
              '@type': 'Offer',
              price: '995',
              priceCurrency: 'USD',
              description: 'Full access — AI home buying consultant with knowledge of 100,000 agents',
            },
          }),
        }}
      />
    </>
  )
}
