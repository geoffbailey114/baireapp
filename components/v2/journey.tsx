'use client'

import { motion } from 'framer-motion'
import { Search, Calendar, FileText, ClipboardCheck, Shield } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Find and evaluate homes',
    description: 'Paste any listing link. BAIRE analyzes comparable sales, pricing trends, and red flags — so you know what a home is actually worth before you even visit.',
    replaces: 'Replaces: Agent\'s CMA',
  },
  {
    number: '02',
    icon: Calendar,
    title: 'Schedule showings yourself',
    description: 'Use BAIRE\'s word-for-word scripts to contact listing agents, book tours, and present yourself as a serious, qualified buyer. No agent needed to get in the door.',
    replaces: 'Replaces: Agent scheduling',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Build and negotiate offers',
    description: 'BAIRE helps you determine what to offer, how to structure terms, and when to push or walk away. Real-time scenario modeling for counteroffers and escalation.',
    replaces: 'Replaces: Agent negotiation',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Navigate inspections & appraisals',
    description: 'Know who to hire, how to read the report, which issues kill deals vs. minor fixes, and how to use findings as negotiation leverage.',
    replaces: 'Replaces: Agent referrals',
  },
  {
    number: '05',
    icon: Shield,
    title: 'Close with confidence',
    description: 'Title company selection, closing document review in plain English, a closing day checklist, and an exit strategy playbook if anything goes sideways.',
    replaces: 'Replaces: Agent at closing table',
    wide: true,
  },
]

export function JourneyV2() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-sage-600 mb-4">How it works</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              BAIRE walks you through every step.
            </h2>
            <p className="text-lg text-slate-600 max-w-lg mx-auto">
              From first search to closing day. No gaps. No guessing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`bg-white rounded-2xl border border-slate-200 p-7 hover:border-sage-300 transition-colors ${step.wide ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sage-50">
                    <step.icon className="h-4.5 w-4.5 text-sage-600" />
                  </div>
                  <span className="text-xs font-bold tracking-[0.1em] uppercase text-sage-600">Step {step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-3">{step.description}</p>
                <span className="inline-block text-xs text-slate-400 bg-slate-50 rounded-md px-3 py-1">
                  {step.replaces}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
