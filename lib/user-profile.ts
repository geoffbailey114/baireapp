import Stripe from 'stripe'

// Profile field options
export const JOURNEY_STAGES = [
  { value: 'starting', label: 'Just starting to look', description: 'Learning about the process' },
  { value: 'shopping', label: 'Actively shopping', description: 'Looking at listings, scheduling tours' },
  { value: 'pre-approved', label: 'Pre-approved and shopping', description: 'Have a pre-approval letter' },
  { value: 'ready-offer', label: 'Ready to make an offer', description: 'Found a property or close to it' },
] as const

export const BUYER_EXPERIENCE = [
  { value: 'first-time', label: 'First-time buyer', description: "I've never purchased a home" },
  { value: 'done-before', label: 'Bought once before', description: "I've bought 1-2 homes" },
  { value: 'experienced', label: 'Experienced', description: "I've bought 3+ homes" },
] as const

export const PROPERTY_TYPES = [
  { value: 'sfh', label: 'Single Family Home' },
  { value: 'condo', label: 'Condo / Townhouse' },
  { value: 'new-construction', label: 'New Construction' },
  { value: 'multi-family', label: 'Multi-Family (2-4 units)' },
  { value: 'land', label: 'Land / Lot' },
] as const

export const BUDGET_RANGES = [
  { value: 'under-200k', label: 'Under $200,000' },
  { value: '200k-350k', label: '$200,000 - $350,000' },
  { value: '350k-500k', label: '$350,000 - $500,000' },
  { value: '500k-750k', label: '$500,000 - $750,000' },
  { value: '750k-1m', label: '$750,000 - $1,000,000' },
  { value: 'over-1m', label: 'Over $1,000,000' },
] as const

export const FINANCING_STATUS = [
  { value: 'pre-approved', label: 'Pre-approved', description: 'I have a pre-approval letter' },
  { value: 'working-on-it', label: 'Working on it', description: "I'm in the process" },
  { value: 'not-yet', label: 'Not yet', description: "Haven't started" },
  { value: 'cash', label: 'Cash buyer', description: 'No financing needed' },
] as const

export const TIMELINE = [
  { value: 'asap', label: 'ASAP', description: 'Ready to move quickly' },
  { value: '1-3-months', label: '1-3 months' },
  { value: '3-6-months', label: '3-6 months' },
  { value: '6-12-months', label: '6-12 months' },
  { value: 'over-12-months', label: 'Over 12 months' },
  { value: 'flexible', label: 'Flexible / No rush' },
] as const

export const AGENT_STATUS = [
  { value: 'no-agent', label: 'No agent', description: "BAIRE and I got this" },
  { value: 'not-committed', label: 'Talked to agents but not committed', description: "Haven't signed anything" },
  { value: 'signed', label: 'Signed buyer agreement', description: 'Already have an agent' },
] as const

export const HELP_PRIORITIES = [
  { value: 'understanding-process', label: 'Understanding the buying process' },
  { value: 'finding-properties', label: 'Finding the right property' },
  { value: 'scheduling-showings', label: 'Scheduling showings' },
  { value: 'evaluating-properties', label: 'Evaluating properties' },
  { value: 'writing-offers', label: 'Writing competitive offers' },
  { value: 'negotiation', label: 'Negotiation strategies' },
  { value: 'understanding-contracts', label: 'Understanding contracts' },
  { value: 'closing-process', label: 'Navigating closing' },
  { value: 'saving-commission', label: 'Saving on commission' },
] as const

// Profile type
export interface UserProfile {
  firstName: string | null
  lastName: string | null
  journeyStage: typeof JOURNEY_STAGES[number]['value'] | null
  buyerExperience: typeof BUYER_EXPERIENCE[number]['value'] | null
  propertyTypes: Array<typeof PROPERTY_TYPES[number]['value']>
  locationCity: string | null
  locationState: string | null
  locationFlexible: boolean
  budgetRange: typeof BUDGET_RANGES[number]['value'] | null
  financingStatus: typeof FINANCING_STATUS[number]['value'] | null
  timeline: typeof TIMELINE[number]['value'] | null
  agentStatus: typeof AGENT_STATUS[number]['value'] | null
  helpPriorities: Array<typeof HELP_PRIORITIES[number]['value']>
  onboardingCompleted: boolean
  onboardingCompletedAt: string | null
}

// Default empty profile
export const DEFAULT_PROFILE: UserProfile = {
  firstName: null,
  lastName: null,
  journeyStage: null,
  buyerExperience: null,
  propertyTypes: [],
  locationCity: null,
  locationState: null,
  locationFlexible: false,
  budgetRange: null,
  financingStatus: null,
  timeline: null,
  agentStatus: null,
  helpPriorities: [],
  onboardingCompleted: false,
  onboardingCompletedAt: null,
}

// Serialize profile to fit in Stripe metadata (max 500 chars per value)
export function serializeProfile(profile: UserProfile): Record<string, string> {
  return {
    profile_first_name: profile.firstName || '',
    profile_last_name: profile.lastName || '',
    profile_journey: profile.journeyStage || '',
    profile_experience: profile.buyerExperience || '',
    profile_property_types: profile.propertyTypes.join(','),
    profile_location: profile.locationCity && profile.locationState 
      ? `${profile.locationCity},${profile.locationState},${profile.locationFlexible ? '1' : '0'}`
      : '',
    profile_budget: profile.budgetRange || '',
    profile_financing: profile.financingStatus || '',
    profile_timeline: profile.timeline || '',
    profile_agent: profile.agentStatus || '',
    profile_priorities: profile.helpPriorities.join(','),
    profile_completed: profile.onboardingCompleted ? '1' : '0',
    profile_completed_at: profile.onboardingCompletedAt || '',
  }
}

