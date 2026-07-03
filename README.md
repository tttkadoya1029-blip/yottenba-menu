# 酔っ手羽 Yotteba Izakaya Revolution — Menu Site

Mobile-first menu site built with Next.js (App Router) + Tailwind CSS.
Top page links to Food Menu and Drink Menu only.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Adding / replacing menu images

Images are read directly from folders under `public/menu` — drop a
`.jpg`/`.png`/`.webp` file into the right folder and it appears on the
site automatically, no code changes needed.

```
public/menu/
  food/
    sushi-sashimi/   rice-bowl/   salad/   nabe/   noodles/
    appetizer/       grilled/     fried/   rice-other/   dessert/
  drink/
    (flat folder, shown as a single vertical list — no categories)
```

- Food category folders are defined in `lib/menu.ts`
  (`foodCategories`). Add a new entry there (and a matching folder) to
  introduce a new tab. A tab only appears once it has at least one
  image; empty ones are hidden automatically.
- Drink Menu has no tabs — every image directly under
  `public/menu/drink/` is shown, stacked vertically, in filename order.
- Files are sorted by filename, so name them `01.jpg`, `02.jpg`, etc.
  to control order.

## Reserve Now button

The sticky "Reserve Now" button links to the restaurant's Facebook
page. Update `RESERVE_URL` in `lib/menu.ts` to change it.

## Deploying to Vercel

Push this repo to GitHub, then import it in the
[Vercel dashboard](https://vercel.com/new) — no extra configuration
needed.
