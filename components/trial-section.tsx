'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function TrialSection() {
  return (
    <section className="py-20 md:py-28 bg-sage-600">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Try BAIRE free for 48 hours.
          </h2>
          <p className="mt-4 text-lg text-sage-100">
            See how much easier buying can feel when you have a smarter, faster, 
            always-on "agent" in your pocket — without actually hiring one.
          </p>
          <div className="mt-10">
            <Button 
              asChild 
              size="xl" 
              className="bg-white text-sage-700 hover:bg-sage-50"
            >
              <Link href="/pricing">
                Start Free — 48-Hour Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-sage-200">
            Advanced actions like offer prep, scheduling scripts, and waivers unlock with BAIRE Access after your trial.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
