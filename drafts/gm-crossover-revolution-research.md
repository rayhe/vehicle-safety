# Research: GM's Crossover Revolution — The Platform Switch That Saved Thousands

## Angle
GM killed the body-on-frame GMT360 mid-size SUV platform (Trailblazer/Envoy, 2002-2009) and replaced it with unibody crossovers (Equinox/Terrain on Theta, Traverse/Acadia/Enclave on Lambda). FARS data reveals this was arguably the single most life-saving product decision in modern GM history: the death rate dropped approximately 8x between the old and new platforms.

## Novel Contribution
A model-replacement-level counterfactual: applying the GMT360's death rate to the unibody fleet's vehicle-miles-traveled to quantify excess deaths averted. Nobody has done this specific cross-tabulation at the platform successor level.

## Kill Test
YES — this is genuinely surprising. Most automotive journalism covers the crossover boom as a comfort/lifestyle trend. Nobody frames it as a public health intervention. The data turns a consumer preference shift ("Americans want crossovers") into a mortality story.

## Primary Sources
1. **FARS data (2014-2023):** Direct from NHTSA FARS bulk data, processed in fars_output.js
2. **GMT360 platform history:** Wikipedia + GM Authority (2002-2009, body-on-frame, hydroformed rails)
3. **IIHS vehicle size/weight studies:** https://www.iihs.org/topics/vehicle-size-and-weight
4. **NHTSA ESC mandate (2012):** https://www.govinfo.gov/content/pkg/FR-2007-06-22/html/E7-11965.htm

## Key Data Points

### GMT360 (body-on-frame, 2002-2009)
| Vehicle | Deaths | Crashes | Rate (per 100M VMT) | Lethality |
|---------|--------|---------|---------------------|-----------|
| Chevy Trailblazer | 2,473 | 3,604 | 2.83 | 68.6% |
| GMC Envoy | 988 | 1,482 | 2.26 | 66.7% |
| **TOTAL** | **3,461** | **5,086** | **~2.6 weighted** | **68.0%** |

### Unibody Replacements (2010+)
| Vehicle | Deaths | Crashes | Rate (per 100M VMT) | Lethality |
|---------|--------|---------|---------------------|-----------|
| Chevy Equinox (Theta) | 1,056 | 1,891 | 0.36 | 55.8% |
| GMC Terrain (Theta) | 290 | 603 | 0.29 | 48.1% |
| Chevy Traverse (Lambda) | 265 | 675 | 0.20 | 39.3% |
| GMC Acadia (Lambda) | 197 | 575 | 0.30 | 34.3% |
| Buick Enclave (Lambda) | 198 | 400 | 0.52 | 49.5% |
| **TOTAL** | **2,006** | **4,144** | **~0.33 weighted** | **48.4%** |

### The Math
- Death rate improvement: 2.6 → 0.33 = **~8x reduction**
- Lethality improvement: 68.0% → 48.4% = **~30% more survivable** per crash
- Counterfactual: If the unibody fleet (62,890 est. VMT units) had the GMT360 death rate, ~16,500 deaths instead of 2,006. Estimated **~14,500 excess deaths averted.**

### Confounders (MUST ACKNOWLEDGE)
1. **Age of fleet:** GMT360 vehicles are 15-22 years old during the study period. Older vehicles have degraded safety equipment.
2. **ESC mandate (2012):** All 2012+ vehicles required electronic stability control. Most unibody replacements have ESC; most GMT360s do not.
3. **Side curtain airbags:** Standard on unibody replacements, optional/absent on early GMT360s.
4. **Driver demographics:** Hand-me-down vehicles attract younger, lower-income drivers who may drive more aggressively.
5. **Not just body-on-frame vs unibody:** It's body-on-frame + old tech + aging vehicle vs unibody + modern tech + newer vehicle. The 8x improvement is a PACKAGE, not a single variable.

### Strongest Counterargument
The rate difference may overstate the contribution of the unibody switch specifically. If you compare the GMT360 to OTHER body-on-frame vehicles of similar vintage (4Runner rate: 1.0, Tahoe rate: 2.49), the GMT360 was bad even for body-on-frame SUVs. And if you compare the unibody crossovers to other unibody vehicles of similar vintage (RAV4 rate: 0.19, CR-V rate: 0.53), they're average. So this may be less about the platform switch per se and more about "GM stopped making a particularly bad SUV and started making average crossovers."

### Methodology Transparency
- Rate = occupant deaths per 100 million vehicle-miles-traveled (estimated)
- Fleet size estimated from public sales data
- VMT estimated from NHTS annual miles per vehicle × fleet size
- Lethality = occupant deaths / total fatal crashes involving the vehicle
- Counterfactual = GMT360 combined rate × unibody fleet VMT

## Assigned Journalist
**Mia Crumplezone** — Safety Engineering Editor. This is pure safety engineering analysis: platform architecture, crumple zones, structural design. Her beat exactly.

## Kicker
**Trend Watch** or **The Gap**
