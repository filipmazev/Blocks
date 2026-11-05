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

## Behavior and accessibility

Use injected shared services and signal derivation for updates under OnPush. Browser measurement and overlay work must wait for rendering and remain safe for
SSR. Clean up locks, observers, listeners, subscriptions, timers, and asynchronous work with their owning view. Respect reduced motion, reduced transparency,
forced colors, native semantics, focus visibility, and accessible naming in custom integrations.

## Playground

Open `/utilities` for the cumulative [utilities playground guide](../../playground/src/app/components/screens/utilities/README.md), including viewport and
device detection, independent scroll-lock owners, UUIDs, color-token helpers, and overlay infrastructure. Open `/components` for the component catalog,
`/appearance` for shared preferences, `/components/menu-item` for shortcuts, and `/components/side-nav` or `/modal` for coordinated overlays.
