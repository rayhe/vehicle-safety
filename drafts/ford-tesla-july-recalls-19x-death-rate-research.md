# Research: Ford and Tesla July 2026 Recalls vs FARS Death Rates

## Timely Hook
- **Ford July 2026 recalls:** ~965K vehicles in two weeks
  - Bronco Sport: ~767K (fender flap detachment at high speed)
  - Mustang + Mustang GTD: ~67,842 (windshield wipers malfunction in cold)
  - Mustang Mach-E: ~42,784 (rear differential pinion shaft fracture)
  - Maverick: ~88K (various)
  - Source: USA Today, Reuters, NHTSA July 2026 recall notices
- **Tesla July 2026 recall:** 363K FSD vehicles
  - All vehicles with "Full Self-Driving" software
  - Issues: running stop signs, entering intersections in turn-only lanes, proceeding on yellow
  - Fix: over-the-air software update
  - Source: CNN, NHTSA recall notice
- **Combined:** ~1.33 million vehicles recalled in July 2026

## FARS Data (2014-2023)
### Ford
- Total FARS deaths: 34,954
- Fleet: 23.9M vehicles
- VMT: 299,385 (×100M = 29.94 billion miles)
- Rate: 11.68 deaths per 100M VMT
- Crashes: 64,138
- Deaths per million fleet: 1,463
- Models: 29 (F-150 leads with 9,194 deaths)

### Tesla
- Total FARS deaths: 278
- Fleet: 3.66M vehicles
- VMT: 43,968 (×100M = 4.40 billion miles)
- Rate: 0.63 deaths per 100M VMT
- Crashes: 503
- Deaths per million fleet: 76
- Models: 4 (Model S leads with 100 deaths)

### Ratios
- Death rate: Ford 18.5× higher than Tesla
- Total deaths: Ford 125.7× more than Tesla
- Fleet size: Ford 6.5× larger than Tesla
- Deaths per million fleet: Ford 19.3× higher

## Original Contribution
Novel metric: **FARS deaths per recalled vehicle** — normalizes historical safety performance against July 2026 recall volumes.
- Ford: 34,954 / 965,000 = 36.2 FARS deaths per thousand recalled vehicles
- Tesla: 278 / 363,000 = 0.77 FARS deaths per thousand recalled vehicles
- Ratio: 47×

This metric isn't a causal claim — it's a dimensional comparison showing that the recall system is volume-blind to the underlying safety profile.

## Limitations (MANDATORY)
1. **Fleet age confound:** Ford's fleet spans 40+ model years (1980-2023). Tesla's spans ~10 (2013-2023). Older vehicles are inherently deadlier regardless of brand. A fairer comparison would normalize by fleet-year cohort.
2. **Fleet composition:** Ford makes pickups, vans, sports cars — high-rate categories. Tesla makes sedans and SUVs. Category mix inflates Ford's aggregate rate.
3. **Exposure bias:** Ford vehicles accumulate vastly more VMT because they've been on roads longer. FARS captures cumulative exposure over a decade, not annual performance.
4. **Recall ≠ death reduction:** Neither brand's July recalls address the leading causes of FARS deaths. Ford's recalls fix wipers and fenders. Tesla's fixes intersection behavior. The FARS deaths are driven by speed, impairment, and crash structure — none of which recalls address.

## Strongest Counterargument
If you limited the comparison to 2020-2023 model years only, Ford's newer vehicles (Bronco, Escape, Edge, F-150) have dramatically lower death rates that begin approaching Tesla's. The 18.5× gap is partially an artifact of Ford's decades of old vehicles in the fleet. Tesla has no old vehicles — yet.

## Sources
1. NHTSA FARS 2014-2023 bulk data
2. NHTSA July 2026 recall notices (Ford 26V417000, 26V418000; Tesla FSD recall)
3. Reuters, "Ford recalls nearly 1M vehicles in 2 weeks," July 2026
4. CNN, "Tesla recalling nearly 363,000 vehicles equipped with 'Full Self-Driving'," July 2026
5. USA Today, "Ford recalls nearly 1M vehicles in 2 weeks," July 2026
