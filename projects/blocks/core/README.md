# Core

Shared infrastructure for responsive, accessible, theme-aware Blocks applications: appearance, device and viewport signals, shortcuts, translations, overlay
positioning, design tokens, and scroll locking.

## Import

```ts
import { BxA11yService, BxShortcutService, DeviceTypeService, ScrollLockService, ThemingService, WindowDimensionsService } from '@filip.mazev/blocks/core';
```

Follow the [package setup](../README.md). Core is a secondary entry point of `@filip.mazev/blocks`; the old separate `blocks-core` package is not required.

## Usage

```ts
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ThemingService, WindowDimensionsService } from '@filip.mazev/blocks/core';

@Component({
    selector: 'app-responsive-example',
    template: '<p>{{ compact() ? "Compact layout" : "Wide layout" }}</p>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsiveExample {
    private readonly windowDimensionsService = inject(WindowDimensionsService);

    protected readonly compact = computed(() => this.windowDimensionsService.isBelow('sm'));

    constructor() {
        inject(ThemingService).setApplicationTheme(null);
    }
}
```

## API

### Viewport, device, and accessibility

`WindowDimensionsService.dimensions()` exposes reactive dimensions and `breakpoints` shares thresholds with Sass:

| Token | Pixels |
| ----- | ------ |
| `xs`  | 360    |
| `sm`  | 640    |
| `md`  | 768    |
| `lg`  | 1024   |
| `xl`  | 1280   |
| `2xl` | 1536   |
| `3xl` | 1920   |
| `4xl` | 2560   |

`DeviceTypeService.getDeviceState()` reports mobile/tablet/desktop, desktop and mobile OS, Apple devices, and orientation. Use capabilities rather than assuming
that a device category determines interaction. `BxA11yService.isReducedMotion()` tracks the shared motion preference.

`ThemingService` exposes application mode, active theme, palette, and appearance signals. Use `setApplicationTheme('light' | 'dark' | null)`, `setPalette(id)`,
and `setAppearance(partial)` to update mounted Blocks components and their overlays.

### Design tokens

Browse the [token catalog](../../playground/src/app/components/screens/token-catalog/README.md) at `/tokens` for semantic colors grouped by role, every palette
shade and color companion, spacing, corner radii, border colors, shadows, layers, effects, component variables, utility classes, and Sass breakpoints. Search by
name, role, value, or source; copy CSS references and preview the current toolbar theme. `CSS_TOKEN_CATALOG` exposes typed discovery metadata with explicit
global/theme/local/runtime availability. `CSS_VARIABLES` and `CSS_VARIABLE_REFERENCES` supply typed names and references. Local/runtime values are not
necessarily available on the document root; the owning feature guide defines supported customization.

Theme palette IDs, labels, brand/accent roles, and optional swatch preview order live in `$theme-palettes` in the Sass theme engine. `THEME_PALETTES` and
`THEME_PALETTE_IDS` are generated from that registry; the public `BxThemeId` union derives from the generated IDs. Existing theme variables use
`make-palette-theme(id, dark?, overrides?)`, preserving their public names and colors.

All built-in light-mode accent fills use white on-accent text. Their semantic base/hover/active shades move darker where needed to meet 4.5:1 text contrast; raw
palette anchors and picker swatches remain unchanged. Other on-fill foregrounds prefer white when it passes, with dark text for brighter fills. Semantic
brand/accent text and secondary text choose readable palette shades across their normal, hover, active, and neutral surfaces in both modes. Success,
information, warning, and danger retain their original status foreground, border, and interaction-fill shades. Explicit theme overrides and high-contrast
palettes retain control.

Sass is the source of truth. `npm run tools:generate-tokens` evaluates the maps and inventories compiled CSS plus TypeScript property usage; generated constants
pass the repository's lint/format pipeline. Maintain color/type contracts in ordinary TypeScript. See the catalog guide for generation, availability, and the
migration of `meta-*` Sass metadata out of the color-token union.

The playground's [Theme Studio](../../playground/src/app/components/shared/theme-studio/README.md) opens from the toolbar on every page. It edits the curated
shared token contract, previews both modes across pages and overlays, and exports a complete named-base SCSS theme. Runtime appearance remains owned by
`ThemingService`; high contrast and forced colors suspend Studio overrides.

