## JS Craft Camp

This project contains the http://jscraftcamp.org site.

# Development

## Prerequisite

The node version required is the one noted in [./.travis.yml].
How to get the environment up and running, see the section [#local-development-environment-setup] below.

## Local development environment setup

We offer at least two ways to install this project, you choose the one you like:
- use you own [global nodejs version](#global-nodejs-version) if installed on your system, or
- setup everything from scratch [using nix](#setup-via-nix)

### Global nodejs version

If you have a global nodejs version (at least the version as noted in the [#prerequisite])
You don't have to do anythin

### Setup via nix

If you don't want to rely on a global nodejs version, but want a reproducible environment,
you can use [nix] as described here.

1) Make sure to have nix installed (see [nixos.org/nix][nix]) and then
1) `cd <project-dir>`
1) run `nix-shell` and you should have the environment up and running
1) install all node modules using `npm install`
1) prove that it works, `npm test`
1) now you have a shell with a deterministic environment (incl. the right nodejs version)

[nix]: http://nixos.org/nix/


## How to develop?

- run `npm i` to install all dependencies
- run `npm start` which will run the local webserver, for developing
- run `npm test`  to run the tests
- run `npm run build` to generate all static files and to concatenate all participants files into the `dist` directory


