'use client'

import { motion } from 'framer-motion'

export function WhyBAIREWorks() {
  return (
    <section className="py-20 md:py-28 bg-sage-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Buying is emotional. BAIRE isn't.
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            BAIRE thinks like a seasoned buyer's agent — but without anxiety, pressure, or commissions.
            I'm always available, always strategic, and always working in your best interest.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
