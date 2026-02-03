'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const leverageBenefits = [
  "Win without raising your price",
  "Bring less cash to closing",
  "Offer better terms than competing buyers",
  "Stand out in competitive situations",
]

const baireIs = [
  "Calm",
  "Strategic",
  "Always available",
]

const baireIsNot = [
  "Anxiety",
  "Pressure",
  "Commissions",
  "Conflicts",
]

export function TacticalAnswers() {
  return (
    <>
      {/* Leverage section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-center mb-8"
            >
              Skip the 3%. Gain the advantage.
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center mb-12"
            >
              <p className="text-xl text-slate-600 leading-relaxed mb-4">
                On a $400,000 home, you skip $12,000 in buyer&apos;s agent fees.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                That makes your offer easier for the seller to say yes to.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="bg-slate-50 rounded-2xl p-8 inline-block">
                <p className="text-lg font-medium text-slate-900 mb-6">
                  With BAIRE, skipping the 3% lets you:
                </p>
                <ul className="space-y-4">
                  {leverageBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center text-lg font-medium text-slate-900"
            >
              BAIRE users compete with an advantage — by design.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Emotional section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-center mb-12"
            >
              Buying is emotional. BAIRE isn&apos;t.
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-8"
              >
                <p className="text-lg font-medium text-slate-900 mb-6">
                  BAIRE thinks like a seasoned buyer&apos;s agent:
                </p>
                <ul className="space-y-4">
                  {baireIs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-8"
              >
                <p className="text-lg font-medium text-slate-900 mb-6">
                  But without:
                </p>
                <ul className="space-y-4">
                  {baireIsNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
