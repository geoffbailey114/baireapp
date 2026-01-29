'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}
