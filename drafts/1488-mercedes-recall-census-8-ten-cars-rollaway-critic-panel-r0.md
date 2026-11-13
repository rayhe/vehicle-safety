# Critic Panel — Round 0 — #1488 Mercedes-Benz Recall Census (Mia Crumplezone)

**Article:** drafts/1488-mercedes-recall-census-8-ten-cars-rollaway.html
**Hero:** drafts/1488-mercedes-recall-census-8-ten-cars-rollaway.jpg (real JPEG 1920x1280, hash 9c014ee1)
**Date:** November 12, 2026

## Hard gates (regex = source of truth)

| Gate | Result | Status |
|---|---|---|
| Em dashes (`grep -o '—' ... \| wc -l`) | 0 | PASS (max 3) |
| Banned phrases (Here's the thing / The kicker / paradigm shift / game-changer / deep dive / unpack / Let's be clear / Make no mistake) | 0 | PASS |
| "The" sentence starters | 2 of 99 (2.0%) | PASS (max 15%) |
| CSS class `class="story"`, link `../style.css` | yes / yes | PASS |
| Sentence rhythm script | variance 3687.5 (≥200), short 8.8% (≤15%), long 52.7% (≥15%) | PASS |
| Hero image | real JPEG 1920x1280, ?v=9c014ee1 | PASS |
| Word count (story-body) | 2,137 | n/a (census series precedent; #1487 was ~2,100) |

**Rhythm fix applied pre-panel:** first pass failed short-sentence share (20.2%). Combined 9 fragment clusters into longer constructions (HTTP 400 / "Not empty results"; "Populations say something else"; median/mean; rollaway pair; warning-lights fragment; "Ten cars / Two days / One inspection"; "Not a statistical tail / Every single one"; "Count it anyway"; Alabama pair; caveats). Re-run: PASS at 8.8% short. No content changed, only sentence joins.

**Median correction found in pre-panel verification:** research file and draft both said median recall size 111.5; recomputation from the sorted populations (10, 16, 20, 51, 203, 932, 144049, 310667) gives (51+203)/2 = 127. Corrected in both files before scoring. Mean 56,994, six-campaign subtotal 1,232, big-two subtotal 454,716, and 99.7% share all re-verified by hand.

## 1. General Editor — 8.5/10

Lede lands the census in one paragraph: eight campaigns, 455,948 vehicles, 99.7 percent in two campaigns. Structure is the series standard (method, table, big two, micro-recalls, clean cars, counterargument, limitations, buyer guidance) and it holds. The bus paragraph is a detour, but it earns its place: it is the only campaign a reader would never expect, and the "one passenger or fifty" line justifies the count. Deduction: the buyer-guidance paragraph runs long as a single block, and the "Own a..." question chain is effective but the fifth and sixth questions start to feel like a list. Minor. No structural rewrite needed.

## 2. Voice Coach — 8.5/10

Mia is audible and distinct from Rex: the engineering explainer beats ("A bowden cable is a steel wire inside a sleeve, the mechanical link between the interior door handle and the latch") are hers, as is the "worst 150 milliseconds of a car's life" framing. No banned phrases, no AI tells in the lede, rhythm gate passes after the fragment joins. Deduction: two sentences still read like a press release paraphrase ("Fix is a new door lock, free, with a phased remedy and a production change that took effect May 20, 2026") and the "masterclass" opener of the 26V481 paragraph is the closest thing to a stock phrase in the piece. Acceptable at round 0; not worth a revision round alone.

## 3. Ethics Reviewer — 9.0/10

Fair to Mercedes throughout. The counterargument is stated at full strength and conceded as "mostly fair" before the rebuttal. The 10-car and 16-car recalls are presented as the system working, not as gotchas. No crash/injury claims are invented; every "zero known" is sourced to the Part 573 filings. The rollaway paragraph is careful to say no US rollaway is known while noting overseas cases. No self-congratulation, no moralizing about luxury buyers. The headline is sensationalist in the site's house style but every word of it is true.

## 4. Social / Shareability — 8.5/10

Headline is the share: "The Smallest Is 10 Cars. The Biggest Can Roll Away." Pull stat (8) with the 99.7% label is the second share. Best pull quotes: "Ten cars, two days of production, and one pre-delivery inspection on an international vehicle that caught it" and "A blank dashboard was a software update until a regulator said it was a recall." Deduction: no single-sentence kicker at the end; the article closes on buyer guidance rather than a line that travels. The headline carries the share on its own, so this is not blocking.

## 5. Legal Accuracy — 9.0/10

All eight campaign numbers, dates, populations, and defect descriptions verified against NHTSA Part 573 PDFs or the NHTSA ack letters: 26V063 (51, Daimler Coaches), 26V134 (10), 26V172 (20, FMVSS 208/209), 26V199 (932), 26V278 (16), 26V281 (144,049), 26V353 (203, 100% defect), 26V481 (310,667). FMVSS references are correct. The 25V533 / 26V638 / 26V099 outside-census items are correctly dated and scoped. One soft spot, disclosed in the article: the 26V199 population is 932 per the NHTSA acknowledgment letter, while the dealer launch notification lists a total recall population of 888; the article uses the NHTSA-published 932. No legal claim is overstated; "rollaway" and "loss of steering" track the filings' own language.

## 6. Research Rigor — 9.0/10

Original contribution is real and documented: the corrected 8 census from 267 API queries across three passes; the (EV)-spelling catch that found 26V278 after two passes missed it; the 455,948 campaign-vehicle arithmetic with the median/mean gap; the thirteen-brand table (total 152); the 26V281 OTA-to-recall conversion chronology; the 26V481 supplier-material root cause. Limitations are explicit and honest, including the EQS/AMG GT/SL vocabulary gap and the residual risk of a missed campaign on a line whose NHTSA spelling was not guessed. Counterargument is full-strength. Methodology is transparent (query counts, 400 rates, control sweeps). Deduction: complaint counts were not collected for this census, so the "30 complaints" style texture the VW piece had is absent; the field-case counts from the Part 573 filings substitute adequately.

## 7. Data Presentation — 9.0/10

Thirteen-brand table is clean and complete. Pull stat carries the two numbers that matter (8 campaigns; 99.7% concentration). The median-vs-mean comparison (127 vs 56,994) is the best single data moment in the piece. Per-model counts are in prose rather than a table, which costs a little scannability, but the clean/dirty pattern (S/G/EQE/EQS/Sprinter zero; GLA/GLC/GLE/GLS two each) is stated plainly. All 15 references are linked, with Part 573 PDFs cited by campaign number.

## Scores

| Critic | Score |
|---|---|
| General Editor | 8.5 |
| Voice Coach | 8.5 |
| Ethics Reviewer | 9.0 |
| Social / Shareability | 8.5 |
| Legal Accuracy | 9.0 |
| Research Rigor | 9.0 |
| Data Presentation | 9.0 |
| **Average** | **8.79** |

## VERDICT: SHIP

All 7 critics at 8.5+, all hard gates pass, rhythm gate passes after the pre-panel fragment joins, median corrected pre-panel. Round 0, no revision round needed.
