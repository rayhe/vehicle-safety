# Research Notes: The Ford E-350 Gets Into Fatal Crashes More Often Than the Mustang

## Angle
The Ford E-350 work van appears in fatal crashes **721 times per 100,000 registered vehicles** — more often than the Ford Mustang (692/100k). Its direct competitor, the Chevrolet Express, manages 223/100k. The E-350 is 3.2x more crash-prone per registered vehicle than its GM rival, yet only 15.7% of its fatal-crash drivers were impaired (fleet average: 20.0%). Sober drivers. Physics, not alcohol.

## Novel Contribution
Cross-tabulating FARS crash-involvement-per-registered-vehicle (a metric no prior Crash Report story used) with NHTSA's 15-passenger-van rollover research shows the E-350's crash problem is a loading/physics story: the van is the classic 15-passenger church/school/shuttle platform, and NHTSA research shows 10+ occupants nearly triples rollover rate in single-vehicle crashes. The Express comparison (same segment, 3.2x gap) isolates the platform, not the job.

## Kill Test
Genuinely surprising? YES. Nobody's mental model of a dangerous vehicle is a white work van driven by a sober plumber. The Mustang comparison is the hook; the Express comparison is the control; the NHTSA physics is the mechanism. Distinct from the orphan draft `e350-commercial-van-killer` (which used the 18x Transit rate gap and was never queued).

## Primary Data (FARS 2014-2023, from fars_output.js)

### Ford E-350 (Van)
- Deaths: 776 (annual 77.6)
- Fatal crash involvements: 1,892
- Fleet: 262,500
- Rate: 2.51 per 100M VMT
- Involvements per 100k fleet: **721** (highest of any van in dataset)
- Impairment: 15.7% (1,152 drivers, 181 impaired; alc 11.6%, drug 7.6%)
- Model-year skew: 84.4% of deaths in pre-2012 model years

### Comparators (involvements per 100k registered vehicles)
- Ford Mustang (Sports Car): 692 — the E-350 beats it
- Ford F-150 (Pickup): 306
- Chevrolet Express (Van): 223 — the E-350 is 3.23x higher
- Ford Transit (Van, E-350's replacement): 55
- Fleet-average impairment across all models: 20.0% (490,736 drivers tested)

### Key Calculations
- E-350 / Express involvement ratio: 721/223 = **3.23x**
- E-350 / Mustang: 721/692 = 1.04x (edges out the sports car)
- E-350 involvement vs F-150: 721/306 = 2.36x
- E-350 impairment 15.7% vs fleet 20.0% vs Mustang 21.9%

## External Sources (3+ primary/verified)

1. **NHTSA 15-passenger van research** (via NHTSA consumer advisories, reported by the Auto Channel / Automotive Fleet):
   - 15-passenger vans with 10+ occupants have a rollover rate in single-vehicle crashes nearly **3x** the rate of lightly loaded vans (<5 occupants).
   - A later NHTSA analysis: a fully loaded 15-passenger van has rollover risk ~**5x** greater than with driver only; risk rises significantly over 50 mph and on curves.
   - 76-80% of those who died in 15-passenger van rollovers were not buckled up.
   - URL: https://www.theautochannel.com/news/2005/05/31/109573.html (quotes NHTSA research directly)

2. **NHTSA 15-passenger van rollover warning** (Automotive Fleet / WANADA reporting NHTSA advisory):
   - "Particularly sensitive to loading"; 30% of 15-passenger vans have at least one significantly under-inflated tire (8+ psi).
   - URL: https://www.automotive-fleet.com/111093/nhtsa-reminds-drivers-of-15-passenger-vans-to-guard-against-rollover-crashes

3. **Ford E-Series history** (Wikipedia, Ford E-Series):
   - Ford retired the E-Series passenger and cargo vans after the 2014 model year, replacing them with the Ford Transit; the E-Series was America's best-selling full-size van since 1980.
   - URL: https://en.wikipedia.org/wiki/Ford_E-Series

4. **Aberdeen News / Courier Journal reporting on church van crashes**:
   - NHTSA's 2001 analysis included the Ford E350, GMC Savana, Dodge Ram Wagon, Chevrolet Express; church vans in fatal crashes lacked electronic stability control despite the federal mandate.
   - URL: https://www.aberdeennews.com/story/news/2018/08/21/wo-more-crashes-four-more-deaths-why-are-churches-still-using-unsafe-vans/116512650/

5. **Adventist Risk Management (NHTSA data)**:
   - Average of 65 Americans die each year riding in 15-passenger vans; ~60% of those fatalities in rollovers; ~70% of fatally injured occupants unrestrained.
   - URL: https://adventistrisk.org/getmedia/9287b518-2f77-4709-a417-e2cc5e999e01/IFS-15PassengerVans-Deadly-NADEN

6. **IIHS, "Life-saving benefits of ESC continue to accrue"** (2011) — ESC effectiveness baseline:
   - URL: https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue

## Limitations
- FARS model-level data cannot split E-350 cargo vans from 15-passenger wagons; the 15-passenger physics explains part, not all, of the involvement rate.
- Involvements-per-registered-vehicle does not normalize miles driven; work vans log more miles than sports cars (the per-VMT rate, 2.51 vs Mustang 6.02, is the honest counterweight).
- The Express comparison controls for segment but not fleet mix (cargo vs passenger share may differ by brand).
- 84.4% of E-350 deaths are pre-2012 model years — the current on-road mix is improving as old vans retire.

## Strongest Counterargument
The involvement-per-fleet metric flatters the comparison: a plumber's E-350 runs 25,000+ miles a year while a Mustang sits in a garage. Per mile driven, the Mustang is 2.4x deadlier (6.02 vs 2.51). The honest version: the E-350 isn't more dangerous per mile, it's more exposed per vehicle — and its exposure comes from doing the most dangerous version of driving (loaded, tall, volunteer drivers) with the least impaired cohort.

## Actionable Takeaways
- If your organization runs a 15-passenger van: fill front seats first, seatbelts mandatory for every seat, check tire pressure before every trip (NHTSA: 30% have a tire 8+ psi low), never load the roof, keep it under 50 mph on curves, and put only experienced drivers behind the wheel.
- Buying used for a church/school/nonprofit: a 2015+ Ford Transit (ESC standard, lower floor, 55 involvements/100k) replaced the E-350 for a reason.
- Check any van's recall status at nhtsa.gov/recalls before buying.
