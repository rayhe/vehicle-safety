# Research Notes — Article 1322: The Robotaxi Is a Pet Destroyer (Says the Guy Whose Robotaxi Hit a Dog)

**Slug:** `1322-waymo-pet-destroyer-data`
**Journalist:** Rex Driverton (Senior Crash Correspondent — investigations, paradoxes)
**Angle:** Elon Musk called Waymo's robotaxis "pet destroyers" on Oct 10. NHTSA's own Standing General Order crash data says Musk's robotaxis hit a dog too, and Waymo's nine animal strikes have a pattern nobody's written up: nearly all of them happen at night. Rex runs the SGO numbers.

## Kill test
- Genuinely newsworthy? **Yes.** Robotaxi pedestrian/animal strikes are the emerging safety category; a CEO insulting a competitor while hiding his own identical report is classic Rex territory.
- Novel angle? **Yes.** No existing Crash Report story covers robotaxi animal strikes. The nighttime clustering (7 of 9 between 8pm and 3am) is the original finding to lead with. Also novel: cross-reading the SGO data against each company's own mileage claims.

## Facts (all sourced, do not invent more)

1. **Waymo: 9 animal-strike reports** in NHTSA's SGO ADS incident file (submissions June 16, 2025 onward; file current as of Aug 17, 2026).
2. **7 of 9 Waymo strikes happened between 8:00 p.m. and ~3:02 a.m.** Only daytime exception among domestic animals: 1:15 p.m., Los Angeles, May 2026.
3. **6 of 9 involved a dog, cat, or "domestic animal"** (SF, LA, Austin). In 5 of the 6, the narrative says the animal was injured. Other 3: two geese at 63 mph (South SF highway, July 2026), animal at 48 mph (Burlingame, 1:03 a.m.), animal at 49 mph (Del Valle/Austin, 3:02 a.m.).
4. **Recurring narrative pattern:** animal darts from between parked cars / off curb, Waymo brakes and steers, contact follows. June 2026 SF report, 11:18 p.m.: dog crossed from between two parked cars, Waymo slowed from 16 mph and steered left, dog struck right front corner, leash lodged under front right tire.
5. **The cat was KitKat**, gray tabby living at Randa's Market, 16th St, Mission SF. Oct 2025, 11:40 p.m. Waymo car stopped for pickup; cat came off sidewalk, sat under car; coded "moving straight" at 5 mph. KTVU reported Oct 30, 2025; Waymo said cat ran under car as it pulled away, donated to local animal rights org.
6. **Tesla: 1 animal report** in the same file (of 26 Tesla reports). 2026 Model Y, ADS "verified engaged," hit a dog at an Austin intersection at 1:08 p.m., Sept 2025 — ~3 months after Tesla began robotaxi rides in Austin. Safety monitor aboard, no passengers. Tesla originally redacted narrative as CBI; March 2026 update removed redaction. Dog ran from the right at a green light; Tesla slowed, steered left; dog hit bottom of front right bumper, pushed into path of oncoming van. Narrative vs form fields disagree: movement coded "stopped," speed coded 27 mph.
7. **Musk's jab:** Oct 10, 2026 interview streamed by Tesla Owners of Silicon Valley at Giga Texas: "We also want to not run over pets and things. So maybe what a lot of people don't know is that Waymos are like pet destroyers." He allowed "maybe Waymo's made some improvements on that front, but they do run over a lot of pets." On Tesla: "gray kittens on a gray tarmac with tar seams at night in low visibility... So that we actually did solve that, by the way." **Tesla has published no test results, disengagement figures, or software notes showing how.**
8. **Zoox:** 1 dog strike, SF, July 2025, 13 mph; owner initially didn't mention injuries at scene, later emailed alleging abrasions. **Avride:** 1 animal strike, Austin, March 2026.
9. **Waymo mileage:** 271.3 million rider-only miles through June 2026 (Waymo's own Safety Impact data hub). 9 animal strikes among 1,211 Waymo SGO reports in the file. Tesla's 1 among 26.
10. **Defect Petition DP26010** (opened by NHTSA ODI Oct 9, 2026 — the day before Musk's interview): petition received Sept 23 alleges 2026 Tesla Robotaxis (Model Y and Cybercab) "exceed posted speed limits in active school zones" with ADS engaged; estimated population 1,000 vehicles; backed by 3 video links; no crashes/injuries listed. A petition is a request, not an investigation; ODI has 120 days (deadline ~Jan 21, 2027) to grant or deny under 49 U.S.C. 30162.
11. **NHTSA's own caveats on the SGO data (use caution):** not statistically representative; no exposure normalization (fleet size/miles not collected); better-telemetry operators report more; multiple reports per incident possible. Animal strikes are only reportable when they meet the damage/injury thresholds — low-speed love taps that don't damage the car or injure anyone never enter the file. The counts are a floor, not a rate.

## Original contribution (the part nobody ran)
- **Nighttime clustering:** 78% (7 of 9) of Waymo's animal strikes occurred in full dark, 8 p.m.–3 a.m. The geese excepted (highway, daytime). The pattern suggests low-visibility perception gaps — animals moving between parked cars at curb level, where lidar sees a wall and cameras see headlight-lit gaps.
- **The rate sanity check:** 271.3M rider-only miles / 9 strikes = one reported animal strike per ~30 million miles. For context, U.S. drivers kill on the order of a million+ animals daily (FHWA/wildlife estimates — cite as widely-cited estimate, not FARS). Robotaxis are not a pet-destroyer epidemic; they're a rounding error on a species that was already carnage. The Musk claim inverts the real story: the data's most striking fact is how rare the events are, and how visible they are because every one is federally filed.
- **The credibility gap:** Musk claims the night problem is "solved" with zero published evidence. Tesla's one strike is among 26 total reports vs Waymo's 1,211 — the SGO data has almost no Tesla exposure to compare against (NHTSA does not collect miles; Waymo self-publishes). Neither side can compute a rate; both pretend they can.

## Strongest counterargument
This whole story is arguably noise: 9 strikes in a year, zero human injuries, against 271M miles. A human driver hits a deer and it's an insurance claim, not a federal file. The SGO data exists to find defects, and nine low-speed curb incidents are not a defect pattern — they're what driving looks like in cities with dogs. If anything, the data is a compliment to robotaxis: the system found the curb strikes too small for any human driver to bother reporting. Rex must say this at full strength.

## Limitations
- The SGO file is not a census; only threshold-meeting crashes are reported. Low-speed contacts with no injury/damage are invisible.
- No exposure normalization: no fleet-size or mileage data in the file. Waymo's 271.3M is self-reported rider-only miles through June 2026, not the exact denominator for the 9 strikes.
- Dates reported as month/year only; times come from report narratives, which companies write themselves.
- Tesla's CBI redaction history (narrative hidden Sept 2025 → March 2026) shows the file is a negotiated document, not a lab notebook.

## Actionable takeaway
If you walk a dog near robotaxi routes after dark: keep it leashed at curbs and between parked cars — that's where 5 of 6 domestic-animal strikes started. If you're shopping the robotaxi safety narrative: demand mileage-normalized rates, not anecdote counts; a company reporting one strike out of 26 total reports is telling you about its paperwork, not its safety. And check whether a "solved" claim comes with data before you believe it.

## Sources
1. Backfire News, "Musk's 'Pet Destroyer' Jab Skips Tesla's Own Robotaxi Dog Strike" (Oct 16, 2026; updated Oct 20, 2026) — SGO ADS data analysis. https://backfirenews.com/musks-pet-destroyer-jab-skips-teslas-own-robotaxi-dog-strike-in-austin/
2. NHTSA, "Standing General Order on Crash Reporting" — reporting thresholds, SGO caveats, monthly CSV publication. https://www.nhtsa.gov/laws-regulations/standing-general-order-crash-reporting
3. NHTSA ODI Defect Petition DP26010 summary (opened Oct 9, 2026) — Tesla robotaxi school-zone speeding petition. https://static.nhtsa.gov (petition index; summary per Backfire News citation)
4. Waymo Safety Impact data hub — 271.3M rider-only miles through June 2026. https://waymo.com (safety impact hub; figure cited via Backfire News)
5. KTVU, Oct 30, 2025 — KitKat the cat, Mission SF, Waymo pickup strike.
6. 49 U.S.C. 30162 — 120-day defect-petition decision deadline. https://www.law.cornell.edu
7. NHTSA FARS, 2014–2023 — baseline fatal crash data context. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars

## Things NOT to claim
- Do not claim Waymo is "safer" or "more dangerous" than Tesla from 9 vs 1 (no exposure data; NHTSA explicitly warns against company comparisons).
- Do not claim the geese were at night (daytime highway strike).
- Do not claim injuries in all strikes (wildlife strikes report damage, not injury).
- Do not present the 30M-miles-per-strike figure as a rate; call it what it is (a back-of-envelope, misaligned denominators).
