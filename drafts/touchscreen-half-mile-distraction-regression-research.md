# Research Notes: Touchscreen Half-Mile Distraction Regression

## Angle
Modern touchscreen infotainment systems are measurably getting WORSE at distraction, not better. Vi Bilägare's 2026 repeat study proves the regression with hard numbers. No safety rating penalizes interface-induced distraction, creating a regulatory blind spot.

## Primary Sources

### 1. Vi Bilägare 2026 Touchscreen Distraction Test (July 2026)
- **Published:** July 9, 2026
- **Methodology:** Drivers at 68 mph (110 km/h) performed 4 tasks: raise temp 2°C, change radio station, reset trip meter, dim lights/turn off display
- **Location:** Lunda Airfield, Uppsala, Sweden
- **2026 results:** Average distraction distance = 2,667 feet across 10 new vehicles
- **2022 results (same methodology):** Average = 2,480 feet
- **Change:** +187 feet (+7.5%)
- **Worst performers (2026):** Mazda CX-60, Mercedes-Benz CLA, Toyota Corolla Cross
- **Best new vehicles (2026):** Volvo XC60, Škoda Kodiaq, Tesla Model Y
- **2005 Volvo V70 baseline (buttons/knobs only):** 328 feet
- **8.1x multiplier:** Modern average vs. button-based 2005 V70
- **Via:** CarBuzz reporting (carbuzz.com, Jul 9 2026), The Autopian (2022 study)

### 2. NHTSA Distracted Driving Fatalities (2024 data, released Apr 2026)
- **3,208 killed** in distraction-affected crashes in 2024 (down 2% from 3,283 in 2023)
- **315,167 injured** in distraction-affected crashes, 2024
- **8% of fatal crashes** coded as distraction-affected
- **14% of distraction-affected fatal crashes** involved cellphone use (up from 12% in 2023)
- **Severe undercount:** NHTSA's own 2023 study found distraction may be involved in 29% of all crashes → ~10,500 fatalities, 3.3x the official count
- **Source:** NHTSA "Distracted Driving in 2024" report; NSC Injury Facts analysis

### 3. NOPUS (National Occupant Protection Use Survey) 2024
- Drivers manipulating hand-held electronic devices: **4.5% in 2024** (up 104% from 2.2% in 2015)
- Hand-held cell phone use down from 3.8% (2015) to 1.9% (2024)
- Phone manipulation UP, phone calling DOWN → touchscreen-style interaction growing

### 4. Total Distraction Crashes Surging
- 652,049 distraction-affected crashes in 2022
- 781,958 in 2023 (+20%)
- Fatal: slight decrease (-1.1%)
- Injury: +12%
- Property-damage: +24%

### 5. China Physical Controls Regulation (2027)
- Effective 2027: requires physical controls for core functions (turn signals, PRNDL, wipers, defrosters, windows, hazards)
- Per Sam Abuelsamid (Telemetry VP), quoted in CarBuzz
- No equivalent regulation in US or EU

### 6. IIHS/NHTSA Testing Gap
- IIHS tests: crashworthiness (small overlap, moderate overlap, side, roof), headlights, AEB (vehicle-to-vehicle, pedestrian), seat belt reminders, LATCH
- NHTSA tests: frontal, side, rollover resistance
- **Neither agency tests interface distraction.** No scoring for how long a car's own controls take to operate.
- Top Safety Pick+ awarded to vehicles whose screens may require 3,000+ feet of divided attention

## Original Contribution
The regulatory blind spot calculation:
- AEB reacts in ~1.5 seconds to STOP a crash
- Touchscreen tasks at 68 mph create 26.7 seconds of divided attention (2,667 ft ÷ 100 ft/sec) to CAUSE a crash scenario
- The car's own interface takes 17.8x longer to create a hazard than AEB takes to prevent one
- Yet only AEB is tested and rated

## Math Check
- 68 mph = 99.73 ft/sec ≈ 100 ft/sec
- 2,667 ft ÷ 100 ft/sec = 26.67 seconds
- 328 ft ÷ 100 ft/sec = 3.28 seconds
- Ratio: 26.67 / 3.28 = 8.13x

## Counterarguments (must address)
- Drivers don't stare continuously at the screen; glance time is intermittent
- Vi Bilägare measures total task time, not eyes-off-road time specifically
- Voice controls are improving and can bypass touchscreen interaction
- Modern AEB/lane-keeping can partially compensate for brief inattention
- Automakers are bringing back some physical controls (VW reversal, volume knobs)

## Limitations
- Vi Bilägare is one study, 10 cars, European market (some models differ from US versions)
- 2005 V70 comparison isn't apples-to-apples: fewer features to control
- Distraction distance ≠ eyes-off-road time (driver may alternate glances)
- NHTSA undercount estimate (29%/10,500) is from a 2019-based model, may not reflect current conditions
- No direct causal link proven between touchscreen task time and specific crash outcomes

## Existing Coverage Check
- `distracted-driving-undercount-3x.html` — undercount only, not touchscreen regression
- `distraction-ban-two-year-decay.html` — texting bans, not interface design
- `digital-dashboard-single-point-failure.html` — screen hardware failure, not distraction
- `digital-display-blank-epidemic.html` — blank screens, not distraction
- **No existing story on measurable worsening of touchscreen distraction**
