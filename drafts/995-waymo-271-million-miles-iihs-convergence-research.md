# Research — #995: Waymo 271M Miles vs the IIHS Audit

**Slug:** `995-waymo-271-million-miles-iihs-convergence`
**Journalist:** Axle McScatter (data visualization editor — beat is statistical roundups and methodology pieces)
**Kicker:** By The Numbers
**Dateline:** September 27, 2026

## Anchor event
Sept 24, 2026 — Waymo published its largest safety update yet: 271.3 million rider-only miles through June 2026, first time quoting avoided-injury counts (841 injury crashes, 55 serious). Two months earlier (July 2026), IIHS published an *independent* audit of AV crash rates (Eric Teoh, director of statistical services) covering 50M Waymo miles. The two datasets converge.

## Kill test
- **Newsworthy:** YES. Published 3 days ago (Sept 24). First time Waymo has stated avoided-injury counts rather than just percentage reductions. The independent IIHS corroboration is the news most coverage buried.
- **Novel angle:** The convergence frame. Waymo says 82% fewer injury crashes (self-reported, adjusted benchmarks). IIHS independently found 81% fewer injury crashes — within one point — after throwing out 78% of AV-reported crashes as non-police-reportable. Nobody has run the two analyses side by side: the independent audit lands within a point of the company claim. That is the story.
- **Not a data dump:** methodology-forensics narrative. The piece's thesis: the most important number in the update isn't 95% — it's 22%, the share of AV crashes IIHS judged reportable, and the gap survived that conservative filter.
- **No duplication:** queue Waymo items are brake-jab whiplash (#827), Dallas fatal exoneration (#881), redacted answers (#889) — all incident narratives. No safety-data convergence piece exists. Grep for "convergence": zero hits.

## Verified facts (with sources)

1. **Waymo safety update, Sept 24, 2026.** 271.3 million rider-only (fully driverless) miles through June 2026 across Phoenix, San Francisco Bay Area, Los Angeles, Austin, Atlanta. Claims: 82% fewer injury-causing crashes and 95% fewer serious-injury-or-worse crashes than human-driver benchmarks; 841 fewer injury crashes, 55 fewer serious-or-worse; 93% fewer pedestrian injury crashes, 86% fewer cyclist, 82% fewer motorcyclist; 82% fewer airbag-deployment crashes. Added 50M miles in Q2 (up from ~221M at end of March). Counts crashes regardless of fault. (electrek.co/2026/09/24, cybercabcollective.com/news/waymo-271-million-driverless-miles-safety-results, Sept 24-25 2026)
2. **Methodology attached to Waymo's claim.** Human benchmarks adjusted for the streets where the fleet operates; any-injury benchmark includes a 32% adjustment for human crash underreporting; serious-injury benchmark does not. Built from SGO crash reports + police reports for serious injuries. Waymo acknowledges no perfect comparison exists. (cybercabcollective.com, Sept 24, 2026)
3. **IIHS independent study, July 2026 (Teoh).** Analyzed SGO crash reports from Waymo, Cruise, Zoox, others 2021-2024 in SF, Phoenix, LA, Austin. Cleaned the data: removed duplicates, automation-not-engaged, off-public-road, no-real-crash; then applied a "reasonable person would report to police" filter (airbag = reportable; pain-complaint-left-scene = not). Of 736 public-road automation-engaged crashes, only 22% judged police-reportable: 89 Waymo, 50 Cruise, 10 Zoox, 10 others. Mileage available only for Waymo (~50M driverless miles vs 222B human miles same cities/period). Results: 68% fewer crashes overall (76% Phoenix, 71% LA, 35% SF, 4% *higher* Austin, small sample); 85% fewer single-vehicle crashes; 81% fewer injury crashes. Teoh: "encouraging signs for the future of driverless vehicles" but "we need to get the data collection system right" for expansion monitoring. (iihs.org/news/detail/waymos-driverless-cars-crash-less-often-than-people)
4. **Human baseline (NHTSA).** 2025: 36,640 deaths, rate 1.10 per 100M VMT (second-lowest ever). 2024: 39,254. Q1 2026: 7,770 deaths, rate 0.99 — lowest first-quarter rate since 2014. ~100 deaths/day. (nhtsa.gov, rosap.ntl.bts.gov CrashStats, Reuters July 2026)

## Original contribution (novel calculations)
- **Convergence:** IIHS independent injury-crash reduction (81%) vs Waymo self-reported (82%). The independent number lands within one percentage point of the company number — despite IIHS discarding 78% of AV-reported crashes before counting. That near-match is the verification nobody has stated plainly.
- **Exposure arithmetic:** 271.3M miles / 12,000 mi per average driver-year = ~22,600 driver-years of exposure in one dataset. Still dwarfed by ~3.2 trillion US human miles/year, but past the point where the gap can be waved away as small-sample noise.
- **The conservative-filter paradox:** AV companies must report every scrape under the SGO; humans report roughly half of all crashes and two-thirds of injury crashes (per the researchers' own citations). IIHS's police-reportable filter was designed to erase that reporting-bias advantage — and the AV gap survived it. The strongest version of Waymo's claim is the one its harshest methodological critic would accept.

## Strongest counterargument (stated at full strength)
- **ODD-limited:** geofenced, mapped, sunbelt/mild-weather cities; surface streets, low speeds. No snow, no ice, no unmapped rural roads. The numbers prove safety inside the operational design domain, not everywhere.
- **Austin anomaly:** Waymo's crash rate was 4% *higher* than humans in Austin (small sample, per IIHS) — the exception is in the published data, which argues against cooking, but it's still there.
- **The robots fail differently:** Sept 21, 2026 — NHTSA opened PE26007 on comma.ai openpilot (5 crashes, 3 dead, 11 injured, ~30,000 devices) for failing to detect stopped vehicles. Sept 4, 2026 — a driverless Zoox drove around a road-closed barricade in Las Vegas in its first month of paid exemption service. AVs may be safer per-mile while being worse at the exact scenarios (emergency scenes, barricades, stopped vehicles) that kill people in headlines.
- **Self-reported benchmarks:** Waymo's comparison is a company analysis from disclosed methods, not an independent guarantee (cybercabcollective's own caveat). The 32% underreporting adjustment helps Waymo; the serious-injury benchmark has none.

## Limitations (dedicated accounting)
- 271M miles is ~0.008% of annual US human mileage (~3.2T). Rare-event statistics remain thin: 55 serious injuries avoided is a small numerator.
- Serious crashes are the ones that matter most and the benchmark with no underreporting adjustment — the 95% figure has the weakest comparison basis.
- No winter, no highway-speed data published, no unmapped-road data. Expansion into snow cities will be the real test.
- The article does not evaluate fault distribution, near-miss rates, or non-crash harms (traffic obstruction, emergency-scene interference — documented in the July 2026 NHTSA AV letter).

## Actionable insight (HARD GATE)
You cannot buy a Waymo ride in most of America. But the tech stack doing the work — pedestrian AEB, cyclist detection, automatic emergency braking — is the same hardware in cars you can buy. When shopping: demand IIHS "good" pedestrian front crash prevention and "good/acceptable" vehicle-to-vehicle crash prevention ratings (the 2026 TSP+ criteria). And when any company quotes you a safety percentage, ask what fraction of crashes they counted — the IIHS 22% filter is the question to ask of every AV safety claim you will ever read.

## Sources (3+ primary)
1. IIHS, "Waymo's driverless cars crash less often than people" (Teoh et al., July 2026) — primary. https://www.iihs.org/news/detail/waymos-driverless-cars-crash-less-often-than-people
2. Waymo safety update Sept 24, 2026 (271.3M miles) via detailed methodology coverage: https://cybercabcollective.com/news/waymo-271-million-driverless-miles-safety-results and https://electrek.co/2026/09/24/waymo-says-it-has-stopped-841-injuries-in-271-million-autonomous-miles/?extended-comments=1
3. NHTSA FARS / CrashStats early estimates (human baseline): https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars and https://rosap.ntl.bts.gov/view/dot/92423/dot_92423_DS1.pdf (Q1 2026 early estimate)
4. NHTSA PE26007 (comma.ai probe, Sept 21, 2026) via https://electrek.co/2026/09/24/comma-ai-openpilot-nhtsa-investigation-crashes/
5. IIHS fatality statistics: https://www.iihs.org/topics/fatality-statistics

## Kill verdict
**PROCEED.** Genuinely newsworthy (3-day-old data release + under-covered independent audit), novel convergence analysis, full counterargument and limitations accounting available, actionable takeaway concrete.
