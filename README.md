# BAIRE Audit Fix Bundle — Feb 28, 2026

Drop these files into your local repo, replacing the existing ones.

## 6 Files Changed

### Original 4 Fixes (from audit prompt):
| # | File | Change |
|---|---|---|
| 1 | `components/value-prop.tsx` | `$599` → `$995` |
| 2 | `components/cta-section.tsx` | `$599` → `$995` |
| 3 | `emails/trial-upgrade.html` | `$599` → `$995` |
| 4 | `app/layout.tsx` | GA4 now conditional on `NEXT_PUBLIC_GA_MEASUREMENT_ID` env var |

### 2 Bonus Fixes (discovered during audit):
| # | File | Change |
|---|---|---|
| 5 | `components/pricing-cta.tsx` | Old tiered pricing (`$99 after trial · $500 when you make an offer`) → `7-day free trial · $995 for full access through closing` |
| 6 | `components/trial-section.tsx` | `48-Hour Trial` → `7-Day Trial`, updated subtitle to match current pricing |

## After Pasting

1. **Add Vercel env var:** `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-6SZ4KJSGC6` in Vercel → Settings → Environment Variables (all environments). Without this, GA4 won't load in production.

2. **Verify no remaining $599:**
   ```bash
   grep -rn "599" --include="*.tsx" --include="*.ts" --include="*.html" --include="*.md" app/ components/ lib/ emails/
   ```
   Should return zero results.

3. **Verify no "48-hour" or "48 hour" references:**
   ```bash
   grep -rni "48.hour" --include="*.tsx" --include="*.ts" --include="*.html" app/ components/
   ```
   Should return zero results.

4. **Build:**
   ```bash
   npm run build
   ```
   Should complete with zero errors.

5. **Commit & push:**
   ```bash
   git add -A
   git commit -m "fix: pricing consistency ($599→$995), GA4 env-gating, trial duration (48h→7d)"
   git push origin main
   ```
   Vercel auto-deploys from main.
