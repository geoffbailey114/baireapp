'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Start with a question',
    description:
      'Ask BAIRE anything about home buying. Whether you\'re curious about earnest money, inspection contingencies, or closing costs—just ask.',
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
      'When you\'ve completed your purchase, mark your transaction as closed. You\'ll feel good about understanding every step of the process.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How BAIRE works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A simple process designed to empower you with knowledge throughout 
            your home-buying journey.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6 md:gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-600 text-white font-semibold">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-12 h-full w-px bg-sage-200" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
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
