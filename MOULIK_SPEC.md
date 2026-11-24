# CODEX MASTER BUILD TASK — MOULIK (মৌলিক)

You are the lead product designer, senior frontend architect, TypeScript engineer, accessibility expert, and quality engineer. **Implement a complete, polished, working repository**, not just a design or plan.

## Product identity and non-negotiable scope

Build **Moulik (মৌলিক)**: a Bangladesh-first, bilingual (Bangla-first, English second), visually rich and interactive food knowledge, nutrition, food-safety, healthy-habit, and consumer-awareness web app.

Public brand line: **মৌলিক — খাবারকে জানুন, জীবনকে ভালো রাখুন।**

This is **pre-launch awareness phase** of a future curated marketplace. For now: **NO shopping cart, checkout, payment integration, real seller directory claiming verification, admin backend, login, accounts, commercial affiliate links, or product sales.** Make it a genuinely useful independent educational platform. A gentle “Responsible food producer? Collaborate with us” contact CTA is allowed, clearly indicating no endorsement or certification.

Temporary production URL: `https://moulik.ciphertextlabs.com`. This is easily replaceable via environment-based site URL before migration to a dedicated domain. The consumer-facing branding should be Moulik, not Cipher Text Labs.

Target audience: Bangladesh, primarily mobile web on moderate/slow connections; Bengali language; English optional, accessible via `/en` and Bengali `/bn` URLs. Respect Bangla language conventions and render Bengali typography correctly. Do not use machine-garbled mixed text or placeholder lorem ipsum.

## Working instructions

1. Inspect the current repository. If empty, scaffold it with pnpm, Next.js App Router, TypeScript, Tailwind CSS and ESLint. Use a currently compatible, stable supported version of dependencies; check up-to-date docs before choosing risky APIs.
2. Write `PLAN.md` and implement immediately. Do not stop after planning, do not ask for clarification, and do not generate only mockups. Implement in functional vertical slices and verify the build repeatedly.
3. Keep features cleanly modular. Do not overengineer. Prioritize a finished polished V1, then the optional enhancements; all essential V1 features listed below must function.
4. Keep progress in `IMPLEMENTATION_STATUS.md` with completed, pending, and limitations. Never silently pretend an incomplete feature works.
5. Run install, typecheck, lint, test, and static build, fix errors, and conclude with a concise summary, exact commands, URL routes, and any genuine blockers. Do not claim success without running checks.
6. Do not wipe unrelated repository content. If the repo already has code, preserve it and adapt your changes.

## Technology choices

- Next.js App Router in `output: 'export'` mode; static generation with `generateStaticParams()` for all dynamic routes; TypeScript strict mode.
- pnpm; Node.js actively supported LTS; Tailwind CSS, shadcn/ui/Radix primitives where valuable, lucide-react icons.
- Recharts for common graphs; custom lightweight SVG/React for nutrient map, label hotspots, and plate builder. Add visx only if a meaningful chart truly requires it.
- Motion for React for subtle transitions; respect `prefers-reduced-motion` and avoid excessive motion and heavyweight animations.
- Zod for validating food/nutrition/guidance data at build time.
- MDX for long-form educational articles and source-backed guides.
- Pagefind for static full-text search indexed after the Next.js build. Ensure `pnpm build` produces `out/` **and** generates the Pagefind index; test searching the built site. A lightweight client-side fallback search is acceptable in dev only.
- Vitest and React Testing Library for units/components; Playwright for core user journeys if available. Avoid needless tooling complexity.
- Cloudflare Pages hosting, default deployment branch via GitHub Actions or Cloudflare Git integration. For static Next.js, Cloudflare build output directory is `out`.
- No backend, no database, no API keys, no server actions, no cookie-dependent SSR, no runtime API routes, no dynamic server requests, no middleware-dependent features, and no unsupported Next.js static-export features. Configure Next image handling compatibly with static export (e.g., `images.unoptimized` or standard `<img>` where appropriate). Do not use ISR or runtime-only metadata generation.

