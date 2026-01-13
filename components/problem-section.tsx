'use client'

import { motion } from 'framer-motion'

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Buying a home shouldn't require hiring a buyer's agent.
          </h2>
          <div className="mt-8 text-lg text-slate-600 leading-relaxed space-y-4">
            <p>
              Touring homes is simple.<br />
              Making offers is clear.<br />
              Negotiating isn't magic.
            </p>
            <p>
              But the industry makes you think you need a buyer's agent for all of it.
            </p>
            <p className="text-sage-700 font-medium">
              BAIRE makes buying more transparent, more confident, and far less expensive.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
