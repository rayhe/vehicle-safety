# Research: FSD Override Architecture — 50 Investigations, One Design Question

## Angle
NTSB released preliminary findings (July 15, 2026) on the Katy, Texas crash: driver Michael Butler, 44, overrode FSD by pressing the accelerator to 100%, reaching 70+ mph on a 30 mph residential street, killing 76-year-old Martha Avila in her home. NTSB says the data shows driver override caused the crash. Tesla says they're cleared. Media says "human error."

**Nobody is asking the architecture question:** When Butler pressed the gas, FSD stepped aside entirely. No speed governor. No geofenced speed limit. No resistance. No escalating warning. The system's override protocol handed full authority to a driver accelerating to 2.3× the posted speed limit on a residential street. That's not a bug — it's a design choice. And after 50 special investigations and 273 identified crashes involving Tesla ADAS systems, the override architecture itself deserves scrutiny as a potential design defect.

## Kill Test
- ✓ Timely: NTSB findings released July 15, 2026 (yesterday)
- ✓ Novel: No coverage examines override architecture as a design choice. All coverage frames this as "driver vs. system" binary.
- ✓ Data-backed: 50 investigations, 273 crashes, 3.2M-vehicle probe, ~24 deaths, FARS fleet data
- ✓ Original contribution: FARS paradox — Tesla Model 3/Y have among the lowest fleet fatality rates (0.03-0.05 per 100M VMT), yet NHTSA has opened more special ADAS investigations into Tesla than all other automakers combined. Safest fleet by death rate = most investigated fleet for driver-assist failures.
- ✓ Actionable: Buyers should understand what happens when they override ADAS — full authority transfer, no guardrails

## Primary Sources (3+)

### Source 1: NTSB Preliminary Report — Katy, Texas Crash (July 15, 2026)
- 2025 Tesla Model 3, single driver (Michael Butler, 44)
- Traveling east on Rose Hollow Lane, Katy, TX
- Driver had engaged FSD (Supervised)
- Electronic data: driver manually overrode FSD by pressing accelerator pedal to 100%
- Vehicle speed >70 mph at crash (posted limit: 30 mph)
- Vehicle continued through intersection, departed roadway, struck home
- Martha Avila, 76, killed — died at hospital
- Clear weather, dry road, daylight
- Butler arrested July 1, charged with manslaughter, bail $150,000
- Security camera footage confirmed the trajectory
- NHTSA also opened special investigation
- URL: NTSB report (not yet available as direct URL)
- Corroborated by Reuters, USA TODAY, Fox26 Houston

### Source 2: NHTSA FSD Investigation Data (cumulative through 2026)
- Since 2016: ~50 special investigations into Tesla crashes involving ADAS
- ~24 deaths reported across those investigations
- NHTSA has identified at least 273 crashes involving Tesla driver-assist systems
- March 18, 2026: NHTSA escalated FSD probe to Engineering Analysis (EA26002)
- Covers 3.2 million vehicles (Model S, 3, X, Y, Cybertruck)
- Engineering Analysis = final step before mandated recall
- Central finding: FSD degradation detection system failed to identify common conditions (sun glare, dust) until immediately before impact
- 3 concurrent NHTSA investigations into FSD/Autopilot
- Tesla recalled 363,000 FSD-equipped vehicles (earlier recall for traffic violations)
- Sources: NHTSA, Reuters, Carscoops, Automotive World

### Source 3: FARS Data (2014-2023) — Tesla Fleet Fatality Rates
- Tesla Model 3: 92 deaths, 212 crashes, 1.575M fleet, rate 0.05 per 100M VMT
- Tesla Model Y: 57 deaths, 112 crashes, 1.75M fleet, rate 0.03 per 100M VMT
- Tesla Model S: 100 deaths, 134 crashes, 175K fleet, rate 0.50 per 100M VMT
- Tesla Model X: 29 deaths, 45 crashes, 157.5K fleet, rate 0.15 per 100M VMT
- Model Y rate (0.03) is among the lowest in the entire FARS dataset
- Model 3 rate (0.05) is also well below the fleet average
- **The paradox:** The brand with one of the lowest fleet fatality rates has the most ADAS-related investigations of any manufacturer

### Source 4: Level 2 ADAS Classification & Override Design
- FSD is classified as SAE Level 2 — requires continuous driver supervision
- Level 2 by definition means the driver can (and must) override at any time
- But nothing in the standard requires that override be unlimited
- Aviation autopilot: disengagement triggers layered safeguards (flight envelope protection, stick shaker, ground proximity warnings)
- No automotive standard currently requires speed-limited override or geofenced override resistance

## Counterargument (strongest case against thesis)
Tesla would argue — and legitimately — that the driver is responsible for vehicle control at all times under Level 2. Butler was committing a crime (70 in a 30 zone) regardless of FSD. If the system prevented accelerator override, it could create its own safety hazard (e.g., inability to accelerate to avoid a collision). The override is a feature, not a bug: it ensures the driver always retains authority, which is the entire point of supervised autonomy.

This is a strong argument. But it doesn't address the architectural question: could the system have intermediate states? Speed-limited override? Audible warnings when override speed exceeds posted limits? The binary of "FSD controls" vs. "driver has full authority" is a design choice, not a physical necessity.

## Limitations
- FARS data covers 2014-2023 and doesn't capture ADAS involvement in crashes — FARS only records whether the crash was fatal, not which system was active
- The 50-investigation, 273-crash figures come from NHTSA special investigations, not a systematic count — there's no comprehensive database of ADAS-involved crashes
- Tesla's fleet is younger than the average fleet, which partially explains its low fatality rate (newer vehicles are structurally safer)
- We cannot determine from available data what fraction of the 273 crashes involved driver override vs. system failure
- The Katy crash investigation is preliminary — full NTSB report not yet issued

## Journalist
**Rex Driverton** — Senior Crash Correspondent. Investigation piece with paradox at its core. Deadpan dark humor, noir detective tone.

## Slug
`fsd-override-50-investigations-architecture`

## Headline Candidates
- "50 Investigations Later, Nobody's Asking Why FSD Stepped Aside at 70 mph"
- "NTSB Cleared Tesla's FSD. The Override Architecture Wasn't on Trial."
- "Tesla's Safest Fleet Has Its Most Investigated Feature"
