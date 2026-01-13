'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const examples = [
  {
    quote: "I'd offer $420k here with a shorter inspection timeline and an appraisal cushion. It positions you to win without overpaying.",
  },
  {
    quote: "That furnace is near end-of-life — budget around $6,000 or negotiate a credit. I'll help you decide which fits your situation.",
  },
  {
    quote: "This home is likely to get multiple offers. Do you want an aggressive approach or a safer one? I'll lay out both.",
  },
  {
    quote: "If you're using VA financing, here's how I'd structure your terms so your offer still looks strong to the seller.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function ExampleResponses() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Ask anything. Get tactical answers.
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2"
        >
          {examples.map((example, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-100">
                    <MessageCircle className="h-5 w-5 text-sage-700" />
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed italic">
                  "{example.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
