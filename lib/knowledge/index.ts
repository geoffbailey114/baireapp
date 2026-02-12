import { KnowledgeModule, AssembledPrompt, AssemblyContext } from './types'
import { AccessTier } from '@/lib/access'

// Import BAIRE Brain (consolidated knowledge module from research)
import { baireBrainModule } from './modules/baire-brain'
// Import showing-scheduling for waiver template and detailed scripts
import { showingSchedulingModule } from './modules/showing-scheduling'

// Legacy modules (kept for reference, not actively used)
// import { coreIdentityModule } from './modules/core-identity'
// import { realEstateLawModule } from './modules/real-estate-law'

// Registry of all available modules
const ALL_MODULES: KnowledgeModule[] = [
  baireBrainModule,
  showingSchedulingModule, // Supplements brain with waiver template + detailed scripts
  // Add new modules here as they're created
]

// Tier hierarchy for access checking
const TIER_HIERARCHY: AccessTier[] = ['none', 'trial', 'full_access', 'comp']

function canAccessModule(userTier: AccessTier, requiredTier?: AccessTier): boolean {
  if (!requiredTier) return true // No requirement = accessible to all
  
  const userTierIndex = TIER_HIERARCHY.indexOf(userTier)
  const requiredTierIndex = TIER_HIERARCHY.indexOf(requiredTier)
  
  return userTierIndex >= requiredTierIndex
}

/**
 * Assemble the system prompt from knowledge modules
 */
export function assembleSystemPrompt(context: AssemblyContext): AssembledPrompt {
  const { userTier, userProfile, enabledModules } = context
  
  // Filter modules based on:
  // 1. Module is enabled
  // 2. User has required tier access
  // 3. Module is in enabledModules list (if provided)
  const eligibleModules = ALL_MODULES
    .filter(m => m.enabled)
    .filter(m => canAccessModule(userTier, m.requiredTier))
    .filter(m => !enabledModules || enabledModules.includes(m.id))
    .sort((a, b) => a.priority - b.priority)
  
  // Build the prompt
  const parts: string[] = []
  
  // Add each module's content
  for (const module of eligibleModules) {
    parts.push(module.content)
  }
  
  // Add user profile context if provided
  if (userProfile) {
    parts.push(`## CURRENT USER CONTEXT
${userProfile}

Use this context to personalize your responses. Reference their situation naturally when relevant, but don't repeat all their details back to them unnecessarily.`)
  }
  
  // Add reminder about professional referrals
  parts.push(`## RESPONSE GUIDELINES
- When responses touch on legal, financial, or high-stakes matters, remind users to verify with licensed professionals
- Be specific and tactical — users chose BAIRE because they want real guidance, not generic advice
- If you don't know something specific to their state or situation, say so and recommend they verify locally
- Keep responses focused and actionable`)
  
  return {
    systemPrompt: parts.join('\n\n'),
    modulesIncluded: eligibleModules.map(m => m.id),
  }
}

/**
 * Get list of all available modules (for admin/debugging)
 */
export function getAllModules(): KnowledgeModule[] {
  return ALL_MODULES.map(m => ({ ...m })) // Return copies
}

/**
 * Get a specific module by ID
 */
export function getModuleById(id: string): KnowledgeModule | undefined {
  return ALL_MODULES.find(m => m.id === id)
}
