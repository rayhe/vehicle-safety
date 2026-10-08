# Research: The Rivian R2's Second Recall Is One Loose Bolt — and the Robot Missed It (#1099)

## Story Angle
The 2027 Rivian R2 — the company's make-or-break mass-market EV, only months into customer deliveries — is already on its second recall. NHTSA campaign **26V625** (Rivian FSAM-1888): 14 R2s built May 18–Aug 27, 2026 at Normal, Illinois left the factory with an improperly tightened high-voltage battery fastener (an M6x1.0x24.5 bolt, part number SC00036202-D). A loose HV connection can cut drive power **with no warning**. Rivian estimates **100% of the 14-vehicle population** carries the defect. Zero customer complaints, zero incidents, zero injuries — the harm is entirely prospective.

The mechanism that makes it a story: the under-torqued bolt **passed Rivian's automated torque station**. It was caught by a human operator on the factory floor on September 17, 2026, who escalated it to quality. Rivian reprogrammed the station to reject under-torqued fasteners — the thing it was already supposed to do — and the federal filing offers **no explanation for how the station passed them in the first place**. The most sensor-dense vehicle Rivian makes was saved by eyeballs.

The pair of recalls tells the EV-startup story in miniature: Recall 1 (September 2026, rearview camera software) was fixed with an over-the-air update — no hands touched the car. Recall 2 needs a service visit and a torque wrench. The first proved Rivian can fix cars without touching them; the second proves some failures still need hands.

## Kill Test
- Newsworthy? Yes — the R2 is the most-watched EV launch of 2026, second recall within ~2 months of deliveries, loss of motive power with no warning is a genuine hazard. Covered by Autoblog (Oct 4), autoevolution (Oct 2), rivianwave, roadethos, ConsumerAffairs roundup. Zero coverage on this site (the earlier rivian-toe-link piece was R1).
- Novel angle? Yes — the QA inversion (robot passed it, human caught it; filing silent on how), the 100%-defect-rate confidence on a tiny population, and the OTA-vs-wrench contrast between the two recalls. Nobody is leading with the automated-torque-station irony.
- Not a data dump: mechanism (HV fastener torque → sudden power loss), irony (the guardian machine blinked), timeline math (7-day investigation, 2-month letter lag), concrete owner actions.

## Journalist
Vin Wreckage — Existential Dread Columnist. The cosmic absurdity of a $45,000 computer on wheels felled by a single loose bolt, and the automated guardian whose entire job was checking torque failing to check the torque. Philosophical, slightly unhinged, finds the dread in the machine.

## Kicker
Existential Dread

## Primary Sources

1. **NHTSA Recall 26V625 via oemdtc mirror (filed Sep 30, 2026)**
   - Campaign 26V625; manufacturer Rivian Automotive, LLC; component ELECTRICAL SYSTEM:PROPULSION SYSTEM:CRITICAL FASTENERS; manufacturer recall number FSAM-1888; 14 units; 2027 R2
   - Summary: "A high voltage battery fastener may have been improperly tightened, causing a loss of drive power." Remedy: inspect and repair the connection or replace damaged components, free of charge
   - Owner letters expected mailed November 28, 2026; Rivian customer service 1-888-748-4261; VINs searchable on NHTSA.gov November 28, 2026
   - URL: https://oemdtc.com/recall/26V625000/
2. **autoevolution, Oct 2, 2026 — "2027 Rivian R2 Hit With Second Recall"**
   - Bolt is M6x1.0x24.5, part SC00036202-D; affected builds May 18–Aug 27, 2026
   - Operator found the under-torqued fastener Sep 17, 2026 after it passed the automated torque station; escalated to quality; station reprogrammed to reject sub-spec fasteners; "What the NHTSA filing does not provide is an explanation for the subpar programming of that station"
   - First recall: 2,481 R2s built Apr 23–Aug 10, 2026 (plus R1s), rearview camera software, fixed via OTA in September 2026
   - No warning identified for the failure condition; Rivian aware of zero customer complaints
   - URL: https://www.autoevolution.com/news/2027-rivian-r2-hit-with-second-recall-this-time-it-s-about-improperly-tightened-battery-fastener-276475.html
3. **Autoblog, Oct 4, 2026 — "Rivian's Make-or-Break EV Is Already on Its Second Recall"**
   - R2 "considered a crucial part of the brand's path to profitability amid a more challenging market for EVs"
   - 14 MY2027 R2s; improperly torqued fastener on the high-voltage battery; "may experience a loss of motive power without prior warning"
   - URL: https://www.autoblog.com/news/rivians-make-or-break-ev-is-already-on-its-second-recall
