# Error message

A projected custom error message inside a form-field.

## Import

```ts
import { BxError, FormField } from '@filip.mazev/blocks/forms';
```

Add the standalone component to your component's `imports`.

## Usage

```html
<bx-form-field label="Reference" forId="reference">
  <input id="reference" aria-describedby="reference-error" />
  <bx-error id="reference-error">Enter at least three characters.</bx-error>
</bx-form-field>
```

## API

`BxError` is a content projection component with selector `bx-error`. It has no inputs; the form field projects it into its error region.

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

Render only when validation should be shown. Tie the input to the error ID with `aria-describedby` and update `aria-invalid` as needed. This component does not run validation.

## Playground

Open `/components/error` for a working example and its current value or action result.
