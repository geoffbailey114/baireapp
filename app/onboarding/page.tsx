'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { OnboardingFlow } from '@/components/onboarding/onboarding-flow'

export default function OnboardingPage() {
  const router = useRouter()
  const [isChecking, setIsChecking] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/verify-session', {
          method: 'GET',
          credentials: 'include',
        })
        
        if (!response.ok) {
          // Not authenticated, redirect to signup
          router.push('/signup')
          return
        }

        const data = await response.json()
        
        if (!data.authenticated) {
          router.push('/signup')
          return
        }

        // Check if already completed onboarding
        const profileRes = await fetch('/api/user-profile', {
          method: 'GET',
          credentials: 'include',
        })

        if (profileRes.ok) {
          const profileData = await profileRes.json()
          if (profileData.profile?.onboardingCompleted) {
            // Already completed, go to consultant
            router.push('/consultant')
            return
          }
        }

        setIsAuthenticated(true)
      } catch (error) {
        console.error('Auth check failed:', error)
        router.push('/signup')
      } finally {
        setIsChecking(false)
      }
    }

    checkAuth()
  }, [router])

  if (isChecking || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9fafb]">
        <Loader2 className="h-8 w-8 animate-spin text-sage-600" />
      </div>
    )
  }

  return <OnboardingFlow />
}
