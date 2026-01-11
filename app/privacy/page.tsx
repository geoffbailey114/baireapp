import type { Metadata } from 'next'
import { APP_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${APP_NAME}. Learn how we collect, use, and protect your information.`,
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <article className="prose-legal">
          <h1>Privacy Policy</h1>
          <p className="text-sm text-slate-500">Last updated: January 2025</p>

          <h2>1. Introduction</h2>
          <p>
            BAIRE (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to 
            protecting your personal information. This Privacy Policy explains how we 
            collect, use, disclose, and safeguard your information when you use our Service.
          </p>

          <h2>2. Information We Collect</h2>
          
          <h3>Information You Provide</h3>
          <ul>
            <li><strong>Account Information:</strong> Email address provided during payment</li>
            <li><strong>Payment Information:</strong> Payment details processed securely by Stripe</li>
            <li><strong>Conversation Data:</strong> Questions and interactions with our AI consultant</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li><strong>Usage Data:</strong> How you interact with our Service</li>
            <li><strong>Device Information:</strong> Browser type, operating system, device identifiers</li>
            <li><strong>Log Data:</strong> IP address, access times, pages viewed</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and maintain our Service</li>
            <li>Process your payment and manage your account</li>
            <li>Respond to your inquiries and provide support</li>
            <li>Improve our Service and develop new features</li>
            <li>Comply with legal obligations</li>
            <li>Protect against fraud and unauthorized access</li>
          </ul>

          <h2>4. Information Sharing</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Third parties that help us operate our Service (e.g., Stripe for payments, cloud hosting providers)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your 
            personal information. However, no method of transmission over the Internet or 
            electronic storage is 100% secure.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide our 
            Service and fulfill the purposes described in this Privacy Policy. When you 
            close your transaction, we may retain certain information as required by law 
            or for legitimate business purposes.
          </p>

          <h2>7. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Delete your personal information</li>
            <li>Object to or restrict processing</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>
          <p>
            To exercise these rights, please contact us at privacy@baire.ai.
          </p>

          <h2>8. Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to maintain your session and preferences. 
            Essential cookies are required for the Service to function. You can control 
            cookie settings through your browser.
          </p>

          <h2>9. Third-Party Services</h2>
          <p>
            Our Service may contain links to third-party websites or services. We are not 
            responsible for the privacy practices of these third parties.
          </p>

          <h2>10. Children&apos;s Privacy</h2>
          <p>
            Our Service is not intended for individuals under 18 years of age. We do not 
            knowingly collect personal information from children.
          </p>

          <h2>11. International Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than 
            your own. We ensure appropriate safeguards are in place for such transfers.
          </p>

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of 
            material changes by posting the new Privacy Policy on this page and updating 
            the &quot;Last updated&quot; date.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at 
            privacy@baire.ai.
          </p>
        </article>
      </div>
    </div>
  )
}
