# Research: NHTSA's Weekend Probe Closure Pattern

## News Hook (June 27-28, 2026)
NHTSA closed two major investigations in one weekend:

### 1. Honda Odyssey Pothole Airbag Probe — CLOSED
- **Vehicles:** 441,002 (2018-2022 Honda Odyssey)
- **Issue:** Side curtain airbags deploying unexpectedly over potholes/speed bumps
- **Timeline:** NHTSA opened preliminary evaluation October 2025 → Honda recalled April 2026 → NHTSA closed probe June 27, 2026
- **Injuries:** 130 warranty claims, 25 injuries, 0 deaths (per Honda's filing, Jan 2017 to April 2026)
- **Fix:** SRS ECU software update ("improved airbag deployment parameters"), or ECU replacement if update fails
- **Closure reason:** Honda issued recall. NHTSA PE closed.
- **Source:** Reuters June 27, 2026

### 2. Tesla Model 3/Y Power Steering Probe — CLOSED  
- **Vehicles:** 376,241 (2023 Model 3 and Model Y)
- **Issue:** Loss of power steering assist, inability to turn wheel or increased effort
- **Timeline:** NHTSA opened PE July 2023 → upgraded to Engineering Analysis early 2024 → Tesla recalled 376K vehicles Feb 2025 → NHTSA closed EA June 2026
- **Fix:** OTA software update preventing overvoltage breakdown of PCB motor drive components
- **Tesla's claim:** Recall was "not in response to NHTSA's investigation"
- **Closure reason:** Tesla issued recall. Investigation closed.
- **Source:** Reuters June 28, 2026

**Combined:** 817,243 vehicles. Two probes closed in 48 hours.

## The Systemic Problem: DOT Inspector General Audit

### OIG Report: "NHTSA Has Not Fully Established and Applied Its Risk-Based Process for Safety Defect Analysis"
- **Date:** June 1, 2023
- **Key finding:** 26 of 27 investigations in the 2018-2019 sample did NOT meet NHTSA's own timeliness targets
- **Preliminary Evaluations:** Averaged **617 days** open (target: 120 days) — 5.1x over target
- **Engineering Analyses:** Averaged **1,001 days** open (target: 365 days) — 2.7x over target
- **Source:** DOT OIG report + Reuters June 2023

### The Pattern
NHTSA's investigation model works like this:
1. Consumer complaints accumulate (often for months/years)
2. NHTSA opens Preliminary Evaluation (PE)
3. If warranted, upgrades to Engineering Analysis (EA) — "final step before recall"
4. Manufacturer issues recall (often "voluntarily")
5. NHTSA closes investigation

**The gap:** NHTSA closes investigations when manufacturers issue recalls. But:
- It doesn't systematically verify fix completion rates
- Recall completion rates average ~70% industry-wide (per NHTSA's own data)
- For the Honda Odyssey: owners may not even know they're affected. Notifications expected late May — over a month after the recall was filed
- For the Tesla: OTA update was pushed, but not all owners accept updates promptly

## Novel Analysis: The Time Asymmetry

| Metric | Honda Odyssey | Tesla Model 3/Y |
|--------|---------------|-----------------|
| Issue first reported | Jan 2017 | July 2023 |
| NHTSA opened probe | Oct 2025 | July 2023 |
| Time from first report to probe | ~8.7 years | ~0 months |
| Time probe was open | 8 months | ~3 years |
| Time from recall to closure | ~2 months | ~16 months |
| Total vehicles affected | 441,002 | 376,241 |

For Honda: The issue existed since 2017. NHTSA didn't open a probe until October 2025 — after 130 warranty claims and 25 injuries. Then closed it within 8 months because Honda recalled.

For Tesla: NHTSA was faster to open (responds to Tesla complaints quickly) but slower to close after the recall (16 months to verify OTA).

## The Counterpoint: Investigations That SHOULDN'T Close

While NHTSA closed these two probes, it simultaneously:
- Has EA26002 open (3.2M Teslas, FSD visibility failures) — escalated March 2026
- Has PE25012 open (2.88M Teslas, FSD traffic violations)  
- Just opened a special crash investigation into the Katy, Texas fatal crash (June 20, 2026 — Tesla Model 3 crashed through house, killed 76-year-old Martha Avila)
- NTSB also opened a separate probe into the same Katy crash

## NHTSA Staffing Context
- NHTSA has **~4 defect investigators per manufacturer** (per prior reporting)
- Covering 6+ million Tesla vehicles alone across multiple open probes
- The same agency that takes 617 days on average to complete a PE can close one in a weekend press release

## Original Contribution
The novel cross-tabulation: measuring the TIME ASYMMETRY between how long it takes NHTSA to open an investigation vs. how quickly they close it once a manufacturer self-recalls. The OIG data (617 days average PE, 1,001 days average EA) vs. closure in a weekend creates a measurable "investigation theater" metric.

## Sources
1. Reuters, "US auto safety regulator closes evaluation of 441,002 Honda Odyssey vehicles after recall," June 27, 2026
2. Reuters, "US safety agency ends power steering probe into 376,000 Tesla EVs," June 28, 2026
3. DOT Office of Inspector General, "NHTSA Has Not Fully Established and Applied Its Risk-Based Process for Safety Defect Analysis," June 2023
4. Reuters, "US auto safety agency fails to meet internal timelines in defect probes, report says," June 2023
5. KBB, "Recall Alert: Honda Odyssey Airbag May Deploy Without Warning," April 2026
6. Memeburn, "Tesla Faces Federal Probe After Fatal Texas Crash," June 2026
7. NHTSA, "Traffic Crash Deaths | 2024 Safety Areas Early Estimates"

## Journalist
**Rex Driverton** — Investigations desk, FARS deep dives. This is systemic accountability journalism.

## Kicker
**Investigation**
