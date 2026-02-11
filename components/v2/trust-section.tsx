'use client'

import { motion } from 'framer-motion'
import { RotateCcw, Calculator, Unlock } from 'lucide-react'

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
        </div>
      </div>
    </section>
  )
}
