# Research Notes: The 52-Bin Denominator Problem

## Journalist: Vin Wreckage (Existential Dread)
## Date: 2026-08-01

## Core Finding
The Crash Report's death rates — the numbers readers use to decide if their car is safe — are all calculated using fleet size estimates that collapse 337 vehicle models into just 52 unique fleet size bins. 48 vehicles share the exact same fleet estimate of 131,250. The death rate formula (deaths per 100M VMT) uses VMT = fleet × avg miles driven, so the denominator is a rounded estimate, not a measured quantity.

## Data Evidence

### Fleet Size Distribution (from fars_output.js)
- 337 vehicles in dataset
- Only 52 unique fleet sizes
- Most common bins:
  - 131,250: 48 vehicles
  - 262,500: 34 vehicles
  - 87,500: 33 vehicles
  - 175,000: 31 vehicles
  - 218,750: 22 vehicles
- All fleet sizes are multiples of ~43,750, suggesting they're derived from annual sales data bucketed into a small number of categories

### Impact on Death Rates
Within the 131,250-fleet bin, death rates range from 0.02 (near-zero) to 7.83 (extremely dangerous). The entire range of "safety" classification is built on vehicles that share the SAME denominator.

Example pairs sharing identical fleet estimates:
- Toyota Matrix (rate 0.02, 6 deaths) and Chevrolet Tracker (rate 7.83, 856 deaths) — both fleet 87,500
- A 391x difference in death rate, but same fleet denominator

### Sensitivity Analysis
If a vehicle's true fleet size is 30% higher than estimated:
- A rate of 2.0 becomes ~1.54 (30% lower)
- A rate of 1.0 becomes ~0.77
- This can move a vehicle from "above average" to "below average" on a single estimation error

### Why This Matters
The death numerator (from FARS) is precise — real crash reports, real toxicology. The fleet denominator is an estimate derived from industry sales data and scrappage assumptions. Every rate in the dataset compounds a precise numerator with a bucketed estimate.

## Sources
1. NHTSA FARS database — precise death counts from police crash reports
2. Crash Report's own `fars_output.js` — processed data showing 52 fleet bins
3. NHTS (National Household Travel Survey) — source of average annual VMT estimates
4. US vehicle sales data (industry) — source of fleet size estimates

## Self-Critique Gate
**Is this genuinely surprising after 668 articles?** Yes — this is meta-analysis of the site's own methodology. No previous article has questioned the precision of the denominators. It's the kind of honest accounting that distinguishes data journalism from data decoration.

**Will readers care?** Every reader who checked "is my car safe?" cared about the death rate. Telling them how that number is constructed is accountability journalism.

**Strongest counterargument:** The big gaps are still real. A vehicle with 856 deaths vs 6 deaths is genuinely more dangerous regardless of fleet precision. The bins affect the MAGNITUDE of the rate, not the DIRECTION. This must be stated at full strength.
