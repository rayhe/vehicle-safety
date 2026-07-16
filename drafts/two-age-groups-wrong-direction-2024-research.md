# Research Notes: Two Age Groups Going the Wrong Direction

## Slug: two-age-groups-wrong-direction-2024
## Journalist: Axle McScatter
## Kicker: The Gap

## Core Finding
NHTSA's 2024 early estimates (DOT HS 813 729, May 2025) show traffic deaths dropped 4% overall (40,901 → 39,345). Every age group between 15 and 64 saw declines. Two groups went the wrong direction:
- **Under 15: +1%** (1,023 → 1,038, +15 deaths)
- **65 and older: +2%** (7,923 → 8,081, +158 deaths)

Combined, these two groups added 173 deaths while every other demographic shed thousands.

## Original Contribution
Cross-referencing NHTSA's age-group subcategory data with their vehicle-age occupant data reveals the mechanism:
- PV occupant fatalities in **newer vehicles (<10 years): -8%**
- PV occupant fatalities in **older vehicles (≥10 years): -5%**
- The safety improvements (AEB, better crash structures, updated ESC calibrations) are concentrated in newer vehicles
- Under-15s don't choose their vehicles — they ride in whatever their parents/guardians drive
- 65+ drivers keep vehicles the longest (average vehicle age is oldest for this demographic per NHTS data)
- The two groups going the wrong direction are the ones least likely to be in vehicles with the latest safety tech

## Key Data Points (from NHTSA DOT HS 813 729)
| Age Group | 2023 Deaths | 2024 Est. | Change |
|-----------|-------------|-----------|--------|
| <15       | 1,023       | 1,038     | +1%    |
| 15-24     | 6,970       | 6,669     | -4%    |
| 25-34     | 7,613       | 6,989     | -8%    |
| 35-44     | 6,441       | 6,308     | -2%    |
| 45-54     | 5,268       | 4,970     | -6%    |
| 55-64     | 5,663       | 5,290     | -7%    |
| 65+       | 7,923       | 8,081     | +2%    |
| **Total** | **40,901**  | **39,345**| **-4%**|

Vehicle age PV occupant deaths:
- Newer (<10 yrs): 9,209 → 8,431 (-8%)
- Older (≥10 yrs): 14,750 → 13,964 (-5%)

Additional context from 2025 projections (DOT HS report, July 2026 release):
- 2025 total estimated: 36,640 (-7% from 2024's 39,254)
- The decline is accelerating overall — making the counter-trend even more stark

## Kill Test
- **Genuinely newsworthy?** Yes — NHTSA's own data shows two vulnerable groups getting worse while everything else improves
- **Novel angle after 500+ articles?** Yes — no existing article covers this specific age-group divergence in the 2024 subcategory data
- **Would a reader share this?** Yes — parents and adult children of elderly drivers both have personal stakes
- **Actionable?** Yes — check what vehicle your kids ride in, check what your elderly parents are driving, prioritize newer safety features for the most vulnerable

## Strongest Counterargument
The +1% for under-15 is 15 deaths. On a base of 1,038, that's within the margin of error for early FARS estimates (which are ratio-adjusted projections from incomplete data). The +2% for 65+ is more robust at 158 additional deaths on a base of 8,081. The under-15 finding is directionally concerning but not statistically conclusive on its own. The 65+ finding is more solid.

## Limitations
1. These are early estimates, subject to revision as more 2024 FARS data is coded
2. VMT by age group is not broken out — we don't know if 65+ drove more miles in 2024
3. The vehicle age connection is correlational — we're inferring a mechanism (newer safety tech) from two separate subcategories
4. Under-15 deaths include pedestrians and cyclists, not just vehicle occupants — the vehicle choice argument is weaker for non-occupants
5. Population aging: the 65+ population is growing, which increases raw death counts independent of rate changes

## Primary Sources
1. NHTSA, "Early Estimates of Motor Vehicle Traffic Fatalities and Fatality Rate by Sub-Categories in 2024," DOT HS 813 729, May 2025. https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813729
2. NHTSA, "Early Estimates of Motor Vehicle Traffic Fatalities in 2024," DOT HS 813 710. Via https://www.nhtsa.gov/press-releases/2023-traffic-deaths-2024-estimates
3. NHTSA, "Early Estimates of Motor Vehicle Traffic Fatalities and Fatality Rate by Sub-Categories in 2025." Via https://crashstats.nhtsa.dot.gov (2025 projection data)
4. IIHS, "Vehicle Size and Weight." https://www.iihs.org/topics/vehicle-size-and-weight (fleet age and safety feature adoption context)
5. FARS data (2014-2023) via vehicle-safety.org's own dataset — model year death trends showing newer model years with dramatically fewer deaths

## FARS Data Cross-Reference
From our FARS_MODEL_YEAR data, newer model years consistently show lower death counts. Example (Camry):
- MY 2004: 299 deaths
- MY 2010: 196 deaths
- MY 2018: 148 deaths
- MY 2022: 33 deaths

This pattern holds across virtually all models — newer = safer — reinforcing the mechanism that access to newer vehicles is what's driving the decline.
