# Research: AEB Phantom Braking — Safety System Causing the Crashes It Prevents

## Angle
AEB (Automatic Emergency Braking) is causing the exact crash type it was designed to prevent: rear-end collisions. NHTSA mandated AEB for all vehicles by 2029 (FMVSS 127), projected to save 360 lives/year. But the rule's false-positive testing is minimal — two scenarios that NHTSA itself admits are "by no means comprehensive." Meanwhile, millions of vehicles are being recalled or investigated for phantom braking.

## Journalist
**Mia Crumplezone** — Safety Engineering Editor. This is a sensor calibration / engineering tradeoff story.

## Kill Test
Is this genuinely newsworthy? **YES.**
- Hyundai recall (421,078 vehicles, Jun 2026) is the immediate news hook
- Honda investigation (~3M vehicles, 2022-present) is ongoing
- NHTSA just finalized the AEB mandate (Apr 2024) but admitted false-positive tests are inadequate
- Nobody's running the math on false-positive crash rates vs. lives saved
- Inverse angle from our existing AEB articles (which covered mandate delays, lawsuit to kill rule, testing speeds)

## Primary Sources

### 1. Hyundai Recall — 26V-XXX (June 2026)
- 421,078 vehicles recalled: 2025-26 Santa Cruz, Tucson Hybrid, Tucson PHEV
- Forward Collision Avoidance (FCA) system too sensitive — front camera software triggers premature braking
- 376 complaints over 18 months
- 4 rear-end crashes with injuries
- Fix: software update, notifications starting July 17, 2026
- Hyundai described original software as "conservatively tuned" — new version "better aligned with operator expectation"
- Source: NHTSA recall filing, Men's Journal (Jun 23, 2026), CarBuzz, CNN/WVLT

### 2. Honda CMBS Investigation — PE 22-003 (Feb 2022-present)
- NHTSA engineering analysis into ~2,997,604 Honda vehicles
- 2017-2022 Accord, Accord Hybrid, CR-V, CR-V Hybrid
- Started with 1.7M vehicles (2022), expanded to ~3M
- 278+ ODI complaints, 47 crashes, 93 injuries
- Honda told customers phantom braking was "normal AEB operation" and "inadequate understanding" of system
- Second probe opened into 295,125 Insight/Passport vehicles: 106 incidents, 8 injuries, 3 crashes (some with fires)
- Source: NHTSA ODI Resume PE 22-003, Carscoops (Apr 2024, Jan 2025)

### 3. NHTSA FMVSS 127 Final Rule (Apr 29, 2024)
- AEB mandatory for all passenger cars and light trucks by September 2029
- Projects: save 360 lives/year, prevent 24,000 injuries/year
- False-positive testing: only TWO scenarios — steel trench plate + vehicle pass-through
- NHTSA's own words: "by no means comprehensive, nor sufficient to eliminate susceptibility to false activations"
- "Vehicles that have excessive false positive activations may pose an unreasonable risk to safety and may be considered to have a safety-related defect"
- NHTSA punted on comprehensive false-positive testing, saying manufacturers have "strong incentive to mitigate false positives"
- Source: NHTSA Final Rule, transportation.gov press release

### 4. FARS rear-end crash data (2019 baseline from FMVSS 127 NPRM)
- 1,798 fatal rear-end crashes in 2019
- 574,000 injury rear-end crashes
- 1,547,000 property-damage-only rear-end crashes
- 38% of fatal rear-end crashes at ≥65 mph posted speed
- 51% of fatal rear-end crashes in daylight

## Original Contribution
**The False-Positive Exchange Rate:**
- Honda: 47 crashes / 93 injuries across ~3M vehicles over ~4 years = ~12 crashes/yr per million AEB-equipped vehicles
- Hyundai: 4 crashes across 421K vehicles over 18 months = ~6.3 crashes/yr per million vehicles
- US registered vehicles: ~290M. If all equipped with AEB (by 2029 mandate):
  - At Honda's rate: ~3,480 false-positive crashes/year
  - At Hyundai's rate: ~1,827 false-positive crashes/year
- NHTSA projects AEB saves 360 lives + prevents 24,000 injuries
- Even at worst-case Honda rates, the net calculus favors AEB
- BUT: the false-positive crashes are non-trivially dangerous, and NHTSA isn't measuring them
- The exchange rate: for every life AEB saves, it may cause 5-10 additional rear-end crashes from false activation

## Strongest Counterargument
AEB overwhelmingly saves lives. IIHS found AEB reduced rear-end striking crashes by 50% for cars. The false-positive rate is a fraction of crashes prevented. The rational response is "tune the systems better" not "abandon AEB." Honda and Hyundai's problems are specific implementations, not fundamental to the technology.

## Limitations
- Honda/Hyundai complaint rates are certainly undercounted (NHTSA complaints capture only a fraction of incidents)
- Can't directly compare prevented crashes (counterfactual) to caused crashes (observed)
- Fleet-wide extrapolation from two manufacturers' specific defects is speculative
- Not all phantom braking events result in crashes — many are just scary
