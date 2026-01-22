import { Hero } from '@/components/hero'
import { IndustryReality } from '@/components/industry-reality'
import { Features } from '@/components/features'
import { HowItWorks } from '@/components/how-it-works'
import { TacticalAnswers } from '@/components/tactical-answers'
import { PricingCTA } from '@/components/pricing-cta'
import { FAQ } from '@/components/faq'
import { APP_NAME, APP_URL } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      <Hero />
      <IndustryReality />
      <Features />
      <HowItWorks />
      <TacticalAnswers />
      <PricingCTA />
      <FAQ />

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
              price: '99',
              priceCurrency: 'USD',
              description: 'Access tier for home-buying transaction support',
            },
          }),
        }}
      />
    </>
  )
}
