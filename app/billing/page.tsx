import { redirect } from 'next/navigation'
import { getUserAccess } from '@/lib/access'
import { CancelForm } from './cancel-form'

export const dynamic = 'force-dynamic'

export default async function BillingPage() {
  const access = await getUserAccess()

  if (!access.email) {
    redirect('/login')
  }

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
                  {access.tier === 'trial' ? 'Free Trial' : 
                   access.purchases.offer ? 'Full Access (Offer)' : 
                   access.purchases.access ? 'Access' :
                   access.tier}
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

          {/* Purchases */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Your Purchases
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-slate-900 font-medium">Free Trial</span>
                  <p className="text-sm text-slate-500">48-hour educational access</p>
                </div>
                <span className="px-3 py-1 rounded-full text-sm bg-sage-100 text-sage-700">
                  Completed
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-slate-900 font-medium">Access</span>
                  <p className="text-sm text-slate-500">Showing scripts, waivers, checklists</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  access.purchases.access 
                    ? 'bg-sage-100 text-sage-700' 
                    : 'bg-slate-100 text-slate-500'
                }`}>
                  {access.purchases.access ? 'Purchased ($99)' : 'Not purchased'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-slate-900 font-medium">Offer</span>
                  <p className="text-sm text-slate-500">Offer prep, negotiation, closing support</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  access.purchases.offer 
                    ? 'bg-sage-100 text-sage-700' 
                    : 'bg-slate-100 text-slate-500'
                }`}>
                  {access.purchases.offer ? 'Purchased ($500)' : 'Not purchased'}
                </span>
              </div>
            </div>

            {/* Total spent */}
            <div className="mt-6 pt-4 border-t border-slate-200">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Total spent</span>
                <span className="font-semibold text-slate-900">
                  ${(access.purchases.access ? 99 : 0) + (access.purchases.offer ? 500 : 0)}
                </span>
              </div>
            </div>
          </div>

          {/* Cancel Trial */}
          {access.tier === 'trial' && !access.isTrialExpired && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Cancel Trial
              </h2>
              <p className="text-slate-600 mb-4">
                If you cancel your trial, you'll still have access until the trial period ends. 
                You won't be charged.
              </p>
              <CancelForm 
                customerId={access.stripeCustomerId} 
                trialEndsAt={access.trialEndsAt}
              />
            </div>
          )}

          {/* Already canceled or expired */}
          {access.tier === 'none' && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 text-center">
              <p className="text-slate-600 mb-4">
                Your trial has ended or was canceled.
              </p>
              <a 
                href="/pricing" 
                className="text-sage-600 hover:text-sage-700 font-medium"
              >
                View pricing to get started →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