### `BxShortcutService`

Shares shortcut definitions between menu hints and application-owned keyboard handlers. It resolves OS overrides, normalizes modifier aliases, formats platform
symbols, creates accessible key names and matches individual keyboard events.

```ts
import { inject } from '@angular/core';
import { BxShortcutService, ResolvableShortcut } from '@filip.mazev/blocks/core';

private readonly bxShortcutService = inject(BxShortcutService);
protected readonly openShortcut: ResolvableShortcut = ['mod', 'shift', 'k'];

// resolve() returns ['⌘', '⇧', 'K'] on Apple devices or ['Ctrl', 'Shift', 'K'] elsewhere.
// A second platform argument supports previews without changing device detection.
this.bxShortcutService.resolve(this.openShortcut, 'mac');
this.bxShortcutService.toAriaKeyshortcuts(this.openShortcut); // Meta+Shift+K or Control+Shift+K

// Inside an application-owned keyboard handler:
if (this.bxShortcutService.matches(event, this.openShortcut)) {
  event.preventDefault();
  // Invoke the action, or call menuTrigger.open(true).
}
```

`mod` (also `primary`, `cmdorctrl`, `commandorcontrol`) means Command on macOS/iOS and Ctrl elsewhere. Explicit `command`/`cmd`/`meta`, `ctrl`/`control`,
`option`/`alt` and `shift` map to familiar platform labels, including ⌘ ⌃ ⌥ ⇧ on Apple. Explicit Control stays Control on Apple. Letters are uppercase for
display; arrows, Enter, Escape, Tab, Backspace, Delete, Space and plus have defaults too. Unrecognized labels remain display tokens.

`ResolvableShortcut` accepts a string, a readonly token array, or `IOSShortcut` (`OSShortcut` remains a compatible alias). An OS object requires `default` and
accepts optional `mac`, `windows`, `linux`, `ios`, `android` values. iOS/iPadOS falls back to `mac`, then `default`; all other absent overrides use `default`.
Tablet hardware keyboards receive mobile OS mappings. `ShortcutPlatform` includes those five platforms and `default`; unknown platforms and SSR use `default`
with Ctrl for `mod`.

`matches(event, definition, options?)` requires exactly one ordinary key and the exact modifier state. It ignores handled, composing, AltGraph, repeat and
editable-target events by default; `IShortcutMatchOptions` allows `platform`, `allowRepeat` and `allowInEditable` overrides. Matching uses `KeyboardEvent.key`,
case insensitive, with layout-dependent characters. Arrays describe combinations, not sequential gestures; combined strings such as `'Ctrl+K'` remain custom
labels. The service does not register listeners, consume events, manage sequences or resolve shortcut conflicts. Applications own scopes, actions, disabled
guards and cleanup.

The [menu item documentation](../primitives/components/menu-item/README.md) contains the complete mapping table and a runnable component. Try
`/components/menu-item` or `/components/menu` for combinations and sequences opening menus, platform previews and guarded actions.

### Scroll locking

`ScrollLockService.disableScroll(usageId, config)` acquires a lock and `enableScroll(usageId)` releases only that owner's lock. Generate a stable ID with
`uuidv4()` for each owner and release it on close, presentation changes, and destruction. The service compensates for scrollbar removal and supports
touch/overflow options through `IScrollLockConfig`. Concurrent modal and navigation locks do not release one another. Repeated acquisition with the same ID
updates that owner without adding another lock. Touch/overflow requirements follow the remaining owners; the original inline body styles and priorities are
restored only after the final owner releases its lock.

```ts
const scrollLockService = inject(ScrollLockService);
const destroyRef = inject(DestroyRef);
const lockId = uuidv4();

scrollLockService.disableScroll(lockId, { handleTouchInput: false });
destroyRef.onDestroy(() => scrollLockService.enableScroll(lockId));
// Also call scrollLockService.enableScroll(lockId) when the owning overlay closes.
```

Import `DestroyRef` and `inject` from `@angular/core`, and `ScrollLockService`/`uuidv4` from the public core entry point. For a scrollable drawer, leave touch
input available inside its panel and contain overscroll at the scroll wrapper.

### Translation and overlays

