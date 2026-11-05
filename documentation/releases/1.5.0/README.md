# Blocks 1.5.0 Beta change notes

Published October 31, 2026 on the Beta channel. The exact NPM package version is `1.5.0`, without a `-beta` suffix. Install this historical version with
`npm install @filip.mazev/blocks@1.5.0`.

[View version 1.5.0 on NPM](https://www.npmjs.com/package/@filip.mazev/blocks/v/1.5.0).

This version adds top navigation, editable autocomplete, layout and feedback primitives, interactive popovers, platform-aware shortcuts and refined surface
interaction. These notes cover only the changes after [1.4.20](../1.4.20/README.md), from `b18ac855a86e7ad9fe77d1d4944f069ccde309ba` through
`55b915c819525cfa365d4b59389a765233b2cd35`, NPM's recorded 1.5.0 source commit. The unified package, Angular 22 upgrade, semantic themes, existing forms,
notifications and initial glass runtime are documented in the cumulative 1.4.20 notes.

## Top navigation and shared navigation behavior

- Added `TopNav` with a horizontal menubar, a responsive compact presentation and one shared submenu/search panel.
- Added `bxTopNavBrand` and `bxTopNavActions` template slots, custom item content and typed `ITopNavConfig`, `ITopNavSlotContext` and shared navigation
  contracts.
- Added `compactBreakpoint` (default `lg`), an explicit `compact` override, sticky positioning and panel dimensions. Content overflow also switches to compact
  navigation, keeping essential links reachable as translations, slots, fonts, zoom or available width change.
- Shared hierarchical browsing, flat contextual search, active-route selection, translated labels and focus/scroll restoration between top and side navigation.
- Added clickable ancestor paths that browse a level without navigating away; the current parent's heading remains a page link.
- After selecting a search result, clearing search now opens its containing submenu and scrolls the selected row into view while keeping search-field focus.
  Clearing without a successful selection restores the previous browsing location.
- Added RTL-aware horizontal arrow navigation, Home/End and roving tab stops to the shared menu keyboard helper.
- Removed floating search guides. The retained `showSearchGuide` option is deprecated and ignored; former guide CSS variables have no effect.
- Updated the playground toolbar to use `TopNav`, with responsive examples and shared English, Spanish, French and German navigation fixtures.

## Editable autocomplete

- Added `Autocomplete`, `IAutocompleteOption` and `IAutocompleteOptionContext` through the forms entry point.
- Added a `string | null` value model with valid free text, optional suggestions, disabled options and customizable option templates.
- Added optional inline completion that remains uncommitted until accepted, keyboard selection, IME-aware editing and a clear action.
- Reused the existing form-field, validation, disabled/readonly, translation and Angular forms integration contracts.
- Added application-owned query/search/loading/error state and external filtering. Pagination reuses `LoadMoreDirective`, including retained-content failure,
  explicit retry and the reachable action when there is no scrollbar.
- Added delayed playground requests demonstrating search, empty results, incremental loading, failure and successful retry, with page-size controls.

## Layout, feedback and disclosure primitives

- Added `Card`, `Container`, `Stack`, `Grid` and `Divider`, with semantic surfaces, responsive layout settings and component CSS variables.
- Added `Alert`, also available as `bx-banner`, with semantic tones, projected actions, optional announcements, dismissal and focus restoration.
- Added alert emission controls that reuse the shared lighting engine and respect scene boundaries.
- Added interactive `Chip` with controlled selection, activation and removal events, separate remove actions and disabled/readonly behavior.
- Added `Collapsible` and coordinated `Accordion` expansion, keyboard-accessible headers and reduced-motion behavior.
- Added `Skeleton` with configurable shapes and animation that respects reduced motion.
- Added colocated guides and reachable playground examples for the new primitives.

## Interactive popovers and menu overlays

- Added `Popover`, `PopoverDirective`, `IPopoverConfig` and `BX_POPOVER_DEFAULTS` for interactive help, compact forms and contextual content.
- Added nonmodal dialog semantics, configurable placement and dismissal, optional autofocus, translated accessible names and trigger-focus restoration.
- Kept popover content scrollable within the viewport, with live theme inheritance and existing overlay/top-layer support.
- Added `MenuTriggerDirective.menuPlacement` for dropdown placement while retaining side-aligned submenu defaults.
- Added `menuClosing`, emitted before overlay detachment so navigation owners can preserve scroll and focus context.
- Updated overlay theme inheritance to observe direction changes and propagate `dir` to mounted panels.

## Platform-aware keyboard shortcuts

- Expanded `BxShortcutService` with platform selection, normalized display tokens, `toAriaKeyshortcuts()` and application-owned event matching through
  `matches()`.
- Added portable `mod` combinations, common key aliases and explicit iOS/Android overrides through `IOSShortcut`, alongside `ShortcutPlatform` and
  `IShortcutMatchOptions`.
- Ignored handled, composing and AltGraph events, plus repeated keys and editable targets by default. Applications can explicitly allow repeat/editable matches.
- Added valid `aria-keyshortcuts` metadata to menu items. Shortcut hints do not register global handlers; applications retain ownership of actions and scopes.
- Improved iPadOS desktop-user-agent detection and desktop/mobile operating-system classification.

## Press feedback, lighting and form presentation

- Refined shared pressure feedback with a soft inset sheen and button-content compression while keeping hit areas, layout and overlay origins fixed.
- Added a visible initial response for quick taps and cleanup on cancellation, key release, focus loss, hidden documents and teardown. Reduced motion uses
  static feedback, and touch hover does not remain latched.
- Kept editable fields illuminated for pointer focus while ordinary actions use keyboard focus. Expanded popup triggers retain light; plain layout expansion
  alone does not mark a control selected.
- Changed explicit scene-light selection to rank all eligible sources by visible contribution per receiver, with at most four selected lights, rather than
  taking the first four registered sources.
- Exposed `getGlassLightRoot()` for resolving existing light-scope boundaries.
- Aligned checkbox/radio presentation and radio subscript sizing with shared form defaults, and reused common caret and opaque option-panel styling for Select
  and Autocomplete.

## Migration notes

Existing 1.4.20 package imports, Angular 22 peer requirements, theme setup and effects stylesheet registration remain applicable. New components are available
through the existing public entry points.

Remove dependencies on side-navigation search guides and their CSS variables. `showSearchGuide` remains accepted for compatibility but no longer changes the
rendered navigation. Shortcut combinations use arrays such as `['mod', 'k']`; plain strings remain single display tokens. Continue handling shortcut actions in
the application, using `BxShortcutService.matches()` where needed.

The Beta channel describes this historical publication's intended maturity. Because `1.5.0` was already published as an exact version, it cannot later identify
a different stable package. Future prereleases should use a suffix such as `1.6.0-beta.1`, following [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
