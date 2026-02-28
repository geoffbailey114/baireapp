'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
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
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to buy your home with confidence?
          </h2>
          <p className="mt-6 text-xl text-sage-100 leading-relaxed">
            Join buyers who have used BAIRE to understand the home-buying 
            process. Start with a free trial or get full access for $995.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="xl" 
              className="bg-white text-sage-700 hover:bg-sage-50 text-base px-8 h-14 rounded-full"
            >
              <Link href="/pricing">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              asChild
              className="border-2 border-white/30 text-white hover:bg-white/10 text-base px-8 h-14 rounded-full"
            >
              <Link href="/consultant">Try Free</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
