'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
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
            Ready to buy your home with confidence?
          </h2>
          <p className="mt-4 text-lg text-sage-100">
            Join buyers who have used BAIRE to understand the home-buying 
            process. Start with a free trial or get full access for $599.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="xl" 
              className="bg-white text-sage-700 hover:bg-sage-50"
            >
              <Link href="/pricing">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
  size="xl"
  asChild
  className="bg-transparent border-2 border-white text-white hover:bg-sage-600 hover:text-white"
>
  <Link href="/consultant">Try Free</Link>
</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