## Design directive — excellent craft, NOT a generic dashboard

Create a premium, editorial, calm, contemporary visual identity: dark botanical green, warm cream, subdued saffron, restrained terracotta accents, generous whitespace, elegant Bangla typography, attractive real-life food imagery, subtle texture only where appropriate. Branding in editorial graphics should be small and unobtrusive. The site must look like a polished public product, not an enterprise dashboard, template marketplace, or random component collection.

- Mobile-first responsive layout, deliberate tablet/desktop improvements, optimized for 360px–1440px.
- Hero: compelling Bangla hook such as “আজ কী খাচ্ছেন? জানুন তার ভেতরের গল্প।” with clear primary search action and visual food imagery.
- High-quality distinct visual sections: highlighted food of the day, clickable food atlas, nutrient anatomy spotlight, myth vs fact challenge, healthy meal demo, smarter shopping tips, disease/nutrition explorer, current articles, and producer collaboration CTA.
- Article page designed for long reading, visible sources and last-reviewed info, related foods, sticky table of contents where useful.
- Food cards with excellent imagery, Bangla names and accessible badges; no excessive badges, giant gradients, or repetitive card grids.
- Use carefully licensed image assets. Prefer publicly reusable images with traceable license/attribution in `assets/sources.json` or `IMAGE_CREDITS.md`. Do NOT scrape/reuse unknown copyrighted material. If network or licensing verification is unavailable, provide polished, local SVG illustrations with clear replacement TODOs rather than broken links or questionable images. Do not hotlink unreliable random image services.
- Fonts: elegant Bengali font with a safe fallback; if fetching remote fonts during builds is brittle, use locally permitted web font or system fallback. Never bundle restricted fonts without license.
- Accessible contrast, keyboard navigation, focus indicators, aria labels, alt text, correct heading order, reduced motion, visible loading/empty/error states, touch targets ≥ 44px.
- Installable PWA is optional, not a core dependency.

## Must-have pages / information architecture

Home (`/bn`, `/en`), foods list (`/[locale]/foods`), food details (`/[locale]/foods/[slug]`), nutrients (`/[locale]/nutrients`), nutrient details (`/[locale]/nutrients/[slug]`), healthy habits (`/[locale]/habits`), food safety (`/[locale]/safety`), organic-claims guide (`/[locale]/safety/organic-claims`), food label explorer (`/[locale]/tools/label-explorer`), myths/quizzes (`/[locale]/myths`), interactive tools hub (`/[locale]/tools`), BMI (`/[locale]/tools/bmi`), meal builder (`/[locale]/tools/plate-builder`), food comparison (`/[locale]/tools/compare`), health condition explorer (`/[locale]/health` and `/[locale]/health/[slug]`), articles (`/[locale]/articles` and `/[locale]/articles/[slug]`), seasonal/region explainer (`/[locale]/seasonal`), about, methodology, editorial policy, privacy, and contact. Include a proper 404 page and localized navigation. Redirect `/` to an intentional default locale only by a static-compatible solution (e.g., static index page linking to `/bn`, or static HTML redirect if supported). Do not use Next middleware for locale detection.

Use source-friendly readable slugs; maintain full locale-specific static route generation and discoverability through links.

## Feature 1 — Visual Foodpedia (flagship)

Include 30–40 seed food records from Bangladesh spanning fruits, vegetables, fish, eggs, dairy, lentils, grains, nuts, spices, oils and traditional foods. Examples: guava, papaya, banana, mango, jackfruit, amla, amra, spinach/pui shak, red amaranth, pumpkin, bottle gourd, bitter gourd, potato, rice, red lentil, mung dal, chickpeas, egg, milk, small fish/mola, rui fish, peanuts, mustard seed/oil, turmeric, chili, coriander, cumin, honey. Avoid claiming a single raw data value applies to all local varieties.

