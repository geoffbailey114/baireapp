'use client'

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center mb-12">
            Buying a home shouldn't require hiring a buyer's agent.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What the industry says */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200">
                  <X className="h-5 w-5 text-slate-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-700">What the industry says</h3>
              </div>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>"You need an agent to tour homes"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>"Making offers is complicated"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>"Negotiating takes years of experience"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>"The 2–3% commission is just how it works"</span>
                </li>
              </ul>
            </div>

            {/* The reality */}
            <div className="rounded-2xl border border-sage-200 bg-sage-50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-200">
                  <Check className="h-5 w-5 text-sage-700" />
                </div>
                <h3 className="text-lg font-semibold text-sage-800">The reality</h3>
              </div>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
                  <span>Touring homes is simple</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
                  <span>Making offers is clear</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
                  <span>Negotiating isn't magic</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
                  <span>You can save $10,000–$15,000</span>
                </li>
              </ul>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 text-center text-lg text-sage-700 font-medium"
          >
            BAIRE makes buying more transparent, more confident, and far less expensive.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
