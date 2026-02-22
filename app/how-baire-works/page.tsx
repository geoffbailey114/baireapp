import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Search, Calendar, FileText, ClipboardCheck, Shield, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { APP_NAME, APP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'How BAIRE Works \u2014 Buy a Home Without an Agent, Step by Step',
  description: 'See exactly how BAIRE replaces the buyer\'s agent: comp analysis, showing scripts, offer strategy, negotiation coaching, and closing guidance. $995 one time.',
  alternates: {
    canonical: `${APP_URL}/how-baire-works`,
  },
  openGraph: {
    title: 'How BAIRE Works \u2014 Your AI Home Buying Consultant',
    description: 'From first search to closing day. BAIRE walks you through every step agents charge $10,000+ for.',
    url: `${APP_URL}/how-baire-works`,
  },
}

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Find and evaluate homes',
    description: 'Paste a link from Zillow, Realtor.com, or any listing site. BAIRE analyzes comparable sales, pricing trends, and red flags \u2014 so you know what a home is actually worth before you even visit.',
    replaces: 'Replaces: Agent pricing your home\'s value',
    details: [
      'Comparable sales analysis in your target area',
      'Price-per-square-foot benchmarking',
      'Days-on-market context and seller motivation signals',
      'Red flag identification before you waste a visit',
    ],
  },
  {
    number: '02',
    icon: Calendar,
    title: 'Schedule showings yourself',
    description: 'Use BAIRE\'s word-for-word scripts to contact listing agents, book tours, and present yourself as a serious, qualified buyer. No agent needed to get in the door.',
    replaces: 'Replaces: Agent scheduling',
    details: [
      'Copy-paste scripts for contacting listing agents',
      'What to say at the showing (and what not to)',
      'Walkthrough checklist so you don\'t miss anything',
      'How to present as qualified without a buyer\'s agent',
    ],
  },
  {
    number: '03',
    icon: FileText,
    title: 'Build and negotiate offers',
    description: 'BAIRE helps you determine what to offer, how to structure terms, and when to push or walk away. Real-time scenario modeling for counteroffers and escalation.',
    replaces: 'Replaces: Agent negotiation',
    details: [
      'Offer price strategy based on comp data',
      'Contingency selection and term structuring',
      'Counteroffer playbooks with scenario modeling',
      'Pre-qualification through NFM Lending (licensed in 49 states)',
    ],
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Navigate inspections & appraisals',
    description: 'Know who to hire, how to read the report, which issues kill deals vs. minor fixes, and how to use findings as negotiation leverage.',
    replaces: 'Replaces: Agent referrals',
    details: [
      'How to choose and hire inspectors',
      'Inspection report translation \u2014 plain English',
      'Which findings are deal-breakers vs. cosmetic',
      'How to negotiate repair credits or price reductions',
    ],
  },
  {
    number: '05',
    icon: Shield,
    title: 'Close with confidence',
    description: 'Title company selection, closing document review in plain English, a closing day checklist, and an exit strategy playbook if anything goes sideways.',
    replaces: 'Replaces: Agent at closing table',
    details: [
      'Title company selection guidance',
      'Closing disclosure review in plain English',
      'Final walkthrough checklist',
      'Exit strategy playbook \u2014 how to back out if needed',
    ],
  },
]

export default function HowBAIREWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-sage-600 mb-4">How it works</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
              Everything an agent does.
              <br />
              <span className="text-sage-500">Without the agent.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-xl mx-auto">
              BAIRE walks you through every step of buying a home \u2014 from first search to closing day. No gaps. No guessing. No $10,000 commission.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 hover:border-sage-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-50">
                    <step.icon className="h-5 w-5 text-sage-600" />
                  </div>
                  <span className="text-xs font-bold tracking-[0.1em] uppercase text-sage-600">Step {step.number}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{step.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">{step.description}</p>

                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  {step.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-2.5 text-sm">
                      <Check className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{detail}</span>
                    </div>
                  ))}
                </div>

                <span className="inline-block text-xs text-slate-400 bg-slate-50 rounded-md px-3 py-1.5">
                  {step.replaces}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The math section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-sage-600 mb-4">The math</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
              The same knowledge. A fraction of the cost.
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
              {/* Agent card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-slate-400 mb-4">Traditional agent</p>
                <p className="text-4xl font-bold text-red-500 mb-2">$10,000\u2013$15,000</p>
                <p className="text-sm text-slate-500">2-3% on a $400K\u2013$600K home</p>
                <p className="text-sm text-slate-400 mt-3">Now paid by you, not the seller</p>
              </div>

              {/* BAIRE card */}
              <div className="bg-sage-600 rounded-2xl p-8 text-center text-white">
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-white/40 mb-4">BAIRE</p>
                <p className="text-4xl font-bold text-white mb-2">$995</p>
                <p className="text-sm text-white/50">One payment \u00b7 keep forever</p>
                <p className="text-sm text-white/40 mt-3">30-day money-back guarantee</p>
              </div>
            </div>

            <p className="text-slate-600 max-w-lg mx-auto leading-relaxed">
              A buyer&apos;s agent can&apos;t give you legal advice. Can&apos;t do your inspection. Can&apos;t appraise the home. What they <em>can</em> do &mdash; schedule showings, pull comps, coach you through offers &mdash; BAIRE does for 90% less.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-sage-600">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Try BAIRE before your next showing.
            </h2>
            <p className="text-xl text-sage-100 mb-10 max-w-lg mx-auto">
              No commitment. No contract. No buyer&apos;s agreement. Just the knowledge you need to buy confidently.
            </p>
            <Button
              asChild
              size="xl"
              className="bg-white text-sage-700 hover:bg-sage-50 text-base px-8 h-14 rounded-full"
            >
              <Link href="/signup">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <div className="mt-8 flex flex-wrap gap-6 justify-center">
              {['Free to try', '30-day money back', 'No buyer\'s agreement'].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-sm text-sage-200 font-medium">
                  <Check className="h-4 w-4 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HowTo Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Buy a Home Without a Buyer\'s Agent Using BAIRE',
            description: 'Step-by-step guide to purchasing a home without paying a buyer\'s agent commission, using BAIRE as your AI consultant.',
            totalTime: 'P60D',
            estimatedCost: {
              '@type': 'MonetaryAmount',
              currency: 'USD',
              value: '995',
            },
            step: steps.map((s, i) => ({
              '@type': 'HowToStep',
              position: i + 1,
              name: s.title,
              text: s.description,
            })),
          }),
        }}
      />
    </div>
  )
}
