# Research — #1599: NHTSA recall query RQ26006 — Waymo's school-bus fix didn't take

**Slug:** 1599-waymo-school-bus-fix-failed-rq26006
**Journalist:** Vin Wreckage (Existential Dread Columnist — paradoxes, counterintuitive findings)
**News peg:** NHTSA's Office of Defects Investigation opened recall query RQ26006 on November 6, 2026, covering 2,895 Waymo vehicles, to assess whether the remedy for recall 25E084 actually worked. MotorSafety covered it November 26, 2026.
**Dateline:** November 26, 2026

## Kill test
- **Genuinely newsworthy?** Yes. A federal regulator is formally questioning whether a recall fix worked, eleven months after the company declared the fix complete. The defect is robotaxis passing stopped school buses with children loading. The NTSB has a separate open investigation (HWY26FH007) with a preliminary report.
- **Novel angle?** Yes. This is not "Waymo passed a school bus." That was 2025. This is "Waymo already recalled for that, and the recall didn't take" — a recall of a recall, for a driverless fleet, where the second failure mode turned out to be a human in Michigan answering a yes-or-no question wrong. The robot saw the bus, stopped, asked for help, got the wrong answer, and drove past anyway.
- **Duplicates?** Checked. #1579 covered the California DMV freeway ban (work-zone intrusions, different defect). #1594 covered NHTSA's five-standards rewrite for driverless cars (rulemaking, different story). #1525 was a recall-of-recall census across 10 campaigns (no Waymo). No prior article covers RQ26006, recall 25E084, the Austin ISD violations, the NTSB Jan 12 incident, or PE26001.

