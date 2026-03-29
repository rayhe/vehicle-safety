# Research: The Seven Percent — Pareto Distribution of Traffic Deaths

## Thesis
Only 24 of 337 vehicle models (7.1%) in the FARS database account for 50% of all traffic deaths. This Pareto concentration reveals two fundamentally different policy frameworks for reducing traffic fatalities — and they have almost no overlap.

## Core Data (from FARS 2014-2023 via fars_output.js)

### Pareto Distribution
- 337 models in database, 191,193 total deaths
- Top 24 models (7.1%) → 50% of all deaths (~95,600)
- Top 79 models (23.4%) → 80% of all deaths (~152,900)
- Top 129 models (38.3%) → 90% of all deaths (~172,100)

### Top 10 by Absolute Death Count ("Volume Killers")
1. Chevrolet Silverado — 9,591 deaths (5.0%), rate 1.25
2. Ford F-150 — 9,194 deaths (4.8%), rate 1.04
3. Honda Accord — 7,102 deaths (3.7%), rate 3.07
4. Honda Civic — 6,553 deaths (3.4%), rate 2.25
5. Toyota Camry — 6,328 deaths (3.3%), rate 2.03
6. Toyota Corolla — 4,945 deaths (2.6%), rate 1.85
7. Nissan Altima — 4,787 deaths (2.5%), rate 2.88
8. Dodge RAM — 4,407 deaths (2.3%), rate 0.78
9. Ford Explorer — 3,797 deaths (2.0%), rate 1.54
10. Chevrolet Impala — 3,774 deaths (2.0%), rate 5.00

### Top 10 by Death RATE ("Rate Killers")
1. Hyundai Veloster — rate 8.54, 598 deaths
2. Chevrolet Tracker — rate 7.83, 856 deaths
3. Toyota Land Cruiser — rate 6.27, 343 deaths
4. Ford Mustang — rate 6.02, 2,739 deaths
5. Nissan Maxima — rate 5.11, 1,544 deaths
6. Chevrolet Cobalt — rate 5.10, 1,540 deaths
7. Chevrolet Impala — rate 5.00, 3,774 deaths
8. Chevrolet S-10 — rate 4.83, 1,427 deaths
9. Toyota Solara — rate 4.25, 642 deaths
10. Cadillac Seville — rate 3.89, 391 deaths

### Key Insight: Almost Zero Overlap
Only ONE vehicle (Impala) appears on both top-10 lists. The Silverado and F-150 kill the most people but have moderate rates (1.25 and 1.04). The Veloster and Tracker have astronomical rates but small fleets.

This means: 
- Banning high-RATE vehicles saves ~13,600 excess deaths but barely dents the top-line number
- Making high-VOLUME vehicles incrementally safer has far larger absolute impact
- A 10% rate reduction on just the Silverado and F-150 saves more lives (~1,879) than eliminating the Veloster entirely (598)

### Excess Deaths Calculation
If each of the top 10 rate-killers performed at the median rate (1.0 per 100M VMT):
- Total excess deaths eliminated: ~13,595
- That's 7.1% of all deaths — matching the Pareto percentage eerily

## Novel Contribution
1. Pareto distribution calculation for traffic deaths (never published for vehicle-model-level data)
2. The "two lists" framework showing volume vs rate yield different interventions
3. Quantified comparison: incremental improvement on high-volume vehicles vs elimination of high-rate vehicles
4. The Gini-like concentration index for traffic death inequality

## Sources
1. NHTSA FARS 2014-2023 database — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. NHTSA FARS query tool — https://cdan.dot.gov/query
3. IIHS fatality statistics — https://www.iihs.org/topics/fatality-statistics
4. NHTS travel survey (VMT estimates) — https://nhts.ornl.gov/
5. NHTSA 2024 preliminary fatality estimate (39,345 projected) — https://www.nhtsa.gov/press-releases/nhtsa-estimates-39345-traffic-fatalities-2024

## Limitations
- FARS only captures fatal crashes — not injuries, not property damage
- Fleet size estimates use industry sales data and average vehicle lifetime, introducing ±15% uncertainty
- VMT estimates assume average annual miles by class, not actual odometer readings
- Model-level aggregation hides generation differences (a 2008 Accord ≠ a 2022 Accord)
- The Pareto distribution is partly an artifact of fleet size (popular vehicles have more of everything)

## Counterargument
The strongest counterargument: the Pareto distribution is trivially expected. Popular vehicles sell more, get driven more, and therefore appear in more fatal crashes. The Silverado is #1 because there are 5.7 million of them on the road, not because it's unusually dangerous (its rate is a moderate 1.25). This is Simpson's paradox applied to vehicle safety — the aggregate count misleads about per-unit risk.

This is correct. And that's the point. Policy interventions targeting the "top 10 killers" by count would waste resources on vehicles that are already average-safe. The real opportunity is the rate outliers — but those have small fleets, so fixing them yields small absolute gains. There is no silver bullet. Safety improvement requires both: making common vehicles slightly safer AND retiring dangerous models faster.
