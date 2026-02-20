'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const trustItems = [
  '7 days free',
  '30-day money back',
  "No buyer's agreement",
]

export function CTAV2() {
  return (
    <section className="py-24 md:py-32 bg-sage-600">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            You were right to question it.{' '}
            <span className="text-sage-200">BAIRE is what comes next.</span>
          </h2>
          <p className="mt-6 text-xl text-sage-100 leading-relaxed max-w-lg mx-auto">
            No buyer&apos;s agreement. No lock-in. 7 days free. Everything you need from first showing to closing day.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="xl"
              className="bg-white text-sage-700 hover:bg-sage-50 text-base px-8 h-14 rounded-full"
            >
              <Link href="/signup">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 justify-center">
            {trustItems.map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-sm text-sage-200 font-medium">
                <Check className="h-4 w-4 flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
