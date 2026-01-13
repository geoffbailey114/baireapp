'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    number: '01',
    title: 'Share a home you\'re interested in.',
    description:
      'Paste a link from Zillow, Redfin, or any listing site.',
  },
  {
    number: '02',
    title: 'Tour with confidence.',
    description:
      'I\'ll tell you what to look for and what questions to ask during your walkthrough.',
  },
  {
    number: '03',
    title: 'Prepare your offer.',
    description:
      'I\'ll help you think through price, terms, contingencies, and negotiation strategy — no guesswork.',
  },
  {
    number: '04',
    title: 'Close without commissions.',
    description:
      'From inspections to appraisal, title, and closing, I\'m with you every step of the way.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Buy smarter in four steps.
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6 md:gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-600 text-white font-semibold">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-12 h-full w-px bg-sage-200" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <Button asChild size="xl">
              <Link href="/pricing">
                Create Account (Free 48-Hour Trial)
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
