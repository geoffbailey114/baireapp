'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import {
  UserProfile,
  DEFAULT_PROFILE,
  BUYER_EXPERIENCE,
  BUDGET_RANGES,
  FINANCING_STATUS,
  AGENT_STATUS,
} from '@/lib/user-profile'

const US_STATES = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
  { value: 'DC', label: 'Washington D.C.' },
]

interface OnboardingFlowProps {
  onComplete?: () => void
}

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [profile, setProfile] = useState<UserProfile>({
    ...DEFAULT_PROFILE,
  })

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }))
  }

  const handleSkip = async () => {
    setIsSubmitting(true)
    try {
      await fetch('/api/user-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          profile: {
            ...DEFAULT_PROFILE,
            onboardingCompleted: true,
            onboardingCompletedAt: new Date().toISOString(),
          },
        }),
      })
      router.push('/consultant')
      onComplete?.()
    } catch (error) {
      console.error('Failed to skip onboarding:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const completeProfile: UserProfile = {
        ...profile,
        onboardingCompleted: true,
        onboardingCompletedAt: new Date().toISOString(),
      }
      
      await fetch('/api/user-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile: completeProfile }),
      })
      
      router.push('/consultant')
      onComplete?.()
    } catch (error) {
      console.error('Failed to save profile:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-slate-900">Finish onboarding</h1>
          <p className="mt-2 text-slate-500">Please answer just a few more questions:</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1.5">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                value={profile.firstName || ''}
                onChange={(e) => updateProfile({ firstName: e.target.value })}
                placeholder="Enter your first name"
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent text-slate-800 placeholder:text-slate-400"
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1.5">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                value={profile.lastName || ''}
                onChange={(e) => updateProfile({ lastName: e.target.value })}
                placeholder="Enter your last name"
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent text-slate-800 placeholder:text-slate-400"
              />
            </div>

            {/* Buyer Experience */}
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-slate-700 mb-1.5">
                Which best describes you?
              </label>
              <select
                id="experience"
                value={profile.buyerExperience || ''}
                onChange={(e) => updateProfile({ buyerExperience: e.target.value as UserProfile['buyerExperience'] })}
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent text-slate-800 bg-white appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25rem' }}
              >
                <option value="">Select an option</option>
                {BUYER_EXPERIENCE.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* State */}
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-slate-700 mb-1.5">
                Where are you looking for a home?
              </label>
              <select
                id="state"
                value={profile.locationState || ''}
                onChange={(e) => updateProfile({ locationState: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent text-slate-800 bg-white appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25rem' }}
              >
                <option value="">Select a state</option>
                {US_STATES.map((state) => (
                  <option key={state.value} value={state.value}>
                    {state.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Financing Status */}
            <div>
              <label htmlFor="financing" className="block text-sm font-medium text-slate-700 mb-1.5">
                Where are you in your home search?
              </label>
              <select
                id="financing"
                value={profile.financingStatus || ''}
                onChange={(e) => updateProfile({ financingStatus: e.target.value as UserProfile['financingStatus'] })}
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent text-slate-800 bg-white appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25rem' }}
              >
                <option value="">Select an option</option>
                {FINANCING_STATUS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Agent Status */}
            <div>
              <label htmlFor="agentStatus" className="block text-sm font-medium text-slate-700 mb-1.5">
                Are you working with a buyer&apos;s agent?
              </label>
              <select
                id="agentStatus"
                value={profile.agentStatus || ''}
                onChange={(e) => updateProfile({ agentStatus: e.target.value as UserProfile['agentStatus'] })}
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent text-slate-800 bg-white appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25rem' }}
              >
                <option value="">Select an option</option>
                {AGENT_STATUS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label} — {option.description}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget (optional - keeping for AI context) */}
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1.5">
                What&apos;s your budget range? <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <select
                id="budget"
                value={profile.budgetRange || ''}
                onChange={(e) => updateProfile({ budgetRange: e.target.value as UserProfile['budgetRange'] })}
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent text-slate-800 bg-white appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25rem' }}
              >
                <option value="">Select an option</option>
                {BUDGET_RANGES.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 disabled:opacity-50 transition-colors font-medium flex items-center justify-center"
            >
              {isSubmitting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                'Submit'
              )}
            </button>
          </form>

          {/* Skip link */}
          <div className="mt-4 text-center">
            <button
              onClick={handleSkip}
              disabled={isSubmitting}
              className="text-sm text-slate-400 hover:text-slate-600 transition-colors"
            >
              Skip for now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
