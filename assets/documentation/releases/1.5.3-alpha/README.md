# Blocks 1.5.3-alpha

Draft library release notes. Changes may be revised before release.

## Declarative side panel

- Added standalone `SidePanel` (`bx-side-panel`) to `@filip.mazev/blocks/primitives`, controlled through the `open` boolean model and its `openChange` output.
- Supports left/right placement, numeric or CSS-length widths, optional element containment, viewport bounds, scoped backdrops, and reactive configuration.
- Added `SidePanelLayout` for stable CSS containment and real push slots beside page content. `layoutMode` defaults to overlay; optional typed `breakpoints`
  resolve minimum-width modes through `WindowDimensionsService`, with the highest matching configured threshold winning. `currentLayoutMode()` exposes the
  effective mode. Push and overlay changes retain the same panel and projected content.
- Panels inside the layout no longer follow document-scroll rectangles or use deferred scroll-time positioning. Standalone/external-bound overlay presentation
  remains supported; `container="viewport"` explicitly escapes an enclosing layout. All four side-panel corners are square through shared Modal Side styles.
- The panel provides the existing top-layer overlay context for nested selection controls, menus, popovers, and tooltips. Tooltips now honor that context and
  use the shared synchronous origin tracker, avoiding clipping and panel-relative stacking failures.
- Unhandled Escape is observed for the complete open lifetime, including after projected-content updates or focus moves to the surrounding page. Child overlays
  retain first dismissal through their existing event handling; tooltip dismissal now marks Escape handled.
- Added `SidePanelHeaderDirective`, `SidePanelFooterDirective`, and `SidePanelBannerDirective` for projected sections. Body content remains mounted across
  closing and reopening; omitted sections reserve no space, and the body scrolls separately from header/footer actions.
- Nonmodal complementary-region semantics preserve ordinary page interaction and keyboard navigation. Configurable focus entry/restoration, close controls,
  Escape dismissal, translated accessible names, and mounted reduced-motion updates are supported without page scroll locking or focus trapping.
- Shared panel-frame, header/footer, banner, and close-control Sass presentation with Modal Side. Existing modal services, layouts, backdrops, focus trapping,
  scroll locks, nested modal handling, animations, and dismissal contracts remain in place.

## Modal and panel presentation

- Declarative SidePanel and left/right Modal Side surfaces use square corners on all four edges, including their material decorations.
- Centered, side, and bottom-sheet modals share the declarative panel's translucent surface presentation. `--bx-modal-bg` / `--bx-modal-text` retain priority,
  with shared panel and semantic surface/text fallbacks. Root dialogs retain the ordinary 0.52 opacity floor and their shared appearance preferences.
- The root dialog paints dimming outside its border so its translucent surface samples the page without its own black scrim. Centered layouts keep viewport
  dimming on an unscaled frame while the clear opening follows the dialog's zoom. The shared backdrop retains blur, pointer hit testing, and dismissal.
- Nested dialogs use independent fixed backdrops, retaining the parent's material and backdrop. The first nested dialog uses a 0.9 minimum opacity; subsequent
  nested levels use 1. `ModalGlobalSettingsService.nestedOpacityFloors` configures those floors reactively, with the final entry repeated at deeper levels. An
  empty array disables depth adjustment. Appearance/accessibility settings may increase opacity further. Close guards and responsive layouts share the policy.
- All built-in light-mode accents now use white foregrounds on contrast-safe semantic base/hover/active shades. Raw palette anchors and theme-picker swatches
  remain unchanged. Other on-fill roles prefer white when it reaches 4.5:1 contrast, otherwise a dark foreground.
- Corrected brand/accent text against its supported surfaces and secondary text against dark hover/pressed surfaces. Success, information, warning, and danger
  retain their original foreground, border, and normal/hover/active fill shades. High-contrast definitions and explicit theme overrides retain control. Filled
  chips preserve their semantic fill during hover and add an inset outline to retain on-fill contrast.
- Declarative SidePanel headings share Modal Side's title/icon layout, wrapping, divider spacing, and compact 32px close controls. `SidePanel.headerIcon`
  accepts optional `IIconData` with modal-banner size, semantic color, background, and stroke behavior. Projected headings and the separate top-banner slot
  remain supported.

## Reusable resizing

- Added `ResizeHandleDirective` (`bxResizeHandle`) to Primitives with a numeric `resizeValue` model, physical left/right width and top/bottom height edges, and
  typed `IResizeHandleEvent` lifecycle events. Owners apply sizes to their own layouts; no table/panel-specific state or target-style mutation is required.
