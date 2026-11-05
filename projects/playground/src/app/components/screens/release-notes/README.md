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

Keep content tied to its documented comparison. The cumulative [1.4.20 Release notes](../../../../../../../documentation/releases/1.4.20/README.md) cover
`f9bf13b2bb6914c26d11639076006bd1dcc5a851` through `b18ac855a86e7ad9fe77d1d4944f069ccde309ba`, including earlier 1.4 versions without separate notes. The
[1.5.0 Beta change notes](../../../../../../../documentation/releases/1.5.0/README.md) cover only the subsequent changes through
`55b915c819525cfa365d4b59389a765233b2cd35`. Neither entry tracks later changes automatically.

## Recommended prerelease workflow

Use **Change notes** as the umbrella term, with **Draft change notes** for unpublished work, **Alpha/Beta change notes** for published previews, and **Release
notes** for stable publications. Publication status and channel are independent: a published Alpha is still a preview, while an unpublished stable target is
still a draft. Existing routes and metadata names can remain compatible.

For future work, choose the intended stable version first and increment a numeric prerelease counter:

```text
1.6.0-alpha.1 → 1.6.0-alpha.2 → 1.6.0-beta.1 → 1.6.0 → 1.6.1
```

The counter records preview iterations; the patch number records changes to a released version. Under
[Semantic Versioning](https://semver.org/spec/v2.0.0.html), `1.5.20-alpha.1` sorts after `1.5.0`, so it is unsuitable as an iteration toward 1.5.0. For
backward-compatible features following the existing 1.5 publications, 1.6.0 is a suitable target; incompatible public API changes require a major version.
Select the target according to the changes from the previous stable API, rather than the number of previews.

The current automatic resolver still increments the patch number. To use a fixed target with this tooling, explicitly set `release.config.json.nextVersion` for
each preview, such as `1.6.0-alpha.1`, then `1.6.0-alpha.2`, with `publishConfig.tag: 'alpha'`. For stable publication, assign `1.6.0` and use `latest`. Leaving
the target null returns to the current patch-increment behavior; counter automation would be a separate tooling change.

Npm [distribution tags](https://docs.npmjs.com/adding-dist-tags-to-packages/) are movable install aliases, separate from the exact package version. Older Blocks
publications used bare versions under preview tags: `1.5.0` was published as Beta and `1.5.2` as Alpha. Preserve those exact versions and permanent note URLs.
Moving a tag cannot rename an artifact or make an existing version available for a different package; npm
[does not allow reusing a published name/version](https://docs.npmjs.com/cli/v11/commands/npm-publish/).

### Comparing previews and stable releases

- Draft notes accumulate the work planned for their exact target and remain visibly unpublished.
- Each published preview records the delta from the previous preview, or from the previous stable version for the first preview. Preserve its source commits and
  permanent URL after publication.
- Stable release notes summarize all user-relevant changes since the previous stable release, including work already described across previews. Consolidate
  duplicate entries, remove reverted work, and include migration guidance. Comparing only the final preview with stable would omit most of the release.
- Stable patch notes compare with the preceding stable patch.

If the intended stable target changes, move unpublished draft content to the new target and update its metadata. Keep published preview notes at their original
versions, link them to the eventual stable notes, and include their relevant changes in the stable summary. Recheck all source comparisons against the actual
published artifacts; a change in channel does not establish a new baseline.

## Appearance and accessibility

The page uses Blocks controls, surfaces, semantic tokens and responsive mixins. The documentation renderer handles wrapping, horizontally scrollable migration
tables and focusable code examples. Version selection retains the select's keyboard and focus behavior, including when only route parameters change. The notes
are static English documentation; this page has no separate language controls.
