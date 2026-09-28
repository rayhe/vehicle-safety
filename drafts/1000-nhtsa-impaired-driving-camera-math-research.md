# Research Notes — #1000: NHTSA impaired-driving tech mandate

## Angle (1-2 sentences)
Congress ordered NHTSA to mandate in-car drunk-driving detection by Nov 2024; 19 months later there is no rule, NHTSA admits no tech is accurate enough, and the agency's own math says even 99.9% accuracy means millions to tens of millions of wrongly stranded drivers per year. Meanwhile Europe already mandates the camera with a statutory privacy envelope, and the identical hardware is shipping in American cars governed by nothing but privacy policies.

## Kill test
- Genuinely newsworthy? Yes. Fresh peg: theautowire Sept 21, 2026 (EU ADDW vs US gap); stateofsurveillance June 2026 (19 months past deadline, docket modified June 9, 2026); autoblog Sept 2026 (NHTSA accused of moving too slowly); MADD coalition "deeply disappointed" April 30, 2026.
- Novel? Queue has zero coverage of §24220 / ADDW / driver-monitoring-cameras / kill-switch mandate (grep: kill-switch, massie, halts, addw, driver-monitoring, impaired-tech — all empty). Existing impairment articles are about toxicology/FARS, not the mandate.
- Original contribution: (1) the false-positive ratio arithmetic from NHTSA's own bounds; (2) the IIHS dual-position paradox (9,409-lives estimate + "tech not readily available" + "mandate will force it"); (3) hardware-without-envelope asymmetry quantified via Seeing Machines (4.8M cars, +67% YoY).

## Facts (verified this run, 2026-09-27)
1. IIJA §24220 (2021): NHTSA must issue final rule requiring "advanced impaired driving prevention technology" — passive detection of BAC ≥0.08 or impairment, prevent/limit vehicle operation. Statutory deadline: Nov 15, 2024. Source: ANPRM 89 FR 830 (Jan 5, 2024); congress.gov H.R.3684.
2. NHTSA ANPRM Jan 5, 2024, Docket NHTSA-2022-0079 (RIN 2127-AM50), 18,367 comments. Disposition: Pending; last modified June 9, 2026. No final rule; ANPRM now >2 years old.
3. NHTSA report to Congress (cited by theautowire, Sept 21, 2026): "neither of its studies found commercially available technology that detects driver alcohol impairment accurately and passively."
4. NHTSA accuracy arithmetic: even a "99.9 percent detection accuracy level could result in millions to tens of millions of instances each year where the technology would incorrectly prevent or limit drivers from operating their vehicles."
5. IIHS (Chuck Farmer, 2015-18 FARS): blocking BAC ≥0.08 would avert avg 9,409 deaths/year (~a quarter of fatalities, net of crashes that would occur anyway); 10,500 at 0.05; ~12,000 if all drivers sober. Source: automotiveworld IIHS release; Consumer Reports 2020.
6. IIHS regulatory comment (David Zuby, EVP/CR0, March 2024): "the technology to passively detect alcohol-impaired drivers and prevent them from driving is not readily available in the marketplace"; argues "a regulatory requirement to equip passenger motor vehicles will inspire the additional effort needed to make it a reality."
7. Convicted-offender interlocks only: max 837 crash deaths/year averted (Streetsblog quoting Farmer). Universal tech: 9,409.
8. NHTSA alcohol-impaired deaths: >12,000 in 2023 (per NHTSA March 2026 tweet via carscoops); 2,000+ deaths at BAC 0.01-0.07 (below legal limit). MADD coalition (April 30, 2026): 37 lives/day; 78-second death/injury cadence; 33% increase since 2019.
9. DADSS (NHTSA + ACTS public-private partnership): breath/touch passive alcohol sensors. MADD letter: NHTSA acknowledged DADSS "ready by the end of 2025."
10. EU ADDW (effective July 7, 2026, GSR second wave): IR camera (940nm) mandatory in new cars/vans; gaze-in-Area-3 ≤3.5s at ≥50 km/h (6s at 20-50 km/h); data envelope in type approval — no continuous recording, no third-party access, immediate deletion, "shall function without relying on biometric personal data"; driver may deactivate but it resets at master control switch activation. Source: theautowire Sept 21, 2026, citing eur-lex.
11. UN Reg 171 (hands-on assisted driving): eyes-on request by 5 seconds of visual disengagement.
12. Seeing Machines (March 2026): 4.8M cars on road with licensed DMS (+67% YoY); 1.09M units produced H1 FY2026 (+62%); retains >half of current production volumes.
13. US: no FMVSS for driver monitoring. Governance = manufacturer privacy policy + state biometric patchwork (IL BIPA carries enforcement weight).
14. NHTSA report-to-Congress open questions: false positives; safe-state countermeasures (warnings, speed reduction, stop in lane/shoulder, interlocks); consumer acceptance; unintended consequences.

