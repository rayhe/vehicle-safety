# Critic Panel — Round 0 — #1492 Tesla Recall Census (Vin Wreckage)

**Article:** drafts/1492-tesla-recall-census-4-zero-ota-fixes.html
**Date:** November 13, 2026
**Hard gates (regex, source of truth):** em dashes 0 (max 3) | banned phrases 0 | "The" sentence starters 7.3% (max 15%) | class="story" + ../style.css OK | hero real JPEG 1920x1280, md5 3ee9262b | sentence rhythm PASS (variance 225.5, short 10.4%, long 61.2%) | body words 1,759 (series norm; #1491 was 1,775)

## 1. General Editor — 8.5/10

Structure holds: lede with bolded stat, pull stat, method, four campaigns in ascending population order (sticker, wheel, bolt, buyback), sixteen-brand context, outside-census coda, the October ghost, action list, limitations, counterargument. Every section earns its place. Two deductions. First, the lede restates the headline almost verbatim ("four safety recalls... not one could be fixed over the air"), so the first paragraph adds no new information beyond the headline. Second, the method section's payoff sentence and the "On paper is doing a lot of work in that sentence" line are both lifted nearly verbatim from #1491. In a series that ships daily, that kind of boilerplate is how a voice collapses into a template. The article is publishable, but the next census run needs fresh connective tissue, not recycled sentences.

## 2. Voice Coach — 8.5/10

Vin is audible: "the bolt keeps winning," "the fix is to take them back," "a sticker cannot be downloaded," "the car is still, underneath all of it, a machine made of bolts." Rhythm passes cleanly after the round-0 merge pass (variance 225.5, short 10.4%, long 61.2%). No banned phrases, no AI tells. Deduction is the same as the General Editor's: two sentences from #1491 ("That is a clean zero with receipts, not an absence of evidence dressed up as a finding" and "On paper is doing a lot of work in that sentence") are Rex Driverton's sentences wearing a Vin byline. If you can swap the byline and nothing changes, the voice has failed, and here it fails on exactly two sentences. Long-sentence density at 61.2% is also on the heavy side; Vin reads best when the long builds are broken by more short punches.

## 3. Ethics Reviewer — 9.0/10

No defamation exposure: every damaging claim is attributed to a NHTSA Part 573 filing or a named press source, and the strongest charge (Tesla issued Certificates of Conformity "falsely confirming" US compliance) is supported by the NHTSA owner letter rescinding those letters and by Tork.buzz's reporting. No crash victims are named or speculated about. No injuries or deaths are claimed anywhere the filings do not support them; the article repeats the filings' "no crashes, injuries, or fatalities" language each time. Tesla is treated fairly: the counterargument concedes the clean-year reading at full strength. Minor note: "the bolt keeps winning" anthropomorphizes a fastener, which is a joke, not an ethical lapse.

## 4. Social/Shareability — 8.5/10

The headline is the share: "Not One of Them Could Be Fixed Over the Air" is the kind of sentence that travels. The pull stat is a single character, 0, which renders well in a card. The 173 and the 15 are strong secondary hooks, and the October ghost (a year-old filing covered as breaking news) is the detail people quote in replies. Deduction: 1,759 words is long for a share-through read, and the sixteen-brand table is delivered as prose rather than a scannable table, so the comparison that makes the census land is harder to screenshot. The article will be shared for its headline and its three small numbers, not read end to end.

## 5. Legal Accuracy — 9.0/10

FMVSS citations check out: 208 unbelted requirements (S5.1.2(b), S15.2), 201 S6 interior countermeasures, Part 581 bumper procedures, 111 S5.5.3 rear visibility, 49 CFR Part 567 certification. Campaign numbers, filing dates, populations, and Tesla internal numbers (SB-26-33-003, SB-26-19-002, SB-26-31-004, SB-26-00-016) all verified against Part 573 PDFs or NHTSA letters. The filing-date vs API ReportReceivedDate distinction is handled explicitly for 26V315 and 26V558. The S/X sunset claim is sourced to Tesla's own 10-Q. One nit: the 26V507 headlight campaign is listed in research without a pulled population, and the article correctly avoids citing a number for it. No legal claim is made that the sources do not support.

## 6. Research Rigor — 9.0/10

Original contribution is real and documented: first Tesla census in the series, 33-query API matrix with 8 MY2025 controls, the zero-OTA finding across all four campaigns, the 14,782-vehicle population total, the 25V690 date correction (October 2026 press covered a 2025 filing), and the 173-unit RWD Cybertruck sales reveal. Limitations are stated at full length, including the 400-semantics inference, the estimation error on Cox/KBB sales figures, and the unpulled 26V507 population. Counterargument is argued at full strength and conceded as "mostly fair." Methodology is transparent: query counts, status codes, and control results are all in the research file. Deduction: the Semi and Cybercab zeros rest on 400s plus the VPIC list, which is the weakest form of evidence in the file, and the article does not flag that the Cybercab is not yet sold, leaving a reader to wonder why a robotaxi has no recalls.

## 7. Data Presentation — 9.0/10

Numbers are correct throughout: 173 + 14,575 + 15 + 19 = 14,782; 26V315 is 98.60% of the census population; the outside-census total of 231,879 is 218,868 + 12,963 + 48; Tesla at 4 is one-tenth of Ford's 41 and ties Volkswagen; the sixteen-brand total is 157 with an average of 9.8. The pull stat (0) is the article's best data choice. Deduction: the sixteen-brand table exists in the research file but is rendered as a prose list in the article, which buries the comparison; a census article earns its table. The per-model table is also prose-only in the article. Both should be HTML tables in the next census draft.

## VERDICT: SHIP

**Average: 8.79/10** (8.5 + 8.5 + 9.0 + 8.5 + 9.0 + 9.0 + 9.0 = 61.5 / 7)
All 7 critics at 8.5 or above. All hard gates pass. Round 0.

**Standing note for the next census run:** two sentences in this draft were recycled nearly verbatim from #1491 ("That is a clean zero with receipts..." and "On paper is doing a lot of work in that sentence"). The series now has a boilerplate problem. Future census drafts must write fresh connective tissue for the method section and the table section, and must render the sixteen-brand and per-model tables as HTML tables in the article, not prose lists.
