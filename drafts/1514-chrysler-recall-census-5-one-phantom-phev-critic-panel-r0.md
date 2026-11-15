# Critic Panel — #1514 Chrysler Recall Census (Round 0)

**Article:** 1514-chrysler-recall-census-5-one-phantom-phev
**Journalist:** Clara Rollover
**Date:** November 15, 2026
**Verdict:** SHIP (all 7 critics ≥ 8.5, all hard gates pass)

## Hard gates (regex/script = source of truth)

| Gate | Result | Status |
|---|---|---|
| Em dashes (literal `—` in HTML) | 0 (max 3) | PASS |
| Banned phrases (Here's the thing / The kicker / paradigm shift / game-changer / deep dive / unpack) | 0 | PASS |
| "The" sentence starters | 0.0% (max 15%) | PASS |
| CSS class | `class="story"` | PASS |
| Stylesheet | `../style.css` (not story.css) | PASS |
| Hero image | Real JPEG, ff d8, 1920x1280, hash ac46faba | PASS |
| Sentence rhythm script | variance 780.0 (≥200), short 9.4% (≤15%), long 49.1% (≥15%) | PASS |
| Word count | 1,044 | NOTE (see General Editor) |

## 1. General Editor — 9.0/10

Structure is exactly the census-series shape: lede with the count, pull stat, one paragraph per campaign cluster, two tables, counterargument, limitations, takeaways. The phantom-PHEV hook lands in the lede and pays off in the 26V561 paragraph. The Grand Caravan zero is a good kicker detail. Deduction: 1,044 words is double the 300–500 word guide target. It is in line with the census series (#1513 ran 1,111), but a census is not a feature, and the 26V189 paragraph could lose a sentence. Not a ship-blocker; the tables earn their length.

## 2. Voice Coach — 8.5/10

Clara's voice is present and distinct from Rex's noir deadpan: direct, consumer-facing, imperative-heavy ("check the VIN again", "call BraunAbility"). No banned phrases, no AI tells, no "The kicker" throat-clearing. Rhythm script passes after a round-0 fix (five short fragments merged; short sentences 20.7% → 9.4%). Remaining nits: "Supplier is CTS Corporation of Elkhart, Indiana" and "Autoliv made the bags" are staccato by design, which is fine, but two such fragments in adjacent paragraphs is one too many. The "Then the airbags / Then the small one" parallel openers work. Ship.

## 3. Ethics Reviewer — 9.0/10

No victim-blaming, no sensationalized injury claims (zero accidents/injuries claimed only where the filings say so; the article does not claim any for 26V189). The wheelchair-van recalls are handled with care: the defect is framed as a failure of the securement system, not of the passengers, and the remedy is presented as a free inspection with a phone number. The 26V296 count conflict is disclosed in the limitations rather than smoothed over. The "phantom car" framing is accurate: it attributes the error to NHTSA's summary text, not to the filing, and does not accuse Chrysler of inventing a model. No self-congratulation. Ship.

## 4. Social / Shareability — 8.5/10

The headline is the share: "One Names a Car That Doesn't Exist" is the kind of line that travels, and the pull stat (8) is the hook in numeric form. The Grand Caravan zero and the "grew 64 percent after filing" airbag expansion are secondary share triggers. Deduction: the headline is long, and the takeaways paragraph is a wall of five "If you own" clauses that will not excerpt well. A reader will share the headline and the phantom-PHEV paragraph, not the ending. Good enough.

## 5. Legal Accuracy — 9.0/10

FMVSS citations check out: 226 (ejection mitigation, curtain airbags), 111 (rearview camera), 126 (ESC). Campaign numbers, filing dates, and manufacturer numbers (06D/10D/11D, 69D, 78D) match the Part 573 filings and NHTSA records. The phantom-PHEV claim is correctly scoped: NHTSA's API summary text says "Voyager Plug-In Hybrid Electric"; the Part 573 population is 8 Pacifica PHEVs, confirmed by Autoblog, MoparInsiders, and daxstreet. The article does not overclaim: it says the summary is wrong, not the filing. References link to the actual Part 573 PDFs (RCLRPT-26V189-9040, RCRIT-26V531-1267, RCONL-26V358-0017) and to the Autoblog and MoparInsiders pieces. Ship.

## 6. Research Rigor — 8.5/10

Original contribution is real: the 5-count, the per-model table, the 5-counted-vs-2-excluded arithmetic, the 64% expansion, the 15.6% Pacifica share of 26V531, and the phantom-PHEV finding are all computed from the API and filings, not quoted. The extended excluded sweep (back to 2019) caught 26V362, which the standard sweep missed — a method improvement worth keeping. Deductions, both disclosed in the limitations: the 26V296 unit count is unresolved (476 vs 1,571 across two outlets; Part 573 not directly verified) and 26V358 has no unit count at all. The article is honest about both, and neither changes the census count. The counterargument is stated at full strength and partly conceded. Ship.

## 7. Data Presentation — 9.0/10

Two clean tables with captions and sources. Percentages verified: 131,681 / 844,027 = 15.6%; 293,264 / 178,246 = 1.645 (64% expansion); 8 / 2,017 = 0.4%; 247,580 + 45,684 = 293,264. Per-model table is complete (Pacifica 5, Voyager 4, Grand Caravan 0). The "Not stated" cell for 26V358 is honest rather than padded. Minor: the campaign table's "Units (all makes)" column mixes Part 573 totals with a press-derived split (131,681) only in prose, which is the right place for it. Ship.

## Scores

| Critic | Score |
|---|---|
| General Editor | 9.0 |
| Voice Coach | 8.5 |
| Ethics Reviewer | 9.0 |
| Social / Shareability | 8.5 |
| Legal Accuracy | 9.0 |
| Research Rigor | 8.5 |
| Data Presentation | 9.0 |
| **Average** | **8.79** |

## Verdict

**SHIP.** All 7 critics at 8.5+, all hard gates pass, round 0. No revision round needed. Proceed to SHIP phase: ship_date 2028-09-04 (one day after #1513's 2028-09-03).
