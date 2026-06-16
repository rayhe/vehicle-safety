# Research Notes: every-brand-equally-drunk

## Angle
Cross-tabulation of FARS impairment rates vs. death rates by vehicle MAKE reveals that impairment is effectively a constant (~20%) across all manufacturers, while death rates vary by nearly 4x. The badge on your car doesn't predict whether you'll drive drunk. It predicts whether you'll survive the crash.

## Kill Test
Is this genuinely newsworthy? YES. This is a novel FARS cross-tabulation nobody has published. It demolishes the intuition that "bad brands have bad drivers." The impairment rate is a flat line across makes; the death rate is a chasm. This reframes the entire debate around vehicle safety from driver behavior to vehicle engineering.

## Primary Data (FARS 2014-2023)

### Impairment by Make (% drivers in fatal crashes testing positive for any substance)
| Make       | Imp%  | Death Rate/100k | Deaths   |
|------------|-------|-----------------|----------|
| Toyota     | 19.1% | 115.6           | 22,019   |
| Ford       | 19.3% | 146.3           | 34,954   |
| Honda      | 19.4% | 149.9           | 17,837   |
| Hyundai    | 19.5% | 97.9            | 6,854    |
| Nissan     | 20.0% | 155.1           | 14,456   |
| Jeep       | 20.1% | 99.0            | 6,976    |
| Dodge      | 20.3% | 90.4            | 11,076   |
| Kia        | 20.3% | 45.1            | 3,077    |
| Subaru     | 20.4% | 46.8            | 2,292    |
| Chevrolet  | 20.8% | 171.0           | 35,905   |
| GMC        | 20.7% | 128.7           | 6,758    |
| Chrysler   | 20.1% | 126.8           | 4,326    |
| Buick      | 21.3% | 124.7           | 3,710    |
| Pontiac    | 22.4% | 124.0           | 3,038    |
| Volkswagen | 19.3% | 85.1            | 2,234    |

### Key Findings
1. **Impairment spread: 3.3 percentage points** (19.1% Toyota to 22.4% Pontiac)
2. **Death rate spread: 3.8x** (45.1 Kia to 171.0 Chevrolet)
3. **Correlation between impairment and death rate: essentially zero.** Pontiac has the highest impairment (22.4%) but a middle-tier death rate (124.0). Toyota has the lowest impairment (19.1%) but a higher death rate (115.6) than Kia (20.3%, 45.1) or Subaru (20.4%, 46.8).
4. The impairment-is-a-constant finding is supported by NHTSA longitudinal data: alcohol involvement in fatal crashes has been ~20% since 1997 (PMC, "Can Progress in Reducing Alcohol-Impaired Driving Fatalities Be Resumed?").

### Novel Analysis
**Impairment is a human constant; death rate is a vehicle variable.** This is the original contribution. Nobody cross-tabs impairment by make at this scale. NHTSA reports impairment by vehicle TYPE (sedan vs SUV vs pickup) but not by MAKE. The make-level analysis reveals the flat line.

### The Confound (Limitations)
Fleet age is the likely mechanism. Kia and Subaru have newer fleets (mostly 2012+ models in active use). Chevrolet's FARS deaths include Cobalts (5.10 rate), Cavaliers (2.43), Impalas (5.00), S-10 Pickups (4.83) — all discontinued models from the 2000s with 15-25 year old vehicles still on the road. These lack ESC (mandated 2012), modern curtain airbags, and structural improvements.

The brand isn't the cause. The brand is a proxy for the age and safety technology of the vehicles still being driven. "Chevy is dangerous" is really "old cars are dangerous, and Chevy sold a LOT of old cars."

### Strongest Counterargument
You could argue this is just an ecological fallacy — aggregating to the make level hides within-make variation. A 2024 Chevy Equinox is probably as safe as a 2024 Kia Sportage. The make-level death rate difference is driven by the denominator: how many ancient, pre-ESC vehicles are still in each brand's on-road fleet. This is valid, and must be stated at full strength.

## Sources
1. NHTSA FARS 2014-2023 (primary data) — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. NHTSA 2015 Alcohol-Impaired Driving data (vehicle type breakdown) — https://www.nhtsa.gov
3. IIHS fatality statistics — https://www.iihs.org/topics/fatality-statistics
4. PMC: "Can Progress in Reducing Alcohol-Impaired Driving Fatalities Be Resumed?" (impairment rate stability since 1997) — https://pmc.ncbi.nlm.nih.gov
5. NHTSA ESC final rule (2007, effective 2012) — https://www.govinfo.gov/content/pkg/FR-2007-06-22/html/E7-11965.htm
6. FARS query tool — https://cdan.dot.gov/query

## Journalist
**Dale Impactor III** — Toxicology Desk Chief. This is his beat: impairment data treated like sports stats. Sardonic, statistical.

## Kicker
"The Gap" — this is about a comparison and disparity.
