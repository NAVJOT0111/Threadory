# Threaddory: homepage (Milestone 1)

React 19 + TypeScript + Vite + Tailwind CSS 4. Front-end only, sample data, no backend.

## Run locally on Windows (PowerShell)

1. Install Node.js 22 LTS from https://nodejs.org (includes npm). Check: `node -v`
2. Unzip, then open PowerShell in the unzipped `threaddory` folder.
3. Enable pnpm and install dependencies:
   ```
   corepack enable
   pnpm install
   ```
   If `corepack enable` is blocked, use: `npm install -g pnpm` then `pnpm install`.
   (Plain `npm install` also works but ignores pnpm-lock.yaml.)
4. Start the dev server: `pnpm dev`
5. Open http://localhost:5173

## Other commands

- `pnpm build`: typecheck and production build into `dist/`
- `pnpm preview`: serve the production build
- `pnpm lint`: ESLint (includes jsx-a11y)
- `pnpm typecheck`: `tsc --noEmit`

## Structure

- `src/styles/index.css`: all design tokens (colour, type, spacing, motion)
- `src/data/`: sample data only; read through `src/api` and `src/hooks`
- `src/components/ui|layout|home|product/`: primitives, shell, homepage sections
- `src/config/features.ts`: cart and wishlist flags, off until Milestone 3

Not included yet: shop/product pages, cart, wishlist, unit tests, real photography
(images are generated placeholders).
