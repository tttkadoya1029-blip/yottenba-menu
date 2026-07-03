# Yotteba Izakaya Makati — Menu Site

Mobile-first menu site built with Next.js (App Router) + Tailwind CSS.

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
    beer/  highball/  cocktail/  shochu-sake/  whisky/  soft-drink/
  promo/          (shown on the Promo page)
  private-room/   (shown on the Private Room page)
  parking/        (shown on the Parking page)
  birthday/       (shown on the Birthday page)
```

- Category folders under `food/` and `drink/` are defined in
  `lib/menu.ts` (`foodCategories` / `drinkCategories`). Add a new entry
  there (and a matching folder) to introduce a new tab.
- A category tab only appears once it has at least one image; empty
  ones are hidden automatically.
- Files are sorted by filename, so name them `01.jpg`, `02.jpg`, etc.
  to control order.

## Reserve Now button

The sticky "Reserve Now" button links to Messenger. Update
`MESSENGER_USERNAME` in `lib/menu.ts` with the real Facebook page
username (currently a placeholder: `yottebamakati`).

## Deploying to Vercel

Push this repo to GitHub, then import it in the
[Vercel dashboard](https://vercel.com/new) — no extra configuration
needed.
