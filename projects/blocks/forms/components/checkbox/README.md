# Checkbox

A boolean choice integrated with Angular forms.

## Import

```ts
import { Checkbox } from '@filip.mazev/blocks/forms';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<bx-checkbox label="Receive updates" [formControl]="updates" />
```

## API

The control uses Angular 22 native signal control contracts. Use `[formField]`, `[formControl]`, `formControlName`, `[(ngModel)]`, or standalone `[(checked)]`. Shared presentation includes labels, hints, tooltips, required/readonly/disabled state, error policies and typed message resolvers. See the [forms guide](../../README.md) for validation, submission, translations and compatibility.

## Appearance

Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from `ThemingService`; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.

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

Use a visible label. Space toggles the native input; focus and checked state remain visible in glass and solid modes. The control supports validation and touched state.

## Playground

Open `/components/checkbox` for a working example and its current value or action result.

## Selection configuration

`indeterminate` is a boolean model with `indeterminateChange`. `clickAction` supports `check-indeterminate` (default), `check`, and `noop`. `labelPosition` is `before` or `after`. Use `checkedChange` or the Angular field value to observe changes. Required-true validation is reflected in required decoration and accessible state.

The checkbox face is shared with multiselect through the public [CheckboxIndicator](../checkbox-indicator/README.md) component. `--bx-checkbox-size` changes its dimensions (default `1.125rem`).
