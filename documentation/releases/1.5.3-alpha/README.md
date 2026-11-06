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

## Page layouts and breadcrumbs

- Added `PageContainer`, `PageHeader`, `PageContent`, and `PageFooter` to the primitives entry point, with colocated guides and an interactive playground.
- Standardized page widths, responsive padding, heading spacing, and the existing section-label/title treatment throughout the playground, including tokens,
  icons, utilities, component examples, appearance, release notes, and modal/toast configurators. Home keeps its existing layout.
- Added `ResolvableText` support for section titles, page titles, explicit descriptions, breadcrumb labels, and the breadcrumb navigation's accessible name.
  Already-rendered text reacts to the optional `BX_I18N` adapter's language revision.
- Added `autoResolveTitlesFromNavigation` (default `true`) to infer undefined section and page titles from shared navigation metadata. Descriptions remain
  manually supplied; explicit empty titles suppress automatic values. Projected headers support additional content and configurable semantic heading levels.
- Connected `provideNavigation()` and `NavigationService.page` to the optional `BX_PAGE_NAVIGATION` adapter without adding a dependency from primitives back to
  navigation. Applications can also provide their own reactive `IPageNavigation` adapter or supply explicit headings and breadcrumb trails.
- Added automatic breadcrumbs with a configurable `breadcrumbsAfter` threshold. The default is one nesting: root trails stay hidden and child pages show
  ancestor links. Zero shows root entries; the demo's numeric control has a minimum of zero and clamps typed negative values. Breadcrumb resolution remains
  independent of automatic title resolution.
- Removed redundant top-of-page back links in favor of breadcrumbs. Trails use native links, an ordered list, visible keyboard focus, and an explicitly marked
  current page, and wrap for narrow screens, translated labels, and RTL layouts.
- Grouped Page container, Content container, Stack layout, Grid layout, and Divider under **Primitives → Layout** at `/components/layout`. Their canonical demo
  routes now use `/components/layout/<component>`; existing `/components/<component>` URLs redirect to the corresponding layout page.

## Mobile navigation

- Reused `ModalBackdrop` for mobile side navigation, including its blur and opaque accessibility fallbacks.
- Added a translatable dismissal label, tab-order input, and presentation CSS variables to the shared backdrop.
- Tied the drawer's `ScrollLockService` acquisition to its open overlay presentation and released its own lock on close, route navigation, presentation changes,
  and destruction. Concurrent modal locks remain active.
- Made shared scroll-lock ownership idempotent. Releasing one owner preserves every other active lock, recalculates touch/overflow requirements, and restores
  the original inline body styles only after the final owner releases its lock.
- Kept embedded inline drawers contained in their preview shell without a page scroll lock.

## Window dimensions and responsive breakpoints

- Expanded `WindowDimensionsService` with signals for extra-small and small mobile viewports, small laptops, large desktops, ultra-wide screens, and cumulative
  `*AndBelow` ranges, while retaining `isMobile`, `isTablet`, and `isDesktop`.
- Added `currentBreakpoint()` for the active breakpoint key and `currentBreakpointValue()` for its numeric threshold. Both return `undefined` outside the
  browser.
- Standardized breakpoint matching on minimum-width thresholds, so the active breakpoint is the highest configured threshold not exceeding the viewport width.
- Added strongly typed `isAtLeast()`, `isBelow()`, and `isBetween()` methods for custom viewport checks, avoiding manual comparisons with breakpoint numbers.
- Added generic `resolveResponsiveValue()` to select the value assigned to the highest matching configured breakpoint, with a caller-provided fallback for
  server rendering or when no configured breakpoint matches.
- Centralized comparisons behind shared helpers, while preserving convenient, reactive boolean signals for common viewport categories.
- Improved first-render dimension detection by reading the browser viewport without depending on an uninitialized class field.
- Replaced the 150 ms debounced resize listener with animation-frame-aligned event coalescing for more responsive dimension updates. Resize subscriptions now
  clean up automatically when the service is destroyed.

For example, choose a value by viewport size without manually comparing breakpoint constants:

```typescript
public readonly glassCount: Signal<number> = computed(() =>
  this.windowDimensionsService.resolveResponsiveValue(
    { xs: 10, md: 30, '2xl': 100 },
    100
  )
);
```

