# Implementation status

## Completed
- Next.js App Router with static export, `/bn` and `/en` route trees, locale chooser, responsive editorial styling, navigation, metadata, 404, sitemap and robots output.
- 34 locally illustrated food profiles with Zod validation and linked general references. All remain editorial drafts; unknown composition quantities are never fabricated.
- Food listing and detail pages, nutrient directory/details, seven health topic pages, nine article routes, safety and organic-claims literacy, habits, approximate seasonality explainer, methodology, editorial and privacy pages.
- Browser-local BMI tool with screening caveats, plate builder with unavailable-total handling, comparison with unavailable-value handling, illustrative label interaction, and 12-question quiz.
- Local Bangla/English food and article search, content validation, unit tests, project/deployment docs, generated Pagefind index.
- `pnpm build` statically generated 164 routes plus sitemap/robots; Pagefind indexed 161 HTML pages. Key food/topic/article/tool route files and Pagefind assets were checked in `out/`.

## Pending before public launch
- Extract exact Bangladesh Food Composition Table entries and record table identifiers, edible portions, preparations, units, access dates and evidence quality before publishing any numerical nutrient values.
- Clinical dietitian/physician review. Health pages are generic educational drafts, not individualized recommendations or clinically reviewed content.
- Complete English translation for secondary detail content; currently many English routes include Bengali explanatory prose.
- Distinct substantial article text for each title; the nine article routes currently share a shorter general food-safety guide body.
- Expand Food schema to include aliases, servings, nutrient-value/evidence records, dietary roles, allergens, myths and per-food buying/storage guidance; current seed records are a smaller validated subset.
- Nutrient annotation map, sourced serving controls, more complete plate portion controls, category filters, and substantiated month/division seasonality data.
- Pagefind runtime query test, Playwright journeys, measured Lighthouse review, and verified BFSA/BSTI regulation citations.

## Limitations
- Seasonal content deliberately avoids unsupported month/division claims.
- Food imagery uses original SVG illustrations, not licensed photography.
- BMI includes adult screening categories and limitations; South Asian action points need a more complete sourced explanation.
- Food descriptors and safety advice need editorial review; a general WHO food-safety reference does not substantiate composition or specific local-food claims.
- Static educational site only: no accounts, backend, seller claims, payments, analytics or clinical advice.