`BX_I18N` optionally adapts application translation. Configurable text uses `ResolvableText`; resolve it in `computed()` with `resolveText(text, adapter)` so
adapter version changes update mounted content. Plain strings work without an adapter. Custom integrations can use `isTextWithKey()` and the adapter's
`translate()`.

Use `BxOverlayPositionService`, overlay-origin helpers, and shared theme inheritance when extending an existing overlay. Preserve the owning component's focus
and lifecycle behavior instead of positioning or recoloring its private DOM.

`trackOverlayOrigin()` uses native CSS anchors where supported for ordinary overlays. Top-layer popovers use synchronous measured CDK positioning so nested
scrolling keeps the panel attached to its trigger. The same returned cleanup callback removes listeners and observers for either path; call its `reposition()`
method after application-owned layout changes.

### Scroll boundaries

Use [Primitives InfiniteScrollDirective](../primitives/directives/infinite-scroll/README.md) for guarded end detection and bounded local progressive rendering.
Core also exports `findScrollContainer()`, `measureScrollBoundary()`, `observeScrollBoundary()`, and `IScrollBoundary` for reusable viewport discovery and
disposable observation. Detection owns no fetching, pagination, buttons, or retry state. Forms' [LoadMoreDirective](../forms/directives/load-more/README.md)
shares these helpers and retains remote request orchestration, loading feedback, fallback actions, and explicit retry.

## Appearance and customization

Load global styles once through the established package entry point. Import reusable Sass definitions through the public helpers entry point:

```scss
@use '@filip.mazev/blocks/core/styles/helpers' as *;

.example {
    padding: spacing(4);
    border-radius: radius(md);
    color: var(--bx-text-primary);

    @include respond-up(md) {
        padding: spacing(6);
    }
}
```

Use shared spacing, radius, elevation, motion, z-index, and responsive helpers. See the
[appearance guide](../../playground/src/app/components/screens/appearance/README.md) for palette pairs, semantic colors, translucency, glassiness, and
application-wide rendering configuration.

### Theme-token audit and customization contract

The token audit separates application theme controls from the full CSS implementation inventory. The generated catalog currently contains 743 properties; 90 are
theme controls: 65 semantic colors, nine nonzero spacing steps, six ordinary radii, eight shadows, and two border properties. Component hooks remain available
for targeted overrides; their presence in the inventory does not make them independent theme settings.

| Layer                             | Source of truth                                                 | Intended use                                                                       |
| --------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Theme colors                      | `_theme-engine.scss`, palette maps and explicit theme overrides | Background, foreground, interaction and semantic border colors per light/dark mode |
| Theme geometry and elevation      | `_variables.scss`                                               | Shared spacing, corner radii, shadows, border width and border style               |
| Component overrides               | Owning component README                                         | Optional local exceptions that fall back to shared tokens                          |
| Appearance and optical rendering  | Appearance APIs and Effects guides                              | Translucency, lighting, refraction and pressure feedback                           |
| Runtime and layout infrastructure | Owning runtime or service                                       | Animation coordinates, measurements, stacking, accessibility state and breakpoints |

`THEME_CSS_VARIABLES` and its `ThemeCssVariable` union provide the curated application theme contract. `ICssToken.themeEditable` marks the same set in
`CSS_TOKEN_CATALOG`. Named palettes and primary/accent shade aliases remain advanced color inputs. Zero spacing, square corners and pill/circular radii remain
structural values outside the curated editor set. No existing CSS property or component override was removed.

The audit corrected four obstacles to live theming:

- `spacing()`, `radius()` and `shadow()` previously baked values into component CSS. They now emit CSS-variable references with the configured Sass value as
  fallback. Corresponding utility classes use exactly the same references.
- Ordinary component borders now use `--bx-border-width` (default `1px`) and `--bx-border-style` (default `solid`). Existing semantic border colors still choose
  the contour color. Local divider thickness and explicit line-style inputs take precedence.
- Resting button and generic surface shadows now use `--bx-shadow-control` and `--bx-shadow-surface`; both preserve their previous values. Existing elevation,
  modal and toast shadow names remain intact.
- Catalog discovery now records actual declaring selectors, source paths and separate fallback expressions. A reference or fallback is not a global declaration.
  Source-level inline theme-token edits also update already-open overlays without reacting to every animation-state write.

