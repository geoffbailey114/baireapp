import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'How BAIRE Works',
  description: `Learn how ${APP_NAME} helps you tour homes, write strong offers, and navigate deals without hiring a buyer's agent. Save 2-3% on your home purchase.`,
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
          {/* Hero Section */}
          <h1>How BAIRE Works</h1>
          
          <div className="bg-sage-50 border border-sage-200 rounded-xl p-6 mb-8">
            <p className="text-lg text-slate-700 mb-0">
              <strong>The idea in one sentence:</strong> BAIRE helps motivated buyers self-represent—so you can tour homes, write strong offers, and navigate the deal <strong>without hiring a buyer's agent</strong>.
            </p>
          </div>

          <blockquote className="border-l-4 border-sage-500 pl-4 py-2 my-6 bg-slate-50 rounded-r-lg">
            <p className="text-slate-700 italic mb-0">
              <strong>Affordability reality:</strong> When saving 2–3% matters, removing the buyer-agent commission from the equation gives you leverage.
            </p>
          </blockquote>

          {/* Who BAIRE is for */}
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
                <li>Prefer to handle showings + decisions themselves</li>
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
                <li>Buyers who aren't comfortable doing showings/open houses</li>
                <li>Shoppers who want months of touring every weekend with an agent</li>
              </ul>
            </div>
          </div>

          {/* The BAIRE Method */}
          <h2>The BAIRE Method: 6 steps from "found it" to "closed"</h2>

          {/* Step 1 */}
          <div className="border border-slate-200 rounded-xl p-6 my-6">
            <h3 className="text-sage-700 mt-0">Step 1) Set your "win conditions" (5 minutes)</h3>
            <p>BAIRE starts by turning your situation into a simple plan:</p>
            <ul>
              <li>Price range + monthly payment comfort</li>
              <li>Must-haves vs dealbreakers</li>
              <li>Timeline and urgency level</li>
              <li>Risk tolerance (inspection, repairs, appraisal gap, etc.)</li>
            </ul>
            <p className="text-sage-700 font-medium mb-0">
              <strong>Output:</strong> a personal "Offer Strategy Profile" so every next step is faster and clearer.
            </p>
          </div>

          {/* Step 2 */}
          <div className="border border-slate-200 rounded-xl p-6 my-6">
            <h3 className="text-sage-700 mt-0">Step 2) Pick a home and pressure-test it (10 minutes)</h3>
            <p>When you find a listing you like, BAIRE helps you evaluate it like a pro:</p>
            <ul>
              <li>Red flags to check in the listing + disclosures</li>
              <li>What matters in the neighborhood + comp range</li>
              <li>Offer posture: aggressive / balanced / conservative</li>
            </ul>
            <p className="text-sage-700 font-medium mb-0">
              <strong>Output:</strong> a "Go / No-Go" recommendation + a suggested offer path.
            </p>
          </div>

          {/* Step 3 - The Big Unlock */}
          <div className="border-2 border-sage-300 bg-sage-50/50 rounded-xl p-6 my-6">
            <h3 className="text-sage-700 mt-0">Step 3) Schedule your own showing (this is the big unlock)</h3>
            <p>
              The industry trained buyers to believe: <em>"You need an agent to get into homes."</em><br />
              You don't—<strong>you need a plan.</strong> BAIRE gives you one.
            </p>
            <p><strong>Common options:</strong></p>
            <ul>
              <li><strong>Open houses</strong> (tour with zero buyer agreement required in most cases)</li>
              <li><strong>Request a showing via the listing agent / listing brokerage</strong></li>
              <li><strong>Use the listing's showing instructions</strong> (many homes use scheduling tools)</li>
              <li><strong>New construction model homes</strong> (often easiest path)</li>
            </ul>
            <p><strong>BAIRE gives you:</strong></p>
            <ul>
              <li>A simple script to request access confidently</li>
              <li>What to say (and not say) to protect your position</li>
              <li>A checklist for what to look for during the walkthrough</li>
            </ul>
          </div>

          {/* Step 4 */}
          <div className="border border-slate-200 rounded-xl p-6 my-6">
            <h3 className="text-sage-700 mt-0">Step 4) Build a winning offer—without guessing</h3>
            <p>This is where BAIRE earns its keep.</p>
            <p>BAIRE helps you generate:</p>
            <ul>
              <li>Offer price + terms (earnest money, closing date, contingencies)</li>
              <li>Inspection strategy and what to request</li>
              <li>Appraisal gap logic (when to use it, when not to)</li>
              <li>Clean, confident communication to the listing side</li>
            </ul>
            <p className="text-sage-700 font-medium mb-0">
              <strong>Output:</strong> a clear offer package strategy you can take to the professionals you choose (attorney/title, lender, etc.).
            </p>
          </div>

          {/* Step 5 */}
          <div className="border border-slate-200 rounded-xl p-6 my-6">
            <h3 className="text-sage-700 mt-0">Step 5) Negotiate like an operator (inspection + concessions)</h3>
            <p>Negotiation isn't about being "tough." It's about being clear.</p>
            <p>BAIRE helps you:</p>
            <ul>
              <li>Decide what to ask for (repairs, credits, price reduction)</li>
              <li>Prioritize safety vs cosmetic vs optional fixes</li>
              <li>Respond to counteroffers without emotion</li>
              <li>Keep the deal moving without giving away leverage</li>
            </ul>
          </div>

          {/* Step 6 */}
          <div className="border border-slate-200 rounded-xl p-6 my-6">
            <h3 className="text-sage-700 mt-0">Step 6) Close with control (and fewer surprises)</h3>
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

          {/* The Trust Layer */}
          <h2>The trust layer: what BAIRE is (and isn't)</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-sage-50 border border-sage-200 rounded-xl p-6">
              <h3 className="flex items-center gap-2 text-sage-800 mt-0">
                <Check className="h-5 w-5 text-sage-600" />
                BAIRE is:
              </h3>
              <ul className="space-y-2 mb-0">
                <li>A step-by-step system that replaces uncertainty with a process</li>
                <li>A decision engine for offer terms + negotiation posture</li>
                <li>A walkthrough + communication playbook</li>
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
            <strong>Good rule:</strong> BAIRE handles the strategy and structure. Licensed pros handle legal/escrow specifics.
          </p>

          {/* FAQ Section */}
          <h2>The biggest questions buyers have (answered)</h2>

          <div className="space-y-6 my-6">
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-slate-800 mt-0">"Will sellers/listing agents refuse to work with me?"</h3>
              <p>Most listing sides care about two things:</p>
              <ol className="list-decimal list-inside text-slate-600 mb-4 space-y-2">
                <li>Are you qualified (financing proof)?</li>
                <li>Can you perform (clean contract, clear communication)?</li>
              </ol>
              <p className="mb-0">BAIRE helps you show both—fast.</p>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-slate-800 mt-0">"How does commission work now?"</h3>
              <p>Commission has always been negotiable, but recent industry rules increased transparency:</p>
              <ul>
                <li><strong>MLS offers of compensation are prohibited</strong> (can't be advertised in the MLS anymore)</li>
                <li>Buyers working <em>with</em> an agent are typically asked to sign a <strong>written buyer agreement</strong> that spells out compensation before touring with that agent</li>
                <li>Sellers can still choose to offer concessions or other compensation <strong>through negotiation</strong>, but it's not posted on MLS the same way</li>
              </ul>
              <p className="text-sage-700 font-medium mb-0">
                <strong>BAIRE's position:</strong> If you're going to do the work and make the decisions, you should have a path that doesn't require paying 2–3% just because it used to be the default.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-slate-800 mt-0">"What if I already signed something with an agent?"</h3>
              <p className="mb-0">
                If you signed a buyer agency/buyer representation agreement, you may be committed for a period of time. BAIRE will tell you to review it carefully and, if needed, consult an attorney before changing course.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-slate-800 mt-0">"I'm worried I'll mess up paperwork."</h3>
              <p>That's normal. The goal isn't "know everything." The goal is:</p>
              <ul>
                <li>Follow a proven sequence</li>
                <li>Use clean scripts and checklists</li>
                <li>Bring in the right pro at the right time (title/attorney/lender)</li>
              </ul>
              <p className="mb-0">BAIRE is designed to reduce "unknown unknowns."</p>
            </div>
          </div>

          {/* Why Buyers Are Switching */}
          <h2>Why motivated buyers are switching to this approach</h2>
          <p>Because the market punishes hesitation.</p>
          <p>BAIRE is built around:</p>
          <ul>
            <li><strong>Speed:</strong> clear next steps so you don't stall</li>
            <li><strong>Clarity:</strong> you always know what matters most</li>
            <li><strong>Leverage:</strong> affordability improves when you keep costs optional</li>
          </ul>

          {/* What You Get */}
          <h2>What you get inside BAIRE (simple version)</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <ul className="space-y-3 mb-0">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
                <span>The 6-step homebuying roadmap</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
                <span>Showings scripts + walkthrough checklist</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
                <span>Offer builder + negotiation playbooks</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
                <span>Deal timeline tracker (deadlines + what to do when)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
                <span>"What would a pro do here?" decision prompts</span>
              </li>
            </ul>
          </div>

          {/* Final CTA */}
          <div className="bg-sage-600 text-white rounded-xl p-8 my-8 text-center">
            <h2 className="text-white text-2xl font-bold mt-0 mb-4">
              Buying without a buyer's agent is now simple.
            </h2>
            <p className="text-sage-100 mb-6">
              With affordability stretched, saving the 2–3% buyer commission gives you leverage.
            </p>
            <Button 
              asChild 
              size="xl" 
              className="bg-white text-sage-700 hover:bg-sage-50"
            >
              <Link href="/pricing">
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
