# Research: Article #959 — Drugged-Driving Deaths Nobody Counts

**Journalist:** Dale Impactor III (toxicology/impairment beat; underused, 19 queued vs 30+ for others)
**Kicker:** Sobriety Report
**Slug:** `959-drugged-driving-nobody-is-counting`
**Status.json slot:** number 959, SHIP_BLOCKED 2026-12-26 (queue max was 2026-12-25)

## Angle (1-2 sentences)
43.2% of impaired drivers in fatal FARS crashes (2014-2023) tested positive for drugs, yet only five jurisdictions drug-test most dead drivers, the NTSB's recommended national drugged-driving dataset was never built, and NHTSA's impaired-driving division is down to two staff while $475M in crash-data modernization money expired unused.

## News peg
KFF Health News investigation (May 2026): federal efforts to understand drugged driving have stalled under Trump-era staff cuts; NHTSA impaired-driving division lost 5 of 7 staff (2 remain); behavioral research team shrunk from 16 to 3-4; $750M infrastructure-law crash-data fund, >$475M unused and expiring September 2026. Plus UC Davis/NHTSA surveillance finding (Dec 2024): 18% of injured drivers had sedating medications — more than alcohol (10%) or cannabis (9%).

## Primary sources (3+)
1. KFF Health News, "Efforts To Understand the Nation's Drugged Driving Problem Stall Under Trump" (May 2026) — https://kffhealthnews.org/public-health/drugged-driving-impairment-research-stalled-trump-policies/ (Mesa County coroner data: 1/3 alcohol alone, ~1/2 with drugs; NTSB 2022: ~half of arrested impaired drivers, >1/4 of killed drivers polysubstance; only 4 states + DC drug-tested >60% of dead drivers in 2020; NHTSA staffing cuts; unused funds)
2. NHTSA press release, "NHTSA Reminds Holiday Revelers to Drive Sober" — https://www.nhtsa.gov/press-releases/remind-holiday-travelers-drive-sober (trauma-center/ME study: 7 Level 1 trauma centers; 56% of seriously/fatally injured road users positive for alcohol or potentially impairing drug; cannabinoids 25%, alcohol 23%, stimulants 11%, opioids 9%; 2+ drugs in 18% of serious injuries, 32% of fatalities)
3. NHTSA full report via ROSAP — https://rosap.ntl.bts.gov/view/dot/65623/dot_65623_DS1.pdf (n=7,279; ME cases 67.7% any-drug vs trauma 54.2%; ME killed: alcohol 35.8%, cannabinoids 28%, opioids 15.3%; 19.9% overall 2+ categories)
4. UC Davis Health, "New study finds significant number of serious crashes involve drugs and alcohol" (Dec 30, 2024) — https://health.ucdavis.edu/research/news/headlines/new-study-finds-significant-number-of-serious-crashes-involve-drugs-and-alcohol/2024/12 (490 injured drivers: 40% any impairing substance; sedating meds 18%; ethanol 10%; cannabis 9%; funded by California OTS via NHTSA)
5. Land Line summary of NHTSA study — https://landline.media/nhtsa-more-than-half-of-crash-victims-positive-for-drugs-alcohol/ (drivers killed: ~40% alcohol, 31.7% cannabinoids, 13% opioids; 69% any drug; 34% two or more drugs)

## Original computation (from fars_output.js, FARS_TOXICOLOGY 2014-2023)
- 490,736 fatal-crash drivers; 98,348 any-impaired; 74,188 alcohol-positive; 42,496 drug-positive
- **43.2% of impaired drivers were drug-positive** (alcohol-positive 75.5%; overlap = polysubstance)
- 8.7% of all fatal-crash drivers drug-positive vs 15.1% alcohol-positive
- Highest drug_pct: Oldsmobile Alero 18.4% (26/141), Buick Park Avenue 16.6% — small-n; large-n: Chevrolet Silverado 2,067 drug-positive drivers
- Note: FARS drug-positive means a drug panel was run AND returned positive; testing is far less complete than alcohol testing, so this is a floor

## Kill test
- Newsworthy? Yes: active federal defunding story (May 2026 KFF, ongoing through 2026), surveillance data Dec 2024, ongoing policy fight over impairment-prevention tech mandate.
- Novel angle? Yes: site has never covered prescription/OTC drugs (opioid/prescription grep = NONE across queue), and the 43.2% FARS aggregation is a fresh computation. Frames drugged driving not as "also important" but as a deliberately unmeasured epidemic.
- Not just another data dump? The 18%-sedating-meds-beats-alcohol inversion is counterintuitive; the "two people left at NHTSA" detail gives it teeth.

## Overlap check (2026-09-21)
- Queue grep: opioid NONE, prescription NONE, thc NONE, interlock NONE, repeat NONE, clearinghouse NONE
- #840 (cannabis legalization +4.1%, invisible 24.6% zero-alcohol) — different thesis (cannabis policy), acknowledge as cousin, no headline collision
- #782 (DUI blood tests take 370 days) — lab-backlog angle, different
- #927 (.15 club) — alcohol-only distribution, different
- Published stories/: no drugged-driving data-collection story
- Verdict: CLEAR, proceed

## Strongest counterargument (to state at full strength)
Drug presence is not impairment. THC metabolites linger for weeks; a positive test doesn't prove the driver was impaired at crash time the way 0.08 BAC does. Prescription drugs like opioids are detectable after legitimate medical use. The article's own numbers overstate the case — and that's precisely why better testing methodology (impairment, not presence) is what researchers are begging for, and exactly what is being defunded.

## Limitations
- FARS drug testing is incomplete and non-uniform; 43.2% is a floor, not a rate
- Trauma/ME study: 7 trauma centers, not nationally representative; ME cases skewed toward deaths (selection bias toward more severe crashes)
- UC Davis: single-center (Sacramento), n=490, injured drivers only
- "Positive" ≠ impaired for drugs; cannot compare 0.08-equivalent thresholds

## Actionable insight
- Check your medicine cabinet: if you're on opioids, benzos, sleep aids, or sedating cold/flu meds, the label's "do not operate machinery" line includes your car. There is no legal per-se limit for most of these — but there IS liability.
- A drug recognition expert's field test can take 45 minutes and the lab result a year; the enforcement gap is structural, not technical.
