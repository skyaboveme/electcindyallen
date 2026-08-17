# Cindy Allen for Justice of the Peace

Campaign website for **Judge Cindy Allen**, Republican candidate for Justice of the Peace, Precinct 1, Bastrop County, Texas. She is on the November 3, 2026 general-election ballot against Democrat Tamera Peterson McIntyre.

Built with [Astro](https://astro.build), React islands, Tailwind CSS, and Markdown content collections.

**Live site:** [https://cindyallenjp-com.skyabove.workers.dev](https://cindyallenjp-com.skyabove.workers.dev)

**Code:** [github.com/skyaboveme/cindyallenjp.com](https://github.com/skyaboveme/cindyallenjp.com)

## Run locally

```sh
npm install
npm run dev
```

Then open the local URL printed in the terminal (usually `http://localhost:4321`).

## Deploy

The site deploys as the Cloudflare Worker `cindyallenjp-com`:

```sh
npm run deploy
```

That builds Astro and uploads `dist/` to the production Worker. The dashboard for this service is [cindyallenjp-com production](https://dash.cloudflare.com/aa96f50b9174b128d2cbe8f6db54b940/workers/services/view/cindyallenjp-com/production).

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
