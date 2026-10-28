# Search input

A searchable text control with a clear action.

## Import

```ts
import { SearchInput } from '@filip.mazev/blocks/forms';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<bx-search-input label="Find a component" [formControl]="query" (search)="filter($event)" />
```

## API

The control implements Angular ControlValueAccessor. Use `[formControl]`, `formControlName`, or `[(ngModel)]`; do not bind a separate value input. Shared inputs: `label`, `placeholder`, `tooltip`, `required`, `loading`, `disabled`, `ariaLabel`, `dataTestId`, and `errorMessages`. Disable reactive controls through `control.disable()` to keep form state consistent.

`search` emits the current string on input and clear. Public methods `clear()` and `focus()` support integration.

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

The output is immediate; debounce expensive network searches in the application. Keep a visible or accessible label instead of relying only on placeholder text.

## Playground

Open `/components/search-input` for a working example and its current value or action result.
