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

`label`, `icon`, `endIcon`, `shortcut`, `disabled`, `danger`, and `wrapLabel`. Set `wrapLabel` to `true` when a menu item should wrap long content instead of truncating it. `action` emits the mouse event for enabled items. Clipped labels and projected text use the shared `TruncateDirective` and receive an automatic tooltip. `[tooltipOnTruncate]="false"` disables that tooltip while retaining ellipsis, allowing application-owned feedback. `wrapLabel` disables truncation itself.

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

Use `action` for activation and `disabled` for unavailable commands. Shortcut hints describe a binding; registering the actual shortcut remains the application’s responsibility.

## Playground

Open `/components/menu-item` for a working example and its current value or action result.
