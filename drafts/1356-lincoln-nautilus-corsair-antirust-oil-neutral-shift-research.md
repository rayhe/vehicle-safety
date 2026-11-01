# Research: #1356 — Lincoln Nautilus/Corsair Hybrids, the Anti-Rust Oil That Caused the Corrosion

**Slug:** 1356-lincoln-nautilus-corsair-antirust-oil-neutral-shift
**Journalist:** Axle McScatter (By The Numbers — least-recently-used in rotation: last at #1347; beat fits the statistical-roundup frame)
**Kicker:** By The Numbers
**Working title:** "Lincoln Recalled 11,623 Hybrids Because the Anti-Rust Oil Caused the Rust"

## Kill test: PASS
- Genuinely newsworthy: 11,623 luxury hybrid crossovers that can shift themselves into neutral at speed, 100% estimated defect rate, federal filing Oct 20, 2026, interim owner letters start Nov 2 (tomorrow).
- Novel angle, never covered on this site (grep: 0 drafts/stories for 26V688, corsair, nautilus-neutral):
  1. **The irony engine:** an anti-rust oil that degrades the corrosion protection it sits next to, causing corrosion. The rust-proofing caused the rust.
  2. **The 100% club:** Ford estimates every single one of the 11,623 is defective — exposure traced to a supplier oil change, not a random defect. Contrast with the 2% estimate on Ford's own tailgate recall (26V689) the same month.
  3. **The software trigger:** the corrosion only became a neutral-shift because a Hybrid Powertrain Control Module software update redefined "sensor fault" as "shift to neutral while moving" (Part 573 chronology).
  4. **The Edge gap:** the escalation began with two loss-of-motive-power warranty claims on 2026 Ford Edge FHEV (same HF55 transmission) — yet zero Edges are in the recall population.
- 3+ primary sources verified (below), including the full Part 573 PDF read line by line.

## Verified facts (from NHTSA Part 573 Safety Recall Report 26V688, read 2026-11-01)
1. **Campaign:** NHTSA 26V688 / Ford 26S75, manufacturer report date Oct 20, 2026. (RCLRPT-26V688-0857.pdf)
2. **Population: 11,623 total, 100% estimated defect rate.** 11,560 Lincoln Nautilus Hybrid (2026-2027, built Sep 9, 2025 - Aug 6, 2026); 63 Lincoln Corsair Hybrid (2027, built Mar 12 - Jul 8, 2026). All with HF55 transmissions. Not built in VIN order. (Part 573, p.1-2)
3. **Root cause:** IPM supplier EFI Automotive Accessories Systems (Wuhan, China) changed the anti-rust oil used inside the Integrated Park Module without formally notifying Ford or validating compatibility with the PCB's conformal coating. The new oil degrades the coating, promoting corrosion across the rotary sensor circuit; voltage drops progressively; the powertrain control system misreads it as a fault and commands neutral. Component part: PZ18-7P236-MC. (Part 573, p.2-3)
4. **Failure modes:** unexpected shift into Neutral while driving (loss of motive power, crash risk); inability to shift out of Park while stationary. Warning: wrench MIL + "Service Vehicle Soon" or "Shifting System Error" popup. (Part 573, p.2)
5. **Chronology:** July 2026 — regional CCRG (outside North America) opens on wrench-light trend in FHEV/HF55 vehicles (DTC P271A, Park Pawl Position Sensor "A" Circuit Low). August 2026 — escalated to Global CCRG after two warranty claims reporting loss of motive power on 2026 Ford Edge FHEV. Aug 13 — transferred to North American CCRG. September 2026 — physical failure analysis confirms the oil/coating/corrosion mechanism. Sept 28 — 15 US warranty claims, 106 global, 1 US field report, 1 US customer report, 0 VOQs. Oct 13 — Field Review Committee approves field action. (Part 573, p.3)
6. **Outcomes so far:** Ford is not aware of any accidents, fires, or injuries. (Part 573, p.3)
7. **Remedy:** replace the IPM with a module free of the suspect oil + updated software, free. Interim owner letters Nov 2-6, 2026; VINs searchable on nhtsa.gov since Oct 26, 2026; owner hotline 1-866-436-7332. (Part 573, p.4; NHTSA ack letter RCAK-26V688-2238)
8. **NHTSA acknowledgment letter** (Oct 26, 2026, RCAK-26V688-2238.pdf) confirms campaign, 11,623 units, component "POWER TRAIN:AUTOMATIC TRANSMISSION."

## Secondary confirmation
- TopSpeed (Nov 1, 2026): interim letters starting Nov 2; 100% estimated defect; 15 US + 106 global warranty claims; Edge FHEV claims triggered escalation. https://www.topspeed.com/lincoln-nautilus-corsair-hybrid-neutral-shift-recall/
- AutoGuide (Oct 29, 2026): rotary-sensor voltage-drop mechanism; Ford 1-866-436-7332, ref 26S75. https://www.autoguide.com/auto/manufacturers/lincoln/lincoln-recalls-11-000-nautilus-and-corsairs-for-random-neutral-shifts-44641357
- WiseVoter (Nov 1, 2026): build windows, letters timeline. https://www.wisevoter.com/world/us/2026/11/01/lincoln-recalls-hybrid-crossovers-transmission-neutral-defect

## Original contribution (this article's novel findings)
1. **The 100% Club arithmetic:** Part 573's "Estimated percentage with defect: 100%" means Ford is not hedging — supplier records traced every suspect-oil IPM to a VIN, so the recall population IS the defect population. Contrast: Ford's Oct 2026 tailgate recall (26V689, 30,123 trucks) estimated ~2% actually defective; #1120's Ram five-truck recall was 5 VINs. A 100% estimate is the strongest statement a manufacturer can file — it says "we know exactly which ones, and it's all of them."
2. **Signal-to-action ratio:** 15 US warranty claims + 1 field report + 1 customer report + 0 VOQs = 17 US data points that produced an 11,623-vehicle federal recall in under 3 months from escalation. That is the system working fast: July trend → October recall.
3. **The software layer:** the corrosion predates the danger. Per the chronology, an HPCM software update "introduced this failure mode" — the sensor was degrading either way, but the update is what turned a bad sensor reading into a neutral shift at speed. The oil broke the sensor; the software decided what "broken" means.
4. **The Edge question:** two 2026 Ford Edge FHEV loss-of-power claims opened the global escalation, yet the recall population contains zero Edges. The honest reading (per the Part 573 trace method): supplier records matched suspect-oil IPMs to vehicles, and Edges apparently didn't get the suspect batch. The question Ford should answer on the record: which IPMs went into Edge hybrids?

## Limitations (must state in article)
- "100% defect" = 100% exposed to the suspect oil, per supplier records; observed failures are far fewer (106 global warranty claims = 0.9% of population). Exposure is not failure — corrosion is progressive and time-dependent.
- Why no Edge FHEVs in the recall is inferred from the trace method, not stated by Ford; do not claim a cover-up.
- No crashes, fires, or injuries reported — the risk is prospective, and the failure gives a wrench-light warning first.
- Remedy parts pipeline: interim letters go out Nov 2-6 but the second (repair) letter waits on IPM stock; owners may wait weeks with a known defect.

## Strongest counterargument (must state at full strength)
Seventeen US data points, zero crashes, zero injuries, and a wrench light that warns you first. A skeptic reads this as routine: a supplier swapped an oil, Ford caught it through warranty data in weeks, traced every affected VIN, and recalled voluntarily before anyone got hurt. The 100% figure sounds alarming but mostly reflects precise traceability — Ford knows exactly which modules got the bad oil. The most dangerous reading of this recall is that it's evidence the system works, not that it's broken. The counter to the counter: the supplier changed a chemical inside a safety-critical module without telling Ford, and a software update converted a sensor fault into a highway neutral-shift. Both of those are process failures, and process failures repeat.

## Actionable insights
- Own a 2026-2027 Nautilus Hybrid or 2027 Corsair Hybrid? Check your VIN at nhtsa.gov/recalls NOW (searchable since Oct 26). Call 1-866-436-7332, reference 26S75.
- If the wrench light + "Service Vehicle Soon"/"Shifting System Error" appears: the car may drop into neutral. Get to the shoulder, do not keep driving on the assumption it was a glitch.
- Broader lesson: a 100%-defect estimate is GOOD news about traceability — it means they found every one. A 2% estimate (like the F-150 tailgate recall) means 98% of recalled owners are getting letters about someone else's problem.

## Primary sources (4+)
1. NHTSA Part 573 Safety Recall Report 26V688 (Ford, Oct 20, 2026) — https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V688-0857.pdf
2. NHTSA recall acknowledgment letter RCAK-26V688 (Oct 26, 2026) — https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V688-2238.pdf
3. TopSpeed, "Lincoln's Newest Hybrid SUVs Recalled For Sketchy Shifting" (Nov 1, 2026) — https://www.topspeed.com/lincoln-nautilus-corsair-hybrid-neutral-shift-recall/
4. AutoGuide, "Lincoln Recalls 11,000 Nautilus and Corsairs For Random Neutral Shifts" (Oct 29, 2026) — https://www.autoguide.com/auto/manufacturers/lincoln/lincoln-recalls-11-000-nautilus-and-corsairs-for-random-neutral-shifts-44641357
5. NHTSA recalls database / VIN lookup — https://www.nhtsa.gov/recalls
