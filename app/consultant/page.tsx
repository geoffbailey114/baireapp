'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ChatInterfaceNew } from '@/components/chat-interface-new'
import { Loader2 } from 'lucide-react'
import { UserProfile } from '@/lib/user-profile'

export default function ConsultantPage() {
  const router = useRouter()
  const [isPaid, setIsPaid] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isTrialExhausted, setIsTrialExhausted] = useState(false)
  const [userTier, setUserTier] = useState<'trial' | 'access' | 'offer' | 'comp'>('trial')
  const [trialEndsAt, setTrialEndsAt] = useState<number | null>(null)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/verify-session', {
          method: 'GET',
          credentials: 'include',
        })
        
        if (!response.ok) {
          router.push('/login')
          return
        }

        const data = await response.json()
        
        if (!data.authenticated) {
          router.push('/login')
          return
        }

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

        // Check onboarding status
        const profileRes = await fetch('/api/user-profile', {
          method: 'GET',
          credentials: 'include',
        })

        if (profileRes.ok) {
          const profileData = await profileRes.json()
          
          // If onboarding not completed, redirect to onboarding
          if (!profileData.profile?.onboardingCompleted) {
            router.push('/onboarding')
            return
          }
          
          setUserProfile(profileData.profile)
        }

        setIsLoading(false)
      } catch (error) {
        console.error('Auth check failed:', error)
        router.push('/login')
      }
    }

    checkAuth()
  }, [router])

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
      userProfile={userProfile}
    />
  )
}
