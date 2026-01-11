# BAIRE - AI Home Buying Consultant

BAIRE is an AI-powered educational platform that helps self-represented home buyers understand the home-buying process. It provides guidance, explanations, and educational content—NOT legal, financial, or real estate advice.

## Features

- **AI-Powered Consultant**: Ask questions about home buying and get educational responses
- **Free Trial**: 5 free queries to try the service
- **One-Time Payment**: $599 for full access until you close on your home
- **Secure Authentication**: JWT-based auth with HttpOnly cookies
- **No Database Required**: MVP uses JWT + localStorage + Stripe metadata

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Shadcn/UI
- **Authentication**: JWT (jose library)
- **Payments**: Stripe Checkout
- **AI**: OpenAI GPT-4o
- **Deployment**: Vercel

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Stripe account
- OpenAI API key

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd baire

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Edit .env.local with your values (see Environment Variables section)

# Run development server
npm run dev
```

Visit `http://localhost:3000`

## Environment Variables

Create a `.env.local` file with the following:

```env
# OpenAI
OPENAI_API_KEY=sk-your-openai-api-key

# Stripe
STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-publishable-key
STRIPE_WEBHOOK_SECRET=whsec_your-webhook-secret

# Application
APP_BASE_URL=http://localhost:3000
JWT_SECRET=your-jwt-secret-min-32-characters-here

# Optional
NODE_ENV=development
```

### Generating JWT Secret

```bash
openssl rand -base64 32
```

## Stripe Setup

### Test Mode

1. Log in to [Stripe Dashboard](https://dashboard.stripe.com)
2. Ensure you're in **Test Mode** (toggle in top right)
3. Go to **Developers > API Keys**
4. Copy your publishable key and secret key to `.env.local`

### Webhook Setup (Local Development)

1. Install Stripe CLI: `brew install stripe/stripe-cli/stripe`
2. Login: `stripe login`
3. Forward webhooks:
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe-webhook
   ```
4. Copy the webhook signing secret to `.env.local` as `STRIPE_WEBHOOK_SECRET`

### Webhook Setup (Production)

1. Go to **Developers > Webhooks** in Stripe Dashboard
2. Click **Add endpoint**
3. URL: `https://your-domain.com/api/stripe-webhook`
4. Select events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Copy the signing secret to your Vercel environment variables

### Going Live

1. Complete Stripe account activation
2. Switch to Live Mode in dashboard
3. Update environment variables with live keys:
   - `STRIPE_SECRET_KEY` → `sk_live_...`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` → `pk_live_...`
4. Create new webhook endpoint for production URL
5. Update `STRIPE_WEBHOOK_SECRET` with production webhook secret

## Deployment to Vercel

### Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add environment variables in Project Settings:
   - All variables from `.env.example`
   - Use production values for live deployment
4. Deploy

### Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

### Environment Variables in Vercel

1. Go to Project Settings > Environment Variables
2. Add each variable from `.env.example`
3. Set appropriate values for Production/Preview/Development

## DNS Configuration (Squarespace → Vercel)

### Add Your Domain to Vercel

1. Go to Project Settings > Domains
2. Add your domain (e.g., `baire.ai`)
3. Vercel will show required DNS records

### Configure DNS in Squarespace

1. Log in to Squarespace
2. Go to **Settings > Domains > your domain > DNS Settings**
3. Add the following records:

**For apex domain (baire.ai):**
```
Type: A
Host: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Host: www
Value: cname.vercel-dns.com
```

4. Wait for DNS propagation (can take up to 48 hours)
5. Vercel will automatically provision SSL certificate

### Verify DNS

```bash
# Check A record
dig baire.ai A

# Check CNAME
dig www.baire.ai CNAME
```

## Project Structure

```
baire/
├── app/
│   ├── api/              # API routes
│   │   ├── checkout/     # Stripe checkout session
│   │   ├── chat/         # OpenAI proxy
│   │   ├── stripe-webhook/
│   │   ├── verify-session/
│   │   └── close-transaction/
│   ├── access/           # Post-payment page
│   ├── consultant/       # AI chat interface
│   ├── pricing/          # Pricing page
│   ├── terms/            # Legal pages
│   ├── privacy/
│   ├── disclaimer/
│   ├── contact/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/               # Shadcn components
│   └── ...               # App components
├── lib/
│   ├── jwt.ts            # JWT utilities
│   ├── cookies.ts        # Cookie helpers
│   ├── stripe.ts         # Stripe client
│   ├── openai.ts         # OpenAI client
│   ├── trial.ts          # Trial tracking
│   ├── constants.ts      # App constants
│   └── utils.ts          # Utilities
├── emails/               # Email templates
└── public/               # Static assets
```

## Security Considerations

- All API keys are server-side only (except Stripe publishable key)
- JWT stored in HttpOnly cookie (not accessible to JavaScript)
- Stripe webhook signature verification
- Rate limiting on chat endpoint
- No sensitive data in localStorage

## Legal Compliance

BAIRE includes:
- Clear disclaimers that it's educational only
- Not a substitute for professional advice
- Terms of Use, Privacy Policy, Disclaimer pages
- AI system prompt enforcing compliance

## Testing

### Test Payment Flow

1. Use Stripe test card: `4242 4242 4242 4242`
2. Any future expiry date
3. Any CVC

### Test Webhook Locally

```bash
# Terminal 1: Run dev server
npm run dev

# Terminal 2: Forward Stripe webhooks
stripe listen --forward-to localhost:3000/api/stripe-webhook

# Terminal 3: Trigger test event
stripe trigger checkout.session.completed
```

## Production Checklist

- [ ] All environment variables set in Vercel
- [ ] Stripe webhook configured for production URL
- [ ] Stripe account activated for live payments
- [ ] DNS configured and SSL active
- [ ] Test complete payment flow in production
- [ ] Verify auth cookie works across pages
- [ ] Test closing flow
- [ ] Review legal pages for accuracy
- [ ] Create actual OG image (1200x630)
- [ ] Set up error monitoring (optional: Sentry)

## Support

For questions about BAIRE:
- General: hello@baire.ai
- Support: support@baire.ai
- Legal: legal@baire.ai

## License

Proprietary - All rights reserved
