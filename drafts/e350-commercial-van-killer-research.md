# Research Notes: Ford E-350 — America's Most Dangerous Commercial Van

## Angle
The Ford E-350 has a FARS fatality rate of 2.51 per 100M VMT — higher than 94% of all vehicles in the dataset. Its replacement, the Ford Transit, has a rate of **0.14**. That's an 18x difference between a legacy commercial van and its modern successor, from the same manufacturer. Every E-350 still on the road represents a quantifiable death sentence compared to the vehicle Ford designed to replace it.

## Novel Contribution
Cross-tabulating E-350 data with its replacement (Transit) and competitor vans reveals the largest safety gap between any vehicle and its direct successor in the FARS dataset. This isn't a "trucks vs cars" story — it's a "your fleet manager's procurement laziness is killing people" story.

## Kill Test
Genuinely surprising? YES. Nobody thinks about commercial work vans when they think about dangerous vehicles. The 18x replacement gap is startling. The E-350 was the backbone of American commercial transport for decades — shuttle buses, ambulances, church vans, delivery vehicles. It's still rolling.

## Primary Data (FARS 2014-2023)

### Ford E-350
- Deaths: 776
- FARS crashes: 1,892
- Fleet: ~263,000
- Rate: 2.51 per 100M VMT (94th percentile)
- Lethality: 0.410 (E-350 occupant dies in 41% of fatal crashes)
- Impairment: 15.7% (1,152 drivers tested, 181 impaired)
- Deaths per 1,000 fleet: 2.96

### Ford Transit (replacement, sold from 2015)
- Deaths: 178
- FARS crashes: 577
- Fleet: ~1,050,000
- Rate: 0.14 per 100M VMT
- Lethality: 0.308

### Other Commercial Vans
- Chevrolet Express: 475 deaths, rate 0.92, lethality 0.487
- GMC Savana: 166 deaths, rate 0.54, lethality 0.532
- Ford Transit Connect: 61 deaths, rate 0.24, lethality 0.377
- Ford E-150: 73 deaths, rate 0.35, lethality 0.422

### Key Calculations
- E-350 vs Transit rate ratio: 2.51 / 0.14 = **17.9x**
- E-350 "death export" ratio: (1892 - 776) / 1892 = 59% — in 59% of E-350 fatal crashes, the E-350 occupant survived while someone else died
- E-350 vs median rate: 2.51 vs 0.54 median = **4.6x the median vehicle**
- E-350 impairment rate (15.7%) is LOWER than fleet average (~35-40%), meaning these crashes are overwhelmingly sober, professional drivers

## External Sources

### NTSB Safety Study SR-02/03 (2002)
- "Evaluation of the Rollover Propensity of 15-Passenger Vans"
- 15-passenger vans (primarily E-350 based) have higher single-vehicle rollover rates than other passenger vehicles
- Loading near capacity raises center of gravity, increasing rollover propensity
- URL: https://www.ntsb.gov/safety/safety-studies/Pages/SR0203.aspx

### NHTSA 15-Passenger Van Warnings
- NHTSA issued multiple consumer advisories about 15-passenger van rollover risk
- The E-350 is the primary platform for 15-passenger conversions
- Rollovers are particularly deadly due to lack of side curtain airbags in most E-Series configurations
- URL: https://www.nhtsa.gov/vehicle-safety/15-passenger-vans

### FMCSA Large Truck and Bus Crash Facts
- Commercial vans classified as "large trucks" when over 10,000 lbs GVWR (E-350 exceeds this)
- FMCSA data shows fleet commercial vehicles have higher crash rates than personal vehicles
- URL: https://www.fmcsa.dot.gov/safety/data-and-statistics/large-truck-and-bus-crash-facts-2022-1

## Counterarguments (must address)
1. **Fleet age confound**: E-350 fleet is older (many pre-2010), Transit fleet is newer. Older vehicles lack AEB, ESC (on some trims), side airbags. This explains SOME of the gap but not all — the Chevy Express is similarly old and has rate 0.92, still 2.7x lower than the E-350.
2. **Mileage bias**: Commercial vehicles may drive more miles than personal vehicles, but VMT estimates should account for this. If anything, high-mileage fleet use would be captured in the VMT denominator.
3. **Upfitter modifications**: E-350s are commonly modified (ambulance conversions, shuttle buses) which add weight and change handling characteristics. This isn't Ford's "fault" per se.

## Limitations
- FARS only captures fatal crashes; E-350 total crash rate (including non-fatal) is unknown from this data
- VMT estimates for commercial vehicles carry higher uncertainty (±20-25%) than personal vehicles
- We can't distinguish E-350 cargo vans from passenger vans from ambulances from shuttle buses in FARS data
- The Transit fleet is newer on average, confounding the direct comparison (but 18x is too large for age alone)

## Journalist Assignment
**Vin Wreckage** — Existential Dread Columnist. This is a cosmic absurdity story: the vehicle that carries church groups and hospital patients is deadlier per mile than a Camaro. Hasn't been used in last 4 articles.

## Kicker: Investigation
