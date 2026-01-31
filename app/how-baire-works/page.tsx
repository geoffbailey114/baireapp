// FILE: app/how-baire-works/page.tsx (REPLACE EXISTING)
// Copy everything below this line into GitHub

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Search, Calendar, Eye, FileText, Key } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'


export const metadata: Metadata = {
  title: 'How BAIRE Works',
  description: `Learn how ${APP_NAME} helps you tour homes, write strong offers, and navigate deals without hiring a buyer's agent.`,
  robots: {
    index: true,
    follow: true,
  },
}

const steps = [
  {
    icon: Search,
    number: '1',
    title: 'Find a home you like',
    description: 'Browse anywhere you want — Zillow, Redfin, new construction, or off-market.',
    detail: 'When you find something interesting, bring it to BAIRE.',
  },
  {
    icon: Calendar,
    number: '2',
    title: 'Tour the home',
    description: "BAIRE shows you exactly how to schedule and access showings without hiring a buyer's agent — step-by-step guidance.",
    detail: "You're not guessing. You're prepared.",
  },
  {
    icon: Eye,
    number: '3',
    title: 'Understand the opportunity',
    description: 'Before you offer, BAIRE helps you evaluate:',
    bullets: [
      'Price and value',
      'Seller motivation',
      'Red flags and deal risks',
      'Where you have leverage',
    ],
    detail: "You know what matters — and what doesn't.",
  },
  {
    icon: FileText,
    number: '4',
    title: 'Build a winning offer',
    description: 'BAIRE walks you through pricing, terms, contingencies, and strategy — laying out clear options so you can choose how aggressive or conservative to be.',
    detail: 'No pressure. No commissions. Just clarity.',
  },
  {
    icon: Key,
    number: '5',
    title: 'Close with confidence',
    description: 'From inspection through appraisal and closing, BAIRE stays with you — helping you understand decisions, timelines, and trade-offs until you have the keys.',
    detail: null,
  },
]

export default function HowBAIREWorksPage() {
  return (
    
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sage-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              How BAIRE Works
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              Buy with clarity. Keep control. Skip the commission.
            </p>
          </div>
        </div>
      </section>

      {/* The Process - Visual Timeline */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line connector */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-sage-200 via-sage-300 to-sage-200 hidden sm:block" />

              {/* Steps */}
              <div className="space-y-12">
                {steps.map((step) => (
                  <div key={step.title} className="relative flex gap-4 md:gap-6">
                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-sage-100 flex items-center justify-center">
                        <step.icon className="w-6 h-6 md:w-7 md:h-7 text-sage-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                        {step.number}. {step.title}
                      </h3>
                      <p className="text-slate-600 mb-3 leading-relaxed">
                        {step.description}
                      </p>
                      {step.bullets && (
                        <ul className="mb-3 ml-4 space-y-1">
                          {step.bullets.map((bullet) => (
                            <li key={bullet} className="text-slate-600 flex items-start gap-2">
                              <span className="text-sage-500 mt-1">•</span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                      {step.detail && (
                        <p className="text-sage-700 font-medium">
                          {step.detail}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* That's it section */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              That&apos;s it.
            </h2>
            <div className="space-y-2 text-xl text-slate-600">
              <p>No buyer&apos;s agent.</p>
              <p>No commission.</p>
              <p>No confusion.</p>
            </div>
            <p className="mt-8 text-xl font-medium text-slate-900">
              Just a smarter way to buy.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12">
              Typical homebuying costs
            </h2>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <p className="text-slate-500 text-sm mb-1">Inspection</p>
                <p className="text-2xl font-bold text-slate-900">$500–$1,000</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <p className="text-slate-500 text-sm mb-1">Appraisal</p>
                <p className="text-2xl font-bold text-slate-900">$500–$700</p>
              </div>
              <div className="bg-sage-50 rounded-xl p-6 border-2 border-sage-200">
                <p className="text-sage-600 text-sm font-medium mb-1">BAIRE</p>
                <p className="text-2xl font-bold text-sage-700">$599 total</p>
              </div>
            </div>

            <div className="inline-block bg-slate-900 text-white rounded-2xl px-8 py-6">
              <p className="text-slate-400 text-sm uppercase tracking-wide mb-1">
                Buyer-agent commission savings
              </p>
              <p className="text-3xl md:text-4xl font-bold">
                $10,000–$15,000+
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-sage-600">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to buy smarter?
            </h2>
            <p className="text-sage-100 mb-8">
              Start your free trial and see how BAIRE works for you.
            </p>
            <Button 
              asChild 
              size="xl" 
              className="bg-white text-sage-700 hover:bg-sage-50"
            >
              <Link href="/signup">
                Start Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    
  )
}
