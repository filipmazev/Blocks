# Blocks 1.5.0

Blocks has grown from separate core and modal libraries into a unified Angular UI library with shared theming, forms, navigation, notifications, icons and
appearance effects.

These notes cover the library, its documentation and installation schematic. They compare `f9bf13b2bb6914c26d11639076006bd1dcc5a851` with
`55b915c819525cfa365d4b59389a765233b2cd35`.

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

See the [appearance guide](../../../projects/playground/src/app/components/screens/appearance/README.md) for the current palettes and application-wide
configuration.

## Glass, physics and lighting

- Added a shared glass material across components and overlays, configurable globally through `ThemingService.setAppearance()`.
- Added adjustable glassiness, automatic/baseline/enhanced rendering quality and reduced-transparency settings.
- Added `BxSurfaceDirective` for applying Blocks materials to application-owned surfaces, with local appearance and interaction overrides.
- Introduced spring-based press feedback and spatial lighting that responds to hover, press, keyboard focus and selected states.
- Added ambient edge tinting from nearby content, with depth and occlusion handling that respects overlay boundaries.
- Added opaque fallbacks for forced colors, reduced transparency and unsupported backdrop filters.
- Exposed a framework-independent DOM effects runtime through `@filip.mazev/blocks/effects/runtime`.

## Forms and controls

- Added buttons, form fields, text and numeric inputs, multiline inputs, search inputs, checkboxes, radio buttons and groups, switches, selects, multiselects,
  autocomplete and sliders.
- Added integration with Angular Signal Forms, Reactive Forms, template-driven forms and standalone value models.
- Introduced shared validation presentation with configurable error messages, priorities, visibility policies, projected errors and application defaults.
- Added composable prefixes, suffixes, hints, required markers, floating labels and filled/outlined field appearances.
- Added native-control integration through `bxInput` and an extension contract for custom form-field controls.
- Added distinct readonly behavior through both `readOnly` and Angular's lowercase `readonly` contract.
- Added numeric parse-state handling, keyboard-accessible steppers, textarea autosizing and native input attribute forwarding.

## Asynchronous selection and pagination

- Added application-owned loading, searching, error and pagination state to selection controls.
- Added searchable multiselects with tag presentation, overflow summaries, configurable templates and explicit select-all intent.
- Added editable autocomplete with free-text values, optional inline completion, custom option templates and externally filtered suggestions.
- Introduced reusable `LoadMoreDirective` behavior with guarded scroll requests, a visible fallback action when content does not overflow, and explicit retry.
- Distinguished scroll, button and retry request sources.
- Added retained-content error states and separate feedback for initial loading, replacement searches and incremental loading.

## Primitives and overlays

- Added cards, containers, stacks, grids, dividers, alerts, chips, tags, collapsibles and accordions.
- Added loading indicators, spinners, skeletons and determinate/indeterminate progress bars.
- Added tabs with controlled selection, disabled states, per-tab colors and icons, keyboard navigation and lazy content templates.
- Added menus, cascading submenus, dropdowns, context menus, tooltips and interactive popovers.
- Added shared overlay positioning, live theme inheritance, keyboard dismissal and focus behavior for the new overlay controls.
- Added `TruncateDirective`, `TruncatedTextPipe` and `truncatedText()` for reusable overflow detection and conditional tooltips.
- Added configurable automatic truncation tooltips across supported controls.

## Navigation

- Added `NavigationService`, route metadata helpers, breadcrumbs and shared navigation configuration.
- Added `defineNavigation()` with typed section IDs and reusable route declarations.
- Added route-driven side navigation and top navigation with shared hierarchical browsing, contextual search and active-route handling.
- Added compact side rails, responsive mobile drawers, configurable slots and persisted desktop navigation state.
- Added access-adapter filtering, translated navigation metadata and focus/scroll restoration when navigating submenu levels.

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

## Migration notes

| Previous API or setup                   | Current replacement                                        |
| --------------------------------------- | ---------------------------------------------------------- |
| `@filip.mazev/blocks-core` imports      | `@filip.mazev/blocks/core`                                 |
| `@filip.mazev/modal` imports            | `@filip.mazev/blocks/modal`                                |
| Deep Sass imports from the old packages | `@use '@filip.mazev/blocks' as *;`                         |
| `core-theme(...)` and legacy theme maps | `bx-theme(...)` with a current palette map                 |
| Custom `--fm-*` theme overrides         | Review and migrate to the current `--bx-*` semantic tokens |
| Modal `bannerText`                      | `header: { text: ... }`, with optional icon configuration  |
| Angular 21 applications                 | Upgrade to Angular 22                                      |

For manual installation, register `@filip.mazev/blocks/effects/effects.css` once alongside the global Blocks theme. The installation schematic configures this
automatically.
