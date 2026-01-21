import type { Metadata } from 'next'
import { APP_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${APP_NAME}. Learn how we collect, use, and protect your information.`,
}

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <article className="prose-legal mx-auto max-w-3xl">
          <h1>Privacy Policy</h1>
          
          <p className="text-slate-500">
            <strong>BAIRE, LLC</strong><br />
            Last Updated: January 19, 2026
          </p>

          <h2>1. Introduction</h2>
          <p>
            BAIRE, LLC ("BAIRE," "we," "us," or "our") respects your privacy and is committed 
            to protecting your personal information. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you use our Service.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          
          <h3>2.1 Information You Provide</h3>
          <ul>
            <li>Account information (email address, password)</li>
            <li>Payment information (processed securely through Stripe)</li>
            <li>Communications with our Service (chat inputs, questions)</li>
            <li>Self-representation agreement consent and timestamp</li>
          </ul>

          <h3>2.2 Information Collected Automatically</h3>
          <ul>
            <li>Device information (browser type, operating system)</li>
            <li>Usage data (pages visited, features used)</li>
            <li>IP address and general location</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our Service</li>
            <li>Process transactions and send related information</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Send you technical notices and support messages</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, investigate, and prevent fraudulent transactions</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Sharing of Information</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> With third parties who perform services on our behalf (e.g., payment processing, hosting, analytics)</li>
            <li><strong>Legal Requirements:</strong> When required by law, subpoena, or legal process</li>
            <li><strong>Protection of Rights:</strong> To protect the rights, property, or safety of BAIRE, our users, or others</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your 
            personal information against unauthorized access, alteration, disclosure, or 
            destruction. However, no method of transmission over the Internet or electronic 
            storage is 100% secure.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the 
            purposes for which it was collected, including to satisfy legal, accounting, 
            or reporting requirements.
          </p>

          <h2>7. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict certain processing</li>
            <li>Data portability</li>
          </ul>
          <p>
            To exercise these rights, please contact us at{' '}
            <a href="mailto:privacy@baireapp.com" className="text-sage-600 hover:text-sage-700">
              privacy@baireapp.com
            </a>
          </p>

          <h2>8. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to collect and track information 
            about your use of our Service. You can instruct your browser to refuse all cookies 
            or to indicate when a cookie is being sent. However, some features of our Service 
            may not function properly without cookies.
          </p>

          <h2>9. Third-Party Services</h2>
          <p>
            Our Service may contain links to third-party websites or services. We are not 
            responsible for the privacy practices of these third parties. We encourage you 
            to read the privacy policies of any third-party services you access.
          </p>

          <h2>10. Children's Privacy</h2>
          <p>
            Our Service is not intended for individuals under the age of 18. We do not 
            knowingly collect personal information from children under 18. If we become 
            aware that we have collected personal information from a child under 18, we 
            will take steps to delete that information.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new Privacy Policy on this page and updating the "Last 
            Updated" date.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:{' '}
            <a href="mailto:privacy@baireapp.com" className="text-sage-600 hover:text-sage-700">
              privacy@baireapp.com
            </a>
          </p>
        </article>
      </div>
    </div>
  )
}
