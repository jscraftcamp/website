![Netlify Status](https://api.netlify.com/api/v1/badges/429e37ea-5a85-45d5-8845-e3dad61e63be/deploy-status?branch=main)
[![Chromatic](https://github.com/jscraftcamp/website/actions/workflows/chromatic.yml/badge.svg?event=workflow_run)](https://github.com/jscraftcamp/website/actions/workflows/chromatic.yml)

# JS CraftCamp - Website

## Contributing:

### Updated of package dependencies:
* We use [renovate](https://www.mend.io/free-developer-tools/renovate/) to auto-update our dependencies, so we don't need to do that manually. 
* Please use specific package dependencies like "1.3.5": With tracking the versions it could help avoid breaking things (even while we already make use of yarn.lock)
* Please create a [Storybook](https://storybook.js.org/) story for every new or changed component.
* We do visual regression testing on all PRs via [Chromatic](https://www.chromatic.com/library?appId=60d36a243a7c1f0049472423) - but: it only works for collaborators yet, sorry.

## Start developing:

### Scripts
After installing the dependencies (via yarn), run

- `yarn storybook` for storybook in local dev mode
- `yarn develop` for starting gatsby in dev mode
- `yarn format` formatting all sources via prettier
- `yarn test` verify valid participants data

## Project Structure
Built with gatsby, the static site it built of pages: see the [src/pages](./src/pages) folder: e.g. [./src/pages/theteam.js](./src/pages/theteam.js).

The pages contain sections, located in [src/sections](./src/sections) folder: e.g. [./src/sections/intro.js](./src/sections/intro.js). 

### Create new components

```
yarn hygen component new --name <COMPONENT_NAME>
```

The prompt will ask for do you want to create a:

- component (any small piece for reuse anywhere)
- section (as a part of a page)

### Cool packages

We use [hygen](http://www.hygen.io) as a generator to simplify creating new components with all the file it depends on.

