# Research — #1522: Mini's Entire 2026 Recall Is Four Cars. One of Them Was Built on a Single Day.

**Slug:** `1522-mini-recall-census-1-four-cars-third-brake-recall`
**Journalist:** Rex Driverton (Senior Crash Correspondent — deadpan dark humor, loves paradoxes; a recall whose entire population is four cars, one built on a single Tuesday, is his beat)
**Kicker:** Investigation
**Date researched:** 2026-11-15
**Target ship_date:** 2028-09-12 (1 day after #1521's 2028-09-11)

## Story in one line

Mini filed exactly one NHTSA recall campaign in 2026, covering four cars — one 2025 Cooper S built on a single day, March 26, 2024, and three 2025 Countryman S ALL4s — because BMW's audit found that the brake fix those cars received under the 2024 integrated-brake recall may not have actually been performed correctly, making this the third recall of the same brake module in two years.

## Kill test

- **Genuinely newsworthy?** YES. The census is the year-level tally for a brand never before censused in this series (full queue/drafts grep: no Mini recall census exists; Mini appears only as a bit player inside BMW brake stories). The count is one campaign and four cars — the smallest vehicle population in the entire census series, smaller than Polestar's 213 (#1520) by a factor of 53. The defect class is safety-critical (loss of power brake assist, ABS/DSC failure) and the mechanism is a remedy audit: BMW recalled the cars because it could not prove the first fix was done right.
- **Novel angle on data?** YES. No prior article has summed Mini's 2026 campaigns. Novel findings: (1) the 1-campaign, 4-vehicle census; (2) the single-day Cooper S — the entire Cooper S population of 26V422 is one car built March 26, 2024, a Tuesday; (3) the third-bite structure — 24V104 (Feb 2024, 266,716 vehicles) → 24V697 (Sept 2024, 309, broken servomotor welds) → 26V422 (July 2026, 428, remedy audit); (4) the 1% defect estimate applied to four cars means the expected number of actually-defective Minis is 0.04 — most likely none of the four is defective, and the recall exists because the paperwork could not prove the fix; (5) the 99.8% shrinkage — from 266,716 cars in 24V104 to 428 in 26V422, the audit found only 428 vehicles across BMW, Mini, and Rolls-Royce whose remedy history did not check out.
- **3+ primary sources?** YES. (1) NHTSA recalls API, api.nhtsa.gov, queried live this run: 13 model spellings x 9 model years (~117 queries), raw results saved at drafts/1522-mini-recall-census-raw.json — 15 distinct campaigns, exactly one 26V campaign (26V422); (2) NHTSA Part 573 Safety Recall Report 26V422 (RCLRPT-26V422-8095.pdf), read in full this run — 428 total, 1% defect estimate, per-model counts (Mini: 1 Cooper S + 3 Countryman S ALL4), chronology (late-2025 warranty-claims review → Jan–Feb 2026 team → Mar–Jun 2026 audit → June 24, 2026 decision), zero accidents/injuries, supplier UMOVIO Germany GmbH; (3) BMW Service Information Bulletin 34 01 26 (RCRIT-26V422-3217.pdf) — "the required corrective action may not have been performed correctly"; (4) NHTSA recalls API records for 24V104 and 24V697 (Mini models, dates, components); (5) RepairPal / oemdtc 24V104 record — 266,716 units, Feb 12, 2024; (6) AnyRecalls 25V717 record — Oct 21, 2025, 1,024 vehicles, rear seat belt retractors, FMVSS 209; (7) BMW Group press release, Jan 5, 2026 — Mini US sales 28,749 in 2025 (+9.3%), 26,299 in 2024; (8) RecallScanner Mini index — "In 2026, NHTSA recorded 1 new Mini recall campaign," corroborating the API count.
- **Verdict:** PROCEED.

## Primary sources

1. **NHTSA recalls API, api.nhtsa.gov/recalls/recallsByVehicle** — census conducted Nov 15, 2026. Method: models Cooper, Countryman, Clubman, Convertible, Cooper SE, Aceman, Cooper Countryman, Cooper Clubman, Cooper S, John Cooper Works, Cooper Countryman SE, Countryman SE, Cooper Hardtop queried make+model+modelYear for 2019–2027 (~117 queries). Kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. Raw results: drafts/1522-mini-recall-census-raw.json (15 distinct campaigns). The API returns Count 0 / empty results for make+model+year combinations with no matching rows. A make-only query (make=mini, modelYear=2026) also returned Count 0, confirming no 2026-model-year Mini campaign hides under an untested spelling.
2. **NHTSA, Part 573 Safety Recall Report 26V422.** https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V422-8095.pdf — filed July 1, 2026; 428 potentially involved, 1% estimated with defect; decision June 24, 2026; dealer notification July 8, 2026; owner notification and VIN searchability Aug 21, 2026; remedy inspect-and-replace, free. Mini populations: Vehicle 1, 2025 MINI COOPER S, production Mar 26, 2024 – Mar 26, 2024, 1 vehicle ("Approximately 1 vehicle may have received a remedy that was not performed in accordance with specified procedures"); Vehicle 2, 2025 MINI COUNTRYMAN S ALL4, production Mar 21, 2024 – May 27, 2024, 3 vehicles. Defect: "The integrated brake (IB) system may not function according to specifications, and a reduction in the power assist function could occur... the Antilock Brake System (ABS) and Dynamic Stability Control (DSC) system may not function." Fully mechanical braking unaffected; parking brake auto-activates. Chronology: "In late 2025, subsequent to the implementation of 24V-104 and 24V-739, it was noticed that, during normal quality checks involving a review of warranty claims processing, there were indications that some vehicles may not have received a remedy in accordance with specified procedures." Jan–Feb 2026 team established; Mar–Jun 2026 all IB-recall vehicles' service and warranty history evaluated; "a small, limited vehicle population may not have received a remedy in accordance with specified procedures." "BMW Group has not received any reports, nor is BMW Group otherwise aware, of any accidents or injuries related to this issue." Related recalls: 24V104, 24V739. Supplier: UMOVIO Germany GmbH (Tier 1 OEM), integrated brake module, part numbers 5A8D899, 5A8D8A9, 5A8D8B0, 5A8D8B9, 5A8D8E0.
3. **BMW Service Information Bulletin 34 01 26 (RCRIT-26V422-3217.pdf), Aug 11, 2026.** https://static.nhtsa.gov/odi/rcl/2026/RCRIT-26V422-3217.pdf — "The affected vehicles were subject to a recall regarding the 'IB Brake System,' which has already been completed. A review of available service data for these vehicles has revealed that the required corrective action may not have been performed correctly. Therefore, in very rare cases, signal interference in the brake system's electronics may still occur in your vehicle."
4. **NHTSA recalls API records, 24V104 and 24V697 (verified live this run).** 24V104, ReportReceivedDate 12/02/2024, ESC: "BMW of North America, LLC. (BMW) is recalling certain 2023-2025 BMW, MINI, and Rolls-Royce vehicles... The integrated brake (IB) system may malfunction and result in a loss of power brake assist or cause the Antilock Brake (ABS) and Dynamic Stability Control (DSC) systems to not function properly." Remedy: replace the integrated brake system, free; owner letters June–December 2024. 24V697, ReportReceivedDate 18/09/2024, ESC control module: covers 2025 MINI Countryman S ALL4, JCW Countryman ALL4, and 2025 MINI Hardtop 2 Door (Cooper, Cooper S) among BMW/Rolls-Royce models; broken servomotor welds cause loss of brake assist and rear braking; remedy replace the integrated brake system, free; letters Nov 13, 2024.
5. **RepairPal / oemdtc, 24V104 record.** https://RepairPal.com/recall/24V104000 and https://oemdtc.com/recall/24V104000/ — 266,716 potential units affected; manufacturer report date Feb 13, 2024; includes 2025 Mini Cooper. (The original February 2024 filing covered 79,670 vehicles; BMW expanded it in August 2024 to 266,716.)
6. **AnyRecalls, 25V717000.** https://www.anyrecalls.com/recall/25V717000 — Oct 21, 2025; 1,024 vehicles; BMW of North America recalling certain 2026 2 Series Gran Coupe, X1, X2, and Mini Countryman S ALL4; housing pin in rear seat belt retractors may have been damaged during production, retractor may not lock; FMVSS 209 noncompliance; remedy replace rear seat belts, free; owner letters Dec 18, 2025; VINs searchable Dec 12, 2025.
7. **BMW Group press release, Jan 5, 2026.** https://www.motoringfile.com/2026/01/05/mini-usa-ends-2025-up-9-3-despite-cooper-sales-down/ and BMW Group newsroom — Mini US sales 28,749 in 2025 (+9.3% vs 26,299 in 2024); Mini US sales peaked at 66,502 in 2013.
8. **RecallScanner Mini index.** https://www.recallscanner.com/recalls/mini — "In 2026, NHTSA recorded 1 new Mini recall campaign in our tracked dataset." Independent corroboration of the 1-campaign count. Also lists the July 1, 2026 brake campaign as Mini's most recent.
9. **NHTSA recalls database.** https://www.nhtsa.gov/recalls
10. **NHTSA, Fatality Analysis Reporting System (FARS).** https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars

## The numbers

### The 2026 census: one campaign, four cars

| Campaign | Filed | Mini vehicles | Group total | Defect |
|---|---|---|---|---|
| 26V422 | July 1, 2026 | 4 (1 Cooper S, 3 Countryman S ALL4) | 428 (BMW, Mini, Rolls-Royce) | Integrated brake system may malfunction; loss of power brake assist, ABS/DSC may not function |

- **Mini's share of its own recall:** 4 / 428 = **0.93%**. The campaign is a BMW recall that happens to contain four Minis. The largest single-model group is the BMW X5 at 92 (19 + 73 across two X5 entries in the Part 573 descriptive counts).
- **Expected actually-defective Minis:** 428 x 1% = ~4.3 vehicles across the whole campaign; Mini's share of that expectation is 4 x 1% = **0.04 cars**. Most likely, zero of the four Minis has a defective brake module. The recall exists because BMW could not prove the first fix was performed correctly, not because any of the four cars is known to be broken.
- **The single-day Cooper S:** the entire Cooper S population is one car built March 26, 2024 — a Tuesday. Production window is a single day, start and end date identical. That is the smallest model population in any recall this series has covered.
- **Census-series context:** Polestar's 213 vehicles (#1520) was the smallest non-zero recall year in the series. Mini's 4 is 53 times smaller. Porsche filed 0 campaigns in 2026 (#1491); Mini filed 1 campaign covering 4 cars, which is, in vehicle terms, barely more than zero.

### The three bites at the same brake module

| Campaign | Filed | Group total | Mini involvement | What it was |
|---|---|---|---|---|
| 24V104 | Feb 12, 2024 | 266,716 | 2025 Cooper, Cooper S, Countryman | IB system may malfunction; loss of power brake assist, ABS/DSC failure |
| 24V697 | Sept 18, 2024 | 309 | 2025 Countryman S ALL4, JCW Countryman ALL4, Hardtop 2 Door Cooper/Cooper S | Broken servomotor welds in the IB module; loss of brake assist and rear braking |
| 26V422 | July 1, 2026 | 428 | 1 Cooper S, 3 Countryman S ALL4 | Audit found some vehicles "may not have received a remedy in accordance with specified procedures" under 24V104/24V739 |

- **The shrinkage:** 266,716 → 428 is a **99.84%** reduction. The 2026 recall is not a new defect population; it is the paperwork residue of the 2024 recall — the 428 cars whose dealer service and warranty records did not prove the fix was done to spec.
- **The gap:** 24V104 (Feb 2024) to 26V422 (July 2026) is **870 days**. The brake module has now been recalled three times across 29 months, and the third recall's own chronology says the problem was found in "late 2025" during "normal quality checks involving a review of warranty claims processing" — BMW found the bad remedies by reading its own warranty paperwork, a year and a half after the fact.
- **The supplier:** UMOVIO Germany GmbH, Tier 1, five part numbers (5A8D899, 5A8D8A9, 5A8D8B0, 5A8D8B9, 5A8D8E0). The same module family, the same supplier, across all three campaigns.

### Mini's recent census trend

| Year | Campaigns | Notes |
|---|---|---|
| 2024 | 5 (24V104, 24V340, 24V302, 24V612, 24V697) | IB brakes x2, Countryman airbag thorax, Cooper SE battery x2 |
| 2025 | 2 (25V616, 25V717) | Front seat belt retractors (1,571 group-wide, Sept 17, 2025); rear seat belt retractors (1,024 group-wide, Oct 21, 2025) — both seat belts, both shared with BMW X1/X2 |
| 2026 | 1 (26V422) | 4 cars; third bite at the IB brake module |

- **The seat-belt year:** both 2025 campaigns were seat belt retractors, both shared with BMW models, both traced to production damage (torsion bar in the front retractors, housing pin in the rear). Mini's 2025 recall story is entirely about seat belts it shares with BMW.
- **Scale check:** Mini sold 28,749 cars in the US in 2025. Its entire 2026 recall footprint (4 cars) is **0.014%** of one year's sales. Mini's 2013 US peak was 66,502 — the brand now sells fewer than half that, and recalls fewer still.

### The China footnote (not part of the US census)

Spotlight Automotive (BMW's 50:50 joint venture with Great Wall) recalled 714 China-built electric Minis on Nov 6, 2026 (Aceman 39, JCW 42, Cooper 633) over an interior mirror bracket adhesive bond — an expansion of a July 24, 2026 recall of 315 cars. China-market only; no NHTSA campaign. Not counted in the census, but it is the same pattern one level down: a recall expanding a recall.

## Original contribution (Rex's math and synthesis)

1. **The 1-campaign, 4-vehicle census with corrected vocabulary.** Found by querying 13 model spellings x 9 model years (~117 API queries) plus a make-only 2026 query (Count 0), cross-checked against an independent aggregator (RecallScanner: 1 new Mini campaign in 2026) and iSeeCars (latest Mini recall Aug 25, 2026). The API sweep initially returned only 25V616 for 2025; the second 2025 campaign, 25V717, was found through press/aggregator records because the NHTSA API indexes it under BMW, not Mini — a gap in the API-first method that the cross-check closed. No prior article has summed Mini's 2026 campaigns.
2. **The single-day Cooper S.** The Part 573 lists the Cooper S production window as March 26, 2024 to March 26, 2024. One car, one day. Nobody has pointed this out.
3. **The 0.04-car expectation.** At BMW's own 1% defect estimate, the expected number of actually-defective Minis in this recall is 0.04. The recall is a paperwork audit with a brake module attached: BMW is recalling four cars it believes are probably fine because it cannot prove the dealer did the first fix correctly.
4. **The 99.84% shrinkage.** From 266,716 cars in 24V104 to 428 in 26V422. The third recall is 0.16% the size of the first, and it exists because of warranty-claims paperwork, not because of a new failure mode.
5. **The three-bite structure.** Same module, same supplier, three campaigns in 29 months: a malfunction recall, a weld recall, and a remedy audit. The brake system was not fixed three times; it was recalled three times, and the third time is an admission that the first fix may not have been done right on 428 cars.

## Limitations

- The census counts campaigns filed Jan 1 – Nov 15, 2026. Late filings will move the count; the article must date the census.
- Campaign populations count recall actions, not unique vehicles. The four Minis in 26V422 were all previously in 24V104 and/or 24V697 populations — the same cars, counted again. The article must say so.
- The NHTSA API indexes shared BMW/Mini campaigns under BMW in at least one case (25V717, found via AnyRecalls/press, not via the make=mini API sweep). The direction of any remaining bias is undercount: a 2026 campaign filed under BMW that includes Mini models but is not indexed under make=mini would be missed by the API sweep. Mitigations: RecallScanner's independent count (1 new Mini campaign in 2026), iSeeCars' latest-recall listing (Aug 25, 2026), and the make-only 2026 API query (Count 0). A campaign could still hide; the article should note the census is as of Nov 15, 2026.
- The 1% defect estimate is BMW's estimate for the whole 428-vehicle campaign, not a Mini-specific figure. Do not state a Mini-specific defect rate.
- The X5 per-model counts in the Part 573 have an internal inconsistency between header and descriptive text (one X5 entry lists 92 in the header and 19 in the descriptive text; another lists 92/73; the i5 lists 41/43; the 5 Series 39/37). The descriptive-text counts sum to exactly 428, matching the campaign total, so the descriptive counts are authoritative and the header counts are copy errors. The 428 total and the Mini counts (1 + 3) are consistent and unambiguous; do not quote per-model BMW counts beyond the total and the X5's 92 (19 + 73 descriptive).
- No FARS model-level fatality data exists for the 2025 Mini Cooper S / Countryman S ALL4 in this census; this is a recall census, not a fatality-rate story. Do not import Mini fatality rates as if they applied to these vehicles.
- The China mirror recall (714 cars, Spotlight Automotive, Nov 6, 2026) is a separate regulatory regime; it is context, not part of the US census count.

## Strongest counterargument

One campaign covering four cars is the safety system working, not failing. Four cars, zero accidents, zero injuries, a free inspect-and-replace fix, and a manufacturer that audited its own warranty paperwork and found its own bad remedies. Compare Ford's 85 recalls in 2026 (per the Detroit Free Press, Nov 9) and Mini looks like the best-run quality operation in the industry — its entire 2026 recall footprint fits in a single parking space, and the expected number of actually-defective cars rounds to zero. A census of four is barely a census, and the real story of Mini in 2026 is a brand selling 28,749 cars with almost nothing going wrong. The article must grant all of this fully, then answer it: the count is low because the brand is small, not because the brake system is fixed — the same module has now been recalled three times, and the third recall exists because BMW could not prove the first fix was done right. A remedy that has to be re-checked two years later is not a rounding error in paperwork; it is a manufacturer that does not know, car by car, whether its dealers did the job. Both sentences are true at the same time.

## Actionable guidance (required)

- **If you own a 2025 Mini Cooper S or Countryman S ALL4:** check your VIN at nhtsa.gov/recalls for **26V422**. Only four Minis are in it — one Cooper S built March 26, 2024, and three Countryman S ALL4s built March 21 – May 27, 2024. The fix is free: the dealer inspects the integrated brake system and replaces it if necessary. If your car already had the 24V104 or 24V697 brake work done, you still need this one — that is the entire point of the recall.
- **If you own a 2025–2026 Mini Cooper, Cooper Convertible, Countryman S ALL4, or Countryman SE ALL4:** check for **25V616** (front seat belt retractors, filed Sept 17, 2025) and, for 2026 Countryman S ALL4, **25V717** (rear seat belt retractors, filed Oct 21, 2025). Both are free dealer replacements, and both are FMVSS noncompliance issues — the retractors may not lock in a crash.
- **If you own a 2020–2024 Cooper SE:** the high-voltage battery recalls **24V302** and **24V612** (12,535 cars in 24V612) are still the ones to verify; water intrusion and short circuits are the risk, and the remedy is a leak test and repair.
- **Buying a used 2025 Mini:** verify all three brake campaigns (24V104, 24V697, 26V422) are closed on the specific VIN. A car that shows 24V104 as complete may still have 26V422 open — the 2026 recall exists precisely because some 2024 fixes were not done correctly. Check the VIN at nhtsa.gov/recalls, not just the Carfax.

## Killed angles (do not resurrect)

- **"Mini's brake recall is tiny, therefore Mini is safe."** Killed: the count is small because the brand is small and the campaign is a BMW-group audit; the same module failed three times. The article's thesis is the third bite, not the small number.
- **BMW 26V733 water-pump recall (720,796 cars, Nov 4, 2026) as a Mini story.** Killed: the campaign covers 2012–2018 BMW models only; no Mini is included. Do not conflate it with 26V422.
- **The China mirror recall as a US census entry.** Killed: Spotlight Automotive, China-market only, no NHTSA campaign. Footnote context at most.
- **25V717 as a 2026 campaign.** Killed: filed Oct 21, 2025. It belongs in the 2025 count (2 campaigns), not 2026.

## References (for article)

1. NHTSA recalls API — 2026 Mini census (13 models x 9 model years, ~117 queries; raw: drafts/1522-mini-recall-census-raw.json). https://www.nhtsa.gov/recalls
2. NHTSA, Part 573 Safety Recall Report 26V422, July 1, 2026. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V422-8095.pdf
3. BMW, Service Information Bulletin 34 01 26, Recall 26V-422, Aug 11, 2026. https://static.nhtsa.gov/odi/rcl/2026/RCRIT-26V422-3217.pdf
4. NHTSA recalls API — 24V104 (Feb 12, 2024) and 24V697 (Sept 18, 2024) records. https://www.nhtsa.gov/recalls
5. RepairPal, 24V104 recall summary (266,716 units). https://RepairPal.com/recall/24V104000
6. AnyRecalls, 25V717000 (Oct 21, 2025; 1,024 vehicles). https://www.anyrecalls.com/recall/25V717000
7. BMW Group, "BMW of North America Reports Full Year 2025 U.S. Sales Results," Jan 5, 2026 (Mini 28,749 in 2025; 26,299 in 2024). https://www.motoringfile.com/2026/01/05/mini-usa-ends-2025-up-9-3-despite-cooper-sales-down/
8. RecallScanner, Mini recalls index (1 new Mini campaign in 2026). https://www.recallscanner.com/recalls/mini
9. NHTSA, Fatality Analysis Reporting System (FARS). https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
10. NHTSA recalls database. https://www.nhtsa.gov/recalls
