# মৌলিক (Moulik)

Bangladesh-first bilingual static food knowledge and food safety app. No selling, accounts, backend or tracking.

## Requirements and local development

Use Node.js 20 or 22 LTS and pnpm 9+.

```sh
pnpm install
pnpm dev
```

Open `http://localhost:3000/bn/` or `/en/`. Root `/` is a static locale chooser.

## Checks and production build

```sh
pnpm typecheck
pnpm lint
pnpm test
pnpm validate-content
pnpm build
```

`pnpm build` exports `out/` and then creates the Pagefind index at `out/pagefind/`. Serve the export locally with `npx serve out`.

## Deployment

Cloudflare Pages: build command `pnpm build`, output directory `out`, Node 20+ and pnpm enabled. Connect the default GitHub branch or deploy with Wrangler Pages. For `moulik.ciphertextlabs.com`, add the Pages custom domain in Cloudflare and create its DNS record as directed there. Change `NEXT_PUBLIC_SITE_URL` in the environment for a future domain. Add explicit 301 redirect rules when migrating domains; keep old paths mapped to equivalent locale pages.

## Editorial workflow

Edit Zod-validated data in `src/lib/content.ts`, then run `pnpm validate-content` and the checks. Add source metadata and exact preparation/table identifiers before adding composition figures. Current numeric food composition values are intentionally absent. Review labels must reflect actual review evidence. See `CONTENT_POLICY.md` and `EVIDENCE_METHOD.md`.