- Added explicit pixel minimum/maximum inputs, optional original-size references, and container observation. Default maximum is 50% of the container; the
  relative minimum is 30% of original size. `resizeDisableShrink` defaults to true, retaining the original-size floor until shrinking is explicitly enabled.
  Available container extent wins over conflicting bounds.
- Pointer capture, frame-coalesced updates, final-position flushing, keyboard arrows/Home/End, Shift increments, and Escape cancellation share bounded values.
  Listeners, capture, and temporary selection/cursor styles are cleaned up on completion, cancellation, disabling, focus loss, and destruction.
- Added opt-in SidePanel width resizing with a handle on its inner edge. `width` is a model supporting `widthChange`; existing one-way bindings still work.
  `resizable`, `resizeMinWidth`, `resizeMaxWidth`, `resizeDisableShrink`, and translatable `resizeLabel` configure interaction. CSS-length initial widths are
  supported; completed adjustments write numeric pixels, and cancellation restores the original representation. Side panels resize horizontally only.
- Added shared neutral resize-grip styling: a compact three-dot pill in a separate gutter and a full-edge line without dots on hover/drag. Pointer inactivity
  fades the idle grip; focus, touch, reduced motion, and forced colors retain appropriate feedback. Push panels reserve the gutter. `resizeActivityContainer`
  separates pointer activity from portal bounds, and `resizeIdleDelay` defaults to 2000ms with zero retaining a persistent idle grip.
- Added `Chip.deselectable`, default true. False supports owner-coordinated single-choice chip groups without toggling the active choice off. Filled chip
  material now defaults to an opaque semantic fill, configurable through `--bx-chip-fill-opacity`, so primary selection remains visible.

## Scroll-boundary detection and shared loading

- Added `InfiniteScrollDirective` (`bxInfiniteScroll`) to Primitives for detecting proximity to the end of arbitrary scroll containers or an ancestor/document
  viewport. Inputs configure pixel thresholds, disabled/loading states, completion revisions, and an optional footer offset.
- Detection remains separate from fetching, pagination, indicators, buttons, retries, and exhaustion. `scrollEnd` emits a guarded boundary event; `complete()`
  acknowledges completion when the owner has no loading cycle or revision change. Read-only `overflowing()` exposes measured overflow.
- Optional `infiniteScrollCheckOnRender` enables finite local progressive rendering to fill short viewports after initial render, content changes, and resizing.
  It defaults to false to avoid uncontrolled remote request loops. Owners explicitly disable detection at exhaustion.
- Exported `findScrollContainer`, `measureScrollBoundary`, `observeScrollBoundary`, and `IScrollBoundary` for reusable viewport discovery, geometry, and
  disposable passive observation. Browser observers start after rendering, reconnect for container changes, and release removed content targets and listeners.
- Refined `LoadMoreDirective` to use the same Core boundary measurement/observation helpers. Select and Multiselect retain one shared orchestration layer for
  loading, no-scrollbar fallback actions, failure, explicit retry, and request-source payloads. Their public inputs and outputs remain unchanged.
- Kept footer-excluded overflow measurement and explicit remote fallback behavior. Scroll request guards now run before entering Angular when no new request can
  be emitted, avoiding redundant change-detection work while loading or awaiting completion.

## Bidirectional virtual rendering

- Added `VirtualCollection<T>` and typed `VirtualItemDirective<T>` to Primitives for a sliding row window independent of detection and data loading. List and
  responsive multi-column grid modes mount overscan near the viewport and unmount distant items while preserving overall scroll extent with spacers.
- Exported `IVirtualCollectionConfig`, `IVirtualItemContext<T>`, `IVirtualRange`, stable-key/track-by contracts, and layout types. Configuration covers
  estimated row height, overscan pixels, and CSS or numeric minimum column width; `measurementRevision` invalidates cached geometry.
- Measure dynamic rows with `ResizeObserver` and maintain a cached prefix-sum tree for efficient height updates and offset lookups. Width and column changes
  regroup rows and retain a stable visible anchor. Scroll corrections run after spacer rendering, including when the browser clamps a shrinking scroll extent.
- Exposed read-only `renderedRange()` and `renderedItems()` for bounded consumer presentation work, plus `scrollToIndex()`, `scrollToItem()`, and
  `refreshMeasurements()`. Programmatic smooth scrolling respects reduced motion. Focused rows can remain independently mounted; responsive regrouping restores
  their focused control when available. Measurement internals and coordination tokens remain outside public exports.

## Icons and generated categories

- Broadened `IconSize` to positive numeric pixel values or numeric strings and `number` to positive numeric values, enabling continuous customization. Existing
  values remain valid. Runtime invalid dimensions use 24 pixels and invalid stroke widths use 1.5.
