# #933 Research: The Seat That Doesn't Know You're There

**Slug:** 933-ioniq9-three-nameplate-seat-recall
**Journalist:** Mia Crumplezone
**Kicker:** Investigation
**Date:** 2026-09-18

## Angle (kill test)
A two-year-old died under a power-folding Palisade seat in March. Six months later, Hyundai has recalled THREE three-row SUVs for the same failure mode: seats whose control logic cannot reliably tell a child from an empty seat. The defect is not a part. It is a design assumption. And federal anti-pinch law covers your power windows but not the seat folding next to your kid.

**Verdict: PROCEED.** Novel: (1) cross-nameplate pattern Palisade -> Telluride Hybrid -> Ioniq 9 never connected in coverage; (2) FMVSS 118 regulatory gap (windows must reverse at 100N; power seats have no equivalent); (3) the permanent Palisade fix was still "under development" at filing, six months after a death.

## Timeline (primary sources)
- **Nov 2025:** Hyundai opens investigation into 2026 Palisade power-seat contact detection (per 26V160 Part 573 chronology, via AutoBlog/Carscoops).
- **2026-03-07:** Two-year-old girl dies in Ohio, crushed by second-row power-folding seat in a 2026 Palisade. (Carscoops, The Drive)
- **2026-03-13:** Hyundai issues dealer stop-sale, 2026 Palisade Limited/Calligraphy (texts, emails, in-vehicle notifications, rental vehicles offered).
- **2026-03-17:** NHTSA campaign **26V160000** filed. **61,093** 2026 Palisade/Palisade Hybrid (Limited, Calligraphy). Failure: second/third-row power seats "may fail to detect a person... continue to move after contacting a person during powered seat functions" (one-touch tilt-and-slide, auto fold-and-stow). 7 third-row malfunction incidents, 4 minor-injury reports from second row, 17 unique vehicles. Interim OTA software fix; permanent remedy "under development" at filing. Report: RCAK-26V160-3716.pdf.
- **2026 (~April):** NHTSA campaign **26V173** filed: **568** 2027 Kia Telluride Hybrid (built 2026-02-02 to 2026-03-13). Same failure wording: "In certain situations, the current power seat logic may not detect obstructions as intended." Cause: under review. Remedy: TBD. Supplier named: Nidec Mobility Korea Corporation, power rear seat control units 891P8-P8000 / 892P8-P8000. Report: RCLRPT-26V173-8909.pdf.
- **2026-09-11:** NHTSA campaign **26V588000** filed (VINs searchable 9/12). **~5,000** 2026 Hyundai Ioniq 9 (Limited, Calligraphy, Calligraphy Design trims). "Second-row power seats... may not respond to contact" during auto fold-and-stow. 2 alleged minor injuries, 5 complaints as of Sept 2. Production changed earlier this month. OTA fix via Bluelink or dealer software update. Owner letters mailed Nov 9. (USA Today 9/18/2026; NHTSA recalls API.)

## Fleet math (original calculation)
61,093 (Palisade) + 568 (Telluride Hybrid) + ~5,000 (Ioniq 9) = **~66,661 vehicles across three nameplates, two brands, six months.** All share the failure mode: power-seat logic that treats a child as an empty seat.

## Regulatory gap (verified)
FMVSS 118 (49 CFR 571.118), Power-operated window, partition, and roof panel systems: for unsupervised closings (S5), the system must reverse direction upon meeting an obstruction before exceeding **100 Newtons** (about 22 lb of force), with obstructions 4-200 mm from the mating structure. Source: NHTSA interpretation letter aiam5546 / TP-118-06. This covers windows, sunroofs, partitions. **Power-operated seats are not covered by FMVSS 118.** There is no federal anti-pinch requirement for folding seats. Contact detection on the Palisade/Ioniq 9/Telluride seats is voluntary engineering, not a standard.

## Counterargument (strongest)
1. Hyundai's OTA remedy closes the loop fast: the Ioniq 9 production fix landed before most owners even knew, and Bluelink OTA updates reach cars without a dealer visit. The defect was caught by Hyundai's own in-house testing, not by regulators or lawsuits.
2. Contact-detection logic is genuinely hard: differentiating a squirming 2-year-old from a duffel bag in a moving vehicle is an edge-case sensing problem, and FMVSS 118's 100N rule exists precisely because windows have simple, rigid tracks. Seats don't.
3. The Palisade incident count (17 vehicles of 61,093, 1 fatality) is small; the Telluride count is 568 vehicles. The risk per vehicle is low.

## Limitations (honest)
- The Ioniq 9 Part 573 PDF suffix was not retrievable; population "~5,000" and injury/complaint counts come from USA Today citing NHTSA notice. Campaign number 26V588000 and report date 2026-09-11 confirmed via NHTSA recalls API.
- Supplier identity for the Ioniq 9 seat units is not yet public; only the Telluride filing names Nidec Mobility Korea. Do not assert a shared supplier across all three. Assert the shared *failure mode wording*, which is verbatim in the filings.
- Seat fold-motor force/stall torque is not published; the article must not claim a specific crush force number.

## Actionable takeaways
1. If you own a 2026 Palisade (Limited/Calligraphy), 2027 Telluride Hybrid, or 2026 Ioniq 9 (Limited/Calligraphy/Calligraphy Design): keep kids and bodies out of the fold zone during power-seat operation. Accept the OTA update immediately.
2. Check VIN at nhtsa.gov/recalls (Ioniq 9 VINs searchable from Sept 12, 2026).
3. Shopping three-row SUVs: ask whether the power seats have contact detection that is independently validated, because no federal standard requires it.

## Sources
1. USA Today, "Hyundai issues recall over seat defect that can trap children," 2026-09-18. https://www.usatoday.com/story/cars/recalls/2026/09/18/hyundai-recall-seat-trap-children/91831180007/
2. NHTSA recalls API: 26V588000 (SEATS:MID/REAR ASSEMBLY:POWER ADJUST), report received 2026-09-11.
3. NHTSA RCAK-26V160-3716.pdf: 26V160, Palisade, 61,093 units, filed 2026-03-17. https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V160-3716.pdf
4. NHTSA RCLRPT-26V173-8909.pdf: 26V173, Telluride Hybrid, 568 units. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V173-8909.pdf
5. Carscoops, "Child Death Leads To 2026 Hyundai Palisade Recall," 2026-03 (Ohio fatality March 7, stop-sale timeline). https://www.carscoops.com/2026/03/hyundai-palisade-seat-safety-recall/
6. The Drive, "Hyundai Stops Sales and Recalls Over 69,000 2026 Palisades," 2026-03 (interim OTA, permanent fix under development). https://www.thedrive.com/news/hyundai-stops-sales-and-recalls-68500-2026-palisade-models-because-the-power-seats-can-crush-you
7. NHTSA interpretation aiam5546 / TP-118-06: FMVSS 118 S5 automatic reversal at 100N. https://www.nhtsa.gov/es/node/107706 / https://www.nhtsa.gov/sites/nhtsa.gov/files/tp-118-06.pdf
8. NHTSA FARS: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