Every record needs: stable id, localized names, aliases, category, accessible image/illustration, form (raw/cooked/processed), edible portion and serving basis, nutrient facts with units and cited sources if available, dietary roles, shopping tips, storage/preparation safety, do/don't guidance, food myths, allergens/cautions, Bangladesh context, and editorial review status/date.

Food profile UI: large food picture, visual interactive nutrient annotation map, tap-to-learn nutrient explanations, measured values *only when sourced*, macro breakdown, serving controls (100g and meaningful local serving only where known), visually separate evidence/unknowns, buying guide, dos/don'ts, related health topics and citations.

**Critical sourcing rule:** DO NOT invent calories/vitamins/minerals or generic values. Prefer quantitative verified data from the Bangladesh Food Composition Table (FAO + University of Dhaka), preferably referencing exact table/food entries if actually accessible. If data is inaccessible or ambiguous, store `null`, display “তথ্য যাচাই চলছে” / “Data not yet verified”, and provide a fully working qualitative nutrient demo without numeric fabrication. No unverified percentage daily value and no invented evidence IDs. Never conflate raw vs cooked or 100g vs serving. Use explicit source metadata fields: URL, publisher, year, date accessed, food/table identifier, units, preparation, evidence quality. Preserve source citations next to the values displayed.

## Feature 2 — Nutrient explorer

Build vitamins/minerals/macros directory with clear nutrient roles and links to foods containing them. Each nutrient page: Bengali name, English name, general biological role, food sources in Bangladesh, deficiency-overview caveats, safe dietary explanation, review status, references. No claims that a nutrient cures disease. Interactive food-to-nutrient and nutrient-to-food navigation.

## Feature 3 — Disease-prevention and nutrition explorer

Build 6–8 educational profiles prioritized for Bangladesh: type 2 diabetes risk, high blood pressure, cardiovascular health, iron-deficiency anemia, weight management, bone health, kidney disease *with individualized-care warnings*, and an optional general cancer-risk dietary-pattern overview. The UI clearly separates “risk reduction/general habits” from “diet considerations when diagnosed”. For each, show practical Bangladeshi food examples, what to prefer/limit, why, non-food lifestyle considerations, cautions/contraindications, and sources. Link disease → dietary pattern → nutrients → foods; NEVER show “food X cures disease Y,” never give treatment plans, and do not generate individual clinical recommendations.

Identify clinical review as needed; do not falsely claim a doctor or dietitian reviewed content. Show `reviewStatus: 'editorial-draft' | 'source-checked' | 'clinician-reviewed'`. Only use the last status with a real known review record. Add informative disclaimers and urgent-care guidance on truly relevant pages, without alarmism.

## Feature 4 — Interactive BMI calculator

Inputs height (cm), weight (kg), optionally unit conversion, immediate BMI calculation, indicator bands, interpretation. Clearly state adult screening only: not a diagnostic tool; not for children, pregnancy, or cases where BMI is inappropriate. Show standard WHO adult categories and explain South Asian additional public-health action points separately with a source link; do NOT falsely label 23 as WHO's universal overweight definition. Add input validation, edge cases, automated tests. All inputs are processed locally and are NEVER saved or tracked as individual health data.

## Feature 5 — Bangladeshi balanced plate builder

Interactive visual plate with select/swap rice/roti, lentils, fish/egg, seasonal vegetables and fruit. Make portion size controls, meal category badges, explanatory feedback about diversity and safety. Calculate nutrition totals ONLY from sourced food data with matching portions; otherwise label totals unavailable and give qualitative guidance. Do not oversimplify a meal score into a medical assessment. Include attractive animated transitions and reset/share-view functionality. No backend required.

## Feature 6 — Food label explorer

Create a demonstrative interactive fictional package with hotspot callouts for ingredients, allergens, nutrition facts, manufacturer, dates, batch/lot number and storage. Use a clearly labeled **illustrative sample label**, not a fake real seller claim. Provide Bangladesh context and links to official labeling requirements where verified. Mobile taps and keyboard interaction must work.

