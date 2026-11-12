# Research: #1473 — Ford Said the Recall Deluge Was Old Cars and Software. Its Newest Vehicles Just Hit 40 Recalls.

**Number:** 1473
**Slug:** 1473-ford-recall-census-40-new-model-campaigns
**Journalist:** Rex Driverton (Senior Crash Correspondent; fatality-rate investigations, vehicle deep dives)
**Kicker:** Investigation
**Date:** November 11, 2026

## Angle (1-2 sentences)

In September this site ran Ford's own defense against the numbers: the recall deluge was old cars and software, campaigns down 38%, and its brand-new 2026 models had just 25 federal campaigns. I re-ran the exact same NHTSA census today. The brand-new 2026 Fords now carry **40 campaigns filed in 2026**, up 60% in ten weeks, while Toyota sits at 7 and Honda at 2 — and not one of Ford's 40 is flagged as an over-the-air fix.

## Kill test

- **Genuinely newsworthy?** Yes. Direct sequel to #815 (Sep 3, 2026) with the same method, new numbers, and a fresh peg: Ford's 2026 total keeps climbing (78 campaigns in 2026 per the Nov 11 recall trackers; 99 campaigns and 14.96M units in the trailing 12 months). The company's two public defenses — "it's old cars" and "it's mostly software" — both fail against the new-model census again, harder.
- **Novel on site?** Yes. #815 is the only prior brand-level census; this is its scheduled re-run with new data, not a repeat. No other draft covers the Nov 2 Ford campaigns (26V725 Bronco wiper, 26V726 Explorer PI map lights), the Sep 9 six-campaign day, or the 40/7/2 split. Adjacent coverage is not overlapping: #1466 covered the Explorer PI map-light recall alone; #1468 covered Maverick batteries alone; #815 is the Sep 3 baseline this piece updates.
- **Original contribution:** the full re-run census below (NHTSA recalls API, Nov 11, 2026), per-model counts, component mix, and the Sep 9 cluster — computed, not quoted.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 11, 2026. Method: for each brand's current US lineup, queried make+model+modelYear=2026; kept campaigns with ReportReceivedDate in calendar 2026; deduped by NHTSA campaign number. Raw results saved at /tmp/rcl1473/census.json and per-model counts in this file. https://www.nhtsa.gov/recalls
2. **#815 research file** (drafts/815-ford-2026-model-year-recall-census-research.md) — the Sep 3, 2026 baseline: Ford 25, Toyota 5, Honda 2; 0 of Ford's 25 flagged over-the-air.
3. **Detroit Free Press, "Ford files 3 new recalls impacting 159,000 vehicles, including Mustang," Sep 1, 2026** (Jamie L. LaReau): https://www.freep.com/story/money/cars/ford/2026/09/01/ford-recall-faulty-wiring-improperly-installed-parts/91559030007/ — Ford 67 recalls YTD; spokesman Mike Levine: campaigns "down approximately 38%" vs last year; recalls come from "proactive internal testing of current production vehicles, rather than from customer reported issues."
4. **USA Today, "Ford leads all carmakers in recalls. Is your Blue Oval car safe?," Jul 1, 2026**: https://www.usatoday.com/story/cars/recalls/2026/07/01/ford-leads-recalls-2026-carmakers/90766353007/ — 53 recalls since Jan 1, 2026; spokeswoman Sharyn Ghacham: "More than 80% of our recalls this year are resolved through convenient, software-only updates."
5. **Manage My Ride, latest recalls tracker (Nov 11, 2026)**: https://www.managemyride.io/recalls/latest — "706 recalls filed so far in 2026 · Ford leads with 78."
6. **CyberMax Ford recalls tracker (updated Nov 7, 2026)**: https://cybermax.cybermax-tools.workers.dev/recalls/ford/ — "99 NHTSA campaigns" received Nov 7, 2025–Nov 3, 2026, "together listing 14,955,671 units."
7. **Vehicle Service Pros, "NHTSA Recalls Nov. 2–6: GM, Hyundai, Subaru, Dodge," Nov 2026**: https://www.vehicleservicepros.com/industry-news/service-repair/article/55417032/nhtsa-recalls-nov-26-gm-hyundai-subaru-dodge — confirms 26V725/26V726 context and the Nov 2–6 recall week.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 11, 2026)

