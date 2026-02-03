'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, ArrowLeft, Loader2, Check, Home, MapPin, DollarSign, Clock, Users, Target, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  UserProfile,
  DEFAULT_PROFILE,
  JOURNEY_STAGES,
  BUYER_EXPERIENCE,
  PROPERTY_TYPES,
  BUDGET_RANGES,
  FINANCING_STATUS,
  TIMELINE,
  AGENT_STATUS,
  HELP_PRIORITIES,
} from '@/lib/user-profile'

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'DC'
]

interface OnboardingFlowProps {
  onComplete?: () => void
}

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [profile, setProfile] = useState<UserProfile>({
    ...DEFAULT_PROFILE,
  })

  const steps = [
    { title: 'Your Name', icon: User },
    { title: 'Your Journey', icon: Target },
    { title: 'Experience', icon: Users },
    { title: 'Property', icon: Home },
    { title: 'Location', icon: MapPin },
    { title: 'Budget', icon: DollarSign },
    { title: 'Financing', icon: DollarSign },
    { title: 'Timeline', icon: Clock },
    { title: 'Agent Status', icon: Users },
    { title: 'Priorities', icon: Target },
  ]

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }))
  }

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const handleSkip = async () => {
    // Save empty profile with onboardingCompleted = true (skipped)
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

  const handleComplete = async () => {
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

  const isLastStep = step === steps.length - 1

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold text-slate-900">Welcome to BAIRE</h1>
            <span className="text-sm text-slate-500">
              Step {step + 1} of {steps.length}
            </span>
          </div>
          
          {/* Progress bar */}
          <div className="flex gap-1">
            {steps.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1 flex-1 rounded-full transition-colors",
                  i <= step ? "bg-sage-600" : "bg-slate-200"
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-4 py-8">
          {/* Step 0: Name */}
          {step === 0 && (
            <StepContainer
              title="What's your name?"
              subtitle="We'll personalize your experience"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={profile.firstName || ''}
                    onChange={(e) => updateProfile({ firstName: e.target.value })}
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent text-slate-800 placeholder:text-slate-400"
                    autoFocus
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                    Last Name <span className="text-slate-400">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={profile.lastName || ''}
                    onChange={(e) => updateProfile({ lastName: e.target.value })}
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent text-slate-800 placeholder:text-slate-400"
                  />
                </div>
              </div>
            </StepContainer>
          )}

          {/* Step 1: Journey Stage */}
          {step === 1 && (
            <StepContainer
              title="Where are you in your home buying journey?"
              subtitle="This helps us tailor our guidance to your needs"
            >
              <div className="space-y-3">
                {JOURNEY_STAGES.map((option) => (
                  <SelectOption
                    key={option.value}
                    selected={profile.journeyStage === option.value}
                    onClick={() => updateProfile({ journeyStage: option.value })}
                    label={option.label}
                    description={option.description}
                  />
                ))}
              </div>
            </StepContainer>
          )}

          {/* Step 2: Buyer Experience */}
          {step === 2 && (
            <StepContainer
              title="Have you bought a home before?"
              subtitle="We'll adjust our explanations based on your experience"
            >
              <div className="space-y-3">
                {BUYER_EXPERIENCE.map((option) => (
                  <SelectOption
                    key={option.value}
                    selected={profile.buyerExperience === option.value}
                    onClick={() => updateProfile({ buyerExperience: option.value })}
                    label={option.label}
                    description={option.description}
                  />
                ))}
              </div>
            </StepContainer>
          )}

          {/* Step 3: Property Types */}
          {step === 3 && (
            <StepContainer
              title="What type of property are you looking for?"
              subtitle="Select all that apply"
            >
              <div className="space-y-3">
                {PROPERTY_TYPES.map((option) => (
                  <SelectOption
                    key={option.value}
                    selected={profile.propertyTypes.includes(option.value)}
                    onClick={() => {
                      const current = profile.propertyTypes
                      const updated = current.includes(option.value)
                        ? current.filter(t => t !== option.value)
                        : [...current, option.value]
                      updateProfile({ propertyTypes: updated as UserProfile['propertyTypes'] })
                    }}
                    label={option.label}
                    multiSelect
                  />
                ))}
              </div>
            </StepContainer>
          )}

          {/* Step 4: Location */}
          {step === 4 && (
            <StepContainer
              title="Where are you looking to buy?"
              subtitle="This helps us provide location-specific guidance"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    value={profile.locationCity || ''}
                    onChange={(e) => updateProfile({ locationCity: e.target.value })}
                    placeholder="e.g., Austin"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    State
                  </label>
                  <select
                    value={profile.locationState || ''}
                    onChange={(e) => updateProfile({ locationState: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none bg-white"
                  >
                    <option value="">Select a state</option>
                    {US_STATES.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={profile.locationFlexible}
                    onChange={(e) => updateProfile({ locationFlexible: e.target.checked })}
                    className="w-5 h-5 rounded border-slate-300 text-sage-600 focus:ring-sage-500"
                  />
                  <span className="text-slate-700">I'm flexible on location</span>
                </label>
              </div>
            </StepContainer>
          )}

          {/* Step 5: Budget */}
          {step === 5 && (
            <StepContainer
              title="What's your budget range?"
              subtitle="This helps us give relevant advice"
            >
              <div className="space-y-3">
                {BUDGET_RANGES.map((option) => (
                  <SelectOption
                    key={option.value}
                    selected={profile.budgetRange === option.value}
                    onClick={() => updateProfile({ budgetRange: option.value })}
                    label={option.label}
                  />
                ))}
              </div>
            </StepContainer>
          )}

          {/* Step 6: Financing */}
          {step === 6 && (
            <StepContainer
              title="What's your financing status?"
              subtitle="Pre-approval strengthens your offers"
            >
              <div className="space-y-3">
                {FINANCING_STATUS.map((option) => (
                  <SelectOption
                    key={option.value}
                    selected={profile.financingStatus === option.value}
                    onClick={() => updateProfile({ financingStatus: option.value })}
                    label={option.label}
                    description={option.description}
                  />
                ))}
              </div>
            </StepContainer>
          )}

          {/* Step 7: Timeline */}
          {step === 7 && (
            <StepContainer
              title="When are you hoping to buy?"
              subtitle="This helps us prioritize what to cover"
            >
              <div className="space-y-3">
                {TIMELINE.map((option) => (
                  <SelectOption
                    key={option.value}
                    selected={profile.timeline === option.value}
                    onClick={() => updateProfile({ timeline: option.value })}
                    label={option.label}
                    description={'description' in option ? option.description : undefined}
                  />
                ))}
              </div>
            </StepContainer>
          )}

          {/* Step 8: Agent Status */}
          {step === 8 && (
            <StepContainer
              title="Are you working with a buyer's agent?"
              subtitle="BAIRE is designed for self-represented buyers, but we can help either way"
            >
              <div className="space-y-3">
                {AGENT_STATUS.map((option) => (
                  <SelectOption
                    key={option.value}
                    selected={profile.agentStatus === option.value}
                    onClick={() => updateProfile({ agentStatus: option.value })}
                    label={option.label}
                    description={option.description}
                  />
                ))}
              </div>
            </StepContainer>
          )}

          {/* Step 9: Help Priorities */}
          {step === 9 && (
            <StepContainer
              title="What do you most want help with?"
              subtitle="Select up to 3 priorities"
            >
              <div className="space-y-3">
                {HELP_PRIORITIES.map((option) => {
                  const isSelected = profile.helpPriorities.includes(option.value)
                  const isDisabled = !isSelected && profile.helpPriorities.length >= 3
                  
                  return (
                    <SelectOption
                      key={option.value}
                      selected={isSelected}
                      disabled={isDisabled}
                      onClick={() => {
                        if (isDisabled) return
                        const current = profile.helpPriorities
                        const updated = isSelected
                          ? current.filter(p => p !== option.value)
                          : [...current, option.value]
                        updateProfile({ helpPriorities: updated as UserProfile['helpPriorities'] })
                      }}
                      label={option.label}
                      multiSelect
                    />
                  )
                })}
              </div>
              {profile.helpPriorities.length === 3 && (
                <p className="mt-3 text-sm text-slate-500">
                  Maximum 3 priorities selected
                </p>
              )}
            </StepContainer>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-slate-200 px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div>
            {step > 0 ? (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
            ) : (
              <div /> // Spacer
            )}
          </div>

          <div className="flex items-center gap-3">
            {isLastStep ? (
              <button
                onClick={handleComplete}
                disabled={isSubmitting}
                className="flex items-center gap-2 px-6 py-2.5 bg-sage-600 text-white rounded-lg hover:bg-sage-700 disabled:opacity-50 transition-colors font-medium"
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-2.5 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-medium"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
        
        {/* Skip link at bottom */}
        <div className="max-w-2xl mx-auto mt-4 text-center">
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
  )
}

// Helper components
function StepContainer({ 
  title, 
  subtitle, 
  children 
}: { 
  title: string
  subtitle?: string
  children: React.ReactNode 
}) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-slate-900 mb-2">{title}</h2>
      {subtitle && (
        <p className="text-slate-600 mb-6">{subtitle}</p>
      )}
      {children}
    </div>
  )
}

function SelectOption({
  selected,
  disabled,
  onClick,
  label,
  description,
  multiSelect,
}: {
  selected: boolean
  disabled?: boolean
  onClick: () => void
  label: string
  description?: string
  multiSelect?: boolean
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full text-left px-4 py-3 rounded-lg border-2 transition-all",
        selected
          ? "border-sage-600 bg-sage-50"
          : disabled
          ? "border-slate-200 bg-slate-50 opacity-50 cursor-not-allowed"
          : "border-slate-200 hover:border-slate-300 bg-white"
      )}
    >
      <div className="flex items-center gap-3">
        <div className={cn(
          "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0",
          selected 
            ? "border-sage-600 bg-sage-600" 
            : "border-slate-300",
          multiSelect && "rounded-md"
        )}>
          {selected && <Check className="h-3 w-3 text-white" />}
        </div>
        <div>
          <span className={cn(
            "font-medium",
            selected ? "text-sage-900" : "text-slate-900"
          )}>
            {label}
          </span>
          {description && (
            <p className="text-sm text-slate-500 mt-0.5">{description}</p>
          )}
        </div>
      </div>
    </button>
  )
}
