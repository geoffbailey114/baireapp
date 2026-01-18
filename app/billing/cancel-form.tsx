'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface CancelFormProps {
  customerId: string | null
  trialEndsAt: number | null
}

export function CancelForm({ customerId, trialEndsAt }: CancelFormProps) {
  const [loading, setLoading] = useState(false)
  const [canceled, setCanceled] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleCancel = async () => {
    if (!customerId) {
      setError('No customer ID found')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/stripe/cancel-trial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customerId }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to cancel trial')
      }

      setCanceled(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
      setShowConfirm(false)
    }
  }

  if (canceled) {
    return (
      <div className="bg-sage-50 border border-sage-200 rounded-lg p-4">
        <p className="text-sage-800 font-medium">
          Canceled. You won't be charged.
        </p>
        <p className="text-sage-600 text-sm mt-1">
          Thanks for trying BAIRE. You still have access until{' '}
          {trialEndsAt
            ? new Date(trialEndsAt * 1000).toLocaleString()
            : 'your trial ends'}
          .
        </p>
      </div>
    )
  }

  if (showConfirm) {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-amber-800 font-medium mb-3">
          Are you sure you want to cancel?
        </p>
        <p className="text-amber-700 text-sm mb-4">
          You'll still have access until your trial ends, but you won't be charged after that.
        </p>
        <div className="flex gap-3">
          <Button
            onClick={handleCancel}
            disabled={loading}
            variant="destructive"
            size="sm"
          >
            {loading ? 'Canceling...' : 'Yes, cancel my trial'}
          </Button>
          <Button
            onClick={() => setShowConfirm(false)}
            variant="outline"
            size="sm"
          >
            Keep my trial
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {error && (
        <p className="text-red-600 text-sm mb-3">{error}</p>
      )}
      <Button
        onClick={() => setShowConfirm(true)}
        variant="outline"
        className="text-slate-600"
      >
        Cancel Trial
      </Button>
    </div>
  )
}
