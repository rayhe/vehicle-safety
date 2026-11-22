# Research: #1569 — A Smudge on the Touchscreen Can Drive Your Navigator's Seat

**Slug:** 1569-lincoln-navigator-ghost-seat-chauffeur-smudge
**Journalist:** Rex Driverton (Senior Crash Correspondent)
**Kicker:** Investigation
**Date:** 2026-11-22

## Story Angle (1-2 sentences)

Ford is recalling 36,994 Lincoln Navigators because a smudge on the rear-seat touchscreen can register as a finger touch and drive the front passenger seat forward, backward, or into a full recline with nobody touching a control. It is the second time in 2026 that Lincoln has recalled the Navigator for a seat that moves itself, and both times the fix is the same: delete the feature.

## Kill test

- **Newsworthy:** YES. NHTSA campaign 26V691, filed October 20, 2026. A six-figure flagship SUV whose front seat can be driven into the second row by a fingerprint smudge on a touchscreen. The trigger is residue, not a broken part.
- **Novel:** YES. Nobody has framed the two Navigator seat recalls as one story. March 2026: the driver's seat slides itself backward while driving (26V120, 1,189 trucks). October 2026: the passenger seat moves itself because the rear touchscreen hallucinates a touch (26V691, 36,994 trucks). Two different modules, two different triggers, one failure mode: the seat has a mind of its own. The original computation is the combined 38,183-vehicle count and the 31x size ratio between the two recalls.
- **Rex-appropriate:** a deadpan paradox investigation. A luxury SUV marketed as a sanctuary on wheels, and the sanctuary keeps rearranging its own furniture. Proceed.

## Primary sources

1. **NHTSA Part 573 Safety Recall Report 26V691** (filed October 20, 2026): Ford Motor Company recalling 36,994 model year 2025-2027 Lincoln Navigator vehicles. The Rear Audio Control Module (RACM) may inadvertently command the chauffeur seat feature, causing the front passenger seat to adjust forward, rearward, or recline unexpectedly without occupant input. Remedy: dealers update the APIM and RACM software to disable chauffeur mode, free of charge. Ford number 26S77. VINs searchable on NHTSA.gov October 26, 2026. Owner letters expected November 2026. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V691-7161.pdf
2. **NHTSA recall acknowledgment letter 26V691** (November 6, 2026): confirms 36,994 units, SEATS:FRONT ASSEMBLY:POWER ADJUST, consequence (seat can contact second-row passengers or force the front passenger into an unsafe seating position), Ford customer service 1-866-436-7332. https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V691-7981.pdf
3. **NHTSA Part 573 Safety Recall Report 26V120** (filed March 3, 2026): Ford recalling 1,189 model year 2026 Lincoln Navigators. The obstacle detection software for the driver seat may malfunction below 5 kph, reversing the seat unexpectedly while driving; if the attempted reversal length exceeds the possible track travel, the seat continuously attempts movement to the full back position. The Driver Seat Module software does not correctly cancel the automatic reversal when the manual adjustment switch is activated or 5 kph is reached. Ford number 26S11. https://oemdtc.com/?pdf_link_url=https%3A%2F%2Fstatic.nhtsa.gov%2Fodi%2Frcl%2F2026%2FRCLRPT-26V120-7637.pdf
4. **AutoGuide, "Lincoln Recalls Nearly 37,000 Lincoln Navigators Over Passenger Seats"** (November 2026): confirms the RACM software error, the free APIM/RACM software update that disables chauffeur mode, VINs searchable October 26, 2026, letters in November 2026. https://www.autoguide.com/auto/car-recalls/ford-recalls-nearly-37-000-lincoln-navigators-over-phantom-passenger-s-44642062
5. **Carscoops, "Your Lincoln Seat May Start Acting Strange While You're Driving"** (March 2026): 1,189 MY26 Navigators built November 26 to December 16, 2025 at the Kentucky plant; Ford's investigation began in January 2026 after "seat bounce-back" reports; fix is a 20-minute software update removing the automatic reversal logic. https://www.carscoops.com/2026/03/lincoln-navigator-seat-recall/

## Key facts

