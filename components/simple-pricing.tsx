'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { X, Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SimplePricing() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Simple, Clear Pricing
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              What BAIRE costs — and what you keep.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* With a buyer's agent */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 p-8"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-6">
                With a buyer&apos;s agent
              </h3>
              
              <div className="mb-6">
                <p className="text-3xl font-bold text-slate-900">2–3%</p>
                <p className="text-slate-500">commission paid at closing</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 mb-6">
                <p className="text-2xl font-bold text-slate-900">$10,000–$15,000</p>
                <p className="text-slate-500">on a typical home purchase</p>
              </div>
            </motion.div>

            {/* With BAIRE */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-sage-50 rounded-2xl border-2 border-sage-200 p-8"
            >
              <h3 className="text-lg font-semibold text-sage-900 mb-6">
                With BAIRE
              </h3>
              
              <div className="mb-6">
                <p className="text-3xl font-bold text-sage-700">$599 total</p>
                <p className="text-sage-600">limited-time price — regularly $999</p>
              </div>

              <div className="bg-white rounded-xl p-4 mb-6 border border-sage-200">
                <p className="text-lg font-semibold text-sage-800">Only paid when you&apos;re ready to make an offer</p>
              </div>
            </motion.div>
          </div>

          {/* You keep the rest */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mb-16"
          >
            <p className="text-2xl font-bold text-slate-900 mb-4">
              You keep the rest.
            </p>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              That&apos;s thousands of dollars you don&apos;t give up — and leverage you can use to win.
            </p>
          </motion.div>

          {/* When there's no buyer's agent commission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-slate-50 rounded-2xl p-8 mb-12"
          >
            <p className="text-lg font-semibold text-slate-900 mb-6 text-center">
              When there&apos;s no buyer&apos;s agent commission:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">The seller has less to pay out</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Your offer looks stronger without raising the price</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">You can win with better terms instead of more money</span>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <Button asChild size="xl" className="text-base px-8 h-14 rounded-full">
              <Link href="/signup">
                Try BAIRE free for 48 hours
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="mt-4 text-sm text-slate-500">
              $599 when you make an offer · Regularly $999
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
