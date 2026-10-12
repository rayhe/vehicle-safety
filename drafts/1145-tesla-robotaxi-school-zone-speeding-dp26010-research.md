# Research: NHTSA DP26010 — Tesla Robotaxi School-Zone Speeding (Article #1145)

## The story
On Friday, October 9, 2026, NHTSA's Office of Defects Investigation opened **Defect Petition DP26010**: an allegation that Tesla's driverless robotaxis exceed posted speed limits in **active school zones** with the Automated Driving System (ADS) engaged. The petition (ODI No. 11766676) was filed September 23, 2026 by an unnamed petitioner with three video links as evidence. NHTSA tallies four related incidents: one ODI complaint plus three social-media reports. No crashes, injuries, or fatalities are recorded.

## Why it's newsworthy (kill test: PASS)
- **Freshest possible news:** the resume hit NHTSA's site Monday Oct 12 (today); every major outlet (WSJ/Bloomberg Law, Electrek, IBD, Seeking Alpha) covered it within the last 20 hours. Not previously covered in our queue (grep for robotaxi/school zone/DP26010: no match).
- **Novel angle:** the robotaxi regulatory debate has always been about *crash outcomes*. This is the first federal action about *rule compliance* — the machine can't do the one thing robots were supposed to ace: read a sign with a flashing yellow beacon and slow down at the right hour. School zones are the most rule-bounded environment on public roads (fixed low limits, time-of-day windows, flashing beacons), i.e., exactly the deterministic environment where software should beat humans. It reproduces the human failure instead.
- **First federal fleet-size number:** NHTSA estimates the subject population at **~1,000 MY2026 vehicles** (Model Y and Cybercab). Tesla has never disclosed fleet size; community trackers counted only "a few dozen" active cars as of June. The ~1,000 figure is likely derived from Texas DMV AV certifications — meaning most certified cars aren't in active service, or the fleet is scaling faster than anyone can see.
- **Third federal action in ~5 weeks** against the driverless fleet: (1) Audit Query AQ26002 on how the steering-wheel-less Cybercab was certified (Tesla's sworn answers due **Oct 30**), (2) a Special Order on the same certification question, (3) now DP26010. A pattern, not an isolated file.
- **A clock is running:** under 49 CFR Part 552, NHTSA has 120 days from the Sept 23 filing to grant or deny the petition — deadline ~Jan 21, 2027. A grant means a formal defect investigation, which can end in a recall of a vehicle with no steering wheel.

## Primary sources (verified Oct 12, 2026)
1. **NHTSA ODI opening resume, DP26010** (opened Oct 9, 2026; petition ODI 11766676, filed Sept 23, 2026): subject "Exceeds posted speed limits in active school zones"; MY2026 Tesla Model Y and Cybercab robotaxis, ADS engaged; population 1,000 (estimated); 4 incidents (1 ODI complaint + 3 social media); 0 crashes/injuries/fatalities. (Via reporting below; link NHTSA parent page per guide — no direct ODI doc URL verified.)
2. **Electrek, Oct 12, 2026** — "NHTSA weighs probe into claims Tesla Robotaxis speed in school zones": DP opened Friday Oct 9; 120-day clock; 1,000-vehicle estimate as first federal fleet number; Texas DMV certification likely the source of the count. https://electrek.co/2026/10/12/nhtsa-tesla-robotaxi-school-zone-speeding-petition/
3. **TeslaNorth, Oct 12, 2026** — "NHTSA Opens School Zone Review of Tesla Robotaxis": petition evidence = 3 video links; resume names no cities, speeds, dates, or videos; Tesla has not responded publicly; Cybercab Austin fleet past 300; AQ26002 answers due Oct 30. https://teslanorth.com/2026/10/12/nhtsa-robotaxi-school-zone-speeding/
4. **teslarobotaxi.com, Oct 12, 2026** — DP26010 explainer: defect petition is early review, not a granted investigation and not a recall. https://teslarobotaxi.com/nhtsa-dp26010-robotaxi-school-zone-petition/
5. **Bloomberg Law / WSJ (Kelly Cloonan), Oct 12, 2026** — third federal action framing; Cybercab + Model Y, 2026 model year. https://news.bloomberglaw.com/artificial-intelligence/tesla-faces-us-probe-over-claim-robotaxis-speed-in-school-zones
6. **driveteslacanada.ca, Oct 12, 2026** — "Tesla Robotaxis face NHTSA school zone speeding inquiry": 4 incidents, zero collisions/injuries/fatalities confirmed again. https://driveteslacanada.ca/?p=125265

## Supporting data (human baseline — the irony fuel)
- **NHTSA Traffic Safety Facts, School-Transportation-Related Crashes 2015–2024** (DOT HS 813 731): 962 fatal crashes, 1,069 killed (avg 107/yr); 70% occupants of other vehicles, 15% pedestrians, 11% school-vehicle occupants. 19% of fatalities were school-age. Most school-age pedestrian deaths 7:00–7:59 a.m. https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813731
- **UNL / MDPI Sustainability, May 2026** (Khattak & Haque): 378,506 vehicles observed across 18 school-zone sites; 85th-percentile speeds "often exceeded posted speed limits during both active and passive school zone periods"; speeds averaged 6.2 mph higher in passive periods; crash rates higher during active periods. https://www.mdpi.com/2071-1050/18/9/4517
- **Jenoptik / Palm Beach County survey (via Police1, Feb 2026):** 25,000+ vehicles; over 70% of drivers speeding 20+ mph over the limit during morning drop-off and afternoon pickup; over 30% of violators exceeded 30 mph over. https://www.police1.com/traffic-safety/saving-lives-in-school-zones
- **National SAFE KIDS Campaign national survey** (63 school zones, 29 cities, 16,714 vehicles): 65% of drivers over the limit; ~25% at least 10 mph over; 5% at least 20 mph over. https://www.automotive-fleet.com/8494/nearly-two-thirds-of-drivers-speed-in-school-zones-survey-says
- **UniSC / Waze study, Oct 2026** (techxplore): in active school zones, 38% of drivers kept speeding above the 25-mph limit even with an app alert. https://techxplore.com/news/2026-10-drivers-app-dodge-fines.html

## Original contribution (this article's novel finding)
1. **The compliance-paradox frame:** every prior robotaxi federal action was about crash outcomes (stopping for school buses, emergency vehicles, certification of a wheel-less car). DP26010 is the first about *traffic-law compliance with zero crashes in the evidence file* — NHTSA's defect authority being aimed at a machine that breaks the law politely, without hurting anyone yet.
2. **The fleet-size arithmetic:** ~1,000 estimated vehicles vs. community trackers' "few dozen" active (June) and 300+ Austin Cybercabs (Sept). The gap implies either rapid invisible scaling or a large certified-but-parked inventory — either way, the first hard number on a fleet Tesla won't quantify.
3. **The perception-stack autopsy (Mia's beat):** why school zones defeat camera-first ADS — conditional limits (time-of-day + school-day calendars), flashing beacons vs. static signs, map-data staleness, painted road text. The deterministic environment turns out to be the hardest because the rule lives in a *schedule*, not on a sign.

## Limitations (must state in article)
- Evidence file is thin: 3 social-media videos + 1 ODI complaint; 4 incidents, zero crashes. Speeds, dates, cities, and whether zones were *active* are undisclosed in the resume.
- NHTSA has found no defect; DP is the first rung (petition review), not a Preliminary Evaluation. The 120-day deadline (~Jan 21, 2027) may end in a denial.
- Petitioner's identity and video selection are unknown — possible selection bias (a critic filming one bad run).
- We don't know the magnitude of the alleged speeding (1 mph over vs. 20 over).

## Strongest counterargument (must state at full strength)
Humans are catastrophically worse at this: 65–70% of human drivers speed in school zones, many by 20+ mph, and school-transportation crashes kill ~107 people a year — virtually all of them human-caused. Four videos of a robot going a few mph over, with zero crashes across an estimated 1,000 vehicles, may make Tesla's fleet the most school-zone-compliant "driver" on the road. Punishing the robot for a human-normal sin while humans keep killing kids would be regulatory theater. And if the zones weren't actually active when filmed, there's no violation at all.

## Journalist / kicker
**Mia Crumplezone** (safety tech beat; the perception-stack autopsy is hers). Kicker: **Investigation**.

## Headline
"NHTSA Asked Tesla's Robotaxis to Slow Down for a School Zone. Four Videos Say They Didn't."

## Slug
1145-tesla-robotaxi-school-zone-speeding-dp26010

## Actionable takeaways (required)
- If you live near Austin/Dallas/Houston robotaxi service areas: the school-zone petition is public; the 120-day decision lands ~Jan 21, 2027 — that date, not today's headlines, is when this becomes a finding or a dismissal.
- For parents: the human baseline is the real story — 65–70% of drivers speed in school zones. Walk your kid's route at drop-off; the danger is the other parents, not the robot.
- For the industry: conditional speed limits (time-of-day, school-day) are now a federal compliance surface for ADS. Map-data freshness and beacon detection belong in every safety case.
- Check the ODI resume yourself when NHTSA posts updates; DP files that get granted become investigations, and investigations become recalls.
