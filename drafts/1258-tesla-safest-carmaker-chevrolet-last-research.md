# Research: #1258 — The Safest Carmaker in America Is Tesla (and It Isn't Close)

**Slug:** 1258-tesla-safest-carmaker-chevrolet-last
**Journalist:** Axle McScatter (statistical roundup beat; "I ran the numbers")
**Kicker:** By The Numbers
**Date:** 2026-10-23

## The angle (1-2 sentences)
Aggregate FARS 2014-2023 by automaker (fleet-weighted death rate per 100M VMT). Tesla has the lowest fatality rate of any make in America at 0.06; Chevrolet the highest among major makes at 1.37, a 23x gap. Nobody has run this cross-tab; the safety conversation is all about Autopilot crashes while the brand-level data tells the opposite story.

## Kill test
- Genuinely newsworthy? Yes. Counterintuitive: the most-investigated automaker (NHTSA has multiple open Tesla probes, ~2.9M vehicles under FSD scrutiny) has the lowest death rate; the everyday brands (Chevy, Nissan, Honda) top the kill list.
- Novel? Zero coverage in 846 published + 424 queued articles of make-level brand ranking ("deadliest-brand", "safest-make", "make-rank" all return nothing). Original calculation = the cross-tab itself.
- Verdict: PROCEED.

## Primary sources (3+)
1. **NHTSA FARS 2014-2023** (via fars_output.js, 337 models): make-level aggregation computed in /tmp/make-rank.tsv. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. **IIHS fatality statistics / driver death rates**: https://www.iihs.org/topics/fatality-statistics — IIHS's own driver-death-rate series corroborates the method (deaths per million registered vehicle years).
3. **Tesla Vehicle Safety Report** (quarterly, since 2018): Q2 2026 reported 1 accident per 4.53M miles with Autopilot engaged, 2.27M with active safety features, 1.56M without, vs NHTSA national average of 1 crash per 479,000 miles. https://www.tesla.com/VehicleSafetyReport
4. **S&P Global Mobility** (via Automotive Fleet, May 2024): average US vehicle age hit a record 12.6 years in 2024; ~286M vehicles in operation. https://www.automotive-fleet.com/news/average-age-of-vehicles-in-the-us-continues-to-rise
5. **NHTSA FSD investigation context**: ~2.9M Teslas under investigation for FSD traffic-control failures; 13 fatal crashes involving Autopilot identified (Collision Repair Mag, 2025). https://www.collisionrepairmag.com/technology/article/15771364/tesla-self-assessment-tesla-avs-safe-tesla-finds

## The numbers (fleet >= 1M, rate = deaths per 100M VMT)
| Rank | Make | Rate | Deaths | Fleet | Models |
|---|---|---|---|---|---|
| 1 | Tesla | 0.06 | 278 | 3.7M | 4 |
| 2 | Ram | 0.12 | 867 | 5.5M | 3 |
| 3 | Audi | 0.20 | 287 | 1.2M | 5 |
| 4 | Mercedes-Benz | 0.33 | 835 | 2.1M | 8 |
| 5 | Acura | 0.37 | 862 | 2.0M | 8 |
| 6 | Kia | 0.38 | 3,077 | 6.8M | 12 |
| 7 | Subaru | 0.38 | 2,292 | 4.9M | 8 |
| 8 | Saturn | 0.41 | 619 | 1.3M | 7 |
| 9 | Mazda | 0.42 | 1,432 | 2.8M | 11 |
| 10 | Lexus | 0.50 | 1,256 | 2.1M | 8 |
| 11 | Cadillac | 0.62 | 1,389 | 1.9M | 10 |
| 12 | Mitsubishi | 0.63 | 813 | 1.1M | 7 |
| 13 | Volkswagen | 0.71 | 2,234 | 2.6M | 8 |
| 14 | Lincoln | 0.73 | 1,137 | 1.3M | 8 |
| 15 | Dodge | 0.74 | 11,076 | 12.3M | 17 |
| 16 | Jeep | 0.79 | 6,976 | 7.0M | 8 |
| 17 | Hyundai | 0.82 | 6,854 | 7.0M | 11 |
| 18 | BMW | 0.90 | 2,196 | 2.1M | 9 |
| 19 | Toyota | 0.95 | 22,019 | 19.0M | 26 |
| 20 | GMC | 0.99 | 6,758 | 5.3M | 9 |
| 21 | Buick | 1.05 | 3,710 | 3.0M | 11 |
| 22 | Pontiac | 1.07 | 3,038 | 2.5M | 9 |
| 23 | Chrysler | 1.09 | 4,326 | 3.4M | 7 |
| 24 | Ford | 1.17 | 34,954 | 23.9M | 29 |
| 25 | Honda | 1.24 | 17,837 | 11.9M | 11 |
| 26 | Mercury | 1.27 | 1,840 | 1.2M | 5 |
| 27 | Nissan | 1.28 | 14,456 | 9.3M | 19 |
| 28 | Chevrolet | 1.37 | 35,905 | 21.0M | 32 |

