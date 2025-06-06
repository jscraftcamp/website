![Netlify Status](https://api.netlify.com/api/v1/badges/429e37ea-5a85-45d5-8845-e3dad61e63be/deploy-status?branch=main)

# JS CraftCamp - Website

## Contributing:

### Updated of package dependencies:

- We use [renovate](https://www.mend.io/free-developer-tools/renovate/) to auto-update our dependencies, so we don't need to do that manually.
- Please use specific package dependencies like "1.3.5": With tracking the versions it could help avoid breaking things (even while we already make use of `pnpm-lock.yaml`)

## Start developing:

Use `corepack enable` to make sure you have the same package manager enabled as we use in the project (`pnpm` in the version set in `package.json`).

### Scripts

After installing the dependencies (via `pnpm install`), run

- `pnpm run dev` for starting a dev server to see the site locally
- `pnpm run format` formatting all sources via prettier
- `pnpm run test` verify valid participants data
- `pnpm run build` verify that static build works
- `pnpm run logos <year>` to create logos for a year (needs a `logo.svg` file in the specified year under `/static/logos/`)

## Project Structure

The website is a static page that gets built through [SvelteKit](https://kit.svelte.dev/) with their `adapter-static`. You can find the routes in the [`src/routes` directory](./src/routes).

Every page is put in `+page.svelte` and may include additional components just for that page or reusable components or functions from the [`src/lib`](./src/lib) folder.
