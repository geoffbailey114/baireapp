'use client'

import { useState, useEffect } from 'react'
import { ChatInterfaceNew } from '@/components/chat-interface-new'
import { Loader2 } from 'lucide-react'

export default function ConsultantPage() {
  const [isPaid, setIsPaid] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isTrialExhausted, setIsTrialExhausted] = useState(false)
  const [userTier, setUserTier] = useState<'trial' | 'access' | 'offer' | 'comp'>('trial')
  const [trialEndsAt, setTrialEndsAt] = useState<number | null>(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/verify-session', {
          method: 'GET',
          credentials: 'include',
        })
        
        if (response.ok) {
          const data = await response.json()
          setIsPaid(data.authenticated && data.paid)
          
          // Set user tier based on response
          if (data.isComp) {
            setUserTier('comp')
          } else if (data.tier === 'offer') {
            setUserTier('offer')
          } else if (data.tier === 'access') {
            setUserTier('access')
          } else {
            setUserTier('trial')
          }
          
          if (data.trialEndsAt) {
            setTrialEndsAt(data.trialEndsAt)
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#f9fafb]">
        <Loader2 className="h-8 w-8 animate-spin text-sage-600" />
      </div>
    )
  }

  return (
    <ChatInterfaceNew 
      isPaid={isPaid} 
      isTrialExhausted={isTrialExhausted}
      userTier={userTier}
      trialEndsAt={trialEndsAt}
    />
  )
}
