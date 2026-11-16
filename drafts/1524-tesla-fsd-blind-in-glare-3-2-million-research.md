# Research: Tesla FSD Can't Tell When Its Own Cameras Go Blind — 3.2 Million Cars

**Slug:** 1524-tesla-fsd-blind-in-glare-3-2-million
**Journalist:** Rex Driverton (Senior Crash Correspondent — investigations)
**Kicker:** Investigation
**Number:** 1524
**Date:** 2026-11-15

## Kill test
Genuinely newsworthy? Yes. NHTSA escalated its FSD reduced-visibility probe to an Engineering Analysis (EA26002) in March 2026 — the last investigative step before a recall order — covering 3,203,754 Teslas. The fresh hook (Nov 13, 2026): federal regulators confirmed the system cannot tell when its own cameras are blinded by glare or fog, and Tesla's own analysis concedes its fix would have changed the outcome in only 3 of the 9 crashes under investigation. Meanwhile Tesla keeps shipping new FSD versions (v14.3, Oct 20, 2026) while the probe is open. Novel angle: the car that watches the road cannot see that it cannot see — and the driver is the last to know.

## Verified facts (primary sources first)

### NHTSA ODI — EA26002 (primary)
- **PE24031** opened **Oct 17, 2024**, from 4 crash reports in which reduced roadway visibility came from sun glare, fog, or airborne dust.
- Upgraded to **Engineering Analysis EA26002 on March 18, 2026**, covering an estimated **3,203,754 vehicles**: Model S/X 2016–2026, Model 3 2017–2026, Model Y and Cybertruck 2020–2026, all with FSD (Beta/Supervised) ever activated.
- **Alleged defect:** "Failure of FSD's degradation detection system, when encountering reduced roadway visibility conditions, to detect a degraded state and to warn the driver appropriately."
- **9 incidents under investigation**, including **1 fatal crash** and **2 injury crashes**; 6 others possibly related.
- NHTSA: in the crashes reviewed, "the system did not detect common roadway conditions that impaired camera visibility and/or provide alerts when camera performance had deteriorated until immediately before the crash occurred."
- **July 2, 2026 information request (EA26002-01)** to Tesla's Eddie Gates: drivers in the nine crashes "may have been unaware that the vehicles they were operating had encountered conditions that inhibited FSD's ability to detect and respond to potential hazards or that they were responsible for intervention."
- **Tesla's own post-incident analysis:** the update to the degradation detection system, had it been installed, "may have affected 3 of the 9 incidents." No result claimed for the other six.
- **Timeline that matters:** Tesla began developing the degradation-detection update on **June 28, 2024 — the day after** it submitted a Standing General Order report of a fatal **Nov 28, 2023** crash covered by the investigation. NHTSA writes it has no information on when that update was deployed or which vehicles carry it.
- NHTSA asked Tesla whether its public claim that "FSD Supervised can drive in whiteout conditions" is "accurate and consistent with the system's intended capabilities as designed."
- NHTSA demanded an internal Tesla document submitted in response to the earlier PE that it believes bears on what Tesla understood about its camera-only approach before shipping it nationwide.
- NHTSA also asked for a technical description of Tesla's "Direct Photon-Count Capability" system and how far it mitigates these conditions.
- An EA is not a defect finding. It typically takes 12–18 months and ends in a recall order or a closure.

### Parallel probe — PE25012 (red lights / wrong-way)
- Opened **Oct 7, 2025**, covering ~**2,882,566** Teslas with FSD: cars running red lights and driving on the wrong side of the road.
- At opening: **58 incidents, including 14 crashes and 23 injuries**; tally grew to ~**80 reports** by December 2025.
- A July 2026 dashcam clip of a Model 3 blowing a red light into a C7 Corvette went viral; whether FSD was engaged in that crash is unconfirmed.

### Litigation context
- **Benavides v. Tesla** (2019 Key Largo crash): Aug 2025 Miami federal jury found Tesla **33% responsible**, verdict ~**$243 million** ($242.57M judgment); judge upheld Feb 2026; Tesla appeal pending (11th Cir. No. 26-10858).
- **Recall 23V-838** (Dec 2023): 2M+ Teslas, Autopilot, OTA remedy. **RQ24009** (opened Apr 25, 2024) tests whether that fix was adequate; still open. NHTSA found crashes in vehicles that already had the remedy installed.

### Meanwhile, the software keeps shipping
- **FSD (Supervised) v14.3.13** pushed Oct 20, 2026 (update 2026.38.5.10) to Hardware 4 cars, v14.3 Lite to Hardware 3, adding an HW4-only "Automatic Collision Evasion" feature — while EA26002 is open.

