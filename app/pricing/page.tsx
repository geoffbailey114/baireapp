import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { APP_NAME, APP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Pricing — $995 One Time | Save $10,000+ vs a Buyer\'s Agent',
  description: 'BAIRE costs $995 one time. A buyer\'s agent costs $10,000–$15,000. Same knowledge. No commission. 30-day money-back guarantee.',
  alternates: {
    canonical: `${APP_URL}/pricing`,
  },
  openGraph: {
    title: `Pricing | ${APP_NAME}`,
    description: '$995 one time. Everything included. 30-day money-back guarantee.',
    url: `${APP_URL}/pricing`,
  },
}

const features = [
  'Full AI consultant — from first search to closing day',
  'Comp analysis & pricing intelligence',
  'Showing scripts & listing agent contact info',
  'Offer strategy & negotiation coaching',
  'Inspection & appraisal guidance',
  'Exit strategy playbook',
  'NFM Lending pre-qualification',
  'Priority support',
]

const faqs = [
  {
    q: 'What\'s included?',
    a: 'Everything. Comp analysis, showing scripts, offer strategy, negotiation coaching, inspection guidance, closing support, NFM Lending pre-qualification, and priority support. One price, no tiers, no upsells.',
  },
  {
    q: 'How long do I have access?',
    a: 'Forever. One payment, permanent access. BAIRE stays with you from first search through closing and beyond.',
  },
  {
    q: 'What if it doesn\'t work for me?',
    a: '30-day money-back guarantee. No questions, no conditions. If BAIRE doesn\'t deliver, you get a full refund.',
  },
  {
    q: 'What if I can\'t get pre-qualified?',
    a: 'BAIRE connects you with NFM Lending — a national lender licensed in 49 states. If you can\'t get pre-qualified, we refund you in full. You don\'t pay for something you can\'t use.',
  },
  {
    q: 'How does this compare to a buyer\'s agent?',
    a: 'A buyer\'s agent costs 2–3% of the home price — that\'s $10,000–$15,000 on a typical home. Since the NAR settlement, that commission comes out of your pocket. BAIRE gives you the same knowledge for $995.',
  },
  {
    q: 'Is BAIRE a real estate agent or broker?',
    a: 'No. BAIRE is a technology platform — an AI consultant. We don\'t negotiate on your behalf, provide legal advice, or create any agency relationship. We give you the knowledge to act on your own behalf.',
  },
]

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-sage-600 mb-4">Pricing</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-4">
              One price. Everything included.
            </h1>
            <p className="text-xl text-slate-600 max-w-lg mx-auto">
              No tiers. No upsells. No surprises.
            </p>
          </div>

          {/* Single pricing card */}
          <div className="max-w-md mx-auto bg-[#3d4a3d] rounded-2xl p-10 text-white overflow-hidden">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/40 mb-5">Full access</p>
            <p className="text-5xl font-bold text-white mb-2">$995</p>
            <p className="text-sm text-white/50 mb-8">One payment · instant access · keep forever</p>

            <ul className="space-y-3.5 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white/75">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="w-full bg-white text-[#3d4a3d] hover:bg-white/90 rounded-full h-13 text-base font-semibold"
            >
              <Link href="/signup">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <p className="text-center text-xs text-white/40 mt-4">
              30-day money-back guarantee · No buyer&apos;s agreement
            </p>
          </div>

          {/* Agent cost anchor */}
          <p className="text-center text-sm text-slate-500 max-w-lg mx-auto leading-relaxed mt-10">
            <strong className="text-slate-600">For context:</strong> A buyer&apos;s agent typically costs $10,000–$15,000 on a $400K–$600K home. BAIRE gives you the same knowledge for a fraction of the cost — with no contract and no lock-in.
          </p>
        </div>
      </section>

      {/* What's included deep-dive */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
              What you get
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Comp Analysis', desc: 'Know what a home is actually worth before you offer. Comparable sales, price-per-sqft, days on market.' },
                { title: 'Showing Scripts', desc: 'Word-for-word scripts to contact listing agents, schedule tours, and present as a serious buyer.' },
                { title: 'Offer Strategy', desc: 'What to offer, how to structure terms, which contingencies to include, and when to walk away.' },
                { title: 'Negotiation Coaching', desc: 'Counteroffer playbooks, escalation strategies, and scenario modeling for every situation.' },
                { title: 'Inspection Guidance', desc: 'How to hire inspectors, read reports, identify deal-breakers, and negotiate repairs.' },
                { title: 'Closing Support', desc: 'Title company selection, closing doc review in plain English, and a closing day checklist.' },
                { title: 'Pre-Qualification', desc: 'Direct connection to NFM Lending — licensed in 49 states. Money-back if you can\'t get pre-qualified.' },
                { title: 'Exit Playbook', desc: 'How to back out of a deal if something goes wrong. Your rights, your options, your timeline.' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-slate-200 p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
              Common questions
            </h2>
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-sage-600">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              $995 today. $10,000+ saved at closing.
            </h2>
            <p className="text-xl text-sage-100 mb-10">
              30-day money-back guarantee. No risk.
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
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-slate-50">
        <div className="container">
          <p className="text-xs text-slate-400 text-center max-w-2xl mx-auto leading-relaxed">
            BAIRE is an educational technology platform, not a real estate agent, broker, lawyer, or financial advisor.
            BAIRE does not negotiate on your behalf or provide legal, tax, or financial advice.
          </p>
        </div>
      </section>

      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'BAIRE — AI Home Buying Consultant',
            description: 'AI-powered consultant that replaces the buyer\'s agent. Comp analysis, negotiation coaching, offer strategy, and closing guidance.',
            offers: {
              '@type': 'Offer',
              price: '995',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              priceValidUntil: '2026-12-31',
              url: `${APP_URL}/pricing`,
            },
          }),
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </div>
  )
}
