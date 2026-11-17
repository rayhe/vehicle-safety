# Research — Honda's Steering Divides by Zero (26V721)

## Angle
Honda recalled 635,808 Pilot/MDX/TLX vehicles because the electric power steering software can divide by zero and shut off steering assist while the car is driving straight. The defect was first reported in November 2021. Honda did not call it a safety defect until October 2026 — nearly five years later — in part because dealers and the supplier kept deleting the error codes that would have proved it. And this is Honda's second massive steering recall in 25 months: 24V744 (1,693,199 vehicles, sticky steering gearbox) in October 2024. Combined: ~2.33 million Hondas and Acuras recalled for steering in two years, two completely different failure modes.

## Kill test
- **Newsworthy?** Yes. Filed Oct 29, 2026; NHTSA acknowledgment Nov 9; press Nov 11-12, 2026. Fresh.
- **Novel angle?** Yes. Not "another recall" — a divide-by-zero bug, a five-year detection gap caused by deleted diagnostic codes, and the second steering recall in two years. No prior Crash Report article covers 26V721 (checked: no 26V721 matches in drafts/stories; 24V744 sticky-steering covered only as background in other pieces).
- **Original contribution:** Combined steering-recall census (24V744 + 26V721 = 2,329,007 vehicles), the timeline arithmetic (1,789 days from first report to defect determination), and the deleted-error-code evidence-destruction detail from the Part 573 filing.

## Primary sources
1. **NHTSA Part 573 Safety Recall Report / acknowledgment letter, 26V721** — static.nhtsa.gov/odi/rcl/2026/RCAK-26V721-6050.pdf — 635,808 units; Pilot 383,110 / MDX 177,100 / TLX 75,598; 100% defect estimate; remedy = EPS reprogram; owner letters Dec 14, 2026; VINs searchable Nov 11, 2026.
2. **Torque News, Nov 2026** — torquenews.com/17998/honda-recalls-635808-pilot-acura-mdx-tlx-software-can-shut-off-power-steering-assist — per-model build dates, Bosch supplier, Driver Attention Monitor road-condition compensation calculation, divide-by-zero detail, "only occurs when driving straight" (confirmed Feb 2026), deleted error codes, filing says affected models "no longer in production" despite 2026 Pilot on sale.
3. **ConsumerAffairs, Nov 12, 2026** — consumeraffairs.com/news/honda-recalls-more-than-635000-vehicles-over-steering-defect-111226.html — 146 warranty claims, one injury report as of Oct 22, 2026; defect determination Oct 22, 2026.
4. **Backfire News, Nov 12, 2026** — backfirenews.com/honda-pilot-power-steering-recall-635808 — first report Nov 29, 2021; May 22, 2022–Oct 22, 2026 claim window; Part 573 filed Oct 29, exactly five working days after determination (last day allowed); no park-outside / do-not-drive advisory.
5. **NHTSA Part 573, 24V744** — static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V744-4093.PDF — 1,693,199 vehicles, sticky steering gearbox (worm wheel/worm gear friction), 10,328 warranty claims Sep 2021–Sep 2024, EA23003 engineering analysis closed Jan 28, 2025.

