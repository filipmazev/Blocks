# Utilities playground

A cumulative playground for public Core utilities that previously had only brief infrastructure summaries or no practical guide. Open `/utilities` from **Tools
→ Utilities**. The [Core guide](../../../../../../blocks/core/README.md) remains the entry-point reference.

## Import

```typescript
import {
    BxOverlayPositionService,
    DeviceTypeService,
    getComplementaryToken,
    inheritOverlayTheme,
    invertPaletteToken,
    isOverlayOriginVisible,
    isPaletteToken,
    isThemedColor,
    resolveThemeId,
    resolveTokenToCssVar,
    ScrollLockService,
    trackOverlayOrigin,
    uuidv4,
    WindowDimensionsService
} from '@filip.mazev/blocks/core';
```

The services are provided in root. Inject them in your application; supporting types such as `BreakpointKey`, `IDeviceState`, `IWindowDimensions`,
`IScrollLockConfig`, `Color`, `ThemedColor`, `BxPlacement`, and `OverlayOriginTracker` come from the same public entry point.

## Usage

### Responsive values

```typescript
import type { Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { WindowDimensionsService } from '@filip.mazev/blocks/core';

@Component({
    selector: 'app-responsive-summary',
    template: '<p>{{ width() }} CSS pixels · {{ columns() }} columns</p>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsiveSummary {
    private readonly windowDimensionsService = inject(WindowDimensionsService);

    protected readonly width: Signal<number> = computed(() => this.windowDimensionsService.dimensions().width);
    protected readonly columns: Signal<number> = computed(() => this.windowDimensionsService.resolveResponsiveValue({ md: 2, xl: 3 }, 1));
}
```

### Owner-scoped scroll locking

