import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'
import { FinancialImpact } from './financial-impact'

export const metadata: Metadata = {
  title: 'How BAIRE Works',
  description: `Learn how ${APP_NAME} helps motivated buyers self-represent—tour homes, write strong offers, and navigate deals without hiring a buyer's agent.`,
  robots: {
    index: true,
    follow: true,
  },
}

export default function HowBAIREWorksPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <article className="prose-legal">

          {/* ============================================ */}
          {/* SECTION 1 — How BAIRE Works (High-Level Clarity) */}
          {/* ============================================ */}
          
          <h1>How BAIRE Works</h1>
          
          <div className="bg-sage-50 border border-sage-200 rounded-xl p-6 mb-8">
            <p className="text-lg text-slate-700 mb-0">
              BAIRE helps motivated buyers self-represent—so you can tour homes, write strong offers, and navigate the deal <strong>without hiring a buyer's agent</strong>.
            </p>
          </div>

          {/* Who BAIRE is for / Who BAIRE is not for */}
          <h2>Who BAIRE is for</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-sage-50 border border-sage-200 rounded-xl p-6">
              <h3 className="flex items-center gap-2 text-sage-800 mt-0">
                <Check className="h-5 w-5 text-sage-600" />
                BAIRE is built for buyers who:
              </h3>
              <ul className="space-y-2 mb-0">
                <li>Are serious (ready in the next 0–90 days)</li>
                <li>Want a clear, guided path to purchase</li>
                <li>Prefer to handle showings and decisions themselves</li>
                <li>Want to avoid paying for a buyer's agent they don't need</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="flex items-center gap-2 text-slate-700 mt-0">
                <X className="h-5 w-5 text-slate-500" />
                BAIRE is not for:
              </h3>
              <ul className="space-y-2 mb-0">
                <li>People who want a full-service agent to lead the entire process</li>
                <li>Buyers who aren't comfortable doing showings or open houses</li>
                <li>Shoppers who want months of touring every weekend with an agent</li>
              </ul>
            </div>
          </div>

          {/* What BAIRE is / What BAIRE is not */}
          <h2>What BAIRE is (and isn't)</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-sage-50 border border-sage-200 rounded-xl p-6">
              <h3 className="flex items-center gap-2 text-sage-800 mt-0">
                <Check className="h-5 w-5 text-sage-600" />
                BAIRE is:
              </h3>
              <ul className="space-y-2 mb-0">
                <li>A step-by-step system that replaces uncertainty with a process</li>
                <li>A decision engine for offer terms and negotiation posture</li>
                <li>A walkthrough and communication playbook</li>
                <li>Built to help you <strong>self-represent confidently</strong></li>
              </ul>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="flex items-center gap-2 text-slate-700 mt-0">
                <X className="h-5 w-5 text-slate-500" />
                BAIRE is not:
              </h3>
              <ul className="space-y-2 mb-0">
                <li>A real estate brokerage</li>
                <li>A lawyer or lender</li>
                <li>A guarantee of outcome</li>
                <li>A substitute for state-specific legal advice</li>
              </ul>
            </div>
          </div>

          <p className="text-sage-700 font-medium">
            <strong>Good rule:</strong> BAIRE handles the strategy and structure. Licensed pros handle legal and escrow specifics.
          </p>

          {/* ============================================ */}
          {/* SECTION 2 — The BAIRE Decision System */}
          {/* ============================================ */}
          
          <h2>The BAIRE Decision System</h2>
          
          <p>
            BAIRE replaces buyer-agent judgment with a repeatable decision framework. 
            Instead of waiting for someone to tell you what to do, you answer the right questions—and the path forward becomes clear.
          </p>

          {/* Setting Win Conditions */}
          <div className="border border-slate-200 rounded-xl p-6 my-6">
            <h3 className="text-sage-700 mt-0">Setting your win conditions</h3>
            <p>BAIRE turns your situation into a simple plan:</p>
            <ul>
              <li>Price range and monthly payment comfort</li>
              <li>Must-haves vs dealbreakers</li>
              <li>Timeline and urgency level</li>
              <li>Risk tolerance (inspection, repairs, appraisal gap)</li>
            </ul>
            <p className="text-sage-700 font-medium mb-0">
              <strong>Output:</strong> a personal "Offer Strategy Profile" so every next step is faster and clearer.
            </p>
          </div>

          {/* Pressure-Testing a Home */}
          <div className="border border-slate-200 rounded-xl p-6 my-6">
            <h3 className="text-sage-700 mt-0">Pressure-testing a home</h3>
            <p>When you find a listing you like, BAIRE helps you evaluate it:</p>
            <ul>
              <li>Red flags to check in the listing and disclosures</li>
              <li>What matters in the neighborhood and comp range</li>
              <li>Offer posture: aggressive, balanced, or conservative</li>
            </ul>
            <p className="text-sage-700 font-medium mb-0">
              <strong>Output:</strong> a "Go / No-Go" recommendation and a suggested offer path.
            </p>
          </div>

          {/* Risk, Timing, and Urgency */}
          <div className="border border-slate-200 rounded-xl p-6 my-6">
            <h3 className="text-sage-700 mt-0">Risk tolerance, timing, and urgency</h3>
            <p>Every decision in a deal involves tradeoffs. BAIRE helps you calibrate:</p>
            <ul>
              <li>When to be aggressive vs when to hold back</li>
              <li>How much risk to take on inspection or appraisal gaps</li>
              <li>Whether speed or terms matter more for your situation</li>
            </ul>
            <p className="text-slate-600 mb-0">
              The goal: make decisions that match <em>your</em> situation, not generic advice.
            </p>
          </div>

          {/* ============================================ */}
          {/* SECTION 3 — Execution Without a Buyer's Agent */}
          {/* ============================================ */}
          
          <h2>Execution without a buyer's agent</h2>
          
          <p>
            Self-representation doesn't mean figuring it out alone. BAIRE guides you through each phase with scripts, checklists, and playbooks.
          </p>

          {/* Showings */}
          <div className="border-2 border-sage-300 bg-sage-50/50 rounded-xl p-6 my-6">
            <h3 className="text-sage-700 mt-0">Showings</h3>
            <p>
              The industry trained buyers to believe: <em>"You need an agent to get into homes."</em><br />
              You don't—<strong>you need a plan.</strong>
            </p>
            <p><strong>Common options:</strong></p>
            <ul>
              <li>Open houses (tour with zero buyer agreement required in most cases)</li>
              <li>Request a showing via the listing agent or listing brokerage</li>
              <li>Use the listing's showing instructions (many homes use scheduling tools)</li>
              <li>New construction model homes (often the easiest path)</li>
            </ul>
            <p><strong>BAIRE gives you:</strong></p>
            <ul className="mb-0">
              <li>A simple script to request access confidently</li>
              <li>What to say (and not say) to protect your position</li>
              <li>A checklist for what to look for during the walkthrough</li>
            </ul>
          </div>

          {/* Offers */}
          <div className="border border-slate-200 rounded-xl p-6 my-6">
            <h3 className="text-sage-700 mt-0">Offers</h3>
            <p>BAIRE helps you build a clear offer package:</p>
            <ul>
              <li>Offer price and terms (earnest money, closing date, contingencies)</li>
              <li>Inspection strategy and what to request</li>
              <li>Appraisal gap logic (when to use it, when not to)</li>
              <li>Clean, confident communication to the listing side</li>
            </ul>
            <p className="text-sage-700 font-medium mb-0">
              <strong>Output:</strong> a clear offer package strategy you can take to the professionals you choose (attorney, title, lender).
            </p>
          </div>

          {/* Negotiation */}
          <div className="border border-slate-200 rounded-xl p-6 my-6">
            <h3 className="text-sage-700 mt-0">Negotiation</h3>
            <p>Negotiation isn't about being "tough." It's about being clear.</p>
            <p>BAIRE helps you:</p>
            <ul className="mb-0">
              <li>Decide what to ask for (repairs, credits, price reduction)</li>
              <li>Prioritize safety vs cosmetic vs optional fixes</li>
              <li>Respond to counteroffers without emotion</li>
              <li>Keep the deal moving without giving away leverage</li>
            </ul>
          </div>

          {/* Closing */}
          <div className="border border-slate-200 rounded-xl p-6 my-6">
            <h3 className="text-sage-700 mt-0">Closing</h3>
            <p>BAIRE keeps you organized through:</p>
            <ul>
              <li>Deadlines (inspection, financing, appraisal, title)</li>
              <li>What documents matter and when</li>
              <li>Final walk-through checklist</li>
              <li>"Closing day" readiness</li>
            </ul>
            <p className="text-sage-700 font-medium mb-0">
              <strong>Output:</strong> you show up calm, prepared, and hard to rattle.
            </p>
          </div>

          {/* ============================================ */}
          {/* SECTION 4 — What This Changes for You */}
          {/* ============================================ */}
          
          <h2>What this changes for you</h2>
          
          <p>BAIRE is built around outcomes that matter:</p>
          
          <ul>
            <li><strong>Speed:</strong> clear next steps so you don't stall</li>
            <li><strong>Confidence:</strong> you always know what matters most</li>
            <li><strong>Leverage:</strong> affordability improves when you keep costs optional</li>
            <li><strong>Fewer surprises:</strong> deadlines, documents, and decisions are organized</li>
            <li><strong>Cleaner negotiations:</strong> respond without emotion, keep the deal moving</li>
          </ul>

          {/* Financial Impact (Collapsible) */}
          <FinancialImpact />

          {/* ============================================ */}
          {/* FAQ Section */}
          {/* ============================================ */}
          
          <h2>Common questions</h2>

          <div className="space-y-6 my-6">
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-slate-800 mt-0">"Will sellers or listing agents refuse to work with me?"</h3>
              <p>Most listing sides care about two things:</p>
              <ol className="list-decimal list-inside text-slate-600 mb-4 space-y-2">
                <li>Are you qualified (financing proof)?</li>
                <li>Can you perform (clean contract, clear communication)?</li>
              </ol>
              <p className="mb-0">BAIRE helps you show both—fast.</p>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-slate-800 mt-0">"What if I already signed something with an agent?"</h3>
              <p className="mb-0">
                If you signed a buyer agency or buyer representation agreement, you may be committed for a period of time. BAIRE will tell you to review it carefully and, if needed, consult an attorney before changing course.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-slate-800 mt-0">"I'm worried I'll mess up paperwork."</h3>
              <p>That's normal. The goal isn't "know everything." The goal is:</p>
              <ul>
                <li>Follow a proven sequence</li>
                <li>Use clean scripts and checklists</li>
                <li>Bring in the right pro at the right time (title, attorney, lender)</li>
              </ul>
              <p className="mb-0">BAIRE is designed to reduce "unknown unknowns."</p>
            </div>
          </div>

          {/* ============================================ */}
          {/* FINAL CTA */}
          {/* ============================================ */}
          
          <div className="bg-sage-600 text-white rounded-xl p-8 my-8 text-center">
            <h2 className="text-white text-2xl font-bold mt-0 mb-6">
              Buying without a buyer's agent is now simple.
            </h2>
            <Button 
              asChild 
              size="xl" 
              className="bg-white text-sage-700 hover:bg-sage-50"
            >
              <Link href="/signup">
                Try BAIRE free for 48 hours
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

        </article>
      </div>
    </div>
  )
}
