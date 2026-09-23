# Research Notes — #976: JLR DC-DC Converter Recall (26V248), September Remedy Wave

## Angle (1-2 sentences)
JLR's fix for a converter that can silently kill drive power and exterior lighting in 23,677 mild-hybrid SUVs is a software update that adds a dashboard warning and a limp-home mode. The recall, in other words, does not replace the faulty hardware — it teaches the car to announce its own failure.

## Kill test
- Genuinely newsworthy? YES — remedy announced Sept 17, 2026 (USA Today Sept 22); biggest recall in JLR history (CarBuzz, April 2026).
- Novel? YES — no queue article covers 26V248 (grep: zero hits for '26v248', 'jlr', 'dc-dc', 'converter'). The "warning-as-remedy" paradox is new to the site.
- Data angle? YES — two filings to cross-tabulate, 24-month regulatory timeline, 5,952 claims with zero casualties.

## Primary sources (5, requirement is 3+)
1. **NHTSA Part 573 Safety Recall Report 26V248** (submission Apr 17, 2026; RCLRPT-26V248-5125.pdf, static.nhtsa.gov) — population 170,169 at 100% defect estimate; failure sequence; chronology; suppliers LG Innotek (Poland) + Yazaki; "corrective repair action is not yet defined" as of April.
2. **USA Today, Greta Cross, Sept 22, 2026** — Sept 17 second filing: 23,677 vehicles, 100% estimated affected; model breakdown; 393 claims/field reports as of Sept 17; no accidents/injuries/fires; software remedy with new "limp-home" mode + driver warning; JLR campaign E008; contact 800-637-6837.
3. **Fox Business (syndicated), Sept 2026** — interim owner letters expected Nov 13, 2026; "additional letters will be sent out once the final remedy is available."
4. **CarBuzz, April 2026** ("Jaguar Land Rover Just Issued The Biggest Recall In Its History") — 170,169 vehicles; biggest JLR recall ever (prior record 121,500 for suspension, 2025); fault = internal fault in boost control microchip; owners can keep driving meanwhile; JLR delivered ~80,000 vehicles in the US last year.
5. **Reuters, April 23, 2026** — confirms 170,169 figure via NHTSA.
6. **Transport Canada via guideautoweb.com** — the software update "will prevent an electrical overload failure in the DCDC converter"; advise parking outdoors away from structures until repaired (fire-risk framing in Canada).

## Key facts
- Defect: DCDC converter on Jaguar/Land Rover mild-hybrid electric vehicles (MHEVs) can fail from an internal fault in the boost control microchip, or from electrical overload during high power demand. 12V charging stops; the car coasts to a stop, then the lights die.
- Failure sequence (Part 573, verbatim): within 10 seconds of failure, red "Stop Safely Electrical Fault Detected" → cascading warnings (lane keep disabled, suspension fault, stability control fault) → gearbox shifts to Neutral with gearbox fault → engine runs a while, center screen and A/C die first → engine shuts down → exterior lighting dies "some time later."
- Chronology: Sept 2024 — JLR PSCC reviews rising global warranty claims, concludes "given the gradual progression of symptoms experienced by the customer, that the issue did not pose an unreasonable risk to safety" (read: customer satisfaction, not safety). 2025 — more reports; task force formed. Nov 2025–Mar 2026 — daily hardware-in-the-loop testing after a cyber incident. Early 2026 — talks with government agencies. April 7, 2026 — NHTSA clarifies the agency's view is "one of a safety nature rather than customer satisfaction." April 10 — JLR agrees, launches recall. Sept 17, 2026 — second filing (E008), 23,677 vehicles, remedy announced.
- Claims: 5,952 US claims/field reports involving DCDC replacement, July 2019–Apr 2026 (Part 573). 393 claims/field reports cited in the September report (USA Today). Zero reported accidents, injuries, or fires in the US.
- September model breakdown (23,677 total): Range Rover Sport 10,973; Defender 8,100; Range Rover 3,849; Discovery 552; Velar 76; Evoque 35; F-Pace 79; E-Pace 10; Discovery Sport 3. Note: model-year ranges shifted vs April (Evoque 2020-2024 vs 2020-2023; Discovery Sport 2020-2024 vs 2020 only; E-Pace 2021-2024 vs 2021-2022) — expansion population, different manufacturer campaign code (E008 vs D126 H575).
- Remedy: free software update; introduces limp-home mode + driver warning "in case the DC-DC converter goes offline for any reason." Interim letters Nov 13, 2026; further letters when final remedy available (Fox Business) — the update announced Sept 17 IS the remedy per USA Today; interim-letter language suggests phased rollout.

## Original calculations
- Concentration: Range Rover Sport (10,973) + Defender (8,100) = 19,073 of 23,677 = **80.6%** of the September wave in two models.
- Event rate: 393 claims / 23,677 = **1.66%** observed failure-report rate — high for a recall with zero casualties.
- Scale vs. company: CarBuzz notes JLR delivered ~80,000 US vehicles last year; the April wave alone (170,169) is 2.1x a full year of US sales.
- Timeline: Sept 2024 (PSCC "not safety") → Sept 2026 (remedy) = **24 months** from first internal safety-committee review to a fix; NHTSA's override took 19 of those months (Sept 2024 → Apr 2026).
- Per-model skew: Velar 76 vs RRS 10,973 — a 144:1 spread; the converter is shared hardware but the exposure is not evenly distributed.

## Strongest counterargument
JLR's original position was not crazy: the failure has a gradual symptom progression (10-second warning, then a cascade of alerts, engine keeps running, lights are the last thing to die), and across 5,952 US converter replacements there have been zero reported accidents, injuries, or fires. The data, in other words, backed the "customer satisfaction" call — until NHTSA read the same data and saw 5,952 chances to strand a car at highway speed at night. Also: Transport Canada frames the software update as genuinely preventing the overload failure mode, so "warning-as-remedy" slightly undersells it — the update both prevents the fault AND warns when prevention fails.

## Limitations
- We do not have the September Part 573 filing text; the 23,677 population's exact relationship to the April 170,169 (expansion vs. revised scope) is inferred from the changed campaign code, model-year ranges, and press framing — stated as such, not as fact.
- Remedy detail beyond "software update + limp-home + warning" is not public; duration of limp-home mode and what triggers it are unknown.
- "Zero accidents" is per JLR's reporting; under-reporting is possible for near-miss strandings.
- USA Today/Fox Business disagree slightly on framing (remedy announced vs. remedy still coming); article presents both with the interim-letter date as the reconciliation.

## Actionable takeaways
- Own a 2019–2024 JLR mild hybrid (RRS, Defender, RR, Discovery, Velar, Evoque, F-Pace, E-Pace)? Check your VIN at nhtsa.gov/recalls — this campaign is active and letters go out Nov 13.
- If "Stop Safely Electrical Fault Detected" appears: pull over immediately. The manual's own sequence says you get minutes, not hours — lights die last, which means the dark is the final symptom.
- Don't wait for the letter: the remedy is free software at the dealer now.

## Journalist assignment
Rex Driverton — investigations beat, deadpan paradox hunter. The "fix is a warning light" paradox + NHTSA's "safety nature rather than customer satisfaction" line are pure Rex.

## Headline options
1. "JLR's Fix for Cars That Lose Power and Lights: A Dashboard Warning"
2. "The Recall That Doesn't Fix Anything: 23,677 Jaguars Get a Warning Light Instead of a New Part"
3. "NHTSA Had to Tell JLR That Losing Your Headlights Is a Safety Problem"
Kicker: Investigation. Pull stat candidates: 5,952 / 80.6% / 24 months / 1.66%.
