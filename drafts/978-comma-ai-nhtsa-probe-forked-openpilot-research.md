# Research: #978 — NHTSA Probes Comma.ai Aftermarket Driver Assistance (forked openpilot)

**Date:** 2026-09-23
**Journalist:** Vin Wreckage
**Kicker:** Existential Dread
**Slug:** 978-comma-ai-nhtsa-probe-forked-openpilot

## Angle (1-2 sentences)
NHTSA's Office of Defects Investigation opened a probe on September 23, 2026 into Comma.ai's aftermarket driver-assistance devices after five crashes (three deaths, 11 serious injuries), all involving vehicles striking stopped or slow-moving vehicles. The novel tangle: at least one fatal crash involved FrogPilot, a community *fork* of Comma's open-source openpilot, which means the federal defect-investigation machine, built around manufacturers with factories and VIN lists, is now chasing a GitHub repo with no manufacturer.

## Kill test
- Genuinely newsworthy? Yes. Federal probe opened TODAY (Sep 23, 2026), reported by Reuters (David Shepardson) and TechCrunch within hours.
- Novel angle? Yes. Coverage so far is straight news; nobody has written the fork-accountability analysis or run the per-mile fatality math against the national baseline. Zero prior Crash Report coverage of Comma.ai/openpilot (verified via grep: no drafts or stories mention comma.ai, openpilot, FrogPilot, or George Hotz).
- Data? Real numbers throughout: 5 crashes / 3 deaths / 11 serious injuries / 30,000+ vehicles / 402M claimed miles / 2024 national rate 1.20 per 100M VMT.

## Sourced facts

1. **The probe (Sep 23, 2026):** NHTSA ODI is investigating Comma.ai after reports of five crashes of vehicles using its aftermarket driver-assistance devices, involving three reported deaths and 11 serious injuries. NHTSA said vehicles with Comma devices reportedly struck five stopped or slow-moving vehicles. The agency will review other incidents and obtain data to verify system status for each incident and evaluate system performance and safeguards. (Reuters, David Shepardson, Sep 23, 2026)
2. **Failure mode:** The reported crashes involved Comma.ai devices failing to detect or respond to slow or stopped vehicles in the same road lane. Two of the five crashes were fatal, accounting for the three deaths; across four of the crashes, as many as 11 people were injured, some seriously. (TechCrunch, Sep 23, 2026)
3. **Comma's claims:** Comma.ai says its devices use open-source software, can allow hands-free driving, and reports more than 30,000 vehicles have logged 402 million miles. The system "can accelerate, brake automatically for other vehicles, and steer to follow the road/lane." The company says it requires "the driver to be alert, pay attention, and be ready to take over at all times." (Reuters, Sep 23, 2026)
4. **The fork problem:** Some crashes, including at least one fatal incident, may have involved "forked" or modified versions of Comma.ai's software, according to ODI. Openpilot can be freely copied and modified; third-party forks can change braking tuning, detection thresholds, when the system engages, and how strictly driver monitoring is enforced. (TechCrunch; thebrief.news, Sep 23, 2026)
5. **Ascension Parish crash (Feb 2026):** A 2022 Toyota RAV4 running FrogPilot, a third-party fork of openpilot, struck a stopped first-responder vehicle in Ascension Parish, Louisiana. Two rear-seat passengers in the Toyota died, in NHTSA's description. (TechCrunch, Sep 23, 2026)
6. **The 2016 prequel:** In 2016, NHTSA demanded Comma.ai provide proof that its proposed self-driving device would be safe, or risk having its sale blocked. The company responded that it was redirecting its efforts to "other products and markets." The California DMV also sent Comma.ai a cease-and-desist letter in 2016. (Reuters, Sep 23, 2026)
7. **Company background:** Founded 2015 by hacker George Hotz; Hotz distanced himself from day-to-day operations in 2022. Devices install on a range of modern cars; openpilot controls the car's ACC and ALC "similar to Tesla Autopilot and GM Super Cruise," per the company. Camera-based driver monitoring watches for distracted or sleepy drivers. Stated goal: "make driving chill." (TechCrunch, Sep 23, 2026)
8. **The stopped-vehicle hard case:** Failing to detect stopped same-lane vehicles is a known hard case for combined camera-and-radar systems, especially for forward speed control, where the system must separate a stopped car from roadside signs, road furniture, and overhead structures like bridges. (thebrief.news, Sep 23, 2026)
9. **Regulatory pattern:** In March 2026, the NTSB criticized Ford's hands-free BlueCruise system for failing to ensure drivers were not distracted before two fatal collisions. NHTSA and NTSB have repeatedly investigated ADAS failures to identify stopped or slow vehicles on highways. (Reuters, Sep 23, 2026)
10. **National baseline:** NHTSA early estimates for 2024: 39,345 traffic deaths, fatality rate 1.20 per 100M VMT, the lowest since 2019 and the 11th consecutive quarterly decline. (NHTSA CrashStats, DOT HS 813 729, May 2025)

## Original contribution
1. **Per-mile fatality math:** 3 deaths / 402M claimed miles = 0.75 deaths per 100M miles, vs. the 2024 national rate of 1.20. If Comma's mileage figure holds, openpilot-engaged driving is, per mile, less lethal than average American driving. Methodology and caveats stated explicitly (self-reported miles; engaged-miles vs. all-miles mismatch; n=3).
2. **Fork-accountability analysis:** NHTSA's defect authority (PE -> EA -> recall) assumes a manufacturer. Mapping that process onto an open-source fork ecosystem, where the "defective product" may be a community build Comma never shipped, is a novel regulatory framing.
3. **The 2016-2026 arc:** a decade-long case study in aftermarket ADAS regulatory evasion, from the 2016 NHTSA demand letter to 30,000 cars on the road.

## Strongest counterargument (stated at full strength)
The per-mile math favors openpilot. Three deaths across 402 million claimed miles is a fatality rate of roughly 0.75 per 100 million miles, well below the 2024 national average of 1.20. If those miles are real, the system is associated with less death per mile than ordinary American driving, and a federal probe triggered by five crashes in a 30,000-vehicle fleet could be statistical noise dressed up as a pattern. The stopped-vehicle failure mode is also the industry's shared hard problem, not a Comma-specific defect. That said: the miles are self-reported, engaged miles skew highway, and the February 2026 fork crash killed two people who were sitting in the back seat of a RAV4 that drove into a stopped emergency vehicle. Rates don't comfort the people in row two.

## Limitations
- Crash counts, death/injury figures, and the 30,000-vehicle / 402M-mile figures come from NHTSA's announcement and Comma's own claims as reported Sep 23, 2026; ODI has not published an investigation resume with a PE number as of press time, and Comma's mileage is unaudited.
- Per-mile comparison mixes openpilot-engaged miles (likely highway-heavy, enthusiast drivers, newer vehicles) with the all-VMT national average; it is directional, not dispositive.
- Which specific crashes involved forked vs. stock software is per ODI's preliminary account via TechCrunch; the investigation is days old.
- No FARS cross-tabulation was possible: FARS does not code aftermarket ADAS engagement.
