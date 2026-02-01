import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

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
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
