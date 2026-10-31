# Blocks

Blocks is a modular Angular UI library for responsive, accessible applications. Its components share semantic themes, runtime appearance settings, translations, form behavior and overlay infrastructure. Import the features you need through the package's public entry points.

See the [installation and setup guide](projects/blocks/README.md), [appearance guide](documentation/appearance/README.md), and [live component catalog](https://filipmazev.github.io/Blocks/components). The catalog and its documentation are built from the repository's component registry and colocated READMEs, so this overview needs no component list.

## Getting started

For an Angular application:

```sh
ng add @filip.mazev/blocks
```

For local development:

```sh
npm ci
npm start
```

Open http://localhost:8080 for the playground, `/components` for the catalog, and `/appearance` for shared theme and accessibility controls. This workspace uses Angular 22 and TypeScript 6.

## Development

```sh
npm run build:blocks
npm run build:playground
npm run lint
```

Documentation is generated before playground builds and serving. After changing component READMEs during development, run `npm run tools:build-docs`. Follow [AGENTS.md](AGENTS.md) for repository conventions.

## Publishing

```sh
bash publish.sh
```

The script checks npm authentication, increments the patch version, builds the package and publishes it. If publishing fails after the version increment, correct the authentication issue and use `bash publish.sh --retry` to rebuild and retry the same version. The npm token needs publish access to `@filip.mazev/blocks` and permission to bypass two-factor authentication.

To build and deploy the playground to the existing GitHub Pages target:

```sh
npm run deploy:playground
```
