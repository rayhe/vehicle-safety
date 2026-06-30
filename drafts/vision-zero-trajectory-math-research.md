# Research: Vision Zero Trajectory Math

## Angle
NHTSA adopted Vision Zero in January 2022 ("the only acceptable number of deaths: zero"). Since then, deaths have declined from the COVID spike, but the math shows that zero is centuries away at any observed rate of decline. This is original analysis: nobody has projected when Vision Zero actually arrives.

## Journalist
Vin Wreckage — Existential Dread Columnist

## Key Data Points

### NHTSA 2024 FARS Final
- 39,254 deaths in 2024
- Rate: 1.19 per 100M VMT
- First time below 40K since 2020
- Source: NHTSA "2025 Traffic Death Estimates & 2024 FARS" (nhtsa.gov)

### Historical Annual Deaths (FARS)
| Year | Deaths | Rate/100M VMT | Change |
|------|--------|---------------|--------|
| 2014 | 32,744 | 1.08 | -0.5% |
| 2015 | 35,484 | 1.15 | +8.4% |
| 2016 | 37,806 | 1.19 | +6.5% |
| 2017 | 37,473 | 1.17 | -0.9% |
| 2018 | 36,835 | 1.14 | -1.7% |
| 2019 | 36,355 | 1.11 | -1.3% |
| 2020 | 39,007 | 1.34 | +7.3% |
| 2021 | 43,230 | 1.38 | +10.8% |
| 2022 | 42,514 | 1.34 | -1.7% |
| 2023 | 40,990 | 1.26 | -3.6% |
| 2024 | 39,254 | 1.19 | -4.2% |

Source: NHTSA FARS Final File 2013-2022, FARS ARF 2023, 2024 final (crashstats.nhtsa.dot.gov)

### Vision Zero Projections (original calculation)

**Scenario A: Post-spike decline continues (~4.2%/year, 2022-2024 pace)**
- Deaths = 39,254 × 0.958^n
- Under 10,000: ~33 years → **2057**
- Under 1,000: ~86 years → **2110**
- Under 100: ~139 years → **2163**
- Under 1 (Vision Zero): ~247 years → **2271**

**Scenario B: Pre-COVID decade trend (2014-2019)**
- Rate INCREASED from 1.08 to 1.11 (not declining)
- Deaths went from 32,744 to 36,355 (+11%)
- Trajectory: Vision Zero arrival = **never**
- Deaths stabilize at 36,000-39,000 indefinitely

**Scenario C: Historical best sustained decline (late 1980s-early 1990s)**
- Deaths fell from ~47,000 (1988) to ~33,000 (2014) = -30% over 26 years
- Annual rate: ~1.4% decline per year
- At 1.4%/year from 39,254: under 100 → ~415 years → **year ~2441**

**Key insight:** Even the most optimistic scenario (Scenario A) has Vision Zero arriving in the 23rd century. The pre-COVID reality (Scenario B) never gets there. The historical best (Scenario C) puts it in the 25th century.

### NHTSA's Own Language
- 2022: "USDOT adopted a comprehensive road safety plan to bring the number of roadway deaths to the only acceptable number of deaths: zero"
- 2024: "striving for the day when we will see zero deaths on our nation's roads"
- No target year has ever been set

### Mathematical Note
Exponential decay asymptotically approaches zero but never reaches it. The projection to "under 1 death" is the closest mathematical analog to zero. True zero requires structural change (removing the activity that produces deaths), not rate improvement.

## Novel Contribution
First projection of Vision Zero arrival date using actual FARS trajectory data. Cross-references three scenarios against observed rates of decline.

## Limitations
- Post-2022 decline may be reversion from COVID behavioral spike, not a new intervention
- Autonomous vehicle adoption could create a step-function decline not captured in exponential models
- VMT growth is assumed constant; demographic shifts could change driving patterns
- Rate decline ≠ absolute decline when VMT grows

## Strongest Counterargument
Autonomous vehicles at scale (Level 4/5) could eliminate human error (~94% of crashes), creating a structural break. But L4/5 currently accounts for <0.01% of VMT, and even optimistic projections don't have majority adoption before 2050-2060.

## Sources
1. NHTSA, "2025 Traffic Death Estimates & 2024 FARS," nhtsa.gov
2. NHTSA Crash Stats, "Early Estimate of Motor Vehicle Traffic Fatalities in 2024," crashstats.nhtsa.dot.gov
3. NHTSA, "NHTSA Releases 2023 Traffic Deaths, 2024 Estimates," nhtsa.gov
4. NHTSA FARS Final File, 2013-2022
5. USDOT National Roadway Safety Strategy, January 2022
