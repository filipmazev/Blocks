# Menu

A shared surface for related menu actions.

## Import

```ts
import { Menu, MenuItem } from '@filip.mazev/blocks/primitives';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<bx-menu>
  <bx-menu-item label="Duplicate" icon="copy" (action)="duplicate()" />
  <bx-menu-item label="Archive" icon="archive" (action)="archive()" />
</bx-menu>
```

## API

`Menu` projects its children and provides the menu surface. Use `MenuItem` for consistent action styling. Place it in `bxDropdown` for positioned dismissal and keyboard behavior.

## Appearance

Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from `ThemingService`; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.

Dropdown and context menus follow the configured glass tint and radius, including after their opening fade. Nearby sources and active menu rows illuminate the outer border; rows share the containing material.

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

Keep menu labels action-oriented. The container shares one glass backing with its items, avoiding stacked blur. Avoid nested interactive controls inside one item.

## Playground

Open `/components/menu` for a working example and its current value or action result.
