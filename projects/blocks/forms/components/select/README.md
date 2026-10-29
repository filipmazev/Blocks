# Select

A single-value selection control with a positioned options panel and optional search.

## Import

```ts
import { Select } from '@filip.mazev/blocks/forms';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<bx-select label="Destination" [options]="options" [isSearchable]="true" [formControl]="destination" />
```

## API

The control implements Angular ControlValueAccessor. Use `[formControl]`, `formControlName`, or `[(ngModel)]`; do not bind a separate value input. Shared inputs: `label`, `placeholder`, `tooltip`, `required`, `loading`, `disabled`, `ariaLabel`, `dataTestId`, and `errorMessages`. Disable reactive controls through `control.disable()` to keep form state consistent.

`options` is required: `{ label, value, disabled? }[]`. `isSearchable`, `externalFiltering`, `searchPlaceholder`, `emptyMessage` configure search. `search` emits debounced external filter terms. `toggleOpen()` and `close()` control the panel.

## Appearance

The trigger inherits the application appearance from `ThemingService`. The options panel uses an opaque themed backing without container blur or live lighting. Colors, spacing, radius, elevation, focus states and row interactions still follow Blocks tokens.

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

Use stable option values. For external filtering, update the options in response to `search`; the application owns request cancellation and loading state. Disabled options cannot be selected.

## Overlay stacking

The options panel follows `BX_OVERLAY_CONTEXT` and automatically enters the browser top layer inside native dialogs and popovers. For custom application chrome that also needs the top layer, provide the context around the select:

```html
<header [bxOverlayContext]="{ useTopLayer: true }">
  <bx-select label="Destination" [options]="options" />
</header>
```

Import `BxOverlayContextDirective` where the context is declared. Select panels outside these contexts stay in the regular CDK overlay layer so sticky application chrome can remain above them.

Where supported, native CSS anchors keep the panel attached to its trigger during document and nested scrolling. Other browsers use the CDK positioning fallback.

## Playground

Open `/components/select` for a working example and its current value or action result.
