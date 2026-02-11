'use client'

import { motion } from 'framer-motion'
import { DollarSign } from 'lucide-react'

const agentRows = [
  { label: 'Home price', value: '$400,000', highlight: false },
  { label: 'Agent fee (2.5%)', value: '$10,000', highlight: true, negative: true },
  { label: 'You sign', value: 'Buyer agreement', highlight: false },
  { label: 'You control', value: 'Very little', highlight: false },
]

const baireRows = [
  { label: 'Home price', value: '$400,000', highlight: false },
  { label: 'BAIRE', value: '$995', highlight: true },
  { label: 'You sign', value: 'Nothing', highlight: true },
  { label: 'You control', value: 'Everything', highlight: true },
]

export function MathChanged() {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-sage-600 mb-4">The math changed</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Buyer&apos;s agents aren&apos;t free anymore.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-lg text-slate-600 max-w-xl mx-auto mb-14 leading-relaxed"
          >
            Today, most agents require a signed buyer agreement before they&apos;ll work with you. That agreement spells out what <strong className="text-slate-900">you</strong> pay — typically 2–3% of your home&apos;s price.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Agent Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="text-xs font-bold tracking-[0.1em] uppercase text-slate-400">With a buyer&apos;s agent</span>
              </div>

              <div className="space-y-0">
                {agentRows.map((row) => (
                  <div key={row.label} className="flex justify-between items-baseline py-3 border-b border-slate-100 last:border-b-0">
                    <span className="text-sm text-slate-500">{row.label}</span>
                    <span className={`text-sm font-semibold ${row.negative ? 'text-red-500' : 'text-slate-900'}`}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t-2 border-slate-100 flex justify-between items-baseline">
                <span className="text-xs font-bold tracking-wide uppercase text-slate-400">Added cost</span>
                <span className="text-3xl font-bold text-red-500">$10,000</span>
              </div>
            </motion.div>

            {/* BAIRE Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-sage-950 rounded-2xl p-8 text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-xs font-bold tracking-[0.1em] uppercase text-white/40">With BAIRE</span>
              </div>

              <div className="space-y-0">
                {baireRows.map((row) => (
                  <div key={row.label} className="flex justify-between items-baseline py-3 border-b border-white/5 last:border-b-0">
                    <span className="text-sm text-white/40">{row.label}</span>
                    <span className={`text-sm font-semibold ${row.highlight ? 'text-green-400' : 'text-white'}`}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t-2 border-white/10 flex justify-between items-baseline">
                <span className="text-xs font-bold tracking-wide uppercase text-white/40">Added cost</span>
                <span className="text-3xl font-bold text-green-400">$995</span>
              </div>

              <div className="mt-4 bg-green-400/10 border border-green-400/15 rounded-xl px-4 py-3 flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-sm font-medium text-green-400">You keep $9,005 more in your pocket</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
