# Input field

A text, date or numeric input with a floating label and validation feedback.

## Import

```ts
import { InputField } from '@filip.mazev/blocks/forms';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<bx-input-field label="Project name" [formControl]="name" />
```

## API

The control uses Angular 22 native signal control contracts. Use `[formField]`, `[formControl]`, `formControlName`, `[(ngModel)]`, or standalone `[(value)]`. Shared presentation includes labels, hints, tooltips, required/readonly/disabled state, error policies and typed message resolvers. See the [forms guide](../../README.md) for validation, submission, translations and compatibility.

`type`: text, password, email, number, date, time, datetime-local. Numeric controls accept `min`, `max`, and `step`.

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

Use a label and an appropriate input type. Number input emits a number or null when empty. Validators should enforce application constraints, including minimum and maximum values.

Labels stay on one line and truncate with an ellipsis when space is limited, without overlapping the value or trailing actions. A truncated label shows its full text through the Blocks tooltip on hover, keyboard focus within the input, or a long press on the label. Resizing and language changes update truncation automatically. The full label remains the input's accessible name, and required markers remain visible. Suffixes and numeric steppers share a trailing action container aligned to the inline end.

Label ellipsis and measurement reuse the shared [TruncateDirective](../../../primitives/directives/truncate/README.md), including content, font, and viewport updates. Set `[tooltipOnTruncate]="false"` to disable the automatic label tooltip without disabling ellipsis. Its default inherits `FormSettingsService.settings().tooltipOnTruncate`, then true.

## Playground

Open `/components/input-field` for a working example and its current value or action result.

## Extended input API

`autocomplete`, `inputmode`, `spellcheck`, `name`, length and pattern constraints, `ariaLabelledBy`, `ariaDescribedBy` and explicit `id` reach the native element. Supported text types include `tel`, `url` and `search`. `multiline` enables a textarea; `rows`, `autosize`, `minRows`, and `maxRows` configure it. Composition input and autofill maintain floating-label behavior.

Number input preserves parse errors through Angular's `transformedValue`, keeps empty values as null, and supports keyboard-accessible steppers. `decreaseLabel` and `increaseLabel` are translatable. `appearance` (`fill` or `outline`), `floatLabel`, `hideRequiredMarker`, `subscriptSizing`, `hint` and `hintEnd` customize the frame. Prefix/suffix and rich errors can be projected directly into the convenience component.

Prefix/suffix content uses `--bx-field-adornment-padding` and `--bx-field-adornment-gap`, so text such as # and ID remains inset from the field edges. Supporting text uses `--bx-field-support-padding`.
