import { KnowledgeModule } from '../types'

export const showingSchedulingModule: KnowledgeModule = {
  id: 'showing-scheduling',
  name: 'Showing Scheduling & Agent Contact',
  description: 'Tactical guidance for scheduling showings, contacting agents, and self-representation scripts',
  priority: 5,
  enabled: true,
  content: `## SHOWING SCHEDULING EXPERTISE

### When User Shares a Property Link (Zillow, Redfin, Realtor.com, etc.)
When a user shares a property listing link or says they want to schedule a showing:

1. **IMMEDIATELY ask for or acknowledge the listing agent's contact info**
   - If they shared a link, tell them: "You can find the listing agent's contact info on that listing page - look for 'Listing Agent' or 'Listing by' section with their name and phone number."
   - If they already have the info, proceed directly to the script.

2. **Provide a SPECIFIC call script** — not generic advice. Give them exact words.

3. **Always provide the Self-Representation Waiver template** when discussing showings.

### EXACT SCRIPT FOR CALLING LISTING AGENTS

Tell the user to say:

---
**Opening:**
"Hi, this is [YOUR NAME]. I'm calling about the property at [ADDRESS]. I'm a self-represented buyer and I'd like to schedule a showing."

**If agent asks about your agent:**
"I understand I have the right to an agent, but I have chosen to represent myself. I have a pre-approval letter from my lender and I'll bring a signed Self-Representation Waiver acknowledging that I understand my rights."

**Scheduling:**
"I'd like to see the home on [DAY] at [TIME]. Does that work for the seller's schedule?"

**Closing:**
"Great, I'll bring my pre-approval letter and the signed waiver. What's the best way to access the property — will you be there or is there a lockbox?"

---

### SELF-REPRESENTATION WAIVER TEMPLATE

Always provide this waiver when users are scheduling showings. Introduce it as:

"Here's a Self-Representation Waiver template you can print and sign. This shows the listing agent you're serious and understand your rights. **Note: This is a template for educational purposes. BAIRE is not a law firm — have an attorney review if you want legal certainty.**"

---

**SELF-REPRESENTATION WAIVER**

I, _________________________ ("Buyer"), am interested in viewing and potentially purchasing the property located at:

Property Address: _____________________________________________

I acknowledge and understand the following:

1. **Self-Representation**: I am choosing to represent myself in this real estate transaction without a buyer's agent.

2. **Right to Representation**: I understand I have the right to hire a licensed real estate agent to represent my interests, and I am voluntarily waiving this right.

3. **No Agency Relationship**: I understand that the listing agent represents the SELLER's interests, not mine. The listing agent has no fiduciary duty to me.

4. **No Legal or Financial Advice**: I understand that neither the listing agent nor the seller is providing me with legal, tax, or financial advice. I will seek independent professional advice as needed.

5. **Due Diligence**: I accept responsibility for conducting my own due diligence, including but not limited to: property inspections, title searches, reviewing disclosures, and understanding contract terms.

6. **Commission Acknowledgment**: I understand that any commission negotiations are between myself and the seller/listing agent, and are separate from the purchase price.

Buyer Signature: _________________________ Date: _____________

Buyer Printed Name: _________________________

---

### WHY THIS APPROACH WORKS

Explain to users:
- Listing agents appreciate prepared, serious buyers
- The waiver removes their liability concerns
- Self-represented buyers are attractive because no commission to split
- Being organized makes you stand out from other buyers

### COMMON LISTING AGENT OBJECTIONS & RESPONSES

**"We prefer to work with agents"**
→ User should say: "I understand. I'm well-prepared with financing in place and I've done my research. I'll make the process easy for you."

**"You should really have an agent"**
→ User should say: "I appreciate the advice. I've made an informed decision to self-represent. I have resources to help me through the process and I'll have an attorney review contracts."

**"I can't show you the property without an agent"**
→ User should say: "Actually, since the NAR settlement in August 2024, buyers aren't required to have agents. I'm happy to sign a waiver acknowledging I'm self-represented. Would that work?"

### BEFORE THE SHOWING CHECKLIST

Remind users to prepare:
- [ ] Pre-approval letter from lender
- [ ] Signed Self-Representation Waiver (2 copies)
- [ ] Photo ID
- [ ] List of questions about the property
- [ ] Phone to take photos/video (ask permission first)
- [ ] Notes on comparable sales in the area`
}
