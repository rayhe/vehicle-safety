# Research: The SUV Safety Growth Paradox

## Angle
ESC reduced pickup deaths by 43% and van deaths by 44% between model-year eras (MY2005-2011 vs MY2012-2018). Sedans improved 29%. SUVs improved only 5.5%. Sports cars got 8% worse. The reason: SUV fleet growth absorbed all per-vehicle safety gains. The "switch to an SUV for safety" advice works individually but is collectively zero-sum.

## Kill Test
**Is this genuinely surprising after 170+ articles?** Yes. We've done individual SUV stories, fleet turnover stories, and class-level comparisons. But we've never quantified how safety tech improvements distribute UNEVENLY across classes, or shown that the ESC mandate — expected to save SUV drivers more than anyone (56% rollover reduction) — barely moved the needle on aggregate SUV deaths because of fleet growth.

## Primary Sources

### 1. FARS Model Year Data (our dataset, NHTSA 2014-2023)
- Pre-ESC era (MY2005-2011) vs post-ESC era (MY2012-2018) deaths by class:
  - Pickups: 10,810 → 6,149 (43.1% reduction)
  - Vans: 2,767 → 1,538 (44.4% reduction)
  - Sedans: 32,055 → 22,700 (29.2% reduction)
  - SUVs: 11,355 → 10,734 (5.5% reduction)
  - Sports Cars: 1,547 → 1,672 (8.1% increase)
- Total deaths by model year: MY2005 peak at 11,363, declining to MY2023 at 338

### 2. IIHS ESC Effectiveness Study
- ESC reduces fatal single-vehicle crash risk by ~50% for cars and SUVs
- Reduces fatal rollover risk by 72-75%
- NHTSA: ESC reduces fatal single-vehicle SUV crashes by 56%, cars by 38%
- Saved estimated 1,580 lives in 2014 alone, 4,100 in 2010-2014
- Standard on MY2012+ (FMVSS 126)
- Source: https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue

### 3. NHTSA 2025 Preliminary Data (April 2026 release)
- 2025 traffic fatalities: 36,640 (down 6.7% from 2024's 39,254)
- Fatality rate: 1.10 per 100M VMT (2nd lowest ever, behind 2014's 1.08)
- 2024: 39,254 deaths (down 4.3% from 2023's 41,025)
- Source: https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813800

### 4. US Vehicle Market Share Shift
- SUVs/crossovers went from ~33% of new vehicle sales (2012) to ~55%+ (2024)
- Sedan sales collapsed: ~36% (2012) to ~20% (2024)
- Pickup relatively stable at ~18-20%
- This fleet shift means MORE SUVs accumulating VMT and crash exposure

### 5. FARS Fleet Share (our dataset)
- SUVs: 39.6% of fleet, 24.3% of deaths (0.61x overrepresentation — individually safe)
- Sedans: 32.5% of fleet, 46.6% of deaths (1.44x — individually dangerous)
- SUV safety advantage per vehicle is real, but total SUV death count barely moves

## Novel Contribution
Cross-tabulating ESC-era safety improvements by vehicle class reveals that safety technology effectiveness is highly class-dependent in AGGREGATE outcomes. Per-vehicle, ESC works well for all classes. But fleet growth dynamics mean the class with the biggest sales growth (SUVs) shows the smallest death reduction. This is a Jevons Paradox for vehicle safety: making SUVs safer made people buy more of them, which increased total SUV exposure, which negated the per-vehicle improvement.

## Strongest Counterargument
The 5.5% figure is misleading because it conflates per-vehicle safety improvement with fleet composition change. If we could normalize by fleet size per model year, the per-vehicle improvement for SUVs would likely be comparable to other classes. The "problem" is really just more people buying SUVs — which is actually GOOD because they're individually safer than the sedans they're replacing. The aggregate SUV death stagnation IS the mechanism by which the sedan death count dropped 29%.

## Limitations
- Our death counts by model year don't distinguish whether the victim was the SUV occupant or the other vehicle's occupant
- Fleet size estimates are approximate; actual MY-specific registrations would be more precise
- The ESC transition wasn't binary — many MY2007-2011 vehicles had optional ESC
- Cannot separate ESC effectiveness from concurrent safety improvements (side curtain airbags, better crumple zones, etc.)
- FARS 2014-2023 data means newest model years (2021-2023) have fewer crash-years of exposure, introducing bias

## Journalist
**Axle McScatter** — Data Visualization Editor. Obsessed with numbers, loves paradoxes in data. Kicker: **The Gap**
