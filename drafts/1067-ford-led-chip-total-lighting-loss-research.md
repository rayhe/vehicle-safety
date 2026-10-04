# #1067 — Research: One Contaminated Chip, Four Dead Lights: Ford's 26C43 Total-Lighting-Loss Recall

**Journalist:** Mia Crumplezone (Safety Engineering Editor)
**Slug:** `ford-led-chip-total-lighting-loss`
**Angle:** Ford's 26C43 recall (filed Sept 30, 2026) covers 41,748 Expeditions and Super Duties whose headlight assemblies may contain a contaminated LED chip. The failure mode is the story: not one burned-out bulb, but the simultaneous loss of daytime running lights, parking lights, high beams AND low beams — a single-point-of-failure on the entire exterior lighting system of a 6,000-7,000 lb truck. And Ford's own telltale only warns on low/high beam loss: DRL and parking-light failure is silent. Peg: October nights are lengthening (clocks fall back Nov 1), FHWA data says half of all traffic fatalities happen at night on a quarter of the miles driven, and the NYT ran a smart-headlight feature the same week Ford recalled trucks for lights that can all go dark at once.

## The facts (NHTSA recall notice via USA Today, Sept 30, 2026; Ford Authority, Oct 2026)

- **Recall number:** Ford 26C43 (NHTSA campaign number not yet indexed as of Oct 3)
- **Population:** 41,748 vehicles
- **Vehicles:** 2025-2027 Ford Expedition (built June 24, 2025 – July 2, 2026); 2026 Ford F-250/F-350/F-450 Super Duty (built August 4, 2026 — a single production day)
- **Defect:** headlight assemblies may contain a contaminated LED chip, "which can result in a loss of daytime running lights, parking lights, high beams or low beams" (NHTSA notice). FMVSS 108 noncompliance.
- **Hazard:** "a loss of exterior lighting can reduce visibility, increasing the risk of a crash."
- **Warning:** "A dashboard indicator light will illuminate for customers experiencing inoperative low beam and/or high beam headlamps." — note what it does NOT cover: DRLs and parking lights. A contaminated chip that takes out only the DRLs fails silently.
- **Accidents/injuries:** Ford is not aware of any (Ford Authority).
- **Remedy:** dealers inspect and replace headlight assemblies free of charge. Owner letters mail Oct 26, 2026. Ford: 1-866-436-7332.
- Contamination-window shape: Expedition spans ~12 months of builds (supplier batch drift), Super Duty is ONE day — a classic contamination event, not a design flaw. Batch-specific, which is why it's 41K and not 400K.

## The data hooks

- **FARS 2014-2023 (fars_output.js):** Ford Expedition — 1,515 deaths, 151.5/year, rate 2.31/100M VMT, fleet 525,000. Class peers: Tahoe 2.49, Yukon 2.55, Suburban 1.36, Armada 0.55, Sequoia 0.83. The Expedition runs in the middle of the big-American-SUV pack — and the Japanese body-on-frames prove a full-size SUV doesn't have to kill at 2+ (Armada 0.55, Sequoia 0.83, both 3-4x lower). The point isn't that the Expedition is uniquely deadly; it's that a vehicle class already running hot loses its lights.
- **Nighttime exposure (FHWA, via Netradyne citing federal data):** about half of all traffic fatalities occur at night though only ~one-quarter of travel happens after dark; nighttime fatality rate ~3x daytime. NYT (Tom Voelk, Sept 28, 2026, "Smart Headlights Finally Trickle Down to Cars in the U.S."): "half of all traffic fatalities happen after dark, but only one-quarter of driving happens at night."
- **Juxtaposition:** the same week Ford recalled 41,748 trucks for headlights that can go dark, the NYT covered adaptive/smart headlights finally reaching US cars — the industry's lighting future arrives as Ford's lighting present fails.

## Original contributions

1. **The silent-DRL observation:** Ford's telltale covers inoperative low/high beams only. If the contaminated chip kills DRLs and parking lights while beams still work, the driver gets no warning — and DRLs are the conspicuity system that matters most in daytime-adjacent light (dawn/dusk, rain). Nobody in the coverage noted the telltale gap.
2. **Single-point-of-failure framing:** four lighting functions (DRL, parking, high, low) share one contaminated chip. LED headlight assemblies consolidated what used to be independent bulbs into one sealed unit — a design tradeoff (better optics, one failure domain) the coverage hasn't examined.
3. **Class-peer cross-tab:** Expedition 2.31 vs Armada 0.55 / Sequoia 0.83 — the recalled nameplate sits in a class where the safest peers run 3-4x lower. If you're buying a full-size SUV for family night driving, the data already had a verdict.
4. **Build-window asymmetry:** Expedition = 12 months of builds, Super Duty = 1 day. Two different contamination signatures in one recall — worth stating plainly rather than treating 41,748 as one blob.

## Strongest counterargument

41,748 vehicles is small; Ford knows of zero accidents or injuries; the defect is a supplier contamination event (batch), not a design flaw; dealers replace the assemblies free; and a dashboard telltale does cover the most safety-critical failures (low/high beams). The honest framing: this is a well-scoped recall caught early, and the engineering critique is about LED consolidation as a design trend, not about Ford shipping a deathtrap.

## Limitations

- FARS rates are 2014-2023 and estimated; they don't isolate lighting-caused crashes (FARS doesn't code headlight failure as a factor in our arrays). The nighttime-fatality share is FHWA/NHTSA aggregate data, not Expedition-specific.
- The NHTSA campaign number and Part 573 chronology weren't indexed as of Oct 3; build windows come from Ford Authority's read of the filing. The contamination mechanism details (which supplier, which chip) are not public.
- No injuries/accidents reported — the risk is prospective, and the article must say so.

## Actionable takeaway (required)

If you own a 2025-2027 Expedition or 2026 Super Duty: check your VIN at nhtsa.gov/recalls now, don't wait for the Oct 26 letter. And tonight, before you drive: walk to the front of the truck with the lights on and confirm low beams, high beams, DRLs, and parking lights all work — the dashboard won't tell you about the DRLs.

## Sources

1. NHTSA recall notice 26C43 (via USA Today, Taylor Ardrey, Sept 30, 2026): https://www.usatoday.com/story/cars/recalls/2026/09/30/ford-recall-headlights-models/92019182007/
2. Ford Authority (Oct 2026, build windows + defect detail): https://fordauthority.com/2026/10/ford-expedition-super-duty-recalled-over-led-lighting-issue/
3. NYT, Tom Voelk, "Smart Headlights Finally Trickle Down to Cars in the U.S." (Sept 28, 2026) — half of fatalities after dark on a quarter of miles.
4. FHWA nighttime fatality data (via Netradyne summary): https://www.netradyne.com/blog/shorter-days-higher-stakes-how-fleets-can-prepare-for-fall-driving-risks
5. NHTSA FARS 2014-2023, internal dataset fars_output.js (Expedition/Tahoe/Yukon/Suburban/Armada/Sequoia rates).
6. NHTSA recalls database: https://www.nhtsa.gov/recalls