Or use a direct comparison inside a reactive computation:

```typescript
public readonly showExpandedLayout: Signal<boolean> = computed(() =>
  this.windowDimensionsService.isAtLeast('2xl')
);
```

## Navigation API

- Replaced side-navigation submenu popups with nested lists inside the sidebar at every screen size and depth. Back, ancestor navigation, scroll restoration,
  and temporary expansion of a compact rail remain available.
- Removed `submenuMode`, `submenuBreakpoint`, `SideNavSubmenuMode`, and `isInlineSubmenus()`. Consumers should remove these settings, imports, and calls; nested
  browsing now always uses the panel. The obsolete submenu width/height CSS variables no longer apply.
- Kept route selection separate from programmatic row focus and focused the active route when entering its containing level.
- Made the first, section-labelled ancestor action return directly to the full navigation root when that section was only a grouping label, while preserving
  return to a section list that was explicitly opened. Returning to an ancestor reveals the original item used to enter its child branch, scrolling only the
  navigation list.

- Renamed the navigation configuration helper from `withNav` to `withInAppNavigation` to clarify its purpose and distinguish in-app navigation from other
  navigation concerns.
- Removed the previous `withNav` export. Applications using the old helper must update their imports and configuration calls.

## Design tokens and theme palettes

- Added a generated Core inventory of CSS custom properties, variable references, design scales, breakpoints, and emitted utility classes. The inventory
  includes semantic roles, every palette shade, glass/effects properties, component overrides, registered custom properties, and discoverable runtime values.
- Exported `CSS_TOKEN_CATALOG`, `ICssToken`, and category/kind/scope contracts. Metadata distinguishes global, theme, local, and runtime availability and
  records source declarations and use-site fallbacks; local/runtime discovery does not imply that a variable exists on the document root or is a supported
  override.
- Centralized semantic companion mappings in the Sass theme engine. `getComplementaryToken()` uses these mappings and the existing palette companion rule;
  `resolveTokenToCssVar()` returns the typed `CssVariableReference` contract. Palette guards validate supported palettes and shades.
- Moved theme IDs, labels, brand/accent assignments, and optional preview order into the theme engine's `$theme-palettes` registry. Generate `THEME_PALETTES`
  and `THEME_PALETTE_IDS` from that registry, derive `BxThemeId` from the generated IDs, and derive picker swatches from palette shade 500.
- Added `make-palette-theme(id, dark?, overrides?)` so existing named light/dark theme variables and playground theme classes use the same assignments. Existing
  palette IDs, labels, class names, and preview colors are preserved.

## Tokens page

- Added the searchable `/tokens` playground page for semantic colors grouped by purpose, palette shade scales, color companions, spacing, corner radii, border
  colors, shadows, layers, effects, component properties, utility classes, and Sass breakpoints.
- Used Blocks accordions and compact cards. Only the first result section opens by default; category filters and keyboard navigation support browsing the
  complete catalog.
- Added right-click and touch long-press copy menus on token cards, plus a visible Copy… button and keyboard access. Removed the global copy-format dropdown.
  Options copy `var(--bx-…)`, the raw `--bx-…` name, HEX, RGB, or RGBA. Color copies follow the current theme, preserve transparency, and convert through the
  browser's sRGB color handling; pairs copy one value per line.
- Added live color-value search, narrow-screen layouts, and dynamically sized search/select controls that reserve no empty validation row.
- Added a Blocks Collapse all action beside the Categories filter to close all result sections.
- Separated categories with matching titles and Blocks dividers while preserving the heading hierarchy for groups and cards.
- Added scroll-based lazy rendering in small token batches. Batches mount near the viewport and unmount when far away while preserving measured space and
  focused controls. Shared intersection/resize observers keep long groups lightweight without pagination. With fewer than 48 cards across expanded sections,
  lazy rendering is disabled and the displayed cards remain mounted.
- Changed the category filter to a clearable Blocks multiselect. Categories combine inclusively, such as Colors and Color pairs; clearing selection means All
  tokens, with no category restriction. Search and counts still cover the complete catalog.
