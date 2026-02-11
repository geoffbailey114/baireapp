'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroV2() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="container py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          {/* Social proof pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 bg-sage-50 border border-sage-200 rounded-full px-5 py-2.5 mb-8"
          >
            <div className="flex -space-x-2">
              <span className="w-7 h-7 rounded-full bg-sage-600 border-2 border-white flex items-center justify-center text-[11px] font-bold text-white">G</span>
              <span className="w-7 h-7 rounded-full bg-slate-500 border-2 border-white flex items-center justify-center text-[11px] font-bold text-white">M</span>
              <span className="w-7 h-7 rounded-full bg-sage-400 border-2 border-white flex items-center justify-center text-[11px] font-bold text-white">K</span>
            </div>
            <span className="text-sm font-medium text-slate-600">Join buyers saving $10,000+ on their home purchase</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl leading-[1.1]"
          >
            Buy your home.{' '}
            <span className="text-sage-600">Skip the commission.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            BAIRE gives you the knowledge of 100,000 agents — what to offer, what to ask, when to walk away — without signing a buyer's agreement or paying the 2–3% fee.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="xl" className="text-base px-8 h-14 rounded-full">
              <Link href="/signup">
                Start Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="text-base px-8 h-14 rounded-full">
              <Link href="#how-it-works">How It Works</Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-sm text-slate-500"
          >
            Free to try · $995 today or $2,495 at closing · <Link href="#pricing" className="underline hover:text-slate-700">See pricing</Link>
          </motion.p>
        </div>
      </div>
    </section>
  )
}
