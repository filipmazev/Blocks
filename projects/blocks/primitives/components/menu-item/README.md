# Menu item

A menu action with optional icons, a shortcut hint, and destructive intent.

## Import

```ts
import { MenuItem } from '@filip.mazev/blocks/primitives';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<bx-menu-item label="Delete" icon="trash-2" [danger]="true" (action)="remove()" />
```

## API

`label`, `icon`, `endIcon`, `shortcut`, `disabled`, and `danger`. `action` emits the mouse event for enabled items.

## Appearance

Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from `ThemingService`; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.

```ts
import { inject } from '@angular/core';
import { ThemingService } from '@filip.mazev/blocks/core';

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: 'glass', blur: 10, tint: 0.4 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: 'solid' });
```

`BxA11yService` controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.

## Behavior and accessibility

Use `action` for activation and `disabled` for unavailable commands. Shortcut hints describe a binding; registering the actual shortcut remains the application’s responsibility.

## Playground

Open `/components/menu-item` for a working example and its current value or action result.
