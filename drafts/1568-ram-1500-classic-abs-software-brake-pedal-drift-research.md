# Research: #1568 — Your Ram's Brake Pedal Moves. Its Software Didn't Get the Memo.

**Slug:** 1568-ram-1500-classic-abs-software-brake-pedal-drift
**Journalist:** Mia Crumplezone (Safety Engineering Editor)
**Kicker:** Investigation
**Date:** 2026-11-22

## Story Angle (1-2 sentences)

Chrysler is recalling 82,843 Ram 1500 Classic pickups because the ABS module software cannot adapt to the brake pedal drifting from its original position as the truck ages. One bad adaptation algorithm produces three failures at once: brake lights that lie, a truck that can shift out of Park with nobody touching the pedal, and the eventual loss of stability control, AutoPark, and forward collision warning.

## Kill test

- **Newsworthy:** YES. NHTSA campaign 26V756, filed November 19, 2026, reported by Reuters November 20. A brake-system defect with a rollaway mode and an ESC-kill mode in America's best-selling truck family, two days old.
- **Novel:** YES. Nobody has framed it as a drift story. The defect is not a broken part. It is software written for a pedal that never changes, installed in a truck whose pedal changes every day it is driven. The 11,371-record evidence trail (6,001 warranty claims alone) is an original computation from the Part 573 chronology, and the 669 Mopar replacement ABS modules (campaign 26E084) mean the bug was also sold over the counter as a spare part.
- **Mia-appropriate:** a safety-systems engineering story about an adaptation algorithm, a pedal position sensor, and three cascading failures. Proceed.

## Primary sources

1. **NHTSA recall record 26V756000** (filed November 19, 2026): Chrysler (FCA US, LLC) recalling certain 2022-2024 Ram 1500 Classic pickup trucks. The ABS module software may misread inputs from the brake pedal and pedal sensor, which can result in improper brake light illumination, unintentional vehicle movement, or a loss of driver assist features such as electronic stability control, AutoPark, and forward collision warning. Remedy: dealers update ABS module software free of charge. Owner letters expected January 14, 2027. Chrysler recall number A9D. VINs searchable on NHTSA.gov beginning November 26, 2026. https://www.nhtsa.gov/recalls
2. **Reuters via LA Post, "Stellantis recalls over 82,000 Ram trucks over ABS software risk"** (November 20, 2026): 82,843 Ram 1500 Classic trucks plus 669 Mopar ABS control modules; ABS module software could misread inputs from the brake pedal and pedal sensor. https://www.lapost.com/content/stellantis-recalls-over-82-000-ram-trucks-over-abs-software-risk
3. **MotorBiscuit, "A Brake Software Glitch Has Chrysler Recalling 82,843 Ram 1500 Trucks"** (November 21, 2026): quotes the Part 573 defect description verbatim; by October 21, 2026 FCA US had received 12 customer assistance reports, 6,001 warranty claims, 48 field reports, and 5,310 other service records potentially linked to the issue; remedy is a software flash correcting the brake pedal adaptation algorithm; dealer notification around November 26, 2026; owner notification January 14, 2027. https://www.motorbiscuit.com/a-brake-software-glitch-has-chrysler-recalling-82843-ram-1500-trucks/
4. **NHTSA campaign 26E084000** (equipment recall, filed November 19, 2026): 669 Mopar ABS control modules with the same software defect, sold as replacement parts. https://www.nhtsa.gov/recalls
5. **NHTSA FARS / IIHS background**: ESC is federally mandated since model year 2012 (FMVSS 126); IIHS estimates ESC cuts fatal single-vehicle crash risk by about half. https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue

## Key facts

- **Vehicles:** 82,843 Ram 1500 Classic pickups, model years 2022-2024
- **Plus:** 669 Mopar ABS control modules (equipment recall 26E084)
- **NHTSA campaign:** 26V756000; Chrysler number A9D; customer service 800-853-1403
- **Defect:** ABS module software does not correctly adapt the brake pedal position sensor (BPPS) and brake pedal to normal changes in pedal position over time
- **Consequence 1:** brake lights illuminate without the brake pedal applied
- **Consequence 2:** truck can be shifted from PARK without the brake pedal applied
- **Consequence 3:** eventual loss of ESC, AutoPark, and Forward Collision Warning
- **Evidence trail by October 21, 2026:** 12 customer assistance reports, 6,001 warranty claims, 48 field reports, 5,310 other service records
- **Timeline:** VINs searchable November 26, 2026; dealer notification around November 26, 2026; owner letters January 14, 2027
- **Remedy:** software update, free of charge

## Original computations (the novel contribution)

- **11,371 total records** in FCA's own file before the recall decision: 12 + 6,001 + 48 + 5,310. Warranty claims alone (6,001) outnumber the other three categories combined (5,370) by 631. The signal was sitting in the warranty database.
- **One bug, three safety systems:** the same adaptation failure produces a lying brake light (rear-end risk for the driver behind you), a Park-interlock defeat (rollaway risk), and an ESC/FCW shutdown (the two systems that keep a truck out of a crash in the first place). A single software routine is load-bearing for three unrelated protections.
- **The part was also sold over the counter:** 669 Mopar ABS modules carry the same software, so a Ram owner who already paid to replace a failed ABS module may have bought the bug a second time. The equipment recall (26E084) is 0.8% of the vehicle count but it is the only part of this recall where the customer already paid.
- **Drift is the defect:** brake pedals move. Bushings wear, linkages settle, return springs weaken. Every mechanical pedal drifts from its factory position over years of use. The software was supposed to track that drift and did not. This is a failure to model aging, not a failure to model braking.

## Limitations

- FCA's Part 573 chronology gives record counts but not crash or injury counts tied to this defect; no crashes or injuries are attributed in the reporting so far. Do not claim any.
- The exact model-year split within the 82,843 is not in the public summary; do not invent one.
- "Ram 1500 Classic" is the previous-generation truck sold alongside the new Ram 1500; do not confuse the two populations.
- ESC effectiveness figures are IIHS estimates across the fleet, not measurements on this truck.

## Strongest counterargument

Software recalls are the cheap kind. A flash update, no parts, no tow, no fire risk, no do-not-drive order. Compared with the Takata inflators and the BMW water pumps recalled the same month, an ABS adaptation bug that mostly shows up as a confused brake light is a nuisance, and FCA caught it through its own warranty data before NHTSA forced the issue. Fair. But the Park-interlock defeat is not a nuisance: a truck that can leave Park without a foot on the brake is a rollaway waiting for a driveway slope, and the ESC shutdown removes the system that IIHS credits with cutting fatal single-vehicle crashes roughly in half. A software bug that quietly deletes two safety nets is still a safety bug, even if the fix is a download.

## Actionable takeaway

If you own a 2022-2024 Ram 1500 Classic: check your VIN at nhtsa.gov/recalls starting November 26, 2026. The fix is a free software flash at a Chrysler dealer. Until then, set the parking brake every single time you park, on flat ground included, because the Park interlock is the part of this truck you can no longer trust. If you bought a Mopar ABS module as a replacement part, ask the dealer whether it is one of the 669.
