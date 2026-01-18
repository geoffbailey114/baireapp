'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Home, PiggyBank, TrendingDown, Sofa, Percent, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'

const BAIRE_COST = 599

// Suggested uses for savings
const savingsIdeas = [
  { icon: Sofa, label: 'New furniture' },
  { icon: TrendingDown, label: 'Rate buydown' },
  { icon: Home, label: 'Closing costs' },
  { icon: PiggyBank, label: 'Emergency fund' },
]

export function SavingsCalculator() {
  const [homePrice, setHomePrice] = useState(400000)
  const [commissionRate, setCommissionRate] = useState(2.5)

  const traditionalCost = Math.round(homePrice * (commissionRate / 100))
  const savings = traditionalCost - BAIRE_COST
  const savingsPositive = savings > 0

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatNumber = (amount: number) => {
    return new Intl.NumberFormat('en-US').format(amount)
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Calculator Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
        {/* Inputs */}
        <div className="p-6 md:p-8 border-b border-slate-200">
          {/* Home Price */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <label htmlFor="home-price" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <Home className="h-4 w-4 text-sage-600" />
                Home Price
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={formatNumber(homePrice)}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '')
                    setHomePrice(Number(value) || 0)
                  }}
                  className="w-36 pl-8 pr-3 py-2 text-right font-semibold text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none"
                />
              </div>
            </div>
            <input
              id="home-price"
              type="range"
              min={100000}
              max={1500000}
              step={10000}
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sage-600"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>$100k</span>
              <span>$1.5M</span>
            </div>
          </div>

          {/* Commission Rate */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label htmlFor="commission-rate" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <Percent className="h-4 w-4 text-sage-600" />
                Typical Buyer Agent Commission
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={1}
                  max={5}
                  step={0.1}
                  value={commissionRate}
                  onChange={(e) => setCommissionRate(Number(e.target.value) || 2.5)}
                  className="w-16 px-2 py-2 text-center font-semibold text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none"
                />
                <span className="text-slate-600">%</span>
              </div>
            </div>
            <input
              id="commission-rate"
              type="range"
              min={1}
              max={4}
              step={0.1}
              value={commissionRate}
              onChange={(e) => setCommissionRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sage-600"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>1%</span>
              <span>4%</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-6 md:p-8 bg-slate-50">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {/* Traditional Cost */}
            <div className="bg-white rounded-xl p-4 border border-slate-200">
              <p className="text-sm text-slate-500 mb-1">Traditional Agent</p>
              <p className="text-2xl font-bold text-slate-900">{formatCurrency(traditionalCost)}</p>
              <p className="text-xs text-slate-400">{commissionRate}% of home price</p>
            </div>

            {/* BAIRE Cost */}
            <div className="bg-white rounded-xl p-4 border border-sage-200">
              <p className="text-sm text-slate-500 mb-1">BAIRE</p>
              <p className="text-2xl font-bold text-sage-700">{formatCurrency(BAIRE_COST)}</p>
              <p className="text-xs text-slate-400">Flat fee, pay as you go</p>
            </div>

            {/* Savings */}
            <div className={`rounded-xl p-4 border-2 ${savingsPositive ? 'bg-sage-50 border-sage-500' : 'bg-slate-100 border-slate-300'}`}>
              <p className="text-sm text-slate-500 mb-1">Your Savings</p>
              <p className={`text-2xl font-bold ${savingsPositive ? 'text-sage-700' : 'text-slate-500'}`}>
                {savingsPositive ? formatCurrency(savings) : '$0'}
              </p>
              <p className="text-xs text-slate-400">
                {savingsPositive ? 'Money stays with you' : 'Consider higher price'}
              </p>
            </div>
          </div>

          {/* What You Could Do */}
          {savingsPositive && savings > 1000 && (
            <div className="mb-6">
              <p className="text-sm font-medium text-slate-700 mb-3">
                What could you do with {formatCurrency(savings)}?
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {savingsIdeas.map((idea) => (
                  <div key={idea.label} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-slate-200">
                    <idea.icon className="h-4 w-4 text-sage-600" />
                    <span className="text-sm text-slate-600">{idea.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="flex-1">
              <Link href="/signup">
                Start Free — 48-Hour Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex-1">
              <Link href="/how-baire-works">
                See How It Works
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-3xl font-bold text-slate-900">{formatCurrency(BAIRE_COST)}</p>
          <p className="text-sm text-slate-500">Total BAIRE cost</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-slate-900">$0</p>
          <p className="text-sm text-slate-500">Upfront to start</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-sage-700">
            {savingsPositive ? Math.round((savings / traditionalCost) * 100) : 0}%
          </p>
          <p className="text-sm text-slate-500">You save</p>
        </div>
      </div>
    </div>
  )
} 
