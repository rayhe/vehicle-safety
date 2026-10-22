# Research: The Post-Crash Fatality Index (#1237)

## Angle
The Crash Report's headline metric (deaths per 100M VMT) blends two completely different risks: how often a vehicle's occupants end up in a fatal crash, and whether they survive once they're in one. This piece splits them. Define the **Post-Crash Fatality Index (PCFI)** = totalDeaths / crashes, i.e., average occupant deaths per fatal-crash vehicle involvement, computed over FARS 2014-2023 for all 337 nameplates. Nobody has run this ranking.

## Kill test
Genuinely newsworthy? Yes: it reframes every death-rate story on the site, and the gap is enormous and cleanly physical. A Ford Ranger (0.690) and a Ford F-250 (0.364) are both Ford pickups; one kills nearly twice as many of its own occupants per fatal crash as the other. That is not driver behavior. That is mass.

## Primary sources (5)
1. **NHTSA FARS 2014-2023** via the site's own `fars_output.js` (`FARS_BY_MODEL`: `deaths` = occupant fatalities per make/model; `crashes` = vehicles of that make/model involved in fatal crashes; definitions verified in `fars_process.py:aggregate_deaths`). PCFI derived directly.
2. **IIHS, "Supersizing vehicles offers minimal safety benefits — but substantial dangers" (Feb 5, 2025)** — Monfort compatibility study, 2011-16 and 2017-22 two-vehicle crash data; benefits of +500 lbs plateau above the ~4,000 lb fleet average (+7 crash-partner deaths vs -1 own-driver deaths above the line). https://www.iihs.org/news/detail/supersizing-vehicles-offers-minimal-safety-benefits--but-substantial-dangers
3. **IIHS, Vehicle size and weight topic page** — "In a collision involving two vehicles that differ in size and weight, the people in the smaller, lighter vehicle will be at a disadvantage. The bigger, heavier vehicle will push the smaller, lighter one backward during the impact." https://www.iihs.org/topics/vehicle-size-and-weight
4. **Meyers & Flowers analysis of NHTSA 2019-2023 fatal crash data (30,000+ two-vehicle fatal crashes)** — large SUVs ~20% own-occupant fatality share; hatchback occupants vs large SUVs often exceed 50%; 1,000-lb mass differential associated with 40-50% higher fatality risk for the lighter vehicle's occupants. https://www.meyers-flowers.com/data-shows-large-vehicles-protect-their-own-occupants-but-may-endanger-others/
5. **Anderson & Auffhammer (cited via Wikipedia "Crash incompatibility")** — being hit by a vehicle 1,000 lbs heavier generates a 40-50% increase in fatality risk. NHTSA aggressivity concept. https://en.wikipedia.org/wiki/Crash_incompatibility

## Key numbers (PCFI = deaths / crashes, vehicles with >= 2,000 fatal-crash involvements)
| Vehicle | Deaths | Crashes | PCFI | VMT rate |
|---|---|---|---|---|
| Ford Mustang | 2,739 | 3,938 | **0.696** | 6.02 |
| Ford Ranger | 3,089 | 4,476 | **0.690** | 2.91 |
| Chevrolet TrailBlazer | 2,473 | 3,604 | **0.686** | 2.83 |
| Ford Focus | 3,046 | 4,455 | **0.684** | 2.52 |
| Honda Civic | 6,553 | 9,627 | **0.681** | 2.25 |
| Chevrolet Impala | 3,774 | 5,594 | **0.675** | 5.00 |
| Honda Accord | 7,102 | 11,021 | **0.644** | 3.07 |
| Toyota Corolla | 4,945 | 7,713 | **0.641** | 1.85 |
| Chevrolet Silverado | 9,591 | 19,732 | 0.486 | 1.25 |
| Ford F-150 | 9,194 | 20,066 | 0.458 | 1.04 |
| Honda Odyssey | 864 | 2,028 | 0.426 | 0.93 |
| Toyota Tundra | 1,223 | 2,947 | 0.415 | 0.94 |
| Ford F-250 | 909 | 2,499 | **0.364** | 0.43 |
| Ram 1500 | 714 | 2,095 | **0.341** | 0.13 |

Class medians (PCFI, crashes>=2000): Sedan 0.641 (n=16), Van 0.567 (n=3), SUV 0.535 (n=12), Pickup 0.471 (n=10). The whole Mustang-to-Ram-1500 span is a factor of 2.04.

Sanity anchors: every model with PCFI < 1.0 (deaths counted are occupants of the named vehicle only, so per-crash deaths below 1 are expected; values near 0.7 mean the vehicle's occupants die in ~2 of every 3 fatal involvements).

## Original contribution
The PCFI ranking itself: derived from the existing two fields, but never computed or published anywhere. The framing (split crash frequency from crash lethality) is new to the site's coverage.

## Strongest counterargument (must be in the article)
PCFI cannot separate mass from crash-role mix. Heavy pickups are disproportionately the *striking* vehicle in two-car crashes and skew rural; their low PCFI partly reflects that the other car's occupants are the ones dying (those deaths count under the other car, not the truck). Sedans carry commuter occupancy patterns; single-vehicle tree strikes vs multi-vehicle pileups differ by class. So PCFI measures "what happens to YOUR occupants given a fatal crash," which is a function of mass, role, occupancy, and crash configuration combined — not pure crashworthiness. IIHS's Monfort study makes the same point from the other direction: past 4,000 lbs, extra mass buys you almost nothing and costs the other guy dearly.

## Limitations
- FARS covers fatal crashes only; non-fatal injury crashes are invisible, so PCFI says nothing about total injury risk.
- No occupancy normalization: a 3-occupant minivan death counts the same as a solo-driver death.
- Fleet/VMT estimates carry ±15% uncertainty for low-volume models; restricted the ranking to >=2,000 crash involvements to keep noise down.
- Does not control for driver age, belt use, rural/urban, or single- vs multi-vehicle crash mix.

## Actionable takeaways
- If you drive a light car, the physics of two-vehicle crashes works against you — IIHS puts the self-protection sweet spot at midsize vehicles, roughly 3,500-4,200 lbs: enough mass to survive the other guy's truck without becoming the truck.
- Nothing about PCFI changes the first-order advice: belts on, don't speed on two-lane rural roads where head-on truck strikes happen, and a 5-star crash rating in a barrier test does not simulate the F-250 coming the other way.
- Shopping angle: the F-150 (0.458) and Silverado (0.486) survive their own fatal crashes far better than the Ranger (0.690) — size class within the same brand matters.

## Zero queue overlap
Searched status.json slugs/titles for: per-crash, percrash, compatibility, mass, aggressivity, size-weight, physics, once-you-crash, survive-the-crash. Only hit: 987-side-impact-test-trucks-got-heavier (side-impact test story, different angle). Mustang vs Challenger gap (1122) covered death-rate-per-VMT, not deaths-per-crash. No overlap.

## Journalist
Mia Crumplezone (forensic crash analysis; "first 150 milliseconds" beat). Kicker: The Gap.
