# Migrated Next.js App

This repository was migrated from a Vite + React app to Next.js. The original `src/` components and `public/` assets were preserved with no content loss.

Quick start

1. Install dependencies

    npm install

2. Run development server

    npm run dev

3. Build and run production

    npm run build
    npm run start

Notes

- The original `index.html` has been removed; head tags (fonts, meta, title) were moved into `pages/_document.jsx`.
- `src/` contains your React components and `pages/index.jsx` mounts `src/App.jsx` to preserve the UI exactly.
- A `next.config.mjs` file was added (ESM) because `package.json` contains `"type": "module"`.
- If you no longer need Vite, you can delete any remaining Vite artifacts. They were removed where safe.

If you want, I can also:

- Convert to the App Router (`/app`) in Next 13+.
- Add an ESLint + Prettier setup and a GitHub Action to run the build.
# apex
