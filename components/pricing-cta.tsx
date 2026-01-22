'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function PricingCTA() {
  return (
    <>
      {/* Stop paying commissions */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
            >
              Stop paying 2–3% commissions for buyer representation.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-xl text-slate-600"
            >
              On a $500,000 home, a 2–3% buyer&apos;s agent commission is{' '}
              <span className="font-semibold text-slate-900">$10,000–$15,000</span>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-slate-600"
            >
              BAIRE gives you the support you need for a fraction of that.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <Button variant="outline" asChild size="xl" className="text-base px-8 h-14 rounded-full">
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Try BAIRE free CTA */}
      <section className="py-24 md:py-32 bg-sage-600">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Try BAIRE free for 48 hours.
            </h2>
            <p className="mt-6 text-xl text-sage-100 leading-relaxed">
              See how much easier buying can feel when you have a smarter, faster, 
              always-on &quot;agent&quot; in your pocket — without actually hiring one.
            </p>
            <div className="mt-10">
              <Button 
                asChild 
                size="xl" 
                className="bg-white text-sage-700 hover:bg-sage-50 text-base px-8 h-14 rounded-full"
              >
                <Link href="/signup">
                  Start Free — 48-Hour Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-sage-200">
              Advanced actions like offer prep, scheduling scripts, and waivers unlock with BAIRE Access after your trial.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
