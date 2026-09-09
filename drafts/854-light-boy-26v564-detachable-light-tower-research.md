# Research: #854 — Light Boy 26V564 detachable light tower

**Slug:** `light-boy-26v564-detachable-light-tower`
**Journalist:** Vin Wreckage (Existential Dread columnist — paradoxes, cosmic absurdity)
**Kicker:** Existential Dread
**Date:** 2026-09-09

## Anchor (this week, fresh, not in queue)
Consumer Affairs "Auto Safety Recall Derby - Week of September 07" (Sept 8, 2026) lists
**Light Boy America, Inc — NHTSA Recall ID 26V564000 — "Light Tower May Detach During Towing"**
— LIGHT BOY GBX12SK, model year 2020.

This is the only campaign in this week's derby not already drafted in the queue.
(Jeeps #847, Ram 26V560, Chrysler 26V561, PACCAR 26V567, Forest River Vibe, wheelchair lift 26V565 #853,
Tesla 19-car 26V558, Mustang ground recall, Cybercab AQ26002, Q1 2026 fatality estimates — all covered.)

## Primary sources
1. NHTSA recalls database + 26V564 campaign filing: "Light Tower May Detach During Towing,"
   Light Boy America, Inc, LIGHT BOY GBX12SK, 2020. Via Consumer Affairs derby,
   https://www.consumeraffairs.com/news/auto-safety-recall-derby-week-of-september-07-090826.html
   (reports NHTSA announcements; also mirrored at robinspost.com, Sept 8 2026).
2. AAA Foundation for Traffic Safety, "The Prevalence of Motor Vehicle Crashes Involving
   Road Debris, United States, 2011-2014": https://aaafoundation.org/research/prevalence-motor-vehicle-crashes-involving-road-debris-united-states-2011-2014/
   Fact sheet: https://aaafoundation.org/wp-content/uploads/2026/01/RoadDebris_FACTSHEET.pdf
   Key findings: 200,000+ police-reported debris crashes 2011-2014; ~39,000 injuries; 500 deaths;
   debris crashes 4x as likely on Interstate highways; ~37% of debris-crash deaths came from
   drivers swerving to avoid the object; "tow trailers becoming separated and hitting another
   vehicle or landing on the roadway" named among the most common vehicle debris types.
3. Multiquip GBX12SK operation manual (rev 2, 01/07/22), Table 1 specs:
   https://service.multiquip.com/pdfs/GBX12SK-rev-2-ops-manual.pdf
   Weight: operating 1,288 lb (584 kg); 5-stage telescopic mast, 23-25 ft height;
   trailer with outriggers, 2 tires, DOT/NHSTA-approved trailer frame.
4. Dealer spec corroboration (Kirby-Smith): same GBX12SK "Multiquip GloBug" listed at
   1,288 lb dry / 1,375 lb operating, https://www.kirby-smith.com/products/details?slug=multiquip-gbx12sk&category=light-towers

## Novel angle
A 2020-model-year towable light tower — six years on the road — recalled in 2026 because the
*trailer itself* can detach from the tow vehicle. The defect is not the car's coupling: the
towed equipment is the projectile. Original contribution: breakaway kinetic-energy calculation
for the unit at highway speed, plus the AAA "swerving kills 37%" framing applied to a
named, currently-recalled object. Nobody else has linked 26V564 to the debris data.

## Original calculation (methodology)
- Mass: 1,288 lb dry = 584 kg (Multiquip manual, Table 1; dry basis, conservative vs 1,375 lb operating).
- Speed: 65 mph = 29.06 m/s (typical Interstate tow speed).
- KE = 1/2 * m * v^2 = 0.5 * 584 * 29.06^2 ≈ 246,600 J ≈ **~247 kJ**.
- Equivalent drop height for same energy: h = KE/(m*g) = 246600/(584*9.81) ≈ **43 m (~141 ft)**.
  I.e., a detached GBX12SK at 65 mph carries the energy of the same machine dropped from a
  14-story building.
- For context, AAA's 200,000-debris-crash total spans 2011-2014 (4 years): ~50,000/yr, ~125 deaths/yr
  from all road debris.

## Limitations (must state in article)
- The Part 573 report for 26V564 was not retrievable in this run (NHTSA API query returned 400;
  static PDF not located). Population size, exact defect mechanism, chronology, and remedy
  details are therefore limited to the derby's one-line description. The article must not invent
  the population or the mechanism.
- AAA debris figures are 2011-2014; the study does not break out light-tower or trailer-separation
  deaths separately.
- NHTSA's filing names manufacturer "Light Boy America, Inc" / make "LIGHT BOY," while dealers
  sell the GBX12SK as a Multiquip GloBug. The relationship is unreconciled from fetched sources;
  do not assert a corporate relationship.

## Strongest counterargument (must state at full strength)
AAA's own conclusion: nearly all debris crashes are preventable through proper securement and
maintenance, and a six-year-old construction trailer being recalled is arguably the system
working — a tiny fleet, an equipment maker self-reporting, NHTSA publishing. The scandal
frame is weak; the real story is the physics, which does not care about the paperwork.

## Actionable insights (required)
- Fleet operators towing GBX12SK units (2020 model year): check NHTSA recall 26V564 status for
  your serial before the next tow; inspect coupler, safety chains, and jack-stand stowage per
  the ops manual before every tow (manual: service.multiquip.com PDF above).
- Every driver behind any trailer on the Interstate: debris crashes are 4x as likely there;
  AAA's advice — don't swerve hard at speed to dodge debris; 37% of debris deaths were the
  swerve, not the object.
- Check any towed equipment's VIN/serial at nhtsa.gov/recalls, not just your car's.

## Tone notes (Vin Wreckage)
Philosophical, slightly unhinged; "here's a fun fact that will ruin your morning commute"
opener is fine. Cosmic-absurdity frame: a machine built to banish darkness becomes the
darkness. Grim humor, data-backed, 300-500 words. No banned phrases, no "The" starter
clusters, em dashes ≤ 3.