## Feature 7 — Organic and adulteration literacy

Educational guides explaining organic vs unadulterated vs safe vs natural. Provide a checklist for evaluating organic claims/certifications: issuer, standard, scope, validity, traceability; do not assert a certificate is valid without verification. Bust unsafe or misleading home tests (e.g. honey-in-water test, turmeric color test). No photo/barcode-based purity verdict, no AI purity detector, no false “100% verified” badges. Practical product-choice guides for spices, honey, packaged food, oil, milk, fish and produce. Keep fraud allegations generic unless credibly documented and sourced.

## Feature 8 — Food myths and quizzes

Build myth/fact flashcards, progressive question cards, at least 12 sourced questions, answer explanations, progress indicator, results, retry and native share/copy link. No accounts. Store quiz progress only in component state (or optional local storage when clearly disclosed), not transmitted to analytics. Avoid manipulative gamification.

## Feature 9 — Food comparison + seasonality

Compare up to two or three foods side by side with aligned nutrients, measurement basis, units and missing-data handling. Include common Bangladesh substitute choices. Seasonality view by Bengali/English month or season, with region selector across Bangladesh's eight divisions. Only show regional/seasonal facts if substantiated; otherwise label as illustrative/approximate rather than inventing dates or district-specific availability.

## Feature 10 — Articles and discoverability

Create 7–10 substantial, readable bilingual sample articles (not stub pages) based on these topics:
- আমরা প্রতিদিন যা খাচ্ছি, তা কতটা নিরাপদ?
- হলুদের রং যত উজ্জ্বল, ততই কি খাঁটি?
- খাঁটি মধু কি পানিতে ফেললেই চেনা যায়?
- মসলায় ভেজাল: আসল ঝুঁকি কোথায়?
- খাবারের প্যাকেটে মেয়াদ ছাড়াও কী দেখতে হবে?
- প্রাকৃতিক খাবার মানেই কি নিরাপদ?
- স্বাস্থ্যকর খাবার মানেই কি দামি খাবার?
- ডাল, মাছ, ডিম: প্রতিদিনের খাবারে প্রোটিন
- নিরাপদ রান্নাঘরের পাঁচটি অভ্যাস

Every article must contain source links, a real publication/review status and a CTA to explore related foods. Don't invent citations or obscure medical statistics. If verified content is incomplete, publish honestly marked source-checked short educational guides, not fabricated long articles.

## Sources to consult and document

- Bangladesh National Dietary Guidelines 2025: https://cdn.who.int/media/docs/default-source/searo/bangladesh/national-dietary-guidelines-for-bangladesh.pdf
- FAO / University of Dhaka Food Composition Table for Bangladesh (2013): https://www.fao.org/food-composition/tables-and-databases/detail/%28country--date%29-title-1/en
- WHO healthy diet: https://www.who.int/news-room/fact-sheets/detail/healthy-diet
- WHO Five Keys to Safer Food: https://www.who.int/activities/promoting-safe-food-handling/five-key-to-safer-food
- Official Bangladesh food-safety and labeling regulations, if verifiably accessible from BFSA/BSTI or official gazettes.

These URLs are starting points, NOT permission to invent facts. Verify current availability and extract precise context before including numerical guidance. Cite sources with working links per food/article/claim; use an `evidence` module and methodology page explaining provenance, units, ambiguity and review policy. Never present hypothetical content as factual findings. If access to a source is blocked, explicitly record it in the source manifest and leave dependent numeric values blank.

## Architecture and data design

Create a strongly typed domain layer with Zod schemas for Food, FoodForm, Nutrient, NutrientValue, Serving, Source, Evidence, HealthTopic, DietaryAdvice, ArticleMetadata, QuizQuestion, SeasonalityRecord, ReviewStatus. Use a versioned content directory, indexes, relation validation and a reproducible import pipeline. Preserve content from UI components.

