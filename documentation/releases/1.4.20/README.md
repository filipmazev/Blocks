# Blocks 1.4.20

Published October 31, 2026 on the Release channel (`latest`). Install this exact version with `npm install @filip.mazev/blocks@1.4.20`.

[View version 1.4.20 on NPM](https://www.npmjs.com/package/@filip.mazev/blocks/v/1.4.20).

Blocks 1.4.20 brings together the unified Angular UI package, semantic themes, appearance effects, forms, navigation, notifications and icons developed leading
up to this version. These cumulative notes include changes from earlier versions without their own notes, including 1.4.19, and the final side-navigation
refinements shipped in 1.4.20. They do not imply that every feature first appeared in this patch.

The documented source range is `f9bf13b2bb6914c26d11639076006bd1dcc5a851` through `b18ac855a86e7ad9fe77d1d4944f069ccde309ba`, NPM's recorded 1.4.20 source
commit. Features added after that endpoint are covered by the [1.5.0 Beta change notes](../1.5.0/README.md).

## Unified package and installation

- Consolidated `@filip.mazev/blocks-core` and `@filip.mazev/modal` into `@filip.mazev/blocks`.
- Added dedicated public entry points for `core`, `forms`, `primitives`, `navigation`, `icons`, `modal`, `toastr` and `effects`.
- Added an interactive `ng add @filip.mazev/blocks` schematic with palette selection, global Sass configuration and effects stylesheet registration.
- Updated Angular peer dependencies from Angular 21 to Angular 22.

## Theming and customization

- Reworked theming around semantic roles for backgrounds, text, borders, primary and accent colors, and status feedback.
- Added typed color contracts, including `SemanticColorToken`, palette shade tokens and light/dark `ThemedColor` configurations.
- Introduced seven duo-tone palettes: Carbon / Cobalt, Azure / Ember, Violet / Teal, Tangerine / Indigo, Brick Rose / Cyan, Lime / Violet and Cyberpunk.
- Expanded `ThemingService` with runtime palette selection, high-contrast controls, appearance configuration and persisted preferences.
- Added shared styling utilities and component CSS variables for more consistent customization of spacing, typography, surfaces and interaction states.
- Preserved the connection between responsive Sass mixins and `WindowDimensionsService` breakpoints.

See the [appearance guide](../../../projects/playground/src/app/components/screens/appearance/README.md) for current application-wide configuration. Its API
continues to evolve after this release.

## Glass, physics and lighting

- Added a shared glass material across components and overlays, configurable globally through `ThemingService.setAppearance()`.
- Added numeric `glassiness` for tint and blur, automatic/baseline/enhanced rendering quality and reduced-transparency settings.
- Added `BxSurfaceDirective` for applying Blocks materials to application-owned surfaces, with local appearance and interaction overrides.
- Introduced spring-based press feedback and spatial lighting that responds to interaction and active states.
- Added ambient edge tinting from nearby content, with depth and occlusion handling that respects overlay boundaries.
- Added opaque fallbacks for forced colors, reduced transparency and unsupported backdrop filters.
- Exposed a framework-independent DOM effects runtime through `@filip.mazev/blocks/effects/runtime`.

Here `glassiness` is the numeric appearance preference used by 1.4.20; the later `translucency` name and refraction policy belong to subsequent versions.

## Forms and controls

- Added buttons, form fields, text and numeric inputs, multiline inputs, search inputs, checkboxes, radio buttons and groups, switches, selects, multiselects,
  native sliders and range sliders.
- Added integration with Angular Signal Forms, Reactive Forms, template-driven forms and standalone value models.
- Introduced shared validation presentation with configurable error messages, priorities, visibility policies, projected errors and application defaults.
- Added composable prefixes, suffixes, hints, required markers, floating labels and filled/outlined field appearances.
- Added native-control integration through `bxInput` and an extension contract for custom form-field controls.
- Added distinct readonly behavior through both `readOnly` and Angular's lowercase `readonly` contract.
- Added numeric parse-state handling, keyboard-accessible steppers, textarea autosizing and native input attribute forwarding.

## Asynchronous selection and pagination

- Added application-owned loading, searching, error and pagination state to selection controls.
- Added searchable multiselects with tag presentation, overflow summaries, configurable templates and explicit select-all intent.
- Introduced reusable `LoadMoreDirective` behavior with guarded scroll requests, a visible fallback action when content does not overflow, and explicit retry.
- Distinguished scroll, button and retry request sources.
- Added retained-content error states and separate feedback for initial loading, replacement searches and incremental loading.

## Primitives and overlays

- Added loading indicators, spinners and determinate/indeterminate progress bars.
- Added tags and tabs with controlled selection, disabled states, per-tab colors and icons, keyboard navigation and lazy content templates.
- Added menus, cascading submenus, dropdowns, context menus and tooltips.
- Added shared overlay positioning, live theme inheritance, keyboard dismissal and focus behavior for these overlay controls.
- Added `TruncateDirective`, `TruncatedTextPipe` and `truncatedText()` for reusable overflow detection and conditional tooltips.
- Added configurable automatic truncation tooltips across supported controls.

Cards, layout primitives, alerts, chips, collapsibles, accordions, skeletons and interactive popovers arrive in 1.5.0.

## Navigation foundation

- Added `NavigationService`, route metadata helpers, breadcrumbs and shared navigation configuration.
- Added `defineNavigation()` with typed section IDs and reusable route declarations.
- Added route-driven side navigation with hierarchical browsing, contextual search and active-route handling.
- Added compact side rails, responsive mobile drawers, configurable slots and persisted desktop navigation state.
- Added access-adapter filtering, translated navigation metadata and focus/scroll restoration when navigating submenu levels.

The following sections describe the side-navigation refinements included at the end of this cumulative range.

## Responsive submenu browsing

- Added `submenuBreakpoint` (default `xl`) and `submenuMode` (`auto`, `inline`, or `flyout`) to control desktop submenu presentation independently of nesting
  depth.
- At or below the threshold, children replace the current list inside the rail. Inline navigation also measures its containing shell, so an embedded narrow rail
  uses the appropriate layout even on a wide screen.
- Above the threshold, children open in one adjacent opaque panel. Deeper levels reuse that panel instead of accumulating recursive overlays.
- Mobile drawers always browse inside their own panel. Changing available width preserves the browsing path.
- Added a persistent Back action, ancestor path, and a parent heading that links to the parent's page. Returning to a previous level restores its scroll
  position and disclosure focus.
- A compact rail temporarily expands when inline browsing needs space, while retaining the saved collapse preference.
- Explicit level changes animate briefly; reduced motion removes that movement.

## Page links, selection, and search

- Kept labels as native route links and separated their child-disclosure controls. Clicking a label navigates; clicking its chevron browses descendants.
- Required an explicit disclosure action for submenu opening. Hovering labels no longer opens navigation panels.
- Added independent hover and focus surfaces to page links and disclosures. Selection belongs to the active page link; expanded ancestors and search matches do
  not acquire selected styling.
- Reworked search into a flat list of direct matches with translated parent paths in the main navigation. Searching does not open nested panels.
- Search normalizes accents and case, ranks exact, subsequence, and keyword matches, and tolerates one edit in words of at least four characters.
- Result labels navigate directly. Their disclosure leaves search and opens the chosen result's children. Clearing search restores the previous browsing level
  and its scroll position.
- Search temporarily expands a compact rail without changing its stored preference and searches only the currently supplied tree.
- Added a monochrome guide for the best nested result, with a static alternative under reduced motion. Top-level results have no guide; `showSearchGuide: false`
  hides it. This describes 1.4.20 behavior; later releases retire the guide.

## Keyboard, focus, and mobile drawers

- Preserved native links and menu/menuitem semantics with separate, named disclosure buttons.
- Enter, Space, or the arrow toward a submenu opens children. Up/Down and Home/End move within the current menu.
- Back, Escape, or the opposite arrow returns one level with focus and scroll restoration. At the root, Escape dismisses the mobile drawer.
- Kept Tab within adjacent panels and mobile drawers, and restored the opening control's focus after closing.
- Fixed mobile and inline preview presentation so layout changes establish the closed geometry immediately; explicit open/close actions animate the drawer.
- Retained the mobile close action, click-to-close scrim, and shared scroll locking. Resizing out of mobile presentation closes the drawer and releases its
  lock.
- Kept embedded inline drawers and scrims inside their positioned preview shell without locking the page.

## Shared menu overlays

- Added `menuManual: true` to `MenuTriggerDirective` for owners coordinating a single overlay across multiple disclosure controls.
- In manual mode, the owner supplies trigger interaction and ARIA semantics and calls `open()`/`close()`; automatic trigger handlers and host ARIA are omitted.
- Extended `open(focus?, origin?)` with an optional per-opening positioning origin.
- Preserved outside-click dismissal, focus trapping, keyboard dismissal, theme inheritance, overlay context, and origin visibility tracking.
- Reused native CSS anchoring and the existing measured fallback. Panels close when their origins leave the viewport or clipping container.

## Icons and notifications

- Added Lucide SVG icon integration with asynchronous loading, typed names, configurable sizing and stroke width, and semantic colors.
- Added custom icon definition helpers and decorative/meaningful icon semantics.
- Added `ToastrService` with standard information, success, warning and danger notifications, plus custom content.
- Added six notification positions, configurable duration, progress indicators, swipe dismissal, pause/resume controls and typed close results.
- Added shared notification defaults and theme-aware notification surfaces.

## Accessibility, translations and developer experience

- Added `BxA11yService` for reactive reduced-motion preferences and application overrides.
- Added optional `BX_I18N` integration and shared `ResolvableText` contracts for configurable text.
- Added reactive translation updates through the adapter's version signal.
- Added keyboard interaction, focus presentation, accessible labels, validation descriptions and RTL behavior across the new components.
- Expanded public configuration interfaces, template customization points and component documentation.

## Playground

The playground application uses the shared `SideNav` with an expanded, text-focused menu. Its dedicated demo adds controls for comparing submenu presentations
and exercising a four-level tree, search, focus, and scroll restoration.

## Migration notes

Applications upgrading from the separate packages should update their imports and theme setup:

| Previous API or setup                   | Replacement in 1.4.20                                     |
| --------------------------------------- | --------------------------------------------------------- |
| `@filip.mazev/blocks-core` imports      | `@filip.mazev/blocks/core`                                |
| `@filip.mazev/modal` imports            | `@filip.mazev/blocks/modal`                               |
| Deep Sass imports from the old packages | `@use '@filip.mazev/blocks' as *;`                        |
| `core-theme(...)` and legacy theme maps | `bx-theme(...)` with a current palette map                |
| Custom `--fm-*` theme overrides         | Review and migrate to the `--bx-*` semantic tokens        |
| Modal `bannerText`                      | `header: { text: ... }`, with optional icon configuration |
| Angular 21 applications                 | Upgrade to Angular 22                                     |

For manual installation, register `@filip.mazev/blocks/effects/effects.css` once alongside the global Blocks theme. The installation schematic configures this
automatically.

Existing `SideNav` consumers can retain automatic defaults. Set `submenuMode: 'inline'` or `'flyout'` for an explicit desktop presentation, and customize Back
text through the existing translatable configuration. Applications relying on hover-to-open navigation should use the separate disclosure action. The former
`--bx-side-nav-item-highlight-background` no longer colors search rows. Generic menu triggers retain automatic handling unless `menuManual` is enabled.

```html
<bx-side-nav [config]="{ submenuBreakpoint: 'xl', submenuMode: 'auto', backLabel: { key: 'nav.back' } }" />
```
