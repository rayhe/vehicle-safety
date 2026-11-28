# Critic Panel — #1616: The Safest Car in America Didn't Exist for Six of the Ten Years It Was Measured
**Journalist:** Axle McScatter | **Kicker:** By The Numbers | **Round:** 1 | **Date:** 2026-11-28

## Hard gates (regex = source of truth)
- Em dashes: **0** (max 3) — PASS
- Banned phrases: **0** — PASS
- "The" sentence starters: **0.0%** (max 15%) — PASS
- CSS class: `class="story"`, links `../style.css`, no story-detail/story-content/story-page, no story.css — PASS
- Sentence rhythm: variance 321.9 (≥200), short 12.3% (≤15%), long 40.4% (≥15%) — PASS
- Word count: 997 (article body incl. references)
- Hero: real JPEG (FF D8), 1920x1280, md5 6a57b6fe, ?v=6a57b6fe in img + og:image — PASS
- References: 5; ref-3 still links to the IIHS staging-domain PDF (works, IIHS-hosted; noted, not blocking).

## Changes from round 0 (all three required fixes applied and verified by grep)
1. "the lowest of any vehicle we track" → "the lowest of any high-volume vehicle we track" (lede).
2. "Four lowest published rates in the high-volume set" → "Four lowest published rates among models with more than 500,000 on the road"; "no model in the dataset sits below 0.07" → "no high-volume model sits below 0.07." The fleet threshold is now stated in the prose.
3. "nearly four times the CX-5" → "three and a half times the CX-5" (0.447/0.123 = 3.6x). Research note corrected to 3.6x as well.
4. Verified: `grep -c 'lowest of any vehicle|no model in the dataset|nearly four times'` = 0. The low-count sub-0.07 models (Ram 3500 0.00, Matrix 0.02, Prizm 0.02, Macan 0.03, Caravan 0.04) are now correctly outside the scoped claims.

## Re-scores
### 1. General Editor — 9.0/10
Superlatives fixed; the lede now makes a claim the data supports. Arc unchanged and clean.

### 2. Voice Coach — 9.0/10
Unchanged from round 0. Distinctly Axle, rhythm passes, no AI tells.

### 3. Ethics Reviewer — 9.0/10
Unchanged from round 0. Victim-centered, counterargument at full strength, sensitivity check labeled.

### 4. Social / Shareability — 8.5/10
Unchanged from round 0. Headline stat, screenshot-ready pull stat, shareable table; headline is long and there is no single one-line kicker quote. Not blocking.

### 5. Legal Accuracy — 9.0/10
Unchanged from round 0. Citations real and checkable; IIHS methodology description accurate. Ref-3 staging-domain link noted, not blocking.

### 6. Research Rigor — 8.9/10
Round-0 defects fixed and verified: both superlatives are now scoped to high-volume models with the 500,000 threshold stated in the prose, and the K5 ratio is exact at 3.6x. Original contribution stands (calendar/exposure correction, quantified per model, IIHS registered-vehicle-year contrast, K5 flip, Crosstrek earned-number payoff), cross-checks reconcile exactly, limitations stated. Remaining nit: "about thirty times lower" uses the rounded 0.03 (unrounded is 35x); "about" covers it.

### 7. Data Presentation — 8.9/10
Scope line now in the prose next to the table; every number paired with its inputs and method; worked Model Y calculation checkable. Remaining nit: the table itself still carries no fleet column, so the scope lives in the prose rather than the artifact. Minor.

## Verdict
| Critic | Score |
|---|---|
| General Editor | 9.0 |
| Voice Coach | 9.0 |
| Ethics Reviewer | 9.0 |
| Social / Shareability | 8.5 |
| Legal Accuracy | 9.0 |
| Research Rigor | 8.9 |
| Data Presentation | 8.9 |
| **Average** | **8.90** |

**All 7 critics ≥ 8.5 and all hard gates pass → SHIP.** Round 0 → round 1 revision resolved the only blocking issue (Rigor 8.0 → 8.9). Known nits (long headline, ref-3 staging link, no fleet column in the table) are minor and do not block shipment.
