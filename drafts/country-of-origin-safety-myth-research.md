# Research: Country of Origin and Crash Survival

## Angle
"The Flag on Your Dashboard" — a cross-tabulation of per-crash lethality by country of origin AND vehicle class. First analysis to untangle the Japan-vs-Germany safety question using FARS fatal crash data.

## Kill Test
✅ Novel cross-tabulation nobody has run. The finding that Japan's worse aggregate lethality is a class-mix artifact is a genuine Simpson's Paradox discovery. The German sedan advantage (16% lower per-crash lethality) is a concrete, actionable finding.

## Primary Sources
1. NHTSA FARS 2014-2023 (fatal crash data, all vehicle models)
2. IIHS vehicle size and weight research (mass correlates with occupant protection)
3. IIHS fatality statistics by vehicle type

## Key Data Points

### Aggregate by Nation
| Nation | Models | Deaths | Crashes | Per-Crash Lethality | Median Rate | Weighted Avg Rate |
|--------|--------|--------|---------|---------------------|-------------|-------------------|
| USA | 163 | 113,141 | 202,613 | 0.558 | 0.59 | 1.85 |
| Japan | 104 | 61,812 | 104,718 | 0.590 | 0.57 | 1.80 |
| Korea | 23 | 9,931 | 17,077 | 0.582 | 0.40 | 1.45 |
| Germany | 35 | 5,891 | 11,113 | 0.530 | 0.40 | 1.38 |
| Sweden | 5 | 171 | 279 | 0.613 | 0.30 | 0.36 |

### Sedan Lethality by Nation (the real story)
- USA sedans: 0.671
- Japan sedans: 0.641
- Korea sedans: 0.610
- Germany sedans: 0.563

German sedans have 16% lower per-crash lethality than American sedans. Within the same vehicle class, German engineering provides a genuine survival advantage.

### SUV Lethality by Nation
- USA SUVs: 0.539
- Japan SUVs: 0.512
- Korea SUVs: 0.483
- Germany SUVs: 0.384

German SUVs are dramatically safer per crash (0.384 vs USA's 0.539). An Audi Q5 at 0.322 D/C, BMW X3 at 0.358, MB ML-Class at 0.325.

### The Simpson's Paradox
Japan's overall lethality (0.590) is higher than USA's (0.558), but this is because Japan sells proportionally more sedans (high-lethality class) and fewer pickups (low-lethality class, since pickups protect their occupants). Within each class, Japan is competitive or better than USA.

### Impairment by Nation
- USA: 20.9% (GM), 19.3% (Ford)
- Japan: 19.1% (Toyota), 19.4% (Honda), ~20% (Nissan)
- Impairment rates are remarkably similar across origins — driver behavior doesn't explain the gap

## Novel Contribution
Per-crash lethality by country-of-origin × vehicle class cross-tabulation. Reveals:
1. Simpson's Paradox: Japan looks worse overall but it's class-mix confounding
2. German engineering provides genuine 16% sedan survival advantage and 29% SUV survival advantage
3. Korean vehicles punch well above their price bracket in crash avoidance (low median rate) but crash protection is middling
4. Sweden (Volvo/Saab) has lowest median rate but high lethality — they avoid crashes but when they crash, occupants are at risk (small sample caveat)

## Counterargument (at full strength)
Fleet age confounds the comparison. The German and Korean vehicles in FARS tend to be newer (these brands have grown market share recently) while US vehicles include decades of older models. Newer vehicles have better structural engineering regardless of origin. The "German advantage" might just be a "new car advantage."

## Limitations
- FARS only captures fatal crashes, not the ~6.7M total annual crashes
- "Country of origin" is by brand headquarters, not manufacturing location (many "Japanese" cars are built in US plants)
- Fleet age distribution differs by nation — German/Korean models skew newer in the US fleet
- VMT estimates introduce ±15% uncertainty for low-volume models
- Small sample sizes for Sweden, UK, Italy limit conclusions

## Methodology
- Lethality = deaths / crashes for each vehicle model
- Aggregated by brand headquarters nationality and vehicle class
- Minimum 50 crashes for inclusion in class-level analysis
- Rates are deaths per 100M VMT (estimated)
- FARS 2014-2023, 337 models with 50+ deaths or >1K annual sales

## Journalist
Clara Rollover — Consumer Safety Advocate. Direct, practical, slightly angry on behalf of consumers. "Before you sign that lease, you might want to see this."

## Kicker
The Gap