## Original calculations (show math in article)
- NHTSA's low-end bound: 2,000,000 wrong interventions/year ÷ 9,409 lives saved/year ≈ 213 wrongly interfered-with drivers per life saved (assuming full fleet deployment, which itself takes ~15-20 years of fleet turnover — state assumption).
- 837 (interlocks for convicts) vs 9,409 (universal) → current convicted-only approach captures at most 8.9% of the preventable total.
- Seeing Machines growth: 4.8M cars with licensed DMS, +67% YoY — the camera base is installed; the BAC-detection layer is not.

## Strongest counterargument (full strength)
MADD: 37 deaths/day dwarfs the inconvenience of false positives; a stranded sober driver is annoying, a drunk driver kills. Ignition interlocks already prove the concept for offenders. IIHS: mandate creates the tech (seatbelts/airbags/ESC all looked impossible before regulation). Johns Hopkins survey via IIHS: 65% of Americans agree impairment prevention should be standard — more popular than speed limiters. Europe's ADDW shows mandates can be bounded with privacy law.

## Limitations
- FARS alcohol-impaired deaths are modeled (BAC imputation for untested drivers) — 12,000+ is an estimate.
- 9,409 is a counterfactual model (Farmer, 2015-18), not observed; assumes perfect detection and no behavioral adaptation (e.g., people driving older cars).
- NHTSA's "millions to tens of millions" is a scenario bound, not measured; actual intervention design (warning vs interlock) changes the cost of each error.
- DADSS breath/touch is a different sensor class than distraction cameras — article must not conflate them.
- EU ADDW addresses distraction/drowsiness, not alcohol detection — the parallel is regulatory philosophy, not identical function.
- Fleet turnover: a mandate applies to new vehicles only; full benefit takes decades.

## Actionable takeaways
- If you're buying a new car: read the driver-monitoring privacy section of the privacy policy (not just the manual) — in the US it is the only law governing your cabin camera.
- Disable options: EU-style resets reactivate every ignition cycle; check your own car's behavior.
- Don't expect interlock-class alcohol detection in showrooms soon — DADSS is the furthest along (breath/touch, not camera).
- Real, existing countermeasure: ignition interlocks work for convicted offenders (up to 837/year) — modest, but it's deployed tech, not vaporware.

## Sources (URLs verified verbatim this run)
1. theautowire, "Driver Monitoring Camera Rules: Europe Wrote Them, US Didn't" (Sept 21, 2026) — https://theautowire.com/2026/09/21/eu-driver-monitoring-camera-addw-mandate-us-privacy-gap/
2. stateofsurveillance.org, "19 Months Past Deadline: Where the NHTSA Impaired Driving Rule Stands" — http://stateofsurveillance.org/news/nhtsa-section-24220-impaired-driving-prevention-rulemaking-status-2026/
3. autoblog, "America's Road-Safety Agency Accused of Moving Too Slowly to Save Lives" — https://www.autoblog.com/news/americas-road-safety-agency-accused-of-moving-too-slowly-to-save-lives
4. NHTSA Report to Congress: Advanced Impaired Driving Prevention Technology (July 17, 2023) — https://www.nhtsa.gov/sites/nhtsa.gov/files/2023-07/Report-to-Congress-Advanced-Impaired-Driving-Prevention-Technology_07-17-23.pdf?ref=compliance-hub-wiki.ghost.io
5. IIHS comment to NHTSA docket (David Zuby, March 6, 2024) — https://www.iihs.org/media/807e95d8-8559-44c5-b0d5-5bceadcecc9f/U7RFlQ/RegulatoryComments/comment%25202024-03-06.pdf
6. IIHS/Automotive World, "IIHS: The ultimate solution to impaired driving is in reach" — https://www.automotiveworld.com/news-releases/iihs-the-ultimate-solution-to-impaired-driving-is-in-reach/
7. Streetsblog USA, "Feds to (Finally) Explore Drunk Driving Prevention Tech" — https://usa.streetsblog.org/2020/11/16/feds-to-finally-explore-drunk-driving-prevention-tech
8. DADSS/Driven to Protect WA fact sheet (IIHS 9,409 cite) — https://dadss.org/wp-content/uploads/2025/03/Driven-to-Protect_WA_Fact-Sheet_Ready-for-WA-Review.pdf
9. NHTSA FARS — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
