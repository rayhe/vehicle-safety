# Research: #830 — The Heavy-Truck AEB Mandate vs. NHTSA's Own Phantom-Braking Probe

**Slug:** `heavy-truck-aeb-mandate-phantom-brake-probe`
**Journalist:** Mia Crumplezone (safety-tech beat; least-used recently)
**Kicker:** Investigation
**Ship date target:** 2026-10-06 (queue position #830)

## Kill test
Is this genuinely newsworthy? Yes. NHTSA and FMCSA are drafting a supplemental NPRM (per the 2026 regulatory agenda, expected imminently) that would mandate AEB on every new heavy truck in America, while NHTSA's own Office of Defects Investigation has an OPEN engineering analysis into false AEB activations on heavy trucks that has already linked phantom braking to 24 crashes, 13 injuries, and one fatality. The agency is writing the mandate with one hand and investigating the technology with the other.
Novel angle: the mandate's benefit math (155 lives saved/yr from avoided rear-enders) has no line item for the induced crashes — false activation turns the 80,000-lb truck into a stopped obstacle, creating rear-end crashes where the truck is the STRUCK vehicle. The NPRM counts only crashes where the truck is the striking vehicle. Also: ODI's own data shows the fancier Detroit Assurance systems fail more than the simpler Wabco OnGuard — complexity correlates with phantom braking.

## Primary sources (all verified live, 2026-09-07)

1. **NHTSA press release — heavy-vehicle AEB NPRM (June 2023):** ~60,000 rear-end crashes/yr in which the heavy vehicle is the striking vehicle. Projected: prevent 19,118 crashes, save 155 lives, prevent 8,814 injuries annually; eliminate 24,828 property-damage-only crashes. Scope: vehicles >10,000 lbs GVWR (Class 3-8). Class 7-8 compliance 3 years after final rule; Class 3-6 four years.
   https://www.nhtsa.gov/press-releases/heavy-vehicles-automatic-emergency-braking-proposed-rule

2. **The BRAKE Report — EA25006 upgrade (Oct 23, 2025):** PE23010 (opened May 2023) upgraded to Engineering Analysis EA25006. 2017-2022 Daimler Trucks North America (Freightliner Cascadia, Western Star 5700). 347 reports reviewed: 24 crashes, 13 injuries, 1 fatality. Systems: Detroit Assurance 2.0/4.0/5.0, Wabco OnGuard. ODI: OnGuard significantly lower claim rate than Detroit Assurance. DTNA internal: 315 reports, most "brief, typically five-mile-per-hour deceleration."
   https://thebrakereport.com/nhtsa-expands-probe-into-daimler-trucks-automatic-emergency-braking-errors/

3. **Land Line — AEB rulemaking resumes (2026 regulatory agenda):** FMCSA/NHTSA joint supplemental NPRM expected as soon as July 2026; could be 2027-2028 before a final rule. Investigation into false activations upgraded to engineering analysis Oct 2025, still open. OOIDA: "mandating a technology without sufficiently addressing false activations, properly consulting with professional truck drivers or completing ongoing research programs." Statutory mandate from Infrastructure Investment and Jobs Act (IIJA, 2021).
   https://landline.media/aeb-rulemaking-to-resume-after-fmcsa-nhtsa-hit-the-brakes/

4. **Overdrive — original PE details (May 2023):** 18 complaints of false AEB activation "without an actual roadway obstacle"; ~250,000 trucks. NHTSA: "The reports indicate the subject vehicle will apply the service brakes without warning or input from the driver. The applications range from momentary, partial application with little loss of speed to full application, which brings the vehicle to a complete stop in the travel lane."
   https://www.overdriveonline.com/equipment/article/15539649/nhtsa-investigating-reports-of-false-positive-automatic-braking-events-in-certain-trucks

5. **Land Line — false activation opposition:** The NPRM itself admits the two proposed false-activation test scenarios (driving over a steel trench plate; driving between two parked vehicles) "establish only a baseline for system functionality" and "are not comprehensive, nor sufficient to eliminate susceptibility to false activations in the myriad of circumstances in the real world."
   https://landline.media/opponents-to-aeb-mandate-point-to-false-activation-reports/

## Original findings / calculations (Crash Report novel contribution)

1. **The induced-crash gap in the mandate's math.** NHTSA's 155-lives-saved projection is computed entirely from rear-end crashes where the heavy truck is the STRIKING vehicle (~60,000/yr). A phantom-braking event makes the truck the STRUCK vehicle — a stopped obstacle in a live lane. That crash category is absent from the benefit analysis. EA25006's numbers give a crude floor for the induced risk: 24 crashes per 347 reviewed false-activation reports (6.9%), 13 injuries, 1 fatality — from one manufacturer's trucks over ~2.5 years.

2. **Complexity correlates with failure in ODI's own data.** Detroit Assurance 2.0, 4.0, and 5.0 (the newer, fancier iterations) fail at similar rates to each other, while the older/simpler Wabco OnGuard shows a "significantly lower claim rate" on comparable models in comparable conditions. Three generations of upgrades; same failure rate. The sophistication is not buying reliability.

3. **DTNA's "five miles per hour" vs. NHTSA's "complete stop."** DTNA characterizes most events as brief 5-mph decelerations. NHTSA's documented complaint reports include full service-brake application bringing an 80,000-lb rig to a complete stop in the travel lane. A stopped tractor-trailer on a 65-mph highway is the most dangerous fixed object in American transportation — and the NPRM's benefit math counts zero of those.

4. **The timeline collision.** PE23010 opened May 2023; the heavy-vehicle NPRM was issued June 2023 — the mandate proposal and the defect investigation are the same age. The supplemental NPRM is being written now (2026 agenda) while EA25006 (upgraded Oct 2025) is still open. The final rule could land 2027-2028, with Class 7-8 compliance ~3 years after — roughly 2030-2031. NHTSA will be mandating a technology before its own investigators finish deciding whether it's a defect.

5. **Ratio framing:** 24 crashes + 1 fatality ALREADY attributable to false AEB activation vs. 155 projected lives saved per year at FULL fleet saturation decades hence. The induced harm is small in absolute terms — the mandate's net benefit is almost certainly positive — but the agency has never published an induced-harm estimate, so the "155 lives" number is gross, not net.

## Strongest counterargument
The math still favors the mandate: 19,118 prevented crashes vs. 24 induced crashes in the probe data; 155 lives saved annually vs. 1 fatality linked to false activation. Phantom braking is rare (347 reports across ~250,000 trucks over 2.5+ years ≈ 0.06% of the population per year), and every generation of AEB has false positives — so did early ABS and ESC. OOIDA's objection is industry protectionism dressed as safety concern; the trucking lobby fought ELDs, speed limiters, and HOS rules too. The honest version: the mandate is almost certainly net-positive, but NHTSA is refusing to publish the net number because the gross number (155) is a better headline, and writing a mandate for a system under active defect investigation is a process failure regardless of the math.

## Limitations
- EA25006 data comes from ODI investigation documents as reported by The BRAKE Report; NHTSA has not published final engineering analysis conclusions. The "1 fatality" link is investigator-reviewed association, not a confirmed causation finding.
- The 6.9% crash-per-report rate is a floor based on reviewed reports, not a population rate; most false activations are never reported.
- NHTSA's benefit estimates are projections at full fleet saturation with ESC+AEB; they exclude induced crashes entirely, which is the gap this article identifies, not a number this article can fill.
- Detroit Assurance vs. OnGuard claim-rate comparison is ODI's reported analysis; DTNA has not confirmed the split publicly.

## Proposed headline
"NHTSA Wants AEB on Every New Semi. Its Own Investigators Found the System Slamming Trucks to a Stop on Empty Highways."

## Actionable takeaways (required)
- Fleet buyers: ask what AEB system generation a truck ships with — Detroit Assurance 2.0/4.0/5.0 have higher ODI claim rates than Wabco OnGuard in the current engineering analysis.
- Drivers: if your truck phantom-brakes, file with NHTSA ODI (safercar.gov) — the 347 reports ARE the investigation's data supply.
- The 2017-2022 Freightliner Cascadia and Western Star 5700 are the vehicles under EA25006; if you drive one, know the system can fully apply the brakes in a live lane.
