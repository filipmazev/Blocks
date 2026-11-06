# Blocks

Blocks is a modular Angular UI library for responsive, accessible applications. Its components share semantic themes, runtime appearance settings, translations,
form behavior and overlay infrastructure. Import the features you need through the package's public entry points.

See the [installation and setup guide](projects/blocks/README.md), [appearance guide](projects/playground/src/app/components/screens/appearance/README.md), and
[live component catalog](https://filipmazev.github.io/Blocks/components). The catalog and its documentation are built from the repository's component registry
and colocated READMEs, so this overview needs no component list.

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

Open <http://localhost:8080> for the playground, `/components` for the catalog, `/appearance` for shared theme and accessibility controls, and `/release-notes`
for version-specific library changes. Direct release links use `/release-notes/<version>`, such as `/release-notes/1.5.0`. This workspace uses Angular 22 and
TypeScript 6.

## Development

```sh
npm run build:blocks
npm run build:playground
npm run lint
```

Documentation is generated before playground builds and serving. After changing component READMEs during development, run `npm run tools:build-docs`. Follow
[AGENTS.md](AGENTS.md) for repository conventions.

`npm ci` installs the Husky hooks through `prepare`. Pre-commit runs `npm run lint:staged`: ESLint for staged TypeScript/HTML, Stylelint for staged styles, and
Prettier for supported staged files. Unstaged tracked changes are temporarily hidden and restored, so checks inspect the proposed commit. TypeScript/HTML
changes also run `npm run lint:angular`, which checks Angular templates and rejects unused standalone component imports. Pre-push runs the complete
`npm run lint` check. These checks reject warnings and do not apply fixes.

Formatting is defined in [prettier.config.mjs](prettier.config.mjs), with shared generator options in
[tools/typescript-format-options.mjs](tools/typescript-format-options.mjs). TypeScript/JavaScript uses two spaces; HTML and styles use four.
[eslint.config.js](eslint.config.js) adds Angular template accessibility, import sorting, explicit property types, signal APIs, member ordering, Helpers
regions, and exported library interface documentation. See [tools/eslint/README.md](tools/eslint/README.md) for the rule details and limitations.

Run `npm run lint:ts`, `npm run lint:angular`, `npm run lint:styles`, or `npm run lint:format` individually when reviewing diagnostics. For an approved cleanup
scope, ESLint accepts file paths with `npx eslint --fix <files>` and Prettier with `npx prettier --write <files>`; `npm run lint:fix` and `npm run format`
target the whole workspace. Existing source violations remain visible until the separately reviewed formatting/refactoring phase, so the strict hooks can block
commits or pushes during that migration.

## Publishing

The library version and release channel live in `projects/blocks/package.json`, currently published as `1.5.3-alpha` with `publishConfig.tag: 'alpha'`. The
playground shows an Alpha badge and the current version with an `(alpha)` suffix, and npm publishes to the `alpha` channel. The tag also supports `beta`; change
it to `latest` for a stable release, removing the badge and suffix after version synchronization. `BLOCKS_VERSION` contains the exact package version;
`BLOCKS_RELEASE_CHANNEL` and `BLOCKS_VERSION_LABEL` are generated alongside it. Starts and builds synchronize these automatically.

To prepare the next minor version locally (for example, 1.4.21 → 1.5.0), without publishing or creating a Git tag:

```sh
npm run version:minor
```

This updates the library manifest, workspace lockfile, and generated version constants. `npm run version:blocks -- patch|minor|major` supports other increments.
The selected release channel stays active until you change it.

To bump and publish in one step, choose the increment:

```sh
bash publish.sh                # Patch bump (default)
bash publish.sh --bump minor   # Next minor release, resetting the patch to 0
bash publish.sh --retry        # Publish the existing version after a local bump or failed attempt
```

Choose one command: after `npm run version:minor`, use `--retry` to publish that prepared version without another bump. The script checks npm authentication
before changing the version, then builds and publishes. It accepts an existing npm login, `NPM_TOKEN`, or an interactive token prompt; `--token` remains
supported. For unattended publication, the token needs publish access to `@filip.mazev/blocks` and permission to bypass two-factor authentication.

Version `1.5.3-alpha` is published on the Alpha channel. Consumers can install it with `npm install @filip.mazev/blocks@1.5.3-alpha` or follow the channel with
`npm install @filip.mazev/blocks@alpha`. Use `--retry` only for a prepared version that has not yet been published; NPM does not allow replacing a published
version. Record the final comparison commit once the release changes are committed.

The publish script passes the built package's channel explicitly and prints the package version and tag. If npm returns `E401 Unauthorized`, run `npm login` or
supply a valid `NPM_TOKEN` before retrying. Verify publication with `npm view @filip.mazev/blocks dist-tags --json` or
`npm view @filip.mazev/blocks@alpha version`. A plain `npm view @filip.mazev/blocks version` follows `latest`, so it can continue to show the previous stable
version after an alpha release. The overview footer's npm link follows the generated release channel and opens the newest version under that tag.

To build and deploy the playground to the existing GitHub Pages target:

```sh
npm run deploy:playground
```

## Development and releases

Run `npm run lint:docs` for README styling and `npm run tools:build-docs` after changing documentation during an active development-server session.

The playground displays the exact build target from `release.config.json`, currently pinned to the published `1.5.3-alpha`. Keep it pinned until changes and
draft notes establish the next release. Before publishing again, assign a new unpublished version or use `--bump patch|minor|major`. Setting `nextVersion` to
null resumes automatic patch increments in the configured channel. `bash publish.sh` applies that same target before building and publishing; `--retry`
publishes the current manifest version. Assigned targets are cleared after being applied. See the
[release page guide](projects/playground/src/app/components/screens/release-notes/README.md) for channel metadata and draft notes.
