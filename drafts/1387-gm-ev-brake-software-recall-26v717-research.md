# Research: #1387 — GM EV brake software recall 26V-717 alongside the eBoost brake investigation

**Slug:** 1387-gm-ev-brake-software-recall-26v717
**Journalist:** Mia Crumplezone (Safety Engineering Editor — brake systems are her beat: what happens in the first 150 milliseconds when the pedal talks to software instead of hydraulics)
**Kicker:** Investigation
**Date researched:** 2026-11-04

## Kill test
PASS, three ways. (1) Fresh: NHTSA received GM's report on October 29, 2026, six days before this draft; VINs became searchable the same day; owner letters go out December 14, 2026. (2) Not a duplicate — full-filename greps, no truncation: zero drafts/stories/queue entries mention LYRIQ, Blazer EV, CELESTIQ, VISTIQ, or 26V717; the site HAS covered GM's eBoost brake investigation (#790, #835, #979, #1050) and a GM twin-deadlines piece (#1380), but no entry covers this recall. The distinction between the recall and the investigation is itself the story, and no prior entry draws it. (3) Novel angle: GM's electric SUVs now carry a brake recall AND a brake investigation at the same time, on overlapping nameplates, for different stated defects. Readers (and headline writers) will conflate them. The article's original contribution is the overlap/difference audit: which nameplates sit in both files, which sit in only one, and what fraction 67,380 is of 1,164,820.

## Verified facts (3+ primary/primary-adjacent sources)
1. **The recall (26V-717):** GM is recalling certain 2023-2027 Cadillac LYRIQ, 2025-2026 Cadillac CELESTIQ, 2026-2027 Cadillac VISTIQ, and 2024-2027 Chevrolet Blazer EV vehicles. Potentially affected: 67,380. Defect: the brake system control module (BSCM) contains a software defect that may cause a loss of braking during certain driving conditions. Component as listed: the antilock, traction control and electronic limited slip control unit/module of the hydraulic service brakes. Remedy: BSCM software update, over the air or by a dealer, free of charge. GM recall number N262570900; NHTSA campaign 26V-717 (26V717000). Report received by NHTSA October 29, 2026; VINs searchable on nhtsa.gov since October 29, 2026; owner letters expected December 14, 2026. Contacts: Cadillac 1-800-333-4223, Chevrolet 1-800-222-1020. Sources: NHTSA campaign record as reported by AutoMotor News (Nov 4, 2026), checked against the NHTSA record.
2. **The investigation (EA26006):** NHTSA opened Engineering Analysis EA26006 on August 21, 2026, into loss of brake assist in GM's eBoost electro-hydraulic brake-by-wire module, covering an estimated 1,164,820 vehicles. Stated mechanism: an internal spindle can fracture during an ABS event. ODI counts 745 combined incidents after dedup (227 consumer complaints, 531 manufacturer early-warning reports), 22 crashes, 6 injuries, no fatalities. GM's stated position: ABS, stability control and traction control remain functional until the vehicle stops, after which assist functions are lost; some owner reports allege immediate loss of assist while driving instead. EA26006 grew out of PE24011 (opened April 11, 2024, on 2023 LYRIQ complaints: hard brake pedal, "Brake System Failure" message at startup or while driving). No recall has been ordered under EA26006. Sources: NHTSA ODI opening resume via OEMDTC; MotorBiscuit (Aug 2026); Gadget Review (Aug 25, 2026).
3. **The overlap audit (original calculation):** EA26006's population lists 2023-2026 LYRIQ, 2024-2026 Blazer EV, 2025-2026 CELESTIQ, plus Optiq, Colorado, Canyon, Enclave, Envision, Equinox EV, Traverse, Acadia, Cruise Origin, and (per secondary coverage) Honda Prologue and Acura ZDX on shared hardware. 26V-717 covers LYRIQ, Blazer EV, CELESTIQ, and VISTIQ, extended through model year 2027. Overlap: LYRIQ, Blazer EV, CELESTIQ appear in both files. 26V-717-only: VISTIQ (not in EA26006's list) and model-year 2027 vehicles. EA26006-only: Optiq, the trucks and SUVs, and the Honda/Acura twins. Ratio: 67,380 / 1,164,820 = 5.8%. Gap between the two federal actions: August 21 to October 29, 2026 = 69 days.
4. **What the two files do NOT share:** EA26006's stated mechanism is a hardware fracture (spindle inside the electronic brake control module). 26V-717's stated defect is software in the BSCM. The public record does not establish that 26V-717 is the remedy for EA26006, and the article must not claim it is. Conversely, 26V-717's existence does not close EA26006, which remains open with no recall ordered under it.
5. **What 26V-717's record does not state (in available reporting):** no crash, injury, or fatality count tied to the software defect appears in the campaign record as reported. That is absence of a published count, not a claim of zero incidents. The article states this explicitly rather than inventing a zero.

