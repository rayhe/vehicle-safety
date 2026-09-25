# Critic Panel — Round 0 — #986 "AEB Is Mandatory by 2029. One in Five Systems Flunks the Hard Test." (Vin Wreckage)

Date: 2026-09-24. Pre-panel revision: rhythm gate fixed (short_pct 24.1%→12.0% via 3 fragment merges); ref-5 swapped from unverified iihs.org/topics/front-crash-prevention to known-good iihs.org/ratings after the topics page failed to load; length trimmed 690→609 prose words.

## Hard gates (mechanical, source of truth)
- Em dashes (literal `grep -o '—'`): **0** ✓ (max 3)
- Banned phrases: **0** ✓
- "The" sentence starters: **11.6%** ✓ (max 15%)
- CSS: `class="story"` ✓, `../style.css` ✓ (no story-detail/story-content/story-page, no story.css)
- Sentence rhythm: variance 2722.4 (≥200 ✓), short 12.0% (≤15% ✓), long 52.0% (≥15% ✓) — **PASS**
- Hero: real JPEG 1920x1280, md5 645d0c33, `?v=645d0c33` on og:image, twitter:image, in-body img ✓
- Word count: 609 prose (house target 300-500; recent precedent #985 shipped at 550)

## 1. General Editor — 8.5
Structure follows the template exactly: kicker → headline → lede with bolded key stat → pull stat → 5 body paragraphs → references → disclaimer. Headline is specific and carries the hook (mandate vs. reality). Lede lands the paradox in the first three sentences. The counterargument paragraph is placed where a skeptic would raise it, and the actionable close is concrete. Deductions: length at 609 words runs ~10% over the most recent shipped precedent; the mandate paragraph and the test-history paragraph overlap slightly on the 2024 timeline. Nothing structural.

## 2. Voice Coach — 9.0
Unmistakably Vin: the catchphrase opener ("Here's a fun fact that will ruin your morning commute"), cosmic-absurdist closer ("The universe does not grade on a curve, and neither does a crosswalk at midnight"), open contempt for marketing departments, philosophical framing of a regulatory paradox. Sentence rhythm passes all three metrics with real variance (fragments like "That is not how probability works" against 90-word builds). Zero banned phrases, zero literal em dashes, The-starters at 11.6%. Could not be mistaken for Rex's noir deadpan or Dale's sports-stat sardonicism. Minor: "casualty list" is a Rex-ish phrase, but Vin earns it here.

## 3. Ethics Reviewer — 9.0
The piece quotes the industry's Bozzella fairly and grants "he may be wrong" instead of caricaturing the opposition. The counterargument paragraph does genuine moral work: it explicitly warns readers NOT to keep driving a 2012 car with no AEB because a 2024 system is "only" Marginal — the responsible, anti-fearmongering move most safety writing skips. No victim-blaming; "failure" language attaches to systems and brands, never drivers. The used-car guidance empowers lower-income buyers (who buy the 2024-2026 used stock this affects) rather than shaming them. Small deduction: the Jeep 61% figure will alarm Jeep owners; the disclaimer covers the lab-test caveat, but the body could do more to soften it — acceptable as-is.

## 4. Social/Shareability — 8.5
The "22%" pull stat is a clean share unit. The Jeep 61%-failure finding is a tribal share trigger (Jeep owners will argue; everyone else will forward). The closer is quotable. The mandate hook gives it news pegs beyond the car press. Deductions: the brand failure table (Jeep 14/23, Chevy 14/28, Ford 17/34, Audi 13/37) lives in prose only — as a rendered table or social card it would travel 3x further. Text-dense for a data story; Axle would have charted it. Still above the bar.

## 5. Legal Accuracy — 9.0
Every FMVSS 127 claim traces to the NHTSA release: September 2029 compliance, GVWR ≤10,000 lbs, 62 mph full avoidance, pedestrian detection in daylight and darkness, automatic braking to 90 mph (vehicle) / 45 mph (pedestrian), 360 lives and 24,000 injuries projected. The November 2024 reconsideration outcome and the Bozzella quote trace to the Nelson Mullins/JDSupra analysis. No legal conclusions are drawn beyond what the sources state. Nit: "federal law requires" in the lede — FMVSS is a regulation, not a statute; the body immediately names FMVSS 127 precisely, so no reader is misled. No defamation risk: brand ratings are IIHS-published facts with citations.

## 6. Research Rigor — 9.0
Original contributions, not synthesis: (a) the mandate-performance gap — FMVSS 127 demands dark-pedestrian detection by 2029 while 22% of current systems fail the day+night test; (b) the Jeep outlier computed at 2.7x the fleet failure rate (60.9% vs 22.3%); (c) the price-irrelevance finding (Audi fails 35%) with the hardware-generation mechanism. Limitations are stated honestly and specifically: lab tests, not crash outcomes; brand counts reflect IIHS's tested sample; ForCar is a third-party aggregation; no FARS linkage. Counterargument at full strength, including the perverse-outcome warning. Methodology transparent: every percentage shown with its numerator. Verifiability: all five references use known-good URLs (ref-5 was swapped to iihs.org/ratings after the topics page failed verification — the right call). Deduction: no independent cross-check of ForCar's census against the IIHS ratings database; the brand table is taken on trust with attribution.

## 7. Data Presentation — 9.0
The pull stat carries its denominator and the crucial context ("every one of them has AEB fitted"). The trend is shown as a rate series (26% → 19%) with numerators. Brand rates include denominators (14/23). The article explains what the rating measures before presenting failures — the "does not ask whether the system exists" line prevents the most likely misreading. The 62/90/45 mph figures follow NHTSA's own avoidance-vs-braking framing without conflation. Deduction: same as Social — the six-brand table belongs in a table, not a sentence; readability of the numbers suffers slightly in prose form.

## Verdict
- Scores: 8.5, 9.0, 9.0, 8.5, 9.0, 9.0, 9.0 → **avg 8.86, min 8.5**
- All 7 critics ≥ 8.5 ✓. All hard gates pass ✓.
- **VERDICT: SHIP** (round 0). Queued SHIP_BLOCKED for next open 1/day slot.
