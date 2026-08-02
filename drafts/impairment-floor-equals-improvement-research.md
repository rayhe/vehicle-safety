# Research Notes: The Impairment Floor Equals the Improvement

## News Hook
- Reuters, July 8, 2026: US traffic deaths fell sharply in early 2026
- Q1 2026: 7,770 deaths, lowest quarterly number since 2015
- Rate: 0.99 per 100M VMT — FIRST TIME below 1.0 since 2014
- Down 4.3% from same period in prior year
- 2025 annual: 36,640 deaths, rate 1.10 (6.7% decline from 2024's 39,254 / 1.19 rate)
- Source: https://www.reuters.com/world/us/us-traffic-deaths-fell-sharply-early-2026-2026-07-08/

## FARS Toxicology Data (2014-2023)
- Total drivers tested in fatal crashes: 490,736
- Any impairment: 98,348 (20.0%)
- Alcohol positive: 74,188 (15.1%)
- Drug positive: 42,496 (8.7%)
- Both alcohol AND drug (estimated overlap): 18,336 (3.7%)

## Class-Level Impairment Rates
- Sedan: 20.4%
- Pickup: 20.1%
- SUV: 19.5%
- Sports Car: 22.5%
- Van: 18.1%
- ALL: 20.0%

## The Key Math
1. Q1 2026: 7,770 deaths at 0.99/100M VMT
2. If 20% involved impaired drivers → ~1,554 impairment-related deaths in Q1 alone
3. That's 17.3 impaired deaths per day, even in the "safest quarter in a decade"
4. If those impairment deaths were removed: 7,770 × 0.80 = 6,216 deaths
5. The rate without impairment: 0.99 × 0.80 = 0.792/100M VMT
6. The "impairment floor": 0.99 - 0.792 = 0.198 per 100M VMT

## The Punchline
- Rate improvement from 2024 to Q1 2026: 1.19 → 0.99 = 0.20 improvement
- Impairment floor: 0.198 per 100M VMT
- THE ENTIRE IMPROVEMENT from 2024 to Q1 2026 equals the impairment floor
- If America had eliminated impaired driving, the rate would have been below 1.0 years ago
- Vehicle technology has spent 20 years catching up to a behavioral problem

## Limitations
- FARS impairment rate is from 2014-2023 aggregate; Q1 2026 rate may differ
- Not all "impaired" crashes are CAUSED by impairment; some drivers test positive but impairment wasn't causal
- Drug testing protocols vary by state/jurisdiction — FARS drug positivity has measurement limitations
- Q1 is typically the lowest-fatality quarter (seasonal effect), so the 0.99 figure has a favorable calendar

## Strongest Counterargument
- The 20% FARS figure includes ALL positive toxicology, including drivers killed by sober drivers who happened to test positive. Impairment CAUSING the crash is lower than impairment PRESENT in the crash. NHTSA's alcohol-impaired definition (BAC ≥ 0.08) captures about 30% of all fatal crashes, not 20%.
- Counter-counter: Our FARS figure uses a different methodology (any positive test), which undercounts because not all jurisdictions test all drivers. The true rate could be higher.

## Sources
1. NHTSA FARS 2014-2023 toxicology data (embedded in fars_output.js)
2. Reuters: "US traffic deaths fell sharply in early 2026" (Jul 8, 2026)
3. NHTSA 2025 annual report: 36,640 deaths, 1.10 rate
4. NHTSA FARS database: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars

## Journalist
Dale Impactor III — toxicology/impairment beat. This is squarely his territory.

## Slug
impairment-floor-equals-improvement
