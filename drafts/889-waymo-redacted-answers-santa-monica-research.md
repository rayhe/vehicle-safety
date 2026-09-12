# Article #889 — Research Notes

## Angle
In January, a driverless Waymo Jaguar I-Pace struck a 9-year-old girl at school drop-off in Santa Monica. NHTSA opened preliminary evaluation PE26001 on Jan 29. In March, ODI sent Waymo 12 questions: how do you set speeds in school zones, what complaints have you gotten near schools, show us the software. Waymo answered. In August, NHTSA began publishing the answers. Every substantive answer is fully redacted as "confidential business information." TechCrunch broke the story Aug 21 (posted to NHTSA's site only after TechCrunch inquired); a follow-up this week notes Waymo has now completed its submissions and the public file is still black bars.

The paradox: Waymo's public posture is radical transparency ("transparent when incidents occur," voluntary same-day SGO report, national ad campaign claiming the system is 10x safer than a human). Its legal posture: every answer to the defect investigator about how the car behaves around your kid's school is a trade secret. The exact questions the public most wants answered are the ones the public is legally barred from reading.

## Journalist
Vin Wreckage — Existential Dread Columnist. Paradoxes, counterintuitive findings, cosmic absurdity. The catchphrase opener: "Here's a fun fact that will ruin your morning commute." Beat fit: the company that hit a child is also the company that won't tell you how it drives near schools, and both facts can be true while the math says the crash was nearly unavoidable. This is a dread story, not an outrage story.

## Kicker
Existential Dread

## Working Headline
"Waymo Answered 12 Questions About Hitting a 9-Year-Old. Every Answer Is Redacted."

Alternatives:
- "The Robot Hit a Child at School Drop-Off. The Explanation Is Confidential."
- "Waymo Says It Braked Harder Than You Would Have. It Won't Tell Regulators How It Drives Past Your Kid's School."

## Core Data (Primary Sources)

### The crash (NTSB preliminary report, released March 3, 2026)
- Jan 23, 2026, ~8:30 a.m. PST: 2024 Jaguar I-Pace with Waymo 5th-gen ADS, unoccupied, struck a 9-year-old student on 24th Street near Pearl Street, Santa Monica [1][2]
- The vehicle had completed a passenger drop-off on Pearl Street, turned left onto 24th St, proceeded north
- Crash location: ~40 feet north of the end of an adjacent 15-mph school zone; the area is posted 25 mph [2]
- A queue of five vehicles had formed in the southbound lane at the stop-controlled intersection. The child exited the right rear door of the fifth vehicle, moved toward the front of her car, and entered the roadway "crossing at a rapid pace" between her vehicle and a Chevrolet Suburban stopped ahead of it [2]
- Waymo traveling north at 17 mph; braked; contact near the front-right headlight assembly; child fell, walked to the east curb on her own; vehicle "came to rest within the northbound travel lane almost immediately" [2]
- Minor injuries; no hospital transport; Waymo called 911 [1][3]
- Weather clear, roadway dry, daylight [2]

### The investigation (NHTSA PE26001, opened Jan 29, 2026)
- ODI opened the preliminary evaluation to investigate "whether the Waymo AV exercised appropriate caution given, among other things, its proximity to the elementary school during drop off hours, and the presence of young pedestrians and other potential vulnerable road users" [4]
- Scope: "intended behavior in school zones and neighboring areas, especially during normal school pick up/drop off times, including but not limited to its adherence to posted speed limits," plus post-impact response [4]
- Waymo filed its required SGO 2021-01 report Jan 28 [4]
- In March, ODI sent a series of questions: how Waymo establishes vehicle speeds in school zones, whether it received complaints about robotaxi behavior near schools, details about the software [1]
- Waymo got extensions (May deadline pushed); submitted some responses in July, completed submissions the week of ~Sep 4 [1][5]
- First batch posted to NHTSA's site Aug 21 "after TechCrunch inquired about them earlier in the week" [1]
- All posted responses fully redacted, citing "confidential business information" [1][5]
- As of Sept 2026: no defect determination; investigation ongoing [5]

### Waymo's defense (company blog / statements)
- "The Waymo Driver braked hard, reducing speed from approximately 17 mph to under 6 mph before contact was made" [3]
- "Our peer-reviewed model shows that a fully attentive human driver in this same situation would have made contact with the pedestrian at approximately 14 mph" [3]
- "This significant reduction in impact speed and severity is a demonstration of the material safety benefit of the Waymo Driver" [3]
- Company pledge: "committed to improving road safety... Part of that commitment is being transparent when incidents occur" [4]
- Waymo voluntary contacted NHTSA the same day as the crash [5]
- Schwall (Waymo): "Our mutual goal is for Waymo to provide relevant information that facilitates ODI's investigation, while avoiding extraordinary production and review burdens for Waymo and NHTSA ODI" [6]
- Separately, Waymo's first national ad campaign (FIFA World Cup, Fox) claims the system is "10 times safer than a human driver" in its operating cities [7]

### School-bus / school-zone context
- NTSB is also investigating reports of Waymo vehicles illegally passing stopped school buses; Austin ISD identified at least 19 incidents [8]
- Waymo previously issued a voluntary software recall for passing stopped school buses [7]

## Original Contribution
1. **The stopping math.** 17 mph = 24.9 ft/s; 6 mph = 8.8 ft/s. At hard braking (~0.6g, 19.3 ft/s^2): d = (24.9^2 - 8.8^2)/(2*19.3) = (620-77)/38.6 ≈ 14 ft. So the child was detectable for roughly 14 feet — about 0.55 seconds at 17 mph. The robot saw her "as soon as they began to emerge from behind the stopped vehicle" and still made contact. This quantifies unavoidable: no human driver stops in half a second. The crash was not a reaction-time failure. Which means the ONLY safety question that matters is the pre-crash speed choice through a drop-off corridor, and that is exactly what NHTSA asked about, and exactly what got redacted.
2. **The speed-zone arithmetic.** 17 mph in a 25-mph posted zone, 40 feet past a 15-mph school zone boundary. Legal speed, wrong question: NHTSA asks "appropriate caution," not "posted limit." Should a robotaxi slow at the boundary of a 15-mph zone during drop-off? Waymo knows its answer. You don't.
3. **The transparency ledger.** Public posture: voluntary same-day report, "transparent when incidents occur" pledge, 10x-safer ad campaign. Legal posture: 12 questions answered, 100% of substance redacted. Both true simultaneously. The public learns nothing about school-zone behavior from this probe — except through Waymo's marketing.

## Limitations (must state in article)
- We have not seen the redacted content; it may be entirely benign trade-secret material (school-zone speed-mapping methodology, complaint logs, software docs are exactly what FOIA Exemption 4 exists for)
- NHTSA has not established a defect; PE26001 is a preliminary evaluation, which often closes with no action
- NTSB's final report is ~12 months out (expected early 2027); the preliminary report is factual, not causal
- Waymo's "14 mph human" figure comes from Waymo's own peer-reviewed-but-company-cited model, not an independent reconstruction
- Redactions of confidential business info in ODI probes are routine across all automakers, not Waymo-specific misconduct

## Strongest Counterargument (must state at full strength)
The child darted midblock at a rapid pace from behind a Suburban into a lane of moving traffic — the textbook unavoidable crash. Waymo's system detected her the instant she emerged, braked hard, and hit at under 6 mph with minor injuries; by Waymo's modeling a perfect human hits at 14 mph. The company reported the crash the same day, called 911, and has one of the strongest aggregate safety records in the industry. Redacting CBI in a federal defect probe is what every automaker does — Ford, GM, Tesla all claim it. Nothing about black bars proves anything except that Waymo's lawyers understand FOIA. If you want the villain here, it's the double-parked queue at school drop-off, not the robot that stopped for half of it.

## Verifiability
All claims trace to: NTSB preliminary report (via SMDP/shackedmag summaries of the NTSB doc), NHTSA PE26001 investigation summary, TechCrunch Aug 21 reporting, Webull/Benzinga follow-up, Waymo blog statements (via Reuters/Guardian coverage), KFI (school-bus incidents), Gizmodo/WSJ (ad campaign).

## Actionable Insights (required)
- The PE26001 investigation file on NHTSA's site is public and searchable; whether ODI closes it without action or upgrades to an engineering analysis is the thing to watch — that decision, not the redactions, is the signal
- School drop-off zones remain chaotic for every driver type: the queue of five stopped cars, the child darting between them, the crossing guard — none of that is robot-specific. Teach kids never to cross between queued vehicles, and treat any school drop-off corridor as a 15-mph mindset regardless of the posted sign
- For robotaxi riders and parents: Waymo's aggregate safety stats are published voluntarily; its incident-specific answers are legally confidential. Know which one you're reading when you see the next safety claim
