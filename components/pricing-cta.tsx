'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const benefits = [
  "Understand every move",
  "Control the process",
  "Keep your leverage",
]

export function PricingCTA() {
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
            Try BAIRE free.
          </h2>
          <p className="mt-6 text-xl text-sage-100 leading-relaxed">
            See how much easier buying feels when you:
          </p>
          <ul className="mt-6 space-y-3 inline-block text-left">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3 text-sage-100 text-lg">
                <Check className="h-5 w-5 text-sage-200 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button 
              asChild 
              size="xl" 
              className="bg-white text-sage-700 hover:bg-sage-50 text-base px-8 h-14 rounded-full"
            >
              <Link href="/signup">
                Start Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-sage-200">
            7-day free trial &middot; $995 for full access through closing
          </p>
        </motion.div>
      </div>
    </section>
  )
}
