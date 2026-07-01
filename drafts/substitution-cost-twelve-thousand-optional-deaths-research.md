# Research Notes: Substitution Cost — 12,778 Optional Deaths Per Year

## Angle
Cross-class substitution cost analysis. If every vehicle in the FARS dataset performed at least as well as the 25th percentile death rate in its own class, **12,778 fewer people would die per year**. That's 66.8% of all occupant deaths in the dataset. Two out of three vehicle deaths are optional — a consequence of choosing a below-average car when a better one was sitting on the same lot.

## Why Q25 and not the minimum?
Using the class minimum inflates the estimate to ~17,983/yr (94.1%), but the minimum is often Tesla (Model Y for SUVs, Model 3 for sedans) or a low-volume vehicle with selection bias. The 25th percentile is conservative, defensible, and still devastating: it doesn't ask for perfection, just "not bottom three-quarters."

## Key data (FARS 2014–2023, 337 models)

### Totals
- **191,193 total deaths** across classes with 4+ models (50.3% of all US road deaths)
- **Q25 benchmark:** 63,413 expected → **127,780 avoidable** (66.8%)
- **Per year:** ~12,778 avoidable

### By class (sorted by avoidable deaths)
| Class | Models | Deaths | Q25 Rate | Q25 Model | Avoidable @Q25 | % Avoidable |
|-------|--------|--------|----------|-----------|----------------|-------------|
| Sedan | 145 | 89,127 | 0.40 | Kia Forte | 63,482 | 71.2% |
| SUV | 121 | 46,442 | 0.16 | Lexus GX | 32,892 | 70.8% |
| Pickup | 25 | 41,593 | 0.43 | Ford F-250 | 21,746 | 52.3% |
| Van | 28 | 7,897 | 0.23 | Dodge Caravan | 5,100 | 64.6% |
| Sports Car | 17 | 6,134 | 0.69 | Porsche 911 | 4,560 | 74.3% |

### Top individual contributors to avoidable deaths
1. Honda Accord — 6,177 avoidable (rate 3.07, Q25 benchmark 0.40)
2. Honda Civic — 5,388 avoidable (rate 2.25)
3. Chevrolet Silverado — 6,292 avoidable (rate 1.25, Q25 benchmark 0.43)
4. Ford F-150 — 5,393 avoidable (rate 1.04)
5. Toyota Camry — 5,081 avoidable (rate 2.03)
6. Nissan Altima — 4,122 avoidable (rate 2.88)
7. Toyota Corolla — 3,876 avoidable (rate 1.85)
8. Ford Explorer — 3,403 avoidable (rate 1.54)

## Novel contribution
No existing vehicle-safety.org story aggregates substitution cost across all classes with a percentile benchmark. Related stories cover:
- `one-swap-beats-a-decade.html` — individual vehicle swaps (sedan→SUV), not cross-class aggregate
- `excess-lethality-class-benchmark.html` — excess vs class-average lethality, not substitution cost
- `same-showroom-43x-safety-gap.html` — within-brand gaps, not economy-wide aggregate
- `class-is-a-lie.html` — class as a poor predictor, different angle

## Limitations (must include in article)
1. **Driver selection bias:** Safer vehicles may attract safer drivers. Tesla, Volvo, Subaru skew toward cautious demographics.
2. **Fleet age confound:** Newer models have lower rates partly because newer = more safety tech + younger fleet = less exposure time.
3. **Partial coverage:** Dataset covers 50.3% of US road deaths (191K/380K). Missing: motorcycles, pedestrians, cyclists, vehicles with <50 deaths.
4. **Rate metric:** Deaths per 100M VMT assumes uniform driving patterns. Rural highway miles ≠ suburban commute miles.
5. **Not a pure engineering measurement:** A vehicle's death rate reflects design + demographics + usage patterns. Separating them is the hardest problem in traffic safety.

## Strongest counterargument
The 25th percentile vehicle in each class might be safe not because of better engineering but because of who buys it. A Kia Forte (Q25 sedan benchmark, rate 0.40) skews toward newer fleet and different demographics than a Honda Accord (rate 3.07, much older fleet). The substitution cost is real, but attributing it entirely to "vehicle choice" overstates the engineering contribution and understates the demographic one.

## Sources
1. NHTSA FARS 2014–2023 (bulk CSV, processed into fars_output.js)
2. NHTS annual VMT estimates
3. US vehicle sales (public industry data)

## Journalist
**Vin Wreckage** — Existential Dread beat. Last used: #400. This is cosmic absurdity territory.

## Kicker
**Existential Dread**
