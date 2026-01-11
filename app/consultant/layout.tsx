import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Consultant',
  description: 'Chat with BAIRE, your AI home-buying educational consultant.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ConsultantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
