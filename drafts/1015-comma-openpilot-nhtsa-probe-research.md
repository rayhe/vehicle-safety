# Research: NHTSA Opens First Federal Probe of DIY Aftermarket Autopilot (comma.ai openpilot)

**Article #1015** | Journalist: Vin Wreckage (Existential Dread columnist) | Kicker: Existential Dread
Slug: `1015-comma-openpilot-nhtsa-probe`

## Story in one line
NHTSA opened Preliminary Evaluation PE26007 on Sept 21, 2026 into comma.ai's aftermarket driver-assistance devices after five crashes into stopped/slow-moving vehicles killed three people — and one of the fatal crashes was running a third-party GitHub fork of the software, not comma's code at all.

## Kill test
- **Newsworthy?** Yes. First federal defect investigation into an *aftermarket, open-source* driver-assist product. Not an OEM. A $999 box you install in 15 minutes.
- **Novel angle?** Yes. The queue has covered OEM systems (Waymo #995, Tesla Cybercab AQ, AEB mandate #999/#1014) but nothing on aftermarket retrofits, and nothing on the open-source fork liability gap: NHTSA is investigating software that anyone can fork on GitHub, sold by a company that says it isn't obligated to report crashes under the Standing General Order.
- **Data legs?** Yes. NHTSA PE26007 (primary), Standing General Order crash data (primary DOT data), comma.ai's own SGO filings with their disclaimer language (primary, company), Electrek's original reporting on the five crash report IDs (secondary, original journalism).

## Key facts (with attribution)

1. NHTSA's Office of Defects Investigation opened **Preliminary Evaluation PE26007 on September 21, 2026**, into comma.ai's aftermarket driver-assistance devices. Covers an estimated **30,000 comma three, comma 3X, and comma four devices** plus the openpilot software itself. (Electrek, Sept 24, 2026; confirmed by Reuters/Dow Jones Newswires, Morningstar, Sept 23, 2026)

2. **Five crashes**: equipped vehicles struck stopped or slow-moving vehicles in their travel lanes. Two crashes produced **three deaths**; four of the five crashes injured **11 people**, some seriously. (Electrek; cleverdude.com summary of NHTSA opening materials)

3. ODI confirmed the comma system was on or engaged in "multiple crashes"; preliminary data review suggests openpilot "may not have adequately detected or responded to the in-lane vehicles." ODI learned of crashes via **Standing General Order reports, a consumer complaint, and outreach to police**. (Electrek)

4. Named crashes:
   - **Feb 2026, Ascension Parish, Louisiana**: 2022 Toyota RAV4 with comma device hit a **stopped first-responder vehicle** (Gonzales Police Department cruiser, emergency lights on). Two rear-seat passengers died. comma's own SGO filing says the device "appears to have been running 3rd party non-comma software" — a fork (reported as FrogPilot). (Electrek; aiweekly/TechCrunch)
   - **Sept 2025, Missouri**: 2020 Honda Accord, openpilot "verified engaged," rear-ended a stopped car on a highway at **82 mph**; serious injuries. Honda filed its own report citing the police report and a lawsuit: driver set cruise to 80 mph and fell asleep. (Electrek)
   - **July 2026, Mona, Utah**: 2021 Toyota Corolla, openpilot engaged, hit a stopped passenger car at **56 mph**. (Electrek)
   - Pattern in all three: highway speeds, stopped vehicle in lane.

5. **Marketing vs. fine print**: NHTSA's opening materials quote comma's promise of "hands free driving for the car you already have," a 15-minute self-install, and software that "[c]an drive for hours without intervention." Comma's own fine print says the driver must remain alert and ready to take over at all times. (Electrek, citing NHTSA resume)

6. **comma disputes the reporting obligation**: Every comma SGO filing opens with a disclaimer that it provides information "without agreeing with NHTSA's interpretations or conceding that comma is obligated to respond to the General Order." Comma answers "Unknown" on whether the car was in its operational design domain, arguing it doesn't make the vehicle or its stock ADAS. On the Accord crash it noted adaptive cruise was "performed by Honda system." (Electrek)

7. **The fork question is on the record**: NHTSA says if a modified version of openpilot is involved, it will evaluate it and consider components shared with the fork. Community forks (sunnypilot, FrogPilot) are built on the same driving model and codebase. (Electrek)

8. **History**: In 2016 NHTSA sent comma a special order over the comma one; George Hotz killed the product rather than answer, then open-sourced openpilot and sold hardware as "dev kits." Comma now claims **30,000+ cars, 400M+ miles logged**, "second only to Tesla in hands-free miles." The comma four launched November 2025 at **$999**, supports **350+ car models**. Consumer Reports ranked openpilot the best driver-assistance system it tested in 2020. (Electrek)

9. **The failure mode is familiar**: stopped-vehicle-in-lane is the same signature as NHTSA's Tesla Autopilot emergency-vehicle probe (opened 2021), which ended in a recall of ~2 million Teslas for added driver alerts. (Electrek)

## Primary sources (3+)
1. **NHTSA ODI PE26007** — investigation opening/resume (government primary). Cite by investigation number; link to NHTSA ODI investigations listing.
2. **NHTSA Standing General Order crash reporting data** — DOT data primary. The five crash report IDs (four found in public SGO data per Electrek; fifth ID 30351-1807 not in released datasets).
3. **comma.ai's own SGO crash filings** — company primary: the disclaimer language ("without agreeing with NHTSA's interpretations..."), "Unknown" ODD answers, fork attribution.
4. **Electrek original reporting** (Sept 24, 2026) — original journalism: went through the public SGO data and matched four of five crash IDs.
5. comma.ai product site — primary for marketing claims and the stationary-vehicle limitation acknowledgment.

## Original contribution (novel analysis for this article)
The **three-layer liability gap**: PE26007 is the first ODI investigation where the manufacturer (comma) ships the hardware, publishes the software, but *does not control the software actually running* (forks). NHTSA's defect authority was built for OEMs with controlled release pipelines. A recall of "software anyone can fork on GitHub" has no enforcement precedent — comma's answer so far is to point at the third party. The article frames this as: NHTSA can order a recall of the hardware, but the actual driver was code comma didn't write, running on a car comma didn't build, and comma's filings argue it's not even obligated to report. That's the novel regulatory analysis.

Supporting calculation: comma claims 400M+ miles across ~30,000 devices → 5 SGO-reported crashes = ~1.25 per 100M miles. Present with explicit caveats (SGO captures only reported ADAS crashes; denominator is claimed miles, not audited; no engaged-vs-disengaged split).

## Strongest counterargument
- comma's systems have driver-monitoring cameras and openpilot ranked #1 by Consumer Reports in 2020 — the tech is genuinely good; the Missouri crash involved a driver who fell asleep at 80 mph, which is driver negligence, not a sensor failure.
- One of the fatal crashes ran a third-party fork (FrogPilot), not comma's shipped release — comma's position that it can't control community builds has real weight.
- 5 crashes in 400M claimed miles is a low absolute count; a PE is not a finding of defect.
- Stationary-vehicle detection is the known weak spot of *all* camera-based Level 2 systems (Tesla included) — this is sensor physics, not a comma-specific defect.

## Limitations
- PE26007 is a preliminary evaluation; NHTSA has made no defect finding and may close it quietly.
- The fifth crash report ID (30351-1807) is not in public SGO data — details unavailable.
- Mileage figures (400M) are comma's own claims, unaudited.
- We do not have FARS-level data on comma-equipped crashes; the SGO dataset is the only public record, and comma's own filings dispute the reporting obligation.

## Actionable takeaways (required)
- If you run openpilot or a fork (FrogPilot, sunnypilot): stopped vehicles in your lane are the documented blind spot. Do not use it hands-free in traffic that can queue suddenly; treat stopped cars as a known system limitation.
- Forks inherit the same driving model and codebase comma ships — NHTSA says it will evaluate shared components, so "it's not comma's code" may not shield anyone.
- The driver fell asleep at 80 mph in one crash. No Level 2 system is a chauffeur; the fine print is the actual product.
