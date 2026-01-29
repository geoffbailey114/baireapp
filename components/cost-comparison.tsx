'use client'

import { motion } from 'framer-motion'

export function CostComparison() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            Typical homebuying costs
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left: Standard costs */}
            <div className="space-y-4">
              <div className="flex items-center justify-between py-4 border-b border-slate-100">
                <span className="text-slate-600">Home Inspection</span>
                <span className="font-semibold text-slate-900">$500–$1,000</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-slate-100">
                <span className="text-slate-600">Appraisal</span>
                <span className="font-semibold text-slate-900">$500–$700</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-sage-200 bg-sage-50 -mx-4 px-4 rounded-lg">
                <span className="text-sage-800 font-medium">BAIRE</span>
                <span className="font-bold text-sage-700">$599 total</span>
              </div>
            </div>

            {/* Right: Commission avoided */}
            <div className="flex flex-col justify-center">
              <div className="bg-slate-50 rounded-2xl p-8 text-center">
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wide mb-2">
                  Buyer-agent commission avoided
                </p>
                <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                  $10K–$15K<span className="text-2xl">+</span>
                </p>
                <p className="text-slate-500 text-sm">
                  typically, on a home purchase
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