Focus rings, selected-state outlines, inset pressure, lighting rims, slider optics and semantic emission are deliberately separate from resting borders and
shadows. High-contrast surfaces retain solid borders and suppress shadows; forced-color rules remain authoritative. Shapes that are deliberately square,
circular or inherited keep those contracts. Custom colors must be checked together with their hover, active and foreground partners; changing `primary` alone
does not derive the other roles or regenerate palette shades.

### Applying and exporting overrides

The playground Studio previews and exports the same validated custom-property values. A plain CSS block is valid in `styles.scss`; an additional Sass theme
format is not required. Keep the existing global Blocks import and `bx-theme(...)` setup, then place application overrides after the theme selectors:

```scss
:root {
    --bx-rounded-sm: 0.375rem;
    --bx-rounded-md: 0.75rem;
    --bx-rounded-lg: 1rem;
    --bx-border-width: 1px;
    --bx-border-style: solid;
    --bx-shadow-md: 0 6px 18px rgb(0 0 0 / 14%);
}

:root:not([data-theme='dark']):not(.high-contrast) {
    --bx-bg-surface: #f8f9fc;
    --bx-text-primary: #263044;
}

:root[data-theme='dark']:not(.high-contrast) {
    --bx-bg-surface: #171c28;
    --bx-text-primary: #e7ebf3;
}
```

Scope an override block to a container to customize only that subtree. The nearest declared token wins through normal CSS inheritance; explicit component inputs
and local hooks can override shared defaults. Open overlays inherit their source context. Keep application color overrides out of high-contrast selectors. A
preview should remove its inline overrides when reset or when accessibility mode takes precedence; inline colors otherwise outrank stylesheet themes. Runtime
updates to stylesheet rule contents alone do not notify existing overlay observers; preview changes should use a scope's inline properties or classes.

Shadow values can be a shadow list or `none` when used alone. For tokens composed with semantic emission (notably `shadow-sm` in alerts and `shadow-toast`), use
`0 0 0 0 transparent` to remove resting elevation while retaining a valid composed shadow list. Optical and semantic layers remain separately controlled.

### Sass compatibility

The helper signatures remain source-compatible for CSS declarations. They now return CSS expressions rather than Sass numbers/lists by default. For compile-time
arithmetic or Sass list manipulation, opt into the previous value with `$static: true`, or access the corresponding public Sass map:

```scss
@use '@filip.mazev/blocks/core/styles/helpers' as bx;

.example {
    padding: bx.spacing(4);
    margin-block-end: calc(bx.spacing(4) * 2);
    border-radius: bx.radius(lg);
    box-shadow: bx.shadow(md);
}

$fixed-gap: bx.spacing(4, $static: true) * 2;
```

Unknown spacing/radius/shadow keys now fail compilation with a descriptive error instead of silently omitting a declaration. Breakpoint helpers and `z()` retain
their compile-time behavior. The existing `$spacing`, `$radiuses`, `$shadows` and new `$borders` maps remain configurable before the global Sass entry point is
loaded. The catalog describes the default library configuration, not application-specific Sass map overrides.

The toolbar Studio and `/studio` preview provide coordinated geometry controls, structured shadows, import/export and session undo/redo. They use the curated
theme set with per-mode semantic colors and shared geometry; runtime effect and component properties remain outside the theme document.

## Behavior and accessibility

Use injected shared services and signal derivation for updates under OnPush. Browser measurement and overlay work must wait for rendering and remain safe for
SSR. Clean up locks, observers, listeners, subscriptions, timers, and asynchronous work with their owning view. Respect reduced motion, reduced transparency,
forced colors, native semantics, focus visibility, and accessible naming in custom integrations.

Reduced-motion styling also clears animation and transition delays, so disabling motion never leaves content waiting invisibly. The
[library motion contract](../effects/runtime/README.md#fluid-interaction-across-blocks) describes the shared interaction policy and review routes across Blocks.

## Playground

Open `/utilities` for the cumulative [utilities playground guide](../../playground/src/app/components/screens/utilities/README.md), including viewport and
device detection, independent scroll-lock owners, UUIDs, color-token helpers, and overlay infrastructure. Open `/components` for the component catalog,
`/appearance` for shared preferences, `/components/menu-item` for shortcuts, and `/components/side-nav` or `/modal` for coordinated overlays.
