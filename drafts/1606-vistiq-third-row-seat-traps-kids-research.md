# Research: #1606 — Cadillac's Third-Row Seat Can Trap a Child

**Number:** 1606
**Slug:** 1606-vistiq-third-row-seat-traps-kids
**Journalist:** Mia Crumplezone (Safety Engineering Editor — vehicle design analysis; a power-fold mechanism with no working anti-pinch is a design failure, her beat)
**Kicker:** Investigation
**Date:** November 27, 2026
**Target ship_date:** 2028-12-05 (1 day after #1605's 2028-12-04)

## Angle (1-2 sentences)

Cadillac's brand-new three-row electric SUV, the Vistiq, shipped with a third-row seat that folds onto whatever is in the way and does not reverse. GM recalled every Vistiq ever built — all 14,540 — put dealer inventory on stop-delivery, and told dealers to disable the folding feature until parts arrive. Five months later, only about 35% are fixed.

## Kill test

- **Genuinely newsworthy?** Yes. A child-trap hazard on a family hauler, a stop-delivery order on a new nameplate, and a repair rate of ~35% five months after filing. The defect is a missing anti-pinch reversal: the seatback is commanded to fold with one press-and-release and "stops and does not automatically reverse if it encounters an obstruction in the seat." GM's own evaluation put a 33-to-40-pound box on the seat; the seatback folded, stopped, and held the box so it could not be removed without manually reversing the seat.
- **Novel on site?** Yes. No prior draft covers the Vistiq seat recall (26V394). Vistiq appears in the site only as a line inside the GM EV brake-software recall (#1387, 26V717) and a FARS cobalt comparison file. The seat-trap defect, the stop-delivery, the disable-the-feature interim remedy, and the 35% repair rate are all new.
- **Original contribution:** the three-recall tally for a nameplate in its first year (26V394 seat trap, 26V717 brake software, 25V819 FMVSS 225 owner's-manual/child-restraint anchorage); the 33–40 lb box test as the design-failure smoking gun; the 35% repaired figure against the June 18 filing date; the interim remedy (dealers must DISABLE the folding feature on unsold cars) as proof GM could not ship a software fix fast enough.

## Primary sources (3+)

1. **NHTSA campaign 26V394000 / GM N262555780 — GM Safety Recall bulletin RCRIT-26V394-5842:** 2026–2027 Cadillac Vistiq, 14,540 vehicles (13,629 MY2026 + 911 MY2027). "The third-row seatbacks in these vehicles can be commanded to power fold into the stowed position with a single press-and-release of the 'down' control button located in the cargo area or on the pillar adjacent to the seat. The seatback stops and does not automatically reverse if it encounters an obstruction in the seat. Smaller occupants could become trapped under the seatback, increasing the risk of injury." Stop-delivery placed June 18, 2026; "vehicles in inventory at dealerships MUST have the third-row folding feature disabled" until replacement parts are available. GM Safety Field Action Decision Authority approved the recall June 11, 2026. https://static.nhtsa.gov/odi/rcl/2026/RCRIT-26V394-5842.pdf
2. **NHTSA recall notice (via ConsumerSun, checked Nov 27, 2026):** "A person, especially a child, may be trapped by a rear powered seatback, increasing their risk of injury." Remedy: dealers will reprogram the software for the folding seat module, free of charge. Owner notification letters mailed August 6, 2026. Cadillac customer service 1-800-333-4223. VINs searchable on NHTSA.gov since June 18, 2026. https://consumersun.com/recall/nhtsa-26v394000-general-motors-llc-third-row-power-folding
3. **The Weekly Driver analysis of 26V394:** GM's evaluation placed a box weighing 33 to 40 pounds on the seat and ran the fold cycle; "the seatback continued folding, then stopped in a position that trapped the box so it could not be removed without manually reversing the seat." No injuries and no deaths linked to the defect. The Vistiq is a new nameplate with no earlier generation to exclude, so the recall covers the entire production run to date. https://theweeklydriver.com/recalls/2026-2027-cadillac-vistiq-third-row-seat-recall/
4. **Known Car Issues recall tracker (26V394000):** "The manufacturer's latest quarterly report shows 35% of affected vehicles repaired, so many vehicles on the road, including used ones for sale, may still need the fix." https://knowncarissues.com/recalls/26V394000
5. **Vistiq recall history (vinreport.io, NHTSA data checked Nov 23, 2026):** the same nameplate also appears in 26V717 (brake-software recall, 67,380 GM EVs) and 25V819 (radio not set to download the electronic owner's manual during production; FMVSS 225 child-restraint anchorage noncompliance). https://vinreport.io/safety-recalls/2026/cadillac/vistiq
6. **NHTSA recalls database:** https://www.nhtsa.gov/recalls

## The numbers

| Fact | Figure |
|---|---|
| Vehicles recalled (26V394) | 14,540 |
| MY2026 Vistiq | 13,629 |
| MY2027 Vistiq | 911 |
| Share of Vistiq production to date | 100% (entire production run) |
| Test weight GM used | 33–40 lb box |
| Recall approved by GM | June 11, 2026 |
| NHTSA campaign filed / stop-delivery | June 18, 2026 |
| Owner letters mailed | August 6, 2026 |
| Repaired per latest quarterly report | ~35% |
| Injuries / deaths linked | 0 / 0 |
| Other Vistiq recalls in year one | 26V717 (brakes), 25V819 (FMVSS 225) |

## Why the design failed (Mia's read)

A power-folding seatback is a machine that applies force to a space a child can occupy, and the safety case for it is exactly one feature: it must reverse when it meets resistance. The Vistiq's did not. GM's own test proves the failure mode is not exotic — a 33-pound box, roughly the weight of a three-year-old, is enough to get pinned. The single press-and-release control makes it worse: the person folding the seat does not have to hold the button, so there is no human in the loop watching the seat travel. The interim remedy tells the same story from the other side: dealers were ordered to disable the feature entirely, which means GM's own engineers could not trust a software reprogram to arrive before more cars were sold with a working trap.

## Limitations

- The 33–40 lb box test is reported by The Weekly Driver's analysis of GM's evaluation, not quoted from the Part 573 report itself; the underlying NHTSA bulletin confirms the failure mode (seatback "stops and does not automatically reverse") but the box weight comes via that secondary account.
- The ~35% repair figure comes from a recall tracker citing GM's latest quarterly report; it is a snapshot, not a live count, and will move as more cars are serviced.
- No injuries or deaths are linked to the defect. The hazard is a trapped child, not a crash, so FARS data has nothing to say about it; the article's numbers are recall-population numbers, not fatality numbers.
- The 25V819 FMVSS 225 item is a noncompliance about the electronic owner's manual download status during production, listed on the same recall-history page; it is a paperwork-adjacent defect, not a second seat defect, and should not be presented as one.

## Strongest counterargument

The honest reading is that this recall worked the way recalls are supposed to. GM found the defect in its own evaluation, approved the recall in a week, filed it, stopped deliveries the same day, told dealers to disable the feature on unsold cars, and mailed owners within seven weeks. Zero injuries, zero deaths, a free software fix. The 35% repair rate five months in is unremarkable for a recall with no crash attached — owners do not rush in for a seat feature they may never use. And the Vistiq's other two recalls (26V717, 25V819) are a software brake update and a manual-download glitch, not a pattern of the car falling apart. The story is not that Cadillac built a dangerous car; it is that a luxury family SUV shipped without the one safety behavior its folding seat needed, and the fix for the cars already sold is a dealer visit most owners have not made.

## Actionable takeaways

- **If you own a 2026–2027 Cadillac Vistiq:** check your VIN at nhtsa.gov/recalls for 26V394. The fix is a free software reprogram of the folding seat module. Until it is done, do not let a child sit in or climb through the third row while anyone is folding the seats, and do not use the cargo-area or pillar fold button with a child anywhere near the third row.
- **If you are shopping for a used Vistiq:** the recall covers every Vistiq built to date, and roughly two in three have not had the fix. Ask the seller for proof the N262555780 remedy was performed, or run the VIN yourself before signing.
- **If you are shopping any three-row SUV with power-folding seats:** test the anti-pinch yourself. Put a firm object on the seat, press fold, and watch whether the seatback reverses on contact. A seat that stops and holds is a seat that can trap a child.
