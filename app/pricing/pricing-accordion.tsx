'use client'

import { useState } from 'react'
import { ChevronDown, Check, Lock } from 'lucide-react'

const pricingSteps = [
  {
    id: 'trial',
    title: 'Free Trial',
    price: '$0',
    priceNote: '48 hours',
    description: 'Try BAIRE free. Cancel anytime within 48 hours and you won\'t be charged.',
    features: [
      'Full chat access',
      'General home buying Q&A',
      'Educational content',
      'Process guidance',
    ],
    note: 'After 48 hours, you\'re automatically upgraded to Access ($99).',
    locked: false,
  },
  {
    id: 'access',
    title: 'Access',
    price: '$99',
    priceNote: 'after trial',
    fullPrice: null,
    description: 'Unlock everything you need from first search through showing day.',
    features: [
      'Everything in Trial',
      'Showing scripts & request templates',
      'Buyer waivers',
      'Walkthrough checklists',
      'Red flag spotting guide',
      'Basic offer strategy',
    ],
    note: 'Charged automatically after your 48-hour trial, or pay now to skip the trial.',
    locked: false,
  },
  {
    id: 'offer',
    title: 'Offer',
    price: '$200',
    priceNote: 'when ready',
    fullPrice: '$300',
    description: 'When you\'re ready to make an offer, BAIRE will prompt you to unlock full offer preparation tools.',
    features: [
      'Everything in Access',
      'Full offer generation & strategy',
      'Negotiation playbooks',
      'State-specific language',
      'Price & terms guidance',
      'Counteroffer strategies',
    ],
    note: 'Unlocked inside BAIRE when you\'re ready to make an offer. Not available upfront.',
    locked: true,
  },
  {
    id: 'closing',
    title: 'Closing',
    price: '$300',
    priceNote: 'after you close',
    fullPrice: '$600',
    description: 'Final payment after you\'ve successfully closed on your home.',
    features: [
      'Everything in Offer',
      'Closing disclosure review',
      'Deadline tracking',
      'Final walkthrough prep',
      'Closing day checklist',
    ],
    note: 'Only charged after you confirm you\'ve closed. This is your final payment.',
    locked: true,
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
                  {step.locked && (
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      <Lock className="h-3 w-3" />
                      In-app only
                    </span>
                  )}
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
              <p className={`text-sm rounded-lg p-3 ${
                step.locked 
                  ? 'text-slate-500 bg-slate-50 border border-slate-200' 
                  : 'text-slate-500 bg-slate-50'
              }`}>
                {step.locked && <Lock className="h-3 w-3 inline mr-1" />}
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
            <p className="text-sm text-slate-600">Pay as you go — only when you need it</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 line-through">$999</span>
              <span className="text-2xl font-bold text-sage-700">$599</span>
            </div>
            <span className="text-xs text-sage-600 font-medium">PROMO PRICING</span>
          </div>
        </div>
      </div>
    </div>
  )
}
