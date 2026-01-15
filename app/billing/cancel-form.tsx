'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

interface CancelFormProps {
  customerId: string | null
  trialEndsAt: number | null
}

export function CancelForm({ customerId, trialEndsAt }: CancelFormProps) {
  const [loading, setLoading] = useState(false)
  const [canceled, setCanceled] = useState(false)
  const [error, setError] = useState('')

  const handleCancel = async () => {
    if (!customerId) {
      setError('No account found')
      return
    }

    const confirmed = window.confirm(
      'Are you sure you want to cancel your trial? You\'ll still have access until the trial period ends, but you won\'t be charged.'
    )

    if (!confirmed) return

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/stripe/cancel-trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customerId }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Cancellation failed')
      }

      setCanceled(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  if (canceled) {
    return (
      <div className="bg-sage-50 border border-sage-200 rounded-lg p-4 text-center">
        <p className="text-sage-800 font-medium mb-2">
          Canceled. You won't be charged. Thanks for trying BAIRE.
        </p>
        {trialEndsAt && (
          <p className="text-sm text-sage-600">
            You'll have access until {new Date(trialEndsAt * 1000).toLocaleString()}
          </p>
        )}
      </div>
    )
  }

  return (
    <div>
      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
          {error}
        </div>
      )}
      <Button
        variant="outline"
        onClick={handleCancel}
        disabled={loading}
        className="border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Canceling...
          </>
        ) : (
          'Cancel Trial'
        )}
      </Button>
    </div>
  )
}
