import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { HowItWorks } from '@/components/how-it-works'
import { FAQ } from '@/components/faq'
import { CTASection } from '@/components/cta-section'
import { APP_NAME, APP_URL } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <CTASection />

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
              price: '599',
              priceCurrency: 'USD',
              description: 'One-time fee for entire home-buying transaction',
            },
          }),
        }}
      />
    </>
  )
}