- Ignore icon-load completions after input replacement or destruction.
- Added `LUCIDE_CATEGORIES`, `LUCIDE_ICON_CATEGORIES`, and `LucideCategoryId` to the icons entry point. Category records are synchronized with the generated
  icon names, support multiple assignments and upstream aliases, and use a predictable uncategorized fallback.
- Extended the existing generation pipeline with an offline, release-pinned official Lucide snapshot. A controlled synchronization command resolves upstream
  category inheritance and preserves attribution. Normal builds and runtime require no metadata network requests, and mismatched dependency/snapshot versions
  fail with synchronization instructions.

## Page layouts and breadcrumbs

- Added `PageContainer`, `PageHeader`, `PageContent`, and `PageFooter` to primitives with public configuration and colocated guides.
- Added responsive width/padding presets and `ResolvableText` support for section titles, page titles, explicit descriptions, breadcrumb labels, and the
  breadcrumb navigation's accessible name. Already-rendered text reacts to the optional `BX_I18N` language revision.
- Added `autoResolveTitlesFromNavigation`, default true, to infer undefined headings. Descriptions remain explicit; empty titles suppress automatic values.
  Projected headers support additional content and configurable semantic heading levels.
- Connected `provideNavigation()` and `NavigationService.page` to optional `BX_PAGE_NAVIGATION` without a dependency from primitives to navigation. Applications
  can supply their own reactive `IPageNavigation` adapter or explicit headings and breadcrumb trails.
- Added automatic breadcrumbs with a configurable `breadcrumbsAfter` threshold. The default hides root trails and shows ancestor links on child pages. Native
  ordered links, current-page markers, focus indicators, and wrapping support narrow screens, translated labels, and RTL layouts.

## Mobile navigation and scroll locking

- Reused the shared backdrop in mobile side navigation, including blur and opaque accessibility fallbacks. Added a translatable dismissal label, tab-order
  input, and presentation CSS variables.
- Tied drawer `ScrollLockService` ownership to open overlay presentation and released its own lock on close, navigation, presentation changes, and destruction.
  Embedded inline drawers retain their container-scoped behavior without a page lock.
- Made scroll-lock ownership idempotent. Releasing one owner preserves other locks, recalculates touch/overflow requirements, and restores original inline body
  styles only after the final owner releases its lock.

## Window dimensions and responsive breakpoints

- Expanded `WindowDimensionsService` with extra-small/small mobile, small laptop, large desktop, ultra-wide, and cumulative `*AndBelow` signals while retaining
  `isMobile`, `isTablet`, and `isDesktop`.
- Added `currentBreakpoint()` and `currentBreakpointValue()`, returning undefined outside the browser. The active breakpoint is the highest configured
  minimum-width threshold not exceeding the viewport width.
- Added typed `isAtLeast()`, `isBelow()`, `isBetween()`, and generic `resolveResponsiveValue()` with a caller-provided server fallback.
- Centralized comparisons and improved first-render dimension detection. Resize updates are animation-frame-coalesced instead of debounced by 150 ms and clean
  up automatically on destruction.

## Navigation API

- Replaced side-navigation submenu popups with nested lists at every screen size and depth. Back, ancestor navigation, scroll restoration, and temporary compact
  rail expansion remain available.
- Removed `submenuMode`, `submenuBreakpoint`, `SideNavSubmenuMode`, and `isInlineSubmenus()`. Nested browsing always uses the panel; obsolete submenu
  width/height variables no longer apply.
- Kept route selection separate from programmatic focus and focused the active route when entering its level. Ancestor navigation reveals the original entry and
  scrolls only the navigation list. Section-only ancestors return directly to the navigation root.
- Renamed `withNav` to `withInAppNavigation` without a deprecated alias.

## Design tokens and theme palettes

- Added generated Core inventories for CSS custom properties, references, design scales, breakpoints, and utility classes, covering semantic roles, palettes,
  effects properties, component overrides, registered properties, and discoverable runtime values.
- Exported `CSS_TOKEN_CATALOG`, `ICssToken`, and category/kind/scope contracts. Metadata distinguishes global, theme, local, and runtime availability and
  records declarations and use-site fallbacks; local/runtime discovery does not imply a document-root value or supported override.
- Centralized semantic companion mappings. `getComplementaryToken()` uses these mappings and the existing palette rule; `resolveTokenToCssVar()` returns
  `CssVariableReference`. Palette guards validate supported palettes and shades.
- Centralized theme IDs, labels, brand/accent assignments, and preview ordering in the Sass `$theme-palettes` registry; generated `THEME_PALETTES`,
  `THEME_PALETTE_IDS`, and `BxThemeId` derive from it.
