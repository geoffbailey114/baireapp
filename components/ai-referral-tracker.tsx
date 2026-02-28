'use client'

import { useEffect } from 'react'

const AI_REFERRERS: Record<string, string> = {
  'chatgpt.com': 'chatgpt',
  'chat.openai.com': 'chatgpt',
  'perplexity.ai': 'perplexity',
  'claude.ai': 'claude',
  'gemini.google.com': 'gemini',
  'copilot.microsoft.com': 'copilot',
  'you.com': 'youcom',
  'phind.com': 'phind',
  'arc.net': 'arc',
  'kagi.com': 'kagi',
}

export function AIReferralTracker() {
  useEffect(() => {
    const referrer = document.referrer
    if (!referrer) return

    for (const [domain, platform] of Object.entries(AI_REFERRERS)) {
      if (referrer.includes(domain)) {
        // Send custom event to GA4
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'ai_referral', {
            ai_platform: platform,
            landing_page: window.location.pathname,
          })
        }

        // Store for session tracking
        sessionStorage.setItem('ai_referrer', platform)
        break
      }
    }
  }, [])

  return null
}
