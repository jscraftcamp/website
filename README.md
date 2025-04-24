![Netlify Status](https://api.netlify.com/api/v1/badges/429e37ea-5a85-45d5-8845-e3dad61e63be/deploy-status?branch=main)

# JS CraftCamp - Website

## Run The Site
- run `npm run preview`, this builds the site and serves it at `localhost:8000`
- run `npm run dev`, this builds the site continuously when there is a changes in the src directory
Just reload the page to see the changes.

## Development
- you can find `src` directory with all pages and components in there
  - `src/components` has all the parts, basically all big "boxes" that each page is made of, they are separate so they can be developed in isolation
  - `src/pages` has all the pages
- in `_dist` you find the build output, the final page (use `npm run preview` to serve this and see the site as it would be live)
