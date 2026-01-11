'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, Home, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface ClosingModalProps {
  onClose?: () => void
}

export function ClosingModal({ onClose }: ClosingModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isConfirming, setIsConfirming] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleConfirmClosing = async () => {
    setIsConfirming(true)
    setError(null)

    try {
      const response = await fetch('/api/close-transaction', {
        method: 'POST',
        credentials: 'include',
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to close transaction')
      }

      setShowSuccess(true)
      onClose?.()
      
      // Redirect after showing success message
      setTimeout(() => {
        router.push('/')
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setIsConfirming(false)
    }
  }

  if (showSuccess) {
    return (
      <Dialog open={true}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 mb-4">
              <Home className="h-6 w-6 text-sage-600" />
            </div>
            <DialogTitle className="text-center">
              Congratulations on your new home!
            </DialogTitle>
            <DialogDescription className="text-center">
              Thank you for using BAIRE throughout your home-buying journey. We hope 
              the educational guidance helped you feel confident and informed.
            </DialogDescription>
          </DialogHeader>
          <div className="text-center py-4">
            <p className="text-sm text-slate-500">
              Redirecting you to the home page...
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          I&apos;ve Closed My Home
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 mb-4">
            <AlertTriangle className="h-6 w-6 text-amber-600" />
          </div>
          <DialogTitle className="text-center">
            Confirm Transaction Closing
          </DialogTitle>
          <DialogDescription className="text-center">
            Are you sure you want to mark your home purchase as complete? This action 
            will end your current BAIRE access.
          </DialogDescription>
        </DialogHeader>

        <div className="bg-slate-50 rounded-lg p-4 my-4">
          <p className="text-sm text-slate-600">
            <strong>What happens next:</strong>
          </p>
          <ul className="text-sm text-slate-600 mt-2 space-y-1">
            <li>• Your access to BAIRE will end</li>
            <li>• You can purchase access again for future home purchases</li>
            <li>• This action cannot be undone</li>
          </ul>
        </div>

        {error && (
          <p className="text-sm text-red-600 text-center" role="alert">
            {error}
          </p>
        )}

        <DialogFooter className="sm:justify-center gap-2">
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
            disabled={isConfirming}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirmClosing}
            disabled={isConfirming}
          >
            {isConfirming ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Confirming...
              </>
            ) : (
              'Yes, I\'ve Closed'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
