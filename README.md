# Blocks

**Blocks** is a comprehensive, modular UI ecosystem for Angular. It bridges the gap between TypeScript logic and SCSS styling to create highly responsive, theme-aware, and interactive applications.

The library consists of a foundational Core package that handles the "physics" of the application (dimensions, scrolling, theming) and a suite of feature-rich Components (like Modals) built on top of that foundation.

## Packages

|Package|Description|Link|
|---|---|---|
|@filip.mazev/blocks-core|The infrastructure layer. Handles responsive breakpoints, deep theming, scroll locking, and device detection.|<https://www.npmjs.com/package/@filip.mazev/blocks-core>|
|@filip.mazev/modal|A service-driven modal system supporting center/side layouts, mobile swipe gestures, and dynamic content.|<https://www.npmjs.com/package/@filip.mazev/modal>|

## Key Philosophy

### 1. Unified Responsiveness

Blocks treats responsiveness as a shared contract between TypeScript and CSS.

* **In TypeScript**: The WindowDimensionsService provides reactive streams for window size.

* **In SCSS: Mixins** like @include respond-down(sm) map perfectly to the TypeScript thresholds, ensuring your logic and layout never desync.

### 2. Deep Theming

Theming is not an afterthought; it is built into the core.

* Uses a CSS Variable system generated via SCSS maps.
* Supports distinct palettes for "Canvas", "Surface", and "Element" layers.
* Easily switch between light, dark, or high-contrast brand themes at runtime.

### 3. Mobile-First Interaction

Components are designed with mobile fidelity in mind.

* Scroll Locking: The ScrollLockService handles complex edge cases (iOS touch chaining, scrollbar layout shifts) automatically when overlays are open.
* Gestures: Modals transform into bottom-sheets on mobile with native-feeling swipe-to-close physics.

## Requirements

**Angular**: ^21.1.1

**TypeScript**: Compatible with the Angular version provided.
