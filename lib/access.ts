import Stripe from 'stripe'
import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

// Simplified access tiers
export type AccessTier = 'none' | 'trial' | 'full_access' | 'comp'

// Legacy tiers for backward compatibility
type LegacyTier = 'access' | 'offer' | 'closing'

export interface UserAccess {
  tier: AccessTier
  email: string | null
  stripeCustomerId: string | null
  trialEndsAt: number | null
  isTrialExpired: boolean
  isComp: boolean
  purchases: {
    full_access: boolean
    // Legacy flags — kept for backward compat
    access: boolean
    offer: boolean
    closing: boolean
  }
}

interface JWTPayload {
  sub: string
  email: string
  stripe_customer_id?: string
  trial_ends_at?: number
}

/**
 * Get JWT payload from HttpOnly cookie
 */
export async function getJWTPayload(): Promise<JWTPayload | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('baire_auth')?.value
    
    if (!token) return null
    
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    const { payload } = await jwtVerify(token, secret)
    
    return payload as unknown as JWTPayload
  } catch {
    return null
  }
}

/**
 * Fetch user's purchase history from Stripe
 */
async function getStripePurchases(customerId: string): Promise<{
  full_access: boolean
  access: boolean
  offer: boolean
  closing: boolean
  trialEndsAt: number | null
  isComp: boolean
}> {
  const purchases = {
    full_access: false,
    access: false,
    offer: false,
    closing: false,
    trialEndsAt: null as number | null,
    isComp: false,
  }

  try {
    const customer = await stripe.customers.retrieve(customerId)
    if (!('deleted' in customer)) {
      // Check for comp/admin-granted access
      if (customer.metadata?.comp_access === 'true' || customer.metadata?.admin_granted === 'true') {
        purchases.isComp = true
        purchases.full_access = true
        purchases.access = true
        purchases.offer = true
      }
      
      // Check for new full_access purchase
      if (customer.metadata?.full_access_purchased_at) {
        purchases.full_access = true
      }

      // Check for trial end time
      if (customer.metadata?.trial_ends_at) {
        purchases.trialEndsAt = parseInt(customer.metadata.trial_ends_at)
      }
    }

    // If comp or full_access already confirmed, skip payment checks
    if (purchases.isComp || purchases.full_access) {
      return purchases
    }

    // Check checkout sessions for purchase metadata
    const sessions = await stripe.checkout.sessions.list({
      customer: customerId,
      limit: 100,
    })

    for (const session of sessions.data) {
      if (session.payment_status === 'paid') {
        const tier = session.metadata?.tier
        
        if (tier === 'full_access') purchases.full_access = true
        // Legacy tier support
        if (tier === 'access') purchases.access = true
        if (tier === 'offer' || tier === 'showings') purchases.offer = true
        if (tier === 'closing') purchases.closing = true
      }
      
      if (session.metadata?.trial_ends_at) {
        purchases.trialEndsAt = parseInt(session.metadata.trial_ends_at)
      }
    }

    // Also check payment intents as backup
    const paymentIntents = await stripe.paymentIntents.list({
      customer: customerId,
      limit: 100,
    })

    for (const pi of paymentIntents.data) {
      if (pi.status === 'succeeded') {
        const tier = pi.metadata?.tier
        
        if (tier === 'full_access') purchases.full_access = true
        if (tier === 'access') purchases.access = true
        if (tier === 'offer' || tier === 'showings') purchases.offer = true
        if (tier === 'closing') purchases.closing = true
      }
    }

    // Legacy: if they bought both access + offer under old model, grant full_access
    if (purchases.access && purchases.offer) {
      purchases.full_access = true
    }
  } catch (error) {
    console.error('Error fetching Stripe purchases:', error)
  }

  return purchases
}

/**
 * Get user's current access level
 */
export async function getUserAccess(): Promise<UserAccess> {
  const defaultAccess: UserAccess = {
    tier: 'none',
    email: null,
    stripeCustomerId: null,
    trialEndsAt: null,
    isTrialExpired: false,
    isComp: false,
    purchases: {
      full_access: false,
      access: false,
      offer: false,
      closing: false,
    },
  }

  const jwt = await getJWTPayload()
  if (!jwt) return defaultAccess

  const now = Math.floor(Date.now() / 1000)
  
  if (!jwt.stripe_customer_id) {
    const trialEndsAt = jwt.trial_ends_at || null
    const isTrialExpired = trialEndsAt ? now > trialEndsAt : false
    
    return {
      tier: isTrialExpired ? 'none' : 'trial',
      email: jwt.email,
      stripeCustomerId: null,
      trialEndsAt,
      isTrialExpired,
      isComp: false,
      purchases: { full_access: false, access: false, offer: false, closing: false },
    }
  }

  const stripePurchases = await getStripePurchases(jwt.stripe_customer_id)
  
  const trialEndsAt = stripePurchases.trialEndsAt || jwt.trial_ends_at || null
  const isTrialExpired = trialEndsAt ? now > trialEndsAt : false

  // Determine tier
  let tier: AccessTier = 'none'
  
  if (stripePurchases.isComp) {
    tier = 'comp'
  } else if (stripePurchases.full_access) {
    tier = 'full_access'
  } else if (!isTrialExpired && trialEndsAt) {
    tier = 'trial'
  }

  return {
    tier,
    email: jwt.email,
    stripeCustomerId: jwt.stripe_customer_id,
    trialEndsAt,
    isTrialExpired,
    isComp: stripePurchases.isComp,
    purchases: stripePurchases,
  }
}

/**
 * Check if user has paid access (full_access, comp, or legacy full)
 */
export function hasPaidAccess(userAccess: UserAccess): boolean {
  return (
    userAccess.tier === 'full_access' ||
    userAccess.tier === 'comp' ||
    userAccess.purchases.full_access
  )
}

/**
 * Check if user can access the consultant (trial or paid)
 */
export function canAccessConsultant(userAccess: UserAccess): boolean {
  return (
    userAccess.tier === 'trial' ||
    userAccess.tier === 'full_access' ||
    userAccess.tier === 'comp'
  )
}

/**
 * Feature flags — simplified: trial gets everything, full_access keeps it
 */
export const TIER_FEATURES = {
  trial: {
    generalQA: true,
    educationalContent: true,
    basicGuidance: true,
    showingScripts: true,
    waivers: true,
    walkthroughChecklists: true,
    offerPrep: true,
    negotiationPlaybooks: true,
    stateSpecificLanguage: true,
    closingSupport: true,
    compAnalysis: true,
    exitPlaybook: true,
  },
  full_access: {
    generalQA: true,
    educationalContent: true,
    basicGuidance: true,
    showingScripts: true,
    waivers: true,
    walkthroughChecklists: true,
    offerPrep: true,
    negotiationPlaybooks: true,
    stateSpecificLanguage: true,
    closingSupport: true,
    compAnalysis: true,
    exitPlaybook: true,
  },
} as const
