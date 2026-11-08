# Research Notes — #1429: Hyundai Airbag Computer Reboot Corruption (26V728)

**Slug:** `1429-hyundai-airbag-computer-reboot-corruption`
**Journalist:** Mia Crumplezone (Safety Engineering Editor — safety-tech beat)
**Number:** 1429
**Ship date target:** 2028-06-11 (1 day after #1428's 2028-06-10)

## Kill Test
**Verdict: PROCEED.** A brand-new recall (filed Nov 2, 2026; VINs searchable Nov 6) with a failure mode nobody has covered on this site: the airbag control unit can corrupt its own memory if it reboots mid-write, silently deactivating the airbags and pretensioners. It is the automotive equivalent of yanking a USB drive mid-save, except the file being written is the one that decides whether your airbags fire. Coverage check: no draft or story mentions 26V728 or airbag-control-unit corruption; Veloster/Kona stories on file are FARS death-rate pieces, not this recall. GM L87, Ford Maverick camera query, and RAV4/Kicks IIHS stories were all considered and rejected as already covered.

## Verified Facts (primary sources)

| Fact | Value | Source |
|---|---|---|
| NHTSA campaign | 26V728, Hyundai campaign 311 | Part 573 report |
| Recall filed | November 2, 2026 | Part 573 report |
| Vehicles affected | 37,901 total | Part 573 report |
| Veloster N 2019-2022 | 8,843 (built Sep 6, 2018 - Aug 18, 2022) | Part 573 report |
| Kona Electric 2019-2023 | 29,058 (built Aug 28, 2018 - Jul 26, 2023) | Part 573 report |
| Estimated defect rate | 1% | Part 573 report |
| Defect | Data corruption during routine writes to ACU memory; airbag MIL illuminates, airbag system deactivates | Part 573 report |
| Cause | System reboot or power interruption while ACU is writing data to internal memory | Part 573 report |
| Safety risk | Deactivated system may not deploy airbags in a crash | Part 573 report |
| Supplier | ZF Group (Tier 1, Korea) | Part 573 report |
| ACU part numbers | 95910-K4100 (Kona EV), 95910-K9100 / 95910-K9150 (Veloster N) | Part 573 report |
| Incidents | 331 unique incidents, Oct 3, 2019 - Sep 24, 2026 | Part 573 report |
| Crashes / fires / injuries | None in the U.S. related to this condition | Part 573 report |
| Investigation opened | Aug 19, 2024, after rise in airbag warning-light warranty claims | Part 573 report |
| ZF analysis | 5 recovered ACUs sent Sep-Dec 2024; ZF could NOT reproduce on a vehicle, COULD induce the fault on the bench | Part 573 report |
| Stress testing | May-Aug 2025 electrical stress tests across expanded voltage range | Part 573 report |
| Scope widened | Sep 18, 2026: additional vehicle applications might carry same ACU driver software | Part 573 report |
| Recall approved | Oct 22, 2026 by Hyundai North America Safety Decision Authority | Part 573 report |
| Remedy | Free ACU software update at dealer, regardless of warranty status | Part 573 report |
| Remedy design | Updated software preserves last known valid data if data transfer is interrupted | Part 573 report |
| Reimbursement | Out-of-pocket reimbursement per plan filed Mar 2, 2026 | Part 573 report |
| VINs searchable | Nov 6, 2026 at nhtsa.gov/recalls | Part 573 report |
| Owner letters | Certified mail by Jan 1, 2027; dealer notification Jan 1, 2027 | Part 573 report |
| No Do Not Drive / Park Outside advisory | Confirmed | Part 573 + BizzyCar |
| Production status | Both affected models no longer in production | Part 573 report |

## Original Contribution (novel analysis)
1. **The observed incident rate matches the defect estimate almost exactly.** 331 incidents / 37,901 vehicles = 0.87%, against Hyundai's estimated 1% with the defect. That is unusually tight agreement for a recall filing, and it means the 1% figure is not a guess padded for regulators; it is what seven years of field data already showed.
2. **The fix is the textbook answer to this exact failure mode.** Preserving the last known valid data on interrupted transfer is the write-ahead / atomic-commit pattern from database engineering, applied to a safety computer. Hyundai spent two years and five recovered ACUs arriving at a fix that amounts to "don't overwrite the good copy until the new copy is complete."
3. **The bench-vs-vehicle gap matters.** ZF could induce the fault on the bench but never once on a vehicle across a year of replication attempts (Sep 2025 - Aug 2026). The defect needs a reboot or power interruption landing inside a write window that lasts milliseconds. That rarity is why it took five years from the first incident (Oct 2019) to a recall (Nov 2026), and why the warning light, not a crash, is how every one of the 331 cases surfaced.
4. **Both models are dead, so the recall population is fixed and shrinking.** No new vehicles can enter the pool; every car sold or scrapped only reduces exposure. The risk window is the gap between now and the January 1, 2027 owner letters, plus however long owners take to book a free software update.

## Strongest Counterargument
No one has been hurt. Zero crashes, zero fires, zero injuries across seven years and 331 incidents, in a recall population where only about 1% of cars are estimated to carry the defect at all. The airbag light warns the driver before the system goes dark, and the fix is a free software flash. Against that, the counterweight is simple: a deactivated airbag system is invisible in a crash until the moment it matters, and the warning light only helps if the owner treats an airbag light as urgent rather than as another dashboard nuisance to ignore until the next oil change.

## Limitations
- FARS is not involved; there are no fatality data behind this story, only warranty claims and bench tests.
- The 331 incidents are self-reported warranty/field claims, not a census; undercounting is likely because owners who ignored the light or paid out of pocket may never have entered Hyundai's data.
- Root cause is inferred from bench induction, not observed on a vehicle; ZF never reproduced the failure in a running car.
- The 1% estimate is Hyundai's, derived from its own field analysis, not independently audited.

## Actionable Takeaway
If you own a 2019-2022 Veloster N or 2019-2023 Kona Electric: check your VIN at nhtsa.gov/recalls now, do not wait for the January certified letter. If your airbag light is on, call a dealer this week; the software update is free whether or not your warranty is still active. If you already paid to fix this, you qualify for reimbursement under the plan Hyundai filed March 2, 2026.

## Sources
1. NHTSA, Part 573 Safety Recall Report 26V728 (Hyundai Motor America, filed Nov 2, 2026). https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V728-4779.pdf
2. BizzyCar, "November 2026 Hyundai Recall for Airbag Control Unit Data Corruption, Affecting 37,901 Vehicles," Nov 6, 2026. https://www.bizzycar.com/blog/november-2026-hyundai-recall-for-airbag-control-unit-data-corruption-affecting-37901-vehicles
3. Vehicle Service Pros, "NHTSA Recalls Nov. 2-6: GM, Hyundai, Subaru, Dodge," Nov 2026. https://www.vehicleservicepros.com/industry-news/service-repair/article/55417032/nhtsa-recalls-nov-26-gm-hyundai-subaru-dodge
4. NHTSA recalls database (VIN lookup). https://www.nhtsa.gov/recalls
