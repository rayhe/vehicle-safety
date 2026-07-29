# Research: The One Percent Defense — Recall Math

## Angle
Automakers routinely recall hundreds of thousands of vehicles while claiming "less than 1%" actually have the defect. This week: Ford Bronco (565,691, ~1% defective) and BMW (318,495, <1% affected). This is an industry-wide pattern. The original analysis: what happens when you cross-reference these "1% defect" claims with NHTSA's own recall completion rate data?

## Key Data Points

### This Week's Recalls (July 2026)
- **Ford Bronco (26S55):** 565,691 2021-2026 Broncos recalled for engine wiring harness fire risk. 15 fire incidents reported (Oct 2024–Jun 2026). Ford estimates ~1% of population has defect (~5,657 vehicles). Remedy: dealers install sheathing over wiring. No injuries reported.
- **BMW (expansion of 26V056):** 318,495 vehicles (3 Series, 4 Series, 5 Series, X3, X4, Z4, plus Toyota Supra) recalled for starter motor fire risk. BMW anticipates <1% affected. Supplier: Valeo — traced to specific production run. Remedy: replace starter.
- **Combined:** ~884,000 vehicles recalled in one week from two brands, both claiming ~1% defect rate = ~8,840 actually defective vehicles

### NHTSA Recall Completion Rate Data
- **Weighted average:** 65.8% for recalls 2012-2022 (at maturity, 5+ quarters)
- **2010-2022 average:** 61% remedied by fifth quarter
- **By vehicle age at recall:**
  - 1-3 years old: ~80% completion
  - 6+ years old: ~56% completion
  - 10+ years old: ~44% completion
- **By component:** Electrical system recalls: 51.5% completion (LOWEST category)
- **Chrysler Jeep example:** 3% completion rate for older SUV fuel tank recall (1.5M vehicles)

### The "Less Than 1%" Pattern (Historical)
- VW Atlas (2020-2021): 54,429 recalled, <1% expected to have defect
- GM (2016): 2,633 recalled, 1% estimated defective, "only approximately 11 vehicles" needed repair
- FCA Ram 1500 (2019-2020): 160,229 recalled, 1% estimated affected
- Ford Bronco (2026): 565,691 recalled, ~1% affected
- BMW (2026): 318,495 recalled, <1% affected

## Original Analysis: The Probability Problem

If 1% of 565,691 Broncos are actually defective = 5,657 defective vehicles.
If recall completion rate for electrical/wiring recalls = 51.5% (NHTSA data for electrical category).

Assuming defective vehicles are randomly distributed in the recall population:
- 51.5% of owners bring their car in → ~291,331 vehicles inspected
- If each inspection has equal probability of finding a defective vehicle, expected defective found = 5,657 × 0.515 = ~2,913
- **~2,744 defective Broncos with fire-prone wiring remain unrepaired on the road**

But it's worse. The Bronco recall spans 2021-2026 model years:
- 2021-2022 Broncos are 4-5 years old → completion rate ~60-70%
- 2023-2024 Broncos are 2-3 years old → completion rate ~80%
- 2025-2026 Broncos are 0-1 years old → completion rate ~85%

Weighted by production volume (heavier toward older years where more units exist in fleet):
- Overall expected completion: ~65-70%
- Expected defective vehicles found: 5,657 × 0.67 = ~3,790
- **~1,867 defective Broncos remain unfixed**

For BMW: 318,495 recalled, <1% = ~3,185 defective
- Many are 2021-2024 models (2-5 years old) → ~65% completion
- Expected defective found: 3,185 × 0.65 = ~2,070
- **~1,115 defective BMWs remain unfixed**

## The Paradox
The "1% defense" is meant to reassure. But it creates a math problem:
1. You can't tell individual owners if THEIR car is defective
2. Completion rates are never 100%
3. The defective vehicles that DON'T come in for repair are the ones that catch fire
4. Low defect rates don't reduce the absolute number of unfixed defective vehicles enough to matter

## Counterargument (required)
The "1% defense" IS genuinely informative. Owners deserve to know their personal risk level. A recall affecting 100% of vehicles is categorically different from one affecting 1%. The claim helps prevent panic and unnecessary rush to dealers. BMW even traced the defect to specific Valeo starter production runs — they DO know which vehicles are most likely affected. VIN-specific risk communication would be more useful but is not currently standard in NHTSA's recall system.

## Sources
1. NHTSA Recall Completion Rates Report, Jan 2025 update
2. NHTSA 2024 Annual Recalls Report  
3. Ford recall 26S55 (NHTSA)
4. BMW recall expansion of 26V056 (NHTSA)
5. USA Today, "Ford touts quality, but recalls nearly 1 million vehicles in a week," Jul 27, 2026
6. Reuters, "BMW to recall over 318,000 US vehicles over starter motor overheating risk," Jul 23, 2026
7. CRS Report R46398, "Motor Vehicle Safety: Issues for Congress"

## Journalist
Rex Driverton — investigations
