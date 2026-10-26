# Research: #1281 The Car That Always Loses: Chevrolet Cavalier's 86% Death Share

## Angle (1-2 sentences)
In fatal crashes involving a Chevrolet Cavalier, a Cavalier occupant died 86% of the time, the highest occupant-death share of any model with 500+ deaths in a decade of federal crash data. The Cavalier did not crash more often than everything else. It lost more often, and that distinction is the whole story of small-car crash compatibility.

## Kill test
- **Genuinely newsworthy?** Yes. A novel metric cut from the site's own FARS dataset: occupant deaths divided by fatal crashes involving the model. The Cavalier tops the 500+ death list at 0.86, against 0.34 for the Ram 1500. The gap is not impairment (Cavalier 22.4% any-impairment, near the fleet average) and not mileage alone (rate 2.43 per 100M VMT, roughly 19 times the Ram 1500's 0.13 in the same dataset). It is mass, size, and age.
- **Novel vs queue?** Verified against drafts/ slugs: zero Cavalier coverage in 1,280 articles. Nearest neighbors are different stories: Veloster/Tracker sober-deathtrap pieces (rate-based, not death-share-based), the Solara/Camry platform-gap piece, and the Seville/DeVille gap piece. None computed deaths-per-fatal-crash or ranked models on it.
- **Challenge:** Is deaths-per-crash a rigged metric, since FARS only includes crashes where someone died? No, with the definition stated plainly: every crash in the denominator already killed someone. The question the metric answers is *who* died, the model's own occupants or the other party. That is exactly the crash-compatibility question, and the Cavalier answers it worse than any other high-volume car in the data.
- **Verdict:** PROCEED. Killed angles this run: Sierra grille RQ26003 (#1276 and five earlier pieces), Land Cruiser fuel-tube recall (#1230/#1248), Porsche center-lock expansion (#1245), RAV4 PHEV shutdown (#1130/#1166/#1233), IIHS commercial-vehicle ratings (#1110/#1121), IIHS crossover round / Kicks vs Q3 (#1278), Tesla Cybercab AQ26002 and robotaxi school-zone petition (#822/#1145/#1167/#1205/#1240), Hyundai/Genesis seat-motor fire recall (#1173/#1224), comma.ai PE26007 (#978/#1015/#1180).

## Primary sources
1. **NHTSA FARS via the site's fars_process.py / fars_output.js (2014-2023 window):** Chevrolet Cavalier, 1,225 occupant deaths in 1,429 fatal crashes, fatality rate 2.43 per 100M VMT (estimated), fleet estimate 437,500. Deaths are occupant deaths of that model; crashes are fatal crashes involving the model. fars_process.py docstring: "aggregates occupant deaths by make/model."
2. **Same dataset, contrast models:** Ram 1500, 714 occupant deaths in 2,095 fatal crashes (0.34 per crash, rate 0.13); Dodge Neon, 602 deaths in 703 crashes (0.86); Buick LeSabre, 1,344 deaths in 1,633 crashes (0.82); Chevrolet Cobalt, 1,540 deaths in 1,907 crashes (0.81); Chevrolet HHR, 534 in 667 (0.80).
3. **Same dataset, Cavalier toxicology subset:** 767 drivers with toxicology data; 16.2% alcohol-positive, 9.5% drug-positive, 22.4% any impairment. Near-average impairment, so impairment does not explain the death share.
4. **Same dataset, Cavalier deaths by model year:** peaks at 2002 (203 deaths) and 2004 (210 deaths); the final model year was 2005 (82 deaths). The cars doing the dying are the last-generation cars, now 20+ years old.
5. **IIHS, vehicle size and weight:** heavier vehicles protect their own occupants better in multi-vehicle crashes, and the protection gap is a matter of physics, not brand. https://www.iihs.org/topics/vehicle-size-and-weight
6. **IIHS fatality statistics (context):** https://www.iihs.org/topics/fatality-statistics
7. **NHTSA FARS database (method anchor):** https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars

## Key facts (all traced above)
- Cavalier: 1,225 occupant deaths / 1,429 fatal crashes = 0.857, i.e. 86% of fatal crashes involving a Cavalier killed a Cavalier occupant.
- Ram 1500: 714 / 2,095 = 0.341, i.e. 34%. The Cavalier's share is 2.5 times the Ram's.
- Cavalier fatality rate 2.43 vs Ram 1500 0.13 per 100M VMT in the same dataset, roughly a 19x gap per mile.
- Runner-ups on the same metric (500+ deaths): Dodge Neon 0.86 (602/703), Buick LeSabre 0.82 (1,344/1,633), Chevrolet Cobalt 0.81 (1,540/1,907), Chevrolet HHR 0.80 (534/667).
- Cavalier impairment: 22.4% any-impairment among drivers with toxicology data, vs 20.3% for the Ram 1500. Not the explanation.
- Cavalier model-year deaths peak in 2002 (203) and 2004 (210); production ended after model year 2005.
- Annual average: 122.5 Cavalier occupant deaths per year across the 2014-2023 window, from a shrinking fleet of aging cars.

## Original contribution
1. **The who-dies metric:** the site's coverage ranks cars by death rate per mile and by body count. Neither answers the question a buyer of a $3,000 used sedan actually asks: when the bad crash happens, who dies, us or them? Deaths per fatal crash answers it, and the Cavalier is the worst high-volume answer in the data.
2. **The small-car trap, priced:** the Cavalier was America's cheap car, and it is still America's cheap used car. The buyers who can least afford a new car with modern structure are the ones driving the car that loses 86% of its fatal crashes. The safety gap is also a wealth gap, and it compounds as the fleet ages.
3. **Age as the amplifier:** the deadliest Cavalier model years are 2002 and 2004, cars now old enough to vote twice over. The lesson is not just "small cars lose" but "old small cars lose worse," because they predate the side-curtain and stability-control era and their structures have had two decades of rust and deferred maintenance.

## Limitations
- FARS includes only crashes in which someone died, so 86% is the share of *fatal* crashes involving a Cavalier in which a Cavalier occupant died, not the probability of dying in any crash.
- Deaths are occupant deaths of the named model; crashes are fatal crashes involving that model. A crash can involve multiple vehicles, and the other party's deaths are counted under their own model.
- Fleet and VMT figures are the pipeline's estimates from sales and travel-survey data, not NHTSA official rates; the per-mile rates are therefore approximate, while the deaths-per-crash ratio uses only FARS counts.
- Toxicology covers a subset of drivers (767 of the Cavalier's fatal-crash drivers have tox data), so impairment shares are indicative, not census-complete.
- Model-year death counts reflect both the cars' age and how many of each year remain on the road; they are not age-adjusted risk rates.

## Strongest counterargument
A skeptic could say the Cavalier's 86% is mostly a story about who it hits, not what it is: small old sedans are driven disproportionately by young, poor, unbelted drivers on rural roads at night, and they collide with trucks and SUVs that outweigh them two-to-one. Strip out the other vehicle's mass and the road type, and the Cavalier's own structure might look ordinary. Fair, as far as it goes. But the buyer does not get to strip out the other vehicle. The road is full of trucks. The metric measures the car in the world it actually drives in, and in that world it loses.

## Actionable takeaways (required)
- If you drive a Cavalier, Neon, Cobalt, or any 20-year-old economy sedan, understand the trade you made: in a crash bad enough to kill someone, the odds say that someone is you. Drive accordingly, and belt every occupant on every trip.
- If you are shopping at the bottom of the used market, mass and model year beat brand loyalty. A newer, larger car with side-curtain airbags and stability control is worth stretching for over an older, smaller car with a lower sticker price.
- Before buying any used car, check its IIHS ratings and run the VIN at nhtsa.gov/recalls. A cheap car with a fatal flaw is not cheap.
