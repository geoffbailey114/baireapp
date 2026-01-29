'use client'

import { useState } from 'react'
import { ChevronDown, Check, Clock } from 'lucide-react'

const pricingSteps = [
  {
    id: 'trial',
    title: 'Free Trial',
    price: '$0',
    priceNote: '48 hours',
    description: 'Try BAIRE free for 48 hours. Explore, learn, and see how BAIRE can help you.',
    features: [
      'Chat access for Q&A',
      'General home buying education',
      'Terminology & process guidance',
      'Timeline planning help',
    ],
    excludes: [
      'Showing scheduling scripts',
      'Waiver templates',
      'Offer preparation tools',
    ],
    note: 'No charge during trial. Cancel anytime within 48 hours.',
  },
  {
    id: 'access',
    title: 'Access',
    price: '$99',
    priceNote: 'after trial',
    fullPrice: '$199',
    description: 'Continue using BAIRE after your trial. Unlock showing tools and keep learning.',
    features: [
      'Everything in Trial, plus:',
      'Showing scheduling scripts & templates',
      'Buyer waiver templates',
      'Walkthrough checklists',
      'Red flag spotting guide',
      'Continued chat support',
    ],
    note: 'Charged after your 48-hour trial ends.',
  },
  {
    id: 'offer',
    title: 'Make an Offer',
    price: '$500',
    priceNote: 'when ready',
    fullPrice: '$800',
    description: "When you're ready to make an offer, unlock full offer preparation and closing support.",
    features: [
      'Everything in Access, plus:',
      'Full offer generation & strategy',
      'Negotiation playbooks',
      'State-specific language & terms',
      'Price & terms guidance',
      'Counteroffer strategies',
      'Closing disclosure review',
      'Final walkthrough prep',
      'Closing day checklist',
    ],
    note: 'One-time payment. Includes everything through closing.',
  },
]

export function PricingAccordion() {
  const [openId, setOpenId] = useState<string | null>('trial')

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="space-y-3">
      {pricingSteps.map((step, index) => (
        <div
          key={step.id}
          className="border border-slate-200 rounded-xl overflow-hidden bg-white"
        >
          <button
            onClick={() => toggleAccordion(step.id)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center text-sage-700 font-semibold text-sm">
                {index + 1}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-slate-900">{step.title}</span>
                  <span className="text-sage-700 font-bold">{step.price}</span>
                  {step.fullPrice && (
                    <span className="text-slate-400 text-sm line-through">{step.fullPrice}</span>
                  )}
                  <span className="text-slate-500 text-sm">{step.priceNote}</span>
                </div>
              </div>
            </div>
            <ChevronDown
              className={`h-5 w-5 text-slate-400 transition-transform ${
                openId === step.id ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openId === step.id && (
            <div className="px-6 pb-6 pt-2">
              <p className="text-slate-600 mb-4">{step.description}</p>
              <ul className="space-y-2 mb-4">
                {step.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="h-4 w-4 text-sage-600 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {step.excludes && (
                <div className="mb-4 p-3 bg-slate-100 rounded-lg">
                  <p className="text-xs font-medium text-slate-500 mb-2">Upgrade to unlock:</p>
                  <ul className="space-y-1">
                    {step.excludes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                        <span className="text-slate-400">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <p className="text-sm text-slate-500 bg-slate-50 rounded-lg p-3">
                {step.note}
              </p>
            </div>
          )}
        </div>
      ))}

      {/* Total */}
      <div className="mt-6 p-6 bg-sage-50 rounded-xl border border-sage-200">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-semibold text-slate-900">Total (start to finish)</span>
            <p className="text-sm text-slate-600">$99 after trial + $500 when you make an offer</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 line-through">$999</span>
              <span className="text-2xl font-bold text-sage-700">$599</span>
            </div>
            <span className="inline-flex items-center gap-1 text-xs text-amber-700 font-semibold bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
              <Clock className="h-3 w-3" />
              LIMITED TIME
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
