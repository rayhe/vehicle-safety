# Research: The Safety Gini — Measuring America's Vehicle Death Inequality

## Angle
Novel application of the Gini coefficient — a standard measure of economic inequality — to per-model vehicle fatality rates in FARS data. The Gini coefficient of 0.53 reveals that your odds of dying in a crash are distributed MORE unequally across vehicle models than income is distributed across American households (US income Gini ≈ 0.39).

## Kill Test
- **Genuinely novel?** YES. Nobody has applied the Gini coefficient to per-model FARS fatality rates. Web search confirms this is original analysis.
- **Novel contribution:** The Gini number (0.53), the bottom-10% concentration (10.8% fleet → 32.5% deaths), the class-level inequality breakdown, and the counterfactual (5,080 lives/year from fixing bottom 10%).
- **Surprising?** YES. Vehicle safety inequality exceeds income inequality. The bottom 10% kill at 3x their fleet proportion.

## Primary Data (FARS 2014–2023, 318 vehicles with fleet ≥87,500 and rate >0)

### Overall Gini Coefficient
- **Gini = 0.53** (0 = perfect equality, 1 = max inequality)
- US income Gini ≈ 0.39 (Census Bureau 2022)
- Brazil ≈ 0.48, South Africa ≈ 0.63
- Vehicle safety inequality sits between Brazil and South Africa

### Distribution Statistics
- Mean fatality rate: 0.89 per 100M VMT
- Median fatality rate: 0.54 per 100M VMT (mean 65% higher than median — right-skewed)
- 10th percentile: 0.13
- 90th percentile: 2.13
- **Ratio 90th/10th: 16.4x** — the most dangerous decile is 16x deadlier per mile driven
- Min: 0.02 (Toyota Matrix, Chevrolet Prizm)
- Max: 8.54 (Hyundai Veloster)
- Full range: 427x

### Gini by Vehicle Class
| Class | Gini | N | Range | Mean Rate |
|-------|------|---|-------|-----------|
| SUV | 0.55 | 118 | 0.03–7.83 | 0.58 |
| Sports Car | 0.49 | 12 | 0.63–8.54 | 2.34 |
| Sedan | 0.47 | 135 | 0.02–5.11 | 1.05 |
| Van | 0.47 | 28 | 0.04–2.51 | 0.63 |
| Pickup | 0.46 | 25 | 0.13–4.83 | 1.14 |

Key insight: **SUVs have the HIGHEST within-class inequality** (Gini 0.55). Buying "an SUV" tells you almost nothing — you could end up in a Chevy Tracker (7.83 rate) or a Tesla Model Y (0.03 rate), a 261x difference.

### The Bottom 10% (31 vehicles)
- **Fleet share: 10.8%**
- **Death share: 32.5%** (3x overrepresented)
- Includes: Hyundai Veloster (8.54), Chevy Tracker (7.83), Ford Mustang (6.02), Nissan Maxima (5.11), Chevy Cobalt (5.10), Chevy Impala (5.00), Honda Accord (3.07), Honda Civic (2.25)
- These 31 vehicles account for 62,378 deaths over 10 years

### The Top 10% (31 vehicles)
- **Fleet share: 7.5%**
- **Death share: 0.6%** (12.5x underrepresented)
- Includes: Tesla Model Y (0.03), Tesla Model 3 (0.05), Subaru Crosstrek (0.08), Mazda CX-5 (0.12), Audi Q5 (0.11)
- Nearly all SUVs or newer crossovers

### Counterfactual Analysis
- If bottom 10% improved to median rate (0.54): **5,080 lives saved annually**
- If ALL vehicles improved to median rate: **7,743 lives saved annually**
- For context: NHTSA's AEB mandate (FMVSS 127) is projected to save 360 lives/year
- Fixing just the bottom decile would save **14x more lives than AEB**

## Sources

1. NHTSA FARS database, 2014–2023 aggregate
   - https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. US Census Bureau income Gini coefficient (0.39, 2022)
   - https://www.census.gov/library/visualizations/interactive/geographic-income-inequality-2022.html
3. NHTSA FMVSS 127 AEB rule — 360 lives/year projection
   - https://www.nhtsa.gov/press-releases/nhtsa-fmvss-127-automatic-emergency-braking-reduce-crashes
4. World Bank Gini index (international comparisons)
   - https://data.worldbank.org/indicator/SI.POV.GINI

## Strongest Counterargument
Rate differences don't solely reflect vehicle design. Driver demographics (age, risk tolerance, wealth, geography) covary with vehicle choice. An Impala's high rate may partly reflect that Impala buyers tend to be younger, lower-income, and rural — not just that the Impala is structurally worse. The Gini captures inequality in OUTCOMES, not necessarily inequality in ENGINEERING. Disentangling the two requires controlling for driver demographics, which FARS doesn't provide at the model level. However: the impairment rate parity across classes (~19-22%) suggests driver behavior is more uniform than vehicle design.

## Limitations
- Fleet size estimates carry ±15% uncertainty, which propagates to rate calculations for low-volume models
- VMT estimates assume uniform driving patterns within vehicle classes (not model-specific)
- Deaths in FARS include all occupants plus pedestrians/cyclists, not just the vehicle's occupants
- The Gini treats each vehicle model as equal; a fleet-weighted Gini would differ
- New vehicles (Tesla Model Y, Kia Telluride) have less exposure time, so their low rates may partly reflect age effects

## Methodology
Gini computed using standard formula: G = (2 × Σ(i × xᵢ)) / (n × Σxᵢ) − (n+1)/n, where xᵢ are fatality rates sorted ascending, i is rank position, n is count. 318 vehicle models with fleet ≥87,500 and rate >0 included.

Counterfactual: for each vehicle, compute median_rate × annual_VMT / 100 × 10 years. Compare to actual deaths.

## Journalist Assignment
Rex Driverton — Investigation
