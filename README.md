# JS CraftCamp - Website

This project contains the [jscraftcamp.org](http://jscraftcamp.org) website and all the setup for the deployment.

## Development

Getting started to develop on the website follow those steps

- set up your development environment, [see below](#development-setup)
- run `npm i` to install all dependencies
- run `npm start` which will run the local webserver at [localhost:8000](http://localhost:8000), for developing
- run `npm test`  to run the tests
- run `npm run build` to generate all static files and to concatenate all participants files into the `dist` directory (in production this will be done by travis)

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

### Development setup

We offer two ways to install this project, you choose the one you like:
- use you own [global nodejs version](#global-nodejs-version) if installed on your system, or
- setup everything from scratch [using nix](#setup-via-nix)

#### Global nodejs version

If you want to use your (global) nodejs setup, find out which version we require in the [./.travis.yml].

#### Setup via nix

If you don't want to rely on a global nodejs version, but want a reproducible environment, you can use [nix] as described here.

1) Make sure to have nix installed (see [nixos.org/nix][nix]) and then
1) `cd <project-dir>`
1) run `nix-shell` and you should have the environment up and running
1) install all node modules using `npm install`
1) prove that it works, `npm test`
1) now you have a shell with a deterministic environment (incl. the right nodejs version)

[nix]: http://nixos.org/nix/

## :memo: License

Licensed under the [MIT License](./LICENSE).

## Deployment

Currently we have a travis build for deploying the master branch onto gh-pages branch.

For every PR we build and deploy previews on Netlify:

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"/>
</a>
