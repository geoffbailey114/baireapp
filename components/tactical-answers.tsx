'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    number: '01',
    title: "Share a home you're interested in.",
    description: 'Paste a Zillow, Redfin, or MLS link.',
  },
  {
    number: '02',
    title: 'Schedule your own showing.',
    description: "BAIRE provides a script, waiver, and steps to book tours without hiring a buyer's agent.",
  },
  {
    number: '03',
    title: 'Tour with confidence.',
    description: 'Know what to look for, what to ask, and how to spot red flags during walkthroughs.',
  },
  {
    number: '04',
    title: 'Prepare a winning offer.',
    description: "BAIRE helps you think through price, terms, contingencies, and negotiation strategy — without a buyer's agent.",
  },
  {
    number: '05',
    title: 'Close without commissions.',
    description: 'From inspections to appraisal, title, and closing, BAIRE stays with you until the finish line.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-center mb-16"
          >
            Buying without a buyer&apos;s agent is now simple.
          </motion.h2>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-600 text-white font-semibold">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-12 h-full w-px bg-sage-200" />
                  )}
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Button asChild size="xl" className="text-base px-8 h-14 rounded-full">
              <Link href="/signup">
                Start Free — 48-Hour Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
