# Research — #1231: Tesla Model 3 far-side airbag OTA recall (EU Safety Gate SR/02850/26)

**News peg:** EU Safety Gate alert SR/02850/26, notified by Germany, published Oct 16, 2026. Tesla campaign SB-26-00-006 / KBA reference 16992R. First major restraint-system recall in Europe fixed entirely over the air.
**Journalist:** Mia Crumplezone (Safety Engineering Editor — safety tech, model design; next in rotation after Rex Driverton at #1230)
**Slug:** `1231-tesla-model-3-far-side-airbag-ota-recall`
**Working title:** "Tesla Recalled 131,726 Airbags and Nobody Visited a Dealer"

## Core facts (verified)

- **Population:** 131,726 left-hand-drive Model 3 Premium sedans, built at Giga Shanghai for the EU, Middle East, and South Korea. (Some European filings cite 114,473 for one regulatory submission; the KBA figure of 131,726 is the headline count.)
- **Production window:** June 30, 2024 – May 8, 2026 (type-approval e4*2007/46*1293* (003)).
- **Country counts reported:** Germany 12,680; Netherlands 10,787 (per local authorities cited by Auto Plus).
- **Defect:** Far-side (front-center) airbag deployment calibration lets shoulder lateral force exceed the UN R135 limit in a pole side-impact test. Safety Gate: "the vehicle may provide insufficient protection in the event of a side impact, which increases the risk of injury to vehicle occupants."
- **The test:** UN R135 pole test — a pole strikes the driver's door at 32 km/h (~20 mph) with a WorldSID dummy; shoulder lateral force must not exceed 3.0 kN (the downward force of ~306 kg / 674 lb). Tesla's cars exceeded it.
- **Remedy:** Free OTA software update (builds 2026.26.100.2 / 2026.32.3); no service visit. KBA monitoring under reference 16992R; Safety Gate lists measure in force from Sept 30, 2026.
- **No crashes or injuries** reported in connection with the condition (Safety Gate alert and Auto Plus both).
- **Purpose of the device:** The far-side airbag inflates between the front seats to stop the far-side occupant from sliding across the cabin into the struck side, the center console, or the other front occupant. Euro NCAP has folded far-side protection into its ratings; ZF noted in 2019 that such an airbag "may be necessary in order to receive a 5-star crash safety rating."

## The novel angle (kill test: PASS)

Two original findings, not just recall-summary:

1. **The patchable airbag.** Restraint systems used to be the one part of the car software couldn't touch: hardware, inflators, tear seams, dealer visits. This recall shows the *calibration* of an airbag is now a software bug — shipped silently for up to two years (mid-2024 builds), fixed in days by radio. That's a genuine phase change for passive safety, good and bad.
2. **The type-approval paradox.** These cars held valid EU type approval for two years while non-compliant in the pole test that approval was supposed to cover. The defect wasn't found by crash testing — it was found by paperwork/review, and the fix is a firmware push. What does type approval mean when the regulated behavior lives in a file you can rewrite at midnight?

## Primary sources (5)

1. **EU Safety Gate (RAPEX) alert SR/02850/26**, notified by Germany, published 2026-10-16, serious risk / injuries: "The lateral force on the shoulder can exceed the permitted limit (3 kN) during a pole collision... the vehicle may provide insufficient protection in the event of a side impact which increases the risk of injury to vehicle occupants." Compiled at myproduct.guru/blog/recall-model-3-r02850260a76 and product-guru.org/recall/rapex-sr-02850-26-model-3.html (compiled from the official notice).
2. **Auto Plus (France), Oct 21, 2026** (via Tesla News Wire summary): 131,726 vehicles; Tesla campaign SB-26-00-006; production June 30, 2024 – May 8, 2026; Germany 12,680 / Netherlands 10,787; fix in software 2026.26.100.2 or 2026.32.3; no crashes/injuries. teslanewswire.com/articles/tesla-model-3-premium-recall-europe-131726-far-side-airbag-ota-oct-2026
3. **German KBA / car-recalls.eu, Oct 6, 2026:** KBA monitoring under reference 16992R; 131,726 Model 3 (2024–2026); "The remedy will be carried out via a software update using Over The Air (OTA) technology"; type-approval e4*2007/46*1293* (003); built in China. car-recalls.eu/tesla-model-3-side-impact-requirements-kba/ and car-recalls.eu/recall/tesla-model-3-2024-2026-bodywork-injury/
4. **ZF press release (2019), via news.cision.com:** far-side airbag "unfolds in the vehicle's center... designed to help meet future regulatory testing" and "may be necessary in order to receive a 5-star crash safety rating." Establishes what the device does and why it matters.
5. **NHTSA/OTA-recall context:** NHTSA requires manufacturers to initiate recalls for any repair including software updates — a software update "still falls under the definition of a 'recall'" (NHTSA via Teslarati/ilovetesla.com). And the cautionary counterpoint: NHTSA opened a recall query in April 2024 to assess whether a Tesla OTA remedy was adequate, finding crashes in vehicles that already had the remedy installed (digitaltrends.com, Oct 2026). OTA delivery is not proven protection until every car installs it.

## Limitations

- Auto Plus (primary French source) was read via the Tesla News Wire summary; the original French article was not directly opened.
- The 114,473 vs 131,726 discrepancy across filings is reported but unresolved; 131,726 (KBA) is used as the headline figure.
- FARS has no Tesla Model 3 fatality breakdown by restraint-causation granularity; no fatality-rate context is possible for this defect. FARS 2014-2023 is also entirely non-EU.
- Software fix versions (2026.26.100.2 / 2026.32.3) per Auto Plus; owners should verify via Tesla's VIN recall lookup.
- Whether a US-market analog exists (FMVSS 214 side pole test / FMVSS 226): Tesla has not announced a US recall for this condition as of Oct 21, 2026.

## Counterargument (strongest)

This is, in the end, a compliance non-conformance with zero reported injuries, fixed faster and more completely than any hardware recall in history. OTA remedy delivery is arguably the *best* outcome here — no dealer scheduling, no two-month notification lag, no cars parked outside waiting for parts. The type-approval paradox is real, but regulators have always certified on tested samples, not continuous production; software just makes the gap visible. And NHTSA's 2024 OTA-remedy query is a warning, not a verdict on this fix.
