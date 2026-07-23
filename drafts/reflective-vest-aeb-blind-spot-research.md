# Research: Retroreflective Safety Vests Blind AEB Systems

## Angle
IIHS (January 2025) tested three popular SUVs' pedestrian AEB systems against dummies wearing retroreflective safety clothing — the kind worn by road workers, runners, and cyclists. Result: Honda CR-V and Mazda CX-5 systems failed to slow AT ALL when the dummy wore reflective strips. The Subaru Forester stopped in nearly every trial. The gear designed to make humans visible to drivers makes them invisible to the cars' automated crash prevention systems.

## Primary Sources

### 1. IIHS Study (January 9, 2025)
"High-visibility clothing may thwart pedestrian crash prevention sensors"
- 3 vehicles tested: 2023 Honda CR-V, 2023 Mazda CX-5, 2023 Subaru Forester
- 4 clothing types: black, retroreflective jacket, reflective strips on limbs, white
- 3 lighting levels: no roadway lighting, 10 lux, 20 lux (federally recommended)
- Speed: 25 mph, perpendicular crossing

#### Key Results (Average speed reduction from 25 mph):

**With reflective strips on clothing:**
- Honda CR-V: 0% reduction in ALL conditions (no light, 10 lux, 20 lux)
- Mazda CX-5: 0% reduction in ALL conditions
- Subaru Forester: 100% or 82% reduction in all conditions

**With reflective jacket:**
- Honda CR-V: 0% reduction in ALL conditions
- Mazda CX-5: 53-62% reduction (inconsistent but performed)
- Subaru Forester: 100% in all conditions

**Overall hit rates:**
- CR-V: hit dummy in 84% of ALL test runs
- CX-5: hit dummy in 88% of ALL test runs
- Forester: avoided collision in all but 1 trial

Quote (IIHS President David Harkey): "It's untenable that the clothes that pedestrians, cyclists and roadway workers wear to be safe may make them harder for crash avoidance technology to recognize."

Quote (David Kidd, senior research scientist): "The moving strips didn't have the same effect for the pedestrian AEB systems we tested and probably confounded their sensors."

### 2. Work Zone Fatalities (NHTSA/FHWA 2024)
- 850 people killed in work zone crashes in 2024
- 156 pedestrian deaths in work zones (18%)
- 42,094 injuries in work zone crashes
- 54 worker-pedestrians killed/year average (BLS) after being struck by vehicles
- 500 of 850 deaths in construction zones, 61 in maintenance zones
- 34% of fatal work zone crashes involved speeding
- Work zone deaths up 45% since 2010

### 3. FARS Data (our dataset)
- Honda CR-V: 2,072 deaths, 0.53 rate per 100M VMT, fleet of 3,150,000
- Honda CR-V is the 25th deadliest vehicle by total deaths — but also one of the MOST common vehicles on US roads
- Overall pedestrian AEB effectiveness: 27% crash reduction (daylight), 0% at night on unlit roads
- 75% of fatal pedestrian crashes happen at night

## Original Contribution
Cross-tabulation nobody has done: Pairing the IIHS clothing study data with FARS fleet data and work zone fatality statistics.

The Honda CR-V fleet alone is 3.15 million vehicles. If the CR-V's AEB system cannot detect pedestrians wearing reflective safety gear AT ALL — 0% speed reduction across every lighting condition — then a significant portion of the US vehicle fleet is AEB-blind to the exact people who are most exposed to traffic.

**The math:**
- Honda + Mazda combined US fleet: ~10-12% of all vehicles
- If these brands' AEB systems can't see reflective vests, then for ~1 in 10 vehicles on the road, a worker's safety vest provides NEGATIVE protection value from automated systems
- 156 work zone pedestrian deaths × (whatever fraction involves AEB-equipped vehicles where AEB was blinded) = uncounted "safety gear paradox" deaths
- The IIHS only tested 3 vehicles. "It's not clear... how many other systems might have trouble" — the problem could be much wider

## Limitations
- Only 3 vehicles tested — small sample
- Testing at 25 mph only — higher speeds untested
- AEB systems are continuously updated via software — some may have been fixed since
- FARS doesn't track whether AEB was active or whether the pedestrian was wearing reflective clothing
- The 84%/88% hit rates include all clothing types, not just reflective

## Strongest Counterargument
AEB is still net-positive for pedestrians (27% crash reduction overall). The retroreflective issue is a known edge case that automakers will fix. Subaru already solved it. The real danger is still night + no streetlights, where ALL AEB systems fail equally.

## Journalist
Mia Crumplezone — forensic crash analysis. This is her beat: the gap between what safety systems are designed to do and what they actually do in the real world.

## Kicker
Existential Dread
