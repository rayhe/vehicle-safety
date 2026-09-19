# Research Notes — #942 "The Breathalyzer Congress Ordered Doesn't Exist"
**Journalist:** Dale Impactor III (Toxicology Desk Chief) — sarcastic, impairment-as-sports-stats
**Date:** 2026-09-19 | Slug: 942-halt-act-missed-breathalyzer

## Angle (kill-test verdict: PROCEED)
Congress (IIJA §24220, HALT Act) ordered NHTSA to require passive drunk-driving prevention tech in every new passenger vehicle, final rule due Nov 15, 2024. As of June 2026 the rule doesn't exist — NHTSA told Congress the technology isn't accurate enough, and its own math is devastating: even 99.9% detection accuracy would produce "millions to tens of millions" of wrongful lockouts per year. Meanwhile 11,904 Americans died in alcohol-impaired crashes in 2024. Dale's original contribution: run NHTSA's false-positive math transparently with public inputs, and show the asymmetry — the mandate can never work with sensors that don't exist at the accuracy the physics demands. The proven thing (ignition interlocks on convicted offenders, -26% per AAA) only applies to ~1% of drivers.

## Primary sources (verified 2026-09-19)
1. **NHTSA, Report to Congress: Advanced Impaired Driving Prevention Technology (March 2026)** — https://www.nhtsa.gov/sites/nhtsa.gov/files/2026-03/Report-to-Congress-Advanced-Impaired-Driving-Prevention-Technology.pdf — NHTSA's own admission: "detection technology around the legal limit continues to have an error rate that would be unacceptably high... even a 99.9 percent detection accuracy level could result in millions to tens of millions of instances each year where the technology would incorrectly prevent or limit drivers from operating their vehicles, or fail to prevent or limit impaired drivers from doing so." Also: not aware of any technology claiming "anywhere close" to the needed accuracy. Comprehensive economic cost ≈ $14.1M per fatality (2024 dollars).
2. **NHTSA, Traffic Safety Facts 2024: Alcohol-Impaired Driving** — https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813815 — 11,904 fatalities in crashes with ≥1 alcohol-impaired driver = 30% of all 2024 traffic fatalities; down 3.9% from 12,382 (2023); one alcohol-impaired-driving fatality every 44 minutes; 21–24 age group highest share (28%); males 22% vs females 16%.
3. **stateofsurveillance.org, "19 Months Past Deadline: Where the NHTSA Impaired Driving Rule Stands" (June 13, 2026)** — http://stateofsurveillance.org/news/nhtsa-section-24220-impaired-driving-prevention-rulemaking-status-2026/ — Nov 15, 2024 deadline missed; as of June 13, 2026 no NPRM and no final rule; ANPRM Jan 5, 2024 (89 FR 830) drew 18,367 comments; info collection on a telltale indicator Dec 15, 2025 (90 FR 58079); most recent docket entry: June 9, 2026 meeting memo with Driven By Safety.
4. **AAA, Impaired Driving state briefs (June 2026)** — https://newsroom.aaa.com/wp-content/uploads/2026/08/Impaired-Driving-State-Briefs-New-York-June-2026.pdf — countermeasure effectiveness: requiring all offenders to install ignition interlock devices can reduce fatal impaired-driving crashes by up to 26%; lowering BAC to 0.05 → ~11% fewer impaired-driving fatalities; sobriety checkpoints → up to 20%. State ranking based on FARS 2024 ARF impaired fatalities per 100M VMT.
5. **repairerdrivennews.com (May 4, 2026)** — https://www.repairerdrivennews.com/2026/05/04/federal-law-mandating-kill-switches-in-vehicles-remains-intact/ — Massie defund amendment failed 164–268 in January; mandate contemplates passive monitoring that "restricts or prevents vehicle operation" when impairment detected.
6. **reason.com (April 29, 2026)** — https://www.reason.com/2026/04/29/all-new-cars-could-have-mandatory-surveillance-tech-unless-congress-stops-this-mandate/printer/ — Massie: "The car dashboard becomes your judge, your jury, and your executioner"; MADD: "The only purpose of the anti-drunk driving technology is to prevent deaths and injuries caused by drunk driving," does "NOT support a system that collects, stores, or sells driver data"; ACTS' Robert Strassburger (2022): data would "never leave the vehicle," "kill switch" hyperbolic.
7. **factually.co** — https://factually.co/fact-checks/technology/us-new-vehicles-driver-monitoring-requirement-2026-e566c2 — confirms §24220 language: passive monitoring, ignition/speed intervention; late-2026 to 2027 rollout window discussed, 2–3 years implementation after final rule.
8. **NHTSA Labor Day 2026 press release** — https://www.nhtsa.gov/press-releases/drive-sober-or-get-pulled-over-labor-day-2026 — fatal collisions involving an alcohol-impaired driver occur at 3x the rate at night; largest demographic: men 21–34.