```typescript
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';

import { ScrollLockService, uuidv4 } from '@filip.mazev/blocks/core';
import { Button } from '@filip.mazev/blocks/forms';

@Component({
    selector: 'app-scroll-lock-example',
    imports: [Button],
    template: `
        <button bx-button type="button" (click)="lock()">Lock page</button>
        <button bx-button type="button" (click)="unlock()">Release my lock</button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollLockExample {
    private readonly scrollLockService = inject(ScrollLockService);
    private readonly lockId: string = uuidv4();

    constructor() {
        inject(DestroyRef).onDestroy(() => this.unlock());
    }

    protected lock(): void {
        this.scrollLockService.disableScroll(this.lockId, { handleTouchInput: false });
    }

    protected unlock(): void {
        this.scrollLockService.enableScroll(this.lockId);
    }
}
```

Keep release actions reachable while the page is locked. Release on close and presentation changes as well as destruction. Repeated acquisition with the same ID
updates that owner's lock. Releasing an unknown ID does nothing, and releasing your ID preserves other owners' locks.

### Color-token mapping

```typescript
resolveTokenToCssVar('primary'); // var(--bx-primary)
resolveTokenToCssVar('orange-500'); // var(--bx-color-orange-500)
getComplementaryToken('text-primary'); // bg-element
getComplementaryToken('orange-500'); // orange-50
invertPaletteToken('blue-100'); // blue-900
isPaletteToken('primary'); // false
isThemedColor({ light: 'primary', dark: 'accent' }); // true
resolveThemeId('carbon-cobalt'); // carbon-cobalt
resolveThemeId('retired-palette'); // undefined
```

## API

### Coverage audit

The Core overview already mentioned viewport/device services and scroll locks, but lacked a cumulative interactive reference. The following groups now share
this page and guide:

| Utilities                                        | Demo                                                                                                       |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| `WindowDimensionsService`, `BREAKPOINTS`         | Live width/height, breakpoint minimums, range queries, responsive columns                                  |
| `DeviceTypeService`, device/OS contracts         | Device category, desktop/mobile OS, platform flags, orientation, explicit refresh                          |
| `ScrollLockService`, `IScrollLockConfig`         | Two independent owners, remaining-owner behavior, visible status, release and navigation cleanup           |
| `uuidv4()`                                       | Regenerate a UUID independently of stable scroll-lock owner IDs                                            |
| Color-token helpers, `resolveThemeId()`          | Choose a semantic/palette token; inspect CSS, complementary/inverted mappings and saved palette validation |
| `BxOverlayPositionService`, origin/theme helpers | Preferred placement, viewport fallback, tracked origin, inherited theme and teardown                       |

Other public utilities retain their established guides:

| Utilities                                                       | Existing coverage                                                                                                                                                                                                                           |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ThemingService`, appearance/palette configuration              | [Appearance](../appearance/README.md), `/appearance`                                                                                                                                                                                        |
| `BxA11yService` and reduced motion                              | [Appearance accessibility preferences](../appearance/README.md#behavior-and-accessibility), `/appearance`                                                                                                                                   |
| `BxShortcutService`, shortcut helpers and contracts             | [Menu item](../../../../../../blocks/primitives/components/menu-item/README.md), `/components/menu-item`                                                                                                                                    |
| `BX_I18N`, `ResolvableText`, `resolveText()`, `isTextWithKey()` | [Core translation integration](../../../../../../blocks/core/README.md#translation-and-overlays) and [Forms](../../../../../../blocks/forms/README.md)                                                                                      |
| Form state/defaults, `BxBaseControl`, `FormSettingsService`     | [Forms](../../../../../../blocks/forms/README.md) and [Truncate](../../../../../../blocks/primitives/directives/truncate/README.md)                                                                                                         |
| Navigation, modal, notification and effects services            | Their [Navigation](../../../../../../blocks/navigation/README.md), [Modal](../../../../../../blocks/modal/README.md), [Toastr](../../../../../../blocks/toastr/README.md), and [Effects](../../../../../../blocks/effects/README.md) guides |

Internal coordination services, implementation classes, and type-only contracts do not receive separate playground pages.

### Viewport dimensions

| Member                                        | Behavior                                                                                                    |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `dimensions(): IWindowDimensions`             | Readonly signal with `width` and `height` in CSS pixels; resize updates are coalesced to animation frames   |
| `breakpoints` / `BREAKPOINTS`                 | Shared minimums: xs 360, sm 640, md 768, lg 1024, xl 1280, 2xl 1536, 3xl 1920, 4xl 2560                     |
| `currentBreakpoint()`                         | Largest matching breakpoint; widths below 360 still report `xs`; undefined during SSR                       |
| `currentBreakpointValue()`                    | Minimum for the reported breakpoint, not the actual viewport width; undefined during SSR                    |
| `isBelow(key)` / `isAtLeast(key)`             | Strict upper bound / inclusive lower bound                                                                  |
| `isBetween(min, max)`                         | Inclusive minimum and exclusive maximum                                                                     |
| `resolveResponsiveValue<T>(values, fallback)` | Value at the highest configured matching breakpoint, otherwise the fallback; always the fallback during SSR |
| `isBrowser`                                   | Whether browser viewport observation is available                                                           |

Convenience signals cover `isXsMobile` (below sm), `isSmMobile` (sm–md), `isMobile` (below md), `isTablet` (md–lg), `isSmallLaptop` (lg–xl), `isDesktop`
(xl–2xl), `isLargeDesktop` (2xl–3xl), and `isUltraWide` (3xl and above). Upper bounds are exclusive. `isTabletAndBelow`, `isSmallLaptopAndBelow`,
`isDesktopAndBelow`, and `isLargeDesktopAndBelow` are below lg, xl, 2xl, and 3xl respectively.

SSR dimensions are zero. Simple range predicates compare against zero there; do not interpret them as actual device detection. Responsive values describe
viewport width, even when the component occupies a smaller container. Browser zoom can change CSS-pixel dimensions.

### Device categories

`getDeviceState(): IDeviceState` returns a snapshot of mobile/tablet/desktop and OS detection based on browser identity, including iPadOS desktop identity with
touch hardware. It exposes `isDesktop`, `isMobile`, `isTablet`, `desktopOS`, `mobileOS`, `isAppleDevice`, `isAndroidDevice`, `isWindowsDesktop`,
`isLinuxOrUnixDesktop`, and `isUnknownMobileDevice`.

`isLandscapeOrientation()` and `isPortraitOrientation()` are available on both the service and the returned state. They read the latest tracked **screen**
orientation. They are ordinary methods, not Angular signals. This page refreshes its snapshot on Screen Orientation change events and offers an explicit refresh
action. Without that browser API, the service initializes orientation from a media query; live screen rotation is not tracked there.

Viewport resizing does not change device categories. Device detection is heuristic and browser identity can be overridden. Use capabilities for interaction
decisions and viewport signals for layout. During SSR, identity is unavailable: the current fallback reports desktop/unknown OS and portrait orientation.

### Scroll-lock configuration

`isScrollDisabled()` is a readonly signal indicating that any owner holds a lock. Observe it instead of writing to the backing signal.
`disableScroll(id, config)` requires an owner ID and configuration; `enableScroll(id)` releases that owner. The legacy optional second argument to
`enableScroll` is accepted but does not change final cleanup.

| `IScrollLockConfig` member  | Purpose                                                                                                                                                           |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `handleTouchInput`          | `false` preserves touch gestures; `true` enables touchmove prevention. Omission still applies `touch-action: none`, without adding a touchmove listener by itself |
| `allowTouchInputOn`         | Elements whose descendants may receive touch input; absent/empty lists permit targets through the touchmove handler                                               |
| `mobileOnlyTouchPrevention` | Limits the touchmove handler to detected mobile devices; tablets use their separate category                                                                      |
| `handleExtremeOverflow`     | Adds global wheel/scroll prevention listeners; leave unset for ordinary pages and panels                                                                          |
| `animationDuration`         | Milliseconds before installing prevention listeners, plus the service's 10 ms coordination delay; omitted means zero before that delay                            |

Any active owner requesting touch/extreme prevention keeps it enabled. Touch allow-list details follow the most recently inserted owner whose `handleTouchInput`
is not false; reacquiring an existing ID updates its options without changing its insertion order. The maximum active animation duration controls listener
installation. Original inline body overflow, right padding, touch action and priorities are restored after the final lock releases.

The demo uses `{ handleTouchInput: false }` for both owners so touch users can reach every action. It does not enable extreme overflow handling. Lock
acquisition and release are no-ops during SSR.

### Identifiers and color helpers

`uuidv4(): string` uses `crypto.getRandomValues()` to generate a version-4 UUID. It requires that runtime API. Generate once per owning instance; avoid calling
it from templates or computed values that may regenerate an owner ID. Coordinate server/client IDs explicitly when stable hydration identity is required.

| Helper                         | Behavior                                                                                                            |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `resolveTokenToCssVar(token)`  | Maps a typed semantic or palette color to a CSS `var(...)` reference; it does not resolve an RGB value              |
| `isPaletteToken(token)`        | Detects the numeric shade suffix of a typed `Color`; not a validator for arbitrary untrusted strings                |
| `getComplementaryToken(token)` | Looks up semantic pairs (falling back to `surface`) or chooses palette shade 50 for shades above 400, otherwise 900 |
| `invertPaletteToken(token)`    | Mirrors a palette shade, including 50→900 and 1000→50; leaves semantic tokens or unsupported results unchanged      |
| `isThemedColor(value)`         | Narrows non-null objects with a `light` member; does not validate individual token values or choose a theme         |
| `resolveThemeId(value)`        | Accepts current palette IDs; returns undefined for absent, unknown or retired IDs                                   |

These helpers do not guarantee contrast. `Color`, `ThemeColorToken`, `SemanticColorToken`, and `ThemedColor` describe typed consumer configuration. Prefer
semantic tokens for values that should follow theme and palette changes.

### Overlay extension points

| Utility                                              | Contract                                                                                                                                              |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `getElementStrategy(element, placement, offset = 8)` | Connected CDK strategy with alternative sides, viewport push and an 8 CSS-pixel viewport margin                                                       |
| `getSubmenuStrategy(element, side, offset = 4)`      | Physical left/right preference with opposite-side fallback and fixed dimensions                                                                       |
| `getCoordinateStrategy(x, y)`                        | Client-coordinate anchor, initially below with a 2 CSS-pixel offset, then fallback positions                                                          |
| `trackOverlayOrigin(overlay, origin, options?)`      | Tracks an attached connected overlay with native anchoring where available, otherwise measured fallback; returns callable cleanup with `reposition()` |
| `isOverlayOriginVisible(origin)`                     | Checks viewport intersection and clipping ancestors; disconnected or zero-size origins return false                                                   |
| `inheritOverlayTheme(source, pane)`                  | Copies inherited theme/appearance context and observes relevant scope attributes; returns observer cleanup                                            |

`IOverlayOriginOptions` can disable native anchoring with `nativeAnchoring: false`, run `onPosition` after positioning, or run `onOriginHidden` when the anchor
leaves view. The owner decides whether to dismiss. Attach content before tracking so size measurement is meaningful. Call both returned cleanup functions before
disposing the overlay; the owner also cleans up its subscriptions and portal.

The demo is an informational preview with focus kept on its trigger. It directly uses an element strategy, visibility guard, origin tracker and inherited theme.
Coordinate and submenu strategies are documented extension points; ready-made
[Context menu](../../../../../../blocks/primitives/directives/context-menu/README.md) and [Menu](../../../../../../blocks/primitives/components/menu/README.md)
demonstrate their intended interactions. Prefer the public overlay components and directives when their existing focus, dismissal and accessibility behavior
meets your needs.

## Appearance and customization

The page uses Blocks containers, buttons, selects, documentation tabs, semantic CSS variables and shared Sass spacing/radius/responsive helpers. It follows
application appearance without changing preferences. The color-token swatch is decorative; text exposes every result independently of color.

The grid starts with one column and uses the shared xl breakpoint for two columns. The scroll-lock panel spans both columns so its release actions stay
together. The overlay preview is constrained to the viewport and scrolls if text enlargement requires more space. Supporting demo controls use public Blocks
APIs.

## Behavior and accessibility

- Viewport and token changes derive from signals under OnPush. Device orientation explicitly bridges browser events to a signal and tears down its subscription.
- Each scroll-lock owner has a stable ID. Release actions and page destruction release only these two IDs, preserving locks held by navigation or other
  overlays.
- Lock status is announced politely. Rapid viewport resizing is displayed without a live announcement on every frame. UUID regeneration has a named live output.
- The position preview supports pointer and keyboard activation. Escape, blur, outside pointer input, hidden origins and page destruction close it. Focus
  remains on the trigger; there are no interactive controls inside the preview.
- The page adds no decorative animation and respects the shared components' reduced-motion, forced-colors and reduced-transparency behavior. Labels and results
  remain visible as text. Device and OS values are informational and do not restrict access to controls.
- Demo text is English. Library translation integration remains in the linked Core and Forms guides; this page introduces no translation adapter.

## Playground

Open `/utilities`. On a first visit, expand **Tools** in the side navigation; later visits respect your saved section states. Suggested checks:

1. Resize across md and xl, then compare viewport flags with the device category. Check breakpoint equality at the inclusive minimum.
2. Acquire both locks, release the first, then release the second. Acquire again and navigate away to observe cleanup.
3. Generate another UUID and verify that the active lock owners still release correctly.
4. Choose semantic and palette tokens, then change appearance through the playground toolbar to see CSS variables follow the theme.
5. Open the position preview near a viewport boundary, press Escape, reopen, move focus away, and scroll its origin out of view.
6. Try a narrow viewport, enlarged text, keyboard-only navigation, and the shared accessibility preferences.

The **Documentation** tab renders this cumulative README. **Code Examples** bundles the current TypeScript, HTML and SCSS sources during
`npm run tools:build-docs`; do not edit generated snippets. The TypeScript example imports its typed option data and owner type from the colocated `constants`
and `types` folders.
