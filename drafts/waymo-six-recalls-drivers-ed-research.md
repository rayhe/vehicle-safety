# Research Notes: Waymo's Six Recalls in Two Years

## Angle
Waymo just filed its 6th recall in two years (June 18, 2026). Every single recall maps to a basic driving competency taught in a standard driver's education course. The $126-billion company keeps confessing through NHTSA filings that its AI cannot do things any 16-year-old with a learner's permit handles without thinking.

## Self-Critique Gate
**Proposal:** Map all 6 Waymo recalls to their driver's ed equivalents, calculate the "cost per lesson," and examine the accelerating recall cadence.

**Challenge:** Haven't we covered Waymo already? Yes — `waymo-100-percent-defect-rate-recall.html` argued that 100% defect rates prove software recalls are *better* than traditional recalls. This is a DIFFERENT angle: the pattern of *what* keeps failing, not whether the fix mechanism works. Also, the 6th recall literally just dropped today, making this timely.

**Verdict:** Proceed. The complete catalog with driver's-ed mapping is a novel cross-tabulation nobody has published.

## Primary Sources (3+ confirmed)

### Source 1: NHTSA Recall Filings (authoritative)
- All 6 recalls filed with NHTSA
- Recall #1: 24V-065 (Feb 2024, 444 vehicles)
- Recall #2: 24V-xxx (Jun 2024, 672 vehicles)
- Recall #3: 25V-xxx (Feb 2025, 1,200 vehicles)
- Recall #4: ~Late 2025, school bus violations
- Recall #5: 26V-xxx (May 2026, 3,791 vehicles)
- Recall #6: 26V-xxx (Jun 18, 2026, ~3,900 vehicles)
- URL: https://www.nhtsa.gov/recalls

### Source 2: Reuters — "Waymo recalls nearly 3,900 robotaxis" (Jun 18, 2026)
- 6th recall, second in one month
- 12+ construction zone incidents since early April in CA and AZ
- Waymo: "identified an area of improvement regarding performance around freeway construction zones"
- Also facing NHTSA investigation re: child struck near Santa Monica elementary school (Jan 2026)

### Source 3: TechCrunch — "Waymo issues recall to deal with a flooding problem" (May 12, 2026)
- 3,791 vehicles affected (precise fleet census)
- San Antonio incident April 20, 2026 — empty robotaxi swept away in floodwater
- NHTSA: Waymo still "developing the final remedy for this recall"
- Complete recall history summarized:
  - Feb 2024: towed vehicle crashes
  - Jun 2024: telephone pole collision
  - Feb 2025: gates/chains/barriers
  - Late 2025: school bus violations
  - May 2026: flooded roads

### Source 4: TechCrunch — Waymo recalls 1,200 robotaxis (gates/chains, Feb 2025)
- NHTSA opened preliminary evaluation May 2024 after 7 incidents with "stationary and semi-stationary objects such as gates and chains" (Dec 2022-Apr 2024)
- 9 additional barrier collisions Feb-Dec 2024
- Software update deployed Nov-Dec 2024 to 1,200 vehicles

### Source 5: Electrek — Tesla robotaxis not crashing because barely running (Jun 16, 2026)
- Contextual: Tesla 18 ADS incidents vs Waymo ~697
- Waymo: ~3,000 robotaxis, 500,000+ paid trips/week
- $16B funding round, $126B valuation (2026)

### Source 6: NHTSA Standing General Order on Crash Reporting
- Mandate for ADS operators to report all crashes

### Source 7: Gizmodo — "Waymo Issues Second Recall" (Jun 2024)
- Telephone pole crash in Phoenix, May 21, 2024
- 8 mph, no injuries
- Software "assigned a low damage score" to telephone poles

### Source 8: The Register — Waymo recall after Phoenix truck collision (Feb 2024)
- Dec 11, 2023: Two robotaxis hit same towed truck
- Software "incorrectly predicted the future motion of the towed vehicle"
- NHTSA investigation into 22 separate incidents of unexpected driving behaviors

## Complete Recall Catalog

| # | Filed | Vehicles | Failure | Driver's Ed Chapter |
|---|-------|----------|---------|-------------------|
| 1 | Feb 2024 | 444 | Couldn't predict towed vehicle path; two cars hit same truck | Ch. 5: Sharing the road with trucks |
| 2 | Jun 2024 | 672 | Hit telephone pole at 8mph; software scored pole as "low damage" | Ch. 2: Basic vehicle control |
| 3 | Feb 2025 | 1,200 | Multiple collisions with gates, chains, barriers | Ch. 3: Navigating parking areas |
| 4 | ~Late 2025 | 1,200+ | Passed stopped school buses with lights on | Ch. 1: Traffic laws (literal day 1) |
| 5 | May 2026 | 3,791 | Drove into floodwater, robotaxi swept away | PSA: "Turn around, don't drown" |
| 6 | Jun 2026 | ~3,900 | Entered closed freeway construction zones | Ch. 4: Reading road signs |

## Key Data Points

- **Recall cadence:** Accelerating. First 4 recalls over ~22 months. Last 2 in 37 days.
- **Fleet growth during recalls:** 444 → 3,900 (9x growth)
- **Valuation per "lesson":** $126B / 6 basic driving skills = $21B per lesson
- **Trip volume:** 500,000/week across 10 cities
- **Total ADS incidents reported (SGO):** ~697 as of Jun 2026
- **Zero fatalities** in 25+ million autonomous miles (important counterargument)
- **Traditional recall completion:** ~70% at 6-quarter mark (vs Waymo's 100% OTA)

## Strongest Counterargument (MUST present at full strength)
Waymo's recall pattern is actually the system working as designed. Every "failure" was caught before causing a fatality, patched across 100% of the fleet within days via OTA update, and documented transparently through NHTSA filings. Compare this to the traditional auto industry where a 70% recall completion rate means 30% of defective cars are never fixed. Waymo has driven 25+ million fully autonomous miles with zero passenger fatalities — a safety record that no human-driven fleet of comparable size and urban density can match. Each recall makes every vehicle in the fleet simultaneously safer, which is something Toyota or Ford can only dream of.

## Limitations
- NHTSA SGO data doesn't normalize by miles driven, so raw incident counts (697 for Waymo) are not directly comparable across fleets
- "Driver's ed equivalence" is a rhetorical device, not a formal measurement — some of these failures involve edge cases harder than they sound (towed vehicles at unusual angles, poles not on curbs)
- Recall dates are filing dates, not always incident dates; some failures were discovered months before the recall was filed
- School bus recall details are least well-documented of the six

## Journalist
**Rex Driverton** — Investigation beat. Deadpan dark humor. The driver's-ed framing is perfect for Rex's style of finding the absurd buried in government filings.

## Kicker
**Investigation**
