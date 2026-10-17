# Research: Europe Wrote the Law for the Camera Watching Your Eyes. America Wrote Nothing.

**Slug:** 1200-eu-driver-camera-rules-america-didnt
**Journalist:** Clara Rollover (consumer-safety beat; kicker: The Gap)
**Number:** 1200

## Angle (1-2 sentences)
Since July 2024, every new car sold in the EU ships with an infrared driver-monitoring camera AND a statutory envelope around it: no continuous recording, no third-party access, data deleted immediately after processing, closed loop, and a ban on identifying the person. The same hardware is already shipping in American cars because removing it costs more than leaving it in, while on this side of the Atlantic the governing law is whatever the manufacturer's privacy policy says, and the federal impaired-driving rule that was supposed to address it missed its November 2024 deadline by nearly two years.

## Kill test
- **Genuinely newsworthy?** Yes. Regulatory asymmetry with consumer-harm implications, fresh (Auto Wire piece Sept 22, 2026; §24220 docket still pending as of June 2026).
- **Novel angle on data?** Yes. Queue check: #875 (Tesla cabin camera), #968 (drowsiness nag), #1000 (impaired-driving camera math) are adjacent but none drew the EU statutory-envelope vs US vacuum comparison, none used the 3.5-seconds-to-feet arithmetic, and none cited the Seeing Machines 4.8M-cars-on-road supplier data or the 99.9%-accuracy-millions-of-false-interlocks math.
- **Original contribution (required):** (a) Converts the EU 3.5-second gaze threshold into distance at American highway speeds (160 ft at 31 mph, ~360 ft at 70 mph, 590+ ft at 81 mph) showing the time-based threshold does not scale with speed; (b) works out the NHTSA 99.9%-accuracy warning arithmetically: ~290M registered US vehicles x 2 starts/day x 365 days x 0.1% error rate = ~211M false interlocks per year under that assumption set, which frames NHTSA's "millions to tens of millions" as conservative and speed-dependent; (c) contrasts the UN R171 hands-off 5-second eyes-off allowance with the ADDW 3.5-second hands-on allowance, showing the camera's real function drifting from safety warning to liability proof.

## Primary sources (4)
1. **The Auto Wire, John Lloyd, Sept 22, 2026** — "Driver Monitoring Camera Rules: Europe Wrote Them, US Didn't." Primary reporting on ADDW delegated regulation thresholds (3.5s @ >=50 km/h, 6s @ 20-50 km/h, +1.5s non-nominal), GSR data rules (no continuous recording, no third-party access, immediate deletion, closed loop, no biometric personal data), test-population spec ("No glasses or head accessory"), 940 nm IR choice vs sunglasses, Seeing Machines 4.8M cars on road (+67% YoY), UN R171 5-second eyes-on request, Ford Part 573 camera recall (254,640 vehicles, March 2026), NHTSA 99.9% accuracy quote. https://theautowire.com/2026/09/21/eu-driver-monitoring-camera-addw-mandate-us-privacy-gap/
2. **stateofsurveillance.org, June 13, 2026** — "19 Months Past Deadline: Where the NHTSA Impaired Driving Rule Stands." §24220 BIL mandate; final rule due Nov 15, 2024; no NPRM/proposed/final rule as of June 13, 2026; ANPRM Jan 5, 2024 (89 FR 830); 18,367 comments; docket NHTSA-2022-0079 (RIN 2127-AM50); Dec 15, 2025 telltale info collection (90 FR 58079); June 9, 2026 Driven By Safety meeting memo; MADD April 30, 2026 "deeply disappointed" letter; 33% increase in drunk-driving deaths since 2019; 37 lives/day; IIHS 10,000-lives DADSS estimate; 10-year backstop to Nov 2031. https://stateofsurveillance.org/news/nhtsa-section-24220-impaired-driving-prevention-rulemaking-status-2026/
3. **carcody.com fact-check (Aug 10, 2026)** — "Will New Cars Have Surveillance Tech by 2027?" Confirms: §24220 real, technology-neutral, NO final rule as of Aug 2026, no 2027 mandate, privacy/data-sharing rules unsettled. https://carcody.com/federal-surveillance-tech-in-new-cars-by-2027-what-the-law-actually-requires/
4. **National Today, March 17, 2026** — NHTSA report to Congress: impaired-driving detection tech not ready, 99.9% accuracy threshold needed, error rates near the legal limit too high, no new timeline. https://nationaltoday.com/us/ny/queens/news/2026/03/17/nhtsa-says-advanced-impaired-driving-tech-not-ready/

