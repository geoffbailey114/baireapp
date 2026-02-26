import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { APP_NAME, APP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About BAIRE',
  description: 'BAIRE was built by Geoff, a real estate professional with 13+ years of experience. One flat fee. No commissions. AI-powered home buying guidance.',
  alternates: {
    canonical: `${APP_URL}/about`,
  },
  openGraph: {
    title: `About | ${APP_NAME}`,
    description: 'Built by a real estate veteran with 13+ years of experience. BAIRE replaces the buyer\'s agent with AI-powered guidance for $995.',
    url: `${APP_URL}/about`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `About | ${APP_NAME}`,
    description: 'Built by a real estate veteran with 13+ years of experience. BAIRE replaces the buyer\'s agent with AI-powered guidance for $995.',
  },
}

export default function AboutPage() {
  return (
    <>
      <div className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-sm text-slate-400">
                <li>
                  <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-slate-600">About</li>
              </ol>
            </nav>

            {/* Header */}
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
              Why BAIRE exists.
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              The math changed. The tools caught up. Someone had to build this.
            </p>

            {/* Story */}
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                The NAR settlement changed everything.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                In 2024, the National Association of Realtors settled a landmark lawsuit. The result: buyers must now sign a buyer&apos;s agreement with their agent <em>before</em> touring homes. That agreement spells out what you — the buyer — pay. Usually 2-3% of the purchase price. On a $400,000 home, that&apos;s $8,000 to $12,000.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                For the first time, the cost of a buyer&apos;s agent is visible and unavoidable. And it raises a straightforward question: is that the best use of $10,000?
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
                Who built BAIRE.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                BAIRE was built by Geoff, a real estate professional with 13+ years of hands-on residential experience. Not a tech founder who read a few articles about real estate. Someone who has been inside the process — the offers, the negotiations, the inspections, the closings — for over a decade.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                After the NAR settlement, Geoff saw what was coming: buyers would be forced to confront agent costs for the first time, and the tools to replace that cost were finally good enough to build on. BAIRE is the result.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
                The mission.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                BAIRE gives home buyers everything an agent provides — comp analysis, negotiation coaching, showing scripts, offer strategy, inspection guidance, and closing support — for $995 instead of $10,000+.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                And because you&apos;re not bringing an agent, the seller keeps more money on your offer. Your offer is structurally stronger. That&apos;s not a pitch — it&apos;s math.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                BAIRE isn&apos;t anti-agent. Agents serve a purpose, and many are excellent at what they do. But the question isn&apos;t whether agents are good — it&apos;s whether signing a buyer&apos;s agreement and paying $10,000+ is the best option for <em>you</em>. For a growing number of buyers, it isn&apos;t.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
                How it works.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                BAIRE walks you through five stages: finding and evaluating homes, scheduling showings, building and negotiating offers, navigating inspections and appraisals, and closing with confidence. Every stage. Every market. One flat fee.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                7-day free trial. 30-day money-back guarantee. No buyer&apos;s agreement. No lock-in.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 bg-[#f4f7f4] rounded-xl p-8 text-center">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Ready to see how the math works?
              </h2>
              <p className="text-slate-600 mb-5">
                $995 instead of $10,000+. Try free for 7 days.
              </p>
              <Button asChild className="rounded-full">
                <Link href="/signup">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Person Schema for Geoff (founder) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Geoff',
            jobTitle: 'Founder',
            worksFor: {
              '@type': 'Organization',
              name: APP_NAME,
              url: APP_URL,
            },
            description: 'Founder of BAIRE with 13+ years of experience in residential real estate. Built BAIRE to give home buyers AI-powered guidance for $995 instead of $10,000+ in buyer agent commissions.',
            knowsAbout: [
              'Real estate',
              'Home buying process',
              'NAR settlement',
              'Buyer agent alternatives',
              'AI home buying technology',
              'Real estate negotiation',
              'Home inspections',
              'Real estate closings',
              'Comparable sales analysis',
            ],
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: APP_URL,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'About',
                item: `${APP_URL}/about`,
              },
            ],
          }),
        }}
      />
    </>
  )
}
