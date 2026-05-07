# Danhong Wang Portfolio

Next.js + TypeScript + Tailwind personal portfolio for a senior UI / brand / visual designer.

## Structure

- `src/app/page.tsx`: home page
- `src/app/portfolio/page.tsx`: project listing
- `src/app/portfolio/[slug]/page.tsx`: project detail template
- `src/app/about/page.tsx`: about page
- `src/app/contact/page.tsx`: contact page
- `src/components`: reusable layout and portfolio components
- `src/data/projects.ts`: project content, image paths, and detail copy
- `public/work`: portfolio images used by the site

## Replace Projects

1. Add new images to `public/work`.
2. Edit `src/data/projects.ts`.
3. Keep each project `slug` unique.
4. Use image paths like `/work/example.png`.

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

This Codex environment currently has Node.js but no `npm`, so dependency installation and full build need to run in an environment with a package manager available.
