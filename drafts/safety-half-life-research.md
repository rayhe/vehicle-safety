# Research: The Safety Half-Life

## Concept
A novel metric: for each vehicle model, compute the **median model year of FARS deaths**. This reveals where in a vehicle's production history the fatalities concentrate.

- **High median year (2015+):** Deaths concentrated in recent models. The vehicle is STILL killing people in its current form.
- **Low median year (pre-2005):** Deaths concentrated in old models. Either discontinued or genuinely improved over generations.

## Kill Test
✅ This is genuinely novel. Nobody has published this cross-tabulation. It's not just "which car has the most deaths" — it's asking which vehicles are *improving* and which are *stagnating* on safety.

## Key Findings

### Still Dangerous in Recent Form (≥300 deaths, produced 2005-2018+)
| Vehicle | Class | Recent% (2015+) | Median Year | Deaths | Rate |
|---------|-------|-----------------|-------------|--------|------|
| Nissan Rogue | SUV | 70.2% | 2017 | 949 | 0.35 |
| Kia Optima | Sedan | 58.1% | 2015 | 602 | 0.58 |
| Chevy Equinox | SUV | 54.5% | 2015 | 1,032 | 0.36 |
| Toyota RAV4 | SUV | 54.1% | 2015 | 897 | 0.19 |
| Hyundai Accent | Sedan | 45.2% | 2013 | 347 | 0.80 |
| Kia Sorento | SUV | 42.7% | 2013 | 405 | 0.29 |
| Subaru Forester | SUV | 42.5% | 2013 | 388 | 0.26 |

### Most Improved (deaths concentrated in old models)
| Vehicle | Class | Old% (pre-2005) | Recent% | Median Year | Deaths | Rate |
|---------|-------|-----------------|---------|-------------|--------|------|
| Ford Ranger | Pickup | 81.0% | 1.7% | 2000 | 3,079 | 2.91 |
| Ford Explorer | SUV | 77.6% | 8.6% | 2002 | 3,778 | 1.54 |
| Ford Expedition | SUV | 71.8% | 5.0% | 2003 | 1,512 | 2.31 |
| Toyota 4Runner | SUV | 71.2% | 11.8% | 2000 | 1,412 | 1.00 |
| Chevy Tahoe | SUV | 69.8% | 5.6% | 2003 | 2,560 | 2.49 |
| Chevy Trailblazer | SUV | 69.3% | 1.3% | 2003 | 2,457 | 2.83 |

### Average Median Death Year by Class
- SUV: 2007.4
- Sedan: 2008.4
- Sports Car: 2009.3
- Van: 2006.0
- Pickup: 2004.7

## Primary Sources
1. NHTSA FARS 2014-2023 — fatality data by make/model/model year
2. IIHS fatality statistics — context for vehicle size/weight
3. IIHS vehicle ratings history — for discussing how ratings evolved
4. NHTS — VMT estimates for rate calculations

## Original Contribution
The "Safety Half-Life" metric itself. Nobody has computed median-death-model-year by vehicle and used it to identify which models improved vs. stagnated across generations.

## Strongest Counterargument
Sales volume bias: vehicles whose sales grew recently (Rogue exploded from ~150K to 350K+ annually) will naturally show higher recent% because there are more recent-model-year units on the road. This metric partially reflects **market success**, not just **safety failure**. Counter-counter: death *rate* per VMT still differs (Rogue 0.35 vs. RAV4 0.19), so it's not purely volume.

## Limitations
1. FARS captures only fatal crashes — vehicles with high recent% might have excellent injury-only crash outcomes
2. Older model years have more accumulated road-years of exposure (a 2004 model has been on the road 20 years vs. 5 years for a 2019)
3. We're using 2014-2023 crash data, so a 1995 model year vehicle that was in a fatal crash must have been 19-28 years old at the time — these are survivors of attrition
4. Discontinued models automatically show 0% recent deaths

## Journalist
**Axle McScatter** — Data Visualization Editor. This is a methodology/numbers piece.

## Kicker
**Trend Watch**
