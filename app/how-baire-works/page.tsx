// FILE: app/how-baire-works/page.tsx (REPLACE EXISTING)
// Copy everything below this line into GitHub

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, X, Target, Search, Key, FileText, MessageSquare, Home } from 'lucide-react'
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
    icon: Target,
    title: 'Set your win conditions',
    time: '5 min',
    description: 'Define your price range, must-haves, timeline, and risk tolerance.',
    output: 'Your personal Offer Strategy Profile',
  },
  {
    icon: Search,
    title: 'Pressure-test a home',
    time: '10 min',
    description: 'Evaluate listings for red flags, comp range, and offer posture.',
    output: 'Go / No-Go recommendation',
  },
  {
    icon: Key,
    title: 'Schedule your showing',
    time: 'Ongoing',
    description: 'Use open houses, listing agents, or showing tools. BAIRE provides scripts and checklists.',
    output: 'Confident access without a buyer agent',
  },
  {
    icon: FileText,
    title: 'Build your offer',
    time: '15 min',
    description: 'Generate offer price, terms, inspection strategy, and appraisal gap logic.',
    output: 'Clear offer package strategy',
  },
  {
    icon: MessageSquare,
    title: 'Negotiate clearly',
    time: 'As needed',
    description: 'Decide what to ask for, respond to counteroffers, keep the deal moving.',
    output: 'Leverage without emotion',
  },
  {
    icon: Home,
    title: 'Close with control',
    time: 'Final days',
    description: 'Track deadlines, documents, final walkthrough, and closing day readiness.',
    output: 'Calm, prepared, hard to rattle',
  },
]

const faqs = [
  {
    q: 'Will sellers refuse to work with me?',
    a: 'Most listing sides care about two things: Are you qualified? Can you perform? BAIRE helps you show both—fast.',
  },
  {
    q: 'What if I already signed with an agent?',
    a: 'Review your buyer representation agreement carefully. You may be committed for a period. Consult an attorney if needed before changing course.',
  },
  {
    q: "I'm worried I'll mess up paperwork.",
    a: "The goal isn't \"know everything.\" Follow a proven sequence, use clean scripts, and bring in the right pro at the right time.",
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
              BAIRE helps motivated buyers self-represent—so you can tour homes, write strong offers, and navigate the deal <strong className="text-slate-900">without hiring a buyer's agent</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 border-b border-slate-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Good fit */}
              <div>
                <h2 className="flex items-center gap-2 text-lg font-semibold text-sage-800 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sage-100">
                    <Check className="h-4 w-4 text-sage-600" />
                  </span>
                  BAIRE is for buyers who:
                </h2>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-sage-500 mt-1">•</span>
                    Are ready to buy in the next 0–90 days
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage-500 mt-1">•</span>
                    Want a clear, guided path to purchase
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage-500 mt-1">•</span>
                    Prefer handling showings and decisions themselves
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage-500 mt-1">•</span>
                    Want to avoid paying for an agent they don't need
                  </li>
                </ul>
              </div>

              {/* Not for */}
              <div>
                <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-600 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100">
                    <X className="h-4 w-4 text-slate-500" />
                  </span>
                  BAIRE is not for:
                </h2>
                <ul className="space-y-3 text-slate-500">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    People who want full-service agent support
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    Buyers uncomfortable with showings or open houses
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    Shoppers wanting months of weekend tours with an agent
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process - Visual Timeline */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">
              From "found it" to closed
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Six stages. Clear outputs. No guessing.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line connector */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-sage-200 via-sage-300 to-sage-200 hidden sm:block" />

              {/* Steps */}
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={step.title} className="relative flex gap-4 md:gap-6">
                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-sage-100 flex items-center justify-center">
                        <step.icon className="w-6 h-6 md:w-7 md:h-7 text-sage-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <div className="flex flex-wrap items-baseline gap-2 mb-1">
                        <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                          {step.title}
                        </h3>
                        <span className="text-sm text-slate-400">{step.time}</span>
                      </div>
                      <p className="text-slate-600 mb-2">
                        {step.description}
                      </p>
                      <p className="text-sm text-sage-700 font-medium">
                        → {step.output}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What BAIRE is / isn't - Compact */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              What BAIRE is (and isn't)
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-sage-800 mb-3">BAIRE is:</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-sage-500 mt-0.5 flex-shrink-0" />
                    A step-by-step system replacing uncertainty with process
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-sage-500 mt-0.5 flex-shrink-0" />
                    A decision engine for offers and negotiation
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-sage-500 mt-0.5 flex-shrink-0" />
                    A communication playbook with scripts
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-sage-500 mt-0.5 flex-shrink-0" />
                    Built for confident self-representation
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-slate-700 mb-3">BAIRE is not:</h3>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    A real estate brokerage
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    A lawyer or lender
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    A guarantee of outcome
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    A substitute for state-specific legal advice
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center text-sm text-slate-500 mt-6">
              <strong>Good rule:</strong> BAIRE handles strategy and structure. Licensed pros handle legal specifics.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ - Accordion style but simpler */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
              Common questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-slate-100 pb-6">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    "{faq.q}"
                  </h3>
                  <p className="text-slate-600">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
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
                Buyer-agent commission avoided
              </p>
              <p className="text-3xl md:text-4xl font-bold">
                typically $10,000–$15,000+
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
              Buying without a buyer's agent is now simple.
            </h2>
            <p className="text-sage-100 mb-8">
              Get the guidance you need. Keep the control you want.
            </p>
            <Button 
              asChild 
              size="xl" 
              className="bg-white text-sage-700 hover:bg-sage-50"
            >
              <Link href="/signup">
                Try BAIRE free for 48 hours
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