## Key facts (verified)
- **26V721 population:** 2023-2025 Honda Pilot 383,110 (built Sep 13, 2022–Dec 23, 2025); 2022-2024 Acura MDX 177,100 (built Dec 10, 2020–Jul 10, 2024); 2021-2025 Acura TLX 75,598 (built Aug 11, 2020–Aug 18, 2025). Total 635,808. Pilot = ~60%.
- **Defect:** Bosch EPS software error in Driver Attention Monitor road-condition compensation calculation; floating-point division with a zero denominator triggers an internal error; software was incorrectly configured to respond by disabling power steering assist (failsafe mode). EPS warning lights illuminate; steering effort increases.
- **Trigger condition:** only when driving straight. No speed range given in filing; unclear whether assist returns after fault.
- **Timeline:** first field report Nov 29, 2021 → Honda confirms straight-line-only condition Feb 2026 → defect determination Oct 22, 2026 → Part 573 filed Oct 29, 2026 → NHTSA acknowledgment Nov 9, 2026 → VINs searchable Nov 11, 2026 → owner letters ~Dec 14, 2026. Gap first report to determination: ~1,789 days (4 years, 10+ months).
- **Claims:** 146 warranty claims, 1 injury, 0 deaths (May 22, 2022–Oct 22, 2026 window per filing).
- **Evidence problem:** when parts came back from the field they looked fine because error codes had been deleted by the dealer or supplier. The filing reports deleted error codes without saying how many or why.
- **Supplier:** Robert Bosch Automotive Steering LLC, Florence, Kentucky; 42 power steering rack part numbers listed.
- **Honda recall numbers:** KQB and TQA. Remedy: dealer reprogram of EPS control unit, free. NOT over-the-air (OTA flag false). No do-not-drive advisory.
- **2024 precedent:** 24V744, Oct 3, 2024 — 1,693,199 vehicles (2022-2025 Civic, CR-V, HR-V, Acura Integra etc.) for steering gearbox worm-wheel friction ("sticky steering"); 10,328 warranty claims; EA23003 investigation opened Nov 29, 2023, closed Jan 28, 2025. Revised gearboxes in production from Aug 30, 2024.
- **Combined steering census:** 1,693,199 + 635,808 = 2,329,007 vehicles across the two recalls. Different models, different failure modes (mechanical friction vs. software divide-by-zero), same system, same supplier family, 25 months apart.
- **Context:** Autoblog notes this is Honda's 15th safety recall of 2026.

## What this does NOT prove (limitations)
- No deaths reported; one injury of unknown severity. Cannot claim the defect has killed anyone.
- FARS cannot attribute fatal crashes to this defect — no crash causation data links Pilot/MDX/TLX fatalities to EPS failsafe events.
- The 100% defect estimate means every recalled vehicle carries the faulty software, not that every vehicle will experience the failure — it requires specific straight-line operating conditions.
- Whether assist returns after the fault (self-clearing on restart vs. latched until reprogram) is not stated in the filing.
- The deleted error codes: the filing does not say who deleted them, how many, or whether deletion was routine service practice or concealment. Do not allege intent.

## Strongest counterargument
Honda found this through its own warranty monitoring, determined the defect, and filed within the legal five-working-day window. The remedy is a free software reflash, not a hardware replacement. One injury in ~1,790 days across 635,808 vehicles is a low observed harm rate, and the failure only occurs while driving straight, the lowest-demand steering condition, with warning lights alerting the driver. A reasonable reader could conclude the system worked: detection, determination, recall. The counter to the counter: a five-year gap in which the diagnostic evidence was being erased at the dealer level is not a system working — it is a system that got lucky the failure mode is benign-ish.

## Actionable takeaways
- Own a 2023-2025 Pilot, 2022-2024 MDX, or 2021-2025 TLX? Check your VIN at nhtsa.gov/recalls now — VINs searchable since Nov 11, 2026. Do not wait for the December 14 letter.
- The fix is a dealer visit (no OTA update). Book it; the reflash is free.
- If your steering ever goes suddenly heavy on a straight road with EPS warning lights, that is this defect: pull over safely, restart, and get the car to a dealer. Report it to NHTSA — complaints are what finally built the case.
- Buying used: a 2022-2025 Civic/CR-V/HR-V/Integra may also carry the 24V744 sticky-steering recall. Check both campaigns before signing.

## Journalist
Mia Crumplezone (Safety Engineering Editor — EPS software, technical beat; last journalist was Axle McScatter #1531).

## Slug
honda-divide-by-zero-steering-recall

## Headline options
- "Honda's Steering Divides by Zero. 635,808 Cars Lose Power Assist."
- "Divide by Zero: Honda Recalls 635,808 Cars Whose Steering Quits on a Straight Road"
- "Honda Knew in 2021. The Steering Recall Came in 2026."

## Kicker
Investigation
