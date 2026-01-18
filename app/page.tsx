import { Hero } from '@/components/hero'
import { ProblemSection } from '@/components/problem-section'
import { Features } from '@/components/features'
import { HowItWorks } from '@/components/how-it-works'
import { WhyBaireWorks } from '@/components/why-baire-works'
import { ExampleResponses } from '@/components/example-responses'
import { CommissionSection } from '@/components/commission-section'
import { TrialSection } from '@/components/trial-section'
import { FAQ } from '@/components/faq'
import { APP_NAME, APP_URL } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <Features />
      <HowItWorks />
      <WhyBaireWorks />
      <ExampleResponses />
      <CommissionSection />
      <TrialSection />
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
              'AI-powered consultant that helps you tour homes and make offers without hiring a buyer\'s agent. Save thousands on commissions.',
            provider: {
              '@type': 'Organization',
              name: APP_NAME,
              url: APP_URL,
            },
            serviceType: 'Real Estate Buying Assistance',
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
