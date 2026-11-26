# Research: Honda Divide-by-Zero Steering Recall (26V721) — #1593

**Slug:** 1593-honda-divide-by-zero-steering-26v721
**Journalist:** Rex Driverton (investigation)
**Date researched:** November 26, 2026

## The story in one line

Honda recalled 635,808 Pilots, MDXs, and TLXs because a divide-by-zero error in a drowsiness-monitor side calculation can switch off all power steering assist — and it took Honda nearly five years from the first report to admit it was a safety defect.

## Primary sources

1. **NHTSA Part 573 Safety Recall Report 26V721 / acknowledgement letter RCAK-26V721-6050 (Nov 9, 2026)** — population 635,808; defect description; remedy; dates. https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V721-6050.pdf
2. **NHTSA recalls database** — campaign 26V721, VINs searchable from Nov 11, 2026. https://www.nhtsa.gov/recalls
3. **The Auto Wire, Nov 11, 2026** — Part 573 deep read: Bosch supplier, divide-by-zero mechanism, timeline (first report Nov 29, 2021; Bosch found failure Aug 22, 2025; recreated via dashcam Dec 2025; defect decision Oct 22, 2026), 146 warranty claims, 1 injury. https://theautowire.com/2026/11/11/divide-by-zero-bug-can-kill-steering-assist-in-635808-pilots-mdxs-and-tlxs/
4. **Torque News, Nov 2026** — model-year/build-date breakdowns; 100% of population carries the software; related 2025 Acura RDX recall 25V582 (17,334 vehicles, 0.3% defect estimate, same failsafe outcome, different calibration error); 2025 MDX excluded without explanation. https://WWW.TORQUENEWS.COM/17998/honda-recalls-635808-pilot-acura-mdx-tlx-software-can-shut-off-power-steering-assist
5. **USA Today, Nov 10, 2026** — injury count confirmation: one injury, no deaths, May 2022–Oct 22, 2026. https://www.usatoday.com/story/cars/recalls/2026/11/10/honda-recalls-vehicles-acura-tlx-mdx-pilot-models/92703780007/
6. **Autoblog, Nov 11, 2026** — Honda's 15th recall of 2026; per-model volumes. https://www.autoblog.com/news/recall-honda-acura-over-635000-tlx-mdx-pilot-suvs-defective-steering-caused-injury
7. **KBB, Nov 17, 2026** — remedy (free dealer reflash), owner letters Dec 14. https://www.kbb.com/car-news/honda-recalls-635000-vehicles-for-loss-of-power-steering-risk/

## Verified facts

- **Population:** 635,808 total. 2023–2025 Honda Pilot: 383,110 (built Sept 13, 2022–Dec 23, 2025). 2022–2024 Acura MDX: 177,100 (built Dec 10, 2020–July 10, 2024). 2021–2025 Acura TLX: 75,598 (built Aug 11, 2020–Aug 18, 2025).
- **Defect rate:** Honda estimates 100% of the recalled population carries the defective software configuration.
- **Mechanism:** The Driver Attention Monitor's road-condition compensation calculation performs a floating-point division with a zero denominator under certain conditions. That triggers an internal error. The EPS software was incorrectly configured to respond to that error by disabling power steering assist entirely and lighting the EPS warnings.
- **Supplier:** Robert Bosch Automotive Steering LLC, Florence, Kentucky. 42 power steering rack part numbers, all rewritable (software reflash, no hardware).
- **Trigger condition:** Only while driving straight. Steering effort increases suddenly once assist is disabled; NHTSA filing: "may reduce vehicle controllability."
- **Harm so far:** 146 warranty claims and 1 injury report between May 2022 and Oct 22, 2026. No deaths.
- **Timeline:** First report Nov 29, 2021. More complaints Aug 2023–Aug 2025, but returned parts tested clean because dealers or the supplier had already deleted the stored error codes. Bosch found the failure through analysis of returned parts Aug 22, 2025. Honda recreated it using dashcam footage Dec 2025. Confirmed Feb 2026 that it only occurs driving straight. Defect decision Oct 22, 2026. Manufacturer report Oct 29, 2026. NHTSA acknowledgement Nov 9, 2026.
- **Remedy:** Dealers reprogram the EPS control unit, free. Owner letters mailed Dec 14, 2026. Honda recall numbers KQB and TQA. Customer service 1-866-784-1870.
- **Context:** Honda's 15th safety recall of 2026 (Autoblog). Related but distinct: 2025 Acura RDX recall 25V582 (17,334 vehicles) estimated only 0.3% with defect, same failsafe outcome from a different calibration error.
- **Open question:** The 2025 MDX is not in the recall population even though the 2025 Pilot and TLX are. The filing does not say why.

