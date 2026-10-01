# Research: 1037 — NHTSA Filed Two Recalls of Repairs One Number Apart. Ford's Turn: The Mach-E BECM That Lies About Charge.

## Angle
In the same week of September 2026, NHTSA filed two recalls whose defect entered through the repair channel itself: Daimler's 26V583 (wrong brake modulator valves installed under earlier recall repairs, 2,404 trucks) and Ford's 26V582 (replacement Battery Energy Control Modules whose software can overstate charge and cause high-voltage battery fires, 86 Mach-Es). They are consecutive campaign numbers. The Crash Report already covered Daimler's half as #916 ("Welcome to the Recalled Recall"). This piece covers Ford's half and makes the structural point neither story made alone: the service-parts and dealer-repair channel is a defect vector, and it is harder to track than the factory line because replacement modules entered through BOTH warranty repairs AND over-the-counter parts sales.

## Kill test
- Newsworthy? Yes: NHTSA 26V582 filed Sep 10, 2026; first press Sep 19-20; interim owner letters going out now (Oct 2026).
- Novel? Yes: the consecutive-number pairing (26V582000 / 26V583000) filed in the same week is an original cross-tab. Nobody has framed the two September repair-channel recalls as one phenomenon. #916 covered Daimler; this is Ford's twin.
- Duplication check: #752 covered Mach-E recall history but not BECM. #916 covered Daimler 26V583 but not Ford 26V582. Queue search for becm/26S68 = NONE. The "recall of repair" frame exists only for Daimler. This is Ford's chapter, with #916 cited as the sibling, not duplicated.

## Primary sources
1. **NHTSA Recall 26V582000 (Ford 26S68)** (filed Sep 10, 2026): 86 vehicles — 2023-2025 Ford Mustang Mach-E that received a new Battery Energy Control Module (BECM) during a prior repair. Module software may cause incorrect state of charge display, unexpected loss of drive power, and increased risk of high-voltage battery fire after repeated DC fast charging. Dealers update BECM software free. Interim letters expected Sep 18 / Oct 26 (sources differ; see limitations). Remedy software anticipated December 2026. VINs searchable on NHTSA.gov since Sep 9, 2026. https://oemdtc.com/recall/26V582000/
2. **Ford Authority** (Sep 20, 2026): defect detail — new service BECMs (part nos. PZ98-10B687-K and PZ98-14C197-K) calibrated to 100% state-of-charge rather than the pack's actual SoC; if actual SoC is lower than displayed, unexpected power limitation and eventual loss of forward power; can also cause severe high-voltage condition leading to fire. Ford unaware of accidents, injuries, fires. https://fordauthority.com/2026/09/ford-mustang-mach-e-becm-recalled-over-incorrect-software/
3. **Autobodynews** (Sep 2026): the LFP detail — affected cars are 2023-2025 Mach-Es with lithium iron phosphate (LFP) batteries; service BECMs from BOTH over-the-counter sales and warranty repairs can cause the problem; replacement modules default to 100% battery state of health instead of reading actual pack condition. Interim letters mailing Oct 26-29. https://www.autobodynews.com/news/f-150-fuel-tank-straps-a-bronco-side-air-curtain-defect-and-a-mach-e-battery-module-recall
4. **The Truth About Cars** (Sep 2026): "Bad Software Update Sends 86 Mach-Es Back to the Shop" — the trigger was a repair-time software update, not a factory error; cars that came in for service and left with the wrong code loaded. https://www.thetruthaboutcars.com/cars/news-blog/bad-software-update-sends-86-mach-es-back-to-the-shop-45136465
5. **#916 research (internal)**: Daimler DTNA recall 26V583 / F1039 — 2,404 trucks (2,403 Freightliner Cascadia 4x2 2020-2023 + 2 Western Star 49X 2022), wrong brake modulator valves installed during earlier recall repairs under 23V073/22V817; corrosion risk, brake pull under ESC/RSC; discovered in internal process review late Aug 2026; decided Sep 8, 2026; owner letters Nov 8, 2026. drafts/916-freightliner-modulator-recall-of-recall-research.md
6. **CarPro weekly recalls** (Sep 2026): corroborates 26S68 summary — incorrect state of charge display or increased risk of high-voltage battery fire after repeated DC fast charging; remedy anticipated December 2026. https://www.carpro.com/blog/weekly-recalls-buick/chevrolet-ford-2-jeep-rivian-toyota/lexus-volkswagen