## Core numbers (NHTSA ODI RQ26006 resume, Nov 6, 2026; recall 25E084; NTSB HWY26FH007 prelim, Mar 3, 2026)
- **Recall query RQ26006:** opened November 6, 2026. Population: **2,895 vehicles** running Waymo's 5th-generation automated driving system.
- **Original recall 25E084:** filed December 10, 2025. **3,067 units.** Defect: software could cause the vehicle to pass a stopped school bus even when red lights are flashing and/or the stop arm is extended, after initially slowing or stopping.
- **The remedy:** a software update Waymo said was complete on **all affected vehicles by November 17, 2025** — 23 days before the recall was formally filed.
- **NHTSA's finding on closing PE25013:** "the majority of these incidents occurred after November 17, 2025," the remedy date. "This calls into question the effectiveness of the recall remedy."
- **The trigger:** September 22, 2025, Atlanta — a Waymo approached a stopped school bus from a side street, stopped, then drove around the front of the bus, past its extended crossing control arm near students getting off, and down the road past the stop arm. NHTSA opened preliminary evaluation PE25013 on October 17, 2025, noting the fleet was driving about two million miles a week and "the likelihood of other prior similar incidents is high."
- **Why the cars did it (Waymo's own Part 573 report):** the cars saw the buses. They stopped or started to stop, then sometimes proceeded before the bus turned off its lights or pulled in its arm, because the system decided it was impeding a priority vehicle and moved to get out of the way. The behavior arrived with the **August 20, 2025** driverless software release, broadly deployed in mid-September 2025.
- **Citations:** Waymo knew of **12 citations** tied to the behavior, issued September 25 to November 14, 2025. No collisions from the recalled behavior, per the recall report.
- **Austin ISD:** the district logged **19 violations** in the 2025-26 school year, and wrote NHTSA on November 20, 2025 that **five of them happened after Waymo's November 5 letter** assuring the district the fix was in place. The district asked Waymo to suspend operations during school pickup and drop-off hours. Waymo refused. By January 15, 2026, the district's count had reached **24** (CBS Austin).
- **The NTSB incident, January 12, 2026, 7:55 a.m., East Oltorf Street, Austin:** an unoccupied 2024 Jaguar I-Pace was the **first vehicle to stop** for an Austin ISD bus (2025 Thomas Built) loading students, red lights strobing, two stop arms extended. The car then asked remote assistance: "is this a school bus with active signals?" An agent in **Novi, Michigan**, answered **"No."** The car resumed travel and passed the bus with its stop arms still out. **Six vehicles passed that bus in total. No crash occurred.** Passing a stopped school bus with active signals violates Texas Transportation Code section 545.066. NTSB investigation HWY26FH007 remains open; probable cause and safety recommendations pending.
- **The second probe:** NHTSA opened **PE26001 on January 28, 2026**, after a Waymo struck a child who ran out from behind a double-parked SUV two blocks from a Santa Monica elementary school during drop-off.
- **Waymo's position:** the company says it has made significant improvements around school buses and has received **no citations since March 2026**. It claims twelve times fewer injury crashes involving pedestrians than human drivers.

## Original calculations (arithmetic only, from the cited filings)
1. **94.4% of the recalled fleet is back under investigation:** 2,895 vehicles in RQ26006 out of 3,067 in recall 25E084. The query covers nearly the entire recalled population, not a subset.
2. **354 days:** from the date Waymo declared the remedy complete (November 17, 2025) to the date NHTSA opened the recall query (November 6, 2026). Almost a full year of post-fix incidents before the regulator formally asked whether the fix worked.
3. **23 days:** the recall was filed December 10, 2025, twenty-three days after Waymo said the fix was already deployed on every car. The paperwork ratified a software push that had already happened. There were no dealer visits and no owner letters — Waymo owns every car.
4. **12 citations in 50 days:** September 25 to November 14, 2025. Roughly one citation every four days, before the fix.
5. **26% of Austin's violations came after the assurance:** 5 of the district's 19 logged violations happened after Waymo's November 5, 2025 letter telling the district the updates were in place.
6. **Six vehicles, one with no driver:** in the January 12 NTSB incident, six vehicles passed the stopped bus. Five had human drivers making a human choice. One was an empty car that had stopped, asked a human for help, and was told to go.

## What this does NOT prove (limitations)
- A recall query is a review, not a finding of fault and not a new recall. NHTSA has not ruled that the remedy definitively failed. It is asking whether the fix adequately corrected the defect and what caused the post-remedy reports.
- NHTSA's closing document counts 27 incidents from outside sources (a media report from Atlanta and traffic citations from Austin ISD). The number Waymo reported, and the overall total, are marked confidential. The true incident count is not public.
- Waymo's claim of no citations since March 2026 is the company's own statement; NHTSA has not confirmed it publicly. The query covers incidents through the PE25013 record, not a live count.
- The January 12 NTSB account is preliminary and subject to change. The NTSB has not determined probable cause. The Santa Monica child-strike incident (PE26001) is a separate investigation with its own facts; it is not part of RQ26006.
- The recall report says no collisions resulted from the recalled behavior. The danger documented here is exposure — cars passing buses where children were loading — not a crash count.
- Waymo's "twelve times fewer injury crashes involving pedestrians than human drivers" is a company claim about its overall record, not a finding about school-bus behavior. It does not answer the question RQ26006 asks.

## Strongest counterargument
"Waymo is being held to a standard no human driver meets." Fair, in part: human drivers illegally pass stopped school buses constantly — the NTSB's own January 12 account shows five human drivers passing the same bus. Waymo's fleet-wide pedestrian injury record, by its own data, is far better than humans'. And the company fixed the software before the paperwork was even filed, which is faster than any hardware recall in history. But the counterargument misses what RQ26006 actually asks. NHTSA is not comparing Waymo to human drivers. It is comparing Waymo's fix to Waymo's fix. The company said the problem was solved on November 17, 2025. The majority of the incidents happened after that date. A fix that does not fix the thing it was filed to fix is a failed fix, whatever the baseline. And the January 12 failure did not come from the driving code the recall patched — it came from the human backup layer, which no recall of driving software touches.

## Actionable takeaways
- If you live in a Waymo operating city: the school-bus rule is the one that matters at 7:55 a.m. A robotaxi that stops for a bus and then goes anyway is not a hypothetical. It happened in Atlanta, it happened at least 19 times in Austin, and the regulator is still asking why.
- If your kid rides a bus in Austin: the district's buses carry stop-arm cameras that photograph violators. The footage is what forced the federal investigation. The cameras work; the question is whether the cars do.
- The broader lesson is about recall remedies, not robots: a software recall can be "complete" on every vehicle and still not work. NHTSA's recall-query process exists precisely to check that. When a company says a recall is done, the right question is the one NHTSA finally asked a year later — did it actually take?

## Sources
1. NHTSA, Office of Defects Investigation, recall query RQ26006 resume, November 6, 2026 (quoted in Class Action Pulse and The Autowire). https://www.classactionpulse.com/news/waymo-robotaxis-school-bus-recall-query-nhtsa-rq26006
2. NHTSA, recall acknowledgment letter for 25E084, December 11, 2025 (3,067 units, remedy complete November 17, 2025). https://static.nhtsa.gov/odi/rcl/2025/RCAK-25E084-3001.pdf
3. NTSB, preliminary report HWY26FH007, "Automated Driving System-Equipped Vehicle Passed School Bus Loading Student Passengers," March 3, 2026. https://www.ntsb.gov/investigations/Pages/HWY26FH007.aspx
4. TechCrunch, "Waymo to issue software recall over how robotaxis behave around school buses," December 5, 2025. https://techcrunch.com/2025/12/05/waymo-to-issue-software-recall-over-how-robotaxis-behave-around-school-buses/
5. The Arizona Republic / azcentral, "Thousands of Waymo vehicles are under investigation. Here's why," November 12, 2026. https://www.azcentral.com/story/money/cars/2026/11/12/federal-agency-investigates-waymo-school-bus-fix/92716371007/
6. MotorSafety.org, "Waymo Recalls," November 26, 2026. https://www.motorsafety.org/2026/11/
7. The Autowire, "NHTSA Doubts Waymo's School-Bus Software Fix," November 10, 2026. https://theautowire.com/2026/11/10/nhtsa-doubts-waymos-school-bus-software-fix/
8. The Autowire, "Waymo School Bus Pass Traced to a Remote Agent's Wrong Answer," October 16, 2026 (PE26001 Santa Monica incident; Austin ISD count of 24). https://theautowire.com/2026/10/16/waymo-school-bus-remote-assistance-austin-ntsb/
