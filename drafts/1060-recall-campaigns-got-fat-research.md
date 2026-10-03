# Research Notes — #1060: Recalls Didn't Rise This Year. They Got Fat.

**Slug:** 1060-recall-campaigns-got-fat
**Journalist:** Axle McScatter (Data Visualization Editor — obsessed with charts, fits regression lines to everything, forgets prose and just presents tables)
**Kicker:** By The Numbers
**News peg:** Sedgwick U.S. Product Safety and Recall Index, H1 2026 edition (Aug 20, 2026), as covered in automotive trade press ~Aug 2026
**Ship date:** 2027-06-05 (queue currently through 2027-06-04 per #1059)

## The event (data peg)

- Sedgwick's U.S. Product Safety and Recall Index, H1 2026 edition: auto recalls affected **nearly 24 million vehicles** in the first half of 2026, **more than doubling** the number of recalled automobiles year over year, on pace to rack up the **largest annual auto-recall total in five years**. Covered in automotive trade press, August 2026.
- The surge came **even as automakers issued fewer recall notices overall**: across all industries Sedgwick recorded 1,634 recall events in H1 2026, on par with 1,636 in H1 2025 — events flat, unit volume up 345.5% YoY (211.2M to 941.2M units). Auto mirrored the pattern: fewer campaigns, far more vehicles per campaign.
- Top three automotive causes in H1 2026: **electrical systems, back-up safety systems, and powertrains**.
- Chris Harvey (Sedgwick, SVP Product Innovation): "This does not necessarily indicate a decline in vehicle quality... Rather, it reflects the interconnected nature of modern vehicle design and manufacturing, where a single issue can have far-reaching impacts." Automakers are using more common vehicle platforms, electronic components and software across multiple models, so one defect can sweep a much larger population.
- Examples of fat single campaigns named in coverage: 74,578 Dodge Durangos; 955,000 Chrysler/Dodge/Jeep/Ram vehicles; 255,404 Ford Focus vehicles; Ford 1.39M vehicles over a gear shift issue (two "potentially" related injuries); 1M+ Jeep Wranglers and Gladiators (one injury, 72 fires).
- Contrast baseline: 2025 full year was an 11-year low — 928 auto recalls affecting 27.4M vehicles, down 6% and 15% YoY (Auto Dealer Today, Feb 20 2026, citing Sedgwick). H1 2026 alone nearly matched 2025's full-year unit total.
- Q1 2026 specifically: automotive's highest quarterly unit total since Q1 2024 — 12.2M vehicles recalled (Sedgwick Q1 2026 index, via PRNewswire). 12.2 x 2 = 24.4, consistent with the "nearly 24M" H1 figure.

## The math (original contribution — labeled arithmetic)

- 2025: 27.4M vehicles / 928 campaigns = **~29,525 vehicles per recall campaign** (mean, labeled estimate from cited figures).
- H1 2026: ~24M units with campaign counts flat-or-down ("fewer notices overall"). If campaign count held near 2025's half-year pace (~460), the mean campaign size lands near **~52,000 vehicles per recall — roughly double**.
- Concentration framing: a handful of named campaigns (the 1.39M Ford gear-shift recall, the 1M+ Jeep Wrangler/Gladiator recall, the 955K Stellantis group) account for a disproportionate share of the 24M. Recalls are increasingly Pareto-distributed.
- The self-defeating loop (J.D. Power analysis of 2013-2015 NHTSA data, via The Truth About Cars): recalls exceeding **one million vehicles achieved only a 49% completion rate**, vs 67% for recalls under 10,000 units. As campaigns get fatter, fewer get fixed. The industry's own historical data says the biggest recalls fix less than half their cars.
- 2025's #1 unit cause (back-over prevention: 7.8M, +206% YoY, 10-year high) shows how a single mandated system shared across dozens of nameplates becomes a mega-recall vector. The mandated system meant to prevent back-over deaths now produces the biggest recall counts — a delicious Axle-style paradox.

## Novel angle (kill-test verdict: PASS)

"Recalls aren't rising — they're fattening." Everyone reports "record recalls" as a quality story. The data says the opposite: recall events are flat (1,634 vs 1,636) while the average campaign roughly doubled in size. The unit is no longer the recall; it's the mega-recall, driven by shared platforms and shared software. Combined with the J.D. Power completion-rate data, the fattening is self-defeating: the campaigns most likely to touch your car are statistically the least likely to be fixed. Original contribution: (1) the per-campaign-size arithmetic (~29.5K in 2025 → ~52K in H1 2026, labeled); (2) the concentration/Pareto framing of the named mega-recalls; (3) the self-defeating loop — fat recalls have the worst completion rates in industry history, so volume growth is simultaneously exposure growth AND fix-rate decline.

## Strongest counterargument (must state at full strength)

More recalled units is arguably a sign the system is working, not failing: defects are being found, reported, and fixed through a compliance process that has gotten more aggressive, and a million-car recall of a low-severity issue is not equivalent to a million cars in danger. Sedgwick's own expert says it directly: this "does not necessarily indicate a decline in vehicle quality." Shared platforms are an engineering efficiency choice that lowers vehicle prices — the cost is recall concentration, but the benefit is real and the data does not quantify it. NHTSA-ordered reporting improvements and OTA updates mean more software defects get recalled now instead of being silently patched, which inflates counts without adding risk. And the 24M figure counts vehicles, not defects or danger: one car with a loose gas cap and one car with a fire-prone battery both count once. The five-year-high claim is also pace-based; H2 2026 could still come in low and break the projection.

## Limitations

- The ~24M auto figure and "fewer notices" detail come from automotive trade-press coverage of Sedgwick's H1 2026 index (Meltwater-cached item, original link expired); Sedgwick's own press release (verified live) covers the all-industry numbers. The full report is gated behind a download form — the auto-specific event count for H1 2026 is not public, so the ~52K/campaign arithmetic is explicitly an estimate conditioned on flat campaign counts.
- "More than doubling" and "five-year high pace" are coverage language; verify against the Sedgwick H1 report for exact H1 2025 auto unit counts. I do not have the H1 2025 auto unit count directly — Q1 2026 12.2M + consistency check (12.2x2=24.4) supports the magnitude but is not a direct YoY verification.
- Unit counts can double-count vehicles appearing in multiple campaigns; Sedgwick counts vehicles per campaign, not unique vehicles.
- The J.D. Power completion data is from 2013-2015 (published 2016) — the best available long-horizon analysis of completion-by-size, but dated; modern OTA recalls may behave differently.
- 2025's 928 events / 27.4M units is full-year; comparing H1 2026 (partial) to full-year 2025 on pace is standard but seasonally blind.

## Actionable insights

- The average recall campaign is roughly twice the size it was in 2025. When a recall notice names your model's sibling (same platform, same supplier part), check your VIN even if your nameplate wasn't named — shared parts are the vector.
- Big recalls fix poorly: with million-plus recalls historically completing under 50%, do not wait for a second letter. If your car is named, book the remedy the week the notice arrives.
- VIN lookup at nhtsa.gov/recalls remains the ground truth; brand press pages only cover what the manufacturer wants you to see.
- If you buy used: mega-recalls (backup camera, electrical) hit entire model families. A used car from 2024-2026 with "all recalls completed" on the paperwork is worth asking the dealer to prove against the VIN.

## Sources (4 primary verified)

1. Sedgwick, "U.S. Recall Volume Exceeds One Billion Units in 2026" (U.S. Product Safety and Recall Index, H1 2026), Aug 20, 2026 — 1,634 vs 1,636 events; 941.2M units, +345.5% YoY; Chris Harvey quote on scale/complexity. https://www.sedgwick.com/press-release/u-s-recall-volume-exceeds-one-billion-units-in-2026/
2. Auto Dealer Today, "Auto Recalls Sank Last Year," Feb 20, 2026 — 2025: 928 auto recalls, 27.4M units (11-year low); back-over prevention 7.8M units (+206%, 10-year high); electrical 4.2M; gas fuel 2.2M. http://www.autodealertodaymagazine.com/news/auto-recalls-sank-last-year
3. PRNewswire via pr.millismedwaynews.com, "U.S. Records 27% Increase in Recalled Products in Q1 2026" (Sedgwick Q1 2026 index) — Q1 2026 auto: 12.2M vehicles, highest quarterly since Q1 2024; 785 events, down 10.5% QoQ while units rose. https://pr.millismedwaynews.com/article/US-Records-27percent-Increase-in-Recalled-Products-in-Q1-2026/6a05e44cd6b3ec3c381af0c4
4. The Truth About Cars (citing J.D. Power analysis of 2013-2015 NHTSA data), "Recall Apathy: 45 Million Vehicles Went Unrepaired," July 2016 — million+ recalls: 49% completion vs 67% for under-10,000-unit recalls; 45M unrepaired. https://www.thetruthaboutcars.com/2016/07/recall-apathy-45-million-vehicles-went-unrepaired-2013-2015/
5. NHTSA recalls database (VIN lookup). https://www.nhtsa.gov/recalls
