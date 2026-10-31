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

Open http://localhost:8080 for the playground, `/components` for the catalog, `/appearance` for shared theme and accessibility controls, and `/release-notes` for version-specific library changes. Direct release links use `/release-notes/<version>`, such as `/release-notes/1.5.0`. This workspace uses Angular 22 and TypeScript 6.

## Development

```sh
npm run build:blocks
npm run build:playground
npm run lint
```

Documentation is generated before playground builds and serving. After changing component READMEs during development, run `npm run tools:build-docs`. Follow [AGENTS.md](AGENTS.md) for repository conventions.

## Publishing

The library version and release channel live in `projects/blocks/package.json`. `publishConfig.tag` is currently `beta`: the playground shows a Beta badge and the current version with a `(beta)` suffix, and npm publishes to the `beta` channel. Change the tag to `latest` for a stable release; the badge and suffix disappear after version synchronization. `BLOCKS_VERSION` remains the numeric package version; `BLOCKS_RELEASE_CHANNEL` and `BLOCKS_VERSION_LABEL` are generated alongside it. Starts and builds synchronize these automatically.

To prepare the next minor version locally (for example, 1.4.21 → 1.5.0), without publishing or creating a Git tag:

```sh
npm run version:minor
```

This updates the library manifest, workspace lockfile, and generated version constants. `npm run version:blocks -- patch|minor|major` supports other increments. The beta channel stays active until you change it.

To bump and publish in one step, choose the increment:

```sh
bash publish.sh                # Patch bump (default)
bash publish.sh --bump minor   # Next minor release, resetting the patch to 0
bash publish.sh --retry        # Publish the existing version after a local bump or failed attempt
```

Choose one command: after `npm run version:minor`, use `--retry` to publish that prepared version without another bump. The script checks npm authentication before changing the version, then builds and publishes. It accepts an existing npm login, `NPM_TOKEN`, or an interactive token prompt; `--token` remains supported. For unattended publication, the token needs publish access to `@filip.mazev/blocks` and permission to bypass two-factor authentication.

For the 1.5.0 beta release from 1.4.21, run `bash publish.sh --bump minor`. Keep `publishConfig.tag` set to `beta`: the package version will be `1.5.0`, published under npm's `beta` tag. Consumers can install it with `npm install @filip.mazev/blocks@beta`. Release-notes metadata is maintained separately in the playground's release registry; use `status: 'released'` and `channel: 'beta'` for this release.

To build and deploy the playground to the existing GitHub Pages target:

```sh
npm run deploy:playground
```
