![Netlify Status](https://api.netlify.com/api/v1/badges/429e37ea-5a85-45d5-8845-e3dad61e63be/deploy-status?branch=main)
[![Chromatic](https://github.com/jscraftcamp/website/actions/workflows/chromatic.yml/badge.svg?event=workflow_run)](https://github.com/jscraftcamp/website/actions/workflows/chromatic.yml)

# JS CraftCamp - Website


### Start developing:

1. clone
2. install dependencies

### Scripts

- `npm run storybook` for storybook
- `npm start` for gatsby dev

### Create new components

```
npm run hygen component new --name <COMPONENT_NAME>
```

The prompt will ask for do you want to create a:

- component
- section

A section basically a part of a page, e.g. the "child care" is a section.

### Cool packages

- https://www.npmjs.com/package/sass-mq
  > makes it easier to write media-queries
- https://www.npmjs.com/package/@storybook/addon-viewport
  > Change the viewport in the storybook preview
- http://www.hygen.io/
  > Some generator to make it easier creating components with all depending files
