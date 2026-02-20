'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const advantages = [
  {
    title: 'Win without raising your price.',
    description: 'Your offer competes on equal footing while costing the seller $10,000 less.',
  },
  {
    title: 'Stand out in bidding wars.',
    description: 'In multiple-offer situations, sellers actively favor unrepresented buyers for this exact reason.',
  },
  {
    title: 'Negotiate from a position of strength.',
    description: "You can offer the seller more net proceeds without moving your price — a lever agents never give you.",
  },
]

export function CompetitiveAdvantage() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

            {/* Left: Stacked comparison card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
            >
              {/* Dark header bar */}
              <div className="bg-sage-900 px-8 py-4">
                <p className="text-xs font-bold tracking-[0.12em] uppercase text-white/80">
                  Same offer. Two very different outcomes.
                </p>
              </div>

              {/* Buyer with agent */}
              <div className="px-8 pt-6 pb-5">
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-slate-400 mb-4">
                  Buyer with agent &mdash; $400K offer
                </p>
                <div className="flex justify-between py-3 border-b border-slate-100 text-sm">
                  <span className="text-slate-500">Offer price</span>
                  <span className="font-semibold text-slate-900">$400,000</span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-100 text-sm">
                  <span className="text-slate-500">Buyer agent fee (2.5%)</span>
                  <span className="font-semibold text-red-500">&minus;$10,000</span>
                </div>
                <div className="flex justify-between items-baseline pt-4 mt-2 border-t-2 border-slate-100">
                  <span className="text-sm font-bold text-slate-500">Seller nets</span>
                  <span className="text-2xl font-bold text-slate-900">$390,000</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-200" />

              {/* BAIRE buyer */}
              <div className="px-8 pt-6 pb-5">
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-slate-400 mb-4">
                  BAIRE buyer &mdash; same $400K offer
                </p>
                <div className="flex justify-between py-3 border-b border-slate-100 text-sm">
                  <span className="text-slate-500">Offer price</span>
                  <span className="font-semibold text-slate-900">$400,000</span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-100 text-sm">
                  <span className="text-slate-500">Buyer agent fee</span>
                  <span className="font-semibold text-sage-600">$0</span>
                </div>
                <div className="flex justify-between items-baseline pt-4 mt-2 border-t-2 border-slate-100">
                  <span className="text-sm font-bold text-slate-500">Seller nets</span>
                  <span className="text-2xl font-bold text-sage-700">$400,000</span>
                </div>
              </div>

              {/* Bottom pill */}
              <div className="mx-8 mb-6">
                <div className="bg-sage-50 border border-sage-200 rounded-xl px-4 py-3 flex items-center gap-2">
                  <Check className="h-4 w-4 text-sage-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-sage-700">Seller keeps $10,000 more &mdash; you win the deal</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Headline + checkpoints */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:pt-4"
            >
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-sage-600 mb-4">Your hidden advantage</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-4">
                Going without an agent doesn&apos;t weaken your offer.{' '}
                <span className="italic text-sage-700">It strengthens it.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                When two buyers bid the same amount, the one without an attached commission is the better deal for the seller &mdash; every time.
              </p>

              <div className="space-y-8">
                {advantages.map((adv, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-7 h-7 rounded-full bg-sage-600 flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">{adv.title}</p>
                      <p className="text-slate-600 leading-relaxed">{adv.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
