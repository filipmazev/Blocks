# Release notes

Version-specific library changes and migration guidance, rendered with the playground's shared documentation component.

## Routes and navigation

`/release-notes` redirects to the first entry in `constants/release-notes.constants.ts`. `/release-notes/:version` is the permanent URL for a particular version, for example `/release-notes/1.5.0`. Release notes appear in the Start navigation section and in the home page links.

The Blocks `Select` navigates between registered versions. Unknown versions show an explicit unavailable state with the selector and a link to the latest notes. The current package version is shown independently from the selected notes. Drafts remain visibly marked until their metadata is changed to `released`. Alpha and beta channels appear in both the selector and summary. The finalized 1.5.2 notes display Alpha without a Draft label; package publication is a separate step.

## Adding a release

1. Add `documentation/releases/<version>/README.md` with the library's changes and migration notes. Start with prose or level-two headings; the page supplies the release title.
2. Add an `IReleaseNotes` entry to `constants/release-notes.constants.ts`, newest first. Set the documentation path, draft/released status and optional npm channel (`alpha`, `beta` or `latest`). Record exact comparison commits when available; omit `toCommit` until the final release commit exists. The page hides the comparison link until it is recorded. Preserve older entries and their URLs.
3. Run `npm run tools:build-docs`. The generator bundles the Markdown and maps links between release READMEs to their version routes. Starts and builds also regenerate documentation.

Keep release content specific to the library. The 1.5.0 beta notes record changes from `f9bf13b2bb6914c26d11639076006bd1dcc5a851` through `55b915c819525cfa365d4b59389a765233b2cd35`; they do not track later changes automatically.

## Appearance and accessibility

The page uses Blocks controls, surfaces, semantic tokens and responsive mixins. The documentation renderer handles wrapping, horizontally scrollable migration tables and focusable code examples. Version selection retains the select's keyboard and focus behavior, including when only route parameters change. The notes are static English documentation; this page has no separate language controls.
