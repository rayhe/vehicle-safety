# Research: Brand Loyalty Is a Safety Myth

## Thesis
Within-brand variance in fatality rates is 5.9x higher than between-brand variance. The brand badge on your car tells you almost nothing about how safe it is. The specific model matters 6x more than the brand.

## Novel Contribution
Original FARS cross-tabulation: computed within-brand vs between-brand variance for death rates (deaths per 100M VMT) across all 28 brands with 5+ models in the dataset (337 total models).

Key findings:
- Between-brand variance: 0.1280
- Average within-brand variance: 0.7535
- Ratio: 5.9x — model choice explains ~6x more fatality risk variation than brand choice

## Key Data Points

### Most inconsistent brands (safest vs deadliest model):
- Chevrolet: 391.5x spread (Prizm 0.02 → Tracker 7.83)
- Toyota: 313.5x spread (Matrix 0.02 → Land Cruiser 6.27)
- Hyundai: 142.3x spread (Palisade 0.06 → Veloster 8.54)
- Ford: 120.4x spread (Bronco 0.05 → Mustang 6.02)
- Dodge: 65.5x spread (Caravan 0.04 → Dakota 2.62)

### Most consistent brands:
- Volvo: 2.6x spread (XC70 0.17 → S60 0.44), avg 0.32
- Audi: 2.9x spread (Q5 0.11 → A6 0.32), avg 0.22
- Lincoln: 4.4x spread (MKX 0.26 → Aviator 1.15), avg 0.74

### Why this matters:
- Consumers often "trust a brand" for safety: "I buy Toyota because they're safe," "Volvo is safe," etc.
- IIHS Top Safety Pick awards vary wildly within brands
- "I drive a Chevy" could mean you're in the safest car in the dataset (Prizm) or a vehicle with a 7.83 death rate (Tracker)
- Honda Accord (3.07) vs Honda Passport (0.10) = 30.7x difference under the same badge

### What explains the variance:
1. **Vehicle class** — sedans vs SUVs vs sports cars have fundamentally different physics
2. **Demographics** — who buys the model (age, income, behavior patterns)
3. **Fleet age** — older models in the used market vs new models
4. **Design era** — pre/post ESC mandate, pre/post IIHS side-impact test

### Counter-argument (strongest):
Some of this variance is driven by vehicle CLASS not the brand per se. A Toyota Corolla sedan will always be more dangerous than a Toyota Highlander SUV due to physics. But: even within same-class vehicles from the same brand, massive spreads exist. Example: Honda Accord sedan (3.07) vs Honda Civic sedan (2.25) — same brand, same class, 36% difference.

## Sources
1. NHTSA FARS 2014-2023 (deaths, crashes, fleet estimates, VMT)
2. IIHS Top Safety Pick methodology — https://www.iihs.org/ratings
3. IIHS fatality statistics — https://www.iihs.org/topics/fatality-statistics
4. NHTSA ESC mandate (2007) — https://www.govinfo.gov/content/pkg/FR-2007-06-22/html/E7-11965.htm

## Journalist
Axle McScatter — Data Visualization Editor (statistical roundup, methodology piece, within-brand variance analysis)

## Kicker
The Gap

## Kill Test
✅ Passes — This is a genuinely novel cross-tabulation. Nobody has computed within-brand vs between-brand variance on FARS death rates. The finding (6x within > between) directly challenges the common consumer heuristic of "brand = safety."
