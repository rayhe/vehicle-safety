# Research — #979: GM's eBoost Brake Investigation Escalated to Engineering Analysis

**Angle:** GM told NHTSA the brake-assist loss happens *after* you stop (spindle fracture, still safe). 745 drivers told NHTSA it happens *while you're braking*. The feds escalated to their highest investigation level and expanded the population 40x. The Gap.

**Kicker:** The Gap | **Journalist:** Clara Rollover

## Primary sources
1. NHTSA ODI Engineering Analysis (escalated ~Aug 21, 2026), ~1,164,820 vehicles — scope via reporting below.
2. TechCrunch, "Brake problems in GM EVs draw greater federal scrutiny," Aug 24, 2026: https://techcrunch.com/2026/08/24/brake-problems-in-gm-evs-draw-greater-federal-scrutiny/
3. Carscoops, "US Escalates Probe Into 1.1 Million GM Vehicles Linked To 745 Brake Incidents And 21 Crashes," Aug 2026: https://www.carscoops.com/2026/08/gm-brake-failure-investigation/
4. Autoblog, "GM Brake Investigation Explodes From One Cadillac to 1.2 Million Vehicles," Aug 24, 2026: https://www.autoblog.com/news/gm-brake-investigation-explodes-from-one-cadillac-to-1-2-million-vehicles
5. Electrek, "Over 1.1M GM vehicles, including EVs, under NHTSA investigation," Aug 24, 2026: https://electrek.co/2026/08/24/over-1-1m-gm-vehicles-evs-nhtsa-investigation/
6. CBT News, "NHTSA expands GM brake probe to 12 models, two Honda vehicles," Aug 2026: https://www.cbtnews.com/nhtsa-expands-gm-brake-probe-to-10-models/
7. NHTSA recalls database (VIN check for affected models): https://www.nhtsa.gov/recalls

## Verified facts
- **Preliminary Evaluation opened April 2024** on 2023 Cadillac Lyriq after complaints of hard brake pedal + "Brake System Failure" warning at startup or after stopping.
- **GM's root-cause theory:** fractures in the spindle of its eBoost brake-by-wire system. GM told ODI: ABS, stability control, traction control stay functional until the vehicle stops; after a full stop the functions are lost, warning lights enable, speed capped at 43 mph (70 km/h). Three DTCs trigger "Service Brake System" alerts.
- **ODI's contradiction:** kept receiving reports of an *immediate* loss of brake assist *while the customer was braking to slow the car down* — "inconsistent with GM's description of a spindle failure." ODI: could extend braking distance, raising crash/injury risk.
- **Escalation:** ~Aug 21, 2026, ODI upgraded the PE to an **Engineering Analysis** (its highest investigation level before a recall demand) and expanded scope to **all GM vehicles using the eBoost system** plus Honda Prologue and Acura ZDX built with GM.
- **Population:** ~1,164,820 vehicles (reported 1.1M-1.2M).
- **Incident counts:** 745 reported incidents; 21-22 crashes; 5-6 injuries (reports vary slightly; use "745 incidents, 21 crashes, five injuries" per Carscoops).
- **Models in scope:** 2023-2026 Cadillac Lyriq, Chevrolet Colorado, GMC Canyon; 2024-2026 Buick Enclave, Buick Envision, Chevrolet Blazer EV, Chevrolet Equinox EV, Chevrolet Traverse, Cruise Origin, GMC Acadia; 2025-2026 Cadillac Celestiq, Cadillac Optiq; 2024-2026 Acura ZDX, 2024-2026 Honda Prologue.
- **No recall as of Sep 23, 2026** despite 2+ years of investigation. Compare: NHTSA closed the Honda Ridgeline EA (EA25003) without action Sep 22, 2026 (#964) — EA escalation is not a recall, and EAs can end either way.

## Original calculations (Crash Report exclusive)
- Incident rate: 745 / 1,164,820 = **64 incidents per 100,000 vehicles** under investigation.
- Crash escalation: 21 crashes / 745 incidents = **2.8% of reported incidents involved a crash**.
- Population expansion factor: from ~29,000 (2023 Lyriq approx. US sales) to 1.16M = roughly **40x expansion** of the investigation population.
- eBoost is brake-by-wire: no mechanical link between pedal and hydraulics under normal operation; the "still stops" claim depends on the mechanical backup mode engaging correctly.

## Novel angle (kill-test pass)
Not "brakes might fail" (every EA gets that headline). The story is the **dueling failure descriptions**: the automaker's root-cause story predicts a benign sequence (stop, then warnings, capped at 43 mph). The incoming complaint data contradicts the sequence itself. When the manufacturer's physics story doesn't match the field reports, the investigation doesn't close — it quadruples. And your Honda Prologue's brakes are GM's.

## Actionable takeaways
- If you own one of the 14 nameplates above (2023-2026), know the warning signs: hard brake pedal, "Brake System Failure" or "Service Brake System" messages.
- If brake assist drops: the mechanical backup still stops the car but requires far more pedal effort — keep pushing, don't pump, expect longer stopping distances.
- Check your VIN at nhtsa.gov/recalls. No recall yet, but EA-level investigations historically precede recalls ~60-70% of the time (state as estimate, not fact — cut if unverifiable). Better: "An Engineering Analysis is the last stop before a recall demand."
- Honda Prologue / Acura ZDX owners: your EV runs GM's Ultium platform AND GM's brake system — cross-brand part sharing means cross-brand investigations.

## Limitations
- Complaint counts include unverified owner reports; ODI's 745 includes crashes, injuries, and non-crash incidents together.
- Population is ODI's estimated scope, not a defect count — actual defect rate unknown.
- Cannot compute a defect rate or fatality risk from investigation data alone.
- EA escalation does not mean a recall will happen (see Ridgeline EA25003 closure).

## Strongest counterargument
GM's position, at full strength: the vehicles still stop. ABS and stability control remain functional until the car comes to rest; the failure mode GM identified produces a capped-speed limp state with clear warnings, not a runaway. 745 incidents across 1.16M vehicles is 64 per 100,000 — a fraction of a percent — and ODI's "inconsistent" reports may describe drivers misinterpreting the hard-pedal limp mode during the event. EA investigations frequently close without recalls. The system has a mechanical backup, which is more than some brake-by-wire architectures offer.

## Word budget: 300-500. Banned phrases and em-dash (max 3) rules apply. No AI voice tells.
