# Research: #815 — Clara Rollover — "Ford Says Its Recall Problem Is Old Cars and Software. I Checked the 2026s."

## Slug
`ford-2026-model-year-recall-census`

## Angle (1-2 sentences)
Ford's spokesman says the recall deluge is old cars, software updates, and proactive testing — and that campaigns are down 38% this year. I ran NHTSA's own public recall API across the current lineups of Ford, Toyota, and Honda: Ford's brand-new 2026-model-year vehicles have been hit by 25 federal campaigns filed in 2026, vs. 5 for Toyota and 2 for Honda — and zero of Ford's 25 are over-the-air fixes.

## Kill test
- Genuinely newsworthy? Yes: Sep 1, 2026 triple recall (~159K vehicles, 67th campaign of the year), 5th straight year leading the industry (Chrysler 30, GM 22). Fresh peg.
- Novel angle? Yes: no existing story or draft does a brand-level 2026-model-year census. #748 (Ford 741K rollaway), #752 (Mach-E), #809 (Ford Ecoboost piston), #780 (powertrain category) are all component/category stories. The direct test of Ford's "old cars + software" defense against 2026-MY metal via NHTSA's API is original.
- Data-backed? Yes: NHTSA recalls API (api.nhtsa.gov/recalls/recallsByVehicle), primary campaign records, plus 4 news sources.

## Primary sources
1. **NHTSA recalls API** (api.nhtsa.gov) — census conducted 2026-09-04. Method: for each brand's current US lineup, queried make+model+modelYear for 2024, 2025, 2026; kept campaigns with ReportReceivedDate in calendar 2026; deduped by NHTSA campaign number. Raw JSON saved at /tmp/rcl815/ (campaigns_2026my.json for the 2026-MY cut; campaigns.json for the 2024–2026 cut).
2. **Detroit Free Press, "Ford files 3 new recalls impacting 159,000 vehicles, including Mustang," Sep 1, 2026** (Jamie L. LaReau): https://www.freep.com/story/money/cars/ford/2026/09/01/ford-recall-faulty-wiring-improperly-installed-parts/91559030007/
   - Ford 67 recalls YTD; led industry every year for past five years; Chrysler 30, GM 22 (per NHTSA data).
   - Three recalls: 148,663 2024–26 Mustangs (ground eyelet wiring, 26C40; letters Aug 31; remedy anticipated March 2027); 10,001 2026 Explorer/Bronco/Bronco Sport/Mustang/Ranger (piston dome, 26S61; letters Sep 4; remedy December); 23 2026 Maverick/F-150/Bronco Sport (improperly tightened joints; letters Aug 26; remedy Sept 21).
   - 2025 full year: 152 recalls, 12.96M vehicles. Apr 2025–Mar 2026: 19.6M vehicles, more than all 22 other automakers combined.
   - Spokesman Mike Levine: "Year-to-date, our total number of recall campaigns is down approximately 38% compared to last year... Both the JD Power Initial Quality Study results and our own internal data show that this approach is working." Ford ranked first among mainstream brands in JD Power IQS. Levine: late-model recalls come from "proactive internal testing of current production vehicles, rather than from customer reported issues."
3. **USA Today, "Ford leads all carmakers in recalls. Is your Blue Oval car safe?," Jul 1, 2026**: https://www.usatoday.com/story/cars/recalls/2026/07/01/ford-leads-recalls-2026-carmakers/90766353007/
   - 53 recalls since Jan 1, 2026 (as of Jul 1); Chrysler 19. Spokeswoman Sharyn Ghacham: "More than 80% of our recalls this year are resolved through convenient, software-only updates."
4. **USA Today, "Ford leads among carmaker recalls so far in 2026. Here's why," Jun 20, 2026**: https://www.usatoday.com/story/cars/recalls/2026/06/20/car-recall-leaders-2026-ford-stellantis/90611355007/
   - 51 recalls YTD (as of Jun 20); Ford under 2024 NHTSA consent order with independent third-party oversight; "more than 90% of them are for older vehicles built between 2013 and 2020."
5. **Inc., "Ford Has Issued 51 U.S. Recalls This Year, the Most of Any Automaker," Jul 2026** (Georgia Fearn): https://www.inc.com/georgia-fearn/ford-51-recalls-most-of-any-automaker-what-is-actually-going-on/91371230
   - iSeeCars: 19.6M vehicles recalled Apr 2025–Mar 2026, more than rest of industry combined. Consumer Reports' William Wallace: high recall count "does raise quality-control questions." AutoForecast's Sam Fiorani on software-defined transition complexity.

## Key numbers for the piece
- Census (2026-filed campaigns touching 2026-MY vehicles): Ford 25 (10 models queried), Toyota 5 (16 models), Honda 2 (9 models). Per model: 2.5 vs 0.31 vs 0.22 — Ford ~8–11x.
- Broader cut (2026-filed campaigns touching 2024–2026 MY): Ford 34, Toyota 12, Honda 5.
- Of Ford's 25 (2026-MY cut): 0 flagged overTheAirUpdate=true in NHTSA's data; only 2 of 25 have software/labels components. The rest are hardware: wiring, engines, transmissions, seats, suspension, structure.
- 67 Ford campaigns YTD as of Sep 1 (freep); 5th straight year as industry leader.
- Mustang ground-eyelet remedy not available until March 2027 — ~6 months of driving with a known defect after the Aug 31 letter.

## Limitations (for the article)
- Campaign counts are not vehicle counts or severity scores: a 23-vehicle recall and a 4.3M-vehicle recall each count once.
- NHTSA API model vocabulary gaps: Ford F-250/F-350 Super Duty, Mustang Mach-E, and Toyota Corolla Cross/Sequoia/Sienna/Venza returned no records for any of 2024–2026 and were excluded from all tallies. Direction of bias: understates Ford (Super Duty is high-volume). The big multi-model campaigns are still captured via other models.
- Brand-level only (Ford, not Ford Motor Co. incl. Lincoln).
- 2026 model year still in progress; census as of Sep 3, 2026.
- NHTSA's overTheAirUpdate flag may undercount software remedies not flagged as such.

## Strongest counterargument (for the article)
Ford caught most of these itself through proactive testing (Levine), campaigns are down 38% YoY, JD Power ranked Ford #1 mainstream in initial quality this year, and the count is inflated by the post-consent-order regime that rewards filing early and often. Counting campaigns punishes transparency — Toyota and Honda may simply under-recall. The Takata era proved that lesson runs both ways.

## Actionable insight
If you own or are shopping a 2026 Ford: check your VIN at nhtsa.gov/recalls now, not when the letter arrives. Mustang owners: the ground-eyelet fix isn't expected until March 2027 — ask your dealer whether an interim inspection is available. The 10,001-vehicle piston recall letters go out Sep 4; remedy expected December. And if your shopping list includes a 2026 Explorer, Bronco, Bronco Sport, Mustang, or Ranger, know that each of those nameplates has already been recalled this calendar year.
