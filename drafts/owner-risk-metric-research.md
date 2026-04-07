# Research: The Owner Risk Metric — Deaths Per 1M Registered Vehicles

## Angle
NHTSA publishes fatality rates per VMT (vehicle miles traveled). IIHS publishes driver death rates per registered vehicle-years. But neither gives consumers a simple, intuitive number: **if 1 million people own this vehicle, how many die in it per year?**

We can compute this directly from FARS: annual deaths / registered fleet × 1,000,000.

This metric is different from per-VMT rates because it captures the TOTAL risk of ownership — including driving patterns. A pickup that's "safe per mile" but driven 13,500 miles/year may be riskier to own than a sedan that's "deadly per mile" but driven 8,000 miles/year.

## Kill Test
✅ **Novel contribution**: Original calculation of owner risk metric across 337 FARS models. NHTSA doesn't publish this; IIHS publishes driver death rates but by vehicle size class, not by specific make/model with this methodology.
✅ **Genuinely surprising**: The range is 43x (15 to 652 per 1M owners). The safest and deadliest vehicles are NOT what you'd expect from per-VMT rankings.
✅ **Actionable**: Readers can look up their specific vehicle and get a concrete annual risk number.

## Key Data Points (from FARS 2014-2023)

### Highest Owner Risk (annual deaths per 1M registered)
1. Chevrolet S-10 PICKUP: 652
2. Nissan MAXIMA: 588
3. Chevrolet COBALT: 587
4. Chevrolet IMPALA: 575
5. Toyota SOLARA: 489
6. Ford MUSTANG: 482
7. Ford RANGER: 392
8. Dodge DAKOTA: 353
9. Chevrolet TRAILBLAZER: 353
10. Honda ACCORD: 353

### Lowest Owner Risk
1. Mazda CX-5: 15
2. Honda HR-V: 16
3. Volkswagen TIGUAN: 17
4. Ford TRANSIT: 17
5. Ram 1500: 17
6. Ram 2500: 17
7. Ford F-350: 21
8. Chrysler PACIFICA: 23
9. Toyota RAV4: 24
10. Chevrolet TRAVERSE: 25

### Key Findings
- **43x gap**: CX-5 (15) to S-10 (652). Owning an S-10 is 43 times deadlier than owning a CX-5.
- **Modern crossover SUVs dominate the safest list**: CX-5, HR-V, Tiguan, RAV4, Traverse — all compact/midsize crossovers.
- **Heavy-duty trucks are surprisingly safe per owner**: Ram 2500 (17), F-350 (21), Ram 1500 (17). Despite high mass, their owners simply don't die often (low crash involvement + occupant protection).
- **Aging sedans dominate the deadliest list**: Cobalt, Impala, Maxima — all discontinued or aging platforms.
- **Honda Accord at 353** — one of America's most trusted nameplates ranks #10 deadliest. The fleet includes millions of aging models from the 90s-2000s.
- **The metric reshuffles rankings**: Ford Mustang has rate 6.02 per 100M VMT (most lethal by rate) but "only" 482 per 1M owners. Dodge Challenger has rate 1.00 per 100M VMT but 80 per 1M owners — low mileage protects its owners from its bad per-mile rate.

## Methodology
- deaths_per_1M_owners = (total_deaths / 10 years) / registered_fleet × 1,000,000
- Fleet estimates from industry sales data (FARS_BY_MODEL.fleet)
- Filtered to vehicles with ≥100,000 fleet and ≥100 deaths for statistical significance
- VMT estimates from NHTS annual mileage data

## Limitations
- Fleet estimates are approximations from cumulative sales data, not actual registration counts
- Does not distinguish between vehicle age cohorts (a 2005 Accord vs 2020 Accord)
- Assumes uniform ownership patterns across the fleet
- Does not separate driver vs passenger vs other-vehicle deaths
- Annual mileage varies by owner demographics, which correlates with vehicle choice

## Strongest Counterargument
The per-VMT rate is arguably the better metric for evaluating vehicle DESIGN safety because it normalizes for exposure. The owner risk metric conflates design quality with driver behavior and driving patterns. A vehicle could rank as "safe per owner" simply because its owners barely drive it (the Dodge Challenger effect) — not because it's well-engineered.

## Sources
1. NHTSA FARS 2014-2023 (primary data)
2. NHTS Vehicle Miles Traveled estimates
3. US vehicle sales data (fleet estimates)
4. IIHS fatality statistics (comparison methodology)

## Journalist
**Rex Driverton** — FARS deep dives, investigations. This is a data methodology piece that challenges how we measure vehicle safety.

## Kicker
**By The Numbers** — statistical roundup / methodology investigation
