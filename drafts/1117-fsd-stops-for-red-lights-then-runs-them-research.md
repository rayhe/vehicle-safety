# Research: FSD Stops for Red Lights, Then Runs Them (PE25012)

## Angle
NHTSA is investigating 2,882,566 Teslas equipped with Full Self-Driving after 58 reports (14 crashes, 23 injuries) of the software committing traffic violations. The strangest detail in the federal resume: some cars came to a **complete stop** at the red light, then drove into the intersection anyway. A human running a red light is reckless. A car that stops, considers the red light, and proceeds anyway is something else.

## Kill test
Genuinely newsworthy: a year-old federal probe with a genuinely creepy behavioral detail (stop-then-proceed), plus a repeatable intersection in Joppa, Maryland where it happened multiple times. Not another data dump — it is a federal document describing machine behavior no human exhibits. PASS.

## Verified facts (primary sources only)

1. **NHTSA ODI Resume PE25012** (static.nhtsa.gov/odi/inv/2025/INOA-PE25012-19171.pdf), opened 10/07/2025: population **2,882,566** vehicles equipped with FSD (Supervised) or FSD (Beta). [PRIMARY]
2. Same resume, failure report summary: 58 total incidents (44 VOQs + 14 SGO/media reports), **14 crashes**, 23 injuries, **0 fatalities** at opening. [PRIMARY]
3. Same resume, p.2: **18 complaints + 1 media report** alleged FSD "failed to remain stopped for the duration of a red traffic signal, failed to stop fully, or failed to accurately detect and display the correct traffic signal state." [PRIMARY]
4. Same resume, p.2: **6 SGO reports** of FSD approaching a red light, entering the intersection, and crashing — 4 with injuries. "At least some of the incidents appeared to involve FSD **proceeding into the intersection after coming to a complete stop**." [PRIMARY]
5. Same resume, p.2: coordination with the **Maryland Transportation Authority and State Police** — multiple incidents occurred at the **same intersection in Joppa, Maryland**, suggesting the problem is **repeatable**. "NHTSA understands that Tesla has since taken action to address the issue at this intersection." [PRIMARY]
6. Same resume, p.2-3: second behavior — wrong-way driving. 2 SGO reports + 18 complaints + 2 media reports of FSD entering opposing lanes, crossing double-yellows, or turning onto roads in the wrong direction despite wrong-way signage. Plus 4 SGO + 6 complaints + 1 media of wrong-lane-for-turn moves. [PRIMARY]
7. Same resume, p.1: the investigation asks whether FSD's driving inputs "forestall the driver's supervision when they are unexpectedly performed" — i.e., the failure happens too fast for a supposedly-attentive human to catch. [PRIMARY]
8. Reuters (Oct 9, 2025, via Tesery summary + InsuranceJournal): probe prompted by 58 reports including 14 crashes and 23 injuries; "FSD has induced vehicle behavior that violated traffic safety laws." Tesla did not respond to Reuters' request for comment. [SECONDARY, wire]
9. Electrek (Feb 23, 2026): by December the violation count had grown ~60% to **80 reports** (62 driver complaints, 14 Tesla reports, 4 media accounts). NHTSA sent a sweeping Information Request on Dec 3, 2025 demanding complaint/crash/video/EDR/CAN data with a Jan 19, 2026 deadline. Tesla missed it, said **8,313 records required manual review** at ~300/day, got extended to Feb 23, then secured a **second extension to March 9, 2026** — citing simultaneous responses to multiple NHTSA probes including delayed crash reporting and inoperative door handles. [SECONDARY]
10. The Weekly Driver (July 2026): a dashcam clip circulated mid-July showing a Tesla Model 3 blowing through a red light and spinning a C7 Corvette; **FSD involvement in that crash is unconfirmed**. Do not imply it. [SECONDARY, for color with caveat]

## Story status
- Investigation is a **Preliminary Evaluation**, not a finding of defect and not a recall. Say that explicitly.
- 0 fatalities in the opening resume (23 injuries, 14 crashes).
- This site has covered PE25012 only in passing (the four-investigators article, #812-era). No dedicated PE25012 story exists in the 322-entry queue. Full-queue grep on 2026-10-10: no '25012', 'joppa', or red-light-running stories. No duplicate.

## Journalist
Mia Crumplezone — Safety Engineering Editor (technical but accessible, gets excited about systems behavior; slightly judgmental about bad design). Her beat: safety tech, model-year trends, how systems fail in the first 150 milliseconds.

## Story skeleton
- Kicker: Investigation
- Lede: 2,882,566 cars under investigation; the red-light cases with the detail bolded (stopped, then went).
- Pull stat: 2,882,566 / 58 / 14 / 23, or "the same intersection, twice" (Joppa).
- Body: what the resume describes (stop-then-proceed; wrong-way; the Joppa repeatability; NHTSA's "forestall supervision" framing; Tesla's extension double-dip on data delivery).
- Actionable: if you use FSD, treat every red light as a supervised event, the car can behave in ways a human would not; check nhtsa.gov/recalls quarterly; report odd behavior via NHTSA's VOQ portal because those complaints are what opened this probe.
- Limitations: PE is preliminary; 58 reports across 2.88M cars is a tiny reporting rate and the denominator includes cars that rarely use FSD; selection bias in VOQs; Tesla has patched behavior since; FSD versions span years and the incidents mix old and new software.
- Counterargument: human drivers run red lights ~165,000+ times a day by NHTSA's own past estimates; the question is whether FSD's rate is worse than a human's, and NHTSA has not answered that yet. A car's behavior being weird is not the same as being worse.
- Methodology: all counts from the ODI opening resume; escalation counts (80) from press reports of NHTSA's December tally, not from a published NHTSA document.
