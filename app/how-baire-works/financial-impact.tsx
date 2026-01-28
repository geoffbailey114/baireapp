'use client'

import { useState } from 'react'
import { ChevronDown, Calculator } from 'lucide-react'

export function FinancialImpact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-slate-200 rounded-xl my-6 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <Calculator className="h-5 w-5 text-slate-500" />
          <span className="font-medium text-slate-700">
            What this often changes financially (optional)
          </span>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-slate-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-6 border-t border-slate-100">
          <div className="pt-4 space-y-4 text-slate-600">
            <p>
              When you self-represent, you're not paying a buyer's agent commission. 
              That commission is typically 2–3% of the home price.
            </p>

            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-sm font-medium text-slate-700 mb-2">Example on a $400,000 home:</p>
              <ul className="text-sm space-y-1">
                <li>Traditional buyer agent commission (2.5%): <strong>$10,000</strong></li>
                <li>BAIRE total cost: <strong>$599</strong> (limited time pricing)</li>
              </ul>
            </div>

            <p>
              More importantly: on a 30-year mortgage, $10,000 less in purchase price 
              can mean <strong>$50–60 less per month</strong> in payments.
            </p>

            <p className="text-sm text-slate-500 italic">
              Numbers vary by deal, market, and negotiation. Commission structures differ by transaction. 
              This is not a guarantee of savings—it's a consequence of the process when it applies.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
