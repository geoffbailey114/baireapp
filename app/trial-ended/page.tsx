import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function TrialEndedPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md text-center">
        <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Clock className="w-8 h-8 text-sage-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          Your trial has ended
        </h1>
        <p className="text-slate-600 mb-8">
          Your 7-day free trial is over. Unlock full access to keep using BAIRE through closing.
        </p>

        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
          <div className="text-center">
            <span className="text-3xl font-bold text-slate-900">$995</span>
            <p className="text-sm text-slate-500 mt-1">One payment · keep forever</p>
          </div>
        </div>

        <Button asChild size="lg" className="w-full rounded-full mb-4">
          <Link href="/signup">
            Get Full Access — $995
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        
        <p className="text-sm text-slate-500">
          30-day money-back guarantee. No risk.
        </p>
      </div>
    </div>
  )
}
