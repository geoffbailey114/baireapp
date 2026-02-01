import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/signup',
    error: '/signup',
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google' && user.email) {
        try {
          // Check if customer already exists in Stripe
          const existingCustomers = await stripe.customers.list({
            email: user.email,
            limit: 1,
          })

          if (existingCustomers.data.length > 0) {
            // Customer exists - they should log in instead
            // We'll handle this in the redirect
            return true
          }

          // Customer doesn't exist - we'll create them after checkout
          return true
        } catch (error) {
          console.error('Error checking Stripe customer:', error)
          return true // Allow sign in, handle errors later
        }
      }
      return true
    },
    async jwt({ token, user, account }) {
      if (account && user) {
        token.provider = account.provider
        token.email = user.email
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session as any).provider = token.provider
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      // After Google sign-in, redirect to checkout flow
      if (url.includes('/api/auth/callback/google')) {
        return `${baseUrl}/auth/google-callback`
      }
      return url.startsWith(baseUrl) ? url : baseUrl
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
