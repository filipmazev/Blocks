# Tooltip trigger

Connects a help surface to a trigger using the overlay positioning system.

## Import

```ts
import { TooltipDirective } from '@filip.mazev/blocks/primitives';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<button bx-button bxTooltip="Saves this project" placement="top">Save</button>
```

## API

`bxTooltip`: required text or translation key. `placement`: top, bottom, left, right, and supported aligned placements. `show()` and `hide()` expose explicit lifecycle control.

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

Keep trigger text meaningful without its tooltip. Use short, non-interactive text; put interactive help in a menu or dialog.

## Playground

Open `/components/tooltip-directive` for a working example and its current value or action result.
