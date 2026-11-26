# Critic Panel — Round 0 — #1591 November Part-Two Recall Census

**Draft:** `drafts/1591-november-part-two-recall-census-898820-filed-4406-new-cars.html`
**Journalist:** Axle McScatter
**Date:** November 26, 2026

## Hard gates (regex/script = source of truth)
- Em dashes: 0 (max 3) — PASS (2 literal dashes in refs fixed pre-panel)
- Banned phrases: 0 ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", "Let's be clear", "Make no mistake") — PASS
- "The" sentence starters: 2.0% (1/50 body sentences, max 15%) — PASS
- CSS class: `class="story"`, links `../style.css`, no story-detail/story-content/story-page/story.css — PASS
- Sentence rhythm: PASS — variance 598.2 (target >= 200), short 14.6% (target <= 15%), long 68.8% (target >= 15%), 50 sentences. Note: short 14.6% sits right at the limit; the piece leans heavily on long builds and the punches are sparse.
- Hero: real JPEG (FFD8), 2352x1008, md5 a64f136e — PASS
- Word count (story body): 1334

## 1. General Editor — 9.0
Lede opens on the numbers themselves, which is Axle's whole job, pull stat lands early, then the census table in prose, the Durango anecdote as the human hinge, the correction section, the full-month roll-up, counterargument, action close. Clean arc. Deductions: 1,334 words runs ~40% longer than the recent ~930-word norm, and the correction section is dense for a reader who never saw #1528. Neither is a gate failure.

## 2. Voice Coach — 8.5
Axle's voice is distinct and intact: "I ran the numbers. Then I ran them again. They did not get better." Tables rendered as prose, percentages as the argument, the forklift line as the one joke the piece allows itself. No swappable byline. Rhythm passes on all three metrics. Deductions: short-sentence share is 14.6%, a hair under the 15% ceiling, and long sentences are 68.8%, so the piece reads as one long build after another with few punches; the Altec/Gillig/Rivian/Genesis paragraph runs four 60-plus-word sentences in a row. The "second verse" callback is more Clara than Axle. Still above bar.

## 3. Ethics Reviewer — 9.0
No victims, no dramatization, no manufacturer smeared beyond the record. The correction is honest self-correction: the piece names the earlier census, states exactly how far off it was (35.5%), and explains why (publication lag) instead of quietly restating the numbers. The Durango anecdote is fair: 15 trucks, remedy stated, no incident claimed. The Volvo/Mack shared-supplier pairing is flagged as inference, not fact. No self-congratulation. The counterargument is stated at full strength rather than strawmanned.

## 4. Social / Shareability — 8.5
Headline carries the census hook (898,820 filed, 4,406 new), the pull stat 0.49% is striking, and "the fix is a whole new engine" is the share line for the Durango. Deductions: the census frame is inherently dense for casual sharing, and the correction section is inside-baseball for anyone who never read #1528; the pull stat does the heavy lifting for skimmers.

## 5. Legal Accuracy — 9.0
Every campaign number, date, population, and remedy was verified live against the NHTSA recalls API this run. All six reference URLs verified: ref-5 is the NHTSA Part 573 PDF for 26V765 (HTTP 200, 531KB, fetched Nov 26); refs 3/4 are the KnownCarIssues mirror pages for 26V760/26V766 (fetched Nov 26); ref-2 is the AnyRecalls latest-recalls page (fetched Nov 26); refs 1/6 are the NHTSA recalls lookup from the site guide. No invented citations. One nit, disclosed in the research file: 26V759 (Mack) could not be verified through the NHTSA API because every mack query returned HTTP 400 this run; it is verified through the AnyRecalls and KnownCarIssues mirrors instead. Pre-panel fix: "old enough to vote in some states" replaced, because no US state lets 13-year-olds vote.

## 6. Research Rigor — 9.0
Original contributions are real and multiple: the Nov 13-20 census (11 campaigns, 898,820 vehicles, 6 touching 2026, 4,406, 0.49%), the corrected Nov 1-12 census (27 campaigns, 1,327,053, 14.9%), the full-month-to-date census (38 campaigns, 2,225,873, 9.1%), the Takata pair (1,124,621, 50.5% of the month), and the single-day concentration (Nov 19 filed 99.7% of the half-month). Limitations are explicit and at full strength, including the point that publication lag cuts both ways and this census undercounts by an unknown amount. Methodology shown with inputs (78 makes, ~6,500 queries, sweep 26V746-26V766). Strongest counterargument stated at full strength. Deduction: the Volvo/Mack "one bad knuckle" line says the pairing "is a pattern whether or not anyone confirms the vendor," which slightly overreaches; two filings with identical language could reflect one shared supplier or two suppliers with the same defect mode. The disclaimer hedges it properly.

## 7. Data Presentation — 9.0
Numbers are consistent everywhere: 898,820 total; 4,406 / 0.49%; 810,592 / 90.2%; 82,843 / 9.2%; 5,385 / 0.6%; 896,048 / 99.7%; 2,772 across the other three filing days; 1,327,053 corrected first half; 197,604 / 14.9%; 35.5% undercount; 2,225,873 / 202,010 / 9.1% full month; 1,124,621 / 50.5% Takata pair; 20 of 38 campaigns. Pull stat and pull label agree with the body. One soft spot, flagged not fatal: "the other three filing days combined managed 2,772" never names the three days in that sentence (Nov 13, 18, 20 appear earlier in the piece), so a skimmer cannot verify it without reading back. Also "13-year-old Hondas" in the lede rounds 2012-2013 model years to 13; the precise years appear in the next paragraph.

## Verdict
- Scores: GE 9.0, VC 8.5, ETH 9.0, SOC 8.5, LEG 9.0, RIG 9.0, DATA 9.0
- Average: 8.86 — all 7 critics >= 8.5, all hard gates pass
- **Round-0 PASS — SHIP**
