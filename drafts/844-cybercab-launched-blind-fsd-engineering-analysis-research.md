# Research: #844 — Mia Crumplezone — "Tesla's Cybercab Has No Steering Wheel. Its Cameras Still Go Blind in the Sun."

## Slug
`cybercab-launched-blind-fsd-engineering-analysis`

## Angle (1-2 sentences)
On September 3, 2026, Tesla launched the Cybercab commercially in Austin — no steering wheel, no pedals, no mirrors — and NHTSA opened Audit Query AQ26002 the same day to examine its FMVSS self-certification. Nobody has connected the launch to NHTSA's other open action against Tesla's software: an Engineering Analysis covering ~3.2 million FSD vehicles whose central finding is that the camera-only system can fail to detect hazards when cameras are impaired by sun glare, dust, or fog. Tesla deleted the human fallback from a vehicle whose vision system is under federal investigation for not seeing.

## Kill test
- Genuinely newsworthy? Yes. AQ26002 opened 09/03/2026 (primary NHTSA filing). Commercial Cybercab rides began the same day in Austin. Tesla announced expansion plans to roughly a dozen states Sept 3. Reuters, USA Today, Electrek, TechTimes all covered within the last 4 days.
- Novel angle? Yes. Site has two AQ26002 pieces (#822 Zoox precedent, #839 self-certification gambit) — both are legal/procedural angles. Neither mentions NHTSA's open FSD Engineering Analysis finding that the camera-only stack fails to detect hazards when cameras are impaired. The engineering irony — removing the wheel from a car whose vision is under federal investigation for going blind — is original to this piece. Electrek mentions "very similar FSD software" and "visibility-related crashes" only in passing.
- Data-backed? Yes. NHTSA AQ26002 filing (primary PDF), NHTSA FSD Engineering Analysis summary via Autoblog (Mar 22, 2026), Reuters Sept 4, USA Today Sept 4, TechTimes.

## Primary sources
1. **NHTSA ODI, Open Audit Query Resume AQ26002** (opened 09/03/2026, investigator Syed Rahaman, reviewer Neil Dold, approver Otto Matheke): https://static.nhtsa.gov/odi/inv/2026/INOA-AQ26002-17078.pdf
   - Prompted by: Public Information. Population: 1,000 (estimated). Subject: Tesla Cybercab FMVSS Certification.
   - "On September 3, 2026, Tesla began commercial deployment with a small number of its Cybercab vehicles in Austin, Texas. Tesla notified the Agency that it certified those Cybercab vehicles as compliant with all applicable FMVSS... Tesla also notified the Agency that it plans to gradually expand commercial deployment of the Cybercab to include additional vehicles and locations. The vehicles lack permanently attached, conventional manual controls, such as a brake pedal, gas pedal, steering wheel, and mirrors."
   - "NHTSA will consider the extent to which Tesla's certification depended on determinations that certain FMVSS are inapplicable to the Cybercab."
2. **Reuters, "US auto safety regulator opens probe into nearly 1,000 Tesla Cybercabs," Sep 4, 2026** (David Shepardson): https://www.reuters.com/business/autos-transportation/us-auto-safety-regulator-opens-probe-into-nearly-1000-tesla-cybercabs-2026-09-04/
   - NHTSA examining "the process and technical data the EV maker relied on to claim compliance with federal motor vehicle safety standards."
   - Texas state records: 420 autonomous vehicles registered, including 45 Cybercabs, as of Friday morning.
   - In June, NHTSA proposed ending the manual brake pedal requirement for self-driving vehicles; other FMVSS changes proposed.
   - July: NHTSA approved Zoox exemption petition for limited commercial deployment of steering-wheel-free robotaxis — a first for the industry. Under existing law, up to 2,500 vehicles per manufacturer per year can operate without required human controls via petition.
3. **Autoblog, "Tesla Just Dodged a 2.26 Million-Car Recall, The Next One Could Be Far Worse," Mar 22, 2026** (Simran Rastogi): https://www.autoblog.com/news/tesla-just-dodged-a-2-26-million-car-recall-the-next-one-could-be-far-worse
   - NHTSA upgraded FSD visibility investigation to Engineering Analysis — the final stage before the agency can push for a mandatory recall. Covers ~3.2 million vehicles.
   - "Tesla's system may fail to detect hazardous situations and alert the driver as it should when camera functionality is impaired. In some cases, it only gives a warning seconds before an accident, or fails to do so entirely. Sun glare, dust, and fog are common failure points for Tesla's FSD."
   - 9 accidents identified, including 1 death; 6 other possible related incidents under review.
   - Separate probe: 2.88 million vehicles, 50+ reports of traffic safety violations; FSD induced behavior violating traffic safety laws.
4. **USA Today, "Can NHTSA slow down Tesla's Cybercab launch with new probe?," Sep 4, 2026** (Keith Laing): https://www.usatoday.com/story/cars/news/2026/09/04/tesla-cybercab-probe-expected-launch/91609244007/
   - NHTSA: "until that work is completed, however, existing standards remain in force."
   - Administrator Jonathan Morrison: "NHTSA fully supports the safe development and deployment of automated vehicles. But as the federal regulator, we need to ensure that all of our laws are followed."
   - Tesla operates Robotaxis in limited areas of Austin, Dallas, Houston, Miami, Orlando, Tampa; announced Sept 3 expansion to ~a dozen additional states.
   - Musk, April 2026 earnings call: "The limiting factor for expansion is really rigorous validation... we've, to the credit of the team, not had a single one to date" (accident or injury).
5. **Electrek, "Tesla Cybercab is already under NHTSA investigation after launch," Sep 4, 2026**: https://electrek.co/2026/09/04/tesla-cybercab-nhtsa-investigation-fmvss-certification/
   - Launch event: small group of shareholders and friendly influencers, reportedly required to sign NDAs, before broader Robotaxi app rollout.
   - "NHTSA has an open probe into 'Full Self-Driving' covering 3.2 million vehicles after a series of visibility-related crashes... The Cybercab runs on a very similar FSD software."
6. **TechTimes, "Tesla Cybercab Launched; NHTSA Opened Probe It Once Sent Zoox Down for Four Years," Sep 4, 2026**: https://www.techtimes.com/articles/326717/20260904/tesla-cybercab-launched-nhtsa-opened-probe-it-once-sent-zoox-down-four-years.htm
   - FMVSS at issue: No. 111 (mirrors/rear visibility), No. 124 (accelerator control), No. 135 (light vehicle brakes), Nos. 203/204 (steering control impact protection). Cybercab has none of the regulated components.
   - VP Vehicle Engineering Lars Moravy: Tesla self-certified as fully compliant and determined certain standards inapplicable — a legal determination, not an exemption request.
   - DOT proposed scrapping the brake pedal requirement for AVs in June (TechCrunch).

## Key numbers for the piece
- AQ26002: opened 09/03/2026, same day as commercial launch; 1,000 vehicles estimated; prompted by public information.
- 45 Cybercabs registered in Texas as of Sept 4; 420 total Tesla AVs registered in state.
- FSD Engineering Analysis: ~3.2M vehicles; 9 crashes, 1 death tied to camera impairment; sun glare, dust, fog named as failure conditions.
- Austin, Texas: one of the sunniest major US cities (relevant failure condition).
- Exemption path exists: 2,500 vehicles/year via petition; Zoox got the first one in July 2026. Tesla chose self-certification instead.

## Limitations (for the article)
- The FSD Engineering Analysis covers FSD-equipped consumer vehicles, not the Cybercab itself; the Cybercab "runs on a very similar FSD software" (Electrek) but Tesla has not published the Cybercab's sensor/processing differences. Inferring identical failure modes is reasonable but not proven.
- Engineering Analysis is not a recall; NHTSA may close it. The 9-crash/1-death count is from March 2026 and may have grown.
- AQ26002 is an audit query, not a defect finding — it does not allege the Cybercab is unsafe, only that the certification math needs showing.
- Austin sunshine claim: need care — I can reference that sun glare is a named NHTSA failure condition and Austin launches in September; avoid inventing a "sunniest city" stat without a source.

## Strongest counterargument (for the article)
Tesla's camera-only stack has driven billions of miles; the EA's 9 crashes across 3.2M vehicles is a thin base, and every sensor suite (lidar included) degrades in fog and glare. Self-certification is how every Camry and F-150 reaches the market — Tesla used the same legal pathway Zoox eventually got via petition, and NHTSA itself is rewriting the rules because it agrees they're obsolete. Morrison's statement is balanced, not accusatory. And removing the wheel removes the distraction problem entirely: no human to misuse the automation.

## Actionable insight
If you're riding in a Cybercab in Austin: this is not a finished regulatory product. The federal rules it claims to comply with were written for cars with brake pedals, and the agency that enforces them opened a probe on day one. Watch for the EA outcome — if NHTSA mandates a recall on the FSD vision stack, the Cybercab's identical camera-only architecture is next in line. Check nhtsa.gov for AQ26002 updates before assuming the expansion to a dozen states has federal blessing. And if you hold Tesla stock on the robotaxi thesis: Zoox waited four years for the exemption Tesla declined to request.

## Hero image concept
Tesla Cybercab robotaxi in Austin at golden hour, no steering wheel visible through windshield, low sun glare flaring across the camera housing. Landscape, photorealistic, no text overlay.