Key derived stats:
- Tesla 0.06 vs Chevrolet 1.37 = **22.8x gap**.
- Chevrolet + Ford combined: 70,859 deaths, more than 1 in 3 of all deaths in the dataset.
- Tesla Model Y: 57 deaths on 1.75M fleet, rate 0.03. Model 3: 92 deaths, rate 0.05. Model S: 100 deaths, rate 0.50 (older, performance).
- Chevrolet's rate is driven by dead sedans, not trucks: Cobalt 5.10, Impala 5.00 (3,774 deaths), Malibu-class vehicles. Its pickups (Silverado 1.25) are near the national middle.
- VMT methodology check: implied annual miles/vehicle ~12,000 uniformly across makes (Tesla 12,021; Chevy 12,439; Ford 12,533), so the gap is NOT a VMT-estimation artifact.
- Ram 0.12 with occupant-death-ratio 0.305: the safest brand for its own occupants partly because in 70% of its fatal crashes, someone else dies (see #who-dies-weight-class-hierarchy).

## Original contribution
The make-level aggregation itself: fleet-weighted death rate per 100M VMT across all 28 makes with 1M+ fleet, a cross-tab nobody published. Plus the VMT-uniformity check (implied ~12k mi/yr across makes) ruling out estimation bias as the driver of the Tesla result.

## Limitations (must state in article)
- Tesla's fleet is YOUNG: all 4 models launched 2012+, Model 3/Y (86% of Tesla fleet) from 2017/2020. National average vehicle age is 12.6 years (S&P Global Mobility, 2024). Newer cars have ESC, AEB, better structures; some of Tesla's advantage is youth.
- Demographics: Tesla buyers skew higher-income; wealth correlates with lower crash fatality independent of vehicle.
- Only 4 Tesla models vs 32 Chevrolet models; small-model-count makes have wider uncertainty.
- FARS captures deaths, not injuries or crashes. A brand can have low fatality with high crash rates if its crashworthiness is good.
- estimated_rate uses VMT estimates, not odometer readings; ±15% uncertainty for low-volume models (per methodology).

## Strongest counterargument (must state at full strength)
Brand-level fatality rate is not the same as Autopilot safety. NHTSA has identified at least 13 fatal crashes involving Tesla Autopilot and has ~2.9M Teslas under investigation for FSD failures at traffic controls. A low brand death rate can coexist with a specific driver-assistance defect that kills people in edge cases. Also: the ranking flatters young fleets and punishes brands whose customers keep cars for 20 years. Chevrolet's 1.37 is substantially a legacy-sedan problem (Cobalt, Impala, Cavalier); its current showroom is far safer than its FARS footprint suggests. And Tesla's number will rise as its fleet ages.

## Actionable insight
Shopping used? A 2018 Model 3 (rate 0.05) vs a 2012 Impala-era Chevy sedan (Impala 5.00): the data says the Tesla is ~100x safer per mile. More broadly: when comparing brands, ask for the fleet age and the sedan mix, not just the badge. Check any VIN at nhtsa.gov/recalls.

## Headline candidates
- "We Ranked Every Carmaker by Death Rate. Tesla Won by a Mile. Chevrolet Finished Last."
- "The Safest Car Company in America Is the One NHTSA Won't Stop Investigating"
