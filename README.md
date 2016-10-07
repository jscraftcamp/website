## JS Craft Camp

This project contains the http://jscraftcamp.org site.

# Development

## Prerequisite
node.js 5.x

## Build
- run `npm install` to install all dependencies
- run `npm start` which will run the local webserver, for developing
- run `npm test` to run the tests
- run `npm run build` to generate all static files and to concatenate all participants files into the `dist` directory
- if you get this error while trying to build: `fatal error: 'sass/context.h' file not found` try again after running this: `npm install -g harp@next`
