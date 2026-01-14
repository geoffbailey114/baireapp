'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sage-50/50 to-white">
      <div className="container py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-sage-100 px-3 py-1 text-sm font-medium text-sage-700 mb-6">
              Buy Without a Buyer's Agent
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
          >
            Get the House You Want.{' '}
            <span className="text-sage-600">Skip the Buyer Agent Commission.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-slate-600 leading-relaxed"
          >
            Go from walkthrough to winning offer without a buyer's agent.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="xl">
              <Link href="/pricing">
                Start Free — 48-Hour Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="#how-it-works">How BAIRE Works</Link>
            </Button>
          </motion.div>

          {/* Micro-line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 text-sm text-slate-500"
          >
            Unlock offer strategy for $99 only when you're ready to compete.
          </motion.p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-x-0 top-0 -z-10 h-full overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-20">
          <div className="aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-sage-300 to-sage-100" />
        </div>
      </div>
    </section>
  )
}