## What this article must NOT claim
- That 26V-717 fixes, answers, or closes EA26006. Different stated mechanism (software vs. spindle fracture); no such link in the public record.
- That every EA26006 vehicle is recalled, or that every 26V-717 vehicle is under investigation. The overlap is three nameplates, not the populations.
- Any crash/injury count for 26V-717. None published in the available record.
- That the OTA remedy means every owner is already fixed. OTA updates still require the owner to accept/install, and dealer visits are the fallback; letters do not go out until December 14.
- That "loss of braking" means "no brakes at all." The record says loss of braking during certain driving conditions; the article keeps NHTSA's wording and does not upgrade it to total brake failure.

## Actionable takeaways for readers
- If you own a 2023-2027 LYRIQ, 2025-2026 CELESTIQ, 2026-2027 VISTIQ, or 2024-2027 Blazer EV: check your VIN at nhtsa.gov/recalls now. VINs have been searchable since October 29, even though letters do not arrive until December 14.
- If an OTA update appears for your brake module, install it promptly; do not treat a brake software update like an infotainment update you can defer for months.
- If your brake pedal goes hard or a "Brake System Failure" message appears: that symptom belongs to the EA26006 complaint pattern. Keep driving only as far as safety requires, press harder (push-through braking remains as fallback per GM's account), and get the car to a dealer; then file the complaint with NHTSA so the investigation file, not just GM's file, holds it.
- If you own an Optiq, Equinox EV, Traverse, Acadia, Colorado, Canyon, Enclave, Envision, Prologue, or ZDX: this recall does not cover you, but EA26006 does touch your model. A recall search that comes back clean does not mean the investigation went away.

## Sources
- NHTSA campaign record 26V-717, via AutoMotor News, "Cadillac LYRIQ, Blazer EV in 67,380-vehicle brake recall" (Nov 4, 2026): https://automotor.news/news/cadillac-lyriq-chevrolet-blazer-ev-brake-software-recall-26v717/
- NHTSA ODI, Engineering Analysis EA26006 opening resume (Aug 21, 2026), via OEMDTC: https://oemdtc.com/investigation/EA26006/
- MotorBiscuit, "Over 1.1 Million GM Vehicles Face Investigation Over Potential Brake-Assist Failure" (Aug 2026): https://www.motorbiscuit.com/over-1-1-million-gm-vehicles-face-investigation-over-potential-brake-assist-failure/
- Gadget Review, "1.1 Million GM Vehicles, 22 Crashes, 0 Recall Yet: GM's eBoost Brake System Faces Federal Scrutiny" (Aug 25, 2026): https://www.gadgetreview.com/1-1-million-gm-vehicles-22-crashes-0-recall-yet-gms-eboost-brake-system-faces-federal-scrutiny
- NHTSA FARS: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
- NHTSA recalls database: https://www.nhtsa.gov/recalls
- IIHS vehicle ratings: https://www.iihs.org/ratings

## Addendum (2026-11-07, from #1421 duplicate research — primary source: GM Part 573 filing)

The Part 573 Safety Recall Report 26V717 itself (static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V717-3733.pdf) contains a chronology section with facts not in the campaign record as reported on Nov 4:

- **Triggering event:** April 10, 2026, a GM technical expert filed a Speak Up for Safety report after a 2024 Lyriq struck a garage at low speed. The subject vehicle was built with the software improvements implemented as the remedy for the previous recall **24V589** — the fix was already installed on the car that failed. GM duplicated the condition in testing, confirmed the 24V589 remedy did not address this pAWD scenario, and opened a new investigation Aug 18, 2026. SFADA decided on the recall Oct 22, 2026.
- **Complaint counts (from the filing, not in the Nov 4 reporting):** 24 field complaints potentially related, received Feb 28, 2024 – June 11, 2026. **20 minor accidents, 2 with allegations of minor injuries.** No fatalities.
- **Trigger sequence (GM's own testing):** brakes lightly applied at low speed during a sharp turn, vehicle hits a bump or depression (such as at the end of a driveway), momentary release and reapplication of the brakes causes the slip calculation to misread wheel movement, temporary loss of braking. Returns on the next brake press.
- **2023–2024 Lyriq fix delay:** the BSCM software update was not yet ready for 2023–2024 Lyriq models at filing time (CarBuzz, Nov 6, 2026; The Truth About Cars, Nov 2026). The 2024 Lyriq is the largest single cohort (22,819 of 67,380, 34%).
- **Overlap note for this article's audit:** vehicles covered by 24V589 with pAWD are included in 26V717 and closed under 24V589 because this update addresses both conditions.

#1421 (Nov 7) was researched and drafted on this same recall before the duplicate was caught and was removed as a duplicate of this entry. The "fix didn't fix it" angle above is the one genuinely new thread #1421 found; if this article is ever revised before its ship date, that chronology is the material to add.