Suggested project organization:
```
src/app/[locale]/...      # route segments; statically exported
src/components/ui/...      # accessible design primitives
src/components/food/...    # visual food profile and nutrient map
src/features/foodpedia/...
src/features/nutrition/...
src/features/health/...
src/features/tools/...
src/content/articles/{bn,en}/...
src/data/foods/...         # typed/validated local records
src/data/nutrients/...
src/data/health/...        # evidence-backed health guidance
src/data/sources/...
src/lib/i18n/...
src/lib/nutrition/...    # all calculations, unit conversion
scripts/validate-content.ts
scripts/generate-search.ts
public/images/...         # properly licensed images or SVG illustrations
```

Use a lightweight translations/dictionary strategy compatible with static export. Ensure no client hydration errors from locale strings. Use static sitemap generation, robots, canonical/hreflang links, Article and Recipe? structured data only when schema appropriate (do NOT falsely use Recipe for general food encyclopedia), OpenGraph/Twitter social cards and descriptive metadata. Document sitemap updates and domain migration strategy (301 redirects when future domain is purchased).

## User experience requirements

- Working search across Bangla and English food/article names; support Bengali synonyms if feasible.
- Category filters, related links, clear breadcrumbs, useful empty states and responsive navigation.
- Homepage should feel alive: one genuinely functional interactive challenge and one functional tool preview without excessive JS.
- Every CTA is actionable: navigate, reveal content, calculate, copy or share; never dead buttons or fake signups.
- No forced email capture or premature commerce buttons.
- Privacy: no patient records; BMI/meal calculations local only; optional analytics limited to page views/anonymous aggregate events, privacy disclosure; add a no-tracking default if keys not supplied.
- Fast mobile loading, image lazy-loading, caching and asset optimization. Aim for Lighthouse good performance and accessible controls, but measure rather than claim scores.

## Testing and definition of done

Implement unit tests for BMI boundaries, serving conversions and missing/unknown nutrition values, Zod schema validation, and a quiz scoring case. Add integration/e2e smoke tests for navigating home → food → nutrient, disease/topic page, BMI, quiz, plate builder, food comparison and language switching. Include script and exact commands to run them. Run `pnpm install`, `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`; fix failures. Test `out/` has generated food/topic/article routes and Pagefind assets. Ensure Cloudflare Pages can serve the static site with no SSR dependencies.

Create:
- `README.md` including prerequisites, dev, build, local preview, deployment and editorial workflow.
- `.env.example` with `NEXT_PUBLIC_SITE_URL=https://moulik.ciphertextlabs.com` and no real secrets.
- `ARCHITECTURE.md` with evolution to producer profiles and future Spring Boot/Postgres SaaS/marketplace, without building those systems now.
- `CONTENT_POLICY.md` and `EVIDENCE_METHOD.md` for educational accuracy and review.
- `IMAGE_CREDITS.md` with licenses/attributions.
- `IMPLEMENTATION_STATUS.md` indicating actual complete vs pending features.
- Cloudflare Pages instructions: build `pnpm build`, output `out`, custom subdomain DNS setup, redirects later.

## Build order and completion strategy

1. Scaffold + architecture + design tokens + i18n + navigation + homepage.
2. Typed data schemas, source/evidence manifest, Bangladesh food seed data and article routes.
3. Visual Foodpedia + nutrient explorer + food comparison.
4. Functional BMI, plate builder, label explorer, quiz.
5. Disease/nutrition explorer, organic/adulteration guides, seasonality.
6. Search + SEO + accessibility + tests + static build + Cloudflare docs.

Do not leave V1 features as blank pages, skeletons, or inert “coming soon” CTAs. Prefer a smaller truly functional feature with transparent data limitations over fake completeness. At the end, clearly report what is finished, what requires human nutrition review, which facts lack sourced values, and where to run the site. Start implementing now.