## Key numbers for the piece
- July 7, 2024: EU GSR second wave; ADDW mandatory on every new passenger car/van registered in EU.
- ADDW thresholds: 3.5 s gaze in Area 3 at >=50 km/h; 6 s at 20-50 km/h; +1.5 s non-nominal; then visual + acoustic/haptic warnings, cascading/intensifying.
- 3.5 s = ~160 ft at 31 mph; ~360 ft at 70 mph; 590+ ft at 81 mph (autobahn, with extension).
- IR: 850/940 nm; 940 nm for sunlight/sunglass robustness; invisible illumination.
- Test population default: "No glasses or head accessory, including hat or mask" (manufacturers may widen, none compelled).
- EU data rules: no continuous recording; nothing retained beyond purpose; never accessible to third parties; deleted immediately after processing; must function without biometric personal data; closed loop.
- US: no FMVSS for driver monitoring. §24220 deadline Nov 15, 2024 missed; 18,367 ANPRM comments; no NPRM; most recent docket activity June 9, 2026. Governing law in US = manufacturer privacy policy + state biometric statutes (Illinois BIPA has enforcement weight).
- NHTSA: even 99.9% accuracy -> "millions to tens of millions" of false prevent/limit instances per year.
- Seeing Machines: 4.8M cars on road (+67% YoY), 1.09M units in H1 FY2026 (+62%).
- UN R171: eyes-on request latest at 5 s visual disengagement (hands-on assisted driving); 3 s escalation. So: driving yourself 3.5 s, car steering 5 s.
- MADD: 33% increase in drunk-driving deaths since 2019; a death or injury every 78 seconds; ~37 lives/day. IIHS: DADSS-type system could save 10,000+ lives/year fully implemented.

## Limitations to state explicitly
- The Auto Wire piece is secondary reporting on EU delegated regulation text; I have not pulled the regulation from EUR-Lex myself.
- Seeing Machines figures are company-reported (March 2026); its market share claim (">half of current production volumes") is self-reported.
- The 211M/year false-interlock arithmetic is my illustration with stated assumptions (2 starts/day/vehicle, uniform 0.1% error), not NHTSA's number; NHTSA's stated range is "millions to tens of millions." Error rates are not uniform across conditions; actual interlock logic may not fire per-start.
- Sunglasses/headgear degradation is inferred from the IR wavelength rationale and test-population spec, not from a published per-device failure rate.
- ADDW warns; it does not interlock. The §24220 impairment-prevention interlock is a separate (unfinished) rule.

## Strongest counterargument (at full strength)
The camera is genuinely saving lives right now in the US even without a federal rule: GM's Super Cruise, Ford's BlueCruise, and Tesla's cabin camera already require eyes-on-road and disengage when drivers stop looking, and Euro NCAP's push has demonstrably improved real-world distraction warnings. Europe's data rules sound noble but ADDW can be manually deactivated and resets each ignition cycle, so the "mandatory" sensor is optional in practice for anyone annoyed by it. And the US privacy patchwork may be more consumer-protective in the one state that matters: Illinois BIPA carries statutory damages per violation, which is a sharper stick than any EU type-approval process.

## Actionable takeaways for readers
1. Before you buy, read the driver-monitoring section of the manufacturer's privacy policy: ask whether cabin-camera footage leaves the car, for how long it is stored, and whether it is shared with insurers or data brokers (LexisNexis/Verisk pipelines are already buying telematics).
2. If you live in Illinois, BIPA gives you a private right of action over biometric data collection; know the consent rules before you consent on the touchscreen.
3. The ADDW-style warning can be deactivated each drive; if false alerts train you to ignore it, the system delivers zero benefit.
4. The federal impaired-driving mandate is in limbo; do not buy a car expecting a passive alcohol interlock standard to exist soon.
