# Research Notes: The Three-Investigation Problem

## Angle
NHTSA is running three simultaneous safety investigations covering ~4.3 million vehicles. Together, the model families under investigation account for 39,053 FARS fatalities (2014-2023). The investigations target specific failure modes — engine failures, brake interlock defects, idle stop failures — but even if every defect were perfectly repaired, these vehicles would remain among the deadliest on American roads. The investigations are addressing single variables in a multivariate death equation.

## Kill Test
Is this genuinely newsworthy? YES:
- Timely: All three investigations are active in April-May 2026
- Novel calculation: Nobody has aggregated the three active NHTSA investigations and cross-referenced them against per-model FARS data
- Counterintuitive: People assume investigations target the most dangerous vehicles. In reality, the defects under investigation are fractional contributors to these models' overall death tolls
- Actionable: VIN check links for all three investigations

## Journalist
Axle McScatter — Data Visualization Editor. Next in rotation (last appeared #218). "By The Numbers" kicker. Data roundup, statistical aggregation.

## The Three Investigations

### 1. GM 6.2L V8 Engine Failures (EA25-007)
- **Scope:** ~900,000 vehicles (expanded from 286K). 597,630 already recalled under 25V-274.
- **Models:** 2019-2025 Chevrolet Silverado, GMC Sierra, Chevrolet Tahoe, Suburban, Cadillac Escalade
- **Defect:** Catastrophic bearing/connecting rod failures in L87 6.2L V8. 1,000+ complaints. 36 owners reported failures AFTER recall repair.
- **FARS data:**
  - Silverado: 9,591 deaths, rate 1.25/100M VMT, lethality 0.486
  - Sierra: 3,337 deaths, rate 1.01, lethality 0.471
  - Tahoe: 2,592 deaths, rate 2.49 (!), lethality 0.510
  - Suburban: 593 deaths, rate 1.36, lethality 0.515
  - Escalade: 211 deaths, rate 0.64, lethality 0.467
  - **Subtotal: 16,324 deaths, ~33,497 crashes**
- **Notable:** Tahoe rate of 2.49/100M VMT is one of the highest in the full-size SUV class
- **Sources:** NHTSA.gov investigation EA25-007, GM-Trucks.com, Cedirates.com, TopClassActions

### 2. Honda/Acura Auto Idle Stop Failure
- **Scope:** ~2.2 million vehicles. 1,384 complaints filed.
- **Models:** 2015-2025 Honda Accord, Civic, CR-V, Pilot, Odyssey, Ridgeline, Passport; Acura MDX, RDX, TLX
- **Defect:** Engine fails to restart after auto idle stop at traffic signals/stops. Leaves vehicle stranded in traffic. Already settled ($7,500/owner) but NHTSA opened separate investigation.
- **FARS data:**
  - Accord: 7,102 deaths, rate 3.07/100M VMT (!), lethality 0.644
  - Civic: 6,553 deaths, rate 2.25, lethality 0.681
  - CR-V: 2,072 deaths, rate 0.53, lethality 0.533
  - Pilot: 514 deaths, rate 0.29, lethality 0.453
  - Odyssey: 864 deaths, rate 0.93, lethality 0.426
  - Ridgeline: 84 deaths, rate 0.24, lethality 0.483
  - MDX: 163 deaths, rate 0.30, lethality 0.417
  - RDX: 70 deaths, rate 0.13, lethality 0.452
  - TLX: 33 deaths, rate 0.11, lethality 0.303
  - **Subtotal: 17,455 deaths, ~28,526 crashes**
- **Notable:** Accord has HIGHEST rate of any investigated model at 3.07/100M VMT. Civic lethality of 0.681 is also very high.
- **Sources:** NHTSA, mylemonrights.com, Carscoops ($7.5K settlement), Stocktwits/Reuters

### 3. Ram Brake/Transmission Shift Interlock
- **Scope:** ~1.2 million trucks. Recalled in 2017 and 2018. 20+ complaints that fix failed.
- **Models:** 2013-2016 Ram 1500, 2500, 3500
- **Defect:** Faulty brake/transmission shift interlock allows vehicle to shift out of park without brake depressed. Rollaway risk. Investigation opened because prior recall repairs may have failed.
- **FARS data:**
  - Dodge RAM: 4,407 deaths, rate 0.78, lethality 0.436
  - Ram 1500: 714 deaths, rate 0.13, lethality 0.341
  - Ram 2500: 153 deaths, rate 0.13, lethality 0.205
  - **Subtotal: 5,274 deaths, ~12,953 crashes**
- **Notable:** Ram 2500 has one of the LOWEST lethality ratios in the entire FARS dataset (0.205) — the occupant is very well protected. Deaths are predominantly to OTHER road users (pedestrians, other vehicle occupants).
- **Sources:** NHTSA, NBCPalmSprings, Cedirates.com

## Aggregate Numbers
- **Total investigated vehicles:** ~4.3 million
- **Total FARS deaths (model families):** 39,053
- **Total FARS crashes:** ~74,976
- **Aggregate lethality:** 0.521

## Novel Calculation: The "Investigation Coverage Ratio"
For each investigation, calculate: what fraction of the model family's total FARS deaths could the specific defect plausibly explain?

- **GM engine failure:** Engine seizure at highway speed → loss of power steering/braking → crash. Plausible in high-speed scenarios. But 1,000 complaints out of 900K vehicles = 0.11% complaint rate. Even if 10x underreported, that's ~1% of the fleet experiencing the defect. Applied to 16,324 FARS deaths → maybe 163 deaths could be defect-related. Probably fewer.
- **Honda idle stop:** Vehicle stalls at intersection → rear-end collision risk. Lower-speed scenario. 1,384 complaints out of 2.2M = 0.06%. Applied to 17,455 deaths → probably <100 defect-attributable.
- **Ram shift interlock:** Rollaway → pedestrian strike or property damage. 20+ recurrence complaints. Applied to 5,274 deaths → probably single-digit defect-attributable.

**Key finding:** The three investigations combined might explain <300 of the 39,053 deaths. The other 38,700+ deaths are from the vehicles' baseline risk profile — speed, impairment, vehicle design, road conditions, driver behavior.

## Thesis
NHTSA investigations are necessary. Nobody disputes that. But they create an illusion of coverage — suggesting that the government is addressing the vehicles killing the most Americans. It isn't. The Accord kills 710 people a year. The idle stop defect might contribute to a handful of those. The other 700+ are from the Accord being a high-volume sedan driven billions of miles by millions of people, some of whom are drunk, speeding, or unbuckled. No investigation will fix that.

## Limitations
- FARS data (2014-2023) predates some of the model years under investigation (2019-2025 GM vehicles have limited FARS exposure)
- Cannot isolate defect-attributable deaths from FARS aggregate data
- Complaint-to-incident ratio is inherently uncertain (underreporting is real but unmeasurable)
- The investigation coverage ratio is an estimate, not a measurement

## Strongest Counterargument
"Any investigation that prevents even one death is worthwhile." Correct. And the investigations may uncover systemic problems that affect more vehicles than current complaints suggest. The GM engine failure investigation already expanded from 286K to 900K vehicles. The question isn't whether these investigations matter — it's whether the investigative attention is proportional to the risk these vehicles pose from ALL causes, not just the specific defect.

## References
1. NHTSA FARS 2014-2023: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. NHTSA Investigation EA25-007 (GM 6.2L V8): https://www.nhtsa.gov/recalls
3. GM 6.2L recall 25V-274: https://www.nhtsa.gov/recalls
4. Honda idle stop complaints: NHTSA complaint database
5. Ram shift interlock investigation: NHTSA ODI
6. NSC preliminary fatality data 2025-2026: https://injuryfacts.nsc.org/motor-vehicle/overview/preliminary-monthly-estimates/
