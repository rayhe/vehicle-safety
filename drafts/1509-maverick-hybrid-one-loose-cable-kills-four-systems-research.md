# Research: #1509 — One Loose Cable Can Shut Down a Maverick Hybrid's Steering, Brakes, Lights, and Drive Power

**Number:** 1509
**Slug:** 1509-maverick-hybrid-one-loose-cable-kills-four-systems
**Journalist:** Rex Driverton (Senior Crash Correspondent; fatality-rate investigations, vehicle-specific deep dives — the angle is a single-point failure in one named part, a detective story with a part number)
**Kicker:** Investigation
**Date:** November 14, 2026

## Angle (1-2 sentences)

Ford recalled 8,650 2022 Maverick Hybrids because one small terminal eyelet (C1617E) where the positive 12-volt cable meets the Battery Junction Box can loosen or detach, and when it does the truck can lose power steering assist, power brake assist, exterior lighting, and drive power all at once. The cause is almost poetic: hydroxy acetic acid from the dip-solder process corroded the ultrasonic weld holding the terminal to its own cable, so the manufacturing step that built the joint is what ate it.

## Kill test

- **Genuinely newsworthy?** Yes. Filed November 2, 2026 (NHTSA campaign 26V724, Ford 26S81), twelve days old, owner letters go out November 23, VINs searchable since November 9. A single-point failure that kills four safety systems at once is the kind of defect the site exists to explain.
- **Novel on site?** Yes. Full-filename coverage grep, November 14, 2026: "26v724", "loose battery cable", and "battery cable terminal" return zero story files. The only mentions are #1468's overlap-check line (which explicitly records "26V724 returns zero hits") and #1483's passing reference to four BMW M4/430i cars with loose battery cables, a different campaign on a different brand. #1468 covers the Maverick Hybrid 12-volt *drain* saga (dead batteries, six replacements, SSMs, CSPs) — a different defect on the same truck, and this article treats it as backstory, not the subject.
- **Killed angles this run (duplicate screen):** Hyundai ACU data corruption 26V728 — covered four times already (#1400, #1429, #1435, #1444). Nissan Kicks beats RAV4 in IIHS rear-seat test — covered three times (#1244, #1408, #1484). Honda/Acura steering loss 26V721 — covered in full as #1457 (and inside the #1502 Acura census). GM Savana/Express steering nut 26V718 — covered as "gm-express-thirty-years-cant-tighten-a-nut". Explorer Police Interceptor map lights 26V726 — covered as #1466. Brand recall censuses — exhausted (257 census drafts; every major brand done through #1508). FARS toxicology extremes (Park Avenue, Corvette, Ascent) — covered (#868, #1007, #1065, #1241). FARS model-year spikes (Camry 2007, Elantra 2013) — rejected: deaths scale with sales volume and the file has no per-year fleet normalization, so a spike is not a safety finding.

## Primary sources (3+)

1. **NHTSA Part 573 Safety Recall Report, 26V724** (filed November 2, 2026), read in full November 14, 2026: https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V724-4684.pdf — 8,650 vehicles; 1% defect estimate; 2022 Ford Maverick Hybrid, built February 3, 2021–May 12, 2022; 2.5L HEV; suspect eyelet unit; not previously repaired under Customer Satisfaction Program 22B39; vehicles not produced in VIN order. Defect: the positive 12V battery cable terminal (eyelet C1617E) at the high-current Battery Junction Box (BJB) may become loose or detach from the cable, interrupting the 12V supply to the BJB. Safety risk: loss of motive power while driving, or a no-crank/no-start condition. Cause: hydroxy acetic acid, associated with a dip solder application on the terminal eyelet joint, may corrode the ultrasonic weld attaching the terminal to its cable. Supplier: Yazaki Inc. Component part number NZ6T-14300-CA (wire assembly cable within High Voltage Harness). Chronology: July 17, 2026, Ford's Critical Concern Review Group opened an investigation into NHTSA Vehicle Owner Questionnaires (VOQs) alleging loss of motive power; 11 VOQs, all alleging loss of motive power while driving; 427 potentially responsive warranty claims, 11 of which report a loss of motive power while driving; October 27, 2026, Ford's Field Review Committee approved a field action. As of October 13, 2026, Ford is not aware of any accidents or injuries related to this condition. Remedy: dealers replace the 12V battery cable, free of charge. No Do Not Drive / Park Outside advisory.
2. **NHTSA acknowledgement letter, 26V724** (November 10, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V724-4285.pdf — confirms the four-system consequence in NHTSA's own words: "The 12V positive battery cable terminal may become loose or detach, which can cause a loss of electrical systems (including power steering assist, power brake assist, and exterior lighting) or a loss of drive power." Owner notification letters expected to be mailed November 23, 2026; VINs searchable on NHTSA.gov since November 9, 2026; Ford's number 26S81.
3. **Motoring Chronicle, "Ford Recalls 8,650 2022 Maverick Hybrids Over Loose Battery Cable Terminals"** (November 12, 2026): https://motoringchronicle.com/ford-recalls-8-650-2022-maverick-hybrids-over-loose-battery-cable-terminals/ — NHTSA record has no cause, no build-date range, no crash/injury count (the Part 573 now supplies the cause and dates); no park-it/park-outside flags; repair cannot arrive over the air. Context: NHTSA's database returns 28 campaigns touching the 2022 Maverick; five of the 28 deal with the 12-volt battery or the software that watches it (24V267, 24V590, 25V019, 25V127, 25V158). 151 owner complaints on the 2022 Maverick (January 24, 2022–November 3, 2026), 8 flagged as crashes, 4 as fires, 4 injuries, 0 deaths — owner reports, not NHTSA findings. One complaint, filed March 18, 2026, from a 2022 Maverick Hybrid owner: complete electrical failure at about 15,933 miles, followed by a no-start; dealer found voltage was not reaching the Body Control Module from a fault in the battery cable and wiring system; the truck gave no warning beforehand. Ford customer service: 1-866-436-7332.
4. **MaverickTruckMods, "Ford Maverick Problems and Recalls by Year (2022–2026)"** (updated November 14, 2026): https://mavericktruckmods.com/guide-problems-recalls — rebuilt daily from NHTSA's recalls API; confirms 26V724 as the newest row; NHTSA lists 47 recall campaigns naming the 2022–2026 Maverick, 30 covering 2022 trucks. Recall Query RQ24014 (opened November 2024 to test the 24V267 software remedy) closed in October 2025 after Ford conceded the original software fix could not detect failing batteries fast enough and issued the battery-replacement recall 25V019. No other open investigation on the Maverick as of October 2026.
5. **NHTSA Part 573 Safety Recall Report, 25V019** (via Motoring Chronicle's cited filing): January 17, 2025, 272,817 vehicles (2021–2023 Bronco Sport, 2022–2023 Maverick); suspect batteries built February 5, 2020–October 20, 2022; internal weld and cast-on-strap failures can end in sudden loss of battery output while driving; 238 allegations of lost motive power after the 24V267 software fix, 234 involving one supplier's batteries; as of November 20, 2024, Ford knew of no accidents, fires, or injuries tied to that condition. Remedy: free inspection and, where needed, a new Ford AGM battery.
6. **Site's own #1468 research file** (drafts/1468-maverick-hybrid-six-batteries-no-fix-research.md) — the drain saga backstory, verified November 11, 2026: eight Ford service messages (SSM 53087 through SSM 55215) across 24 months; two root causes (ACCM software, then ABS brake-pad self-adjustment); interim official advice was "set the parking brake every time you turn the truck off"; the free-battery recall 25V019 covered gas Mavericks and Bronco Sports but excluded the hybrids with the drain problem.

## The numbers

| Fact | Value | Source |
|---|---|---|
| Vehicles recalled | 8,650 (2022 Maverick Hybrid only) | Part 573 26V724 |
| Defect estimate | 1% (~87 trucks expected) | Part 573 26V724 |
| Build window | Feb 3, 2021 – May 12, 2022 | Part 573 26V724 |
| Systems one terminal can kill | 4 (steering assist, brake assist, exterior lighting, drive power) | NHTSA ack letter |
| VOQs alleging loss of motive power | 11, all while driving | Part 573 26V724 |
| Potentially responsive warranty claims | 427, of which 11 report loss of motive power while driving | Part 573 26V724 |
| Accidents / injuries known to Ford | 0 / 0 as of Oct 13, 2026 | Part 573 26V724 |
| CCRG investigation opened | July 17, 2026 | Part 573 26V724 |
| Field action approved | October 27, 2026 | Part 573 26V724 |
| Filed with NHTSA | November 2, 2026 | Part 573 26V724 |
| VINs searchable | November 9, 2026 | NHTSA ack letter |
| Owner letters mailed | November 23, 2026 | NHTSA ack letter |
| 12V-related actions on the 2022 Maverick, incl. this one | 6 (24V267, 24V590, 25V019, 25V127, 25V158, 26V724) | Motoring Chronicle count of 5 + this filing |
| Campaigns touching the 2022 Maverick | 28 (30 per API rebuild incl. hybrid-named filings) | Motoring Chronicle / MaverickTruckMods |
| Owner complaints, 2022 Maverick (all versions) | 151; 8 crashes, 4 fires, 4 injuries, 0 deaths | Motoring Chronicle / NHTSA |
| Ford recall line | 1-866-436-7332 (quote 26S81) | Motoring Chronicle |

### The original contribution (computed, not quoted)

1. **The sixth 12-volt action.** Five earlier campaigns on the same truck already dealt with the 12-volt battery or its watchdog software. 26V724 makes six distinct 12-volt actions on one model year of one truck — and unlike the first five, this one is not a battery, not a sensor, and not software. It is a piece of bent metal and a weld.
2. **The chemistry.** Hydroxy acetic acid from the dip-solder step corroded the ultrasonic weld that attaches the terminal eyelet to its cable. The joint was not underbuilt; it was chemically attacked by its own manufacturing process. A weld that fails because of the solder bath next to it is a failure mode no owner, dealer, or software update can see coming.
3. **The single-point-failure math.** One eyelet, C1617E, feeds the high-current Battery Junction Box. The BJB feeds everything downstream. Ford's own consequence list is four systems long, and the Part 573 adds a fifth outcome (no-crank/no-start). A truck that loses steering assist, brake assist, lights, and drive power simultaneously has not had four failures. It has had one.
4. **The timeline.** First VOQs to CCRG investigation (July 17, 2026) to field action (October 27) to filing (November 2): about three and a half months from investigation to recall. Compare Honda's 26V721 steering recall, which took 1,788 days from first report to defect determination. Ford moved fast here — because the failure mode was total, and the evidence was 11 owners all describing the same thing.
5. **The 11-of-427 ratio.** Only 11 of 427 potentially responsive warranty claims actually report a loss of motive power while driving (2.6%). The defect is rare and total: most suspect trucks will never feel it, and the ones that do lose everything at once, with no warning. That is exactly the profile that makes a 1% estimate and an 8,650-truck recall the right call — and exactly the profile owners ignore.

## Why this matters / what to do

- **If you own a 2022 Maverick Hybrid:** check your VIN at nhtsa.gov/recalls now. The search has been live since November 9; the letter does not arrive until November 23. Do not wait for the envelope.
- **The fix is a cable replacement, free, at a dealer.** It cannot arrive over the air. Call Ford at 1-866-436-7332 and quote 26S81, or book with a dealer.
- **If your truck ever lost all electricals with no warning** — the March 2026 complaint at 15,933 miles is the signature — file a Vehicle Owner Questionnaire with NHTSA (1-888-327-4236). Eleven VOQs opened this investigation.
- **If you already paid a shop to fix a loose or damaged battery cable** on a 2022 Maverick Hybrid, keep the invoice and ask Ford whether the repair qualifies for reimbursement; the public NHTSA record carries no reimbursement sentence.
- **Gas Mavericks and 2023+ hybrids are not in this campaign.** Owners of newer trucks can set this one aside — but should not assume their truck is clear because of an earlier battery recall; those actions covered different parts.

## Limitations (honest accounting)

- The Part 573 gives no per-claim detail: we know 11 VOQs allege loss of motive power, but not speeds, road types, or whether any happened at highway speed. The March 2026 complaint (15,933 miles, complete electrical failure) is one owner report, not a NHTSA finding.
- The 1% defect estimate is Ford's, derived from supplier process and maintenance records; the filing does not publish the underlying sample size.
- The filing does not say whether the replacement cable uses a redesigned eyelet or the same part with a corrected process — owners getting the fix cannot tell from the paperwork whether the chemistry problem is engineered out or merely re-soldered.
- Complaint counts (151 total, 8 crashes, 4 fires) cover every version of the 2022 Maverick, not just hybrids, and are owner reports, not adjudicated findings.
- The five-earlier-12V-actions count comes from Motoring Chronicle's reading of the NHTSA record; two of the five (25V127, 25V158) are software-watchdog campaigns, not battery hardware, so "six 12-volt actions" groups hardware and software together by system, not by part.

## Strongest counterargument

Eight thousand six hundred fifty trucks is a small recall, the defect estimate is 1%, and Ford knows of zero accidents and zero injuries. A skeptic could call this a footnote: a rare failure, caught fast, fixed free, on a truck that already carries 28 campaigns. That skeptic would be right about the scale and wrong about the point. The point is not the count. The point is that the 2022 Maverick Hybrid's 12-volt system has now failed six different ways — bad batteries, blind software, a drain no one could find for two years, and now a weld eaten by its own solder bath — and each time the failure mode was total loss of power with no warning. A system that fails six ways is not having bad luck. It is telling you something about how it was built.

## References for the article

1. NHTSA, Part 573 Safety Recall Report 26V724 (Ford Motor Company, filed Nov 2, 2026). https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V724-4684.pdf
2. NHTSA, Acknowledgement Letter, 26V724 (Nov 10, 2026). https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V724-4285.pdf
3. Motoring Chronicle, "Ford Recalls 8,650 2022 Maverick Hybrids Over Loose Battery Cable Terminals" (Nov 12, 2026). https://motoringchronicle.com/ford-recalls-8-650-2022-maverick-hybrids-over-loose-battery-cable-terminals/
4. MaverickTruckMods, "Ford Maverick Problems and Recalls by Year (2022–2026)" (updated Nov 14, 2026). https://mavericktruckmods.com/guide-problems-recalls
5. NHTSA, Recalls database. https://www.nhtsa.gov/recalls
6. NHTSA, Fatality Analysis Reporting System (FARS). https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
