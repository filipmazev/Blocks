# Dropdown

A positioned menu that fades in and out without resizing its contents.

## Import

```ts
import { BxOverlayContextDirective, DropdownDirective, Menu, MenuItem } from '@filip.mazev/blocks/primitives';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<button bx-button [bxDropdown]="actions" bxTransition="fade">Actions</button>
<ng-template #actions>
  <bx-menu><bx-menu-item label="Save" (action)="save()" /></bx-menu>
</ng-template>
```

## API

`bxDropdown`: required TemplateRef. `placement`: overlay placement. `bxTransition`: fade (default) or none; emerge remains a compatibility alias for fade. Export as `bxDropdown`; call `open()`, `close()`, or `toggle()`. Read `isOpen()` and `state()` for lifecycle.

## Overlay placement

Menus use the normal application overlay layer by default. To let a menu escape a sticky header or another stacking context, provide a top-layer context on a wrapper or directly on the trigger:

```html
<header [bxOverlayContext]="{ useTopLayer: true }">
  <button [bxDropdown]="actions">Actions</button>
</header>
```

Import `BxOverlayContextDirective` alongside the menu directive. The context applies only to nested menu triggers; menus elsewhere keep their normal stacking order. Angular components can also provide `BX_OVERLAY_CONTEXT` with `{ useTopLayer: true }` to scope the behavior to their view.

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

Use a real button trigger. The fade interaction supports trigger arrow keys, menu arrows, Home, End and Escape; focus returns on dismissal. Reduced motion skips the fade. Content keeps its full dimensions and the overlay retains a solid backing throughout its lifetime.

## Playground

Open `/components/dropdown` for a working example and its current value or action result.
