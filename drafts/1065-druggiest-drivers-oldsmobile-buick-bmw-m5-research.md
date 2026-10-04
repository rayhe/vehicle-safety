# #1065 — Research: America's Druggiest Nameplates (the Impairment U-Curve)

**Journalist:** Axle McScatter (Data Visualization Editor)
**Angle:** Rank all 307 FARS nameplates by drug-positive toxicology. The top of the drug leaderboard mixes $2,000 beaters (Oldsmobile Alero 18.4%, Buick Park Avenue 16.6%) with a $110,000 super-sedan (BMW M5 15.6%, #3). The broader any-impairment top 12 (mean 27.1%) mixes dead-brand beaters with German luxury and American muscle, while the mainstream middle (Camry, Accord, CR-V, F-150: mean 19.3%) sits nearly 8 points lower. Impairment is U-shaped by price tier. Nobody has run impairment x price-tier on this dataset.

## The numbers (FARS 2014-2023 toxicology panel, internal dataset; 490,736 drivers)

**Fleet baseline:** 15.1% alcohol-positive, 8.7% drug-positive, 20.0% any-impairment.

**Drug-positive leaderboard (drivers >= 40):**

| Rank | Nameplate | Drug+ % | Alc+ % | Drivers |
|---|---|---|---|---|
| 1 | Oldsmobile Alero | 18.4 | 18.4 | 141 |
| 2 | Buick Park Avenue | 16.6 | 24.3 | 259 |
| 3 | BMW M5 | 15.6 | 17.4 | 109 |
| 4 | Buick Verano | 13.1 | 16.4 | 397 |
| 5 | Ford Five Hundred | 13.0 | 19.9 | 216 |
| 6 | Suzuki Grand Vitara | 12.7 | 11.4 | 158 |
| 7 | Nissan NV200 | 12.7 | 11.8 | 212 |
| 8 | Isuzu Rodeo | 12.4 | 18.6 | 145 |
| 9 | Mercedes-Benz GLK-Class | 12.2 | 17.5 | 229 |
| 10 | Jeep Commander | 12.1 | 19.8 | 273 |

**The U-curve (any-impairment top 12, drivers >= 100, mean 27.1%):** Park Avenue 31.7, Alero 29.1, Chevrolet C/K Pickup 28.0, Audi A3 27.1, Chevrolet Astro Van 27.0, Ford Five Hundred 26.4, Infiniti QX56 26.3, Corvette 26.2, BMW 7 Series 26.1, Cadillac CTS 25.9, Hyundai Tiburon 25.9, Infiniti FX35 25.9. Six beaters/workhorses, six luxury/performance. **Mainstream middle (18 high-volume nameplates: Camry 19.2, Accord 20.0, Civic 20.4, Corolla 19.2, CR-V 17.6, RAV4 18.4, F-150 18.9, Silverado 20.6, etc.): mean 19.3%.** Gap: 7.8 points.

**Two extra findings:**
- Only 2 of 307 nameplates (drivers >= 30) have drug-positive EXCEEDING alcohol-positive: Suzuki Grand Vitara (12.7 vs 11.4) and Nissan NV200 (12.7 vs 11.8).
- Polydrug overlap is the norm: 11 of the M5's 17 drug-positive drivers were also alcohol-positive; 24 of Park Avenue's 43. Pure-drug-only cases are the minority everywhere checked.

## Why this matters / news pegs

1. **TIRF Canada 2026 fact sheet** (Brown, Vanlaar & Robertson, "Drug use in fatal collisions in Canada: 2000-2023"): cannabis steady at ~25% of fatally injured drivers post-legalization; CNS stimulants rose 13.9% -> 19.6%. North America-wide drug-driving problem, current data.
2. **NHTSA drug prevalence study** (via AASHTO Journal): 56% of seriously/fatally injured US road users positive for alcohol or impairing drugs; cannabinoids 25%, alcohol 23%, stimulants 11%, opioids 9%.
3. **MedBoundTimes, May 2026:** federal drugged-driving data efforts slowing; NHTSA tracks alcohol deaths rigorously but has no equivalent drug-death tracking. The measurement gap is the story's policy hook.

## Kill test

- #868 (Park Avenue druggiest), #898 (Verano drug-positive king), #883 (NV200 drug beats alcohol), #928 (Macan/GLK druggiest luxury): all single-nameplate pieces. None ran the full-dataset ranking or the price-tier U-curve.
- #959 (drugged driving undercounted): about measurement, not about which cars.
- #1051 (sports cars drunkest): alcohol + class frame. Mine is drugs + price-tier frame across all classes.
- Zero M5 / Five Hundred / Grand Vitara / Rodeo / Commander coverage in 1,064 articles (queue + stories grep).
- Novel composite: full 307-nameplate drug ranking + U-curve means (27.1 vs 19.3) + "only two nameplates where drugs beat alcohol" + polydrug overlap arithmetic. Never assembled.
- VERDICT: passes. Not another data dump.

## Limitations (for the draft)

- Drug-positive != impaired: THC detectable for days/weeks after use; FARS records presence, not impairment.
- Percentages are conditional on being in a fatal crash, not population prevalence.
- Testing is uneven across states; alcohol tested more consistently than drugs; low-volume nameplates (M5 n=109) carry wide uncertainty.
- Price tiers are qualitative (typical new/used values), not transaction data; correlation is not causation.
- FARS 2014-2023 window; the drug landscape (fentanyl wave, cannabis legalization) shifted inside the window.

## Strongest counterargument

Testing bias: young men in spectacular M5 crashes get full toxicology panels; a grandmother who dies in a Camry may never get drug-tested. Part of the U-curve could be who gets tested, not who uses. Also, expensive cars skew toward nighttime/weekend driving by younger owners, and beaters skew toward drivers with less access to healthcare and more police contact. The ranking measures the intersection of behavior, enforcement, and testing, not just behavior. State it at full strength.

## Actionable insights (for the draft)

- Used-car shoppers: the cheapest old sedans (Alero/Park Avenue-era GM) statistically keep the worst company on toxicology; that is a data point, not destiny, but pair it with an IIHS rating check before buying a $3,000 beater for a teen.
- The M5 finding is a reminder that impairment risk is not confined to cheap cars; if you are buying performance metal, the car's capability does not include a designated driver.
- Policy: NHTSA has no drug-death tracking equivalent to its alcohol program; standardized toxicology reporting would shrink the error bars on every number in this article.
- Rideshare/delivery drivers in NV200-class vans: the drug>alcohol inversion is worth knowing for fleet safety programs.