- **Vehicles (26V691):** 36,994 Lincoln Navigator, model years 2025-2027; production November 9, 2023 to August 17, 2026
- **NHTSA campaign:** 26V691000; Ford number 26S77; component: SEATS:FRONT ASSEMBLY:POWER ADJUST
- **Defect:** the chauffeur seat feature, controlled through the second-row digital touchscreen console (RACM), can be commanded inadvertently
- **Trigger 1:** residue left on the RACM screen can be registered as finger touch input, moving the front passenger seat
- **Trigger 2:** pressing the RACM home screen button at the same time as the seat movement button can send the seat to its full travel limit with no further input
- **Consequence:** the moving seat can contact second-row occupants or force the front passenger into an unsafe seating position
- **Warning sign:** erratic button selections and menu changes on the RACM display
- **Supplier:** RACM by Preh GmbH, part RL7T-18E261-BK; APIM is the front multimedia module with Google Automotive Services
- **Remedy:** dealer software update to APIM and RACM disabling chauffeur mode, free of charge; no over-the-air fix mentioned, plan a dealer visit
- **Timeline:** filed October 20, 2026; VINs searchable October 26, 2026; owner letters expected November 2026
- **Prior recall (26V120):** 1,189 MY2026 Navigators, built November 26 to December 16, 2025; driver seat obstacle-detection software loop error; seat reverses to full back position below 3 mph and the Driver Seat Module software fails to cancel the reversal when the manual switch is used or 5 kph is reached; Ford said it was not aware of accidents or injuries; letters mailed March 23, 2026; supplier Gentherm

## Original computations (the novel contribution)

- **38,183 Navigators recalled in 2026 for seats that move themselves:** 36,994 + 1,189. Two campaigns, two modules, one model, one calendar year.
- **The October recall is 31.1x the March recall:** 36,994 / 1,189 = 31.1. The first one was a three-week production window (November 26 to December 16, 2025). The second spans nearly three years of production (November 2023 to August 2026) and three model years.
- **The remedy is subtraction, twice:** the March fix removes the automatic reversal logic from the Driver Seat Module; the October fix disables chauffeur mode entirely. In both cases Ford's answer to a seat that moves on its own is not better software for the feature, it is deleting the feature.
- **The trigger is ordinary use:** a smudge. Not a crash, not a flood, not a failed sensor. Residue on a touchscreen, the kind left by every hand that has ever touched a screen, is enough to move a 100-plus-pound seat assembly into a passenger. The touchscreen is a safety-critical input device and it cannot tell a fingerprint from a finger.

## Limitations

- Neither Part 573 report in the public record states crash or injury counts tied to these defects; Ford said it was not aware of accidents or injuries for 26V120. Do not claim any crashes or injuries for either recall.
- The Part 573 for 26V691 does not state how many warranty claims, field reports, or customer complaints preceded the recall; do not invent a count.
- The 2025 Navigator's exact starting price is not in the recall record; describe it as a six-figure flagship only if the price claim is sourced, otherwise say "Lincoln's flagship full-size SUV."
- Chauffeur mode is a feature for rear passengers to move the front seat for legroom; the record does not say how often owners actually use it, so do not claim the fix removes a feature nobody uses or one everybody uses.

## Strongest counterargument

Nobody has been hurt, as far as the record shows, and the fix is a free software update that deletes a gimmick. A rear passenger moving the front seat for legroom is a chauffeur fantasy most Navigator owners will never use, and a smudge-triggered seat slide is a nuisance, not a Takata inflator. Fair. But the March recall's version of the same failure moved the driver's seat while the truck was moving, which is a loss-of-control defect by any honest name, and the October version can drive a seat into a second-row passenger, including a child in a car seat, with no one touching anything. A vehicle that rearranges its own interior while occupied is a safety defect even when the fix is a download and the body count is zero so far.

## Actionable takeaway

If you own a 2025-2027 Lincoln Navigator: check your VIN at nhtsa.gov/recalls today, the VINs have been searchable since October 26, 2026. Book the free dealer software update, which disables chauffeur mode. Until then, wipe the rear touchscreen clean, and if the RACM display starts making erratic menu selections on its own, treat that as the warning sign it is and get the truck to a dealer. If you own a 2026 Navigator built in late November or early December 2025, check for the March recall (26V120) too, the two recalls overlap on that production window.
