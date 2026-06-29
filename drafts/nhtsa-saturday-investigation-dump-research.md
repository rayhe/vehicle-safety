# Research: NHTSA Saturday Investigation Dump

## Angle
NHTSA closed two major vehicle safety investigations on Saturday June 27, 2026. Both were closed after manufacturers issued voluntary recalls — not because NHTSA compelled them. The Saturday afternoon closure is a classic government news dump, timed to minimize coverage.

## The Two Closures (June 27, 2026)

### 1. Tesla Model 3/Y Steering Loss — 376,241 vehicles
- **Investigation opened:** July 2023 (Preliminary Evaluation)
- **Upgraded to Engineering Analysis:** Early 2024
- **Tesla recall:** Early 2025 (376,000 vehicles)
- **Investigation closed:** June 27, 2026
- **Duration open:** ~35 months (nearly 3 years)
- **Tesla's position:** Recall "was not in response to NHTSA's investigation"
- **Defect:** Power steering assist failure — increased effort to turn wheel, especially at low speeds
- **Fix:** OTA software update to prevent overvoltage breakdown on PCB motor drive components
- **Source:** Reuters, June 27, 2026; Devdiscourse, June 27, 2026

### 2. Honda Odyssey Side Airbag — 441,002 vehicles
- **Investigation opened:** October 2025 (Preliminary Evaluation)
- **Honda recall:** April 2026 (certain 2018-2022 Odysseys)
- **Investigation closed:** June 27, 2026
- **Duration open:** ~8 months
- **Defect:** Side airbags deploying unexpectedly while driving, including over potholes
- **Injury count:** 130 warranty claims, 25 injuries, 0 deaths (Jan 2017 – Apr 2026)
- **Source:** Reuters, June 27, 2026

## The Broader Pattern
- Since 1966, NHTSA has been involved in recalls of 390+ million vehicles
- Vast majority are "voluntary" — manufacturer-initiated
- NHTSA can order recalls via courts (49 USC §30118) but almost never does
- The mechanism: NHTSA opens investigation → company voluntarily recalls → NHTSA closes investigation
- Companies get to say the recall was "not in response to" NHTSA

## Original Calculation: The Exposure Window

### Total vehicle-years of known defect exposure:
- **Tesla:** 376,241 vehicles × ~1.5 years (Jul 2023 to early 2025 recall) = 564,362 vehicle-years
  - But investigation stayed open until June 2026, another 1.5 years AFTER the recall
  - Pre-recall exposure: 564,362 vehicle-years
  
- **Honda:** 441,002 vehicles × ~0.5 years (Oct 2025 to Apr 2026 recall) = 220,501 vehicle-years
  - But defect existed from Jan 2017 to Apr 2026 (9+ years)
  - NHTSA only opened the investigation in Oct 2025

### Expected crash involvement during exposure:
Using 2024 national fatality rate: 1.19 per 100M VMT
Average annual VMT: ~11,500 miles (FHWA)

Pre-recall exposure (Tesla): 564,362 vehicle-years × 11,500 miles = 6.49 billion VMT
Expected fatal crashes involving these vehicles: ~77

Pre-recall exposure (Honda): 220,501 vehicle-years × 11,500 miles = 2.54 billion VMT  
Expected fatal crashes involving these vehicles: ~30

**NOTE:** These are NOT deaths caused by the defect. They're the total expected traffic fatalities involving these vehicles during the window when the defect was known but unfixed. The defect-attributable fraction is unknown. But it establishes that these weren't hypothetical risks — real crashes were happening while the investigations crawled forward.

## Contrast: What's Still Open

Meanwhile, THREE Tesla investigations remain active:
1. **EA26002** — FSD camera visibility failures — 3,203,754 vehicles — Engineering Analysis (final step before recall)
2. **PE25012** — FSD traffic violations — ~2,880,000 vehicles — Preliminary Evaluation
3. **Katy, TX fatal crash** — Special Crash Investigation + NTSB probe — 1 incident

Total vehicles under active Tesla investigation: ~6.1 million

## FARS Connection
- Honda Odyssey in FARS: 864 deaths, 2,028 crashes, rate 0.93 per 100M VMT
- Odyssey death-per-crash ratio: 0.426 — 57% of fatal crashes involving an Odyssey kill someone OTHER than the Odyssey occupant
- Odyssey is actually a relatively safe vehicle for its occupants

## Sources
1. Reuters — NHTSA closes Tesla steering probe (June 27, 2026)
2. Reuters — NHTSA closes Honda Odyssey evaluation (June 27, 2026)  
3. NHTSA — Motor Vehicle Safety Defects and Recalls guide
4. NHTSA — 2024 FARS annual data (39,254 deaths)
5. FARS — per-model fatality data 2014-2023
6. Memeburn — Tesla FSD investigation EA26002 (3.2M vehicles)

## Kill Test
**Is this genuinely newsworthy?** Yes. Two investigation closures on a Saturday is a news dump pattern worth calling out. The exposure-window calculation is original — nobody else is quantifying how many vehicle-years of known defect exposure accumulate during investigation windows.

**Novel angle?** The "Saturday dump" framing is editorial opinion well-supported by precedent. The exposure-window calculation is a genuinely original metric.

**After 388 articles, is this fresh?** We haven't covered the investigation-closure pattern specifically, nor the Saturday dump tactic, nor the "voluntary recall" kabuki theater.

## Journalist
**Rex Driverton** — investigation beat. Dark humor, paradoxes. Perfect for calling out NHTSA's procedural theater.
