# Cindy Allen for Justice of the Peace

Campaign website for **Judge Cindy Allen**, Republican candidate for Justice of the Peace, Precinct 1, Bastrop County, Texas. She is on the November 3, 2026 general-election ballot against Democrat Tamera Peterson McIntyre.

Built with [Astro](https://astro.build), React islands, Tailwind CSS, and Markdown content collections.

## Run locally

```sh
npm install
npm run dev
```

Then open the local URL printed in the terminal (usually `http://localhost:4321`).

## Update campaign details

Edit `src/data/site.ts` for:

- campaign email, phone, Facebook, and donation URL
- Formspree form ID (volunteer submissions)
- election dates and opponent name
- political advertising disclaimer / committee name

## Publish news or events

- News: add a Markdown file in `src/content/news/`
- Events: add a Markdown file in `src/content/events/`

Use the existing files as the frontmatter template. Featured election dates already live in the events collection and drive the Vote page calendar.

## Court vs. campaign

This site is political advertising. Court filings, dockets, and clerk questions belong on the [official JP Precinct 1 page](https://www.bastropcounty.gov/page/jp1).

## Build

```sh
npm run build
npm run preview
```
