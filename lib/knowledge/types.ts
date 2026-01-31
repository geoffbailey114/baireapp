import { AccessTier } from '@/lib/access'

export interface KnowledgeModule {
  id: string
  name: string
  description: string
  priority: number // Lower = higher priority (appears earlier in prompt)
  requiredTier?: AccessTier // Minimum tier required to include this module
  enabled: boolean // Can be toggled off
  content: string
}

export interface AssembledPrompt {
  systemPrompt: string
  modulesIncluded: string[]
}

export interface AssemblyContext {
  userTier: AccessTier
  userProfile?: string // Pre-generated profile summary
  enabledModules?: string[] // Override which modules to include
}
