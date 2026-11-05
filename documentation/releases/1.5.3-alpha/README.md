# Blocks 1.5.3-alpha

Draft notes for the next Alpha release. This version has not been published; content may change before release.

## Documentation

- Colocated the core, modal, and toastr guides with their library entry points and the appearance guide with its playground screen.
- Aligned these guides with component README sections: purpose, public imports, working usage, API, appearance/customization, behavior/accessibility, and
  playground.
- Updated public package imports and relative links, preserved legacy documentation lookup aliases, and regenerated the bundled playground documentation.
- Standardized README headings, lists, code fences, tables, and wrapping with Prettier and markdownlint. Added a repeatable `lint:docs` gate.
- Added explicit documentation ownership, structure, generation, and linting rules to `AGENTS.md`.

## Playground and release notes

- Renamed the main navigation label from Overview to Home and removed the Home shortcut row for modal/toast configurators, icons, and release notes.
- Linked the footer to the most recently published NPM version across all channels, using registry publication timestamps rather than the `latest` tag alone.
- Added Release, Beta, and Alpha selectors with channel-specific version lists and permanent version routes.
- Added complete 1.4.20 Release notes, an exact-version NPM link, and a source comparison tied to its published commit.
- Added a non-dismissible information banner when registry metadata confirms that the displayed playground build has not been published.

## Build and publishing

- Added `release.config.json` with an optional `nextVersion`. When unassigned, the next version increments the package patch and appends its Alpha/Beta channel.
- Shared version resolution between generated playground build metadata and the default NPM publish flow. With package 1.5.2 on Alpha, the target is
  1.5.3-alpha.
- Kept explicit patch/minor/major overrides and retry publication available. An assigned target is consumed once it becomes the package version.
- Retained exact-version links when registry access is unavailable and avoided treating a failed registry request as proof of non-publication.

## Mobile navigation

- Reused `ModalBackdrop` for mobile side navigation, including its blur and opaque accessibility fallbacks.
- Added a translatable dismissal label, tab-order input, and presentation CSS variables to the shared backdrop.
- Tied the drawer's `ScrollLockService` acquisition to its open overlay presentation and released its own lock on close, route navigation, presentation changes,
  and destruction. Concurrent modal locks remain active.
- Made shared scroll-lock ownership idempotent. Releasing one owner preserves every other active lock, recalculates touch/overflow requirements, and restores
  the original inline body styles only after the final owner releases its lock.
- Kept embedded inline drawers contained in their preview shell without a page scroll lock.

## Navigation API

- Renamed the navigation configuration helper from `withNav` to `withInAppNavigation` to clarify its purpose and distinguish in-app navigation from other
  navigation concerns.
- Removed the previous `withNav` export. Applications using the old helper must update their imports and configuration calls.

## Breaking changes and migration

The navigation configuration helper has been renamed. This is a **breaking change** for applications using `withNav`.

| Previous API   | Current replacement        |
| -------------- | -------------------------- |
| `withNav(...)` | `withInAppNavigation(...)` |

Update imports and references to use `withInAppNavigation`. The existing navigation configuration behavior remains unchanged.

## Compatibility

Existing public entry points other than the removed `withNav` export remain available. Backdrop inputs are additive, and older release-note URLs continue to
work.

Stable NPM installs still use the `latest` tag; Alpha and Beta remain opt-in.
