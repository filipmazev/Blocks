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

- Renamed the navigation configuration helper from `withNav` to `withInAppNavigation` to clarify its purpose and distinguish in-app navigation from other
  navigation concerns.
- Removed the previous `withNav` export. Applications using the old helper must update their imports and configuration calls.

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

## Code generation and lint rules

- Required injected class references to retain the class's full lower-camel-case name, including service suffixes, in fields and local variables.
- Required direct injected member projections to keep the projected member's name, such as `isReducedMotion` and `nativeElement`.
- Added ESLint enforcement with alias/namespace resolution and updated library/playground references, templates, host expressions, and documentation examples.
- Required descriptive JSDoc for public members of exported library components, directives, and services and for exported helpers, including parameter and
  generic parameter descriptions. Filled documentation gaps across controls, overlays, shared services, and runtime helpers.

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

Existing public entry points other than the removed `withNav` export remain available. Backdrop inputs are additive, and older release-note URLs continue to
work. Window dimension consumers should review the `isDesktop()` threshold change and any direct writes to `_dimensions`.

Stable NPM installs still use the `latest` tag; Alpha and Beta remain opt-in.
