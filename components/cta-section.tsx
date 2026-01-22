import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-sage-700">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to buy smarter?
          </h2>
          <p className="mt-6 text-xl text-sage-100">
            Start your free 48-hour trial. No credit card required.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="xl" 
              className="bg-white text-sage-700 hover:bg-sage-50 text-lg px-8"
            >
              <Link href="/signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Pricing hint */}
          <p className="mt-8 text-sage-200 text-sm">
            $599 total after trial · Pay as you go · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
