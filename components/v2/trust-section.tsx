'use client'

import { motion } from 'framer-motion'
import { RotateCcw, Calculator, Unlock, BadgeCheck } from 'lucide-react'

const trustCards = [
  {
    icon: RotateCcw,
    title: 'Money-back guarantee',
    description: 'Not satisfied within 30 days? Full refund. No questions. No hoops. No forms.',
  },
  {
    icon: Calculator,
    title: 'The math protects you',
    description: "Even if you pay an agent half their typical fee, you're still $4,000 ahead.",
  },
  {
    icon: Unlock,
    title: 'No lock-in. Ever.',
    description: "No buyer's agreement. No long-term commitment. Cancel anytime, for any reason. You stay because BAIRE is worth it — not because you're stuck.",
  },
]

export function TrustSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-sage-600 mb-4">Zero risk</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              We built this so you can&apos;t lose.
            </h2>
            <p className="text-lg text-slate-600 max-w-md mx-auto">
              No buyer&apos;s agreement. No lock-in. No fine print. Just answers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {trustCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-7 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-50 mx-auto mb-4">
                  <card.icon className="h-5 w-5 text-sage-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Pre-qualification guarantee — featured bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 bg-[#3d4a3d] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/40 mb-2">Included with BAIRE</p>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                Pre-qualified or your money back.
              </h3>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                No need to hunt for a mortgage broker. BAIRE connects you directly with a national lender for pre-qualification. If you can&apos;t get pre-qualified, we refund you in full.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-white/8 border border-white/10 rounded-xl px-6 py-4 text-center">
                <p className="text-[10px] font-semibold tracking-wide text-white/40 mb-1">Pre-qualification by</p>
                <p className="text-lg font-bold text-white tracking-wide">NFM Lending</p>
                <p className="text-[10px] text-white/30 mt-1">Licensed in 49 states · Est. 1998</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
