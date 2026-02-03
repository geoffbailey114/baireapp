import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

// Generate a downloadable Self-Representation Waiver as HTML (can be opened in Word)
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const propertyAddress = searchParams.get('address') || '_________________________________'
  const buyerName = searchParams.get('name') || '_________________________'

  const waiverHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Self-Representation Waiver</title>
  <style>
    body {
      font-family: 'Times New Roman', Times, serif;
      font-size: 12pt;
      line-height: 1.6;
      max-width: 8.5in;
      margin: 0.75in auto;
      padding: 0 0.5in;
    }
    h1 {
      text-align: center;
      font-size: 16pt;
      margin-bottom: 24pt;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .field {
      border-bottom: 1px solid #000;
      min-width: 200px;
      display: inline-block;
      padding: 0 4px;
    }
    .field-long {
      border-bottom: 1px solid #000;
      min-width: 100%;
      display: block;
      padding: 4px;
      margin: 8px 0;
    }
    ol {
      padding-left: 24px;
    }
    li {
      margin-bottom: 12pt;
    }
    .section-title {
      font-weight: bold;
    }
    .signature-section {
      margin-top: 36pt;
    }
    .signature-line {
      display: flex;
      justify-content: space-between;
      margin-top: 24pt;
    }
    .signature-field {
      width: 45%;
    }
    .signature-field span {
      display: block;
      border-bottom: 1px solid #000;
      height: 24pt;
      margin-bottom: 4pt;
    }
    .signature-field label {
      font-size: 10pt;
    }
    .disclaimer {
      margin-top: 36pt;
      padding: 12pt;
      background: #f5f5f5;
      border: 1px solid #ddd;
      font-size: 10pt;
      font-style: italic;
    }
    @media print {
      body {
        margin: 0;
        padding: 0.5in;
      }
      .disclaimer {
        background: none;
        border: 1px solid #999;
      }
    }
  </style>
</head>
<body>
  <h1>Self-Representation Waiver</h1>
  
  <p>
    I, <span class="field">${buyerName}</span> ("Buyer"), am interested in viewing and potentially purchasing the property located at:
  </p>
  
  <p>
    <strong>Property Address:</strong><br>
    <span class="field-long">${propertyAddress}</span>
  </p>
  
  <p>I acknowledge and understand the following:</p>
  
  <ol>
    <li>
      <span class="section-title">Self-Representation:</span> 
      I am choosing to represent myself in this real estate transaction without a buyer's agent.
    </li>
    
    <li>
      <span class="section-title">Right to Representation:</span> 
      I understand I have the right to hire a licensed real estate agent to represent my interests, and I am voluntarily waiving this right.
    </li>
    
    <li>
      <span class="section-title">No Agency Relationship:</span> 
      I understand that the listing agent represents the SELLER's interests, not mine. The listing agent has no fiduciary duty to me.
    </li>
    
    <li>
      <span class="section-title">No Legal or Financial Advice:</span> 
      I understand that neither the listing agent nor the seller is providing me with legal, tax, or financial advice. I will seek independent professional advice as needed.
    </li>
    
    <li>
      <span class="section-title">Due Diligence:</span> 
      I accept responsibility for conducting my own due diligence, including but not limited to: property inspections, title searches, reviewing disclosures, and understanding contract terms.
    </li>
    
    <li>
      <span class="section-title">Commission Acknowledgment:</span> 
      I understand that any commission negotiations are between myself and the seller/listing agent, and are separate from the purchase price.
    </li>
  </ol>
  
  <div class="signature-section">
    <div class="signature-line">
      <div class="signature-field">
        <span></span>
        <label>Buyer Signature</label>
      </div>
      <div class="signature-field">
        <span></span>
        <label>Date</label>
      </div>
    </div>
    
    <div class="signature-line">
      <div class="signature-field">
        <span>${buyerName !== '_________________________' ? buyerName : ''}</span>
        <label>Buyer Printed Name</label>
      </div>
    </div>
  </div>
  
  <div class="disclaimer">
    <strong>Disclaimer:</strong> This document is provided as an educational template by BAIRE. 
    BAIRE is not a law firm and does not provide legal advice. This waiver is intended for 
    informational purposes only. For legal certainty, consult with a licensed attorney in your state.
  </div>
</body>
</html>
`

  // Return as downloadable HTML file (can be opened in Word)
  return new NextResponse(waiverHtml, {
    headers: {
      'Content-Type': 'application/msword',
      'Content-Disposition': 'attachment; filename="Self-Representation-Waiver.doc"',
    },
  })
}
