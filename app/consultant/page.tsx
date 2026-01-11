'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ChatInterface } from '@/components/chat-interface'
import { TrialBanner } from '@/components/trial-banner'
import { ClosingModal } from '@/components/closing-modal'
import { Badge } from '@/components/ui/badge'
import { 
  getTrialCount, 
  incrementTrialCount, 
  isTrialExhausted as checkTrialExhausted,
  getRemainingTrialQueries 
} from '@/lib/trial'
import { FREE_TRIAL_QUERY_LIMIT } from '@/lib/constants'

export default function ConsultantPage() {
  const [isPaid, setIsPaid] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [trialCount, setTrialCount] = useState(0)
  const [isTrialExhausted, setIsTrialExhausted] = useState(false)

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
        }
      } catch (error) {
        console.error('Auth check failed:', error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
    
    // Initialize trial state from localStorage
    setTrialCount(getTrialCount())
    setIsTrialExhausted(checkTrialExhausted())
  }, [])

  const handleMessageSent = () => {
    if (!isPaid) {
      const newCount = incrementTrialCount()
      setTrialCount(newCount)
      setIsTrialExhausted(newCount >= FREE_TRIAL_QUERY_LIMIT)
    }
  }

  const remainingQueries = getRemainingTrialQueries()

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-pulse text-slate-400">Loading...</div>
      </div>
    )
  }

  return (
    <div className="py-8 md:py-12">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">BAIRE Consultant</h1>
              <p className="text-sm text-slate-500">
                Your AI home-buying educational guide
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {isPaid ? (
              <>
                <Badge variant="success">Full Access</Badge>
                <ClosingModal />
              </>
            ) : (
              <Badge variant="secondary">Free Trial</Badge>
            )}
          </div>
        </div>

        {/* Trial Banner for non-paid users */}
        {!isPaid && (
          <TrialBanner 
            remainingQueries={remainingQueries} 
            isExhausted={isTrialExhausted} 
          />
        )}

        {/* Chat Interface */}
        <ChatInterface 
          isPaid={isPaid} 
          isTrialExhausted={isTrialExhausted}
          onMessageSent={handleMessageSent}
        />

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-slate-50 rounded-lg">
          <p className="text-xs text-slate-500 leading-relaxed">
            <strong>Important:</strong> BAIRE provides educational information only. 
            BAIRE is not a real estate agent, broker, attorney, or financial advisor. 
            BAIRE does not negotiate on your behalf or provide legal, tax, or financial advice. 
            Always consult licensed professionals for specific guidance related to your situation.
          </p>
        </div>
      </div>
    </div>
  )
}
