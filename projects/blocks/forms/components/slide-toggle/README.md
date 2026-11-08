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

The control uses Angular 22 native signal control contracts. Use `[formField]`, `[formControl]`, `formControlName`, `[(ngModel)]`, or standalone `[(checked)]`.
Shared presentation includes labels, hints, tooltips, required/readonly/disabled state, error policies and typed message resolvers. See the
[forms guide](../../README.md) for validation, submission, translations and compatibility.

## Appearance

Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from `ThemingService`; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.

Hints and errors align with the control's inline start by default. `--bx-field-support-padding` overrides that support-text padding. For a full-width settings
row with the label at the start and the switch at the end, use `labelPosition="before"` with `--bx-toggle-inline-size: 100%` and
`--bx-toggle-justify-content: space-between`. Their defaults are `auto` and `start`. Labels can wrap while the switch retains its size; logical layout also
follows RTL direction.

Toggles keep emitting the theme color while switched on, including values set through Angular forms. Hovering the track or its label highlights the surface and
emits color; disabled controls do neither.

```ts
import { inject } from '@angular/core';
import { ThemingService } from '@filip.mazev/blocks/core';

private readonly themingService = inject(ThemingService);

// Application-wide, including open overlays.
this.themingService.setAppearance({ translucency: 0.5 });
// Opaque presentation retains the same layout and component API.
this.themingService.setAppearance({ reducedTransparency: true });
```

`BxA11yService` controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.

## Behavior and accessibility

Use for immediate settings, with a label describing the enabled state. The native checkbox retains keyboard behavior and checked state.

### Motion and material response

The thumb retargets the shared elastic spring when the displayed checked state changes, including programmatic and deferred form updates. Velocity stretch and
the engine's pressure response are bounded inside a stationary switch track. RTL uses the logical starting edge. The checked surface emits more strongly than
the neutral track without increasing reception. Initial render snaps; live reduced motion snaps to the current state and removes deformation. Disabled and
readonly behavior remains owned by the form control. Inspect `/components/slide-toggle` and `/appearance`.

## Playground

Open `/components/slide-toggle` for a working example and its current value or action result.

## Switch semantics

The internal checkbox exposes switch semantics. `labelPosition` supports before/after placement, and projected label content is supported. `checkedChange` is
available for standalone interaction. Readonly preserves the value while disabled state blocks interaction.
