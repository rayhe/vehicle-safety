# Research: Same Price, Different Coffin

## Angle
Within every vehicle price tier, FARS data reveals death rate spreads of 4-8x between vehicles competing for the same buyer's dollar. A Honda Civic buyer could have chosen a Subaru Impreza for less money and 4.3x less risk. A Ford Escape buyer could have bought a Mazda CX-5 for similar money and 7.9x less risk. The price premium for safety is often *negative* — cheaper vehicles are sometimes dramatically safer.

## Novel Contribution
Original cross-tabulation: grouping FARS_BY_MODEL vehicles into approximate same-price cohorts and computing the death rate spread within each cohort. No existing NHTSA report or IIHS study presents this comparison. While IIHS publishes crash test ratings and Top Safety Pick awards, those measure lab performance — not real-world death rates per 100M VMT. This analysis bridges the gap between sticker price and actual mortality outcomes.

## Key Data Points (from FARS 2014-2023)

### Compact SUV ($25-30K): 7.9x spread
- Mazda CX-5: 0.12 deaths/100M VMT (162 deaths, 10yr)
- VW Tiguan: 0.14
- Toyota RAV4: 0.19
- Subaru Forester: 0.26
- Kia Sportage: 0.28
- Hyundai Tucson: 0.34
- Nissan Rogue: 0.35
- Chevy Equinox: 0.36
- Honda CR-V: 0.53
- Ford Escape: 0.95
**Spread: Mazda CX-5 (0.12) to Ford Escape (0.95) = 7.9x**

### Budget Sedan (<$20K): 5.3x spread
- Kia Forte: 0.40
- Nissan Kicks: 0.69
- Honda Fit: 0.72
- Hyundai Accent: 0.80
- Nissan Versa: 0.90
- Kia Rio: 1.07
- Chevy Spark: 1.28
- Chevy Sonic: 1.40
- Nissan Sentra: 2.13
**Spread: Kia Forte (0.40) to Nissan Sentra (2.13) = 5.3x**

### Economy Sedan ($20-25K): 4.3x spread
- Subaru Impreza: 0.52
- Chevy Cruze: 0.63
- Hyundai Elantra: 1.50
- Mazda3: 1.63
- VW Jetta: 1.71
- Toyota Corolla: 1.85
- Honda Civic: 2.25
**Spread: Subaru Impreza (0.52) to Honda Civic (2.25) = 4.3x**

### Midsize Sedan ($25-30K): 3.9x spread
- VW Passat: 0.79
- Subaru Legacy: 0.95
- Mazda6: 1.17
- Ford Fusion: 1.23
- Hyundai Sonata: 1.56
- Toyota Camry: 2.03
- Chevy Malibu: 2.03
- Nissan Altima: 2.88
- Honda Accord: 3.07
**Spread: VW Passat (0.79) to Honda Accord (3.07) = 3.9x**

### Midsize SUV ($35-45K): 7.7x spread
- Chevy Traverse: 0.20
- Honda Pilot: 0.29
- Kia Sorento: 0.29
- GMC Acadia: 0.30
- Toyota Highlander: 0.42
- Nissan Pathfinder: 0.93
- Ford Explorer: 1.54
**Spread: Chevy Traverse (0.20) to Ford Explorer (1.54) = 7.7x**

### Full-size Pickup ($35-50K): 1.3x spread
- Toyota Tundra: 0.94
- GMC Sierra: 1.01
- Ford F-150: 1.04
- Chevy Silverado: 1.25
**Spread: Toyota Tundra (0.94) to Chevy Silverado (1.25) = 1.3x — the only tier where safety is roughly comparable across competitors**

## Key Insight
The safety spread *collapses* in the full-size pickup segment (1.3x) but *explodes* in compact SUVs (7.9x) and midsize SUVs (7.7x). The segments marketed most aggressively as "safe family vehicles" have the widest internal safety gaps. Full-size pickups — not typically marketed on safety — are the most uniformly safe segment.

## Why This Matters (Counterargument Section)
The strongest counterargument: death rates per VMT conflate vehicle design with driver demographics. A Nissan Sentra buyer and a Kia Forte buyer are different populations. The Sentra skews younger, more urban, with different driving patterns. FARS doesn't control for driver age, geography, or behavior. Some of this gap is the car; some is the person buying it.

However: within the compact SUV tier, the demographic argument weakens. CX-5 and Escape buyers are closer in age, income, and driving context than Sentra and Forte buyers. Yet the 7.9x gap persists. IIHS vehicle weight studies (Monfort, 2024) show that once you control for vehicle weight class, structural design and safety features still explain significant variance.

## Limitations
1. FARS captures only fatal crashes — a vehicle with a low fatality rate might have high injury rates
2. VMT estimates use fleet averages (NHTS annual miles × estimated fleet), introducing ±15% uncertainty for lower-volume models
3. Price tiers are approximate (2020-era MSRPs); actual transaction prices vary by trim and market
4. No age-of-vehicle control — a 2005 Escape and a 2020 Escape are pooled together despite radically different safety equipment
5. Fleet composition changes over time: a model that sold 500K in 2015 but 200K in 2023 has a different risk profile than one with steady sales

## Sources
1. NHTSA FARS 2014-2023 — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. IIHS vehicle size and weight studies — https://www.iihs.org/topics/vehicle-size-and-weight
3. IIHS Top Safety Pick 2025 compact SUVs — https://www.iihs.org/ratings/top-safety-picks/2025/small-suvs/all
4. NHTS annual vehicle miles traveled — https://nhts.ornl.gov/
5. FARS query tool — https://cdan.dot.gov/query
6. NHTSA 5-star ratings program — https://www.nhtsa.gov/ratings

## Journalist
**Clara Rollover** — Consumer Safety Advocate. This is a "before you sign that lease" story about what the data means for car buyers. Direct, practical, angry on behalf of consumers.

## Kicker
**The Gap**

## Slug
same-price-different-coffin
