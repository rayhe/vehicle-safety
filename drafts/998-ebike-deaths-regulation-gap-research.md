# Article #998 Research Notes — "E-Bikes Are Motorcycles Regulated as Bicycles"

**Journalist:** Mia Crumplezone (safety engineering editor — design/regulation gap is her beat)
**Kicker:** The Gap
**Slug:** 998-ebike-deaths-regulation-gap
**Ship target:** 2027-04-04 (behind #997, 1/day gate consumed 2026-09-27)

## Kill test: PASS
- **Newsworthy:** CPSC April 2026 report is the first federal hazard-pattern breakdown of e-bike deaths; PA's Abby's Law (Aug 2026) and UK battery-fire FOI (Sep 2026) make it current.
- **Novel angle:** No prior Crash Report article covers e-bikes (queue grep: 0 hits). The novel contribution is a cross-tab of the CPSC hazard decomposition: 55% of e-bike deaths are motor-vehicle collisions (motorcycle-class traffic exposure) while the vehicles carry bicycle-class regulation, bicycle-class protection (40% helmet use in the injury study), and zero crash standards.
- **Data:** 3+ primary sources below.

## Primary sources (all verified in this run)

### 1. CPSC — "Micromobility Products-Related Deaths, Injuries, and Hazard Patterns: 2017–2024" (April 2026)
URL: https://www.cpsc.gov/Research--Statistics/Sports--Recreation/Micromobility-Products-Related-Deaths-Injuriesand-HazardPatterns-2017%E2%80%932023 (report page; PDF mirrored at abc17news.b-cdn.net, read in full 2026-09-27)
- 310 e-bike fatalities 2017–2024; year trend: 6 (2017), 6 (2018), 6 (2019), 18 (2020), 35 (2021), 57 (2022), 91 (2023), 97 (2024). **16x growth 2019→2024.**
- 155,200 ED-treated e-bike injuries 2017–2024 (NEISS national estimate).
- Hazard decomposition (Table 1.4): 170 deaths in collisions with moving/parked motor vehicles (**55%**), 61 control-issue deaths (fixed objects, curbs), 19 lithium-ion battery fire deaths (13 incidents), 19 pedestrian-involved deaths, 35 unknown falls.
- 82% of e-bike decedents male (254/310). Of 92 micromobility deaths among riders 65+, **75 (82%) involved e-bikes**.
- 2024 injury special study: only **40% of injured e-bike riders wore helmets**; 75% had blinking lights/headlamp; **15% were traveling 20+ mph** at time of crash.
- Legal definition (CPSA §38): pedals + motor <750W, max **<20 mph** on level surface — yet 15% of injuries occurred at 20+ mph, and class-3 e-bikes legally assist to 28 mph in most states.
- Caveats (from the report itself): CPSRMS fatality data is **anecdotal, not nationally representative**; 2023–2024 counts likely incomplete (death-cert lag up to 2 years).

### 2. PennDOT via PA Chiefs of Police Association op-ed (Scott Bohn, Aug/Sep 2026)
URL: https://www.cnhinews.com/pennsylvania/opinion/columns/article_501c4b07-6405-5043-b375-5b0d348aefff.html
- PennDOT: PA bicyclist fatalities rose from **19 (2024) to 28 (2025), with 12 killed riding e-bikes** — 43% of the state's bicyclist deaths on e-bikes.
- 12-year-old York County boy killed on e-bike in collision with pickup (summer 2026); 12-year-old Abigail "Abby" Gillon killed in e-scooter crash (2025) → catalyst for Senate Bill 1008 ("Abby's Law": under-16 prohibition, under-18 helmet mandate, 20-mph limit).

### 3. BBC Verify via National Headlines (Sep 2026)
URL: https://www.nationalheadlines.co.uk/2026/09/e-bike-battery-fire-deaths-reach-18-as-incidents-top-2000-since-2019/
- FOI to all 49 UK fire services: **18 e-bike battery fire deaths**, 2,000+ incidents since 2019; incidents rose 32 (2019) → 605 (2025). Nearly half started in homes/garages.
- Cross-check with CPSC: US battery-fire e-bike deaths = 19 (2017–2024) — same order of magnitude as the UK's 18, suggesting the fire risk is not a US-manufacturing quirk.

## Original contribution (the analysis nobody ran)
**Motorcycle-class exposure, bicycle-class protection.** Cross-tab the CPSC hazard decomposition against the regulatory definition:
- 55% of e-bike deaths are motor-vehicle collisions — the same crash type that dominates motorcycle and bicycle deaths — but e-bikes operate at speeds where the CPSC's own 20-mph definition is violated in 15% of injury cases, class-3 bikes assist to 28 mph, and riders wear helmets at a 40% rate with zero federal crash standards, zero lighting mandates, and no licensing. A motorcycle that goes 28 mph needs DOT helmets, lights, and a license. An e-bike that goes 28 mph needs nothing.
- **Senior-rider concentration:** 82% of 65+ micromobility deaths were e-bike riders — e-bikes restore moped-class speed to the age cohort with the slowest reaction times and most fragile bones.
- **Growth math:** 6 deaths (2019) → 97 (2024) = 16x in five years, outpacing the fleet growth narrative; the 2023–2024 plateau (91→97) may be reporting lag, not safety improvement.

## Strongest counterargument (full strength)
E-bikes displace car trips — every e-bike mile ridden is a car mile not driven, and car occupants kill ~40,000 people a year. The 310 deaths over 8 years are a rounding error next to motor-vehicle carnage, and restricting e-bikes could push riders back into cars, increasing total deaths. The helmet stat cuts both ways: 40% helmet use is roughly double the bicycle average, suggesting e-bike riders are already more safety-conscious than the cyclists they replaced.

## Limitations (dedicated accounting)
- CPSC fatality counts are anecdotal (CPSRMS), not nationally representative; 2023–2024 counts are likely incomplete due to death-certificate lag. Treat 97 (2024) as a floor.
- FARS does not break out e-bikes from pedalcyclists, so there is no per-mile fatality rate — no denominator. All comparisons are counts and shares, not rates.
- The 55% motor-vehicle share is a hazard association, not causation; fault data is not in the CPSC report.
- UK fire-death comparison is suggestive, not controlled (different fleets, reporting regimes).
- Battery-fire deaths (19) are 6% of e-bike deaths — real but secondary to traffic.

## Actionable takeaways (required gate)
1. Wear a helmet: only 40% of injured riders did, and 17% of Canadian e-scooter ER cases involved head injury (cross-source).
2. Ride lit: 75% of injured riders had lights — join them; 10% of injuries cited visibility.
3. Know your class: class-3 bikes (28 mph assist) are mopeds in all but name; ride them like it.
4. Don't modify batteries: CPSC ties fire deaths to homemade packs and repair shops; charge outside living spaces (UK: half of fires started in homes/garages).
5. For parents: PA's Abby's Law logic — under-16s on 28-mph machines is the sharp end of the data (York County 12-year-old vs. pickup).

## Queue-dupe check
Grep of all 203 queue entries for e-bike/ebike/scooter topics: **0 hits**. Impairment/motorcycle/recall angles covered elsewhere do not touch this topic.
