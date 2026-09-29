# Research: #1016 — Tesla Cybercab FMVSS Self-Certification Audit (AQ26002 + Sept 10 Special Order)

## Angle (1-2 sentences)
Tesla put paying passengers into a Cybercab with no steering wheel, no pedals, and no mirrors in Austin on Sept 3, 2026, having self-certified it under FMVSS; NHTSA opened Audit Query AQ26002 the same afternoon and escalated Sept 10 to a Special Order compelling sworn answers to 21 requests by Sept 30. The novel contribution: a standards-by-standards accounting of which FMVSS physically assume a human driver (135 S5.3.1 foot control, 111 mirrors, 203/204 steering column, 208 driver-position protection) and the Zoox contrast (4-year Part 555 exemption, 2,500/yr cap) against Tesla's self-certification shortcut.

## Kill test
Genuinely newsworthy: first commercial deployment of a wheel-less/pedal-less production robotaxi by a major automaker; NHTSA's first Special-Order escalation over FMVSS self-certification of a driverless vehicle; sworn deadline TOMORROW (Sept 30, 2026); $139M civil penalty ceiling. Not a data dump: no FARS dump, the analysis is regulatory-forensic (which standards, which determinations, which precedent).

## Primary sources (3+)
1. **eCFR, 49 CFR 571.135, S5.3.1** (primary legal text): "The service brakes shall be activated by means of a foot control." Verified via search result from ecfr.io + law.cornell.edu mirrors. https://www.law.cornell.edu/cfr/text/49/571.135
2. **NHTSA AQ26002 opening** (Sept 3, 2026, docketed 3:42 p.m. ET; public Sept 4): Audit Query "Tesla Cybercab FMVSS Certification," ODI, ~1,000 vehicles, examining "the process and technical data on which Tesla relied when certifying the Cybercab." Reported by: aistockwire (Sept 2026), evmagz, startupfortune.
3. **NHTSA Special Order (Sept 10, 2026)** under 49 U.S.C. 30166, signed by NHTSA Chief Counsel Peter Simshauser: 21 requests, sworn officer attestation, responses due Sept 30, 2026; civil penalties up to $139,356,994; criminal exposure up to 15 years for false statements. First reported by Electrek; covered by webpronews, techtimes (Sept 17, 2026).
4. **Deployment facts**: Commercial paid rides Austin Sept 3 (invite-only), public Sept 4; 45 Cybercabs registered with Texas DMV; 2-seat EV, no steering wheel/pedals/mirrors; Giga Texas-built; production began April 2026. Sources: cryptobriefing, aistockwire, carwikihub.
5. **Zoox precedent**: Part 555 exemption process took ~4 years; commercial clearance July 30, 2026 with 2,500-vehicle annual cap. (Also our own story #878 on Zoox exemption breach.) Source: techtimes, startupfortune.

## Key verified numbers
- AQ26002 opened Sept 3, 2026 (same day as first paid rides); public Sept 4
- Special Order: 21 requests, due Sept 30, 2026; $139,356,994 civil penalty ceiling
- ~1,000 Cybercab vehicles in audit scope (Reuters/CNBC via aistockwire)
- 45 Cybercabs registered with Texas DMV at launch
- Zoox: 4 years, 2,500/yr cap (Part 555 exemption)
- FMVSS 135 S5.3.1: foot control required, verbatim
- FMVSS 111: inside rearview mirror of unit magnification + driver-side outside mirror of unit magnification required for passenger cars (via fool.com summary)
- Tesla FARS (2014-2023, fars_output.js): Model 3 92 deaths, Model Y 57, Model S 100, Model X 29 = 278 across 4 models; fleets 1.575M / 1.75M / 175K / 157.5K
- Cybercab operates under Texas state AV rules (state-level commercial operation independent of federal certification question) — karmactive

## Standards collision set (novel accounting)
- FMVSS 135 S5.3.1 — service brake must activate by foot control. Cybercab has none.
- FMVSS 111 — inside rearview mirror + driver-side outside mirror, unit magnification. Cybercab has camera-based rear view, no conventional mirrors.
- FMVSS 203/204 — steering column / steering control rearward displacement. No steering column exists.
- FMVSS 208 — occupant crash protection references the "driver's designated seating position." No driver position.
- FMVSS 101/102/114 — controls/displays, transmission shift sequence, theft protection (keyed). Partially inapplicable.
- The Special Order reportedly asks whether temporary steering wheels/pedals appeared during testing and were removed before deployment (webpronews) — Tesla's most awkward question.
- The regulatory question NHTSA posed: "the extent to which Tesla's certification depended on determinations that certain FMVSS are inapplicable to the Cybercab" (evmagz quoting NHTSA filing).

## Strongest counterargument (full strength)
Self-certification is how EVERY car in America reaches the road; Tesla used the exact process the law provides, and "inapplicable" determinations are routine engineering judgments manufacturers make on every vehicle. NHTSA audits manufacturers regularly; an Audit Query is not a defect finding and the Special Order is the agency doing its job, not a verdict. Zoox's 4-year exemption odyssey is arguably the broken process, and Tesla's position, that standards written for human controls cannot apply to a vehicle built without them, has real legal logic. The Cybercab has been carrying passengers for weeks with no reported crash. FARS shows Tesla's conventional fleet with some of the lowest fatality rates in the dataset. If the end state is a safe car, the paperwork fight is theater.

## Limitations (what this article does NOT prove)
- Tesla's Sept 30 responses are not public yet; the article reports the questions, not the answers.
- Whether any FMVSS was actually violated is undetermined; AQ26002 is an audit, not a defect investigation.
- The Special Order's 21 requests are described via secondary reporting (Electrek first, webpronews/techtimes); the order text itself was not independently reviewed.
- FARS Tesla rows cover 2014-2023 and the Cybercab specifically; death counts are raw FARS fatalities, not exposure-adjusted safety rankings (VMT estimates for EVs carry the dataset's stated uncertainty).
- "No reported crash" for the Cybercab fleet is an absence-of-reporting claim, not a safety finding; the fleet is ~45-1,000 vehicles and weeks old.

## Actionable insight (hard gate)
If you rode a Cybercab in Austin: you rode in a vehicle whose legal right to the road is currently under sworn federal examination; that doesn't make the ride unsafe, but it means the compliance story is unresolved. For everyone else: this audit will set the template for every driverless vehicle after it — watch whether NHTSA accepts "inapplicable" self-determinations or forces the industry into the Zoox-style exemption line, because that decides how fast wheel-less cars reach your city.

## Journalist
Rex Driverton (Senior Crash Correspondent — investigations, paradoxes; deadpan noir). Kicker: Investigation.
