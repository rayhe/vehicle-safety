# Research: The Model Year Lottery — Some Years Kill Three Times More

## Angle
FARS 2014-2023 data reveals that specific model years produce 2-3x more fatalities than their immediate neighbors — the model year before and after. This pattern appears across brands, classes, and price points. The 2007 Chevrolet Tahoe's death count is 3.36x its neighbor average. The 2019 Ram 1500 is 3.06x. These spikes aren't random noise; they're statistical anomalies that consumers have no way to see before buying a used car.

## Kill Test
- **Genuinely newsworthy?** YES. Model-year-specific death spikes as a cross-vehicle pattern haven't been analyzed. Single-vehicle spike stories exist (Rogue, Elantra), but the multi-brand pattern detection and the consumer information asymmetry angle are novel.
- **Novel contribution:** Systematic spike detection across 323 FARS models. Identification of 19 statistically significant spikes (2.0x+ neighbors, 100+ deaths). Partial correlation with redesign years (~50%).
- **After 398 articles:** No article examines multi-vehicle model year spike patterns as a buying hazard.

## Primary Data (FARS 2014-2023)

### Top Model Year Death Spikes (≥2.0x neighbors, ≥100 deaths)

| Rank | Vehicle | MY | Deaths | Neighbor Avg | Ratio | Redesign? |
|------|---------|-----|--------|-------------|-------|-----------|
| 1 | Chevrolet Tahoe | 2007 | 158 | 47 | 3.36x | YES (GMT900) |
| 2 | Ram 1500 | 2019 | 156 | 51 | 3.06x | YES (DT platform) |
| 3 | Hyundai Elantra | 2013 | 338 | 130 | 2.60x | No (mid-gen) |
| 4 | Chrysler Town & Country | 2005 | 201 | 79 | 2.54x | Partial (refresh) |
| 5 | Jeep Cherokee | 2004 | 181 | 72 | 2.51x | No (mid-gen) |
| 6 | Toyota Camry | 2007 | 426 | 175 | 2.43x | YES (XV40) |
| 7 | Kia Optima | 2015 | 110 | 47 | 2.34x | No (mid-gen) |
| 8 | Chevrolet S-10 | 2003 | 149 | 64 | 2.31x | No (end-of-life) |
| 9 | Nissan Maxima | 2004 | 137 | 60 | 2.30x | No (mid-gen) |
| 10 | Dodge Grand Caravan | 2005 | 192 | 84 | 2.27x | YES (RS refresh) |
| 11 | Hyundai Sonata | 2011 | 230 | 102 | 2.25x | YES (YF gen) |

### Potential Spike Causes
1. **Redesign year:** New platform = new engineering bugs + marketing-driven sales spike = more vehicles on road. Confirmed for ~50% of spikes.
2. **Sales volume peak:** Higher sales in a given MY = larger surviving fleet = more deaths in FARS window. Cannot confirm without registration data.
3. **Fleet composition:** Some MYs enter rental/commercial fleets disproportionately, changing driver demographics.
4. **Known defects:** 2013 Elantra had steering complaints. 2007 Camry was part of Toyota unintended acceleration saga.
5. **Age sweet spot:** These MYs were 7-16 years old during FARS period — cheap used cars driven hard.

### Strongest Counterargument
Sales volume alone could explain spikes. If 2007 Camry sold 473K units vs ~380K for 2006, the surviving fleet is larger. This doesn't account for a 2.43x gap (sales were maybe 1.2x higher), but it's a confound we can't fully control for without per-MY registration data.

### Limitation
FARS records fatal crashes by vehicle model year but doesn't normalize by registration count or VMT per model year. We can detect the spikes; we can't definitively isolate whether the cause is design, fleet size, or driver demographics.

## Sources
1. NHTSA FARS 2014-2023 bulk data
2. IIHS vehicle safety ratings by model year
3. NHTSA recalls database (for known defects per MY)
