# Research Notes: "The Aggressive Driving Coding Mirage"

## Angle
LendingTree published a widely-covered study (Jul 6, 2026) using 2024 FARS data showing "aggressive/careless driving" in 12.9% of US fatal crashes. Media outlets (USA TODAY, NJ.com, etc.) ran it as a road rage ranking. But the state-level data reveals it's primarily a **FARS coding practices artifact**, not a behavioral finding.

## Primary Sources
1. **LendingTree study** (Jul 6, 2026): "Men Cause 78.6% of Unsafe Driving Fatal Crashes"
   - URL: https://www.lendingtree.com/insurance/aggressive-drivers-study/
   - Data source: NHTSA FARS 2024
   - Methodology: Categorized fatal crashes with driver-related factors: aggressive driving, careless driving, inattentive operation, improper driving, driving without due care

2. **NHTSA FARS** (primary data): https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
   - The FARS coding manual defines "driver-related factors" with ~90+ codes
   - State law enforcement agencies are responsible for crash report narratives
   - FARS analysts at each state code from those reports — coding practices vary by state

3. **NHTSA Jan-Sept 2024 estimates**: 29,135 fatalities, -4.4% YoY, fatality rate 1.18/100M VMT

## The Data (from LendingTree/FARS 2024)

### National aggregate
- Total fatal crashes: ~37,000
- Involving "aggressive/careless driving": ~4,776 (12.9%)
- Male drivers: 78.6% (3,753)
- Female drivers: 20.0% (955)
- Millennials: 31.5% (1,506)
- Gen Z: 27.7% (1,323)
- Gen X: 18.2% (871)
- Boomers: 13.2% (629)

### Vehicle rankings (by make)
1. Chevrolet: 555 (11.6%)
2. Ford: 542 (11.3%)
3. Toyota: 385 (8.1%)
4. Honda: 372 (7.8%)
5. Nissan: 246 (5.1%)
6. Dodge: 233 (4.9%)
7. Harley-Davidson: 206 (4.3%)
8. GMC: 174 (3.6%)
9. Jeep: 138 (2.9%)
10. Hyundai: 133 (2.8%)

### State rankings — THE KEY FINDING
Top 5 (highest % of fatal crashes coded as aggressive/careless):
1. Arkansas: 47.2% (258/547)
2. Louisiana: 46.2% (326/705)
3. New Jersey: 45.1% (288/638)
4. Hawaii: 43.3% (42/97)
5. Colorado: 39.7% (255/642)

Bottom 5:
47. Illinois: 1.3% (14/1,085)
48. Ohio: 0.8% (9/1,077)
49. California: 0.6% (22/3,583)
49. Maine: 0.6% (1/167)
51. Utah: 0.0% (0/251)

### The 79x Gap
- Arkansas: 47.2% → effectively half of all fatal crashes involve "aggressive driving"
- California: 0.6% → effectively none do
- Ratio: 79x

## Original Contribution
**This gap is not behavioral. It's a measurement artifact.**

No serious behavioral theory explains why Arkansas drivers are 79x more "aggressive" than California drivers. California has:
- Higher population density
- More congestion (LA, SF, SD)
- Higher per-capita miles driven
- More road rage incidents in media reports

What DOES explain it:
1. **FARS "driver-related factors" coding is state-dependent.** Each state's FARS analyst codes from state police crash reports, which use different forms, vocabularies, and thresholds.
2. **"Careless driving" is a catch-all.** In some states, any at-fault crash gets coded as "careless driving." In others, only explicitly cited aggressive behavior counts.
3. **California's low rate (0.6%) suggests the state codes these factors very narrowly** — only flagging explicit aggressive behavior documented by responding officers.
4. **Arkansas's high rate (47.2%) suggests the state codes them very broadly** — any driver error or traffic violation gets tagged.

This mirrors the site's existing FARS measurement critique methodology:
- `fars-drug-detection-measurement-artifact`: Drug testing rates vary by state → drug impairment % is a testing artifact
- `fars-drowsy-driving-10x-gap`: Drowsy driving coding varies → 10x state gap is coding, not drowsiness
- `fars-drug-testing-blind-spot`: States that test more find more

## Cross-Reference with Site's FARS Data
From our own FARS dataset:
- Silverado: 9,591 deaths, 1.25 rate (highest total deaths)
- F-150: 9,194 deaths, 1.04 rate
- Camry: 6,328 deaths
- Accord: 7,102 deaths

The LendingTree vehicle rankings simply mirror market share. Silverado and F-150 are #1 and #2 bestselling vehicles. Their appearance at the top of "aggressive driving crashes" is proportional representation, not overrepresentation.

## Journalist
**Axle McScatter** — Data Visualization Editor
- Beat: Statistical roundups, national trends, methodology pieces
- Perfect for data-literacy critique

## Kicker
**By The Numbers** or **Existential Dread**

## Headline ideas
- "Utah Has Zero Road Rage Deaths. Arkansas Has 258. Neither Number Means What You Think."
- "The 79x Gap: A Road Rage Study That's Actually a Crash Coding Map"
- "12.9% of Fatal Crashes Involve 'Aggressive Driving' — But Nobody Agrees What That Means"