## Key numbers
- 86 vehicles in Ford 26V582 (NHTSA 26V582000 / Ford 26S68)
- 2 BECM service part numbers: PZ98-10B687-K, PZ98-14C197-K
- Module defaults to 100% SoC/SoH instead of actual pack condition
- 2,404 trucks in Daimler 26V583 (the sibling recall, filed one campaign number later)
- VINs searchable Sep 9, 2026; remedy software not available until December 2026 (~3 month gap)
- 0 accidents, injuries, fires reported (Ford, as of filing)

## The novel observation/calculation
The consecutive-number cross-tab: NHTSA campaigns 26V582000 and 26V583000 were filed within days of each other in September 2026, and BOTH trace the defect to the repair channel rather than the factory. The structural observation: recall effectiveness and owner-notification systems are built around VIN + factory records, but the defect vector here is the SERVICE-PARTS supply chain — replacement BECMs sold over the counter leave no dealer-service trail, so those owners may never get an owner letter. Ford's own remedy timeline makes the point starker: a fire-risk defect disclosed in September with no fix until December, and interim letters telling owners to wait.

## Limitations (for the article)
- 86 vehicles is a tiny population; fire risk is conditional (requires repeated DC fast charging cycles).
- Interim letter mailing dates conflict across sources (Sep 18 per oemdtc vs Oct 26 per CarPro/autoindiadaily; autobodynews says Oct 26-29). Article will note the discrepancy, not pick one.
- Ford's build-date ranges conflict slightly across sources (fordauthority lists Jul 3, 2023 - Sep 7, 2026 production with BECM parts; TTAC says built Jul 3, 2023 - Aug 26, 2025). Article will use the vehicle population (2023-2025 MY Mach-E with replaced BECM) rather than adjudicating.
- Cannot verify how many of the 86 entered via over-the-counter sales vs warranty repairs — article will present this as the un-tracked risk, not a counted one.
- LFP packs are generally more thermally stable than NMC; article will quote Ford's filed fire-risk language without claiming LFP packs are especially flammable.

## Counterargument (strongest)
Eighty-six cars. Zero fires. Zero injuries. Ford caught this through its own internal process and disclosed it — the system working, arguably. The dominant failure is a lying dashboard gauge (incorrect SoC display), not combustion; the fire scenario is a conditional tail risk after repeated DC fast charging. A sober reader could file this under "tiny software recall, handled." The honest frame: the recall's importance isn't its size, it's the vector — service parts are the least-scrutinized supply chain in the recall system.

## Actionable insight
If you own a 2023-2025 Mustang Mach-E (LFP battery) and had a BECM replaced: check your VIN at nhtsa.gov/recalls NOW and call Ford at 1-866-436-7332 referencing 26S68 — do not wait for the letter. If you bought a BECM over the counter and installed it yourself or at an independent shop, you may not be in Ford's owner-letter system at all. Until the December software update: watch for the charge gauge reading suspiciously high (stuck near 100%), and go easy on repeated DC fast charging. General: always ask your dealer whether recall repairs on your car were done with software-only or hardware fixes, and confirm completion with a fresh VIN check — the repair itself can be the defect.

## Journalist
Mia Crumplezone (Safety Engineering Editor) — she wrote #916 on the Daimler half; this is the Ford chapter of the same beat. Kicker: Investigation.
