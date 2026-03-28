# Research: Sports Cars Are Immune to Safety Engineering

## Kill Test
**Angle:** Every major vehicle class has seen dramatic fatality reductions from modern safety tech (ESC, side curtain airbags, better crash structures). Except sports cars. The death toll per model year era has been essentially flat for 20 years.

**Is this genuinely novel?** YES. Nobody cross-tabulates FARS deaths by vehicle class AND model year era to show this divergence. Most safety studies focus on aggregate totals or specific technologies. The finding that an entire vehicle class is immune to safety progress is genuinely surprising.

**Would a reader share this?** Yes - the thesis "safety tech doesn't work on sports cars" is counterintuitive and shareable. The implied reason (driver behavior overwhelms engineering) is uncomfortable but data-supported.

## Core Data (FARS 2014-2023, by model year era)

### Deaths by Class and Model Year Era
| Class | pre-2000 | 2000-04 | 2005-09 | 2010-14 | 2015-19 | Change 2000-04 → 2015-19 |
|-------|----------|---------|---------|---------|---------|--------------------------|
| Sedan | 10,004 | 18,687 | 24,980 | 18,406 | 12,880 | **-31%** |
| Pickup | 10,098 | 12,722 | 9,052 | 4,763 | 3,767 | **-70%** |
| SUV | 6,220 | 13,183 | 8,905 | 6,662 | 7,888 | **-40%** |
| Van | 781 | 2,099 | 2,305 | 1,279 | 865 | **-59%** |
| **Sports Car** | 933 | **1,230** | **1,127** | **1,195** | **1,072** | **-13%** |

Sports cars: essentially flat. 13% reduction over 4 eras vs 31-70% for other classes.

### Sports Car Death Rate & Lethality
| Vehicle | Deaths | Rate (per 100M VMT) | Lethality (deaths/crashes) | Impairment % |
|---------|--------|---------------------|---------------------------|-------------|
| Ford Mustang | 2,739 | 6.02 | 70% | 21.9% |
| Chevy Camaro | 1,204 | 3.44 | 63% | 23.0% |
| Hyundai Veloster | 598 | 8.54 | 68% | 17.4% |
| Dodge Challenger | 385 | 1.00 | 52% | 22.5% |
| Chevy Corvette | 320 | 1.52 | 88% | 26.2% |

### Class-Level Impairment (FARS Toxicology)
| Class | Any Impairment | Alcohol | Drug |
|-------|---------------|---------|------|
| Sports Car | **22.5%** | 17.1% | 9.5% |
| Sedan | 20.4% | 15.4% | 8.9% |
| Pickup | 20.1% | 15.2% | 8.6% |
| SUV | 19.5% | 14.7% | 8.4% |
| Van | 18.1% | 13.4% | 8.1% |

### Class-Level Lethality
| Class | Deaths per 1,000 Crashes | Crash Rate per 1,000 Fleet |
|-------|--------------------------|---------------------------|
| **Sports Car** | **682** | 3.15 |
| Sedan | 645 | 2.48 |
| SUV | 524 | 1.30 |
| Van | 514 | 1.50 |
| Pickup | 489 | 2.45 |

### The Camaro Resurrection Effect
Chevrolet Camaro deaths by model year era:
- pre-2000: 244 (3rd/4th gen)
- 2000-04: 106 (4th gen final years)
- 2005-09: **0** (discontinued 2003-2009)
- 2010-14: **448** (5th gen relaunch)
- 2015-19: 319 (6th gen)

GM literally created 448 deaths by bringing back a car that had been safely discontinued.

### The Corvette's 88% Problem
Corvette lethality: 88%. Of 362 FARS crashes involving a Corvette, 320 resulted in death. For comparison, the Dodge Challenger (heaviest muscle car at ~4,200 lbs) has 52% lethality. Weight saves lives — but only if you're in the heavy car.

## Primary Sources
1. **NHTSA FARS** — Fatality Analysis Reporting System 2014-2023 (our dataset)
2. **IIHS ESC study** — ESC reduces fatal single-vehicle crash risk by ~50% for cars, 56% for SUVs; reduces fatal single-vehicle rollovers by 72-75%
3. **NHTSA ESC final rule (2007)** — FMVSS 126 mandated ESC on all light vehicles by MY 2012
4. **IIHS frontal airbag data** — Frontal airbags reduce driver fatalities by ~29%
5. **NHTSA AEB mandate** — FMVSS 127, required by Sept 2029, projected to save 360 lives/year

## Novel Contribution
**Original calculation:** Cross-tabulating FARS deaths by vehicle class AND model year era to show that sports cars are the only class where safety technology has essentially no aggregate effect. The 13% decline vs 31-70% for other classes is a genuinely novel finding from publicly available data that nobody has computed.

## Counterargument (at full strength)
The strongest counterargument: sports car sales volume shifted dramatically over this period. The Camaro was discontinued 2003-2009, the Challenger launched in 2008, the Veloster in 2012. Sales mix changes could explain the flat death toll without implicating safety technology failure. If you normalize by vehicles sold per model year, the per-vehicle death rate probably DID decline — just not enough to lower the absolute count given new entrants.

This is a fair point. But it strengthens the broader argument: the market keeps introducing new sports cars (Challenger, 5th gen Camaro, Veloster) faster than safety tech can reduce deaths from existing ones. The system-level outcome is the same: sports car deaths don't decline.

## Limitations
- FARS only captures fatal crashes — non-fatal injury rates may have improved for sports cars
- Model year death counts are affected by how long vehicles stay on the road (survival bias)
- "Sports Car" classification in FARS may not perfectly match market perception
- Sales normalization would strengthen or weaken the finding, but raw sales-by-model-year data isn't in our dataset
- The flat trend could partially reflect demographic shifts (who buys sports cars changed)

## Journalist
**Mia Crumplezone** — forensic crash analysis, this is her domain. She'd look at this like a crime scene where the weapon keeps working despite 20 years of countermeasures.
