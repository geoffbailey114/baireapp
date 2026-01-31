'use client'

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

const industryMyths = [
  "You need an agent to tour homes",
  "Offers are complicated",
  "Negotiation takes years of experience",
  "The 2–3% commission is unavoidable",
]

const reality = [
  "Touring homes is straightforward",
  "Offers follow clear structures",
  "Negotiation is logic + leverage",
  "That 2–3% can work for you",
]

export function IndustryReality() {
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
            Buying a home changed. The playbook didn&apos;t.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* What the industry says */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                  <X className="h-5 w-5 text-slate-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">What the industry still says</h3>
              </div>
              <ul className="space-y-4">
                {industryMyths.map((myth) => (
                  <li key={myth} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                    <span className="text-slate-600">&quot;{myth}&quot;</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* The reality */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-100">
                  <Check className="h-5 w-5 text-sage-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">What&apos;s actually true</h3>
              </div>
              <ul className="space-y-4">
                {reality.map((fact) => (
                  <li key={fact} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{fact}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center text-lg text-slate-700"
          >
            BAIRE replaces outdated assumptions with clarity, structure, and control.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