## Original contribution (the finding, not the summary)
Cross-tab the two numbers NHTSA itself published: Tesla's degradation-detection fix would have changed **3 of 9** crashes — a 33% hit rate on the company's own math — and NHTSA **does not know which cars have the fix installed**. That means the fleet's exposure to the alleged defect is unquantifiable even by the regulator: 3.2 million cars under investigation, an unknown subset carrying a partial fix, and the newest software version shipping on top of the open probe. The parallel PE25012 file (red lights, 2.88M cars) means roughly **6 million Teslas** — essentially every FSD-equipped car Tesla has sold in the US — is under an open federal defect investigation of one kind or another at the same time.

## Counterargument (full strength)
Tesla's position, fairly stated: FSD is a Level 2 driver-assistance system, not autonomy; the driver is always responsible and must supervise. Nine incidents across 3.2 million vehicles over two years is a small absolute count, and an EA is an investigation, not a finding — NHTSA escalates probes routinely and closes many without recalls. The degradation-detection update may already be broadly deployed; NHTSA's "no information on deployment" reflects a paperwork gap, not proof cars lack the fix. Glare, fog, and dust blind human drivers too, and FSD's crash rate per mile (by Tesla's own published, unverified figures) remains below the human average. The red-light probe counts reports, not confirmed FSD engagement — the viral Corvette crash is unconfirmed.

## Limitations
- EA26002 is open; no defect determination, no recall. All "alleged defect" language must stay alleged.
- The 9-incident count is NHTSA's investigation set, not a census of all FSD visibility crashes; SGO reporting is incomplete by design.
- Tesla's per-mile safety figures are self-reported and not validated by any third party; do not present them as fact.
- The fatal Nov 28, 2023 crash details are in the SGO report; do not embellish beyond what NHTSA published.
- The "6 million cars under investigation" cross-tab double-counts overlap (PE25012's 2.88M is a subset of EA26002's 3.2M population, mostly) — state it as "the two probes together cover essentially the whole FSD fleet," not as 6M distinct cars.

## Actionable takeaways
- If you own a Tesla with FSD: treat glare, fog, and dust as hands-on-the-wheel, eyes-on-road conditions — the system may not warn you it is degraded until it is too late.
- Check your VIN at nhtsa.gov/recalls and watch EA26002's outcome; an EA can end in a recall order.
- Do not treat "FSD can drive in whiteout conditions" marketing as a capability claim — NHTSA itself asked Tesla to justify that sentence.
- Buyers: FSD is Level 2. The car is not watching itself.

## Sources (3+ primary)
1. NHTSA ODI, Information Request EA26002-01 (July 2, 2026), letter to Tesla — https://static.nhtsa.gov/odi/inv/2026/INIM-EA26002-14414.pdf
2. NHTSA ODI, EA26002 investigation resume / PE24031 opening resume — static.nhtsa.gov (ODI investigation files)
3. GCN, "Federal regulators pulled 3.2 million Tesla cars with camera-only driver assist software into a final safety review" (Nov 13, 2026) — https://gcn.com/federal-regulators-pulled-million-tesla-cars/23227/
4. The Weekly Driver, "NHTSA Tesla FSD Investigation: 2.88 Million Cars, Red Lights" (July 2026) — http://theweeklydriver.com/2026/07/tesla-fsd-nhtsa-investigation-red-light/
5. Recording Law, "Tesla Autopilot and FSD Lawsuits: Verdict, Appeal, Recalls (2026)" — https://www.recordinglaw.com/us-laws/self-driving-car-laws/tesla-autopilot-fsd-lawsuits/
6. Elonosphere, "Tesla Pushes FSD v14.3 Rollout as NHTSA's Visibility Probe Reaches 3.2 Million Vehicles" — https://www.elonosphere.com/Articles/3015/tesla-pushes-fsd-v14-3-rollout-as-nhtsa-s-visibility-probe-reaches-3-2-million-vehicles

## Duplicate check (2026-11-15)
- `EA26002`, `PE25012`, `reduced-visibility`, `tesla.*visibility`: zero matches in drafts/ or stories/.
- `tesla-fsd` matches are single-crash stories (#1225 asleep CHP crash, #1300 Vallejo pedestrian death) — different angle.
- H1-2026 fatality-rate angle rejected: covered (#1353, #1402, #1458). Kicks-vs-RAV4 rejected: covered (#1244, #1408, #1484). Honda 26V721 / Ford 26V724 / Ford 26V726 rejected: covered (#1457, #1509, #1466).