- Reused one color-conversion canvas, cached conversion results for the current theme, and converted only mounted token batches during ordinary browsing.
  Current HEX/RGB search builds its color index lazily. Deferred documentation content until its section opens.
- Shortened palette section titles and moved current-theme, palette, and companion labels into trailing heading tags. Card text suppresses selection outside
  collapsible metadata to avoid conflicts with long-press gestures.
- Grouped palette shades and companions into their registered theme pairs. Sorted design scales by size/source order, widened non-color tiles, enlarged radius
  samples, and used a light neutral canvas for visible shadow previews in dark mode.
- Used Blocks collapsibles for source defaults and fallbacks, wrapped responsive Sass examples in code blocks, and copied RGB with comma-separated channels.
- Colocated the catalog guide, linked it from Core and Utilities, and included it in generated playground documentation.

## Search input

- Added `SearchInput.compact`, defaulting to `false`, to request compact presentation for a search input without a label. Supplying a label automatically
  enables compact mode. The input preserves existing search, loading, readonly, and accessibility behavior.

## Shared primitive customization

- Fixed surrounding surface highlights changing when a context menu opens. Lighting visibility ignores fully transparent CDK dismissal backdrops while retaining
  occlusion from visible menu panels and opaque backdrops.
- Stopped menu rows from casting near-white interaction light onto the page behind their opaque panel. Rows retain themed normal/danger hover and pressed fills,
  visible keyboard focus, and application motion preferences.
- Added `false` support to `BxSurfaceDirective.bxSurfaceEmission` and runtime `ISurfaceOptions.emission`. Automatic hover, press, active-state, and
  keyboard-focus emission can be disabled independently of press feedback and received lighting; an explicit focus-emission color still enables focus-only
  emission.
- Made emission-setting changes react while an interactive surface is already hovered, without requiring the pointer to leave and return.
- Made inherited overlay lighting directional. Context menus, dropdowns, popovers, selection panels, and tooltips can receive their trigger's lighting context,
  while internal semantic, explicit, reflected, and ambient sources retain their overlay boundary.
- Checked projected receiving locations separately from whole-source exposure, so an uncovered area elsewhere on a receiver cannot authorize lighting through an
  opaque panel. Edge falloff now measures the receiver perimeter, and hover contributions keep their bounded circular spread on large surfaces.
- Added an emission toggle to the Surface effects playground and expanded browser coverage for menu hover/focus, overlay isolation, explicit lights and
  reflections, covered receiving edges, source cleanup, and retained press feedback.
- Fixed number-only Tag proportions by keeping vertical padding at zero while preserving configurable horizontal padding and minimum diameter.

- Added optional `titleTemplate` support to Collapsible and accordion items, with the exported `ICollapsibleTitleContext` providing the translated title and
  expansion state. This supports noninteractive header content such as count tags while retaining the shared disclosure and focus behavior.
- Added `Collapsible.trailingTemplate` for noninteractive status tags, text, and icons at the logical end of collapsible/accordion headings, before the chevron.
  It shares `ICollapsibleTitleContext` with title templates, supports RTL layouts, and keeps the heading as one accessible disclosure button.
- Added `Card.surfaceEffects`, defaulting to `true`. Dense collections can disable decorative surface controllers while keeping themed card styling, content
  slots, and interactions.

## Overlay positioning

- Fixed select-panel drift when a trigger inside a native top-layer popover moves in a nested scroller. Top-layer overlays use synchronous measured CDK
  positioning; ordinary overlays retain native CSS anchoring where supported.
- Preserved the origin tracker's cleanup, resize handling, visibility callbacks, and explicit `reposition()` method in both positioning paths.
- Released Select and Multiselect panel overlays after completed closes so reopening resolves the current ordinary/top-layer context. Selected values and search
  terms remain on the control, and reopening during an exit still reverses the existing transition.
- Added **Use top layer** to the overlay-positioning utility playground and documented the positioning policy in Core, Select, and Dropdown guides.
- Corrected select browser checks to distinguish undecorated option rows from the shared pagination footer and to keep an artificially fixed test trigger above
  its demo content. Retained scrolling, filtering, placement, focus restoration, and top-layer checks.

## Breaking changes and migration

### Navigation configuration

The navigation configuration helper has been renamed. This is a **breaking change** for applications using `withNav`.

