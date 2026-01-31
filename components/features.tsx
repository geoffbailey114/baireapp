'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
  HelpCircle, 
  Target, 
  ClipboardCheck, 
  Building, 
  Clock,
  Heart,
  Shield,
  Scale
} from 'lucide-react'

const features = [
  { icon: FileText, title: 'Offer strategy & pricing logic' },
  { icon: HelpCircle, title: 'Terms, contingencies, and timelines explained' },
  { icon: Target, title: 'Negotiation scenarios laid out clearly' },
  { icon: ClipboardCheck, title: 'Inspection and appraisal guidance' },
  { icon: Building, title: 'Financing and closing support' },
  { icon: Clock, title: '24/7 availability — no waiting, no pressure' },
]

export function Features() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-center mb-16"
          >
            Everything buyers thought they needed an agent for — without the agent.
          </motion.h2>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-4 bg-slate-50 rounded-xl px-6 py-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-slate-600" />
                </div>
                <span className="text-lg text-slate-900">{feature.title}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center text-lg text-slate-700"
          >
            No commissions. No conflicts of interest. No incentives that work against you.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
