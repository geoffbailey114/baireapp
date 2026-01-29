'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="container py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700 mb-8">
              Buy Without a Buyer&apos;s Agent
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl leading-[1.1]"
          >
            Win the house you want.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            BAIRE helps you go from walkthrough to winning offer — without hiring 
            a buyer&apos;s agent or paying their commission.
          </motion.p>

          {/* Savings callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 inline-flex items-center gap-4 bg-slate-50 rounded-2xl px-8 py-5"
          >
            <span className="text-3xl md:text-4xl font-bold text-slate-900">$10K–$15K</span>
            <span className="text-slate-600 text-left">saved on a typical home<br />purchase</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="xl" className="text-base px-8 h-14 rounded-full">
              <Link href="/signup">
                Start Free — 48-Hour Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="text-base px-8 h-14 rounded-full">
              <Link href="/how-baire-works">How BAIRE Works</Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 text-sm text-slate-500"
          >
            $99 after trial · $500 when you make an offer · <Link href="/signup?tier=access" className="underline hover:text-slate-700">Skip trial →</Link>
          </motion.p>
        </div>
      </div>
    </section>
  )
}