| Previous API   | Current replacement        |
| -------------- | -------------------------- |
| `withNav(...)` | `withInAppNavigation(...)` |

Update imports and references to use `withInAppNavigation`. The existing navigation configuration behavior remains unchanged.

### Window dimensions behavior

The window dimensions updates include behavior changes that may affect consumers:

- **`isDesktop()` now begins at `xl` (1280 px), rather than `lg` (1024 px).** Use `isAtLeast('lg')` or `isSmallLaptop()` where the previous desktop threshold is
  required.
- The writable `_dimensions` signal is now private. Use the public readonly `dimensions()` signal to read viewport dimensions; callers can no longer set
  dimensions directly through the service.
- Resize-driven updates can occur more frequently because they are scheduled per animation frame rather than waiting for a 150 ms quiet period. Review any
  expensive computations triggered by dimension changes.

The existing `isMobile()` and `isTablet()` breakpoint boundaries remain unchanged.

### Color tokens and variable availability

- `meta-brand-palette` and `meta-accent-palette` are Sass metadata and are excluded from `Color` and `SEMANTIC_COLOR_TOKENS`; `bx-theme` never emitted CSS
  variables for them. Use `ThemingService.palette()` and its palette definitions for metadata, and use `primary`/`accent` for themed colors.
- Variable/reference inventories now also include local and runtime properties. Filter `CSS_TOKEN_CATALOG` by `scope` when a consumer needs only global or theme
  variables. Consult the owning feature guide before setting a local or runtime property.
- Companion mappings describe styling relationships rather than guaranteed accessible text contrast. Existing public color-helper and scale exports remain
  available through `@filip.mazev/blocks/core`.

## Code generation and lint rules

- Required injected class references to retain the class's full lower-camel-case name, including service suffixes, in fields and local variables.
- Required direct injected member projections to keep the projected member's name, such as `isReducedMotion` and `nativeElement`.
- Added ESLint enforcement with alias/namespace resolution and updated library/playground references, templates, host expressions, and documentation examples.
- Required descriptive JSDoc for public members of exported library components, directives, and services and for exported helpers, including parameter and
  generic parameter descriptions. Filled documentation gaps across controls, overlays, shared services, and runtime helpers.
- Replaced the theme-type synchronization script with `npm run tools:generate-tokens`; retained `tools:sync-theme-types` as a compatibility alias. Library and
  playground build/start/watch scripts run token generation automatically.
- Split token generation into source reading, data construction, palette metadata, and TypeScript writing helpers. Evaluate Sass maps through Sass instead of
  parsing them with regular expressions, and use the TypeScript AST for generated data rather than maintaining TypeScript programs inside strings.
- Kept type contracts in regular TypeScript files and added `Generated from … by tools/tokens/generate-tokens.mjs` source banners to generated constants.
- Pre-format generated TypeScript before the strict ESLint autofix/check pass to avoid expensive formatter-difference processing on large inventories. Added
  per-file progress and elapsed-time reporting, and skip rewriting unchanged outputs so repeated generation does not trigger unnecessary rebuilds.

## Library source organization

- Applied Modal's entry-point layout across Blocks: supporting types, interfaces, constants, helpers, services, tokens, enums, and classes now use their own
  top-level category folders, including within the effects runtime secondary entry point.
- Colocated concrete directive implementations and their guides, templates, styles, and existing specs. Moved form hint/error components into `components` and
  shared navigation/modal slot directives into `directives`.
- Separated overlay context contracts from their injection token and extracted supporting declarations from component, directive, service, and runtime modules.
- Moved generated Lucide definitions into `icons/constants/lucide` and their contracts into `icons/types`. Updated icon/version generators, imports, public
  re-exports, documentation discovery, and catalog paths to preserve the layout on regeneration.
- Added ESLint enforcement for category placement, declaration separation, filenames, and colocated component/directive READMEs.

## Compatibility

Existing public package entry points remain available. Backdrop and shared primitive inputs are additive, and older release-note URLs continue to work.
Consumers should review the `withNav` rename, `isDesktop()` threshold, direct writes to `_dimensions`, color-token metadata removal, and variable scopes above.

Stable NPM installs still use the `latest` tag; Alpha and Beta remain opt-in.