## Original contribution (not a synthesis)
Transparent false-positive arithmetic from NHTSA's own accuracy threshold, with public inputs and stated assumptions:
- ~240M licensed drivers in the US (FHWA) × ~2.5 vehicle starts per day × 365 ≈ 219 billion ignition events/year.
- At 99.9% accuracy (1-in-1,000 false positive): ~219M wrongful immobilizations/year.
- At 99.99% accuracy (1-in-10,000): ~22M/year.
- NHTSA's "millions to tens of millions" quote implies an accuracy well above 99.9% — i.e., at 99.99%+ — which "no technology claims to achieve anywhere close" (Report to Congress). Nobody has run this multiplication publicly in the mandate debate; the coverage is all privacy, never the arithmetic that makes the rule technically unwriteable.
- Asymmetry stat: 11,904 alcohol-impaired deaths (2024) vs. the lockout math — the system must be ~10,000x more selective than wrong to keep wrongful lockouts near single-digit millions.

## Strongest counterargument
MADD has long claimed the tech could prevent 9,400+ deaths/year; NHTSA's DADSS program has run since 2008 and keeps improving. The accuracy bar for a mandate is high, but a passive system doesn't need to be a conviction machine — it could escalate (warning → speed limit → immobilize) rather than binary lockout, cutting false-positive cost. And Massie's interlock alternative only covers convicted offenders — a fraction of the ~11,904 annual deaths involve repeat offenders. The data supports the privacy skeptics' fear (nothing is close to ready) AND MADD's urgency (30% of all deaths).

## Limitations (dedicated accounting)
- Starts/day and licensed-driver counts are estimates; the false-positive figure is order-of-magnitude, not a prediction of any real system (real systems may escalate rather than binary-lock, and drivers adapt).
- FARS 2024 alcohol-impaired counts use multiple imputation for missing BACs (Rubin/Schafer method) — the 11,904 includes estimated, not only measured, BACs.
- DADSS lab accuracy numbers are not public; "nothing close to 99.9%" is NHTSA's characterization, not an independently verifiable benchmark.
- Does not model false negatives (impaired drivers the system misses) — the other half of the tradeoff.
- Interlock -26% and checkpoint -20% are AAA's cited estimates for offender populations, not fleet-wide effects of a passive system.

## Actionable takeaways (HARD GATE — must appear in article)
1. The car won't save you yet: the passive mandate has no rule and no sensor, so the tech that works today is the unglamorous ignition interlock — if someone you love has a DUI, push for the interlock, not for a 2027 model year.
2. 0.05 BAC states: Utah already did it; AAA estimates ~11% fewer impaired-driving deaths from a 0.05 limit — that's a legislative action that exists now, unlike the federal sensor rule.
3. Night math: 3x the alcohol-impaired fatal crash rate after dark (NHTSA) — schedule rideshares for late nights, not willpower.
