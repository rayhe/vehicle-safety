# Critic Panel — #1616: The Safest Car in America Didn't Exist for Six of the Ten Years It Was Measured
**Journalist:** Axle McScatter | **Kicker:** By The Numbers | **Round:** 0 | **Date:** 2026-11-28

## Hard gates (regex = source of truth)
- Em dashes: **0** (max 3) — PASS
- Banned phrases: **0** — PASS
- "The" sentence starters: **0.0%** (max 15%) — PASS
- CSS class: `class="story"`, links `../style.css`, no story-detail/story-content/story-page, no story.css — PASS
- Sentence rhythm: variance 320.4 (≥200), short 12.3% (≤15%), long 40.4% (≥15%) — PASS (fixed from 16.9% short by merging two short-sentence pairs)
- Word count: 990 (article body incl. references)
- Hero: real JPEG (FF D8), 1920x1280, md5 6a57b6fe, ?v=6a57b6fe in img + og:image — PASS
- References: 5; all URLs verified against search results (FARS, IIHS driver death rates page, IIHS methodology PDF, Digital Trends Model Y delivery piece, story #52).

## Round-0 fact audit (run before scoring)
- Core correction math verified from fars_output.js: Model Y 57 deaths / (21,875M mi x 4 yrs) x 100 = 0.065 -> 0.07; Telluride 31 / (7,656 x 5) x 100 = 0.081 -> 0.08; Model 3 92 / (18,112 x 7) x 100 = 0.073 -> 0.07; Palisade 38 / (6,562 x 5) x 100 = 0.116 -> 0.12; K5 54 / (3,019 x 4) x 100 = 0.447 -> 0.45; Seltos 0.038 -> 0.10; Venue 0.128 -> 0.26; Atlas 0.059 -> 0.08; EcoSport 0.143 -> 0.24. All table values correct.
- Fleet-weighted average 0.91 verified: 191,193 deaths / (2,102,426M mi x 10) x 100 = 0.91. "About thirty times lower" (0.91/0.03 = 30.3) correct.
- Launch years check out: Model Y deliveries Mar 13, 2020 (sourced); Telluride Feb 2019; Model 3 Jul 2017; Palisade summer 2019; Seltos 2020; K5 2020; Venue Nov 2019; Atlas May 2017; EcoSport Jan 2018; Crosstrek/CX-5 full window.
- **DEFECT 1 (false superlative):** Lede says the Model Y's 0.03 is "the lowest of any vehicle we track." False. The dataset itself lists Ram 3500 at 0.00 (0 deaths), Toyota Matrix at 0.02 (6 deaths), Chevrolet Prizm at 0.02 (2 deaths), Porsche Macan at 0.03 (7 deaths), Dodge Caravan at 0.04 (21 deaths). The claim is true only among high-volume models (fleet > 500k), which the article never states.
- **DEFECT 2 (false superlative):** "After correction, no model in the dataset sits below 0.07." False for the same reason: the Matrix (0.02), Prizm (0.02), Macan (0.03), Caravan (0.04), Intrepid (0.04), Lexus NX (0.05), Bronco (0.05) all sit below 0.07 with full or near-full exposure and no correction applied. True only for the high-volume subset.
- **DEFECT 3 (imprecision):** "nearly four times the CX-5" for the K5 is 0.447/0.123 = 3.6x. Tighten to "three and a half times."
- Root cause of defects 1-2: the table silently restricts to fleet > 500k but the prose generalizes to "any vehicle" / "the dataset." Fix is to scope the claims, not to redo the math.

## Scores
### 1. General Editor — 8.8/10
Arc is clean: hook, method, table, IIHS contrast, earned-number payoff, counterargument, action. The table does real work. Deduction is entirely the two false superlatives, which are the kind of error that costs a publication credibility in the first paragraph and the fourth.

### 2. Voice Coach — 9.0/10
Distinctly Axle: tables, "I ran the numbers again," phone-checkable arithmetic, "Paper is doing a lot of work in that sentence." Rhythm passes all three metrics. No AI tells, no banned phrases, zero "The" starters.

### 3. Ethics Reviewer — 9.0/10
Victim counts handled plainly, no individual deaths sensationalized, counterargument stated at full strength, limitations section honest about fleet bins and ramp bias. The linear-ramp figure is correctly labeled a sensitivity check, not a measurement.

### 4. Social / Shareability — 8.5/10
Headline is long but quotable; "2.5x" pull stat is screenshot-ready; the table is the shareable artifact. No single one-line kicker quote. Not blocking.

### 5. Legal Accuracy — 9.0/10
Citations real and checkable; IIHS registered-vehicle-year description matches the methodology document. Nit: ref-3 links to an iihs-staging.iihs.org PDF URL rather than the canonical iihs.org page; the document is IIHS-hosted and the link works, noted not blocking.

### 6. Research Rigor — 8.0/10
Core contribution is original, verified, and novel (calendar/exposure correction; #52 covered fleet bins, not the calendar). But two scope superlatives in the lede and body are falsified by the site's own dataset (Ram 3500 0.00, Matrix 0.02, Prizm 0.02, Macan 0.03, Caravan 0.04), and "nearly four times" overstates a 3.6x ratio. Same failure class as #1615 round 0. Fixable in one revision by scoping the claims to high-volume models.

### 7. Data Presentation — 8.7/10
Every number paired with its inputs and method; the worked Model Y calculation is checkable on a phone. Deduction: the table has no fleet column, so readers cannot see the high-volume restriction that the prose then overgeneralizes; adding the scope line fixes both the table and the prose.

## Verdict
| Critic | Score |
|---|---|
| General Editor | 8.8 |
| Voice Coach | 9.0 |
| Ethics Reviewer | 9.0 |
| Social / Shareability | 8.5 |
| Legal Accuracy | 9.0 |
| Research Rigor | 8.0 |
| Data Presentation | 8.7 |
| **Average** | **8.71** |

**Rigor 8.0 < 8.5 → REVISE, round 1.** Required fixes: (1) scope the lede superlative to high-volume models ("the lowest of any high-volume vehicle we track"); (2) scope "no model sits below 0.07" to the high-volume set and state the fleet threshold in the table intro; (3) "nearly four times" → "three and a half times." Then re-score.
