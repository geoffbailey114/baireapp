'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const advantages = [
  'Win without raising your price',
  'Stand out in bidding wars',
  'Negotiate from a position of strength',
]

export function CompetitiveAdvantage() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-sage-600 mb-4">Your hidden advantage</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Your offer is stronger without an agent.
            </h2>
            <p className="text-lg text-slate-600 max-w-lg mx-auto">
              Most people think skipping an agent weakens their position. It&apos;s the opposite.
            </p>
          </motion.div>

          {/* Side-by-side offer comparison */}
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 items-center mt-14 mb-12">
            {/* Represented buyer offer */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="text-xs font-bold tracking-[0.1em] uppercase text-slate-400">Buyer with agent</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-200 text-sm">
                <span className="text-slate-500">Offer price</span>
                <span className="font-semibold text-slate-900">$400,000</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-200 text-sm">
                <span className="text-slate-500">Buyer&apos;s agent fee (2.5%)</span>
                <span className="font-semibold text-red-500">&minus;$10,000</span>
              </div>
              <div className="flex justify-between items-baseline pt-5 mt-3 border-t-2 border-slate-200">
                <span className="text-xs font-bold tracking-wide uppercase text-slate-400">Seller keeps</span>
                <span className="text-2xl font-bold text-red-500">$390,000</span>
              </div>
            </motion.div>

            {/* VS divider */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="hidden md:flex items-center justify-center px-4"
            >
              <span className="text-xs font-bold text-slate-400 tracking-widest">VS</span>
            </motion.div>

            {/* BAIRE buyer offer */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-sage-600 rounded-2xl p-8 text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
                <span className="text-xs font-bold tracking-[0.1em] uppercase text-white/40">BAIRE buyer</span>
              </div>
              <div className="flex justify-between py-3 border-b border-white/5 text-sm">
                <span className="text-white/40">Offer price</span>
                <span className="font-semibold text-white">$400,000</span>
              </div>
              <div className="flex justify-between py-3 border-b border-white/5 text-sm">
                <span className="text-white/40">Buyer&apos;s agent fee</span>
                <span className="font-semibold text-white">$0</span>
              </div>
              <div className="flex justify-between items-baseline pt-5 mt-3 border-t-2 border-white/10">
                <span className="text-xs font-bold tracking-wide uppercase text-white/40">Seller keeps</span>
                <span className="text-2xl font-bold text-white">$400,000</span>
              </div>
            </motion.div>
          </div>

          {/* Punchline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              <strong className="text-slate-900">Same offer. Same price. The seller keeps $10,000 more.</strong>{' '}
              When two buyers bid the same amount, the one without an agent&apos;s commission attached is the better deal for the seller &mdash; every time.
            </p>

            {/* Upgraded advantage badges with green circle checkmarks */}
            <div className="flex flex-wrap gap-4 justify-center">
              {advantages.map((adv, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2.5 bg-sage-50 border border-sage-200 text-sage-700 text-sm font-medium px-5 py-2.5 rounded-full"
                >
                  <span className="w-5 h-5 rounded-full bg-sage-600 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  {adv}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
