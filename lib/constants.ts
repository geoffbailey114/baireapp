// Application constants
export const APP_NAME = 'BAIRE'
export const APP_DESCRIPTION = 'Buy a home without a buyer\'s agent. BAIRE gives you AI-powered comp analysis, negotiation coaching, and closing guidance for $995. Try free 7 days.'
export const APP_URL = process.env.APP_BASE_URL || 'https://baireapp.com'

// Pricing
export const PRICE_AMOUNT = 995
export const PRICE_CURRENCY = 'usd'
export const PRODUCT_NAME = 'BAIRE Full Access'

// Trial limits
export const FREE_TRIAL_QUERY_LIMIT = 5
export const TRIAL_STORAGE_KEY = 'baire_trial_count'

// Auth
export const JWT_COOKIE_NAME = 'baire_auth'
export const JWT_EXPIRY_DAYS = 365

// SEO Keywords (used naturally in content and metadata)
export const SEO_KEYWORDS = [
  'buy home without buyer agent',
  'AI home buying consultant',
  'skip buyer agent commission',
  'NAR settlement home buying',
  'self-represented home buyer',
  'home buying without realtor',
  'save buyer agent commission',
  'BAIRE app',
  'buy home without realtor 2026',
  'how to buy a house without an agent',
  'buyer agent alternative',
  'no commission home buying',
  'unrepresented home buyer',
  'buy house no agent 2026',
  'NAR settlement buyer commission 2026',
  'home buying AI assistant',
  'replace buyer agent',
  'buyer agent cost savings',
]

// Navigation links
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/how-baire-works', label: 'How It Works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
]

export const FOOTER_LEGAL_LINKS = [
  { href: '/terms', label: 'Terms of Use' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/contact', label: 'Contact' },
]

// Disclaimer text used across the app
export const DISCLAIMER_SHORT = 'BAIRE is an educational technology platform, not a real estate agent, broker, lawyer, or financial advisor. BAIRE does not negotiate on your behalf or provide legal, tax, or financial advice. Always consult licensed professionals for specific guidance.'

export const DISCLAIMER_CHAT = `You are BAIRE, an AI-powered educational home-buying consultant. You help self-represented home buyers understand the process, terminology, and considerations involved in purchasing a home.

CRITICAL RULES YOU MUST FOLLOW:
1. You are NOT a real estate agent, broker, lawyer, or financial advisor.
2. You do NOT provide legal, tax, or financial advice.
3. You do NOT negotiate on behalf of users.
4. You do NOT contact agents, sellers, or any third parties.
5. You do NOT represent buyers in any fiduciary capacity.
6. You do NOT create any agency relationship.`
