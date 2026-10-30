# Slide toggle

A boolean preference that takes effect immediately.

## Import

```ts
import { SlideToggle } from '@filip.mazev/blocks/forms';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<bx-slide-toggle label="Enable notifications" [formControl]="notifications" />
```

## API

The control uses Angular 22 native signal control contracts. Use `[formField]`, `[formControl]`, `formControlName`, `[(ngModel)]`, or standalone `[(checked)]`. Shared presentation includes labels, hints, tooltips, required/readonly/disabled state, error policies and typed message resolvers. See the [forms guide](../../README.md) for validation, submission, translations and compatibility.

## Appearance

Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from `ThemingService`; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.

Toggles keep emitting the theme color while switched on, including values set through Angular forms. Hovering the track or its label highlights the surface and emits color; disabled controls do neither.

```ts
import { inject } from '@angular/core';
import { ThemingService } from '@filip.mazev/blocks/core';

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ glassiness: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ reducedTransparency: true });
```

`BxA11yService` controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.

## Behavior and accessibility

Use for immediate settings, with a label describing the enabled state. The native checkbox retains keyboard behavior and checked state.

## Playground

Open `/components/slide-toggle` for a working example and its current value or action result.

## Switch semantics

The internal checkbox exposes switch semantics. `labelPosition` supports before/after placement, and projected label content is supported. `checkedChange` is available for standalone interaction. Readonly preserves the value while disabled state blocks interaction.
