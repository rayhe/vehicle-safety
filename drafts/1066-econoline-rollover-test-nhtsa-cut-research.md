# #1066 — Research: The E-Series Rollover Gap Meets NHTSA's Plan to Delete the Rollover Test

**Journalist:** Rex Driverton (Senior Crash Correspondent)
**Angle:** The Ford E-350 kills at 7.2x the death rate of the Ford E-150 (2.51 vs 0.35) and 8.1x the E-250 (0.31). Same Econoline family, same manufacturer, same era — and the deadliest of the three is the SOBEREST (15.7% any-impairment vs 22.1% / 19.0%). The difference is the back seats: the E-350 carried the 12/15-passenger wagon configurations; the E-150 maxed out at 8. NHTSA's own 15-passenger-van research says 10+ occupants nearly triples the rollover ratio. News peg: NHTSA's Aug 17, 2026 RFC (91 FR 53339, docket NHTSA-2026-1651, comments due Oct 16) proposes deleting the dynamic rollover Fishhook test from NCAP — the test Congress specifically wrote 15-passenger vans into in 2005. Nobody has run the E-150/E-250/E-350 within-lineup comparison; the two existing E-350 stories used the Transit replacement frame and the passenger-body-count frame.

## The numbers (FARS 2014-2023, internal dataset fars_output.js)

| Nameplate | Rate (deaths/100M VMT) | Deaths | Annual | Crashes | Fleet | Any-impairment % |
|---|---|---|---|---|---|---|
| Ford E-350 | 2.51 | 776 | 77.6 | 1,892 | 262,500 | 15.7 |
| Ford E-150 | 0.35 | 73 | 7.3 | 173 | 175,000 | 22.1 |
| Ford E-250 | 0.31 | 79 | 7.9 | 206 | 218,750 | 19.0 |

- E-350 vs E-150: 2.51/0.35 = **7.17x**. E-350 vs E-250: 2.51/0.31 = **8.1x**.
- E-350 annual 77.6 deaths = one death every 4.7 days, for a decade.
- Combined E-150+E-250: 152 deaths on 393,750 fleet (implied rate ~0.33). E-350: 776 deaths on 262,500 fleet. The 1-ton van killed 5.1x more people on two-thirds the fleet.
- E-350 median death model year: 2005; 84.4% of its deaths are pre-2012 MY (pre-ESC-mandate). 2012+ MY deaths: 118; 2010+ MY: 184.
- Seating (Ford 2012 E-Series brochure): E-150 wagon 8-passenger; E-350 wagon 12-passenger (regular) / 15-passenger (extended).

## The mechanism (NHTSA's own research)

- NHTSA 15-passenger van rollover study (crashstats pub 01030), single-vehicle crashes: rollover ratio <5 occupants 12.3%; 10-15 occupants 29.1% (35.4% for 10+); over 15 occupants 70.0%. A van with 10+ aboard rolls at nearly 3x the ratio of one with fewer than 10.
- Physics: a 15-passenger van's center of gravity is not a fixed property; it climbs with every occupant and every roof bag. That is the failure mode Congress had in mind when the 2005 highway bill wrote 12- and 15-passenger vans into NCAP.

## The news peg

- Federal Register 91 FR 53339, Aug 17, 2026 (FR Doc 2026-16735), signed by Administrator Jonathan Morrison: RFC to remove the Dynamic Rollover Resistance Test (Fishhook maneuver) and side airbag out-of-position testing from NCAP. Docket NHTSA-2026-1651; comments close **October 16, 2026**. Cuts land with MY2027.
- NHTSA's case: no vehicle has tipped up in NCAP testing in 15 years; ESC (FMVSS 126, phased 2008-2011) is ~50% effective against single-vehicle fatal crashes and ~70% against first-event rollovers; the dynamic test shifted calculated rollover risk only 1.6-4.8 points. Test capacity to be redeployed to THOR dummies, oblique test, crash-avoidance rating (2029-2033).
- The Auto Wire (Shawn Henry, Sept 26, 2026): "Churches, schools, shuttle operators and anyone else shopping for a 15-passenger van lose the only dynamic test ever applied to the vehicle class Congress specifically legislated into the program." Also notes only one 2026 model exceeds NCAP's 10,000-lb ceiling: the Ford Transit T-350 HD 15-passenger DRW.
- forcar.org (5 days ago): the Ford Transit scores one star for rollover — the replacement van still shows the geometry problem. (Secondary source; attribute.)

