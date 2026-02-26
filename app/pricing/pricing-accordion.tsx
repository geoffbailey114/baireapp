'use client'

import { useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'

const pricingSteps = [
  {
    id: 'trial',
    title: 'Free Trial',
    price: '$0',
    priceNote: '7 days',
    description: 'Try BAIRE free for 7 days. Full access to every feature.',
    features: [
      'Full AI consultant access',
      'Comp analysis & pricing intelligence',
      'Showing scripts & listing agent guidance',
      'General home buying education',
      'Terminology & process guidance',
    ],
    note: 'No charge during trial. Cancel anytime within 7 days.',
  },
  {
    id: 'full',
    title: 'Full Access',
    price: '$995',
    priceNote: 'one payment',
    description: 'Everything you need from first search to closing day. One payment. Yours forever.',
    features: [
      'Everything in Trial, plus:',
      'Offer strategy & negotiation coaching',
      'Counteroffer modeling & frameworks',
      'Inspection & appraisal guidance',
      'Exit strategy playbook',
      'NFM Lending pre-qualification (49 states)',
      'Closing support & document review',
      'Priority support',
    ],
    note: 'Charged on day 8 if you don\'t cancel. 30-day money-back guarantee.',
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
            <p className="text-sm text-slate-600">7-day free trial, then one payment</p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-sage-700">$995</span>
            <p className="text-sm text-slate-500">flat fee</p>
          </div>
        </div>
      </div>
    </div>
  )
}