// Deserialize profile from Stripe metadata
export function deserializeProfile(metadata: Stripe.Metadata | null | undefined): UserProfile {
  if (!metadata) return DEFAULT_PROFILE

  const location = metadata.profile_location?.split(',') || []
  
  return {
    firstName: metadata.profile_first_name || null,
    lastName: metadata.profile_last_name || null,
    journeyStage: (metadata.profile_journey as UserProfile['journeyStage']) || null,
    buyerExperience: (metadata.profile_experience as UserProfile['buyerExperience']) || null,
    propertyTypes: metadata.profile_property_types 
      ? metadata.profile_property_types.split(',').filter(Boolean) as UserProfile['propertyTypes']
      : [],
    locationCity: location[0] || null,
    locationState: location[1] || null,
    locationFlexible: location[2] === '1',
    budgetRange: (metadata.profile_budget as UserProfile['budgetRange']) || null,
    financingStatus: (metadata.profile_financing as UserProfile['financingStatus']) || null,
    timeline: (metadata.profile_timeline as UserProfile['timeline']) || null,
    agentStatus: (metadata.profile_agent as UserProfile['agentStatus']) || null,
    helpPriorities: metadata.profile_priorities 
      ? metadata.profile_priorities.split(',').filter(Boolean) as UserProfile['helpPriorities']
      : [],
    onboardingCompleted: metadata.profile_completed === '1',
    onboardingCompletedAt: metadata.profile_completed_at || null,
  }
}

// Generate natural language summary for AI context
export function generateProfileSummary(profile: UserProfile): string {
  if (!profile.onboardingCompleted) {
    return ''
  }

  const parts: string[] = []
  
  // Name
  const userName = profile.firstName || null

  // Experience
  if (profile.buyerExperience === 'first-time') {
    parts.push("a first-time home buyer")
  } else if (profile.buyerExperience === 'done-before') {
    parts.push("someone who has purchased a home before")
  } else if (profile.buyerExperience === 'experienced') {
    parts.push("an experienced buyer who has purchased multiple homes")
  }

  // Financing
  if (profile.financingStatus === 'pre-approved') {
    parts.push("who is pre-approved for a mortgage")
  } else if (profile.financingStatus === 'cash') {
    parts.push("who is a cash buyer")
  } else if (profile.financingStatus === 'working-on-it') {
    parts.push("who is working on getting pre-approved")
  } else if (profile.financingStatus === 'not-yet') {
    parts.push("who hasn't started the financing process yet")
  }

  // Journey stage
  if (profile.journeyStage === 'starting') {
    parts.push("and is just starting to explore the home buying process")
  } else if (profile.journeyStage === 'shopping') {
    parts.push("and is actively shopping for homes")
  } else if (profile.journeyStage === 'ready-offer') {
    parts.push("and is ready to make an offer")
  } else if (profile.journeyStage === 'under-contract') {
    parts.push("and is already under contract on a property")
  }

  // Build summary with name
  let summary = ''
  if (userName) {
    summary = `USER'S NAME: ${userName}. Use their name naturally in responses when appropriate (e.g., "Great question, ${userName}!" or "Here's what I'd recommend, ${userName}...").\n\n`
  }
  
  summary += parts.length > 0 
    ? `You're speaking with ${parts.join(' ')}.`
    : ''

  // Property preferences
  if (profile.propertyTypes.length > 0) {
    const typeLabels = profile.propertyTypes.map(t => {
      const found = PROPERTY_TYPES.find(pt => pt.value === t)
      return found?.label.toLowerCase() || t
    })
    summary += ` They're interested in ${typeLabels.join(', ')}.`
  }

  // Location
  if (profile.locationCity && profile.locationState) {
    summary += ` They're looking in ${profile.locationCity}, ${profile.locationState}`
    if (profile.locationFlexible) {
      summary += ' (but flexible on location)'
    }
    summary += '.'
  }

  // Budget
  if (profile.budgetRange) {
    const budgetLabel = BUDGET_RANGES.find(b => b.value === profile.budgetRange)?.label
    if (budgetLabel) {
      summary += ` Budget: ${budgetLabel}.`
    }
  }

  // Timeline
  if (profile.timeline) {
    const timelineLabel = TIMELINE.find(t => t.value === profile.timeline)?.label
    if (timelineLabel) {
      summary += ` Timeline: ${timelineLabel}.`
    }
  }

  // Agent status - important for BAIRE context
  if (profile.agentStatus === 'no-agent') {
    summary += " They're going without a buyer's agent."
  } else if (profile.agentStatus === 'not-committed') {
    summary += " They've talked to agents but haven't committed to one."
  } else if (profile.agentStatus === 'signed') {
    summary += " Note: They've already signed with a buyer's agent."
  }

  // Priorities
  if (profile.helpPriorities.length > 0) {
    const priorityLabels = profile.helpPriorities.map(p => {
      const found = HELP_PRIORITIES.find(hp => hp.value === p)
      return found?.label.toLowerCase() || p
    })
    summary += ` They most want help with: ${priorityLabels.join(', ')}.`
  }

  return summary.trim()
}
