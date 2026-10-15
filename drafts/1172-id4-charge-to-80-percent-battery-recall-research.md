# Research: #1172 — VW ID.4 Third Battery Recall (26V630 / 93EX)

## Angle
Volkswagen filed a Part 573 recall on Sept 30, 2026 (amended Oct 1) for 22,524
ID.4 EVs (2023-2026, Chattanooga-built Jan 1 2023 - Feb 1 2025): charge above
80% SoC can trigger thermal propagation, a battery fire. VW admits the root
cause is UNKNOWN and no remedy exists yet. Interim fix: warning stickers and
"please don't charge past 80%."

Novel hook: VW scoped the recall population partly by reading the cars' own
charging data (theautowire). Your car's telemetry drew the recall boundary.
Second: this is VW's SECOND major battery action of 2026 (the first: ~100K EVs
globally / ~44K ID.4 US earlier this year for battery issues) — and the cells
come from SK Battery America in Commerce, GA, tying back to Crash Report #751
(SK On electrode misalignment, two OEMs one defect). SK keeps showing up.

Kill test: PASS. "A carmaker tells 22,524 owners to surrender 20% of their
advertised range because the battery might catch fire and nobody knows why"
is genuinely newsworthy. Plus the telemetry-scoping angle and the SK sequel
angle. Not a data dump.

## Primary sources
1. NHTSA campaign 26V630 / VW 93EX — Part 573 report filed Sept 30, 2026,
   amended Oct 1 (via theautowire, electrek coverage)
2. https://www.nhtsa.gov/recalls — NHTSA recalls database (VIN lookup for owners)
3. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars — context
4. https://theautowire.com/2026/10/14/vw-id4-battery-recall-80-percent-charging-data/
   — filing dates, Chattanooga build window, charging-data scoping, SK Battery
   America Commerce GA cells
5. https://electrek.co/2026/10/08/volkswagen-recalls-22500-id-4-evs-tells-owners-charge-to-80/
   — announcement, 22 claims Jan 18 2024 - Aug 7 2026, 80% interim guidance,
   Nov 27 letters, earlier 2026 recall (~100K global / ~44K ID.4 US)
6. https://energynews.biz/volkswagen-id4-recall-22524-vehicles-80-percent-charge-limit-thermal-propagation/
   — timeline: field review began June 2026; June 17 preliminary data pointed
   at isolation resistance + DC charging ratio; Sept identification; report
   dated Sept 30; searchable on NHTSA site in October
7. https://www.europesays.com/germany/106915/ — three HV battery part numbers
   11K.915.599.A, 11K.915.599.D, 11K.915.592.D; dashboard/port warning stickers;
   some vehicles get software 80% cap
8. Crash Report #751 (stories/751-sk-on-electrode-misalignment-two-oems-one-defect.html)
   — SK-battery sequel continuity

## Key numbers (verified from sources above)
- 22,524 vehicles, 2023-2026 MY ID.4, built 2023-01-01 to 2025-02-01 (Chattanooga)
- Campaign: NHTSA 26V-630, VW 93EX
- 22 U.S. field claims, Jan 18 2024 - Aug 7 2026 (~31 months, ~1 per 6 weeks)
- Estimated defect rate: 0.1% (~22 vehicles of 22,524) — particle.news overview
- Condition: certain charging profiles + SoC >80% may trigger thermal propagation
- Root cause: unknown (VW's own filing). Remedy: under development.
- Interim: limit to 80%, warning stickers, some cars get software cap
- Owner letters: risk notification ~Nov 27, 2026; more letters once fix exists
- Battery supplier: SK Battery America Inc. (Commerce, GA)
- No reimbursement plan (vehicles within new-vehicle limited warranty)

## Original contribution (the math nobody ran)
1. Range math: 2024 ID.4 EPA range ~291 mi (Pro S). 80% cap = ~233 mi usable.
   Owners lose ~58 miles of advertised range — roughly the entire daily commute
   of an average American — until an unknown fix arrives on an unknown date.
2. Rate math: 22 claims / 31 months ~= 0.71 claims per month. At 0.1% defect
   rate across the fleet, the fleet is small enough that each claim ~= one
   defective pack. The recall population is sized 1,000x the observed failures.
3. Telemetry scoping: VW "decided whose car is in the recall partly by reading
   the cars' own charging data" — the first widely-reported recall whose
   boundary was drawn by behavioral telemetry. Your charging habits became
   evidence.
4. SK watch: #751 covered SK On electrode misalignment hitting two OEMs; now
   SK Battery America cells are under VW's product-safety-committee microscope
   for an unrelated (and unexplained) thermal-propagation mechanism. Two SK
   battery actions in one outlet's coverage window.

## Limitations (honest)
- Root cause unknown means the mechanism ("isolation resistance values and DC
  charging ratios") is correlation, not established causation.
- 0.1% is VW's estimate, not an independent measurement.
- 22 claims != 22 fires; claims may include thermal events short of fire.
- Battery pack ages, climates, and charging habits of the fleet vary; the
  June-Sept field study covered a subset.
- FARS not applicable here (no fatalities cited); this is a recall story,
  grounded in NHTSA filings, not fatality data. That is stated, not hidden.

## Strongest counterargument
The system worked. VW's field monitoring caught a pattern, the company
quantified it, filed within weeks of identification, and issued interim
protection before a single reported injury. Twenty-two thermal claims across
2.5 years and 22,524 vehicles is a low absolute rate, and the 80% cap is cheap
insurance — not a catastrophe. If the final remedy is a software update, this
reads as a model recall.

## Actionable insights (required)
- Own a 2023-2026 ID.4? Set max charge to 80% in the touchscreen charging menu
  NOW. Check your VIN at nhtsa.gov/recalls (searchable since early October).
- Expect a risk letter ~Nov 27, 2026; a second letter when the remedy exists.
- Call VW customer service 1-800-893-5298 with questions; recall code 93EX,
  NHTSA 26V630.
- Shopping used? Any 2023-2025 ID.4 from the Chattanooga window needs the
  remedy before you trust 100% charges.

## Journalist: Axle McScatter (beat: statistical roundups, methodology)
## Kicker: By The Numbers
## Slug: 1172-id4-charge-to-80-percent-battery-recall
## Title: Volkswagen Told 22,524 ID.4 Owners to Stop Charging. It Still Doesn't Know Why.
