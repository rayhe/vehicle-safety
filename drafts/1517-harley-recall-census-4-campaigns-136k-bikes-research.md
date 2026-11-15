# Research — #1517: Harley Filed Four Recalls in 2026. One Blocked Breather Hole Was Two-Thirds of Them.

**Slug:** `1517-harley-recall-census-4-campaigns-136k-bikes`
**Journalist:** Axle McScatter (Data Visualization Editor — statistical roundups, national trends; census-tally format is his beat)
**Kicker:** By The Numbers
**Date researched:** 2026-11-15
**Target ship_date:** 2028-09-07 (1 day after #1516's 2028-09-06)

## Story in one line
Harley-Davidson filed four NHTSA recall campaigns in 2026 covering 136,077 campaign-vehicles, and a single April recall over a blocked airbox breather hole accounts for 88,039 of them, nearly two-thirds of the year's total.

## Kill test
- **Genuinely newsworthy?** YES. The fourth campaign (26V730, gear sensor lying about neutral, 2 injuries) landed November 3, 2026, and owner letters start mailing November 16, the day after this run. The census format is the site's established 2026 brand-recall series (Chevrolet, Ford, VinFast, etc. all done in the last three weeks); Harley is the missing major brand, and no Harley census exists in 1,516 queue entries.
- **Novel angle on data?** YES. The tally itself (136,077) with explicit overlap accounting, the share arithmetic (airbox 64.7%, gear sensor 15.9%, brake line 12.5%, triple clamp 6.9%), the 0.1% defect-rate math on 26V730 (about 22 bikes actually defective out of 21,643, against 2 injuries), and the supplier-defect pattern (three of four campaigns trace to small physical manufacturing flaws, not design). The single-recall deep dive (#1462) already covered 26V730; this is the year-level census, a different article.
- **3+ primary sources?** YES. (1) NHTSA Part 573 Safety Recall Report 26V730 (static.nhtsa.gov PDF); (2) NHTSA recalls API records for 26V270 and 26V730 on 2026 FLHX/FLTRX (api.nhtsa.gov, verified live this run); (3) USA Today, Nov 10, 2026 (per-model counts, 2 injuries, <1% estimate); (4) Harleysite.de 2026 recall overview, updated Nov 11, 2026 (all four campaigns, US counts, worldwide counts); (5) Motoring Chronicle, Nov 12, 2026 (tally 136,077, overlap analysis, per-model counts).
- **Verdict:** PROCEED.

## Primary sources
1. **NHTSA, Part 573 Safety Recall Report 26V730 (Harley recall 0194), filed Nov 3, 2026.** https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V730-3248.pdf — 21,643 motorcycles; estimated percentage with defect 0.1%; gear position sensor (p/n 32700166, SSI Technologies) may contain plastic molding flash; ECM may communicate neutral when the transmission is in gear; chronology: flash condition first observed Apr 16, 2026 on a 2026 FLTRX during a service event; voluntary recall authorized Oct 27, 2026; dealer notification Nov 6-13, 2026; owner letters Nov 16-23, 2026.
2. **NHTSA recalls API, api.nhtsa.gov** — verified live 2026-11-15: campaigns 26V270000 (engine cooling / crankcase PCV) and 26V730000 (ECM) both returned for 2026 Harley-Davidson FLHX and FLTRX, manufacturer Harley-Davidson Motor Company.
3. **USA Today, Greta Cross, "Harley-Davidson recalls more than 21K motorcycles. See affected models," Nov 10, 2026.** https://www.usatoday.com/story/cars/recalls/2026/11/10/harley-davidson-motorcycles-recall/92704956007/ — per-model counts summing to 21,643; 2 injuries potentially related as of Oct 27; Harley estimates <1% of outlined vehicles impacted; customer service 1-800-258-2464.
4. **Harleysite.de, "Harley-Davidson Recalls 2026 | All Open Recalls at a Glance," updated Nov 11, 2026.** https://www.harleysite.de/en/harley-davidson-recalls/ — all four 2026 campaigns with NHTSA numbers, dates, models, US counts: 0194/26V730 21,643 US; 0193/26V270 116,714 worldwide; 0192/26V234 16,994 US (+1,689 Germany); 0191/26V075 9,401 US.
5. **Motoring Chronicle, "Harley Recalls 21,643 Motorcycles That Can Show Neutral While in Gear," Nov 12, 2026.** https://motoringchronicle.com/harley-recalls-21-643-motorcycles-that-can-show-neutral-while-in-gear/ — four-campaign tally 136,077 (9,401 + 16,994 + 88,039 + 21,643); notes the sum double-counts bikes in two campaigns; 26V270 US count 88,039; four model codes (2026 FLHX, FLTRX, FLTRXL, FLHXL) appear in both 26V270 and 26V730.

## Key verified facts
- **The four 2026 campaigns (US counts):**
  - **26V075 (Harley 0191), Feb 9, 2026 — 9,401.** Sportster S RH1250S, MY 2021-2026. Upper triple clamp may break under load and interfere with steering. Extension of Service Campaign 0190 / recall 25V590 (8,422 bikes, MY 2021-2025) into the 2026 model year.
  - **26V234 (Harley 0192), Apr 13, 2026 — 16,994.** Softail: Low Rider ST, Low Rider S, Street Bob, Heritage Classic, MY 2025-2026. Rear brake line rubs against the body control module and may leak brake fluid.
  - **26V270 (Harley 0193), Apr 28, 2026 — 88,039 US (116,714 worldwide).** Road Glide, Street Glide, Street Glide Ultra, 2026 Limited models, Road Glide 3, Street Glide 3 Limited, Fat Boy, Breakout, MY 2024-2026. Airbox baseplate (p/n 29000373) breather port can be blocked by plastic material from a supplier manufacturing issue; hot oil may escape when the dipstick is pulled.
  - **26V730 (Harley 0194), Nov 3, 2026 — 21,643.** Nine 2026 Grand American Touring/CVO codes. Gear position sensor with plastic molding flash; ECM may report neutral while in gear; unintended forward motion. 2 injuries potentially related as of Oct 27, 2026. Estimated percentage with defect: 0.1%.
- **Tally:** 9,401 + 16,994 + 88,039 + 21,643 = **136,077 campaign-vehicles**. This counts a bike twice if it is in two campaigns; it is not 136,077 separate motorcycles.
- **Shares:** airbox 88,039 / 136,077 = 64.7%; gear sensor 21,643 = 15.9%; brake line 16,994 = 12.5%; triple clamp 9,401 = 6.9%.
- **Overlap:** the 2026 FLHX, FLTRX, FLTRXL and FLHXL appear in both 26V270 and 26V730 — the same touring bikes went back to the dealer twice in 2026 for two different defects.
- **The 0.1% math:** 26V730's Part 573 estimates 0.1% of the 21,643 carry the defect — about 22 motorcycles. Against 2 injuries potentially related, that is roughly 1 injury per 11 actually-defective bikes, if the estimate is right. (USA Today reported Harley's looser "<1%" figure, under ~216 bikes; the Part 573's 0.1% is the primary filing number and is used here.)
- **Supplier-defect pattern:** three of the four campaigns are small physical manufacturing flaws, not engineering concepts: plastic molding flash on a sensor (26V730), plastic material blocking a breather port (26V270), a brake line routed where it chafes (26V234). The fourth (26V075) is a carryover extension of a 2025 recall.
- **No park-it order, no do-not-ride advisory** on 26V730; remedy is a free sensor swap at the dealer. Owner letters for 0194 mail Nov 16-23, 2026.

## Original contribution (Axle's math and synthesis)
1. **The census tally with overlap accounting.** 136,077 campaign-vehicles, stated explicitly as a count of campaign-populations, not bikes. The site's 2026 brand-census series has never done Harley, and no prior article has summed Harley's 2026 campaigns.
2. **The share breakdown.** One recall is nearly two-thirds of the year. The airbox recall alone (88,039) is more than the other three combined (48,038). The story of Harley's 2026 is the story of one blocked breather hole.
3. **The 0.1% paradox.** Harley recalled 21,643 bikes to fix about 22. That ratio (roughly 1,000 recalled per 1 actually defective) is the precautionary-recall system working as designed — and yet 2 injuries are already potentially related. If the estimate is right, this defect hurts people at an unusually high rate when it occurs; if the estimate is wrong, the recall population is bigger than admitted. Either reading is worth stating.
4. **The carryover correction.** One of the four "2026 recalls" is not new at all: 26V075 extends the 2025 triple-clamp recall (25V590) into the 2026 model year. The truly-new-2026 count is three campaigns, not four. Census articles that count filings without reading chronologies overstate the year.
5. **The touring line went back twice.** Four model codes sit in two 2026 campaigns. A 2026 Street Glide owner who checks the VIN finds two open recalls, for two unrelated systems, in the same calendar year. That is the lived experience the tally hides.

## Limitations
- Campaign populations overlap: the same motorcycle can appear in two campaigns (documented for FLHX/FLTRX/FLTRXL/FLHXL in 26V270 + 26V730), so 136,077 overstates the number of distinct motorcycles. The article must say so in the body and the disclaimer.
- US vs worldwide counts differ (26V270: 88,039 US vs 116,714 worldwide). The tally uses US counts throughout; say so.
- The 0.1% defect estimate is Harley's own number in its Part 573, unverified by NHTSA. The 2 injuries are "potentially related," not confirmed as caused by the defect. Do not write "the defect injured two riders" as established fact.
- 26V075's Feb 9 date and 26V234's Apr 13 date come from the Harleysite overview (which compiles NHTSA filings); the Part 573 for 26V730 was read directly. Dates for the other three are as reported by Harleysite/Motoring Chronicle.
- No FARS model-level data exists for 2026 Harleys; this is a recall census, not a fatality-rate story. Do not import motorcycle fatality rates as if they applied to these bikes.

## Strongest counterargument
Four recalls is a normal year for a major manufacturer, and the defect rates are tiny: 0.1% on the headline recall, no deaths, no park-it order, free fixes at any dealer. The airbox recall's 88,039 bikes mostly never saw hot oil escape, and the brake-line recall is a chafe inspection with a cheap fix. Recalls are the safety system working, not failing — Harley found these, filed them, and pays for the repairs. The article must state this at full strength: the tally is big, the actual danger per bike is small, and the remedy is simple.

## Actionable guidance (required)
- If you own a 2026 Street Glide, Road Glide, or any of the nine 0194 models: check your VIN at nhtsa.gov/recalls or call Harley at 1-800-258-2464 and reference recall 0194. Do not wait for the Nov 16 letter. Check 0193 (airbox) at the same time; four model codes are in both.
- Until the sensor is replaced: start the bike with the clutch pulled in and a brake covered, every time, regardless of what the dash says. Treat the green N as advisory, not fact.
- Buying a used 2026 Harley touring bike: confirm recalls 0194 and 0193 were completed — ask for the service record, don't take the seller's word.
- Sportster S owners (2021-2026): the triple-clamp recall 0191 is an extension of a 2025 recall; if you skipped the first one, you are in the second one.

## Draft outline
- Kicker: By The Numbers. Headline: four recalls, one blocked breather hole did two-thirds of the damage.
- Lede: the tally 136,077, the airbox share, bolded key stat.
- Pull stat: 136,077 (or 64.7%).
- Campaign-by-campaign table in prose: four recalls, four defects, four counts.
- The original math: shares, the 0.1% paradox, the carryover correction, the touring line twice.
- Counterargument at full strength.
- What to do: VIN check, clutch-in starts, recall numbers 0191-0194.
- References: NHTSA Part 573 26V730, NHTSA API, USA Today, Harleysite, Motoring Chronicle.
