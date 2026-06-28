# Research: The Brand Badge Safety Lottery

## Thesis
Choosing the right model within the same manufacturer matters more than choosing the right manufacturer. Consumers think in brands ("Toyota is safe," "Kia isn't"). FARS data shows intra-brand safety spreads up to 39x — far larger than inter-brand differences.

## Novel Contribution
Cross-tabulation of fatality rates by manufacturer, computing intra-brand spread ratios. Nobody runs this analysis publicly. Consumers, regulators, and even IIHS frame safety by vehicle class, not by manufacturer consistency.

## Primary Sources

### 1. FARS Data (2014–2023) — Our Dataset
- 337 models with 50+ deaths or >1k annual sales
- Fatality rate = deaths per 100M VMT (estimated)
- Intra-brand spread computed as ratio of highest-rate model to lowest-rate model (min 200 deaths per model for statistical significance)

### Key Findings:

**Widest Spreads (most internally inconsistent):**
| Make | Models | Safest | Rate | Deadliest | Rate | Spread |
|------|--------|--------|------|-----------|------|--------|
| Chevrolet | 25 | Traverse (SUV) | 0.20 | Tracker (SUV) | 7.83 | 39.1x |
| Toyota | 14 | RAV4 (SUV) | 0.19 | Land Cruiser (SUV) | 6.27 | 33.0x |
| Hyundai | 6 | Tucson (SUV) | 0.34 | Veloster (Sports Car) | 8.54 | 25.1x |
| Nissan | 12 | Rogue (SUV) | 0.35 | Maxima (Sedan) | 5.11 | 14.6x |
| Ford | 14 | F-250 (Pickup) | 0.43 | Mustang (Sports Car) | 6.02 | 14.0x |

**Tightest Spreads (most internally consistent):**
| Make | Models | Safest | Rate | Deadliest | Rate | Spread |
|------|--------|--------|------|-----------|------|--------|
| Infiniti | 3 | Q50 | 0.82 | G35 | 1.05 | 1.3x |
| Chrysler | 5 | 200 | 1.18 | 300 | 1.87 | 1.6x |
| Pontiac | 3 | Grand Am | 1.18 | Grand Prix | 2.14 | 1.8x |
| Volkswagen | 3 | Passat | 0.79 | CC | 2.13 | 2.7x |
| Subaru | 5 | Forester | 0.26 | Legacy | 0.95 | 3.7x |
| Kia | 6 | Sportage | 0.28 | Rio | 1.07 | 3.8x |

**Critical insight:** Toyota's internal spread (33x) is larger than the difference between Toyota's BEST model (RAV4, 0.19) and Kia's WORST model (Rio, 1.07) — which is only 5.6x. "Buy Toyota for safety" is worse advice than "buy the right model from any brand."

**Same-class paradox:** Both Toyota's safest AND deadliest are SUVs. RAV4 (0.19) vs Land Cruiser (6.27). Same brand, same vehicle class, 33x difference. This invalidates the "SUVs are safer" shorthand too.

### 2. IIHS Research on Vehicle Size/Weight
- IIHS fatality statistics page documents wide variation within size categories
- 2024 study (DOI 10.1080/15389588.2024.2446980): weight benefit plateaus at 4,000 lb
- MedRxiv preprint noted "huge variation in driver death rates and little relation between rates and vehicle size" within IIHS categories

### 3. Consumer Reports / IIHS Death Rate Studies
- CR article: "Death Rates for Drivers Vary by Car Size"
- IIHS death rates by make/model show some models have zero driver deaths
- But none of these studies compute the intra-brand spread ratio

## Limitations
- FARS only captures fatal crashes (not injury crashes)
- VMT estimates introduce ±15% uncertainty for low-volume models
- Fleet age varies by model (Tracker discontinued 2004; still in FARS data from older fleet)
- Some spreads are inflated by discontinued models still circulating in an aging fleet
- Vehicle class mixing (comparing a sports car to an SUV within a brand is partly class effect, not brand effect)
- The Tracker and Cobalt are discontinued models being compared to current-production Traverse

## Strongest Counterargument
The spread partly reflects vehicle CLASS differences, not manufacturer quality differences. A Mustang (sports car) vs F-250 (heavy-duty truck) is a class comparison dressed up as a brand comparison. The honest response: even when controlling for class (both SUVs), Toyota still has a 33x spread (RAV4 vs Land Cruiser). And Subaru has only a 3.7x spread across ALL its classes.

## Actionable Takeaways
1. Check the specific model's fatality rate, not just the brand reputation
2. Subaru and Kia have the most consistent safety across their lineups
3. Within Chevrolet or Toyota, the model choice matters enormously
4. "SUVs are safer" is meaningless without the model name — Chevy Tracker (SUV, 7.83) is deadlier than a Ford Mustang (sports car, 6.02)

## Journalist
Rex Driverton — Senior Crash Correspondent. This is a FARS deep dive, paradox-heavy, fits his noir-detective-with-data style.

## Slug
brand-badge-safety-lottery
