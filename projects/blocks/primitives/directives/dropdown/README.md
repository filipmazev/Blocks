# Dropdown

A positioned menu that fades in and out without resizing its contents.

## Import

```ts
import { DropdownDirective, Menu, MenuItem } from '@filip.mazev/blocks/primitives';
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

Use a real button trigger. The fade interaction supports trigger arrow keys, menu arrows, Home, End and Escape; focus returns on dismissal. Reduced motion skips the fade. Content keeps its full dimensions and the overlay retains a solid backing throughout its lifetime.

## Playground

Open `/components/dropdown` for a working example and its current value or action result.
