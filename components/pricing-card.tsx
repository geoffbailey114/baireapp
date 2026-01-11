'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils'
import { PRICE_AMOUNT } from '@/lib/constants'

const features = [
  'Unlimited educational queries',
  'Document explanation assistance',
  'Process guidance and checklists',
  'Terminology explanations',
  'Questions to ask professionals',
  '24/7 availability',
  'Access until closing',
  'No commissions, no recurring fees',
]

export function PricingCard() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleCheckout = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session')
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="relative overflow-hidden border-2 border-sage-200 shadow-xl">
        <div className="absolute top-0 right-0 bg-sage-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
          Most Popular
        </div>
        
        <CardHeader className="text-center pb-2 pt-8">
          <h3 className="text-2xl font-bold text-slate-900">BAIRE Buyer Consultant</h3>
          <p className="text-slate-600 mt-2">
            Complete access for your home-buying transaction
          </p>
        </CardHeader>

        <CardContent className="text-center">
          <div className="mt-4">
            <span className="text-5xl font-bold text-slate-900">
              {formatCurrency(PRICE_AMOUNT)}
            </span>
            <span className="text-slate-600 ml-2">one-time</span>
          </div>
          
          <p className="text-sm text-slate-500 mt-2">
            No commissions · No recurring fees
          </p>

          <ul className="mt-8 space-y-4 text-left">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-600">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 pb-8">
          {error && (
            <p className="text-sm text-red-600 text-center" role="alert">
              {error}
            </p>
          )}
          
          <Button 
            onClick={handleCheckout}
            disabled={isLoading}
            size="xl"
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              'Get Started'
            )}
          </Button>
          
          <p className="text-xs text-slate-500 text-center">
            Secure payment via Stripe. By purchasing, you agree to our{' '}
            <a href="/terms" className="underline hover:text-slate-700">Terms of Use</a>.
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
