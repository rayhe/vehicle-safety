# Research — #1038: Toyota recalled the Prius twice for rear doors that open while you drive

## Angle
Toyota's 5th-gen Prius has an electronic rear-door latch that water can short-circuit, letting an unlocked rear door open while the car is moving. Toyota recalled 55,700 cars in April 2024 (24V274) with a switch-replacement remedy. In January 2026 it filed a second recall (26V049) for the SAME defect on 141,286 cars — expanding AND replacing the first — and every car "fixed" under the first recall has to come back for a different, circuit-level fix. The gasket fix addressed the seal. The real defect is electrical logic: the latch treats a short circuit as an "open" command.

## Kill test
PASS. Genuinely newsworthy: America's most famous reliability brand paying to fix the same doors twice. Novel data: (1) defective population grew 2.5x between recalls while the "remedy" was supposedly deploying; (2) the remedy escalated from parts replacement (2024 switch) to circuit modification (2026) — a structural admission the first fix addressed the seal, not the failure mode; (3) the failure mode is architecturally impossible with a mechanical latch, and FMVSS door-retention standards were written for mechanical latches. Cross-border corroboration: Transport Canada issued the parallel recall (2026-034, 19,399 vehicles) expanding its own 2024-228 on the same day.

## Primary sources
1. **NHTSA RCAK-26V049-9972.pdf** (Feb 3, 2026): Toyota's recall notification to NHTSA. 141,286 units: 2023-2026 Prius, 2023-2024 Prius Prime, 2025-2026 Prius Plug-In Hybrid. "Water may enter the rear door switch and cause a short circuit, allowing an unlocked rear door to open unexpectedly." Remedy: dealers modify rear door switch circuits. Owner letters mailed March 15, 2026. Toyota numbers 26TB03 / 26TA03. "This recall expands and replaces NHTSA recall number 24V274. Vehicles repaired under the previous recall will need to have the new remedy performed."
   - https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V049-9972.pdf
2. **Toyota dealer notice 24TA06 (April 17, 2024)** for the first recall 24V274: 55,700 vehicles (42,600 Prius + 13,100 Prius Prime), condition = "Water can enter and short circuit the electronic rear door latches... If the doors are not locked, they could open while the vehicle is moving or in a crash." Remedy at the time: replace both rear door opener switches with improved ones. Stop-sale on ~1,800 dealer inventory.
   - https://attachments.priuschat.com/attachment-files/2024/04/249797_RCMN-24V274-2871.pdf
3. **Transport Canada recall 2026-034** (Jan 29, 2026): 19,399 Canadian Prius/Prius Prime 2023-2026, same defect, expands Transport Canada 2024-228; vehicles repaired under the first recall also require the new repair. Toyota internal: SRC RL6. Reported via Motor Illustrated / Carscoops.
4. **Cox Media Group / AP coverage** (Feb 10, 2026, Natalie Dreier): confirms expansion-and-replacement framing and that previously repaired vehicles must return.
   - https://www.autoblog.com/hybrids/toyota-recalls-the-prius-again-over-doors-that-can-open-while-driving
5. **DealershipGuy / Toyota chronology**: Toyota found the problem after a February 2025 field report from Japan of a rear door opening to half-latch while driving; Toyota estimates ~1% of recalled vehicles have the defect; switch supplier is Tokai Rika.
   - https://news.dealershipguy.com/p/toyota-is-recalling-over-141k-vehicles-for-rear-doors-that-might-open-while-driving-2026-02-11
6. NHTSA recalls database (general): https://www.nhtsa.gov/recalls

## Numbers for the article
- 24V274 (Apr 17, 2024): 55,700 US vehicles; switch-replacement remedy; stop-sale on ~1,800 inventory.
- 26V049 (filed Jan 28, 2026): 141,286 US vehicles = 2.54x the first population.
- Gap between recalls: ~21.5 months, during which Toyota kept building 2025-2026 MY Priuses with the same electronic latch.
- Canada: 19,399 (2026-034), same timeline.
- Trigger: Feb 2025 Japan field report, rear door to half-latch while driving.
- Defect estimate: Toyota says ~1% of recalled vehicles (still ~1,400 cars).
- Owner notification letters: March 15, 2026.

## Original contribution
- **Population-math**: the defective population more than doubled (55,700 -> 141,286) while Toyota's first remedy was in the field. The company kept shipping the vulnerable latch architecture into new model years during an open investigation of its failure.
- **Remedy-escalation analysis**: 2024 remedy = replace the switch (parts-level, sealing fix). 2026 remedy = modify the switch circuits (logic-level: prevent activation even if shorted). The change in remedy type is Toyota's own admission that the first fix addressed the water path but not the failure mode — a switch that interprets a short as an open command.
- **Design-trend framing**: a mechanical latch cannot be opened by rain. The 5th-gen Prius's flush electronic rear handles were praised as a design upgrade; the failure mode (water completes a circuit the latch reads as a command) exists only in electronic-latch architecture. Federal door-retention rules (FMVSS 206) were written for mechanical latches; the failure here isn't a latch breaking, it's a latch obeying.

## Limitations
- I do not have Toyota's count of post-24V274 remedy failures; the only documented trigger is the February 2025 Japan half-latch field report. The replacement of 24V274 is circumstantial evidence the first remedy was insufficient, not a published failure count.
- Toyota estimates only ~1% of recalled vehicles have the defect; the vast majority of the 141,286 will never experience it.
- No injuries or crashes are documented in the recall filings I reviewed; the consequence is "increases the risk of injury."

## Strongest counterargument
The best case for Toyota: electronic latches are on millions of vehicles across the industry with vanishingly rare failures; Toyota recalled voluntarily, twice, and the interim advice (enable auto door lock) fully mitigates the risk; 1% is a tiny defect rate; the second recall is the system working, not the system failing. This is fair. But the counter: a door is not a taillight. A failure mode where rain opens your door at highway speed should not exist in the architecture at all, and Toyota's own remedy history (seal, then circuit) shows it took two tries to agree.

## Actionable
- 2023-2026 Prius / Prius Prime / Plug-In Hybrid owners: check your VIN at nhtsa.gov/recalls (26V049, Toyota 26TB03). If you were "fixed" under the 2024 recall, you are NOT done — the new remedy supersedes it.
- Until the fix: enable automatic door locking in the vehicle settings (this prevents the short from opening the door).
- Shopping used: any 2023-2026 Prius with a rear-door recall marked "complete" before 2026 may still carry the interim remedy; verify 26V049 specifically.
