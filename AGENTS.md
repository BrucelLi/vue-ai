# Repository Guidelines

## Project Structure & Module Organization
- `src/` hosts all application code; `main.ts` wires Vue app and global plugins.
- `src/router/index.ts` centralizes routes; add new views under `src/views/` (create directory) and import in the router.
- `src/stores/` keeps Pinia stores; follow file-based modules such as `counter.ts` exporting `useCounterStore`.
- Unit specs live in `src/__tests__/` with `.spec.ts` suffix; end-to-end specs sit in `e2e/` alongside Playwright config.

## Build, Test, and Development Commands
- `yarn` installs dependencies using the pinned Yarn 1.22 release.
- `yarn dev` starts the Vite dev server with hot reload at `http://localhost:5173`.
- `yarn build` runs `vue-tsc` type-checking, then builds optimized assets to `dist/`.
- `yarn preview` serves the production build locally for pre-release smoke testing.
- `yarn lint` chains ESLint and Oxlint autofixes; run `yarn format` for Prettier cleanup of `src/` files.

## Coding Style & Naming Conventions
- Use TypeScript for logic and `<script setup>` blocks in SFCs; prefer 2-space indentation.
- Vue components are PascalCase (`ChatPanel.vue`), composables use `useX` naming, stores follow `useXStore`.
- Keep module paths relative; colocate assets under `src/assets/` and reference via `@/assets`.
- Rely on ESLint (`eslint.config.ts`) and Prettier defaults; avoid disabling lint rules without justification.

## Testing Guidelines
- Write Vitest suites in `src/__tests__` mirroring the component or composable under test.
- Name test files `<subject>.spec.ts`; isolate DOM mount tests with `@vue/test-utils` helpers.
- Run `yarn test:unit --watch` during development and ensure new logic has targeted assertions.
- For Playwright, run `npx playwright install` once, then `yarn test:e2e`; gate merges on passing Chromium runs.

## Commit & Pull Request Guidelines
- No repository history is bundled; follow Conventional Commits (`feat: add agent prompt panel`) for clarity.
- Scope commits narrowly and include relevant scripts/tests in footers when automation is required.
- PRs should describe the change, list manual verification, and link tracking issues; add screenshots for UI updates.
- Request review when CI (lint, unit, e2e) is green; re-run affected commands locally before merging.

## Environment & Tooling Notes
- Target Node 20.19+ as declared in `package.json`; enable Corepack if Yarn 1 is missing.
- Update configuration via `vite.config.ts` and `env.d.ts`; document new env vars in `.env.example` before use.
