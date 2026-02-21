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
            Get the knowledge of 100,000 agents without signing a buyer&apos;s agreement &mdash; and keep $10,000 or more in your pocket.
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
            Free to try &middot; $995 one time &middot; <Link href="#pricing" className="underline hover:text-slate-700">See pricing</Link>
          </motion.p>
        </div>
      </div>
    </section>
  )
}