- Added `make-palette-theme(id, dark?, overrides?)` while preserving existing palette IDs, labels, classes, and preview colors.

## Shared primitive customization

- Added `SearchInput.compact`, default false, for compact unlabeled search controls. Supplying a label automatically enables compact mode; existing search,
  loading, readonly, and accessibility behavior remains available.
- Fixed surface highlights changing when context menus open. Lighting visibility ignores fully transparent dismissal backdrops while retaining occlusion from
  visible panels and opaque backdrops. Menu rows keep themed hover/pressed fills and focus without casting near-white light behind the panel.
- Added `false` support to `BxSurfaceDirective.bxSurfaceEmission` and runtime `ISurfaceOptions.emission`. Automatic emission can be disabled independently of
  press feedback and received lighting; an explicit focus-emission color still enables focus-only emission. Mounted hover state reacts to changes.
- Made inherited overlay lighting directional, preserving overlay boundaries for semantic, explicit, reflected, and ambient sources. Exposure checks use
  projected receiving locations and perimeter-based edge falloff.
- Fixed number-only Tag proportions while preserving configurable horizontal padding and minimum diameter.
- Added `Collapsible.titleTemplate`, `Collapsible.trailingTemplate`, and exported `ICollapsibleTitleContext` for translated, noninteractive heading content and
  status while retaining shared disclosure/focus behavior and RTL support.
- Added `Card.surfaceEffects`, default true, allowing dense collections to disable decorative controllers while preserving themed styling, slots, and
  interaction.

## Overlay positioning

- Fixed selection-panel drift when a trigger inside a native top-layer popover moves in a nested scroller. Top-layer overlays use synchronous measured CDK
  positioning; ordinary overlays retain native CSS anchoring where supported.
- Preserved origin tracking cleanup, resize handling, visibility callbacks, and explicit `reposition()` in both positioning paths.
- Release Select and Multiselect overlays after completed closes so reopening resolves the current ordinary/top-layer context. Values and search terms remain on
  the control; reopening during exit reverses the existing transition.

## Breaking changes and migration

- `InfiniteScrollDirective` now belongs to `@filip.mazev/blocks/primitives`. Update imports from the earlier Core location; no deprecated Core alias is
  retained. Geometry and scroll-container helpers remain in Core as shared non-presentational utilities.

- Replace `withNav(...)` with `withInAppNavigation(...)` in imports and navigation configuration.
- Remove side-navigation submenu settings and `isInlineSubmenus()` calls; nested inline navigation is now the only presentation.
- `isDesktop()` begins at `xl` (1280 px). Use `isAtLeast('lg')` or `isSmallLaptop()` when the previous desktop threshold is needed. `isMobile()` and
  `isTablet()` boundaries remain unchanged.
- `_dimensions` is private. Read the service's readonly `dimensions()` signal instead of setting it directly. Review expensive resize computations because
  updates now occur per animation frame.
- `meta-brand-palette` and `meta-accent-palette` are Sass metadata and are excluded from `Color` and `SEMANTIC_COLOR_TOKENS`. Use `ThemingService.palette()` for
  palette metadata and `primary`/`accent` for themed colors. Filter `CSS_TOKEN_CATALOG` by scope when globally available values are required.
- Icon numeric contracts are broader; consumers enumerating `IconSize` or `number` as exhaustive unions should use their own preset arrays. Existing rendered
  presets and defaults remain supported. No Select, Multiselect, load-more, or Modal public API was removed by the scroll/panel additions.

## Documentation, tooling, and source organization

- Colocated library guides with their owning entry points, components, and directives. Standardized guide sections, public imports, examples, Markdown
  formatting, and documentation generation. Added a strict `lint:docs` gate.
- Added `release.config.json` with optional `nextVersion` and shared package-version resolution. Unassigned targets increment the configured channel's patch;
  explicit version overrides and publication retry remain supported. Registry request failure is not treated as proof of non-publication.
- Applied entry-point category folders for types, interfaces, constants, helpers, services, classes, enums, and tokens, including secondary entry points. Moved
  generated Lucide definitions under `icons/constants/lucide` with contracts in `icons/types` and updated generation/import paths.
- Enforced full lower-camel injected class names, direct injected-member projection names, declaration organization, colocated guides, and descriptive public
  JSDoc with parameter/type-parameter coverage.
- Replaced theme-type synchronization with `tools:generate-tokens`, retaining its previous script alias. Token generation evaluates Sass maps and uses the
  TypeScript AST, with generated-source banners, formatting, strict generation rules, and unchanged-output detection.

Stable NPM installs continue using the `latest` tag; Alpha and Beta remain opt-in.
