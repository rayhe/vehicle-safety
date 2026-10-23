# Research: 1251-range-rover-rearview-camera-drain-holes

## Story
Jaguar Land Rover is recalling **93,997 Range Rovers** (2022-2026 model years) in the US because rainwater can kill the rearview camera. The camera housing has too few drain holes, so water gets trapped, damages the camera, and the backup image fails to display. The dealer remedy: drill additional drain holes in the underside of the tailgate trim, then inspect and replace the camera if needed, free of charge. Interim owner letters expected December 11, 2026; more letters once the "final remedy" is available (phased fix).

## Primary sources
1. **NHTSA recall API record, campaign 26V678000** (report received 15/10/2026, JLR recall no. D171): Summary - "Water may not be able to drain away from the rearview camera due to insufficient drain holes, which may result in damage to the rearview camera." Consequence - "A rearview camera image that does not display can reduce the driver's view behind the vehicle, increasing the risk of a crash." Remedy - dealers drill additional drain holes in the underside of the tailgate trim; inspect/replace camera as necessary; free. Interim letters expected Dec 11, 2026. Owner contact: Land Rover 800-637-6837.
2. **Reuters, Oct 23, 2026** (Sumedha Mukherjee): 93,997 US vehicles, 2022-2026 Range Rover, insufficient drain holes trap water, dealers drill drain holes + replace camera as needed. https://www.reuters.com/legal/litigation/jaguar-recall-about-94000-us-vehicles-over-rearview-camera-issue-nhtsa-says-2026-10-23/
3. **NHTSA recall database** (nhtsa.gov/recalls) — campaign 26V678000 searchable by VIN; confirms back-over-prevention camera component category.
4. **NHTSA recall API record, campaign 24V678000** (report received 12/09/2024): JLR's prior camera recall — Near Field Sensing Module overheating killed 3D surround/rearview camera images on 2024 Defender, Discovery Sport, Range Rover, Evoque, Velar, Range Rover Sport. This is the second JLR rearview-camera recall in two years, on a nearly identical campaign number.

## Context data (why the camera matters)
- NHTSA mandated rear visibility systems in all new vehicles under 10,000 lbs effective May 1, 2018 (FMVSS 111), citing roughly 210 backover deaths and 15,000 backover injuries per year; children under 5 account for ~31% of backover deaths; adults 70+ about 26%.
- AAP annual meeting study (Sept 2025, UTHealth Houston / Dr. Natalie Drucker): pediatric severe backover injuries fell 62% and backover child deaths fell 78% after the 2018 mandate; 71 trauma-center cases + 28 Kids and Car Safety cases, ages under 5, 2011-2024.
- IIHS found backup crashes fell 17% in camera-equipped cars.
- Backup camera screens go dark -> driver loses a federally mandated field of vision (10x20 feet directly behind the vehicle).

## Kill test
- Newsworthy? Yes. Six-figure luxury SUV defeated by rainwater because the engineers did not put enough drain holes in the camera housing. The federal remedy is a drill.
- Novel angle? Yes. Not a software glitch, not a supplier fault — a drainage-design failure on a vehicle whose brand promises go-anywhere capability. Second JLR camera recall in two years with a nearly identical campaign number (24V678000 vs 26V678000). Phased remedy: interim letters in December, "final remedy" later — the fix is not fully ready at recall time.
- Data foundation? Primary: NHTSA campaign records 26V678000 + 24V678000. Secondary: Reuters. Context: NHTSA backover fatality estimates, AAP 2025 study, IIHS.
- Distinct from queue? Full-queue dup check: Range Rover articles #1011 (subframe cracks) and #1017 (single-car PCM recall) are different defects. Camera articles #1128 (Ford Ranger counterfeit capacitor/SYNC4), #1131 (Ford 146 recalls), #1215 (Ranger black screen via radio) are different makes/mechanisms. No JLR camera article exists. PASS.

## Proposed angle (Mia Crumplezone, Safety Engineering Editor)
Judgmental design-analysis voice: this is a design-failure story, not a software story. Water management is first-100-days engineering. The Range Rover's brand is invincible off-road; its camera dies in a rainstorm. Opined take: a $110K SUV that cannot survive weather should be judged on the drainage hole count. Actionable: 2022-2026 Range Rover owners — check VIN at nhtsa.gov/recalls, expect interim letter Dec 11 2026, test your camera now (shift to reverse, confirm image), keep using mirrors/window checks, backover deaths are heavily children under 5.
