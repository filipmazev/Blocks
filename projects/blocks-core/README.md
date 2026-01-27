# @filip.mazev/blocks-core

## Blocks - Core Library

**Blocks Core** is the foundational library for the Blocks ecosystem. It provides the essential infrastructure for building responsive, theme-aware Angular applications. It bridges the gap between TypeScript logic and SCSS styling, offering a unified system for breakpoints, device detection, scroll management and theming.

## Styles & Theming

Blocks Core utilizes a robust SCSS architecture to manage design tokens and responsiveness.

### 1. Theme Provider

The library uses a CSS Variable system generated via SCSS maps. To initialize the core theme, use the `core-theme` mixin in your global styles.

```scss
@use '@filip.mazev/blocks-core/src/lib/styles/index' as blocks;

:root {
  // Initialize default light theme
  @include blocks.core-theme(blocks.$default-light-theme-config);
}

// Example: Switch to dark theme based on a class
body.dark-theme {
  @include blocks.core-theme(blocks.$default-dark-theme-config);
}
```

This generates CSS variables with the `--fm-` prefix (e.g.,`--fm-primary`, `--fm-bg-surface`, `--fm-text-main`).

### 2. Responsive Mixins

The library provides mixins that strictly align with the WindowDimensionsService breakpoints in TypeScript.

Available Breakpoints:

* `xs`: 360px
* `sm`: 640px
* `md`: 768px
* `lg`: 1024px
* `xl`: 1280px
* `2xl`: 1536px
* `3xl`: 1920px
* `4xl`: 2560px

Usage:

```scss
@use '@filip.mazev/blocks-core/src/lib/styles/mixins' as *;

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
```

## Core Services

### `WindowDimensionsService`

Bridges the gap between CSS media queries and TypeScript logic. It provides reactive access to window size and standard breakpoint thresholds.

```typescript
export class MyComponent {
  constructor(private windowService: WindowDimensionsService) {
    // Reactive stream
    this.windowService.getWindowDimensions$().subscribe(dims => {
      if (dims.width < dims.threshold_sm) {
        console.log('Mobile View');
      }
    });
  }
}
```

### `ThemingService`

Handles the detection of system preferences (Dark/Light mode) and manages the application-level theme state.

* `getSystemTheme$()`: Observes the OS/Browser prefers-color-scheme.
* `getApplicationTheme$()`: Observes the manually set application theme.
* `setApplicationTheme(theme: DeviceTheme)`: Manually overrides the current theme ('light' | 'dark').

### `DeviceTypeService`

Provides detailed information about the user's device, OS, and orientation. Useful for logic that depends on specific hardware capabilities (e.g., touch handling on Windows tablets vs Android).

`getDeviceState()` returns:

* isMobile / isTablet / isDesktop
* desktopOS (Windows, Mac, Linux, Unix)
* mobileOS (iOS, Android)
* isAppleDevice (checks both iOS and MacOS)
* isLandscapeOrientation / isPortraitOrientation

### `ScrollLockService`

A utility to prevent background scrolling when overlays (like Modals) are active. This service handles complex edge cases, including:

* **Scrollbar Compensation**: Adds padding to the body to prevent layout shifts when the scrollbar disappears.

* **Mobile Touch**: Prevents "scroll chaining" on mobile devices.

* **Extreme Overflow**: Optionally disables wheel and touch events entirely for strict locking.

```typescript
// Lock scroll
this.scrollLockService.disableScroll({
  handleTouchInput: true,
  handleExtremeOverflow: false
});

// Unlock
this.scrollLockService.enableScroll();
```

### `UiActionsService`

Common UI utility methods.

### `TextFormattingService`

Helper methods for string manipulation, such as:

* `generateNameCopy`: Generates unique names for duplicated items (e.g., "Item (Copy)", "Item (Copy 2)").
* `formattedDateString`: Converts Date objects or strings into a standardized locale date string.

## Installation

To use Blocks Core, install the package and ensure the SCSS partials are accessible to your build pipeline.

_(Installation instructions depend on your specific build/publish setup)._
