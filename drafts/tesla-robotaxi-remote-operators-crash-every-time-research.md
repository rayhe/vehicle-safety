# Research: Tesla Robotaxi Remote Operators — Every Disclosed Takeover Ends in a Crash

## Angle
Tesla has filed 22 unique ADS crash reports with NHTSA since its Austin robotaxi launch in June 2025. Three of those involve remote operators taking direct control of the vehicle. All three remote-operator interventions that appear in crash reports ended in collisions. Tesla's competitor Waymo explicitly does not use remote driving — its agents advise but don't steer. The architectural difference is the story.

## Kill Test
- **Novel?** Yes. No published analysis cross-references Tesla's remote-operator crash pattern against Waymo's stated teleoperation policy. The Houston filing (report 13781-15395) is the first time Tesla formally coded "Remote (Commercial / Test)" as the driver type in NHTSA structured data.
- **Newsworthy?** Yes. Raises regulatory questions about who is "driving" when no one is in the vehicle. Three crashes from remote operators out of 22 total is 13.6% — a significant fraction.
- **Data-driven?** Yes. NHTSA filings are primary sources. Fleet data from Texas DMV and independent Robotaxi Tracker.

## Primary Sources

### 1. NHTSA Standing General Order — Tesla ADS Crash Reports
- 22 unique incidents since Austin launch (Jul 2025 — Jul 2026)
- Report 13781-15395 (Houston, May 2026): Remote operator drove into tree stump at 2 mph. First filing where Tesla coded Driver/Operator Type as "Remote (Commercial / Test)"
- Jul 2025 incident: Teleoperator took control, accelerated, turned left, drove up curb into metal fence at 8 mph
- Jan 2026 incident: Teleoperator took over for navigation, drove into temporary construction barricade at 9 mph
- Pattern: ADS gets stuck → human takes over remotely → human crashes car

### 2. Electrek (Jul 20, 2026) — "Tesla remote operator crashed a 'Robotaxi' in Houston"
- 4 new crash reports filed mid May to mid June 2026
- Houston crash: tree stump, 2 mph, minor damage
- Dallas crash: hit metal chain blocking parking lot entrance at 5 mph — repeat of Sep 2025 Austin incident (same maneuver, same obstacle type, 8 months apart)
- URL: electrek.co/2026/07/20/tesla-robotaxi-remote-operator-crash-houston/

### 3. Electrek (Jun 16, 2026) — "Tesla 'Robotaxis' are not crashing because they are not running"
- Tesla total: 18 ADS incidents vs Waymo's ~697
- Active fleet: 31 vehicles total, only 14 unsupervised
- Texas DMV: 42 Tesla permits vs 577 Waymo, 317 Avride
- Fleet peaked at 25 unsupervised in late April, now declining
- Musk promised 500 in Austin by end of 2025, actually delivered 14 unsupervised
- URL: electrek.co/2026/06/16/tesla-robotaxi-clean-crash-record-barely-running/

### 4. Waymo Letter to Senator Ed Markey (Feb 2026)
- Waymo "has not used remote driving or 'tele-operations' where a human performs the Dynamic Driving Task"
- Remote assistance agents don't directly control, steer, or drive the vehicle
- One narrow exception: US-based event response agent can prompt stuck vehicle forward at 2 mph at fixed steering angles — "has never been used outside of training"
- Both companies have the tool; only Tesla has used it on public roads

### 5. Tesla 17-Narrative Unredaction (May 2026)
- Tesla was the only ADS operator redacting all crash narratives as "confidential business information"
- Waymo, Zoox, Avride, May Mobility all filed detailed accounts
- Unredaction largely vindicated Tesla on fault — most crashes were rear-endings by inattentive human drivers
- But also revealed the remote operator crash pattern

### 6. Reuters (2023)
- Tesla internally tracked chronic failures of suspension and steering components for years
- Frequently blamed damage on driver abuse in communications with customers and regulators

## Key Data Points
- 3/22 ADS crashes (13.6%) involved remote operators
- 100% of disclosed remote takeovers in crash reports ended in collision
- Tesla doesn't disclose total remote intervention count (can't calculate true rate)
- Waymo: 3,000+ robotaxis, 500K+ trips/week, 127M+ autonomous miles
- Tesla: 31 active vehicles, 14 unsupervised, peaked at 25 then shrank
- Dallas repeat crash: same maneuver (turn into parking lot), same obstacle (metal chain), 8 months apart

## Counterargument
- Selection bias: we only see remote interventions that resulted in crashes. Many successful remote interventions likely go unreported.
- All three remote crashes were low-speed (2-9 mph), minor property damage, no injuries
- Tesla's overall at-fault crash count is low

## Journalist
Rex Driverton — Investigation beat. Deadpan noir detective style. This is a pattern investigation.
