'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
  HelpCircle, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Users 
} from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Document Understanding',
    description:
      "Get clear explanations of contracts, disclosures, and other documents. Understand what you're signing before you sign it.",
  },
  {
    icon: HelpCircle,
    title: 'Questions Answered',
    description:
      'Ask anything about the home-buying process. Get straightforward answers in plain English, not jargon.',
  },
  {
    icon: CheckCircle,
    title: 'Process Guidance',
    description:
      'Understand each step of the journey from offer to closing. Know what to expect and what questions to ask.',
  },
  {
    icon: Clock,
    title: 'Available 24/7',
    description:
      "Get help whenever you need it. BAIRE is here to assist whether it's morning coffee or midnight questions.",
  },
  {
    icon: DollarSign,
    title: 'One-Time Fee',
    description:
      '$599 for your entire home-buying transaction. No commissions, no surprises, no recurring charges.',
  },
  {
    icon: Users,
    title: 'You Stay in Control',
    description:
      'BAIRE educates and informs. You make all the decisions. We encourage consulting professionals for specific advice.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Features() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Everything you need to buy with confidence
          </h2>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            BAIRE helps you understand the home-buying process so you can make 
            informed decisions. We educate and empower—you decide and act.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="relative"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-100 mb-6">
                <feature.icon className="h-7 w-7 text-sage-700" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