4. **rivianwave, Oct 4, 2026 — "Rivian Issues Second R2 Recall Over Loose Battery Bolt"**
   - 14 R2s may have left Normal, IL with insufficiently tightened HV battery fastener; no warning for the failure condition; no customer complaints or incidents
   - Fix: inspection, then repair or component replacement, then a properly torqued fastener; letters from Nov 28, 2026
   - First recall was the rearview camera bug, resolved with an OTA software update; this one requires a service visit
   - URL: https://www.rivianwave.com/news/4767/rivian-issues-second-r2-recall-over-loose-battery-bolt
5. **roadethos, Oct 5, 2026 — "Rivian Recalls Just 14 R2's For Simple Issue"**
   - Rivian estimates all 14 vehicles in the population carry the defect (100%); reports no complaints, crashes, injuries or deaths
   - Voluntary recall decided September 24, filed September 29 (one week after the Sep 17 operator catch)
   - URL: https://roadethos.com/news/rivian-recalls-just-14-r2s-for-simple-issue
6. **newestcarsusa (Oct 2026 roundup)**
   - Rivian told TechCrunch that all of the affected vehicles are already at service centers, although the campaign still schedules owner notifications on or before November 29, 2026
   - URL: https://newestcarsusa.com/10901/rivian-r2-faces-new-recall-over-high-voltage-battery-fastener/

## Original Calculations / Contribution
- The 100% defect-rate estimate on a 14-vehicle population is the tell: Rivian is not recalling 14 cars that *might* have the defect. It traced the exact fastener lot and believes every single one has it. Recall filings normally hedge ("a small percentage of the population"); this one does not hedge, because the population was defined by the suspect lot.
- Timeline math: built May 18–Aug 27 → operator catch Sep 17 → recall decision Sep 24 → filed Sep 29 → owner letters Nov 28. A 7-day investigation-to-decision is fast. Then a two-month notification lag — while Rivian claims all 14 are already in service centers. If the service-center claim holds, the letters are a formality; if it is PR, someone could be driving a truck that can die silently for two more months. The tension is in the filing itself; report both, resolve neither.
- The two recalls as a pair: Recall 1 = software, camera, OTA, zero wrenches. Recall 2 = hardware, HV battery, torque wrench, mandatory service visit. The ratio between them is the whole EV-startup growing-pains story: code can be patched from Normal, Illinois; a bolt cannot.
- The QA inversion, stated plainly: the automated torque station's entire job is verifying torque. It passed an under-torqued fastener. A person with eyes caught it. Rivian's fix was reprogramming the machine to do what it was already supposed to do, and the federal filing contains no explanation of how it failed. Every automated safety gate has this failure mode; this one happens to have a paper trail.

## Limitations
- 14 vehicles; zero complaints, incidents, injuries, deaths. The harm is prospective, and the population is tiny. Say so.
- The filing does not quantify how far under-torqued the fastener was, the actual per-mile failure probability, or whether the connection degrades gradually or fails suddenly. Do not invent failure statistics.
- "All 14 already at service centers" is Rivian's claim to TechCrunch, not a statement in the NHTSA filing, which still schedules owner letters for Nov 28. Note the tension; do not resolve it.
- First-recall population figures conflict across outlets (autoevolution: 2,481 R2s; rivianwave: roughly 100,000 R1+R2). Use the R2-specific figure only, or describe qualitatively.
- This is a manufacturing-process defect on early-build vehicles (a suspect fastener lot), not a design flaw in the R2 platform. Do not generalize to all R2s.

## Strongest Counterargument
Fourteen trucks. A line worker caught it, Rivian investigated in a week, recalled voluntarily, reprogrammed the station within days, and had already fixed the first recall over the air before most owners noticed. Nobody was hurt, nothing crashed, and the remedy is literally a torque wrench. This is manufacturing QA working as designed: the human layer caught what the automated layer missed, which is exactly why you keep the human layer. The 100% defect estimate is honesty, not scandal — Rivian traced the bolt lot and owned the whole population instead of hedging.

## Actionable Insights
- Took delivery of a 2027 Rivian R2 built May–August 2026? Do not wait for the November 28 letter. Call Rivian service at 1-888-748-4261, reference FSAM-1888 / NHTSA 26V625, and ask whether your VIN is in the population. VINs become searchable at nhtsa.gov/recalls on November 28, 2026.
- If any EV loses motive power without warning: do not panic-brake into traffic; coast, signal, and get fully off the roadway before stopping. There is no engine sputter to warn you — the drive unit simply stops being powered.
- Reservation holders and shoppers: this is not a reason to cancel an R2 order. It is a reason to remember that the first model year of any new platform carries the highest recall density in the industry. The 2028s will have the cleaner record; early adoption has a price, and this time the price was a bolt.
