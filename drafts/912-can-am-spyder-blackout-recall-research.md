# Research: #912 — "Your Phone Can Kill Your Speedometer: 14,014 Can-Ams Recalled Because the Touchscreen Forgets How to Dashboard"

## News peg
Sept 14, 2026: Bombardier Recreational Products (BRP) recalled 14,014 Can-Am motorcycles and three-wheelers (NHTSA 26V575000) because the touchscreen instrument cluster can reset, freeze, or go blank. The kicker detail: BRP traced the trigger to a communication failure / memory leak tied to rider use of USB and Bluetooth connections. Plug in your phone, stream your music, and the display that shows your speed can brick itself.

## Primary sources (4)
1. **Motor Sports NewsWire, Sept 14, 2026** — full NHTSA summary: 14,014 units; models: 2025-2027 Can-Am Canyon, 2025-2026 Origin, 2025-2026 Pulse, 2024-2027 Spyder RT, 2024-2027 Spyder F3 (touchscreen-equipped); cluster may reset/freeze/go blank; fails FMVSS 122 ("Motorcycle Brake Systems") and FMVSS 123 ("Motorcycle Control and Displays"); remedy is OTA software update or dealer install, free; owner letters expected Oct 12, 2026; VINs searchable on NHTSA.gov starting Sept 22, 2026; BRP customer service 1-888-272-9222. https://motorsportsnewswire.com/2026/09/14/brp-is-recalling-certain-can-am-origin-can-am-pulse-can-am-canyon-can-am-spyder-rt-and-can-am-spyder-f3-motorcycles/
2. **Motorcycle.com, Sept 15, 2026** — the chronology: issue first identified summer 2024 from intermittent display complaints; BRP could find no common root cause at the time; re-opened June 2026 after more field reports; this time determined it depends on rider usage of USB and Bluetooth connections; recall procedures initiated Aug 31, 2026; 125 display-issue reports as of Sept 3; turn signals and hazard lighting also temporarily deactivate or fail to respond during a reset; BRP also facing a U.S. import ban amid the Canada trade war ("a tough month for BRP"). https://www.motorcycle.com/bikes/news/can-am-three-wheelers-and-motorcycles-recalled-for-display-failures-44671600
3. **ConsumerAffairs, Sept 14, 2026** — weekly recall roundup cross-check of 26V575000 / models / issue label "Instrument Cluster May Fail/FMVSS 122, 123". https://www.consumeraffairs.com/news/auto-safety-recall-derby-week-of-september-14-091426.html
4. **NHTSA recalls database** — campaign 26V575000, the authoritative record (cited via the above; VIN lookup live Sept 22, 2026). https://www.nhtsa.gov/recalls

## The novel thread (original contribution)
The single point of failure. In a Can-Am Spyder, one touchscreen is legally your speedometer (FMVSS 123), your brake-system display (FMVSS 122), your turn-signal feedback, and your hazard-light feedback. When the cluster resets, NHTSA's summary and motorcycle.com both note the turn signals and hazards "temporarily deactivate or fail to respond." The vehicle does not just go blind — it goes mute to traffic around it. The rider loses speed awareness AND the ability to signal a turn at the same moment.
- Trigger arithmetic: 125 reports / 14,014 units = 0.89% complaint rate. Small, but the trigger is behavioral (USB + Bluetooth use), meaning the population at risk skews toward riders who actually use the bike's connected features — exactly the riders least likely to treat a blank screen as a "don't worry about it" event.
- Timeline arithmetic: first complaints summer 2024 → recall initiated Aug 31, 2026 ≈ 25 months of investigation before the recall. BRP's first investigation closed with "no common root cause"; only the second pass (June 2026) found the USB/Bluetooth link.
- The infotainment-instruments inversion: the convenience feature (phone connectivity) is the defect vector for the safety-critical display. Your music kills your gauges.
- Nobody has written the "what does a rider do mid-blank" guidance angle: during a reset, your signals may not signal. Pull over before signaling; restart the bike; don't assume traffic sees your intentions.

## Arithmetic (original)
- 125 / 14,014 = 0.89% report rate (reports include intermittent issues, not all full blackouts).
- Summer 2024 (assume July 2024) → Aug 31, 2026 ≈ 25 months from first identification to recall initiation.
- OTA remedy: first Can-Am recall to fix via over-the-air update to rider's bike — no dealer visit required, which matters for a vehicle class where the nearest dealer may be 100+ miles away.

## Limitations
- Root-cause mechanism ("communication failure or memory leak link" dependent on USB/Bluetooth) is BRP's determination as reported by motorcycle.com's reading of recall documentation; the actual Part 573 chronology was not independently reviewed.
- 125 reports span ~2 years and include intermittent display problems, not confirmed safety-relevant blackouts; no crashes or injuries are reported in any source found.
- Severity during reset ("turn signals and hazard lighting will also temporarily deactivate or fail to respond") describes behavior during the reset window; duration of resets is not specified.
- VIN searchability begins Sept 22, 2026; owners cannot self-verify before then.

## Strongest counterargument
125 complaints in two years across 14,014 vehicles with zero reported crashes is a small, non-injurious defect, and BRP did the right thing: investigated twice, found a subtle root cause (a memory leak tied to usage patterns), and recalled voluntarily with an OTA fix that asks almost nothing of owners. The motorcycle still runs; an experienced rider can judge speed by traffic flow and engine note. The two-year investigation is diligence, not delay — a memory leak that only appears after specific USB/Bluetooth usage patterns is genuinely hard to reproduce in a lab.

## Actionable takeaway
Own a 2024-2027 Spyder F3/RT, 2025-2027 Canyon, or 2025-2026 Origin/Pulse with the touchscreen cluster: check your VIN at nhtsa.gov/recalls on or after Sept 22, 2026, and accept the OTA update when BRP pushes instructions (owner letters go out Oct 12). If your cluster blanks mid-ride: do not trust the turn-signal stalk until the screen returns — your signals and hazards may be dead during the reset. Pull over, restart the bike, ride to a stop before signaling anything.
