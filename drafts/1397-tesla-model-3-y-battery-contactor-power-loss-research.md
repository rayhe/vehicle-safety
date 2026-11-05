# Research: Tesla Battery Contactor Recall 25V690 (Article #1397)

## Article 1397 — The Crash Report
- **Journalist:** Rex Driverton (Senior Crash Correspondent)
- **Kicker:** Investigation
- **Slug:** 1397-tesla-model-3-y-battery-contactor-power-loss
- **Working title:** "Your Tesla Can Lose All Power at Speed. The Warning Comes After It's Already Gone."

## Kill test: PROCEED
Queue greps for "contactor," "25v690," "intica," "songchuan," "battery-connection," "tesla-loss-of-power," and "sudden-loss" return zero hits. The site has covered Tesla FSD probes, a Model 3 far-side airbag OTA recall (#1231), and a Model Y bolt recall, but never a high-voltage battery contactor failure. The fresh peg: a late-October 2026 coverage wave (carc.com Oct 26, 2026; Reuters re-report Nov 4, 2026) recirculating NHTSA campaign 25V690. The novel angle is not the recall itself but the failure's shape: the car's only warning arrives after propulsion is already gone, the defect lives two suppliers deep, and Tesla estimates only about 1% of the 12,963 recalled cars actually carry the bad part, which makes this a 100-to-1 dragnet recall. That ratio, plus the warning-after-failure inversion, is the story.

## Primary sources (verified Nov 5, 2026)
1. **NHTSA recall 25V690 (via OEMDTC mirror of NHTSA data)** — campaign 25V690, Tesla SB-25-16-005, 12,963 units, component: electrical system / propulsion system fuses, relays, contacts, and shunts. "Tesla is recalling certain 2025 Model 3 and 2026 Model Y vehicles. The battery pack contactors may fail, causing a loss of drive power." Owner letters mailed December 9, 2025. Part number 1089334-01-K. https://oemdtc.com/recall/25V690000/
2. **Reuters (via Glance), Nov 4, 2026** — "Tesla is recalling 12,963 vehicles in the U.S. due to a defect in a battery pack component that could lead to a sudden loss of drive power... Tesla identified 36 warranty claims and 26 field reports related to this condition as of October 7, but said it was unaware of any collisions, injuries, or fatalities linked to the defect." Also notes the separate October 2026 NHTSA investigation into 2.88 million FSD-equipped Teslas after 50+ reports of traffic-safety violations.
3. **Notebookcheck, Oct 28, 2025 (updated Nov 1, 2026)** — 5,038 Model 3 (built Mar 8–Aug 12, 2025) and 7,925 Model Y (built Mar 15–Aug 15, 2025). "If this happens while the vehicle is being driven, the driver will instantly lose the ability to apply torque via the accelerator pedal, resulting in a loss of propulsion, while the driver receives a visual alert instructing them to safely pull over." https://www.notebookcheck.net/Tesla-recalls-13-000-Model-3-and-Y-units-over-risk-of-sudden-loss-in-drive-power.1147885.0.html
4. **AutoEvolution, Oct 2025** — Tesla's Field Reliability team opened the investigation in August 2025 after service records showed high electrical resistance in the component; some affected vehicles were unable to enter drive from park. Suspect contactors used in production Mar 8–Aug 15, 2025. The contactor is made by SongChuan of Taiwan; the solenoid inside it comes from Sistemas Mecatronicos InTiCa. https://www.autoevolution.com/news/tesla-recalls-2026-model-y-and-2025-model-3-vehicles-for-battery-connection-issue-259704.html
5. **Tesla North, Oct 22, 2025** — NHTSA recall letter text: "A battery pack contactor may fail, causing a loss of drive power. A loss of drive power can increase the risk of a crash." Tesla internal reference SB-25-16-005. https://teslanorth.com/2025/10/22/tesla-recalls-nearly-13000-model-3-and-model-y-vehicles-over-battery-defect/
6. **carc.com, Oct 26, 2026** — confirms the recall's late-October 2026 press recirculation and the FSD-probe context in the same month. https://www.carc.com/news/tesla-battery-contactor-recall-12963-october-2026

## Verified facts
- NHTSA campaign 25V690; Tesla recall SB-25-16-005; Tesla's determination to recall made October 3, 2025; filed with NHTSA October 14, 2025.
- 12,963 vehicles: 5,038 2025 Model 3 (production Mar 8–Aug 12, 2025) + 7,925 2026 Model Y (production Mar 15–Aug 15, 2025).
- Root cause: battery pack contactor (part 1089334-01-K, made by SongChuan) built with an InTiCa solenoid whose coil termination connection is poor. High resistance at the termination can make the contactor open without warning.
- Failure mode: contactor opens while driving, high-voltage circuit to the motor is interrupted, driver instantly loses the ability to accelerate. Steering and braking are not described as affected; the car coasts. The dashboard then displays a visual alert telling the driver to pull over safely.
- Same defect, second symptom: some affected cars could not enter drive from park at all. One root cause, two failure modes: stranded in the driveway or dead on the highway.
- As of October 7, 2025: 36 warranty claims and 26 field reports potentially related. Zero collisions, injuries, or fatalities attributed.
- Tesla estimates only about 1% of the recalled population actually contains the defective part. Last suspect contactor used in production August 15, 2025; newly manufactured vehicles not affected.
- Fix: replace the battery pack contactor free of charge with a unit that does not use the InTiCa solenoid. Owner notification letters mailed December 9, 2025.
- Context, separate issue: in October 2026 NHTSA opened an investigation into about 2.88 million Tesla vehicles with Full Self-Driving after 50+ reports of traffic-safety violations and crashes. That probe is not this recall and must not be conflated with it.

## Original contribution (this article's novel findings)
1. **The warning-after-failure inversion:** the car's only alert fires after propulsion is already gone. Most stall recalls give a sputter, a light, or a degraded mode first. Here the sequence is power loss first, instruction second. The alert is a post-mortem.
2. **The 100-to-1 dragnet:** 12,963 recalled, ~1% defective, so roughly 130 cars carry the bad part and ~12,800 do not. Tesla is replacing 100 contactors to catch 1. That ratio is the honest price of a defect you cannot detect from outside the part.
3. **Two suppliers deep:** the failure is not in a Tesla part. It is in an InTiCa solenoid inside a SongChuan contactor inside a Tesla battery pack. The defect lives two contracts away from the name on the badge, which is why the Field Reliability team found it in service records, not in a supplier audit.
4. **One defect, two opposite failures:** the same high-resistance termination can strand the car in park or kill it at speed. The driveway symptom and the highway symptom are the same failure wearing different clothes, which means "it wouldn't go into drive once" was a warning the highway version never gives.

## Limitations (must state in article)
- Zero crashes, injuries, or fatalities attributed as of October 7, 2025. The risk is elevated crash risk from sudden propulsion loss, not a body count.
- The ~1% defective estimate is Tesla's own figure, not independently verified.
- Warranty claims and field reports may overlap; the 36 + 26 counts are not necessarily 62 distinct vehicles.
- Loss of propulsion is not loss of control: steering and braking are not implicated in the recall documents. Do not overstate the failure.
- The FSD investigation (2.88M vehicles, October 2026) is a separate NHTSA action. Mention it only as context, never as evidence about the contactor.

## Strongest counterargument (must state at full strength)
This is the recall system working, not failing. Tesla's own Field Reliability team caught the pattern in service data, the company recalled 100 cars for every 1 defective part, the fix is free, and nobody was hurt. A 1% defect rate with zero attributed crashes is a rounding error in a 12,963-car population, and every manufacturer ships a bad batch of something eventually. If the standard is "no supplier defect ever reaches a customer," no car company passes it. The honest read: this recall is evidence the monitoring works, and the only real criticism is that the warning arrives after the failure instead of before it.

## Actionable insights
- If you own a 2025 Model 3 or 2026 Model Y built March–August 2025, check your VIN at nhtsa.gov/recalls or Tesla's VIN recall search. The recall is 25V690.
- If your car ever refused to enter drive from park, get the contactor checked even if no recall letter arrived: that is the same defect's driveway symptom.
- If the "pull over safely" alert ever appears while driving, do exactly that immediately. Do not try to nurse the car to the next exit; you have no propulsion and the alert is telling you the car already knows it.
- Used-car buyers: a 2025 Model 3 or 2026 Model Y from the March–August 2025 build window should show a completed 25V690 repair in its service history. Ask before you buy.

## Hard-gate watch list for draft
- Em dashes: max 3 in article body (regex count is truth).
- Banned phrases: none of "Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack".
- "The" sentence starters: max 15%.
- Sentence rhythm: variance >= 200, short <= 15%, long >= 15% (run sentence-rhythm-check.py).
- Rex voice: deadpan noir, paradox-loving, distinct from Clara/Mia/Vin/Axle/Dale.
- References section with linked sources; disclaimer with FARS/recall-data caveat.
- Hero: EV battery / highway night scene, no text overlay, real JPEG 1920x1280.
