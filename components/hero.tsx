'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative bg-white">
      <div className="container py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl">
          {/* Main headline - much larger, tighter line height */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Buy your home
            <br />
            <span className="text-sage-600">without the agent.</span>
          </h1>

          {/* Subhead - more breathing room, shorter */}
          <p className="mt-8 text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
            BAIRE guides you through every step of buying a home — 
            for a flat $599 instead of thousands in commission.
          </p>

          {/* CTA - more prominence */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button asChild size="xl" className="text-lg px-8 py-6">
              <Link href="/signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="xl" asChild className="text-lg">
              <Link href="/how-baire-works">See how it works</Link>
            </Button>
          </div>

          {/* Simple trust line - minimal */}
          <p className="mt-8 text-sm text-slate-500">
            48-hour free trial · No credit card required to start
          </p>
        </div>
      </div>
    </section>
  )
}
