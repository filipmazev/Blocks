# @filip.mazev/blocks-core

## Blocks - Core Library

**Blocks Core** is the foundational library for the Blocks ecosystem. It provides the essential infrastructure for building responsive, theme-aware Angular applications. It bridges the gap between TypeScript logic and SCSS styling, offering a unified system for breakpoints, device detection, scroll management and theming.

## Installation

```bash
npm i @filip.mazev/blocks-core@latest
```

Or with the global blocks `ng` command which adds all blocks packages and sets up your styles.scss

```bash
ng add @filip.mazev/blocks@latest
```

## Styles & Theming

Blocks Core utilizes a robust SCSS architecture to manage design tokens and responsiveness.

### 1. Palette provider

The library uses a CSS Variable system generated via SCSS maps. To initialize the core theme, use the `bx-theme` mixin in your global styles.

```scss
@use "@filip.mazev/blocks" as *;

:root {
  // Initialize default light theme
  @include bx-theme($violet-teal-light-theme);
}

// Example: Switch to dark theme based on a class
body.dark-theme {
  @include bx-theme($violet-teal-dark-theme);
}
```

This generates paired palette roles with the `--bx-` prefix: `--bx-primary`, `--bx-accent`, their `on-*` foregrounds, subtle containers, text and borders. `--bx-bg-canvas` stays neutral in light and dark appearances. See [Palettes](../appearance/README.md#palettes) for the available pairs, CLI IDs and usage.

### 2. Responsive Mixins

The library provides mixins that strictly align with the WindowDimensionsService breakpoints in TypeScript.

Available Breakpoints:

- `xs`: 360px
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px
- `3xl`: 1920px
- `4xl`: 2560px

Usage:

```scss
@use "@filip.mazev/blocks-core/src/lib/styles/mixins" as *;

.my-element {
  width: 100%;

  // Applies when width >= 768px
  @include respond-up(md) {
    width: 50%;
  }

  // Applies when width <= 640px
  @include respond-down(sm) {
    display: none;
  }
}
```

### 3. Design Tokens & Utilities

Blocks Core includes a strictly defined design system for spacing, border-radiuses, shadows, and z-indexes. This ensures visual consistency across all components and applications.

The library exposes these tokens in three different ways so you can use them wherever they fit best: **SCSS Functions, HTML Utility Classes**, and **CSS Variables**.

#### Using SCSS Functions (Recommended for Component Styles)

When writing custom component styles, use the provided SCSS functions to access the design tokens. This replaces hardcoded "magic numbers" (like `16px` or `1rem`) with standardized scale values.

```scss
@use "@filip.mazev/blocks-core/src/lib/styles/index" as blocks;

.my-card-element {
    // Spacing
    padding: blocks.spacing(4) blocks.spacing(6); 
    margin-bottom: blocks.spacing(2);

    // Styling
    border-radius: blocks.radius(lg);
    box-shadow: blocks.shadow(md);

    // Z-Index
    z-index: blocks.z(dropdown);
}
```

#### Using Utility Classes (Tailwind-Style)

For rapid UI development directly in your templates, Blocks Core automatically generates utility classes prefixed with `.bx-`.

```html
<div class="bx-p-4 bx-my-2 bx-px-6">...</div>

<div class="bx-rounded-md bx-rounded-t-lg">...</div>

<div class="bx-shadow-modal bx-z-fixed">...</div>
```

#### Using CSS Variables

If you need to access tokens inline or outside of SCSS compilation, they are exposed globally on the `:root` element.

```scss
.dynamic-element {
    padding: var(--bx-space-4);
    border-radius: var(--bx-rounded-pill);
    box-shadow: var(--bx-shadow-toast);
    z-index: var(--bx-z-modal);
}
```

#### Available Scales Reference

- Spacing Scale: `0`, `1` (0.25rem), `2` (0.5rem), `3` (0.75rem), `4` (1rem), `5` (1.25rem), `6` (1.5rem), `8` (2rem), `10` (2.5rem), `12` (3rem)
- Radius Scale: `none`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `pill`
- Shadow Scale: `sm`, `md`, `lg`, `xl`, `modal`, `toast`
- Z-Index Scale: `base` (1), `dropdown` (100), `sticky` (200), `fixed` (300), `modal` (400), `popover` (500), `tooltip` (600), `toast` (9999)

## Core Services

### `WindowDimensionsService`

Bridges the gap between CSS media queries and TypeScript logic. It provides reactive access to window size and standard breakpoint thresholds.

```typescript
export class MyComponent {
  protected readonly windowDimensionsService = inject(WindowDimensionsService);

  protected windowDimensions = this.windowDimensionsService.dimensions;
  protected breakpoints = this.windowDimensionsService.breakpoints;

  constructor() {
    effect(() => {
      const width = this.windowDimensions().width;
      const isOnSmallScreen = width < this.breakpoints.sm;
      // handle logic for small screen for example
    });
  }
}
```

### `ThemingService`

Handles the detection of system preferences (Dark/Light mode) and manages the application-level theme state.

- `getSystemTheme$()`: Observes the OS/Browser prefers-color-scheme.
- `getApplicationTheme$()`: Observes the manually set application theme.
- `setApplicationTheme(theme: DeviceTheme)`: Manually overrides the current theme ('light' | 'dark').

### `DeviceTypeService`

Provides detailed information about the user's device, OS, and orientation. Useful for logic that depends on specific hardware capabilities (e.g., touch handling on Windows tablets vs Android).

`getDeviceState()` returns:

- isMobile / isTablet / isDesktop
- desktopOS (Windows, Mac, Linux, Unix)
- mobileOS (iOS, Android)
- isAppleDevice (checks both iOS and MacOS)
- isLandscapeOrientation / isPortraitOrientation

### `BxShortcutService`

Shares shortcut definitions between menu hints and application-owned keyboard handlers. It resolves OS overrides, normalizes modifier aliases, formats platform symbols, creates accessible key names and matches individual keyboard events.

```ts
import { inject } from '@angular/core';
import { BxShortcutService, ResolvableShortcut } from '@filip.mazev/blocks/core';

private readonly shortcuts = inject(BxShortcutService);
protected readonly openShortcut: ResolvableShortcut = ['mod', 'shift', 'k'];

// resolve() returns ['⌘', '⇧', 'K'] on Apple devices or ['Ctrl', 'Shift', 'K'] elsewhere.
// A second platform argument supports previews without changing device detection.
this.shortcuts.resolve(this.openShortcut, 'mac');
this.shortcuts.toAriaKeyshortcuts(this.openShortcut); // Meta+Shift+K or Control+Shift+K

// Inside an application-owned keyboard handler:
if (this.shortcuts.matches(event, this.openShortcut)) {
  event.preventDefault();
  // Invoke the action, or call menuTrigger.open(true).
}
```

`mod` (also `primary`, `cmdorctrl`, `commandorcontrol`) means Command on macOS/iOS and Ctrl elsewhere. Explicit `command`/`cmd`/`meta`, `ctrl`/`control`, `option`/`alt` and `shift` map to familiar platform labels, including ⌘ ⌃ ⌥ ⇧ on Apple. Explicit Control stays Control on Apple. Letters are uppercase for display; arrows, Enter, Escape, Tab, Backspace, Delete, Space and plus have defaults too. Unrecognized labels remain display tokens.

`ResolvableShortcut` accepts a string, a readonly token array, or `IOSShortcut` (`OSShortcut` remains a compatible alias). An OS object requires `default` and accepts optional `mac`, `windows`, `linux`, `ios`, `android` values. iOS/iPadOS falls back to `mac`, then `default`; all other absent overrides use `default`. Tablet hardware keyboards receive mobile OS mappings. `ShortcutPlatform` includes those five platforms and `default`; unknown platforms and SSR use `default` with Ctrl for `mod`.

`matches(event, definition, options?)` requires exactly one ordinary key and the exact modifier state. It ignores handled, composing, AltGraph, repeat and editable-target events by default; `IShortcutMatchOptions` allows `platform`, `allowRepeat` and `allowInEditable` overrides. Matching uses `KeyboardEvent.key`, case insensitive, with layout-dependent characters. Arrays describe combinations, not sequential gestures; combined strings such as `'Ctrl+K'` remain custom labels. The service does not register listeners, consume events, manage sequences or resolve shortcut conflicts. Applications own scopes, actions, disabled guards and cleanup.

The [menu item documentation](../../projects/blocks/primitives/components/menu-item/README.md) contains the complete mapping table and a runnable component. Try `/components/menu-item` or `/components/menu` for combinations and sequences opening menus, platform previews and guarded actions.

### `ScrollLockService`

A utility to prevent background scrolling when overlays (like Modals) are active. This service handles complex edge cases, including:

- **Scrollbar Compensation**: Adds padding to the body to prevent layout shifts when the scrollbar disappears.

- **Mobile Touch**: Prevents "scroll chaining" on mobile devices.

- **Extreme Overflow**: Optionally disables wheel and touch events entirely for strict locking.

To use the scroll locking service within a component, in order to prevent enabling the scroll from one instance when another is disabling it, a `scrollLockId` must be generated and passed to the `disableScroll` and `enableScroll` methods, the provided `uuidv4` method from this library is recommended to be used for this.

```typescript
private scrollLockId: string = uuidv4();
```

```typescript
// Lock scroll
this.scrollLockService.disableScroll(this.scrollLockId, {
  handleTouchInput: true,
  handleExtremeOverflow: false,
});

// Unlock
this.scrollLockService.enableScroll(this.scrollLockId);
```
