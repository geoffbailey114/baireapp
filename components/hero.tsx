'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, BookOpen, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sage-50/50 to-white">
      <div className="container py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-sage-100 px-4 py-1.5 text-sm font-medium text-sage-700 mb-8">
              Your AI-Powered Home Buying Guide
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl leading-[1.1]"
          >
            Buy your home with{' '}
            <span className="text-sage-600">confidence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            BAIRE is an AI-powered educational consultant that helps self-represented 
            home buyers understand the process, terminology, and considerations 
            involved in purchasing a home. Get clear answers to your questions, 
            understand documents, and feel empowered throughout your journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="xl" className="text-base px-8 h-14 rounded-full">
              <Link href="/pricing">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="text-base px-8 h-14 rounded-full">
              <Link href="/consultant">Try Free</Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500"
          >
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-sage-600" />
              <span>Educational only</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-sage-600" />
              <span>Plain English</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-sage-600" />
              <span>24/7 availability</span>
            </div>
          </motion.div>
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
