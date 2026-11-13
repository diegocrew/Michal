# Michal

Personal site built with Astro and Tailwind CSS.

## Development

```sh
npm ci
npm run dev
```

Run `npm run build` to generate the static site in `dist`. The Astro base path is
`/Michal/`, matching the GitHub Pages project URL.

## Deployment

GitHub Pages is configured to use GitHub Actions. Pushes to `main` build and
deploy the site with the workflow in `.github/workflows/deploy.yml`. The
workflow can also be started manually from the Actions tab.
