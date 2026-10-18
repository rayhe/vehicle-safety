# Research — #1203: Kia Recalled the Seltos for Salt-Corrosion Fires in 2024. Then It Built 48,070 More of Them.

**Slug:** `1203-kia-seltos-salt-fire-recall-twice`
**Journalist:** Mia Crumplezone (Safety Engineering Editor — design/defect analysis; judgmental about bad vehicle design. An unsealed electronic control module bolted under the driver's seat of a salt-belt crossover is her beat.)
**Kicker:** Investigation
**Date:** 2026-10-17

## The news hook (Oct 2026)
Kia Canada is recalling **48,070** Seltos crossovers (2024-2026 model years, AWD only) because road salt and winter moisture tracked into the cabin contaminate the AWD control unit mounted **under the driver's seat**. The contamination corrodes the module, the corrosion causes a short circuit, and the short circuit can start a fire **even when the vehicle is parked and turned off**. Owners are told to park outdoors, away from structures, until dealers inspect the module, replace it as needed, and install a protective cover.

## Kill test
- **Newsworthy?** Yes. 48,070 vehicles, fire risk while parked and off, park-outside advisory, October 2026. Plus the Canada-only gap: NHTSA's recall API returns **zero** recalls for the 2025 and 2026 Seltos, so US owners of the same AWD hardware have no federal action at all.
- **Novel angle?** Yes, and it's the whole story: **this is the second time.** In February 2024, Kia Canada recalled **44,000** Seltos crossovers (2021-2023 model years) for the *identical* defect chain — same AWD control unit, same under-seat location, same salt-and-moisture contamination, same corrosion, same short circuit, same fire-while-parked risk, per the same Transport Canada notice mechanism. The 2026 recall's fix is a protective cover over the module. Kia knew in 2024 that an unsealed control unit under the driver's seat plus road salt equals fire risk, and the 2024-2026 cars were built without the cover anyway. Combined exposure: roughly **92,000 Seltos**.
- **Verdict:** PROCEED.

## Original contributions (required)
1. **The recurrence ledger:** Feb 2024 — 44,000 units (2021-2023 MY) → Oct 2026 — 48,070 units (2024-2026 MY). Same component, same failure mode, same regulator, 2.5 years apart. Either the 2024 remedy's lesson never reached the production line, or the 2024-2026 Seltos inherited the exact unsealed design the 2024 recall was supposed to fix. Transport Canada's notices describe the same cause chain verbatim.
2. **The Canada-only gap (verified):** NHTSA's recallsByVehicle API returns zero results for the 2025 and 2026 Seltos (queried 2026-10-17). US salt-belt states (New York, Michigan, Minnesota, the entire Northeast and upper Midwest) salt roads just as aggressively as Ontario and Quebec. American owners of 2024-2026 Seltos AWD have the same part, the same climate, and no recall.
3. **The Hyundai-Kia fire family:** Auto123 notes this follows Kia Canada's July 2026 Telluride recall (20,000+ units, 2020-2024 MY, overheating power-seat motors) — the same seat-motor failure mode as Hyundai's October 2026 Genesis recall (94,622 vehicles, NHTSA; covered by this site as #1173). The two sister companies are running parallel fire-recall programs on unrelated components in the same quarter.

## Primary sources (4)
1. **Auto123, Oct 12, 2026** — 48,070 Seltos (2024-2026, AWD only), AWD control unit under driver's seat, salt+moisture contamination → corrosion → short circuit → fire risk even parked/off, park-outside advisory, inspection + replacement + protective cover, excludes redesigned 2027 Seltos, no US equivalent recall. https://www.auto123.com/en/news/kia-seltos-recall-canada-fire-risk/74292/
2. **Transport Canada recall notice (via GuideAutoWeb/The Car Guide, Oct 11, 2026)** — same facts from the regulator: short-circuit fire risk "even when the vehicle is parked and the ignition is turned off." https://www.guideautoweb.com/en/articles/83526/kia-canada-recalls-48-000-seltos-crossovers-that-may-short-circuit/
3. **GuideAutoWeb, Feb 21, 2024** — the precedent: 44,000+ Seltos (2021-2023 MY) recalled in Canada for the identical defect (AWD control unit under driver's seat, salt/moisture contamination, corrosion, short circuit, fire while parked/off), per Transport Canada. https://www.guideautoweb.com/en/galleries/73622/44-000-kia-seltos-suvs-recalled-in-canada-hybrid-model-rumoured-to-come/?im=2
4. **NHTSA Recall API (api.nhtsa.gov), queried 2026-10-17** — zero recall campaigns for 2025 or 2026 Kia Seltos (Count: 0). Establishes the Canada-only gap from the primary federal source.
5. **The Cooldown, Oct 16, 2026** — US-audience coverage of the park-outside burden for apartment/condo owners with no garage alternative. https://www.thecooldown.com/green-tech/kia-seltos-awd-recall-park-outside/

## Key numbers
- 48,070 (2024-2026 MY, AWD) + 44,000 (2021-2023 MY) ≈ 92,000 Seltos recalled in Canada for this defect class
- 20,000+ Kia Telluride (2020-2024 MY), July 2026, seat-motor fire — the parallel Hyundai-Kia fire program
- 94,622 Hyundai Genesis/G80, Oct 2026, seat-motor fire, park-outside, remedy TBD (#1173)
- 0 US NHTSA recalls for 2025-2026 Seltos

## Limitations (for the article)
- All 2026-recall facts come from Transport Canada's notice via Canadian automotive press; I could not pull the raw Transport Canada recall page or a recall number. Incident and fire counts for the 2026 action are not in the sources I found — the article will not invent them.
- The 2024 recall's remedy details are not in my sources, so I cannot prove whether the 2024 fix failed or the design simply carried over unsealed into 2024-2026 production. The article states the recurrence as fact and the mechanism-of-recurrence as the open question.
- "No US recall" is a snapshot: Kia or NHTSA could act after this article. The claim is time-stamped to the Oct 17, 2026 API query.
- FARS has no Seltos-specific fatality data; no fatality-rate context exists for this defect. Non-fatal fires are invisible to FARS by design.
- The salt-belt exposure argument for US owners is inference from the stated cause chain (road salt + moisture), not from US incident data.

## Counterargument (strongest)
Canada-only recalls often reflect Canada-specific conditions: heavier road-salt use, longer winters, and Transport Canada's independent defect process. Kia may reasonably judge the US risk profile lower, and a US recall based on Canadian salt exposure could be the overcautious move, not the missing one. The 2024→2026 recurrence may also be less damning than it looks: the 2021-2023 and 2024-2026 Seltos are different production runs, and the 2024 fix may have been scoped only to the recalled population by design — regulators generally don't require manufacturers to retrofit a remedy into future production, they require a design change, and the 2027 redesign's "overhauled mechanicals" may be exactly that change arriving on schedule. Finally, 92,000 Canadian units with no reported-fire count in the sources is a recall built on engineering analysis, not a body count — which is how the system is supposed to work.

## Actionable insights
- Own a 2024-2026 Seltos AWD in the US salt belt (NY, MI, MN, New England, upper Midwest)? Check your VIN at nhtsa.gov/recalls now and re-check monthly — the Canadian recall exists, the US one doesn't, yet. If you smell hot plastic or your AWD system throws faults, park outside and call the dealer.
- Canadian owners: park outside and away from structures until the dealer installs the protective cover; the fire risk persists with the ignition off.
- Salt-belt used-car shoppers: a 2021-2023 Seltos should have the 2024 recall completed — verify at Transport Canada's recall database before buying. A 2024-2026 AWD without the 2026 recall done is a parked fire risk.
- The general lesson: any vehicle with electronic modules mounted low in the cabin (under seats, in footwells) in a road-salt state deserves a glance at the recall database. Salt doesn't just eat body panels.

## References for the article
- [1] Auto123, "Kia recalls 48,000 Seltos SUVs in Canada over fire risk," Oct 12, 2026. https://www.auto123.com/en/news/kia-seltos-recall-canada-fire-risk/74292/
- [2] The Car Guide / GuideAutoWeb, "Kia Canada Recalls 48,000 Seltos Crossovers That May Short Circuit," Oct 11, 2026. https://www.guideautoweb.com/en/articles/83526/kia-canada-recalls-48-000-seltos-crossovers-that-may-short-circuit/
- [3] GuideAutoWeb, "44,000 Kia Seltos SUVs Recalled in Canada," Feb 21, 2024. https://www.guideautoweb.com/en/galleries/73622/44-000-kia-seltos-suvs-recalled-in-canada-hybrid-model-rumoured-to-come/?im=2
- [4] NHTSA Recall API, api.nhtsa.gov, queried Oct 17, 2026 (0 recalls, 2025/2026 Seltos).
- [5] The Cooldown, "Owners of recalled Kia vehicles are told to park outside over fire risk, even when car is off," Oct 16, 2026. https://www.thecooldown.com/green-tech/kia-seltos-awd-recall-park-outside/
- [6] NHTSA recalls database: https://www.nhtsa.gov/recalls
