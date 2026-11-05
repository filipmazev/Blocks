# Release notes

Version-specific library changes and migration guidance, rendered with the playground's shared documentation component.

## Routes and navigation

`/release-notes` redirects to the newest released entry in the Release channel (`DEFAULT_RELEASE_VERSION`). `/release-notes/:version` is the permanent URL for a
particular version, for example `/release-notes/1.5.0`. Release notes appear in the Start navigation section.

Blocks `Select` controls choose Release, Beta, or Alpha and filter the version list to that channel. Changing channel navigates to its newest registered entry;
permanent links infer their channel from release metadata. Unknown versions retain an unavailable state and a link to the current Release notes. Published
summaries link to the exact NPM version. Draft entries remain visibly marked.

The playground build version comes from `release.config.json` via `tools/version-sync.mjs`. When `nextVersion` is null, the shared resolver increments the
package patch and appends its Alpha/Beta channel. For example, package 1.5.2 on Alpha produces 1.5.3-alpha. Set `nextVersion` to an exact semantic version to
override it; `publish.sh` consumes the same target by default and clears the setting after applying it. Explicit `--bump patch|minor|major` overrides that
setting; `--retry` publishes the existing manifest version. Channel selection remains in `projects/blocks/package.json` under `publishConfig.tag`.

`PackageReleaseService` checks public NPM metadata after browser rendering. A non-dismissible Blocks info alert appears only when the registry confirms that the
build version is absent. It uses the generated version in its text, independent of the selected release notes. Failed requests leave publication unknown and do
not show a false unpublished warning. The same service selects the footer's newest publication by timestamp across all channels, falling back to the package
manifest version if the registry is unavailable. Requests abort on destruction or timeout.

## Adding a release

1. Add `documentation/releases/<version>/README.md` with the library's changes and migration notes. Start with one descriptive H1 so the source README also
   stands alone.
2. Add an `IReleaseNotes` entry to `constants/release-notes.constants.ts`, newest first. Set the documentation path, draft/released status and optional npm
   channel (`alpha`, `beta` or `latest`). Record exact comparison commits when available; omit `toCommit` until the final release commit exists. The page hides
   the comparison link until it is recorded. Preserve older entries and their URLs.
3. Run `npm run tools:build-docs`. The generator bundles the Markdown and maps links between release READMEs to their version routes. Starts and builds also
   regenerate documentation.

Keep release content specific to the version. The 1.5.0 beta notes record changes from `f9bf13b2bb6914c26d11639076006bd1dcc5a851` through
`55b915c819525cfa365d4b59389a765233b2cd35`; they do not track later changes automatically.

## Appearance and accessibility

The page uses Blocks controls, surfaces, semantic tokens and responsive mixins. The documentation renderer handles wrapping, horizontally scrollable migration
tables and focusable code examples. Version selection retains the select's keyboard and focus behavior, including when only route parameters change. The notes
are static English documentation; this page has no separate language controls.
