# Research — #1527: Honda's Stop-Start Won't Restart, and NHTSA Just Opened Its Second Probe

**Slug:** `1527-honda-stop-start-second-probe-million-cars-wont-restart`
**Journalist:** Rex Driverton (Senior Crash Correspondent — investigations, federal-probe beat)
**Kicker:** Investigation
**Date researched:** November 16, 2026
**Target ship_date:** 2028-09-17 (1 day after #1526's 2028-09-16)

## Story in one line
Honda's fuel-saving Auto Idle Stop turns the engine off at red lights and sometimes refuses to turn it back on, and today NHTSA opened a second, parallel engineering analysis into 1,033,632 newer Hondas and Acuras for the exact same symptom, because the first probe's fix did not fix it and the new cars fail differently.

## Kill test
- **Genuinely newsworthy?** YES. Announced today, November 16, 2026 (Reuters). A new engineering analysis into 1,033,632 vehicles, 701 complaints, same-day news. A million cars that can strand their drivers at a green light.
- **Novel angle on data?** YES. The story is not "Honda has a defect." The story is that Honda now has TWO simultaneous federal engineering analyses for the same symptom on overlapping model years, with NHTSA stating the new population has different root causes and responds differently to repairs. Four and a half years after the first probe opened, the symptom outlived the service bulletins, the software update, the hardware warranty extension, and a model generation.
- **3+ primary sources?** YES. (1) Reuters, Nov 16, 2026, reporting the new EA; (2) NHTSA ODI resume for EA25004 / PE22005 (static.nhtsa.gov), the first probe's own documents; (3) NHTSA information-request letter EA25004-04, May 18, 2026 (static.nhtsa.gov), with the 1,861-report count; (4) Honda service bulletins 23-008/23-009 via the ODI record; (5) Honda dealer messages, Oct 2025, hunting no-restart Pilots.
- **Not covered?** YES. Full queue/drafts grep for "stop-start", "stopstart", "pe26008", "airbag-burn", "honda-stop": zero matches for any stop-start story. Nearest neighbors: #1457 (Honda steering divide-by-zero recall 26V-721, different defect, different system), #1447 (Ford Explorer airbag burns, PE26008), #964/#1089 (Ridgeline probe closed, remedy passed — different, older probe). No research file or story mentions EA25004, PE22005, Auto Idle Stop, or "fails to restart."
- **Verdict:** PROCEED.

## Verified facts

1. **New engineering analysis, opened November 16, 2026** (Reuters, Nov 16, 2026). NHTSA opened an engineering analysis into 1,033,632 Honda vehicles over engines failing to restart after the automatic stop-start system shuts them off. Population: 2024–2026 model year Honda Odyssey, Passport, Ridgeline and Pilot, plus Acura MDX. Basis: 701 complaints about the auto stop-start feature. The system is designed to save fuel by shutting the engine off at a complete stop and restarting it when the driver lifts off the brake; drivers report the engine does not restart. NHTSA is already investigating similar stop-start failures under a separate investigation that covers all the vehicles in the new review except the 2026 models. NHTSA's distinction, per Reuters: while both groups show similar failures, the vehicles in the new investigation appear to have different root causes and respond differently to repairs. No EA number for the new probe appeared in the public reporting I could verify, so the article does not invent one.
2. **The first probe: PE22005, opened June 3, 2022** (NHTSA ODI closing resume, static.nhtsa.gov). ODI opened a preliminary evaluation after receiving owner questionnaires and field reports on the Auto Idle Stop feature in 2016–2019 Honda Pilots (3.5L V6, 9-speed automatic). Allegation: the engine fails to restart on its own from a complete stop at a traffic light or intersection with AIS engaged.
3. **Honda's fix, January 6, 2023** (ODI resume). Honda released service bulletins 23-008 and 23-009: a two-stage countermeasure, a PGM-FI software update first, then a warranty-extension hardware update. The bulletins also covered 2015–2020 Acura TLX, 2016–2020 Acura MDX, 2019–2022 Passport, 2020–2023 Ridgeline. The ODI resume states ODI continued to receive complaints of AIS failure to restart, with many complainants alleging the campaign countermeasures had already been completed.
4. **Upgraded to EA25004, March 26, 2025** (ODI opening resume). PE22005 was upgraded to Engineering Analysis EA25004 to further consider the potential safety defect, including gathering additional data on the service campaign's efficacy. Scope expanded to all vehicles in bulletins 23-008/23-009 plus newer, substantially similar model years: 2016–2025 Pilot, 2018–2025 Odyssey, 2019–2025 Passport, 2020–2025 Ridgeline, 2015–2025 TLX, 2016–2025 MDX. Contemporary reporting put the EA25004 population at roughly 2.2 million vehicles.
5. **Complaint volume kept climbing** (NHTSA IR letter EA25004-04, May 18, 2026). ODI had received 1,861 reports alleging the engine fails to restart on its own from a complete stop with AIS engaged. Some reports allege a jump start was required to get the vehicle moving again. An earlier IR letter (June 30, 2025) counted 1,464 complaints. That is roughly 400 additional reports in under a year, after the fix.
6. **Honda was still hunting the failure in late 2025** (Honda dealer messages, Oct 2025, via NHTSA manufacturer communications). American Honda asked dealers to flag 2023–2025 Pilots with a customer complaint of no auto-restart after idle stop, noting "the push button ignition may or may not restart the engine," and asked to inspect the vehicle before any repair attempt. A May/June 2025 message did the same for 2023–2025 Odyssey, Passport, Pilot and Ridgeline, requesting parts collection before repair. The manufacturer was still collecting specimens a full year into the engineering analysis.
7. **Bad week for Honda** (Reuters, Nov 16, 2026; Crash Report #1457). The new probe comes a week after Honda recalled 635,808 vehicles (NHTSA 26V-721, announced Nov 10, 2026) because steering software can divide by zero and switch off power steering assist. Different system, different defect, same fortnight. #1457 covered the steering recall; this article covers the stop-start probe.

## Original contribution: complaint density + the overlap

Two calculations nobody in the coverage ran:

**Complaint density.** The new probe: 701 complaints / 1,033,632 vehicles = 67.8 complaints per 100,000 vehicles. The old probe: 1,861 reports / ~2.2 million vehicles = ~84.6 per 100,000. The "new" defect is complaining at roughly four-fifths the density of the defect that already earned an engineering analysis, and it did it on cars that are one to three years old, not six to ten. Complaint counts understate the failure rate (most stranded drivers never file with NHTSA), so both densities are floors, not rates.

**The overlap.** Model years 2024–2025 sit under BOTH engineering analyses at once: EA25004 covers them as "newer, substantially similar" vehicles, and the new November 16 probe covers them as its own population with different root causes. One symptom, two federal files, same cars. NHTSA is effectively telling Honda the 2024–2025 trucks have two different ways to not restart, and neither is the one the 2023 service bulletins addressed.

**The timeline.** June 3, 2022 (PE22005 opens) to November 16, 2026 (second EA opens) is 4 years, 5 months. In that span: two service bulletins, a software update, a hardware warranty extension, a probe upgrade, an expansion to 2.2 million vehicles, 1,861 reports, and Honda still sending dealers "do not repair it yet, we want to see it" messages. The feature saves fuel by turning the engine off. The failure mode is the engine staying off.

## FARS cross-check
The repo FARS dataset (2014–2023) carries only one of the five affected nameplates: the Acura MDX, 163 deaths, fatality rate 0.30 per 100M VMT. Pilot, Odyssey, Passport and Ridgeline have no rows in FARS_BY_MODEL, so no fatality-rate claim is made for them. The MDX rate is reported for completeness only; this is a stranding defect, not a fatality-rate story, and the article does not pretend otherwise.

## Counterargument (full strength)
No crashes or injuries are reported in the Reuters account of the new probe, and none are claimed in the EA25004 documents I reviewed. A car that will not restart at a light is usually an embarrassment and a tow bill, not a crash. Seven hundred and one complaints across 1,033,632 vehicles is 0.07 percent of the population, and complaint counts are self-selected. Auto Idle Stop saves real fuel across a million cars, which is a real emissions benefit, and most owners will never see the failure. An engineering analysis is an investigation, not a defect finding and not a recall; NHTSA may close it without action. The article states all of that, then states the rebuttal: a dead engine at an intersection is a hazard even when nobody crashes, because the car behind you does not know your engine is off, and because a driver who cannot restart with the push button (Honda's own October 2025 dealer message admits this happens) is stranded in live traffic with no workaround except a jump start.

## Limitations
- The new EA's investigation number was not in any public reporting I could verify; the article names the date and population instead of guessing a number.
- Complaint counts are allegations filed with NHTSA, not confirmed defects; the 1,861 figure for EA25004 and the 701 figure for the new probe come from different dates and different scopes and are not directly additive.
- The ~2.2 million EA25004 population figure comes from contemporary reporting, not an NHTSA population count in the documents reviewed; the density comparison uses it as an approximation and says so.
- FARS coverage is partial (MDX only); no fatality-rate claim is made for the other four nameplates.
- Remedy status: no recall exists for the new probe's population. There is nothing to "get fixed" yet, which is itself part of the story.

## What to do (actionable)
- If you own a 2024–2026 Odyssey, Passport, Ridgeline, Pilot or Acura MDX: every one of these has an Auto Idle Stop off button on the console. Press it every drive until this resolves; the feature resets to on at each start, so it is a per-drive habit, not a setting.
- If the engine ever fails to restart after idle stop, file a Vehicle Owner Questionnaire at nhtsa.gov. The 701 complaints are what opened this probe; the count is the mechanism.
- If the push button will not restart it either, do not keep cranking. That is the scenario in Honda's own dealer messages. Call for a jump or a tow, keep the paperwork, and note the date and intersection.
- Check your VIN at nhtsa.gov/recalls. The new probe is not a recall, so nothing will show yet, but the 2024–2025 models also sit in EA25004, and any future recall will appear there first.

## Sources
1. Reuters, "US opens probe into more than 1 million Honda vehicles over auto stop-start failures," November 16, 2026. https://www.reuters.com/business/autos-transportation/us-opens-probe-into-more-than-1-million-honda-vehicles-over-auto-stop-start-2026-11-16/
2. NHTSA ODI, Investigation EA25004 closing resume (PE22005 upgraded to EA), March 26, 2025. https://static.nhtsa.gov/odi/inv/2022/INCLA-PE22005-15544.pdf
3. NHTSA ODI, Information Request letter EA25004-04, May 18, 2026 (1,861 reports). https://static.nhtsa.gov/odi/inv/2025/INIM-EA25004-52649.pdf
4. NHTSA, ODI resume EA25004 opening, March 26, 2025. https://static.nhtsa.gov/odi/inv/2025/INOA-EA25004-10033.pdf
5. Honda dealer message, "Request for Visit: 2023-2025 Pilot Auto Idle Stop No Restart," October 4, 2025 (NHTSA manufacturer communication 11024246). https://oemdtc.com/tsb/11024246/
6. NHTSA recalls database. https://www.nhtsa.gov/recalls
7. Crash Report #1457, Honda steering divide-by-zero recall 26V-721 (635,808 vehicles, Nov 10, 2026), for the same-fortnight context.
