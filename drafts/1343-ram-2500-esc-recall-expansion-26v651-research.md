# Research: 1343-ram-2500-esc-recall-expansion-26v651

## Angle (1-2 sentences)
FCA is recalling 8,329 2026 Ram 2500 pickups because a steering column control module can silently kill electronic stability control, violating FMVSS 126. The campaign (26V651000, FCA 90D) is an expansion of an April 2026 recall that covered only 6,605 trucks — meaning the first scope missed roughly 1,700 vehicles, a 26% undercount.

## Self-critique gate
- **Is this genuinely surprising after 800+ articles?** Partially yes. The site has covered Ram 2500 lethality and Ram recalls before, but the specific pattern — a legally-mandated safety system (FMVSS 126, ESC required since 2012 model year) that can switch itself off mid-drive on brand-new heavy-duty trucks, with the first warning being the warning light AFTER the system is already gone — is a fresh, consumer-relevant news hook. The "recall expansion = the first recall was scoped wrong" framing is also underexplored on the site.
- **Novel contribution:** Computing the expansion delta: 8,329 - 6,605 = 1,724 trucks (26% growth). Also framing the compliance angle: FMVSS 126 noncompliance means these trucks were sold in violation of a federal safety standard, not merely "at increased risk."
- **Kill test verdict:** PROCEED (with care to not rehash the older Ram 2500 lethality article).

## Primary sources
1. **NHTSA recall record 26V651000 (via automotor.news, 3 primary sources, accessed 2026-10-31):** 8,329 2026 Ram 2500 pickups; steering column control modules that can cause loss of ESC; fail to comply with FMVSS No. 126 "Electronic Stability Control Systems"; dealers replace SCCM free of charge; owner letters expected Nov 24, 2026; expands earlier recall 26V-244; NHTSA report received Oct 6, 2026; VINs searchable Oct 13, 2026. FCA recall number 90D.
2. **pickuptrucktalk.com quoting NHTSA Part 573 report (Oct 2026):** suspect SCCM production period Sept 13 – Nov 15, 2025; estimated percentage with defect: 0.1%; chronology: April 10, 2026 defect determination (recall 26V-227/FCA 36D); Sept 2, 2026 TSRC recognized build issue; Sept 29, 2026 noncompliance determination; remedy = SCCM with new design; dealers notified ~Oct 13, 2026; owners ~Nov 24, 2026. **Note:** April campaign number reported inconsistently across secondary sources (26V-227 vs 26V-244, FCA 36D vs other). The expansion target (26V651000 / FCA 90D) and April population (6,605 trucks) are consistent across sources.
3. **IIHS, "Life-saving benefits of ESC continue to accrue" (Sept 1, 2016, verified live 2026-10-31):** ESC reduces fatal single-vehicle crash risk by about half; fatal single-vehicle rollovers by 75% for SUVs, 72% for cars; NHTSA estimates 38% fatal single-vehicle reduction for cars, 56% for SUVs; ESC standard on 2012+ passenger vehicles. Saved an estimated 1,580 lives in 2014 alone.
4. **FARS (fars_output.js, 2014-2023):** Ram 2500 — 153 deaths, 15.3 annual, 748 crashes, ~875k fleet, rate 0.13 per 100M VMT. (Context only; 2026 trucks not in this window.)
5. **motoringchronicle.com (Oct 2026):** April 2026 recall 26V244000 covered 6,605 trucks; module can reset itself while driving; ESC switches off; driver's first indication is the warning light AFTER the system has gone offline; FCA reports no crashes/injuries tied to the defect; fault is intermittent (can reset and recover).

## Key numbers
- 8,329 trucks in expanded recall 26V651000 (FCA 90D)
- 6,605 trucks in April recall (motoringchronicle; automotor notes expansion of 26V-244)
- 1,724 additional trucks = 26.1% growth in recall population
- 0.1% estimated defect rate (FCA Part 573 estimate) → ~8 trucks statistically likely affected
- 0 crashes / 0 injuries reported by FCA
- Sept 13 – Nov 15, 2025 suspect build period (~2 months)
- FMVSS 126: ESC required on passenger vehicles since 2012 model year

## Strongest counterargument
FCA's own numbers cut against alarmism: the estimated defect rate is 0.1% (roughly 8 of 8,329 trucks), the fault is intermittent and can reset and recover on its own, a warning light does illuminate, and the company reports zero crashes or injuries tied to the defect. An FMVSS noncompliance finding is a legal determination about the design, not proof that thousands of trucks are rolling hazards. The April recall's 6,605 trucks were the right scope based on what FCA knew then; expansions are how recalls normally work as build data improves.

## Limitations
- Secondary sources (automotor, pickuptrucktalk, motoringchronicle, motorbiscuit) quote the NHTSA record; the primary Part 573 document was not fetched directly (nhtsa.gov recall record pages render via JS).
- The April 2026 campaign number is reported inconsistently (26V-244 vs 26V-227); the expansion campaign 26V651000 and FCA 90D are consistent.
- FARS Ram 2500 data covers 2014-2023 models, not the 2026 trucks in this recall; included only as fleet context.
- The 1,724-truck "missed" figure assumes the April population is fully contained in the October population (standard for expansions, but FCA's filing was not verified line-by-line).
- The 0.1% defect estimate is FCA's own, not an independent finding.

## Actionable takeaways (for article)
- If you own a 2026 Ram 2500: do NOT wait for the Nov 24 letter. VINs became searchable Oct 13. Run your VIN at nhtsa.gov/recalls now; reference FCA 90D / NHTSA 26V651000.
- Dealer replaces the steering column control module free; remedy is a new-design module.
- Until repaired: if the ESC warning light comes on mid-drive, treat it as the system being OFF, not as a suggestion. Slow down, increase following distance.

## Assigned journalist
Clara Rollover (consumer safety advocate; least-recent rotation fit — only 4 of last 30; this is a consumer-action story).

## References (URLs)
- https://www.nhtsa.gov/recalls (VIN lookup)
- https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue
- https://www.govinfo.gov/content/pkg/FR-2007-06-22/html/E7-11965.htm (NHTSA ESC final rule)
- https://automotor.news/news/ram-2500-stability-control-recall-26v651/
- https://pickuptrucktalk.com/2026/10/2026-ram-2500-recall-8k-loss-of-electronic-stability-control/
- https://www.motorbiscuit.com/239131-ram-1500s-recalled-because-the-backup-camera-can-go-blank-in-reverse/
- https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
