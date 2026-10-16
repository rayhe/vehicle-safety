# Research: 1190-iihs-pedestrian-braking-not-even-offered

## Angle (1-2 sentences)
IIHS's October 2026 pedestrian-braking ratings name 11 vehicles too weak to earn a Top Safety Pick. Three of them (Jeep Wrangler, Jeep Gladiator, Dodge Durango) don't merely score Poor — the system isn't offered on any trim, so IIHS rates them Poor by default, and crossing the 11 with FARS data shows the measurable ones span a 58x fatality-rate range.

## Kill test
Newsworthy? Yes — the "not available at any price" distinction is a sharper consumer story than "scored poorly," and it was verified directly on IIHS's own rating pages, not just the aggregator list. Novel? No existing queue entry or draft covers the October 2026 weak-pedestrian-braking list, and nobody has crossed it against FARS per-model rates. Proceed.

## Primary sources (3+)
1. DAX Street, "11 Vehicles With Weak Pedestrian Braking, By IIHS Rating" (Oct 2026) — the 11-vehicle list: 2026 Honda Ridgeline Crew Cab (poor), 2026 Jeep Gladiator Crew Cab (poor, not offered), 2026 Jeep Wrangler (poor, not offered, applies 2024-26), 2027 Dodge Durango (poor, not offered), 2026 Nissan Altima (marginal), 2026 Volkswagen Jetta (marginal), 2026 Chevrolet Trailblazer (marginal), 2026 Chevrolet Trax (marginal), 2026 Volkswagen Taos (marginal), 2026 Mercedes-Benz GLE-Class (marginal), 2026 Ford Bronco (marginal). https://daxstreet.com/cars/428725/11-vehicles-with-weak-pedestrian-braking-by-iihs-rating/
2. IIHS official rating page, 2026 Jeep Wrangler 4xe: "Front crash prevention: pedestrian — Overall evaluation: P. Rating applies to all 2024-26 models. Pedestrian front crash prevention is not available on this model." https://www.iihs.org/ratings/vehicle/jeep/wrangler-4xe-4-door-suv/2026
3. IIHS via Automotive World award coverage: "The Gladiator failed to meet headlight and pedestrian crash avoidance standards" (Dec 2025 award round). https://www.automotiveworld.com/news/sixteen-models-earn-iihs-top-safety-awards/
4. NHTSA FARS 2014-2023 per-model data (fars_output.js, embedded site data): 337 models, deaths per 100M VMT rate; fleet median rate = 0.54.
5. IIHS testing protocol context: pedestrian braking is a gatekeeper for Top Safety Pick (acceptable or good required); none of the 11 can earn an award until the braking improves. (DAX Street; IIHS award criteria)

## Original finding (cross-tab, computed this run)
From fars_output.js, 8 of the 11 list members are measurable:

| Vehicle | FARS deaths/yr | Rate (deaths/100M VMT) | vs median (0.54) |
|---|---|---|---|
| Nissan Altima | 478.7 | 2.88 | 5.3x |
| Chevrolet Trailblazer | 247.3 | 2.83 | 5.2x |
| Volkswagen Jetta | 137.5 | 1.71 | 3.2x |
| Jeep Wrangler | 184.2 | 0.84 | 1.6x |
| Dodge Durango | 35.6 | 0.54 | 1.0x |
| Honda Ridgeline | 8.4 | 0.24 | 0.4x |
| Chevrolet Trax | 19.1 | 0.22 | 0.4x |
| Ford Bronco | 2.5 | 0.05 | 0.1x |

Range: Altima 2.88 vs Bronco 0.05 = ~58x spread. Jeep Gladiator, VW Taos, Mercedes GLE-Class have no rows (under the 50-death / inclusion threshold or naming gaps).

**Critical caveat:** FARS "deaths" in this dataset count deaths in crashes INVOLVING the vehicle (overwhelmingly occupants), not pedestrians struck by it. The table is an occupant-risk cross-tab, not a pedestrian-kill ranking. State this explicitly in the article.

## Secondary context
- GHSA 2024 pedestrian data: drivers struck and killed 7,148 pedestrians in 2024 (down 4.3%, second straight annual decline, still ~20% above 2016). Night is when most pedestrian deaths happen (DAX Street notes Altima's nighttime weakness matters for this reason).
- IIHS tests with adult/child dummies crossing in daylight and night plus a parallel-path adult, from city crawl to near-highway speeds; "marginal" typically reflects weak night performance.
- Jeep Gladiator also carries Poor for vehicle-to-vehicle front crash prevention in the 2026 IIHS commercial-test round (separate commercial IIHS Oct 8 release); irrelevant here except as context.
- Consumer-footprint note: Altima is popular with fleets/rentals (DAX Street), so its marginal rating has outsized public exposure.

## Counterargument (strongest case against the thesis)
A Poor-for-not-offered rating is not the same as a dangerous vehicle; the Wrangler and Gladiator are body-on-frame off-roaders whose buyers accept trade-offs, and Jeep sells plenty with no award. The marginal scorers (Bronco, Trax, Ridgeline) have genuinely good occupant structures — their owners are safe *inside*. Pedestrian braking is a lab test of a single system; absence of the system just means the driver does the braking. FARS rates above show some list members (Ridgeline 0.24, Bronco 0.05) are among the safest vehicles for their own occupants.

## Limitations
- FARS dataset ends 2023; the 2024-26 model years on the IIHS list are partially outside it. Model-year mismatch: IIHS rates MY2026 vehicles; FARS rates the nameplate across older years.
- No pedestrian-victim-by-striking-vehicle breakout in the embedded data — the occupant-death cross-tab is a proxy, not the thing itself.
- Gladiator, Taos, GLE not measurable in embedded data.

## Actionable takeaway
If you shop a Wrangler, Gladiator, or Durango: no option package fixes this — pedestrian braking is simply not sold on the vehicle at any price. On the Altima or Trailblazer: treat the system as a backup; slow down early near crossings, especially at night. Cross-check any model's pedestrian rating at iihs.org/ratings before signing.

## Journalist
Rex Driverton (investigations, FARS deep dives).
