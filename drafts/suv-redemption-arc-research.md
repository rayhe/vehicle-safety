# Research: The SUV Redemption Arc

## Angle
Full-size SUVs experienced the most dramatic safety improvement of any vehicle class in the FARS dataset. Five models — Explorer, Tahoe, Expedition, 4Runner, Yukon — collectively went from 660+ deaths/yr (early model years, 1995-2008) to ~121/yr (late model years, 2009-2020). That's an 80%+ reduction dwarfing any other class.

## Novel Contribution
Cross-tabulation of FARS model-year death data across the full-size SUV class to compute aggregate "deaths per model-year generation" — something NHTSA and IIHS publish for individual models but not as a class-level trend. Connecting three specific regulatory/engineering interventions to the inflection points.

## Kill Test
✅ Genuinely surprising? Yes — most vehicle safety stories are bad news. This quantifies exactly how much better SUVs got.
✅ Novel after 133 articles? Yes — explorer-transformation.html covers one model. This is the CLASS story.
✅ Would a reader share? Yes — "SUVs used to kill 660 people/yr from these 5 models alone. Now it's 121."

## Data (from FARS model-year analysis)

### Early vs. Late Model Year Deaths (per model year, per year in FARS 2014-2023)
| Vehicle | Early Period | Early Avg Deaths/yr | Late Period | Late Avg Deaths/yr | Improvement |
|---------|-------------|--------------------:|-------------|--------------------:|:------------|
| Ford Expedition | 1997-2008 | 111.8 | 2009-2020 | 13.8 | 87.7% |
| Chevrolet Tahoe | 1995-2007 | 165.7 | 2008-2020 | 28.2 | 83.0% |
| Ford Explorer | 1995-2007 | 234.6 | 2008-2020 | 40.8 | 82.6% |
| Toyota 4Runner | 1995-2006 | 82.5 | 2007-2020 | 20.2 | 75.5% |
| GMC Yukon | 1995-2007 | 65.8 | 2008-2020 | 17.8 | 72.9% |
| **TOTAL** | | **660.4** | | **120.8** | **81.7%** |

### Three Interventions at the Inflection
1. **ESC Mandate (FMVSS 126, 2012):** Required electronic stability control in all new vehicles. IIHS: 80% fewer rollovers in SUVs with ESC. 56% reduction in fatal single-vehicle crashes. Up to 10,000 fatal US crashes could be avoided annually if all vehicles equipped.
2. **Unibody Transition:** Explorer switched from body-on-frame to unibody in 2011 6th gen. PubMed study (2014): Compact unibody SUVs reduce crash partner death risk by 18%, own-occupant death risk by ~14%. Tahoe/Expedition/Yukon stayed body-on-frame but got significant structural improvements.
3. **FMVSS 216 Roof Crush Standard (2009):** Strengthened to require 3x vehicle weight resistance (from 1.5x). Critical for rollover survival.

### External Sources
1. NHTSA FARS database — all model-year death counts
2. IIHS ESC study (2006, updated 2011) — effectiveness data
3. NHTSA ESC final rule (FMVSS 126, 2007) — mandate details
4. PubMed study (2014) — unibody vs body-on-frame crash fatality risk
5. NHTSA FMVSS 216 — roof crush standard revision
6. Wikipedia / Firestone tire controversy — context for Explorer's deadly reputation
7. IIHS fatality statistics — vehicle size and weight effects

### Counterargument (must state at full strength)
Fleet composition bias: Early model years have more total deaths because more of them existed during the FARS 2014-2023 window. A 1999 Tahoe was 15-24 years old during our data window; a 2019 Tahoe was 0-4 years old. Older vehicles have higher crash rates regardless of design improvements because they're driven by lower-income owners, maintained less, and have degraded safety equipment (worn tires, non-functional airbags). The 80% reduction we calculated conflates genuine engineering improvement with age-of-vehicle confounding.

### Limitations
- FARS only captures fatal crashes (36K+ annual deaths from ~6.7M total crashes)
- Our model-year death counts don't control for fleet size per model year — a 2003 Tahoe has more units on the road than a 2019 Tahoe
- VMT per model year unknown — older vehicles may be driven fewer miles
- Can't isolate ESC, unibody, or roof crush effects independently from this data
- Survivor bias: vehicles in worst crashes are most likely to be totaled/scrapped, removing them from the denominator

## Journalist
**Mia Crumplezone** — Safety Engineering Editor. Technical but accessible. Gets excited about structural improvements. Kicker: **Trend Watch**
