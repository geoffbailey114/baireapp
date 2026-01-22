'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Start with a question',
    description:
      "Ask BAIRE anything about home buying. Whether you're curious about earnest money, inspection contingencies, or closing costs—just ask.",
  },
  {
    number: '02',
    title: 'Get clear explanations',
    description:
      'Receive straightforward answers in plain English. No jargon, no complexity. Just the information you need to understand your situation.',
  },
  {
    number: '03',
    title: 'Make informed decisions',
    description:
      'Use what you learn to guide your home-buying journey. BAIRE helps you know what questions to ask and what to consider.',
  },
  {
    number: '04',
    title: 'Close with confidence',
    description:
      "When you've completed your purchase, mark your transaction as closed. You'll feel good about understanding every step of the process.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            How BAIRE works
          </h2>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            A simple process designed to empower you with knowledge throughout 
            your home-buying journey.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-600 text-white text-lg font-semibold">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-7 top-14 h-full w-px bg-sage-200" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
