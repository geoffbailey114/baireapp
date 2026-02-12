import { redirect } from 'next/navigation'
import { getUserAccess } from '@/lib/access'
import { CancelForm } from './cancel-form'

export const dynamic = 'force-dynamic'

export default async function BillingPage() {
  const access = await getUserAccess()

  if (!access.email) {
    redirect('/login')
  }

  const tierLabel = access.isComp 
    ? 'Full Access' 
    : access.tier === 'full_access' 
    ? 'Full Access' 
    : access.tier === 'trial' 
    ? '7-Day Free Trial' 
    : access.tier

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50/50 to-white py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">
            Billing & Account
          </h1>

          {/* Current Status */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Current Status
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Account</span>
                <span className="font-medium text-slate-900">{access.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Access Level</span>
                <span className="font-medium text-slate-900 capitalize">
                  {tierLabel}
                  {access.isComp && (
                    <span className="ml-2 text-xs bg-sage-100 text-sage-700 px-2 py-0.5 rounded">COMP</span>
                  )}
                </span>
              </div>
              {access.tier === 'trial' && access.trialEndsAt && (
                <div className="flex justify-between">
                  <span className="text-slate-600">Trial Ends</span>
                  <span className="font-medium text-slate-900">
                    {new Date(access.trialEndsAt * 1000).toLocaleString()}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Purchase Info */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Purchase
            </h2>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-slate-900 font-medium">BAIRE Full Access</span>
                <p className="text-sm text-slate-500">Comp analysis, showing scripts, negotiation coaching, closing guidance</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                access.purchases.full_access || access.isComp
                  ? 'bg-sage-100 text-sage-700' 
                  : access.tier === 'trial'
                  ? 'bg-amber-50 text-amber-700'
                  : 'bg-slate-100 text-slate-500'
              }`}>
                {access.purchases.full_access ? 'Purchased ($995)' : 
                 access.isComp ? 'Complimentary' :
                 access.tier === 'trial' ? 'Trial active' : 
                 'Not purchased'}
              </span>
            </div>

            {access.tier === 'trial' && (
              <p className="mt-4 text-sm text-slate-500">
                Your card will be charged $995 when your trial ends. Cancel anytime before then.
              </p>
            )}
          </div>

          {/* Cancel Trial */}
          {access.tier === 'trial' && !access.isTrialExpired && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Cancel Trial
              </h2>
              <p className="text-slate-600 mb-4">
                Cancel anytime during your 7-day trial and you won&apos;t be charged. 
                You&apos;ll keep access until the trial period ends.
              </p>
              <CancelForm 
                customerId={access.stripeCustomerId} 
                trialEndsAt={access.trialEndsAt}
              />
            </div>
          )}

          {/* Expired / No Access */}
          {access.tier === 'none' && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 text-center">
              <p className="text-slate-600 mb-4">
                Your trial has ended or was canceled.
              </p>
              <a 
                href="/pricing" 
                className="text-sage-600 hover:text-sage-700 font-medium"
              >
                Get full access for $995 →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
