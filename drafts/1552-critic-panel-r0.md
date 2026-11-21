# Critic Panel — #1552: Toyota Killed the Avalon. The Data Says It Was the Safer Toyota.

**Slug:** `1552-avalon-safer-toyota-killed-anyway`
**Journalist:** Clara Rollover
**Round:** 0
**Date:** November 21, 2026

## Hard Gates (regex = source of truth)

| Gate | Result | Verdict |
|---|---|---|
| Em dashes (literal `—` in whole file) | 0 | PASS (max 3) |
| Em-dash entities (`&mdash;`) | 2 total: `<title>` separator and site footer. Zero in prose sentences. | PASS |
| Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", "Let's be clear", "Make no mistake", "The numbers don't lie") | 0 | PASS |
| "The" sentence starters | 2 of 41 body sentences, 4.9% (max 15%) | PASS |
| CSS class | `class="story"`, links `../style.css`, no `story.css` | PASS |
| Sentence rhythm (`sentence-rhythm-check.py --json`) | variance 995.0 (≥200), short 6.5% (≤15%), long 58.7% (≥15%) | PASS (after pre-critique fragment merge; was 23.6% short before fix) |
| Hero | Real JPEG 1920x1280, 443,018 bytes, hash 7d8320ac, `?v=7d8320ac` on img + og:image + twitter:image | PASS |
| Word count | 971 body words incl. table (prose ~890) | NOTE: long vs guide 300–500, in line with #1551 precedent (760); table justifies length |

## Scores

### 1. General — 8.7/10
The lede is the piece: Toyota killed the car, the car was the safer Toyota, and the numbers are in the second sentence. Structure holds: lede, pull stat, cross-tab table, weight/lab, model-year trend, fairness check, action. The table is the right call for a cross-tab story and earns its space. Minor: 971 words is long for the format, and the final paragraph runs four pieces of advice in one breath (buy, headlights, older owners, VIN check). It lands anyway because each clause is short. The headline is the share.

### 2. Voice — 8.6/10
Distinctly Clara: "Before you sign for a used Camry, you might want to see this" is her opener, and the buying guidance is the spine, not an afterthought. Rhythm gate green with real variance after the fragment merge. No banned phrases, no AI tells. Deductions: two "which is" constructions in one paragraph ("which is exactly the point", "which is more than the Camry can say") and one signpost ("Put plainly"). Passes, at the bar, with a voice that could not be swapped onto Vin's byline without a rewrite.

### 3. Ethics — 8.8/10
No victims to exploit; the 469 are presented as a count, not as stories mined for pathos. "Drunkest Toyota drivers" is data, not slur: the article says "drivers in fatal crashes tested impaired," which is what the toxicology file actually measures, and it immediately uses the finding against the easy explanation rather than for it. The fairness check is explicit and full-strength, including the lethality number that cuts against the headline. VIN-check and headlight-trim guidance is proportionate and genuinely useful. No self-congratulation.

### 4. Social Shareability — 8.6/10
Headline is the share: "Toyota Killed the Avalon. The Data Says It Was the Safer Toyota." Pull stat 1.33 is less punchy than a body count but the framing carries it. Quotable lines travel: "Sober drivers, faster death rate; drunker drivers, slower death rate" and "Toyota killed the safer Toyota. The used market is the only place left to buy it." The TSP+-vs-death-rate inversion is a natural argument-starter. Slightly long for skimmers, but the kicker/pull-stat/table structure carries it.

### 5. Legal Accuracy — 8.4/10
FARS figures computed from the site's own file and cross-checked: Avalon/Camry ratio 0.655 (34% slower), lethality 0.684 vs 0.593, impairment rankings verified against toxicology data (a second-highest claim was caught and corrected to third-highest pre-draft). IIHS award verified on IIHS's own news page; TSP list; Toyota discontinued page; TrueDelta weights; TopSpeed/J.D. Power prices; all URLs verbatim from search results. **Defect: the "five-star NHTSA overall rating" claim in the lab paragraph has no linked reference.** Refs [2][5][6][8] cited on that sentence cover the IIHS award, the platform, the weights, and the size/weight mechanism, but none of them states the NHTSA 5-star overall rating (4 frontal / 5 side / 4 rollover). MotorTrend's 2022 Avalon page states it and is in the search results, but it is not in the references. Under the site's own verifiability rule every factual claim must trace to a cited source. One citation short of the bar.

### 6. Research Rigor — 8.7/10
Original contributions are real: (1) the impairment inversion, Avalon drivers more impaired yet 34% slower per mile, the Camry piece's logic run in reverse; (2) the weight quantification, 3,570 vs 3,450 lb on a stretched platform; (3) the exposure-year halving, newer Avalons ~1.2–1.6 vs 2000s ~2.1–3.9 per exposure-year; (4) the Lexus ES twin clustering at 1.14. Limitations are explicit: small fleet, demographics unmeasured, lethality reading flagged as interpretation, model-year sums 454 of 469 disclosed. Counterargument is full-strength and concedes the demographic confound. Methodology shown for the exposure-year math. The single verifiability gap is scored under Legal, not double-counted here.

### 7. Data Presentation — 8.7/10
The cross-tab table is clean, sorted by rate, Avalon bolded, impairment column alongside so the inversion is visible at a glance. Pull stat 1.33 carries its comparators in the label. Rates are defined as per 100M miles in the lede. Exposure-year math shows inputs and the uniform-sales assumption. Minor: the table header says "Rate" without the unit; the lede defines it, so this is cosmetic. The lethality figures (0.684 vs 0.593) are defined on first use.

## Verdict: REVISE (round 0)
Six of seven critics at 8.5+. Legal Accuracy at 8.4 on a single fixable defect: add a MotorTrend reference for the NHTSA 5-star overall rating (4 frontal / 5 side / 4 rollover) and cite it in the lab paragraph. No prose rewrite needed. Increment round, re-score.
