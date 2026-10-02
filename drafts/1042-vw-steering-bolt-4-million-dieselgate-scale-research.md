# Research: #1042 — VW steering-bolt recall goes global (4M vehicles, largest since Dieselgate)

## Angle (1-2 sentences)
Two weeks after NHTSA announced a 208,724-vehicle US recall of VWs for a steering-rack bolt that can corrode and snap, Handelsblatt reports the real number is close to **4 million vehicles worldwide** — VW's largest recall since Dieselgate, caused by one bolt shared across the entire MQB platform empire. The US recall covered about 5% of the affected fleet.

## Self-critique gate
- Genuinely surprising after 1,040+ articles? The site covered the US recall as #938 (Mia, Sept 19). This is a genuine sequel: a new development (Handelsblatt/KBA data, Sept 30) that multiplies the scale 19x and reframes the defect from "three US models" to "one bolt, one platform, four million cars." The Dieselgate comparison and the MQB-platform analysis are new.
- Just another data dump? No — the 5%-of-fleet math, the platform-wide bolt lineage, and the corrosion-geography question (salt belts) are original analysis.
- Verdict: PROCEED.

## Kill-test rejects (checked this run)
- Ford 26C43 LED headlight recall (41,748, Sep 30) — covered #1033. KILL.
- Ford 26C42 Ranger blank-screen recall (11,405, Sep 28) — covered #994. KILL.
- GM L87 probe expansion (EA26005) — covered #1025. KILL.
- comma.ai PE26007 probe — covered #1015. KILL.
- Cadillac Optiq window recall (29,347, Oct 1) — covered #1030. KILL.
- Waymo Santa Monica child strike — covered #889. KILL.
- Tiffin LP tank / September RV recalls — covered #1039. KILL.
- FARS cross-tabs tried and killed: drug-dominant models (covered: NV200 story), brand impairment ranking (covered: every-brand-equally-drunk), sedan class death share (covered: sedan-death-penalty), deadliest model-year cells (covered: f150-deadliest-vintage-2001), zombie fleets (covered), model-year 2004 peak (covered).

## Data (verified 2026-10-01)

### The US recall (established, #938's territory — recap only)
- NHTSA 26V590, filed Sept 11, 2026, announced Sept 18: 208,724 US vehicles — 2018 Tiguan (85,713), 2018-2019 Atlas (82,601), 2019-2021 Audi Q3 (40,410).
- Defect: right-side steering-rack mounting bolt (part N.105.524.02) corrodes; bolt head snaps; rack held at one point; housing cracks under load; loss of steering. No redundancy (brakes have dual circuits; steering has one rack).
- VW estimates ~1% of recalled vehicles actually have the defect (~2,087 vehicles).
- Canada: 44,303 (same defect). North America total: 253,027.
- Remedy: replace bolt with better corrosion-resistant coating, free.

### The global expansion (NEW — the story)
- Handelsblatt (via Carscoops, Sept 30, 2026): close to **4 million vehicles worldwide** — ~2M VW brand, >1M Skoda, ~700k Audi, 200k Seat. VW's largest recall since Dieselgate.
- KBA (German Federal Motor Transport Authority) data: VW Golf, Golf Variant, Tiguan, Touran, Caddy; Q3 the only Audi model; Seat Ateca and Tarraco built April 2016–Sept 2024.
- Math: 208,724 / 4,000,000 = **5.2%** — the US recall covers roughly one in twenty affected vehicles.
- Fix cost framing: one bolt with a better coating vs. Dieselgate buybacks. Cheap fix, enormous logistical footprint.

### FARS frame (site-local primary data, fars_output.js)
- US-market models in the recall are among the safest per mile in the dataset: Tiguan 126 deaths, rate 0.14; Atlas 26 deaths, rate 0.06; Golf 55 deaths, rate 0.18 (vs. fleet median ~1.0+; Accord 3.07, Altima 2.88).
- Extends #938's paradox globally: the defect hits some of the statistically safest cars on the road — a preventive recall, not a reactive one.

### Dieselgate scale reference
- Dieselgate: ~11 million vehicles worldwide with defeat devices (Wikipedia: Volkswagen emissions scandal).

## Primary sources (4)
1. NHTSA recall 26V590 / recalls database — https://www.nhtsa.gov/recalls
2. Carscoops, Sept 30 2026 (Handelsblatt/KBA reporting): "VW Is About To Issue Its Largest Recall Since Dieselgate" — https://www.carscoops.com/2026/09/vw-is-about-to-issue-its-largest-recall-since-dieselgate/
3. mylemonrights.com, Sept 29 2026: bolt part number, 1% defect estimate, model/build-date table — https://mylemonrights.com/blog/volkswagen-recall-2026/
4. NHTSA FARS 2014-2023 (fars_output.js, site-local): Tiguan/Atlas/Golf death counts and rates.
5. Wikipedia, Volkswagen emissions scandal (Dieselgate scale) — https://en.wikipedia.org/wiki/Volkswagen_emissions_scandal

## Methodology (for article)
5.2% = 208,724 / 4,000,000. FARS rates are deaths per 100M VMT (NHTS-estimated VMT denominators, +/-15% for low-volume models — standard site caveat).

## Limitations (for article)
- The 4M figure is Handelsblatt's reporting of expected KBA action, not a filed recall in most markets yet — "about to issue." Treat as reported, not confirmed.
- FARS covers the US only; the European Golf/Skoda/Seat fleets are not in the dataset. The "safest per mile" frame applies to US-market models.
- VW's 1% defect estimate is VW's own number from the US Part 573 filing; the global defect rate may differ (corrosion is geography-dependent: salt-belt winters vs. dry climates).
- No US injuries/crashes reported to date for this defect (per Autoblog/NHTSA: no accidents, injuries, or fires reported in the US).

## Strongest counterargument (for article, full strength)
Four million sounds apocalyptic, but the actual fix is a single bolt swap — the cheapest possible recall remedy, nothing like Dieselgate's buybacks. VW's own estimate says 99% of recalled US cars don't have the defect. And a global recall number is not a global death toll: zero US crashes or injuries have been reported. The honest version of this story is "the biggest logistics exercise in VW's post-Dieselgate history," not "four million death traps." The corrosion mechanism also means risk concentrates in salt-belt, older vehicles — a 2024 Golf in Arizona is not the risk profile here.

## Actionable insight
US owners of 2018 Tiguan, 2018-2019 Atlas, 2019-2021 Q3: check your VIN at nhtsa.gov/recalls — the fix is free and it's a steering part, not a software update you can postpone. European/UK owners of 2016-2024 MQB VWs (Golf, Tiguan, Touran, Caddy), Skodas, and Seat Ateca/Tarraco: watch for KBA/DVSA notices; if your car has seen 6+ salted winters, ask your dealer about the steering-rack bolt proactively.

## Headline / deck / kicker
- Kicker: Investigation
- Journalist: Mia Crumplezone (engineering beat; sequel to her #938)
- Headline: "The Steering Bolt Recall Was 208,724 Cars. The Real Number Is 4 Million."
- Deck: "One corroding bolt, shared across VW's entire MQB platform, is now the company's largest recall since Dieselgate. The US recall covered 5% of the affected fleet."
- Pull stat: 5.2% / "Share of the ~4M affected vehicles covered by the US recall"
- Slug: 1042-vw-steering-bolt-4-million-dieselgate-scale
