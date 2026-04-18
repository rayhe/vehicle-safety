# Research: The Danger Score — A Composite Metric for Used Car Safety

## Angle
Nobody in auto safety literature combines crash frequency (how often a vehicle is involved in a fatal crash per fleet unit) with crash lethality (what percentage of those crashes actually kill someone in this vehicle). NHTSA gives VMT death rates. IIHS gives crash test ratings. Insurance companies track claims. But frequency × lethality as a single composite reveals something none of these capture alone.

## Key Finding
The composite Danger Score spans a 100:1 range across common vehicles. The most dangerous used car (Chevrolet S-10, composite 652) is roughly 100x more dangerous than the safest (Tesla Model 3, composite ~6).

## Data (from FARS 2014-2023, vehicles with fleet >100K and >200 fatal crash involvements)

### Crash Frequency (fatal crashes per 100K fleet vehicles)
- Nissan Maxima: 888.0
- Chevrolet S-10: 864.0
- Chevrolet Impala: 852.4
- Chevrolet Cobalt: 726.5
- Ford E-350: 720.8
- Toyota Solara: 713.9
- Ford Mustang: 692.4
- Honda Accord: 547.6

Safest:
- Tesla Model 3: 13.5
- Honda HR-V: 30.4
- Mazda CX-5: 35.7
- Toyota RAV4: 48.7
- Ram 1500: 49.9

### Crash Lethality (% of fatal crash involvements where this vehicle's occupant died)
- Cavalier: 85.7%
- Neon: 85.6%
- Cobalt: 80.8%
- Saturn Ion: 80.7%
- S-10: 75.5%

Safest:
- Ram 2500: 20.5%
- Ford Transit: 30.8%
- Ram 1500: 34.1%
- Chevrolet Traverse: 39.3%

### Composite Danger Score (frequency × lethality / 100)
WORST:
1. Chevrolet S-10 PICKUP: 652.3 (freq 864, lethality 75.5%)
2. Nissan Maxima: 587.9 (freq 888, lethality 66.2%)
3. Chevrolet Cobalt: 587.0 (freq 726.5, lethality 80.8%)
4. Chevrolet Impala: 575.4 (freq 852.4, lethality 67.5%)
5. Toyota Solara: 489.0 (freq 713.9, lethality 68.5%)

SAFEST:
1. Tesla Model 3: ~5.9 (freq 13.5, lethality 43.4%)
2. Honda HR-V: ~16.2 (freq 30.4, lethality 53.4%)
3. Mazda CX-5: ~15.4 (freq 35.7, lethality 43.2%)
4. Ram 1500: ~17.0 (freq 49.9, lethality 34.1%)
5. Toyota RAV4: ~24.3 (freq 48.7, lethality 49.8%)

## Novel Contribution
- Composite metric that multiplies two orthogonal risk dimensions
- Shows danger comes from two different pathways: getting INTO crashes vs SURVIVING crashes
- The pathways are independent — some vehicles are bad at both (Cobalt, S-10), good at both (Model 3, CX-5), or split (E-350: very crash-prone but low lethality; Grand Caravan: rarely crashes but highly lethal when it does)
- Methodology is transparent and reproducible

## Sources
1. NHTSA FARS 2014-2023 bulk data
2. IIHS fatality statistics (context)
3. NHTS annual VMT estimates

## Limitations
- FARS only tracks FATAL crashes — not all crashes. A vehicle could be in fender-benders constantly but never appear in FARS.
- Fleet estimates use sales proxies, not actual registrations (±15% uncertainty)
- "Lethality" here means "% of fatal crash involvements where this vehicle's occupant died" — some involvements only kill the OTHER vehicle's occupant
- Older vehicles dominate the worst list because they're both structurally weaker AND driven by different demographics
- Does not control for driver demographics, geography, or usage patterns

## Counterargument
The strongest counterargument: this metric double-counts vehicle age. Old vehicles have both high crash frequency (driven by different demographics, less safety tech, more maintenance issues) AND high lethality (less structural protection). The composite may just be measuring "how old is the average example" rather than anything intrinsic about the vehicle design. Counter-counter: even if age is a confounder, the composite is still useful for used car buyers, who face exactly this combined risk.

## Actionable Takeaways
- Specific vehicles to avoid in the used market
- How to use the two-axis framework when shopping: check BOTH frequency and lethality
- Some expensive vehicles (BMW 3 Series, freq 529, lethality 59.4%) are worse than cheap ones (Kia Forte, freq 68.9, lethality 66.8%)
