# Architecture

Next.js App Router statically exports two locale trees; no server features are required at runtime. Typed local content lives in `src/lib/content.ts`, Zod validates food shapes, and `src/lib/nutrition.ts` contains deterministic local calculations. Tools hold inputs in component state and do not transmit personal data. Pagefind indexes exported HTML.

The future producer-profile or marketplace evolution is intentionally outside this build. If pursued, retain this educational site as a static frontend and design a separately reviewed service boundary for a Spring Boot API and PostgreSQL catalog. Add verification workflow, audit history, privacy/security review, producer consent, and moderation before any seller directory or transactions. No such backend is present.
