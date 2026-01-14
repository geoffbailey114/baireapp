'use client'

import { motion } from 'framer-motion'
import { 
  FileText,
  HelpCircle,
  Target,
  ClipboardCheck,
  Landmark,
  Clock,
  Heart,
  ShieldCheck,
  Scale
} from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Prepare stronger offers',
  },
  {
    icon: HelpCircle,
    title: 'Explain terms and contingencies',
  },
  {
    icon: Target,
    title: 'Plan negotiation strategy',
  },
  {
    icon: ClipboardCheck,
    title: 'Inspect + appraise with guidance',
  },
  {
    icon: Landmark,
    title: 'Support financing + closing',
  },
  {
    icon: Clock,
    title: '24/7 always-on (no waiting for call/text)',
  },
  {
    icon: Heart,
    title: 'No sales incentives',
  },
  {
    icon: ShieldCheck,
    title: 'No pressure',
  },
  {
    icon: Scale,
    title: 'No conflict of interest',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
}

export function Features() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything a good buyer's agent does — without commissions.
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-4xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sage-100">
                <feature.icon className="h-5 w-5 text-sage-700" aria-hidden="true" />
              </div>
              <span className="text-slate-700 font-medium">
                {feature.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
