import type { Metadata } from 'next'
import { Hero } from '@/components/hero'
import { IndustryReality } from '@/components/industry-reality'
import { Features } from '@/components/features'
import { HowItWorks } from '@/components/how-it-works'
import { TacticalAnswers } from '@/components/tactical-answers'
import { SimplePricing } from '@/components/simple-pricing'
import { PricingCTA } from '@/components/pricing-cta'
import { FAQ } from '@/components/faq'

export const metadata: Metadata = {
  title: 'BAIRE v1 (Archived)',
  robots: {
    index: false,
    follow: false,
  },
}

export default function HomePageV1() {
  return (
    <>
      <Hero />
      <IndustryReality />
      <Features />
      <HowItWorks />
      <TacticalAnswers />
      <SimplePricing />
      <PricingCTA />
      <FAQ />
    </>
  )
}
