# Radio

A single choice within a named group.

## Import

```ts
import { Radio } from '@filip.mazev/blocks/forms';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<bx-radio label="Daily" name="frequency" value="daily" [formControl]="frequency" />
<bx-radio label="Weekly" name="frequency" value="weekly" [formControl]="frequency" />
```

## API

The control implements Angular ControlValueAccessor. Use `[formControl]`, `formControlName`, or `[(ngModel)]`; do not bind a separate value input. Shared inputs: `label`, `placeholder`, `tooltip`, `required`, `loading`, `disabled`, `ariaLabel`, `dataTestId`, and `errorMessages`. Disable reactive controls through `control.disable()` to keep form state consistent.

`value` is required and identifies this option. `name` groups the native radio inputs.

## Appearance

Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from `ThemingService`; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.

```ts
import { inject } from '@angular/core';
import { ThemingService } from '@filip.mazev/blocks/core';

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: 'glass', blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: 'solid' });
```

`BxA11yService` controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.

## Behavior and accessibility

Use the same form control and name for mutually exclusive options, distinct values, and visible labels. A fieldset with a legend gives the group an accessible name.

## Playground

Open `/components/radio` for a working example and its current value or action result.
