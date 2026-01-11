'use client'

import Link from 'next/link'
import { AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FREE_TRIAL_QUERY_LIMIT } from '@/lib/constants'

interface TrialBannerProps {
  remainingQueries: number
  isExhausted: boolean
}

export function TrialBanner({ remainingQueries, isExhausted }: TrialBannerProps) {
  if (isExhausted) {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-medium text-amber-800">Free trial complete</h3>
            <p className="text-sm text-amber-700 mt-1">
              You&apos;ve used all {FREE_TRIAL_QUERY_LIMIT} free trial queries. Upgrade to 
              continue getting educational guidance for your home-buying journey.
            </p>
            <Button asChild size="sm" className="mt-3">
              <Link href="/pricing">Upgrade Now</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-sage-50 border border-sage-200 rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-sage-700">
            <span className="font-medium">Free Trial:</span>{' '}
            {remainingQueries} of {FREE_TRIAL_QUERY_LIMIT} queries remaining
          </p>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href="/pricing">Upgrade</Link>
        </Button>
      </div>
    </div>
  )
}
