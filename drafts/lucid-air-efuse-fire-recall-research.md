# Research: Lucid Air eFuse Fire Recall (#802, Rex Driverton)

## Angle
Nearly every Lucid Air ever built (27,185; model years 2022-2026) recalled for fire risk. The defect is not the battery pack. It is the *software that replaced the fuse*: the eFuse logic for low-voltage exterior lighting circuits allowed continued energization at excess amperage, overheating wiring to smoke/fire. Three fires, four smoke events, 33 fried-wiring warranty claims. The first fire was in a company-owned car in June 2023 and went undiagnosed for nearly three years. The OTA fix (v2.10.0) shipped in July 2026, a month BEFORE the recall; 6,466 owners still have not installed it and are under park-outside orders.

## Kill test
- Newsworthy: yes. Largest recall in Lucid's history; covers 172% of the company's entire 2025 deliveries (27,185 vs 15,841). Park-outside fire order on a $70k+ luxury sedan.
- Novel vs site archive: existing `lucid-air-third-power-loss-recall` covers the May 2026 drive-power recall (2,039 cars), a different defect. No eFuse/fire story exists.
- Novel vs press coverage: press covered the recall; the original contributions here are (a) recall-size-vs-annual-production math, (b) the 38-month gap from first fire to recall, (c) the "software fuse failed at the one job fuses have" framing, (d) unpatched-rate calculation.

## Key facts (all sourced)
1. 27,185 Lucid Air sedans, MY 2022-2026, built Oct 2021-Jul 2026. NHTSA recall; owners told to park outside away from structures until remedy. (Reuters 2026-08-28)
2. Root cause per Lucid's filing: "the software logic for the low-voltage exterior lighting circuits may provide insufficient overcurrent protection by allowing continued circuit energization at excess amperage." Electronic fuse (eFuse) protection threshold too permissive; faulted circuit repeatedly re-energized within same key cycle. (KBB, MotorBiscuit quoting NHTSA filing)
3. Event tally: 3 fires (first: company-owned Air, June 2023, cause unidentified at the time; second: customer car, May 2026, triggered deep investigation), 4 smoke events tied to center high-mounted stop lamp circuit overheating, 33 warranty reports of damage to that lamp's wiring harness. (Carscoops, Autoblog quoting filing)
4. Same defect can kill exterior lighting (center brake light, front lighting) = crash risk independent of fire. (Carscoops)
5. Remedy: OTA software v2.10.0 pushed July 2026; lowers eFuse protection thresholds, blocks retry of faulted circuit within same key cycle. No dealer visit. Free. (KBB, MotorBiscuit)
6. Telemetry: 20,719 vehicles already on v2.10.0+ at time of filing; 6,466 still pending. Written notifications to non-updated owners by Oct 16, 2026. (Carscoops, KBB)
7. Scale context: recall is Lucid's largest ever; exceeds full-year 2025 deliveries of 15,841. May 2026: 2,039 recalled (drive power loss). Jan 2026: 10,000+ (rearview camera). (Reuters)
8. No crashes or injuries attributed; Lucid unaware of any related accidents/injuries per filing pattern. (treat carefully: filings say "not aware of accidents or injuries" per Autoblog/CarBuzz pattern; for Lucid, sources emphasize fires/smoke, no injury claims reported)

## Original calculations for article
- Recall / 2025 deliveries: 27,185 / 15,841 = 1.716 -> the recall covers about 172% of everything Lucid delivered last year.
- Unpatched share: 6,466 / 27,185 = 23.8% of recalled cars still vulnerable at filing.
- First fire to recall: June 2023 -> Aug 28, 2026 = ~38 months.
- Fires+smoke per vehicle: 7 thermal events / 27,185 = ~26 per 100k vehicles (plus 33 wiring-damage warranty claims).

## Limitations (must state in article)
- FARS not involved; this is a recall story, not a fatality-rate story. No deaths/injuries reported.
- Fire counts come from Lucid's own filing to NHTSA; independent verification not available.
- "Nearly every Air ever built" is approximate: production dates Oct 2021-Jul 2026 vs recall population; some early cars may have left the fleet.

## Strongest counterargument
OTA remedy means this is arguably the best-handled large recall in the industry: fix deployed before announcement, 76% patched via telemetry before the letters even print, zero dealer visits, zero injuries. The system (telemetry + OTA) worked. The story is not "Lucid is doomed" but "the fuse became software, and software has bugs."

## Actionable takeaway
If you own a 2022-2026 Lucid Air: check software version, install v2.10.0+, park outside until then. General lesson: for software-defined cars, installing OTA updates promptly is now a fire-safety action, not a convenience.

## Sources
1. Reuters, "EV maker Lucid to recall more than 27,000 luxury sedans over fire risk, NHTSA says," 2026-08-28. https://www.reuters.com/legal/litigation/lucid-recall-more-than-27000-luxury-sedans-over-fire-risk-nhtsa-says-2026-08-28/
2. KBB, "Lucid Recalls Over 27,000 Vehicles, Issues 'Park Outside' Order." https://www.kbb.com/car-news/lucid-recalls-over-27000-vehicles-issues-park-outside-order/
3. Carscoops, "Lucid Air Recall Has Owners Parking Outside While Software Plays Firefighter," 2026-08. https://www.carscoops.com/2026/08/lucid-air-recall-ota-update/
4. Autoblog, "Nearly Every Lucid Air Ever Built Is Being Recalled Over a Fire Risk." https://www.autoblog.com/news/nearly-every-lucid-air-ever-built-is-being-recalled-over-a-fire-risk
5. MotorBiscuit, "Over 27,000 Lucid Airs Recalled Over Fire Risk as Owners Told to Park Outside." https://www.motorbiscuit.com/over-27000-lucid-airs-recalled-over-fire-risk-as-owners-told-to-park-outside/
6. NHTSA recalls database (parent page, per guide rule on specific URLs). https://www.nhtsa.gov/recalls
