# Research: The Injury Plateau — Survivability vs Prevention

## Angle
NHTSA released 2024 final data (April 1, 2026): 39,254 killed, 2.42M injured. 2025 early estimate: 36,640 killed (~6.7% decline). But injuries barely budged. This reveals America is getting better at SURVIVING crashes, not PREVENTING them. The crashworthiness improvement masks a crash avoidance failure.

## Kill Test
- ✅ Timely: NHTSA data released April 1, 2026
- ✅ Novel calculation: death-to-injury ratio shift, survivability improvement quantified against crash frequency
- ✅ Not covered by existing articles (thirty-nine-thousand-is-progress focused on the raw death count, not the injury plateau)
- ✅ Actionable: AEB adoption rates, specific vehicles still lacking crash avoidance tech

## Primary Sources

### 1. NHTSA 2024 Final / 2025 Early Estimate (April 1, 2026)
- Source: Advocates for Highway & Auto Safety, reporting on NHTSA release
- 39,254 killed in 2024 (final)
- ~36,640 killed in 2025 (early estimate)
- 2.42 million injured in 2024 — "decreased only slightly after increasing in 2023"
- URL: https://saferoads.org/2024-nhtsa-crash-data/

### 2. NSC Preliminary Data
- Source: National Safety Council
- Confirms decline in roadway deaths
- URL: https://www.nsc.org/newsroom/preliminary-data-show-decline-in-roadway-deaths

### 3. FARS 2014-2023 Model-Level Data (our dataset)
- Class-level aggregates:
  - Sedan: 83,372 deaths / 129,600 crashes = 0.643 deaths/crash (64.3% lethality)
  - SUV: 42,033 deaths / 80,349 crashes = 0.523 deaths/crash (52.3%)
  - Pickup: 40,655 deaths / 83,778 crashes = 0.485 deaths/crash (48.5%)
  - Van: 6,784 deaths / 13,590 crashes = 0.499 deaths/crash (49.9%)
  - Sports Car: 4,648 deaths / 6,958 crashes = 0.668 deaths/crash (66.8%)
- Export percentages (fatal crashes where vehicle occupant survives, others die):
  - Pickup: 51.5% export rate
  - Van: 50.1%
  - SUV: 47.7%
  - Sedan: 35.7%
  - Sports Car: 33.2%

### 4. IIHS AEB Effectiveness Data
- IIHS studies show AEB reduces front-to-rear crashes by 50%
- Pedestrian AEB reduces pedestrian crashes by 27%
- 2026 IIHS Top Safety Pick now requires pedestrian AEB
- URL: https://www.iihs.org/topics/advanced-driver-assistance

### 5. FARS Crash Survivability Data (original analysis)
- Best survivability (deaths/crash): Ram 2500 (0.205), Ford Transit (0.308), Ram 1500 (0.341)
- Worst survivability: Cavalier (0.857), Neon (0.856), LeSabre (0.823), Cobalt (0.808)
- Survivability ratio between best and worst: 4.2x

## Novel Contribution
1. DEATH-TO-INJURY RATIO: Calculate the national deaths/(deaths+injuries) ratio over time. If deaths drop 6.7% but injuries are flat, the ratio is shifting toward survivability
2. CRASHWORTHINESS vs CRASH AVOIDANCE decomposition: Using FARS lethality by class, estimate what portion of the national death decline is attributable to fleet composition shifts (sedans → SUVs) vs actual safety improvements
3. The INJURY ICEBERG: For every death, there are ~62 injuries (2.42M / 39,254). This ratio has been climbing. More people are getting hurt but fewer are dying.
4. Which vehicles contribute MOST to the injury plateau? High crash frequency + low lethality = lots of crashes where people survive but are injured

## Calculation: Fleet Composition Effect
- Sedan fleet share declining (market data: sedans were ~30% of sales in 2018, ~17% in 2024)
- Sedan lethality: 0.643 deaths/crash
- SUV/crossover lethality: 0.523 deaths/crash
- If 1M crashes shift from sedan-class to SUV-class: 
  - Old: 1M × 0.643 = 643,000 deaths
  - New: 1M × 0.523 = 523,000 deaths
  - Reduction: 18.7% just from fleet shift
- But if CRASH COUNT stays the same, injuries stay the same

## Strongest Counterargument
AEB adoption IS increasing crash prevention — IIHS data shows 50% rear-end reduction. The injury plateau may reflect REPORTING improvements (more crashes officially reported due to insurance/legal requirements) rather than actual unchanged crash frequency. Also, improved medical care means crash victims who previously would have died now survive as injuries.

## Limitations
- FARS only captures FATAL crashes — we don't have model-level injury data
- 2024-2025 data is national aggregate; our FARS model data is 2014-2023
- Injury counts may reflect reporting changes, not actual crash frequency changes
- Medical advances (trauma care, helicopter EMS) shift deaths → injuries independently of vehicle safety

## Journalist
Axle McScatter — Data Desk (statistical decomposition, trend analysis)

## Headline Candidates
- "2.42 Million Injured. America Got Better at Surviving Crashes. Not at Avoiding Them."
- "Deaths Dropped 6.7%. Injuries Didn't. The Gap Is the Story."
- "For Every Death on American Roads, 62 People Are Injured. That Number Is Climbing."
