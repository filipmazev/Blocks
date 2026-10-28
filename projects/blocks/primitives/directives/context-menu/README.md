# Context menu

A menu positioned at a context action’s coordinates.

## Import

```ts
import { ContextMenuDirective, Menu, MenuItem } from '@filip.mazev/blocks/primitives';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<div [bxContextMenu]="actions">Right-click here</div>
<ng-template #actions><bx-menu><bx-menu-item label="Copy" (action)="copy()" /></bx-menu></ng-template>
```

## API

`bxContextMenu` requires a TemplateRef. `open(event: MouseEvent)` positions the menu at the event coordinates.

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

Always offer the same actions through a visible button or menu. Pointer context menus alone are not accessible on touch devices. The playground includes a visible Open actions button and keyboard equivalent.

## Playground

Open `/components/context-menu` for a working example and its current value or action result.