| Brand | Sep 3 (#815) | Nov 11 (#1473) | Change |
|---|---|---|---|
| Ford | 25 | **40** | +15 (+60%) |
| Toyota | 5 | 7 | +2 |
| Honda | 2 | 2 | 0 |

Per model queried: Ford 40 across a 14-model lineup (12 models with at least one campaign); Toyota 7 across 20 models; Honda 2 across 11 models. Ford's new-model campaign count is 5.7x Toyota's and 20x Honda's.

### Ford per-model campaign counts (2026 MY, 2026 filings; multi-model campaigns count once per model)

| Model | Campaigns |
|---|---|
| Explorer | 12 |
| Bronco | 9 |
| F-150 | 8 |
| Ranger | 7 |
| F-250 Super Duty | 6 |
| Bronco Sport | 5 |
| Maverick | 5 |
| F-350 Super Duty | 5 |
| Mustang | 4 |
| Expedition | 2 |
| Escape | 1 |
| Transit | 1 |
| Mustang Mach-E | 0 |
| Edge | 0 (discontinued) |

The Explorer — America's best-selling three-row SUV family and the police-interceptor base — leads Ford's own lineup with 12. The Bronco has 9; the F-150 has 8.

### Component mix (Ford's 40, deduped)

Visibility 5, Seats 4, Engine 5 (incl. engine cooling), Structure 4, Back-over prevention 3, Air bags 3, Power train 3, Electrical system 3, Equipment 2, Suspension 2, Exterior lighting 2, Seat belts 2, Interior lighting 1, Fuel system 1. Zero campaigns in the software-only category; **0 of 40 flagged overTheAirUpdate=true** in NHTSA's data (same 0-for-25 result as #815).

### Timing

- March 2026: 8 campaigns. September 2026: 8 campaigns, including **6 in a single day (Sep 9: 26V576–26V581)** — rear axle, stabilizer rod, fuel tank, seat-belt buckles, curtain and frontal air bags.
- Newest: Nov 2, 2026 — 26V725 (Bronco wiper arm nut may loosen, wipers detach) and 26V726 (Explorer Police Interceptor map lights won't shut off).

### Biggest campaigns touching 2026-MY Fords (unit counts from NHTSA filings via press)

- 26V468 (Jul 21): Bronco engine-compartment wiring, fire risk — **565,691** vehicles, ~1% estimated defective.
- 26V547 (Aug 25): Mustang ground-eyelet wiring — **148,663** vehicles.
- 26V418 (Jun 30): Mustang wiper motors — **67,994** vehicles.
- 26V689 (Oct 20): F-150 tailgate cable — **30,123** vehicles.

### Ford's totals beyond new models

- 78 Ford campaigns filed in 2026 (all model years), the industry lead (Manage My Ride, Nov 11).
- 99 campaigns / 14,955,671 units in the trailing 12 months to Nov 3 (CyberMax tally of NHTSA data).
- 2025 full year: 152 recalls, 12.96M vehicles (per Free Press, Sep 1).

## What Ford says vs what the census says

- "Down approximately 38% compared to last year" (Levine, Sep 1): true against 2025's 152-campaign avalanche, and still the industry lead by a wide margin. A smaller avalanche is still an avalanche.
- "More than 80% of our recalls this year are resolved through convenient, software-only updates" (Ghacham, Jul 1): not true of the new-model cut. Zero of 40 campaigns touching 2026-MY vehicles carry NHTSA's over-the-air flag. The hardware list reads like a parts catalog: axles, stabilizer rods, fuel tanks, seat-belt buckles, air bags, wiper motors, tailgate cables.
- "Proactive internal testing of current production vehicles, rather than from customer reported issues" (Levine): the Sep 9 cluster alone — six campaigns in one day across axles, suspension, fuel, belts, and two air-bag systems — looks less like a testing program finding things early and more like a production system finding things late, all at once.

## Strongest counterargument

Campaign counts are not severity scores. A 23-vehicle torque-check recall (26V550) and a 565,691-vehicle fire-risk recall (26V468) each count once. Ford recalls aggressively and early — including for defects other makers might handle as service bulletins — and its November 2024 consent order with NHTSA puts it under independent oversight that encourages over-reporting. Toyota's 7 and Honda's 2 could partly reflect different reporting thresholds, not different quality. Also, the 2026 model year is still in progress: late-filed campaigns will keep moving all three counts, and a single multi-model campaign (like the Sep 9 cluster) can inflate Ford's number without a single new defect type.

The counterargument weakens on the per-model spread: 12 different Ford models with at least one campaign, Explorer at 12 alone, and the component mix spread across every system. That is not one bad supplier or one bad decision. It is breadth.

## Limitations

- Campaign counts are not vehicle counts or severity scores (see counterargument).
- NHTSA API vocabulary gaps: "Mustang Mach-E" must be queried as "mustang mach e" (hyphenated spelling returns an error); models with no 2026-MY campaigns return HTTP 400 with an empty-results body, which this census correctly treats as zero. Direction of bias: understates all three brands equally in principle, but Ford's multi-model campaigns are captured via several models, so a missed Ford model is less likely to hide a campaign than a missed Toyota/Honda model.
- NHTSA's overTheAirUpdate flag may undercount software remedies not flagged as such.
- Brand-level only (Ford, not Ford Motor Co. incl. Lincoln).
- Census as of Nov 11, 2026; 2026 filings continue.
- Unit counts above come from press/NHTSA filing summaries, not from the API (which does not return unit counts in this endpoint).

## Actionable takeaways

- If you own a 2026 Ford — especially an Explorer (12 campaigns), Bronco (9), or F-150 (8) — run your VIN at nhtsa.gov/recalls now. Several of these campaigns (26V468 wiring/fire, 26V547 Mustang wiring, 26V689 tailgate cable) have remedies available; others (26V547's ground-eyelet fix) were not expected until months after the owner letters.
- If you own a 2026 Toyota or Honda, the same check takes thirty seconds and will very likely come back clean — which is itself the story.
- Shopping new: the Explorer's 12 campaigns in its first model year are the single most useful number in this piece. A first-year redesign with a dozen federal campaigns is a reason to buy the second year, or to negotiate like you know.
