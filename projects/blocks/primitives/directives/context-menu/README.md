# Context menu

A menu positioned at a context action’s coordinates.

## Import

```ts
import { BxOverlayContextDirective, ContextMenuDirective, Menu, MenuItem } from '@filip.mazev/blocks/primitives';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<div [bxContextMenu]="actions" tabindex="0">Right-click or touch and hold here</div>
<ng-template #actions><bx-menu><bx-menu-item label="Copy" (action)="copy()" /></bx-menu></ng-template>
```

## API

`bxContextMenu` requires a TemplateRef. `open(event: MouseEvent)` positions the menu at the event coordinates.

`bxContextMenuLongPress` defaults to `true`. Set it to `false` on targets where native touch selection or another hold gesture should take precedence. Mouse and keyboard activation remain available.

## Overlay placement

Menus use the normal application overlay layer by default. To let a menu escape a sticky header or another stacking context, provide a top-layer context on a wrapper or directly on the trigger:

```html
<header [bxOverlayContext]="{ useTopLayer: true }">
  <button [bxDropdown]="actions">Actions</button>
  <div [bxContextMenu]="actions">More actions</div>
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

Touch and hold for 500 ms to open the menu. Moving more than 10 CSS pixels, scrolling, adding another finger, releasing early, or cancelling the pointer cancels the pending hold. Normal scrolling and pinch gestures are preserved. The release after a successful hold does not activate the target or a menu action, and a browser-generated context menu does not reopen the menu.

Long press follows touch input on devices with both touch and mouse support. Inputs, text areas, selects, editable content, disabled controls, and existing text selections keep their native touch behavior. Text selection is not disabled by the directive; dedicated non-selectable action targets can use `user-select: none` and `-webkit-touch-callout: none` in their own styles.

Always offer the same actions through a visible button or menu; a hold gesture is not easily discoverable. A focusable trigger also supports Shift + F10 and the Context Menu key. The playground includes a visible Open actions button and keyboard equivalent.

## Playground

Open `/components/context-menu` for a working example and its current value or action result.
