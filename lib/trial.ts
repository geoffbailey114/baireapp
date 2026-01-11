import { FREE_TRIAL_QUERY_LIMIT, TRIAL_STORAGE_KEY } from './constants'

// Client-side trial tracking using localStorage
export function getTrialCount(): number {
  if (typeof window === 'undefined') return 0
  const count = localStorage.getItem(TRIAL_STORAGE_KEY)
  return count ? parseInt(count, 10) : 0
}

export function incrementTrialCount(): number {
  if (typeof window === 'undefined') return 0
  const current = getTrialCount()
  const newCount = current + 1
  localStorage.setItem(TRIAL_STORAGE_KEY, newCount.toString())
  return newCount
}

export function isTrialExhausted(): boolean {
  return getTrialCount() >= FREE_TRIAL_QUERY_LIMIT
}

export function getRemainingTrialQueries(): number {
  const remaining = FREE_TRIAL_QUERY_LIMIT - getTrialCount()
  return Math.max(0, remaining)
}

export function resetTrialCount(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(TRIAL_STORAGE_KEY)
}
