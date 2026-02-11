'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const sharedFeatures = [
  'Full AI consultant access',
  'Showing scripts & templates',
  'Offer strategy & comp analysis',
  'Inspection & closing guidance',
  'Exit strategy playbook',
  'Negotiation coaching',
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
              Simple. Clear. No surprises.
            </h2>
            <p className="text-lg text-slate-600 max-w-md mx-auto">
              Pick the path that works for you. Both include everything.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
            {/* Pay at Closing */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 p-8"
            >
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-slate-400 mb-4">Pay at Closing</p>
              <p className="text-4xl font-bold text-slate-900 mb-1">$2,495</p>
              <p className="text-sm text-slate-500 mb-6">Paid when your home closes</p>

              <ul className="space-y-3 mb-8">
                {sharedFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" asChild className="w-full rounded-full h-12">
                <Link href="/signup">Choose This Plan</Link>
              </Button>
            </motion.div>

            {/* Pay Today */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-sage-900 rounded-2xl p-8 text-white relative"
            >
              <span className="absolute -top-3 right-6 bg-sage-600 text-white text-xs font-bold px-3 py-1 rounded-md tracking-wide">
                SAVE $1,500
              </span>
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-white/40 mb-4">Pay Today</p>
              <p className="text-4xl font-bold text-white mb-1">$995</p>
              <p className="text-sm text-white/40 mb-6">One payment · instant access</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-[#6ECB94] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">Everything in Pay at Closing</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-[#6ECB94] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">Save $1,500 instantly</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-[#6ECB94] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">Immediate full access</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-[#6ECB94] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">30-day money-back guarantee</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-[#6ECB94] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">Keep access forever</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-[#6ECB94] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">Priority support</span>
                </li>
              </ul>

              <Button
                asChild
                className="w-full bg-white text-sage-700 hover:bg-sage-50 rounded-full h-12"
              >
                <Link href="/signup">
                  Get Started — $995
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-center text-sm text-slate-500 max-w-xl mx-auto leading-relaxed"
          >
            <strong className="text-slate-600">For context:</strong> A buyer&apos;s agent typically costs $10,000–$15,000 on a $400K–$600K home. BAIRE gives you the same knowledge for a fraction of the cost — with no contract and no lock-in.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
