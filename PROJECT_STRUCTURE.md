# BAIRE Project Structure

```
baire/
├── app/
│   ├── layout.tsx                 # Root layout with fonts, nav, footer
│   ├── page.tsx                   # Home page (/)
│   ├── pricing/
│   │   └── page.tsx               # Pricing page (/pricing)
│   ├── access/
│   │   └── page.tsx               # Post-payment access page (/access)
│   ├── consultant/
│   │   └── page.tsx               # AI consultant chat (/consultant)
│   ├── terms/
│   │   └── page.tsx               # Terms of Use
│   ├── privacy/
│   │   └── page.tsx               # Privacy Policy
│   ├── disclaimer/
│   │   └── page.tsx               # Disclaimer
│   ├── contact/
│   │   └── page.tsx               # Contact page
│   ├── api/
│   │   ├── checkout/
│   │   │   └── route.ts           # Stripe checkout session
│   │   ├── stripe-webhook/
│   │   │   └── route.ts           # Stripe webhook handler
│   │   ├── chat/
│   │   │   └── route.ts           # OpenAI proxy
│   │   ├── verify-session/
│   │   │   └── route.ts           # Verify Stripe session & issue JWT
│   │   └── close-transaction/
│   │       └── route.ts           # Handle closing self-report
│   ├── globals.css                # Global styles
│   ├── sitemap.ts                 # Dynamic sitemap
│   └── robots.ts                  # Robots.txt config
├── components/
│   ├── ui/                        # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── textarea.tsx
│   │   ├── accordion.tsx
│   │   └── badge.tsx
│   ├── navigation.tsx             # Main navigation
│   ├── footer.tsx                 # Site footer
│   ├── hero.tsx                   # Home page hero
│   ├── features.tsx               # Features section
│   ├── how-it-works.tsx           # How it works section
│   ├── faq.tsx                    # FAQ with schema
│   ├── cta-section.tsx            # Call to action
│   ├── pricing-card.tsx           # Pricing display
│   ├── chat-interface.tsx         # AI chat UI
│   ├── closing-modal.tsx          # Closing confirmation modal
│   ├── trial-banner.tsx           # Free trial status banner
│   └── auth-guard.tsx             # Protected route wrapper
├── lib/
│   ├── jwt.ts                     # JWT utilities
│   ├── cookies.ts                 # Cookie helpers
│   ├── stripe.ts                  # Stripe client
│   ├── openai.ts                  # OpenAI client
│   ├── trial.ts                   # Trial logic helpers
│   ├── constants.ts               # App constants
│   └── utils.ts                   # General utilities
├── emails/
│   ├── trial-upgrade.html         # Trial → Paid nudge
│   ├── payment-confirmation.html  # Payment received
│   ├── access-instructions.html   # How to access
│   └── closing-confirmation.html  # Closing thank you
├── public/
│   ├── og-image.png               # OpenGraph image
│   └── favicon.ico                # Favicon
├── .env.example                   # Environment variables template
├── .env.local                     # Local env (gitignored)
├── next.config.js                 # Next.js config
├── tailwind.config.ts             # Tailwind config
├── tsconfig.json                  # TypeScript config
├── package.json                   # Dependencies
├── components.json                # Shadcn UI config
└── README.md                      # Documentation
```
