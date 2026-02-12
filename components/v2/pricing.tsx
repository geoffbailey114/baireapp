'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  'Full AI consultant — from first search to closing day',
  'Comp analysis & pricing intelligence',
  'Showing scripts & listing agent contact info',
  'Offer strategy & negotiation coaching',
  'Inspection & appraisal guidance',
  'Exit strategy playbook',
  'NFM Lending pre-qualification',
  'Priority support',
]

export function PricingV2() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-sage-600 mb-4">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              One price. Everything included.
            </h2>
            <p className="text-lg text-slate-600 max-w-md mx-auto">
              No tiers. No upsells. No surprises.
            </p>
          </motion.div>

          {/* Single pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-md mx-auto bg-[#3d4a3d] rounded-2xl p-10 text-white overflow-hidden"
          >
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/40 mb-5">Full access</p>
            <p className="text-5xl font-bold text-white mb-2">$995</p>
            <p className="text-sm text-white/50 mb-8">One payment · instant access · keep forever</p>

            <ul className="space-y-3.5 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white/75">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="w-full bg-white text-[#3d4a3d] hover:bg-white/90 rounded-full h-13 text-base font-semibold"
            >
              <Link href="/signup">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <p className="text-center text-xs text-white/40 mt-4">
              30-day money-back guarantee · No buyer&apos;s agreement
            </p>
          </motion.div>

          {/* Context anchor */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-center text-sm text-slate-500 max-w-lg mx-auto leading-relaxed mt-10"
          >
            <strong className="text-slate-600">For context:</strong> A buyer&apos;s agent typically costs $10,000–$15,000 on a $400K–$600K home. BAIRE gives you the same knowledge for a fraction of the cost — with no contract and no lock-in.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
