# Critic Panel — Round 0 — #1512: Cadillac Filed 7 Recalls for Its 2026 Cars. One Is a Missing Owner's Manual

**Slug:** 1512-cadillac-recall-census-7-brakes-seats-windows
**Journalist:** Axle McScatter
**Date:** November 14, 2026
**Hard gates (re-verified after fixes):** em dashes 0 (max 3), banned phrases 0, "The" starters 2.1% (max 15%), class="story", ../style.css, hero real JPEG 1920x1280 ?v=33ca9fb1, sentence rhythm PASS (variance 1596.3, short 11.4%, long 59.1%).

## 1. General Editor — 8.5/10

The lede does its job in three beats: the method (fifty queries, eleven models), the count (seven), and the spread (6,738 to 1) as the thesis. The arc is clean — absurdity first (the owner's-manual recall), the one that matters (brakes), the two brand-only defects, the spread at the small end, the zero-recall table, the GM scale paragraph, the counterargument, the limits, the actions. The two tables carry the piece the way a census should: the campaign table is the evidence, the per-model table is the payoff. Two nits: the "For scale" paragraph is the densest in the article (GM 15, brand splits 13/11/7, 31 pairs, Acura callback) and asks the reader to hold four numbers at once; and "One of them does not exist yet" lands as a closer to the brand-only paragraph but refers to the seat-module fix two clauses back, so a skim reader may attach it to the wrong recall. The piece reads like a finished article, not a draft.

## 2. Voice Coach — 9.0/10

Axle is present and distinct: the census is run in the first person ("I ran the census on every 2026 Cadillac"), numbers are converted into arguments rather than listed, and the judgment lands on the method ("That is the method's blind spot") rather than on the manufacturer. Rhythm passes with wide variance (1596.3) and the short punches ("Smallest covers ten vehicles, largest covers 67,380.") break up the long builds. No banned phrases, no AI tells flagged. The voice would survive a byline swap test against Mia's engineering pieces or Rex's FARS dives: nobody else on staff opens with fifty API queries. One nit: "which is a fact, not a rating, so check the VIN anyway" repeats the same move twice in the closing paragraph.

## 3. Ethics Reviewer — 9.0/10

No victims to exploit and none are invented: zero injuries are stated where the filings say so, and the two serious risks (brake loss, seat trap) are stated in the filings' own words rather than inflated into scare lines even though "a child could be trapped" was sitting right there. No owner is named. The article tells readers what to do (check the VIN, take the OTA update, disable the fold feature, skip the key-fob express-up) instead of what to fear, and it refuses the easy dunk on Cadillac even though "a missing owner's manual is a safety recall" would have supported one — the counterargument paragraph credits the no-injury record explicitly. The $38,000 battery figure is labeled as a benchmark calculation, not a GM price.

## 4. Social / Shareability — 8.5/10

The headline is the share: "Cadillac Filed 7 Recalls for Its 2026 Cars. One Is a Missing Owner's Manual" fits a post and survives truncation. The pull stat (67,380) is the hook, and "a radio that forgot a PDF" is the detail people quote in replies. The 6,738-to-1 spread is the second quotable. Weakest share element is the GM-scale paragraph: the 31 brand-campaign pairs arithmetic is necessary for rigor but not quotable, and the per-model table is reference material, not a share trigger. The actionable close (four owner-specific instructions plus the shopping note) gives readers a reason to send it to a Cadillac owner they know.

## 5. Legal Accuracy — 9.0/10

Every factual claim traces to the NHTSA recalls API census run this session, a Part 573 filing, or a named secondary summary of a Part 573 filing, all linked in the references. One real error was caught and fixed before scoring: the article originally said 26V114 touches nine of eleven models, but the per-model table shows the Celestiq carries only 26V717, so the count is eight, and the research file was corrected in the same pass. Two more imprecisions fixed pre-verdict: "six 2026 Escalades" now reads "six 2026 Escalades and Escalade ESVs," and "five of them Escalade IQs" now reads "five of them Escalade IQs and IQLs." Remaining claims verified against the filings: 67,380 units and 100% defect estimate for 26V717, Lyriq 44,585 / Vistiq 18,802 / Celestiq 82 splits, 24V589 predecessor (21,469), 26V394 14,540 with 13,629 from 2026, 26V612 29,347 with 10,201 from 2026 and the 13 mm blind spot, 26V289 66 units and 69.7% estimate, 26V304 2,464 units and 100% estimate, 26V494 10 US vehicles and 0.8% estimate. No case law needed; no statutory claims made beyond the FMVSS numbers in the filings themselves.

## 6. Research Rigor — 9.0/10

Original contribution is real and itemized in the research file: the 7-count from 50 live API queries, the 11-model VPIC list, the per-model table, the 8-of-11 reach of 26V114, the 7-counted-vs-1-excluded arithmetic (26V082), the 2 Cadillac-only defects, the zero-recall CT4 and XT5, the 6,738-to-1 unit spread, and the 22,980 2026-Cadillac unit count inside 26V717 — computed, not quoted. Limitations are stated as a dedicated paragraph, not hedged inline: no FARS cross-tab is possible for 2026 models, defect percentages are GM's estimates, post-Nov-14 filings are uncounted, and the excluded sweep only reached back to model year 2023. The counterargument is stated at full strength (one campaign is a PDF, two cover 76 vehicles, no injuries) and answered rather than dismissed. Method is transparent: the census script, raw JSON, and deduped campaign JSON are all in drafts/.

## 7. Data Presentation — 9.0/10

The pull stat (67,380) is the right number to lead with, because it is the recall that actually matters and it anchors the spread. Numbers arrive with context every time: 100% becomes "every Vistiq built to date," 66 becomes "six 2026 Escalades," 10 becomes "$38,000 per car," 13 mm becomes "about half an inch" via the supplier's own calibration error. Both tables are complete with verified splits. The one small miss: 26V114 has no unit count (GM-wide filing, 40+ models), so the campaign table says "GM-wide" where every other row carries a number; that is honest but leaves the most widespread campaign as the least quantified row. Not worth a revision round.

## Verdict: SHIP

| Critic | Score |
|---|---|
| General Editor | 8.5 |
| Voice Coach | 9.0 |
| Ethics Reviewer | 9.0 |
| Social / Shareability | 8.5 |
| Legal Accuracy | 9.0 |
| Research Rigor | 9.0 |
| Data Presentation | 9.0 |
| **Average** | **8.86** |

All 7 critics at 8.5+, all hard gates pass. One factual error caught and fixed pre-verdict (26V114 reach 9-of-11 → 8-of-11; Celestiq carries only 26V717), two imprecisions fixed pre-verdict (Escalade/ESV split; IQ/IQL split), and rhythm fixed pre-verdict (short sentences 17.0% → 11.4% by combining three choppy fragments). Round 0. **SHIP.**
