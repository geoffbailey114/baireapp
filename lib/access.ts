import Stripe from 'stripe'
import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

// Access tiers in order (renamed: showings -> offer)
export type AccessTier = 'none' | 'trial' | 'access' | 'offer' | 'closing'

export interface UserAccess {
  tier: AccessTier
  email: string | null
  stripeCustomerId: string | null
  trialEndsAt: number | null // Unix timestamp
  isTrialExpired: boolean
  isComp: boolean // Complimentary access granted by admin
  purchases: {
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
  access: boolean
  offer: boolean
  closing: boolean
  trialEndsAt: number | null
  isComp: boolean
}> {
  const purchases = {
    access: false,
    offer: false,
    closing: false,
    trialEndsAt: null as number | null,
    isComp: false,
  }

  try {
    // First check customer metadata for comp access
    const customer = await stripe.customers.retrieve(customerId)
    if (!('deleted' in customer)) {
      // Check for comp/admin-granted access
      if (customer.metadata?.comp_access === 'true' || customer.metadata?.admin_granted === 'true') {
        purchases.isComp = true
        purchases.access = true
        purchases.offer = true
        // Note: We give full access (offer tier) for comp users
      }
      
      // Check for trial end time in customer metadata
      if (customer.metadata?.trial_ends_at) {
        purchases.trialEndsAt = parseInt(customer.metadata.trial_ends_at)
      }
    }

    // If comp, skip payment checks
    if (purchases.isComp) {
      return purchases
    }

    // Get all successful payments for this customer
    const paymentIntents = await stripe.paymentIntents.list({
      customer: customerId,
      limit: 100,
    })

    const priceAccess = process.env.STRIPE_PRICE_ACCESS
    const priceOffer = process.env.STRIPE_PRICE_OFFER || process.env.STRIPE_PRICE_SHOWINGS // Support both names
    const priceClosing = process.env.STRIPE_PRICE_CLOSING

    // Check checkout sessions for metadata
    const sessions = await stripe.checkout.sessions.list({
      customer: customerId,
      limit: 100,
    })

    for (const session of sessions.data) {
      if (session.payment_status === 'paid') {
        const priceId = session.metadata?.price_id
        const tier = session.metadata?.tier
        
        if (priceId === priceAccess || tier === 'access') purchases.access = true
        if (priceId === priceOffer || tier === 'offer' || tier === 'showings') purchases.offer = true
        if (priceId === priceClosing || tier === 'closing') purchases.closing = true
      }
      
      // Check for trial end time
      if (session.metadata?.trial_ends_at) {
        purchases.trialEndsAt = parseInt(session.metadata.trial_ends_at)
      }
    }

    // Also check payment intents metadata as backup
    for (const pi of paymentIntents.data) {
      if (pi.status === 'succeeded') {
        const priceId = pi.metadata?.price_id
        const tier = pi.metadata?.tier
        
        if (priceId === priceAccess || tier === 'access') purchases.access = true
        if (priceId === priceOffer || tier === 'offer' || tier === 'showings') purchases.offer = true
        if (priceId === priceClosing || tier === 'closing') purchases.closing = true
      }
    }
  } catch (error) {
    console.error('Error fetching Stripe purchases:', error)
  }

  return purchases
}

/**
 * Get user's current access level (server-side, authoritative)
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
      access: false,
      offer: false,
      closing: false,
    },
  }

  const jwt = await getJWTPayload()
  if (!jwt) return defaultAccess

  const now = Math.floor(Date.now() / 1000)
  
  // If no Stripe customer yet, check if in trial period
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
      purchases: { access: false, offer: false, closing: false },
    }
  }

  // Fetch purchases from Stripe (source of truth)
  const stripePurchases = await getStripePurchases(jwt.stripe_customer_id)
  
  // Determine trial status
  const trialEndsAt = stripePurchases.trialEndsAt || jwt.trial_ends_at || null
  const isTrialExpired = trialEndsAt ? now > trialEndsAt : false

  // Determine tier based on purchases (comp users get full offer access)
  let tier: AccessTier = 'none'
  
  if (stripePurchases.isComp) {
    tier = 'offer' // Comp users get full access
  } else if (stripePurchases.closing) {
    tier = 'closing'
  } else if (stripePurchases.offer) {
    tier = 'offer'
  } else if (stripePurchases.access) {
    tier = 'access'
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
 * Check if user can access a specific feature
 */
export function canAccess(userAccess: UserAccess, requiredTier: AccessTier): boolean {
  const tierOrder: AccessTier[] = ['none', 'trial', 'access', 'offer', 'closing']
  const userTierIndex = tierOrder.indexOf(userAccess.tier)
  const requiredTierIndex = tierOrder.indexOf(requiredTier)
  
  return userTierIndex >= requiredTierIndex
}

/**
 * Get the next tier user needs to purchase
 */
export function getNextTier(userAccess: UserAccess): AccessTier | null {
  if (userAccess.isComp) return null // Comp users have full access
  if (userAccess.tier === 'closing') return null
  if (userAccess.tier === 'offer') return 'closing'
  if (userAccess.tier === 'access') return 'offer'
  if (userAccess.tier === 'trial') return 'access'
  return 'access' // For 'none'
}

/**
 * Get price ID for a tier
 */
export function getPriceIdForTier(tier: AccessTier): string | null {
  switch (tier) {
    case 'access':
      return process.env.STRIPE_PRICE_ACCESS || null
    case 'offer':
      return process.env.STRIPE_PRICE_OFFER || process.env.STRIPE_PRICE_SHOWINGS || null
    case 'closing':
      return process.env.STRIPE_PRICE_CLOSING || null
    default:
      return null
  }
}

/**
 * Feature flags based on tier
 */
export const TIER_FEATURES = {
  trial: {
    generalQA: true,
    educationalContent: true,
    basicGuidance: true,
    showingScripts: false,
    waivers: false,
    walkthroughChecklists: false,
    offerPrep: false,
    negotiationPlaybooks: false,
    stateSpecificLanguage: false,
    closingSupport: false,
  },
  access: {
    generalQA: true,
    educationalContent: true,
    basicGuidance: true,
    showingScripts: true,
    waivers: true,
    walkthroughChecklists: true,
    offerPrep: false,
    negotiationPlaybooks: false,
    stateSpecificLanguage: false,
    closingSupport: false,
  },
  offer: {
    generalQA: true,
    educationalContent: true,
    basicGuidance: true,
    showingScripts: true,
    waivers: true,
    walkthroughChecklists: true,
    offerPrep: true,
    negotiationPlaybooks: true,
    stateSpecificLanguage: true,
    closingSupport: false,
  },
  closing: {
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
  },
} as const