## Kill test

- Existing E-350 stories: #e350-commercial-van-killer (E-350 vs Transit, 18x frame); #e350-church-bus-killer (passenger body count). Neither runs the E-150/E-250 within-lineup comparison.
- Zero E-150/E-250/Econoline/15-passenger-van coverage in 826 stories + queue (grep-verified; the one "e-150" hit was a "150k" false positive).
- Zero NCAP Fishhook-removal coverage in stories + queue (grep-verified; only ncap-48-year-crumple-blind-spot, different topic).
- Novel composite: within-lineup 7x gap + sobriety inversion (deadliest = soberest) + NHTSA's own occupancy-rollover ratios + the Oct 16 comment deadline. Never assembled.
- VERDICT: passes. Not another data dump.

## Limitations (for the draft)

- FARS does not record body configuration: the E-350 nameplate mixes cargo vans, 15-passenger wagers, and cutaway chassis (ambulances, shuttle buses, box trucks). I cannot isolate the wagon's rate from the nameplate.
- The dataset imputes roughly 13,500 miles/year per vehicle for every model. E-350s in commercial, shuttle, and ambulance service are driven far more than that, so part of the 7x gap is exposure, not per-mile risk. If E-350s average double the miles, the per-mile gap is ~3.5x — still large, and the occupancy mechanism explains the rest.
- 84.4% of E-350 deaths are pre-2012 model years (pre-ESC-mandate). The rate is dominated by old vans; post-2012 E-350s still killed 118 people in the window.
- FARS window is 2014-2023; the NCAP change affects MY2027+. NCAP only rates new vehicles, and the E-350 wagon ended production in 2014 — the direct regulatory link is to the van class (Transit, etc.), not to E-350 sales.
- NHTSA's 15-passenger van rollover ratios come from single-vehicle crashes in the agency's research sample, not from my FARS cut.

## Strongest counterargument

NHTSA's case for the cut is genuinely strong, and the article must steelman it: no NCAP tip-up in 15 years; ESC demonstrably works (~70% against first-event rollovers); the dynamic test barely moved ratings (1.6-4.8 points); test capacity is finite and the agency needs it for THOR dummies and the crash-avoidance rating Congress ordered twice. A test that passes everyone tells buyers nothing, and deleting it is honest housekeeping. The rebuttal: the test stopped failing because the vehicles it was written for aged out of showrooms — but 15-passenger vans live in the used market now, where churches and schools buy 15-year-old E-350s, and the geometry problem persists in new vans (Transit: one rollover star). NCAP's whole value is the daylight between the legal floor and the rating; the Fishhook was the only dynamic check on the exact class Congress legislated into the program. State both at full strength.

## Actionable insights (for the draft)

- If your church, school, or shuttle service runs a 15-passenger van: the rollover star is the one that matters — check it now, while it still reflects a dynamic test.
- Loading discipline is the cheapest safety device ever invented: NHTSA's numbers say 10+ occupants nearly triples the rollover ratio. Keep heavy weight low and forward, never on the roof; every passenger belted, every time.
- Confirm the van has ESC and that it works; anything pre-2012 may not have it.
- Used E-350 buyers: the 1-ton van is not the half-ton van with a bigger engine. It is a different risk class, and the price should reflect that.
- The proposal is not final: comments close October 16, 2026, docket NHTSA-2026-1651 at regulations.gov.
- VIN check for open recalls at nhtsa.gov/recalls before any long trip.