## Novel contribution (original analysis)

1. **The failsafe is the second defect.** The divide-by-zero is a math slip in a side calculation for a drowsiness monitor. The real design failure is the error handler: a non-safety-critical driver-alertness routine was allowed to kill the car's primary steering assist. Honda's own filing names both errors. The recall fixes the response, not just the arithmetic.
2. **The five-year blind spot was self-inflicted.** Returned parts kept testing clean because someone in the chain deleted the stored error codes before Bosch saw them. The defect hid for years behind a diagnostic hygiene failure, not a hard engineering problem. Once Bosch got an intact part, the failure surfaced in weeks.
3. **100% vs 0.3%.** The sibling 2025 RDX steering recall (25V582) estimated 0.3% of its population defective. This one is 100%. Same supplier family, same failsafe philosophy, wildly different exposure. The difference between a calibration error and a configuration error is the difference between a few dozen cars and 635,808.
4. **The 2025 MDX hole.** The filing never explains why the 2025 MDX escapes while the 2025 Pilot and TLX do not. Owners of 2025 MDXs should check their VINs anyway.

## Kill test

- **Newsworthy?** Yes. 635,808 vehicles, loss of steering, one injury, a five-year detection lag, and a root cause a first-year CS student would recognize. Fresh: NHTSA letter Nov 9, press Nov 10–17.
- **Covered before?** No. Filename/content search of stories/ and drafts/ found no Honda EPS / 26V721 / power-steering coverage. Waymo RQ26006 was killed (covered #1445, #1461, #1523). BMW 26V733 fire, Takata 26V765, Ioniq 9, RAV4 PHEV stall were considered and set aside as weaker.
- **Novel angle?** Yes: the failsafe-as-defect framing and the deleted-error-code blind spot are not the press-release angle.

## Limitations

- NHTSA complaint counts are unverified owner accounts; the 146 warranty claims and 1 injury come from Honda's own filing, which is the best available source but self-reported.
- The exact operating conditions that produce the zero denominator are not public beyond "driving straight" and the Driver Attention Monitor context. We do not know speed, temperature, or road-surface triggers.
- No crash count is attributed to this defect in the filing; the injury report's circumstances are not described.
- Whether the 2025 MDX uses different EPS software or was simply excluded for another reason is unanswered in the filing.

## Counterargument (strongest case against the thesis)

Honda's position, fairly stated: the failure requires a narrow set of conditions, only manifests while driving straight, leaves the car steerable (heavier, not locked), produced one injury in roughly four years across 635,808 vehicles, and the fix is a free software reflash. On those numbers this is a low-severity defect with a clean remedy, and the five-year timeline reflects a genuinely hard-to-reproduce intermittent fault, not foot-dragging. That case has real weight. The rebuttal is not the injury count but the design principle: a drowsiness-monitor subroutine should never have had a kill switch on steering assist, and the error codes that would have caught it years earlier were being wiped before they reached the supplier. The severity is low; the architecture lesson is not.

## Actionable takeaways

- Own a 2021–2025 TLX, 2022–2024 MDX, or 2023–2025 Pilot? Check your VIN at nhtsa.gov/recalls now; VINs have been searchable since Nov 11. Do not wait for the Dec 14 letter.
- If your steering suddenly goes heavy on a straight road with EPS warning lights, that is this defect. Keep both hands on the wheel, slow down gradually, do not yank the wheel, and get to a dealer. The car is still steerable, just heavy.
- The fix is a free dealer reflash of the EPS control unit. No parts, no cost, no reason to delay.
- 2025 MDX owners: your model year is not in the recall, but the filing never explains why. Check your VIN anyway and watch for an expansion.
