# Research: The Power Law of American Road Death

## Angle
FARS data (2014-2023) across 337 vehicle models reveals an extreme Pareto concentration of fatalities. Half of all 191,193 deaths occur in just 24 models (7.1%). Seven models (2.1%) account for 25% of deaths. The bottom 200 models combined produce only 9% of deaths.

## Original Finding (Novel Cross-Tabulation)
Running a cumulative death concentration analysis across all 337 FARS models:
- **25% of deaths** → top 7 models (2.1%)
- **50% of deaths** → top 24 models (7.1%)
- **75% of deaths** → top 64 models (19.0%)
- **80% of deaths** → top 79 models (23.4%)
- **90% of deaths** → top 129 models (38.3%)

Top 10 models: 60,478 deaths (31.6% of total)
Top 20 models: 88,481 deaths (46.3%)
Bottom 200 models: 17,126 deaths (9.0%)

## The Top 24 (50% of all deaths)
1. Chevrolet Silverado — 9,591
2. Ford F-150 — 9,194
3. Honda Accord — 7,102
4. Honda Civic — 6,553
5. Toyota Camry — 6,328
6. Toyota Corolla — 4,945
7. Nissan Altima — 4,787
8. Dodge Ram — 4,407
9. Ford Explorer — 3,797
10. Chevrolet Impala — 3,774
11. Chevrolet Malibu — 3,465
12. GMC Sierra — 3,337
13. Ford Ranger — 3,089
14. Ford Focus — 3,046
15. Ford Mustang — 2,739
16. Chevrolet Tahoe — 2,592
17. Nissan Sentra — 2,571
18. Chevrolet Trailblazer — 2,473
19. Hyundai Elantra — 2,407
20. Ford Escape — 2,284
21. Jeep Cherokee — 2,276
22. Toyota Tacoma — 2,274
23. Ford Taurus — 2,208
24. Ford Fusion — 2,168

## Why This Matters
- Shows that targeted safety interventions on ~2 dozen models could theoretically halve the national fatality count
- The list is dominated by volume sellers, not inherently dangerous vehicles — fleet size drives body count
- Policy implication: recalls, mandatory safety upgrades, or fleet retirement programs targeting the top 24 would have outsized impact
- Reveals the "popularity penalty" — the most common vehicles aren't the most dangerous per mile, but they produce the most total corpses

## Key Paradox
The Honda Accord has a fatality rate of 3.07 per 100M VMT — above average but not extreme. Yet it's #3 in total deaths (7,102) because 2 million are on the road. Meanwhile, the Hyundai Veloster has a rate of 8.54 (nearly 3x the Accord) but produces only 598 deaths total because the fleet is tiny (87,500).

The deaths-per-fleet analysis confirms: Chevy S-10 has 65.2 deaths per 10K fleet (most dangerous per vehicle), but only 1,427 total deaths. The F-150 has just 14.0 per 10K fleet, but 9,194 total deaths.

## Primary Sources
1. NHTSA FARS (Fatality Analysis Reporting System) 2014-2023: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. NHTSA FARS query tool: https://cdan.dot.gov/query
3. IIHS fatality statistics: https://www.iihs.org/topics/fatality-statistics
4. NHTS annual vehicle miles traveled: https://nhts.ornl.gov/

## Kill Test
✅ Novel: Power law concentration across 337 models has never been published on this site
✅ Surprising: The extreme Pareto (7 models = 25% of deaths) contradicts the intuition that "death is distributed evenly"
✅ Shareable: "50% of crash deaths happen in just 24 models" is a clean one-line hook
✅ Data-backed: Pure FARS computation, fully reproducible
✅ 3+ primary sources: FARS, IIHS, NHTS

## Journalist
Axle McScatter — Data Visualization Editor (statistical roundups, national trends, methodology)

## Kicker
By The Numbers
