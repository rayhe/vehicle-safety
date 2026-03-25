# Research Notes: FSD Investigation vs Safest Fleet

## Angle
NHTSA opened EA26002 on March 18, 2026 — an Engineering Analysis (the stage before a mandatory recall) into Tesla's Full Self-Driving system covering 3.2 million vehicles. These same vehicles have the lowest death rates in the entire FARS database. The article cross-references the investigation with FARS data to reveal a measurement paradox: population-level safety statistics and specific failure-mode investigations measure completely different things.

## Kill Test
- Is this genuinely newsworthy? YES — NHTSA's largest ADAS investigation is 1 week old (March 18, 2026)
- Novel angle? YES — nobody has computed the counterfactual lives-saved figure and juxtaposed it against the investigation's fatality count
- Data-driven? YES — original FARS cross-tabulation with counterfactual analysis

## Primary Sources (3+)

1. **FARS data (2014-2023)** — Tesla Model Y: 0.03 deaths per 100M VMT, Model 3: 0.05, Model S: 0.50, Model X: 0.15. Aggregate Tesla fleet: 278 deaths over 10 years across 3.66M vehicles.
   - Source: NHTSA FARS via our fars_output.js

2. **NHTSA EA26002 Engineering Analysis** — Opened March 18, 2026. 3.2M Tesla vehicles (2016-2026 Model S/X, 2017-2026 Model 3, 2020-2026 Model Y, 2023-2026 Cybertruck). 9 crashes, 1 fatality, 2 injury crashes. Focus: FSD degradation detection system failure in low-visibility conditions.
   - Source: NHTSA ODI, motorillustrated.com reporting, financialcontent.com analysis

3. **GHSA Pedestrian Fatality Data 2024** — 7,148 pedestrian deaths, 80% increase since 2009, 54% from SUVs/pickups
   - Source: GHSA report, ghsa.org

4. **AEB Rule Controversy** — NHTSA AEB rule projected to save 360 lives/year, automaker alliance sued calling it "practically impossible." 95%+ of fleet already has voluntary AEB but without standardized benchmarks.
   - Source: programbusiness.com

## Original Contribution: The Counterfactual Analysis
- Median death rate for vehicles with 200K+ fleet: 0.57 per 100M VMT
- Tesla fleet-weighted rate: ~0.06 per 100M VMT (aggregate)
- If Tesla's 3.66M vehicles had the median death rate: ~251 deaths/year → ~2,506 over 10 years
- Actual Tesla deaths: 278 over 10 years
- **Excess deaths avoided: ~2,228 over decade (~223/year)**
- Class-matched comparison (sedans to sedans, SUVs to SUVs): ~247 lives saved/year
- FSD investigation: 1 fatality. Counterfactual lives saved: ~2,228. Ratio: **2,228 to 1.**

## Key Data Points
| Model | Deaths | Fleet | Rate | Rate vs Median |
|-------|--------|-------|------|----------------|
| Model Y | 57 | 1,750,000 | 0.03 | 19x safer |
| Model 3 | 92 | 1,575,000 | 0.05 | 11x safer |
| Model X | 29 | 157,500 | 0.15 | 3.8x safer |
| Model S | 100 | 175,000 | 0.50 | 1.1x safer |
| **Tesla Aggregate** | **278** | **3,657,500** | **~0.06** | **~10x safer** |

## Toxicology Cross-Tab (Tesla vs Fleet)
- Model S: 24.0% impaired (high — matches luxury sports sedan)
- Model 3: 20.1% impaired (near fleet average)
- Model Y: 17.6% impaired (below average — family SUV demographic)
- Model X: 21.3% impaired (near fleet average)

## Limitations (MUST include)
1. FARS covers 2014-2023 but FSD wasn't widely deployed until ~2020-2021. The low death rates mostly reflect pre-FSD or early-Autopilot era.
2. Tesla fleet is the NEWEST in America — average vehicle age is vastly lower than the national fleet. New cars are always safer.
3. Tesla demographics skew wealthy, educated, suburban — lower-risk driving patterns independent of vehicle technology.
4. The counterfactual is hypothetical — you can't directly attribute the safety gap to Autopilot/FSD vs demographics/vehicle age/passive safety.
5. FARS only records fatal crashes. Injury-only and near-miss incidents are invisible.
6. FSD investigation is about a SPECIFIC failure mode (low-visibility degradation detection), not overall FSD safety.

## Strongest Counterargument
Tesla's safety advantage is largely a demographic artifact. The median Tesla owner is wealthier, drives fewer miles on dangerous rural roads, lives in a suburb with controlled intersections, and owns a brand-new car with the latest passive safety equipment. Put the same owner profile in a 2023 Volvo XC60 or a 2023 Toyota RAV4 and you'd likely see comparable rates. Attributing the gap to Autopilot/FSD is an ecological fallacy.

## Journalist
Rex Driverton — investigations, FARS deep dives. This is a FARS deep dive crossed with a current federal investigation.

## Headline Ideas
- "NHTSA Is Investigating 3.2 Million Vehicles That Kill at 1/14th the National Rate"
- "The FSD Investigation Covers 1 Death. The Counterfactual Covers 2,228."
- "The Safest Fleet in America Is Under the Largest Software Investigation in History"
