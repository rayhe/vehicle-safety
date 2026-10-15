# Research — #1174: Honda's fifth fuel-pump stall recall (26V633)

**Journalist:** Vin Wreckage | **Kicker:** Existential Dread
**Slug:** `1174-honda-fuel-pump-stall-saga`
**Headline:** "Honda Has Recalled 3.3 Million Fuel Pumps. The Motorcycles Were Just the Latest Chapter."

## What happened

- **NHTSA Recall 26V633000** (report received October 1, 2026): Honda is recalling **4,206** motorcycles because the fuel pump may malfunction due to a manufacturing defect. Failure = engine stall = crash risk.
- Affected: **2023–2025 VT1300CX** (the Fury, Honda's chopper-styled cruiser) and **2024–2025 VT750** (Shadow Phantom / Shadow Phantom ABS, the 745cc V-twin). NHTSA does not split the 4,206 by model.
- Remedy: dealers replace the fuel pump, free. VINs searchable on NHTSA.gov since **October 8, 2026**. Owner letters begin **November 27, 2026**. Honda campaign number **KU9**; owner line 1-866-784-1870.
- Zero crashes/injuries reported to date (per coverage; NHTSA record lists the standard stall consequence).

## The saga (original contribution: the timeline nobody assembled)

Honda's fuel-pump recall count, all from NHTSA records in `hidden_files/rcl-data/FLAT_RCL_POST_2010.txt`:

| Campaign | Filed | Units | Vehicles | Defect |
|---|---|---|---|---|
| 23V858000 | Dec 2023 | 2,490,460 | 2013–2023 Accord, Civic, CR-V, HR-V, Ridgeline, etc. | Improperly molded fuel-pump impellers deform → stall |
| 24V763000 | 2024 | 720,810 | 2023–2025 Accord/CR-V/Civic hybrids | High-pressure fuel pump may crack and leak → fire risk |
| 24V113000 | 2024 | 29,301 | 2018–2024 Goldwing, CBR600RR, 2018–2019 CBR1000RR | Improperly molded impellers → stall |
| 24V864000 | 2024 | 40,481 | 2007–2021 CBR600RR/CBR1000RR, VFR1200 | Improperly molded impellers → stall |
| 26V633000 | Oct 2026 | 4,206 | 2023–2025 VT1300CX Fury, 2024–2025 VT750 Shadow | Fuel pump malfunction (mfr defect) → stall |

- **Running total: 3,285,258 Honda fuel pumps recalled in under three years.**
- Stall-specific subtotal (impeller/stall campaigns): 2,490,460 + 29,301 + 40,481 + 4,206 = **2,564,448**.
- The pattern: Dec 2023 starts with cars. 2024 brings the motorcycles (three separate bike campaigns). October 2026: the cruisers. Each wave is a different model family discovering the same component can't be trusted.

## Kill test

- Newsworthy? Yes — fresh recall (VINs live Oct 8), and a stall on two wheels at speed is a qualitatively different danger than a stall in a Civic.
- Novel angle? Yes — no outlet has framed 26V633 as chapter five of a 3.3M-unit fuel-pump saga; coverage treats it as a standalone 4,206-bike recall.
- Original contribution? Yes — the five-campaign tally and timeline, computed from primary NHTSA records.
- Verdict: PROCEED.

## Duplicate check

- Grep of full queue (380 entries) + stories/ for `26v633`, `vt1300`, `vt750`, `23v858`, `24v763`, `24v113`, `24v864`, `fuel pump impeller`: no hits. "fuel pump" appears in stories only in unrelated contexts; "motorcycle" stories exist (AEB gap, unlicensed deaths) but none on Honda fuel pumps.
- The Dec 2023 mega-recall (23V858) was never covered as a Crash Report article.

## Actionable takeaways (for article)

- Own a 2023–2025 Fury or 2024–2025 Shadow Phantom? Check your VIN at nhtsa.gov/recalls now — letters don't arrive until Nov 27. The lookup has been live since Oct 8.
- The fix is a free fuel-pump replacement at a Honda dealer. Do not keep riding a bike that stutters or dies at idle — that's the pump telling you first.
- Buying a used Honda bike (2018+ Goldwing/CBR/VFR, Fury, Shadow)? Run the VIN for open fuel-pump recalls before money changes hands. Five campaigns means the odds a given used Honda has pump history are non-trivial.

## Limitations (for article)

- NHTSA's 26V633 summary does not name the supplier or specify the impeller defect; "manufacturing defect" is all Honda disclosed. Do NOT claim 26V633 shares the Denso impeller root cause — the earlier bike campaigns (24V113, 24V864) documented improperly molded impellers, but the Fury/Shadow filing doesn't say.
- The 3.3M tally mixes two failure modes (stall vs. crack/leak fire risk); the article must keep the stall subtotal (2.56M) distinct from the grand total.
- Affected-unit counts are NHTSA "potential" figures; the true defective fraction is unknown.

## Strongest counterargument (for article)

Honda found the problem, reported it, and is fixing it free — five recalls is arguably the system working, not failing. And 4,206 bikes is small; the headline total is dominated by the 2023 car campaign. Fair. The dread isn't the count, it's the recurrence: three years, five campaigns, and the component at the center keeps being the fuel pump.

## Sources

1. NHTSA recall record 26V633000 — `hidden_files/rcl-data/FLAT_RCL_POST_2010.txt` (primary); NHTSA API `api.nhtsa.gov/recalls/campaignNumber?campaignNumber=26V633000` (primary).
2. NHTSA recall records 23V858000, 24V763000, 24V113000, 24V864000 — same flat file (primary).
3. TunedDrive, "Honda Recalls Certain VT1300CX and VT750 Motorcycles for Fuel Pumps," Oct 9, 2026. https://www.tuneddrive.com/news/honda-recalls-certain-vt1300cx-and-vt750-motorcycles
4. Motor Sports NewsWire, "Honda Recall: Fuel Pump May Fail," Oct 12, 2026. https://motorsportsnewswire.com/2026/10/12/honda-recall-certain-2023-2025-vt1300cx-and-2024-2025-vt750-motorcycles/
5. motorcycleinsurancereviews.net, "Honda Fury and Shadow Recall 26V633: Fuel Pump Stall Risk." https://motorcycleinsurancereviews.net/honda-fury-shadow-fuel-pump-recall/
6. NHTSA recalls database, https://www.nhtsa.gov/recalls (VIN lookup).
