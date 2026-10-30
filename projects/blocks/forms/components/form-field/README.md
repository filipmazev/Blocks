# Form field

A shared label, help text, validation and loading frame for controls.

## Import

```ts
import { FormField } from '@filip.mazev/blocks/forms';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<bx-form-field label="Project name" forId="project" [required]="true" [error]="error">
  <input id="project" (input)="update($event)" />
</bx-form-field>
```

## API

`label`, `tooltip`, `error`: text or a translation key object. `forId`: the native input ID. `required`, `loading`: booleans. Projects the control and an optional `bx-error`.

## Appearance

Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from `ThemingService`; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.

`--bx-field-padding-bottom` overrides the field wrapper’s bottom padding (default: `0`). Set it on a group of controls when additional row spacing is needed.

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

Set `forId` to the actual input ID. Required decoration does not add validation to your control; apply the corresponding validator and native required attribute. Associate custom error text with `aria-describedby` when projecting your own control.

The information button reveals short help on mouse hover or keyboard focus, and toggles it on touch tap. Tap elsewhere, scroll, or press Escape to dismiss it. Its description also remains available to screen readers when the visual help is hidden. Keep essential field instructions visible rather than relying on the help button.

## Playground

Open `/components/form-field` for a working example and its current value or action result.

## Composable support and control registration

`hint`, `hintEnd`, projected `bx-hint`, `bxPrefix`, and `bxSuffix` add support and adornments. `subscriptSizing` selects fixed or dynamic reserved space. Dynamic sizing collapses an empty supporting-text region and its gap, allowing controls to align with adjacent buttons and checkboxes. `hideRequiredMarker` hides decoration without changing validation. `tooltipLabel` provides translated accessible help-button text.

A registered control supplies its state through `BX_FORM_FIELD_CONTROL` and `IFormFieldControl`, or the `control` input. The frame discovers projected registrations, resolves error visibility, associates its supporting-text region and native control, and announces errors politely. The `bxInput` directive supplies this registration for native controls.

Built-in convenience controls forward projected rich errors and hints into their internal frame. See the [forms guide](../../README.md) for global error policies, messages and form-system compatibility.
