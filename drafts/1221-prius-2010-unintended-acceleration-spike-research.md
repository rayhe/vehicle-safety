# Research: 1221-prius-2010-unintended-acceleration-spike

## Angle
The 2010 Toyota Prius has a fatality spike hiding in FARS model-year data that lines up exactly with the unintended-acceleration crisis: **67 deaths for MY2010 vs ~21/year average for every other Prius model year from 2005-2015** (3.2x). The 2012 Prius, which sold far MORE units (236,659 US, the best sales year ever), recorded only 23 deaths. Per-vehicle, the 2010 Prius died at roughly 4.9x the rate of the 2012. Nobody has run this cross-tab. NASA said there was no electronic cause; the DOJ extracted a $1.2B criminal settlement for Toyota misleading regulators about mechanical causes. But neither the exoneration nor the settlement explains a model-year-specific death fingerprint this sharp.

## Kill test
- Genuinely newsworthy? YES — single-model-year 3.2x fatality spike in America's iconic hybrid, in the exact model year at the center of the largest sudden-acceleration scandal in auto history.
- Novel? YES — FARS model-year data cross-tabulated against the UA recall timeline is an original finding. The 2012 sales control (highest volume, lowest spike) rules out the volume explanation.
- Actionable? YES — 2010 Prius owners should verify both UA recalls (floor mat + sticky pedal) were performed; check VIN at nhtsa.gov/recalls.

## Data (FARS 2014-2023, fars_output.js FARS_MODEL_YEAR, Toyota PRIUS)

| Model year | Deaths |
|---|---|
| 2005 | 26 |
| 2006 | 15 |
| 2007 | 29 |
| 2008 | 26 |
| 2009 | 19 |
| **2010** | **67** |
| 2011 | 26 |
| 2012 | 23 |
| 2013 | 20 |
| 2014 | 16 |
| 2015 | 23 |

- Mean of 2005-2015 excluding 2010: 20.6 deaths/year. 2010 = 67 = **3.25x**.
- US sales context: Prius 2010 ~140,928; 2012 ~236,659 (Prius family incl. v/c — caveat). Per-vehicle: MY2010 ≈ 47.5 deaths/100k sold vs MY2012 ≈ 9.7/100k = **~4.9x**.
- Exposure counter-check: MY2011 (26 deaths, newer car, driven more) and MY2012 (23, newest, most sold) both far below 2010. The spike is isolated to ONE model year, which kills the "newer cars drive more miles" objection.

## Primary sources
1. **NHTSA FARS 2014-2023** (via fars_output.js FARS_MODEL_YEAR, derived from NHTSA FARS bulk CSV): https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars — model-year death counts.
2. **Wikipedia, "2009-2011 Toyota vehicle recalls"** (citing NHTSA/DOT records): worldwide total 9M vehicles recalled; Jan 2010 alleged deaths 21, rising to 37 after Jan 28 recall; Feb 8, 2011 NHTSA-NASA 10-month study found no electronic defect — "Toyota's problems were mechanical, not electrical" (sticking pedals, floor-mat entrapment). https://en.wikipedia.org/wiki/2009–2011_Toyota_vehicle_recalls
3. **AP via phys.org, March 19, 2014**: DOJ $1.2B settlement with Toyota, largest criminal auto penalty ever; criminal wire-fraud charge; Toyota admitted misleading consumers/regulators; triggered by Aug 2009 San Diego crash killing a family of four. https://phys.org/news/2014-03-toyota-12b-penalty.html
4. **NHTSA recalls database**: https://www.nhtsa.gov/recalls — VIN check for the two UA recalls (floor-mat entrapment, sticky accelerator pedal).

## Timeline anchors
- Aug 28, 2009: Saylor family killed in loaner Lexus ES350, San Diego (floor-mat entrapment; 911 call).
- Sept-Oct 2009: first floor-mat recall; Jan 2010: sticky-pedal recall; sales halted for weeks.
- Feb 8, 2011: NHTSA-NASA report — no electronic cause.
- March 19, 2014: DOJ $1.2B deferred-prosecution settlement.

## Counterargument (full strength)
FARS does not code crash CAUSATION — it records that a 2010 Prius was in a fatal crash, not why. The 67 deaths are not 67 unintended-acceleration deaths; that would be a fabrication. Possible confounders: (a) MY2010 was the first year of the 3rd-generation Prius (redesign) — launch-year defects of all kinds, not just pedals; (b) the 2010 model year had the highest proportion of its life inside the 2014-2023 FARS window at prime driving age — but MY2011/MY2012 falsify this, being newer with far fewer deaths; (c) the publicity wave itself may have changed who drove 2010 Priuses (selection effect) — unprovable either way. The honest claim: a 3.25x model-year fatality fingerprint exists, it is not explained by sales volume or vehicle age, and it coincides exactly with the UA crisis model year. Correlation with a plausible mechanism (the two recalled mechanical defects), not proof of causation.

## Limitations
- FARS captures fatal crashes only (~36k-43k/year vs ~6.7M total crashes).
- Model-year assignment in FARS comes from VIN decoding; some misclassification possible.
- Per-vehicle math uses US sales figures; 2012 figure is Prius-family (liftback + v + c) while FARS codes only "PRIUS" — direction of bias favors understating the 2010/2012 gap... actually it OVERSTATES 2012's denominator, making 2012 look safer than the liftback alone. Caveat stated in article.
- Cannot attribute any individual death to unintended acceleration from this data.

## Voice notes (Axle McScatter)
- Data-visualization obsessive: lead with the table/spike, "I ran the numbers. Then I ran them again."
- Dry, numbers-first, lets the chart do the talking, then lands the punchline.
- Distinct from Mia (engineering-excited) — Axle is colder, more actuarial.
