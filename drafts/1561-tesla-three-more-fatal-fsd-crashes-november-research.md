# Research — #1561: Tesla's Driver-Assist Was On in Three More Fatal Crashes. The Public Was Told Nothing.

**Slug:** `1561-tesla-three-more-fatal-fsd-crashes-november`
**Journalist:** Rex Driverton (Senior Crash Correspondent — he owns this investigation thread; #905 was the first installment, Sept 10, 2026)
**Kicker:** Investigation
**Date researched:** November 21, 2026
**Target ship_date:** 2028-10-21 (1 day after #1560's 2028-10-20)

## Story in one line
On November 16, 2026, Electrek's Fred Lambert matched three more fatal Tesla crashes to NHTSA filings in which Tesla itself confirmed Autopilot or Full Self-Driving was engaged — seven more deaths, including two fatal driver-assist crashes in a single Florida city that were never publicly tied to the system — and September 2026 set a new record of 264 Tesla driver-assist crashes in one month.

## Kill test
- **Genuinely newsworthy?** YES. Reported November 16-18, 2026 (Electrek Nov 16, The Driven Nov 18). Seven deaths across three newly identified crashes; a record month for Tesla driver-assist crash reports; the investigation's running tally now 12 crashes, 16 lives.
- **Novel angle?** YES. Sequel to #905 (Sept 10, 2026 — 8 cases), with four new crashes, a new record month, and two new mechanism details: (1) Tesla logs crash times in UTC, so the Naples crash is filed under October even though it happened September 30 — anyone cross-checking September crashes misses it; (2) the Naples pair — two fatal driver-assist crashes in one city, in the same NHTSA release, neither ever publicly tied to Autopilot/FSD. Full drafts/stories grep, November 21, 2026: zero prior coverage of the Naples Model X rollover, the El Dorado Hills Model Y fire, the I-75 Model 3, the 264-crash September record, or the UTC timestamp quirk.
- **3+ primary sources?** YES. (1) Electrek, Nov 16, 2026 — Naples Model X case report with SGO filing details; (2) The Driven, Nov 18, 2026 — the three-crash batch and the 12-crash/16-life tally; (3) Florida Highway Patrol press release, via Electrek — crash facts, no mention of driver-assist; (4) NHTSA Standing General Order data, via Electrek — 264 September crashes, record month.
- **Verdict:** PROCEED.

## Primary sources
1. **Electrek, November 16, 2026** — "Tesla Model X on Autopilot/FSD hit a pole and flipped, killing passenger" (Fred Lambert). https://electrek.co/2026/11/16/tesla-autopilot-fsd-model-x-pole-rollover-naples/
2. **The Driven, November 18, 2026** — "Tesla Autopilot or FSD engaged in three more fatal crashes, NHTSA filings show." https://thedriven.io/2026/11/18/tesla-autopilot-or-fsd-engaged-in-three-more-fatal-crashes-nhtsa-filings-show/
3. **Florida Highway Patrol press release, via Electrek** — Sept 30, 2026 crash facts; investigation open; no mention of driver-assist.
4. **NHTSA Standing General Order (SGO) crash data, via Electrek** — Tesla's own filings; September 2026 record of 264 Tesla driver-assist crashes.
5. **Site research #905** — "Tesla's Hidden Autopilot/FSD Fatal Crashes" (Sept 10, 2026): the investigation's first installment, 8 confirmed cases; method is matching redacted SGO reports to local crash reports.

## Key verified facts
- **Naples Model X, September 30, 2026, 11:43 p.m.:** 2025 Tesla Model X heading east on Golden Gate Parkway, Collier County, approaching Estuary Boulevard. Left the road, hit a traffic signal pole, rolled over. Passenger, a 50-year-old woman from Fort Myers, pronounced dead at the scene. Driver, 48, also from Fort Myers, hospital with non-life-threatening injuries. FHP investigation remains open; FHP has released no name, cause, speed, or impairment finding, and nothing about a driver-assist system.
- **What Tesla told the government:** SGO filing marks engagement "Verified Engaged" — Tesla confirmed through its own telematics that Autopilot or FSD was on. Pre-crash speed 39 mph. Collision with a pole or tree, airbag deployment, damage to front and top of the car, consistent with the rollover. Tesla checked the boxes for event data recorder, telematics, video, and "other," and says it learned of the crash through its own telematics, not from the media.
- **What Tesla redacted:** the crash narrative, the software version, and whether the road was inside the system's operating domain — all as "confidential business information." Electrek notes this is the same treatment Tesla gives 99.9% of its reports, and that Tesla is the only high-volume reporter withholding all the details Lambert seeks.
- **The timestamp trick:** Tesla logged the incident at 03:41 UTC on October 1, which is 11:41 p.m. Florida time on September 30 — two minutes off FHP's 11:43 p.m. Because the UTC timestamp crosses midnight, Tesla's record lists the crash in October. Anyone checking Tesla's data against September crashes misses it.
- **The second Naples crash (May 2026):** a Model 3 with the system engaged at 71 mph hit an overturned box truck on I-75 at Pine Ridge Road, killing three people — two passengers and a man who had stopped to help. FHP investigated both Naples crashes; neither was ever publicly tied to Autopilot or FSD.
- **El Dorado Hills Model Y:** left a parkway, hit a tree, caught fire, killing three of the four people inside. Tesla's SGO report said Autopilot or FSD was engaged. Local media reported the crash without mentioning a driver-assist system.
- **The tally:** as of November 16, Lambert has identified 12 crashes claiming 16 lives — drivers, passengers, a man who stopped to help at a crash scene, and a motorcyclist.
- **The record month:** September 2026 set a new record of 264 Tesla driver-assist crashes reported to NHTSA, beating July's 236.
- **The caveat, stated plainly:** the SGO reports do not by themselves establish that Autopilot or FSD caused any of these crashes. Engagement within 30 seconds of impact is what the order requires Tesla to report. The point of the investigation is not causation — it is that the public record of these crashes contains no trace of the automation at all.

## Original contribution (Rex's math and synthesis)
1. **The rate is accelerating, not plateauing.** September's 264 driver-assist crash reports beat July's 236 by 28 reports, an 11.9% jump in two months. The monthly record keeps moving up, not down.
2. **Two fatal driver-assist crashes, one city, zero public links.** Naples, Florida, population ~22,000, appears twice in a single NHTSA release — a May I-75 crash (3 dead) and a September Golden Gate Parkway rollover (1 dead) — and in neither case did the public record ever mention the system. The hidden-crash problem is not a one-off; it clusters.
3. **The UTC filing quirk is a second hiding mechanism.** The first was redaction. The second is bookkeeping: a crash that happened at 11:43 p.m. on September 30 is filed under October 1 because Tesla logs in UTC. Any researcher, journalist, or regulator reconciling monthly counts will undercount September and never know it. September's record 264 may itself be an undercount of September crashes.
4. **16 lives, 12 crashes — and the denominator is unknown.** Tesla has the video, the EDR, and the telematics for the Naples crash and says so in its own filing. The evidence exists. What does not exist is any public route to it: NHTSA's public data excludes CBI-claimed material, and Tesla claims it on 99.9% of reports.

## What this does NOT prove (limitations)
- Engagement is not causation. Nothing in the SGO filings proves Autopilot or FSD caused any of these three crashes. The driver may have been distracted, impaired, or at fault; FHP has released no cause finding for Naples.
- The 264 September reports are raw report counts, not crash rates. They are not adjusted for the number of Teslas on the road, miles driven with the system engaged, or reporting differences between manufacturers. NHTSA itself notes limitations in the completeness and quality of the data.
- The crash dates for the I-75 Model 3 (May 2026) and the El Dorado Hills Model Y were not pinned to a day in the sources read; do not assert exact dates for them.
- Electrek's matching method is sound but secondhand: the site is reporting Lambert's matches, not re-matching the SGO data itself. Say so.

## Strongest counterargument
Tesla complied with the law. It filed every one of these crashes under the Standing General Order, on time, with engagement status verified by its own telemetry. The redactions are lawful CBI claims, and NHTSA's public data carries the same exclusions for every manufacturer. The police investigated the Naples crash and will determine its cause; a driver-assist system being engaged does not make it the cause, and publishing "FSD was on" next to a dead passenger invites readers to draw a causal line the evidence does not support. The counter to the counter: compliance that hides the ball is still hiding the ball. Tesla has the video of a fatal crash, knows whether its system steered the car off the road, and has chosen to file that knowledge as a trade secret. When the same company publishes its data eagerly in cases that flatter it (the Katy crash), the selectivity is the story.

## Actionable takeaways
- If you drive a Tesla with Autopilot or FSD: the system being engaged does not make the car self-driving, and in a fatal crash the public record may never mention it was on. Treat every mile as your responsibility — because legally and practically, it is.
- If you are investigating or reporting a Tesla crash: check NHTSA's SGO data by VIN and timestamp, and remember Tesla logs in UTC — a late-night crash can be filed under the next day, and the next month.
- The SGO database is public at NHTSA. The redactions are not a reason to stop looking; they are the reason to keep looking.

## Headline options
- "Seven Dead, Three Crashes, One Release: Tesla's Hidden FSD Tally Hits 16 Lives"
- "Tesla's Driver-Assist Was On in Three More Fatal Crashes. The Public Was Told Nothing."
- "Naples Has Two Fatal Tesla Crashes. Neither Was Ever Tied to Autopilot."

## Kicker
Investigation
