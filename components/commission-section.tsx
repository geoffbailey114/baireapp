'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function CommissionSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Stop paying 2–3% commissions for buyer representation.
          </h2>
          <div className="mt-6 text-lg text-slate-600 leading-relaxed space-y-4">
            <p>
              On a $500,000 home, a 2–3% buyer's agent commission is <strong className="text-slate-900">$10,000–$15,000</strong>.
            </p>
            <p>
              BAIRE gives you the support you need for a fraction of that.
            </p>
          </div>
          <div className="mt-10">
            <Button variant="outline" size="xl" asChild>
              <Link href="/pricing">See Pricing</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
