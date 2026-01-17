import type { Metadata } from 'next'
import { APP_NAME, APP_URL } from '@/lib/constants'
import { SavingsCalculator } from './calculator'

export const metadata: Metadata = {
  title: 'Savings Calculator',
  description: `See how much you could save by using ${APP_NAME} instead of a traditional buyer's agent. Calculate your potential savings based on your home price.`,
  openGraph: {
    title: `Savings Calculator | ${APP_NAME}`,
    description: 'Calculate how much you could save on buyer agent commissions.',
    url: `${APP_URL}/savings-calculator`,
  },
}

export default function SavingsCalculatorPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            How much could you save?
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Traditional buyer's agents charge 2-3% of the home price. 
            See what that means for your purchase — and how much you keep with BAIRE.
          </p>
        </div>

        {/* Calculator */}
        <SavingsCalculator />

        {/* Context Section */}
        <div className="mx-auto max-w-2xl mt-16">
          <div className="bg-slate-50 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Why are buyers paying attention to this now?
            </h2>
            <div className="space-y-4 text-slate-600">
              <p>
                Recent changes to how real estate commissions work mean buyers have more 
                choices than ever. You're no longer locked into traditional commission structures.
              </p>
              <p>
                BAIRE gives you the guidance you need to buy confidently — for a flat $599, 
                paid as you go. No percentage of your home price. No surprise fees at closing.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mx-auto max-w-2xl mt-12">
          <p className="text-sm text-slate-500 text-center leading-relaxed">
            Calculator provides estimates based on typical commission rates. Actual commission 
            rates vary by market and are negotiable. BAIRE is an educational tool, not a 
            replacement for professional real estate, legal, or financial advice.
          </p>
        </div>
      </div>
    </div>
  )
}
