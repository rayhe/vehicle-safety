# Research Notes: The Peltzman Effect Doesn't Show Up in FARS Impairment Data

## Angle
Sam Peltzman's 1975 paper argued that safety regulations cause offsetting behavioral changes — drivers compensate for safety features by driving more recklessly. This theory has been used for 50 years to argue against vehicle safety regulation. But nobody has tested it against the most granular vehicle-level impairment data available: FARS toxicology cross-referenced with per-vehicle fatality rates.

## Novel Finding
Cross-tabulating FARS_BY_MODEL death rates with FARS_TOXICOLOGY impairment rates across 200 vehicles with 100+ deaths and 50+ toxicology samples reveals:

**Impairment is FLAT across all safety quartiles:**
- Q1 (safest vehicles, avg rate 0.33/100M VMT): 19.5% impaired
- Q2 (avg rate 0.69): 20.3% impaired  
- Q3 (avg rate 1.20): 19.9% impaired
- Q4 (deadliest, avg rate 2.92): 20.3% impaired

The spread is 0.8 percentage points across a 9x range in fatality rates. Peltzman's theory predicts Q1 should have HIGHER impairment (safer car → more risk-taking). It doesn't. The rate is essentially constant at ~20%.

## Why This Matters
- The Peltzman Effect has been cited in opposition to mandatory airbags, ESC requirements, and crash structure regulation
- This FARS cross-tabulation is a direct empirical test of the vehicle-level prediction
- Finding: vehicle safety improvements are NOT offset by increased impaired driving
- Policy implication: safety regulation works — at least on the impairment dimension

## Individual Outliers (interesting but don't break the pattern)
- Toyota Solara: 4.25 rate, only 4.1% impaired (95.9% sober crashes)
- Toyota Land Cruiser: 6.27 rate, 8.9% impaired (91.1% sober)
- Pontiac Vibe: 0.54 rate, 25.4% impaired
- Cadillac CTS: 1.32 rate, 25.9% impaired

These outliers cancel out in aggregate: some deadly vehicles attract sober drivers (design problem), some safe vehicles attract impaired ones. The aggregate shows no systematic pattern.

## Counterargument (strongest form)
Peltzman's original paper was about seatbelt laws, not vehicle design. The argument is about *regulation-induced* behavioral change, not vehicle-level selection effects. FARS toxicology tests what TYPE of person drives what TYPE of car — it doesn't test whether the SAME person drives differently in a safer car. This is a selection effect study, not a controlled experiment. The proper counter: impairment rates reflect who buys the car, not how safety features change behavior.

## Response to counterargument
Even granting this distinction, the policy implication is the same: making the fleet safer through regulation does not produce a corresponding increase in impaired driving in the fleet. Whether this is because individuals don't change behavior OR because safer vehicles don't attract riskier drivers, the safety dividend is real and un-offset.

## Limitations
- FARS only captures fatal crashes; non-fatal impairment patterns may differ
- Toxicology testing rates vary by jurisdiction (some states test every driver, some don't)
- Impairment is one dimension of "risk compensation" — drivers might also compensate through speeding, distraction, or reduced seatbelt use
- Fleet composition effects: newer safer vehicles haven't been on roads long enough for full behavioral adaptation

## Sources
1. Peltzman, Sam. "The Effects of Automobile Safety Regulation." Journal of Political Economy, 1975.
2. NHTSA FARS 2014-2023 (our dataset)
3. IIHS research on ESC effectiveness (counterpoint to Peltzman for ESC)

## Journalist
**Dale Impactor III** — Toxicology Desk Chief. This is impairment data analysis, his core beat.

## Kicker
**Investigation** (data deep dive with original finding)
