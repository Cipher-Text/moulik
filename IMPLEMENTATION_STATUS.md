# Implementation status

## Completed in this iteration
- Expanded all 36 foods to validated structured records with aliases, exact/unknown form, edible portion, serving basis, nutrient values and statuses, evidence references, meal roles, purchase/storage notes, do/don’t guidance, myths, allergen cautions, Bangladesh context, and editorial status.
- Verified the FAO/University of Dhaka 2013 Food Composition Table PDF methodology and exact entries for guava, Sagar banana, emblic, hog plum, ripe jackfruit and ripe papaya. Only clear, non-bracketed components are populated, per 100 g fresh edible portion. The exact entry code and citation appear beside every number. Other values stay `null`.
- Added a working food category/name filter, an interactive nutrient concept explorer that distinguishes measured values from unknowns, and a three-food comparison that aligns sourced components and shows missing values.
- Replaced the shared article body with nine distinct bilingual, sectioned educational guides, sources, editorial-draft status, table of contents, and related-food links.
- Added English versions for food profiles, nutrient pages and health-topic explanations. Existing BMI, quiz, plate and label tools remain functional.
- Added tests for food/evidence schemas, exact data matches, unknown value handling, and article source/food relations. Last export generated 172 static routes plus sitemap/robots and indexed 169 HTML pages (2,268 words) with Pagefind; representative bilingual profiles/articles and index assets exist in `out/`.

## Remaining before public launch
- Extract and verify more FCT entries; many of the 36 food records still have no exact match, and no raw/cooked values are inferred across forms.
- Clinical dietitian/physician review. Health pages remain general educational drafts and do not provide individualized disease guidance.
- Complete English translations across all safety, methodology, editorial, seasonal and secondary informational pages.
- Topic-specific disease profile content, BMI South Asian action-point details, nutrient annotation art, additional known local serving weights, portion controls in the plate builder, and substantiated regional seasonality.
- Verify BFSA/BSTI regulation text; the official BFSA portal is only a starting link.
- Runtime Pagefind query and Playwright journeys; Pagefind indexing and static routes are generated but these checks have not been run in a browser.

## Limitations
- The FAO/University of Dhaka table reports averages for same or similar descriptions; cultivars and preparations differ. Values shown stay attached to their exact entry and are marked limited evidence.
- The Bangladesh National Dietary Guidelines PDF exceeded the research tool’s fetch limit; no claims depend on unextracted content.
- Seasonal content deliberately avoids unsupported month/division claims.
- Food imagery uses original SVG illustrations, not licensed photography.
- No accounts, backend, seller claims, payments, analytics or clinical advice are included.
