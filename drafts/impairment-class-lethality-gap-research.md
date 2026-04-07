# Research: The Impairment-Class Lethality Gap

## Thesis
All five vehicle classes have nearly identical impairment rates (18-22%), but their occupant lethality rates in fatal crashes diverge by 20 percentage points (49% for pickups vs 68% for sports cars). The driver behavior is roughly constant across the fleet; the engineering determines who lives.

## Core Data (FARS 2014-2023)

### Impairment by Class
| Class | Drivers in FARS | Alcohol % | Drug % | Any Impairment % |
|-------|----------------|-----------|--------|-------------------|
| Sports Car | 14,061 | 17.1% | 9.5% | 22.5% |
| Sedan | 197,584 | 15.4% | 8.9% | 20.4% |
| Pickup | 111,320 | 15.2% | 8.6% | 20.1% |
| SUV | 146,411 | 14.7% | 8.4% | 19.5% |
| Van | 21,360 | 13.4% | 8.1% | 18.1% |

Range: 4.4 percentage points (18.1% - 22.5%). Coefficient of variation: ~8%.

### Lethality by Class (deaths per crash involvement)
| Class | Deaths | Crashes | Lethality % |
|-------|--------|---------|-------------|
| Sports Car | 6,134 | 8,993 | 68.2% |
| Sedan | 89,127 | 138,159 | 64.5% |
| SUV | 46,442 | 88,630 | 52.4% |
| Van | 7,897 | 15,364 | 51.4% |
| Pickup | 41,593 | 85,073 | 48.9% |

Range: 19.3 percentage points (48.9% - 68.2%). Coefficient of variation: ~14%.

### Key Finding
Impairment spread: 4.4pp → Lethality spread: 19.3pp
The behavioral input is nearly flat; the engineering output varies by 4.4x as much.

## Novel Contribution
No published analysis cross-references FARS impairment rates by vehicle class against occupant lethality ratios to show the driver-vs-vehicle attribution. This is an original computation.

## Individual Vehicle Extremes (to illustrate the spread)
- Chevrolet Cavalier: 78% sober, 85.7% lethality (sober drivers dying in bad engineering)
- Ram 2500: 80% sober, 20.5% lethality (surviving crashes that kill others)
- The Cavalier driver and Ram 2500 driver have equivalent sobriety. One is 4.2x more likely to die.

## Sources
1. NHTSA FARS 2014-2023 (fatal crash data, toxicology reports)
2. IIHS vehicle size and weight research (mechanism explanation)
3. NHTSA ESC final rule / vehicle stability data
4. NHTS VMT survey data

## Counterargument
Sports car drivers might engage in higher-risk behavior (speeding, aggressive driving) independent of impairment, inflating their lethality rate due to crash severity rather than vehicle design. The impairment data only captures substance use, not all dangerous driving behaviors.

## Limitations
- FARS only captures fatal crashes, not all crashes. A vehicle with low lethality could still have high injury rates.
- "Any impairment" combines alcohol and drug testing; FARS drug testing rates vary by state (many states don't test for drugs).
- Lethality ratio = own-vehicle deaths / crash involvements. It doesn't distinguish between single-vehicle and multi-vehicle crashes.
- Fleet composition within classes varies (sports cars skew newer/lighter; sedans include both economy and luxury).

## Angle
Journalist: Dale Impactor III (toxicology beat, needs articles — only 14 vs 31 for Mia)
Kicker: Sobriety Report
Headline concept: "Every Vehicle Class Drinks at the Same Rate. Only One Class Walks Away."
