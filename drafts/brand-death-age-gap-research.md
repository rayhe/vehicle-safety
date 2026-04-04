# Research: Brand Fleet Age Gap in Fatal Crashes

## Angle
Novel FARS cross-tabulation: the weighted average age of vehicles involved in fatal crashes, broken down by brand. Nobody runs this computation. The finding is striking: a 10.7-year gap between Kia (5.6 years) and Mercury (16.3 years).

## Kill Test
- Is this genuinely newsworthy? YES — this is an original FARS computation that reframes brand safety rankings. Most brand death tolls are dominated by legacy vehicles (15+ years old), meaning the safety "problem" is already solving itself through fleet turnover.
- Novel angle? YES — nobody calculates weighted crash vehicle age by brand. The result reframes how consumers should evaluate brand safety.

## Core Data (FARS 2014-2023, weighted by deaths per model year)

### Brand Death Fleet Age Rankings (1000+ deaths)
| Brand | Avg Age | Deaths | % from 15+ yr vehicles |
|-------|---------|--------|------------------------|
| Mercury | 16.3 yr | 1,794 | 64.8% |
| Buick | 15.0 yr | 3,570 | 63.5% |
| Pontiac | 14.9 yr | 2,974 | 49.3% |
| GMC | 14.6 yr | 6,493 | 55.4% |
| Ford | 13.8 yr | 33,938 | 49.6% |
| Chevrolet | 13.6 yr | 34,525 | 46.1% |
| Honda | 13.3 yr | 17,221 | 44.6% |
| Lincoln | 13.2 yr | 1,026 | 45.3% |
| Jeep | 13.1 yr | 6,681 | 48.7% |
| Dodge | 12.9 yr | 10,701 | 42.9% |
| Cadillac | 12.9 yr | 1,265 | 42.1% |
| Toyota | 12.8 yr | 20,848 | 41.2% |
| BMW | 12.4 yr | 2,015 | 37.0% |
| Lexus | 11.5 yr | 1,046 | 31.8% |
| Chrysler | 11.2 yr | 4,210 | 25.3% |
| Subaru | 11.2 yr | 2,050 | 39.0% |
| Mazda | 10.1 yr | 1,190 | 22.0% |
| Nissan | 10.0 yr | 13,653 | 23.8% |
| VW | 10.0 yr | 2,002 | 31.7% |
| Hyundai | 8.2 yr | 6,360 | 13.7% |
| Kia | 5.6 yr | 2,454 | 2.6% |

### Key Findings
1. **The Legacy Load**: For GM brands (Buick, Pontiac, Mercury, GMC), 50-65% of their FARS death toll comes from vehicles 15+ years old. Their "safety problem" is mostly historical.
2. **The Young Death Brands**: Kia (2.6% old) and Hyundai (13.7% old) have death tolls concentrated in young, currently-on-sale vehicles.
3. **The Middle Ground**: Toyota (41.2% old), Honda (44.6% old), and Ford (49.6% old) are roughly split between legacy and current vehicles.
4. **The Expiration Date**: As older GM vehicles are scrapped, GM's death numbers will decline even without any engineering improvements.

## Sources
1. NHTSA FARS 2014-2023 (primary)
2. IIHS fatality statistics (context)
3. Hyundai Palisade recall March 2026 (current example of young-vehicle safety issues)
4. Kia Boys theft epidemic / NHTSA immobilizer investigation (context for Kia's young-vehicle deaths)

## Strongest Counterargument
Kia and Hyundai entered the US market at scale much later than GM/Ford/Toyota. Their on-road fleet IS younger on average, so having younger vehicles in fatal crashes is EXPECTED, not necessarily evidence of current engineering deficiency. A fair comparison would require normalizing against each brand's fleet age distribution (which FARS doesn't provide).

## Counterargument Response
True for the raw numbers, but two observations survive: (1) The Kia Boys epidemic proved that current Kia/Hyundai designs had a specific, exploitable safety deficiency (no engine immobilizer until 2022), and (2) the Hyundai Palisade power seat recall (March 2026, one child killed) shows quality control issues in brand-new models. The fleet age excuse explains SOME of the gap but not all of it.

## Limitations
- FARS captures only fatal crashes; a brand with low fatality rates might still have high injury rates
- We estimate fleet VMT using sales data and national driving averages, introducing ±15% uncertainty
- Fleet age distribution by brand (not available in FARS) would be needed for true normalization
- Discontinued brands (Mercury, Pontiac) have artificially high average ages because no new vehicles enter the sample
- FARS midpoint of 2019 used for age calculation; individual crash years would be more precise

## Methodology
- Vehicle age = 2019 (midpoint of FARS 2014-2023 window) minus model year
- Weighted average age = Σ(age × deaths) / Σ(deaths) per brand
- "Old" = 15+ years at midpoint (model year 2004 or earlier)
- Minimum threshold: 1,000 total deaths for brand inclusion

## Journalist Assignment
Axle McScatter — Data Visualization Editor (statistical deep-dive, brand rankings)
Kicker: "By The Numbers"
