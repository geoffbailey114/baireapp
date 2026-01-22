'use client'

import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'

const examples = [
  "I'd offer $420k here with a shorter inspection timeline and an appraisal cushion. It positions you to win without overpaying.",
  "That furnace is near end-of-life — budget around $6,000 or negotiate a credit. I'll help you decide which fits your situation.",
  "This home is likely to get multiple offers. Do you want an aggressive approach or a safer one? I'll lay out both.",
  "If you're using VA financing, here's how I'd structure your terms so your offer still looks strong to the seller.",
]

export function TacticalAnswers() {
  return (
    <>
      {/* Emotional section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
            >
              Buying is emotional.<br />BAIRE isn&apos;t.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-xl text-slate-600 leading-relaxed"
            >
              BAIRE thinks like a seasoned buyer&apos;s agent — but without anxiety, 
              pressure, or commissions. BAIRE is always available, always strategic, 
              and always working in your best interest.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tactical answers section */}
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
              Ask anything. Get tactical answers.
            </motion.h2>

            <div className="space-y-4">
              {examples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex gap-4 bg-white rounded-2xl p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-slate-500" />
                  </div>
                  <p className="text-slate-600 italic leading-relaxed pt-1">
                    &quot;{example}&quot;
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
