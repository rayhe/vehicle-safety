# Research: Ford's 1.0L EcoBoost "Unreasonable Risk" Investigation

## Core Story
NHTSA upgraded its defect investigation into 135,000 Ford Fiesta, Focus, and EcoSport vehicles with 1.0L EcoBoost engines (2014-2021 MY) to an engineering analysis on August 3, 2026, declaring "unreasonable risk to motor vehicle safety."

## Key Facts (from Reuters, Aug 3 2026)
- 135,000 affected vehicles: Ford Fiesta, Ford Focus, Ford EcoSport
- All equipped with 1.0L EcoBoost engine
- Model years 2014-2021
- 355 complaints alleging oil pressure warning followed by complete loss of power or engine seizure
- Timing belt material degrades, creates debris that clogs mesh oil pump pick-up screen
- Average failure at ~70,000 miles
- 98% of failures occurred BEFORE the 150,000-mile suggested timing belt replacement interval
- Failures occur despite proper and routine oil maintenance
- Most failures have insufficient warning before loss of power or seizure
- All three models have been DISCONTINUED by Ford
- Engineering analysis = required step before NHTSA can compel recall
- Source: https://www.reuters.com/legal/litigation/us-says-some-older-ford-cars-suvs-pose-unreasonable-safety-risks-2026-08-03/

## FARS Cross-Reference Data
- Ford FOCUS: 3,046 deaths across 4,455 fatal crashes (2014-2023 FARS)
  - Fatality rate: 2.52 per 100M VMT
  - Conditional lethality: 0.684 (top 25 most lethal per-crash)
  - Impairment: 19.4% (below average - these aren't drunk drivers dying)
- Ford FIESTA: 513 deaths across 1,084 fatal crashes
  - Rate: 1.02/100M VMT
  - Lethality: 0.473
  - Impairment: 16.6% (well below average)
- Ford ECOSPORT: 86 deaths across 142 fatal crashes
  - Rate: 0.14/100M VMT
  - Lethality: 0.606

## EcoBoost 1.0L History
- Won International Engine of the Year award (multiple times: 2012, 2013, 2014, 2015, 2016, 2017)
- Was Ford's flagship small-engine technology
- Three-cylinder design, turbocharged

## Angle
Award-winning engine design degrades from the inside out. The timing belt sheds material into the oil system, clogs the pump pickup screen, and the engine seizes without warning on highways. Ford discontinued every model that used it. NHTSA now calls it an "unreasonable risk." Meanwhile, FARS shows the Focus is already one of the deadliest sedans per-crash - a sudden engine seizure on a highway in a car with 0.684 lethality is a particularly dangerous failure mode.

## Original Contribution
Cross-referencing NHTSA's engineering analysis with FARS conditional lethality data. The Focus's 0.684 lethality ratio means that when a Focus is in a fatal crash, 68.4% of the time it's the Focus occupant who dies. A sudden engine stall on a highway puts these cars directly in the path of following traffic - in the worst possible configuration for their weakest structural attribute.

## Sources
1. Reuters, Aug 3, 2026 - NHTSA upgrade announcement
2. NHTSA FARS 2014-2023 dataset (embedded in fars_output.js)
3. International Engine of the Year archive (EcoBoost wins)
4. NHTSA recalls database
