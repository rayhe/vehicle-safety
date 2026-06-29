# NTSB Phone Lockout Recommendation — Research Notes

## Core thesis
In December 2011, the NTSB recommended that phone manufacturers build lockout technology to disable phone functions while driving. 14 years later, no manufacturer has built it. Apple and Google built voluntary "Do Not Disturb While Driving" features instead — easily dismissed with a single tap. ~42,000 people have died from distracted driving since the recommendation.

## Timeline of the recommendation
1. **Dec 13, 2011**: NTSB issues Recommendation **H-11-47** to CTIA (The Wireless Association) and CEA (Consumer Electronics Association). Triggered by Gray Summit, Missouri crash investigation — 19-year-old pickup driver sent/received 11 texts in 11 minutes before rear-ending a tractor-trailer, causing pileup with school buses. 2 killed, 38 injured.
   - Exact language: "Encourage the development of technology features that disable the functions of portable electronic devices within reach of the driver when a vehicle is in motion; these technology features should include the ability to permit emergency use of the device while the vehicle is in motion and have the capability of identifying occupant seating position so as not to interfere with use of the device by passengers."
   - NTSB Chairman Deborah Hersman: "No call, no text, no update, is worth a human life."

2. **Dec 14, 2011**: Transportation Secretary Ray LaHood publicly rejected the ban recommendation the next day. "Hands-free calling is not the biggest problem in America."

3. **Sep 2017**: Apple introduces "Do Not Disturb While Driving" in iOS 11 — silences notifications, can be dismissed with a single tap ("I'm Not Driving"), does NOT disable phone functions.

4. **2018**: Google introduces "Do Not Disturb" driving detection in Android 9 Pie — similarly voluntary.

5. **2020**: NTSB escalates, recommends phone manufacturers directly (not just trade groups) to "install lock-out mechanisms that automatically disable distracting features while driving."

6. **Sep 2021**: Apple upgrades to "Driving Focus" in iOS 15 — still voluntary, can be deleted entirely from settings.

7. **Jul 1, 2025**: NTSB reiterates 2020 recommendation after Wisconsin crash. 17-year-old texting driver killed 13-year-old waiting to board school bus (Excelsior, WI, May 12, 2023). "Safety Alert to U.S. Drivers: Put Down the Phone."

8. **2026**: 14.5 years since original recommendation. No phone manufacturer has implemented a mandatory lockout.

## What NTSB asked for vs what was built
| Feature | NTSB Recommendation | Apple/Google Response |
|---------|---------------------|-----------------------|
| Phone functions | DISABLE them | SILENCE notifications only |
| Activation | AUTOMATIC, mandatory | User can disable or delete entirely |
| Bypass | Emergency calls only | One tap "I'm Not Driving" |
| Driver detection | Must identify seating position | No position detection; affects everyone |
| Scope | Texting, calling, browsing | Just notification suppression |

## Death toll during the gap
Using comparable NHTSA methodology (2010+ baseline):
- 2012: 3,380
- 2013: 3,169
- 2014: 3,197
- 2015-2024: 32,717 (NHTSA official statistic)
- **Total 2012-2024: 42,463 distraction deaths**

NHTSA acknowledges this is an undercount. Virginia Tech Transportation Institute estimates the true figure is ~3x higher.

## Key sources
1. NTSB, "No Call, No Text, No Update Behind the Wheel" (Dec 13, 2011) — ntsb.gov
2. NTSB Recommendation H-11-47 to CTIA/CEA (2011) — ntsb.gov
3. NTSB, "Safety Alert to U.S. Drivers: Put Down the Phone" (Jul 1, 2025) — ntsb.gov
4. NHTSA, "Distracted Driving 2024" — nhtsa.gov (3,208 killed, 32,717 from 2015-2024)
5. NHTSA, Phase 2 Distraction Guidelines (Dec 5, 2016) — voluntary, not mandatory
6. BTS, Distracted Driving Fatalities 2005-2015 — bts.gov (year-by-year data)
7. NSC/NTSB joint statement on distraction (2020) — 25,926 killed 2011-2018

## Angle: Not covered by existing articles
- `distracted-driving-undercount-3x.html` — about the NHTSA data methodology, not the recommendation
- `distraction-ban-two-year-decay.html` — about state texting ban effectiveness, not phone lockout tech
- `thirty-six-thousand-floor.html` — mentions phone lockout as one of several needed interventions
- `speed-phone-compound-risk.html` — about speeding/phone correlation, not the recommendation
- None cover the H-11-47 recommendation history, the Apple/Google voluntary response, or the 14-year gap

## Strongest counterargument
Driver-passenger position detection was and remains technically difficult. A lockout that can't tell who's driving would disable phones for all vehicle occupants — affecting 4-5 people to stop 1. This is the passenger-penalty problem. Apple/Google chose voluntary features in part because mandatory lockout would generate massive user backlash and customer complaints for passengers.

## Limitations
- NHTSA's distraction-affected classification depends on police officer judgment at the crash scene; officers must determine distraction from witness statements and phone records, which are not always available
- The 42,463 figure includes ALL distraction (eating, adjusting radio, etc.), not just phone use; NHTSA attributes ~397 deaths in 2023 specifically to cell phone-involved crashes
- Phone lockout technology alone wouldn't eliminate all distraction deaths
- No controlled study exists comparing mandatory lockout to voluntary features
