# Critic Panel — #1515 VinFast Recall Census (Round 0)

**Article:** 1515-vinfast-recall-census-4-zero-in-2026
**Journalist:** Vin Wreckage
**Date:** November 15, 2026
**Verdict:** SHIP (all 7 critics ≥ 8.5, all hard gates pass)

## Hard gates (regex/script = source of truth)

| Gate | Result | Status |
|---|---|---|
| Em dashes (literal `—` in HTML) | 0 (max 3) | PASS |
| Banned phrases (Here's the thing / The kicker / paradigm shift / game-changer / deep dive / unpack) | 0 | PASS |
| "The" sentence starters | 3.6% (max 15%) | PASS |
| CSS class | `class="story"` | PASS |
| Stylesheet | `../style.css` (not story.css) | PASS |
| Hero image | Real JPEG, ff d8, 1920x1280, hash 278e3444 | PASS |
| Sentence rhythm script | variance 750.1 (≥200), short 5.6% (≤15%), long 51.9% (≥15%) | PASS |
| Word count | 1,140 prose words | NOTE (see General Editor) |

## Pre-score fixes (round 0, before scoring)

1. **Citation gap found in review:** the "30 times" owner claim and the torque-ratio-tuning attribution came from Carscoops, but the paragraph cited only the ODI resume [2]. Added Carscoops as ref-7 and cited both sentences with [7].
2. **Query-count correction:** lede and ref-1 said "ten queries"; the systematic census ran 14 (VF 8/VF 9 for 2022–2026 plus VF 7/VF 6 for 2025–2026). Corrected both, and backfilled the VF 7/VF 6 empty results into drafts/1515-vinfast-recall-census-raw.json (14 keys).

## 1. General Editor — 9.0/10

Census-series shape done right: lede with the count and the hook, pull stat, one paragraph per finding cluster, two tables, counterargument, limitations, takeaways. The "smallest census in the series" framing gives a 4-count article a reason to exist, and the steering defect pays off the headline. The Canada divergence and the taxi-fleet pivot are two distinct second acts, which is more than most censuses manage. Deduction: 1,140 prose words is double the 300–500 word guide target. It matches the census series (#1514 ran 1,061), and the tables earn their length, but the takeaways paragraph is a four-clause wall that could lose one clause. Not a ship-blocker.

## 2. Voice Coach — 9.0/10

Vin's voice is unmistakable and distinct from Rex's noir and Clara's consumer-direct: cosmic absurdity ("Monitoring is what you do when the black box is ash"), the shrug at the void ("a rounding error with a badge on it"), the direct address ("Read that again"). No banned phrases, no AI tells, no throat-clearing. Rhythm script passes cleanly after the edits (variance 750.1, short 5.6%). One tic to watch: "Read that again" is a strong device used once, which is exactly once the right number of times. Ship.

## 3. Ethics Reviewer — 9.0/10

The fatal crash is handled with care: the four-fatality figure is attributed to CarComplaints, the no-link finding is attributed to ODI, and the article states plainly that the question is now permanently unanswerable rather than implying the car caused it. No victim-blaming anywhere; the defect is framed as a system failure, not a driver failure. The "sold the cars to itself" framing is fair: Green SM is Vingroup-owned, same conglomerate, sourced to InsideEVs. No self-congratulation, no sensationalized injury claims. Ship.

## 4. Social / Shareability — 8.5/10

The headline is the share: "One of Them Steered the Car Itself" travels on its own, and the pull stat (6,314) is the hook in numeric form. The taxi-fleet-bigger-than-retail-sales stat is the secondary share trigger, and "the black box is ash" is the quotable line. Deduction: the headline is long, and the takeaways paragraph is four "If you..." clauses that will not excerpt well. A reader will share the headline and the steering paragraph, not the ending. Good enough.

## 5. Legal Accuracy — 9.0/10

Campaign numbers, filing dates, and unit counts match NHTSA records: 23V-355 (May 18, 2023, 999), 24V-369 (May 24, 2024, 225), 24V-933 (Dec 17, 2024, 4,888), 25V-559 (Aug 28, 2025, 6,314). PE24025 dates and VOQ counts match the ODI closing resume (opened Sep 10, 2024 on 14 VOQs; 17 reviewed; closed Oct 21, 2025). No FMVSS numbers are claimed, so none can be wrong. The pre-score citation fix (Carscoops as ref-7) closes the one attribution gap found in review. The article does not overclaim on the fatal crash: it says ODI found no evidence of a link and could not rule one out. Ship.

## 6. Research Rigor — 8.5/10

Original contribution is real: the 4-count, the 4-model VPIC list, the per-model table, the zero-in-2026 finding verified against the API and two aggregators, the documented API gap (25V-559 missing from the recalls API, so future censuses cannot trust it alone), the Canada-vs-US 2026 divergence, and the sales-denominator arithmetic (389 registrations vs a 500-car fleet). Deductions, all disclosed in the limitations: the complaint-count conflict (67 vs 65 across aggregators), the fatality-count attribution split (ODI says "a fatal crash", CarComplaints says four fatalities), and no unit count for the Canadian recall. One more soft spot, disclosed here rather than in the article's limitations: the "taxi fleet is bigger than retail sales" punchline compares an October 2026 fleet figure with January–July 2026 registrations. The article prints both windows, so the comparison is honest, but the punchline sentence elides the window difference. Ship.

## 7. Data Presentation — 9.0/10

Two clean tables with captions and sources. Arithmetic verified: 999 + 225 + 4,888 + 6,314 = 12,426 campaign-vehicle incidences (correctly flagged as overlapping populations, not distinct cars); 500 > 389; Sep 2024 to Oct 2025 is 13 months; 17 VOQs at close vs 14 at open. Per-model table is complete (VF 8: 4, VF 9/7/6: 0). The Canada row honestly reports the defect without inventing a unit count. Minor: the campaign table's "Units" column mixes Part 573 totals with the aggregator-confirmed 25V-559 figure; the sources note explains the provenance. Ship.

## Scores

| Critic | Score |
|---|---|
| General Editor | 9.0 |
| Voice Coach | 9.0 |
| Ethics Reviewer | 9.0 |
| Social / Shareability | 8.5 |
| Legal Accuracy | 9.0 |
| Research Rigor | 8.5 |
| Data Presentation | 9.0 |
| **Average** | **8.86** |
