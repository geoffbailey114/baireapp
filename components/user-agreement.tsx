'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface UserAgreementProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  error?: boolean
}

export function UserAgreement({ checked, onCheckedChange, error }: UserAgreementProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`border rounded-lg ${error ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-slate-50'}`}>
      {/* Expandable Agreement Content */}
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-slate-100 transition-colors rounded-t-lg"
      >
        <span className="font-medium text-slate-700 text-sm">
          BAIRE User Acknowledgment & Self-Representation Agreement
        </span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-slate-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-slate-500" />
        )}
      </button>

      {expanded && (
        <div className="px-4 pb-4 max-h-64 overflow-y-auto border-t border-slate-200">
          <div className="prose prose-sm prose-slate mt-4">
            <p className="text-slate-600 text-xs italic mb-4">
              Please read carefully before continuing.
            </p>

            <p className="text-slate-700 text-sm mb-3">
              By creating an account or completing checkout, you acknowledge and agree to the following:
            </p>

            {/* Section 1 */}
            <h4 className="text-sm font-semibold text-slate-800 mt-4 mb-2">1. Self-Representation</h4>
            <p className="text-sm text-slate-600 mb-2">
              I understand and agree that I am representing myself in any real estate transaction in which I choose to use BAIRE.
            </p>
            <p className="text-sm text-slate-600 mb-1">I acknowledge that:</p>
            <ul className="text-sm text-slate-600 list-disc list-inside space-y-1 mb-3">
              <li>I am not hiring a buyer's agent</li>
              <li>I am acting as an unrepresented buyer</li>
              <li>All decisions, communications, and actions are ultimately my responsibility</li>
            </ul>

            {/* Section 2 - Non-Professional Services Covenant (OA 1.8) */}
            <h4 className="text-sm font-semibold text-slate-800 mt-4 mb-2">2. Non-Professional Services Covenant</h4>
            <p className="text-sm text-slate-600 mb-2">
              BAIREAPP, LLC is expressly prohibited from acting, and shall not act, as a real estate broker, 
              real estate agent, attorney, fiduciary, financial advisor, or representative of any user or third party.
            </p>
            <p className="text-sm text-slate-600 mb-1">BAIREAPP, LLC shall not:</p>
            <ul className="text-sm text-slate-600 list-disc list-inside space-y-1 mb-2">
              <li>Negotiate, advocate, or communicate on my behalf</li>
              <li>Transact or execute documents on my behalf</li>
              <li>Represent me or any other party</li>
              <li>Owe fiduciary duties of loyalty, care, or confidentiality</li>
            </ul>
            <p className="text-sm text-slate-600 mb-3">
              BAIREAPP, LLC provides only general educational information and user-controlled software tools. 
              All decisions and actions remain solely with me.
            </p>

            {/* Section 3 - AI-Assisted Outputs (OA 1.9) */}
            <h4 className="text-sm font-semibold text-slate-800 mt-4 mb-2">3. AI-Assisted Outputs Disclaimer</h4>
            <p className="text-sm text-slate-600 mb-2">
              I understand that BAIRE uses artificial intelligence to generate guidance, explanations, and checklists.
              "AI-Assisted Outputs" are automated informational outputs generated using software algorithms or machine learning models.
            </p>
            <p className="text-sm text-slate-600 mb-1">I acknowledge that AI-Assisted Outputs:</p>
            <ul className="text-sm text-slate-600 list-disc list-inside space-y-1 mb-2">
              <li>Are general in nature and not professional advice</li>
              <li>Are not tailored recommendations</li>
              <li>Require independent judgment and verification prior to reliance</li>
              <li>May not account for every local rule or unique situation</li>
              <li>May contain errors or inaccuracies</li>
            </ul>
            <p className="text-sm text-slate-600 mb-3">
              Final decisions are mine alone.
            </p>

            {/* Section 4 - No User Reliance (OA 1.10) */}
            <h4 className="text-sm font-semibold text-slate-800 mt-4 mb-2">4. No Reliance</h4>
            <p className="text-sm text-slate-600 mb-2">
              BAIREAPP, LLC does not intend for, and expressly disclaims, reliance by users on the Company 
              or its software as a substitute for professional judgment. I assume full responsibility for 
              evaluating information and making all decisions.
            </p>
            <p className="text-sm text-slate-600 mb-3">
              BAIREAPP, LLC disclaims all warranties, express or implied, including accuracy, merchantability, 
              and fitness for a particular purpose. Liability is limited to the amount paid by me in the prior 12 months.
            </p>

            {/* Section 5 - Data Privacy (OA 1.11) */}
            <h4 className="text-sm font-semibold text-slate-800 mt-4 mb-2">5. Data Privacy</h4>
            <p className="text-sm text-slate-600 mb-2">
              I consent to BAIREAPP, LLC collecting and using my data as described in the Privacy Policy.
            </p>
            <p className="text-sm text-slate-600 mb-1">I understand that:</p>
            <ul className="text-sm text-slate-600 list-disc list-inside space-y-1 mb-3">
              <li>My data will be collected only with consent and used solely for stated purposes</li>
              <li>My data will be protected with industry-standard security</li>
              <li>No data will be shared without anonymization or my consent</li>
              <li>BAIREAPP, LLC complies with applicable data privacy laws (e.g., CCPA for California users)</li>
            </ul>

            {/* Section 6 */}
            <h4 className="text-sm font-semibold text-slate-800 mt-4 mb-2">6. No Guarantees or Promises</h4>
            <p className="text-sm text-slate-600 mb-1">I understand that BAIRE does not guarantee:</p>
            <ul className="text-sm text-slate-600 list-disc list-inside space-y-1 mb-2">
              <li>Cost savings</li>
              <li>Home availability</li>
              <li>Transaction outcomes</li>
              <li>Seller concessions</li>
              <li>Acceptance of any offer</li>
            </ul>
            <p className="text-sm text-slate-600 mb-3">
              Market conditions and seller decisions are outside BAIRE's control.
            </p>

            {/* Section 7 */}
            <h4 className="text-sm font-semibold text-slate-800 mt-4 mb-2">7. Voluntary Use</h4>
            <p className="text-sm text-slate-600 mb-1">I acknowledge that:</p>
            <ul className="text-sm text-slate-600 list-disc list-inside space-y-1 mb-3">
              <li>My use of BAIRE is voluntary</li>
              <li>I may stop using BAIRE at any time</li>
              <li>I am not required to complete any transaction using BAIRE</li>
              <li>I may engage licensed professionals at any time</li>
            </ul>

            {/* Section 8 */}
            <h4 className="text-sm font-semibold text-slate-800 mt-4 mb-2">8. Affirmative Consent</h4>
            <p className="text-sm text-slate-600 mb-1">
              By checking the box below and continuing, I confirm that:
            </p>
            <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
              <li>I have read and understand this agreement</li>
              <li>I knowingly choose to self-represent</li>
              <li>I understand BAIRE is a tool, not a representative or advisor</li>
              <li>I understand AI outputs require my independent verification</li>
              <li>I consent to data collection as described in the Privacy Policy</li>
            </ul>
          </div>
        </div>
      )}

      {/* Checkbox */}
      <div className={`px-4 py-3 border-t ${expanded ? 'border-slate-200' : 'border-transparent'}`}>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onCheckedChange(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-sage-600 focus:ring-sage-500"
          />
          <span className="text-sm text-slate-700">
            I have read and agree to the{' '}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                setExpanded(true)
              }}
              className="text-sage-600 hover:text-sage-700 underline"
            >
              Self-Representation Agreement
            </button>
            {', '}
            <Link href="/terms" target="_blank" className="text-sage-600 hover:text-sage-700 underline inline-flex items-center gap-1">
              Terms of Service
              <ExternalLink className="h-3 w-3" />
            </Link>
            {', and '}
            <Link href="/privacy" target="_blank" className="text-sage-600 hover:text-sage-700 underline inline-flex items-center gap-1">
              Privacy Policy
              <ExternalLink className="h-3 w-3" />
            </Link>
          </span>
        </label>
        {error && (
          <p className="mt-2 text-sm text-red-600">
            You must agree to the Self-Representation Agreement to continue.
          </p>
        )}
      </div>
    </div>
  )
}
