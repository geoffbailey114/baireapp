import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { APP_NAME, APP_URL, APP_DESCRIPTION } from '@/lib/constants'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: `${APP_NAME} - Buy Without a Buyer's Agent`,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: [
    'home buying',
    'self-represented buyer',
    'no buyer agent',
    'save commission',
    'real estate',
    'AI home buying',
    'FSBO',
    'buy without agent',
  ],
  authors: [{ name: APP_NAME }],
  creator: APP_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: APP_URL,
    title: `${APP_NAME} - Buy Without a Buyer's Agent`,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME} - Buy Without a Buyer's Agent`,
    description: APP_DESCRIPTION,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
