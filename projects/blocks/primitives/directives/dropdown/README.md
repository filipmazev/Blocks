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

Where supported, native CSS anchors keep the menu attached to its trigger during document and nested scrolling. Other browsers use the CDK positioning fallback.

## Appearance

The standard `bx-menu` container is opaque and uses Blocks colors, spacing, radius and elevation without container blur or live lighting. Trigger and row effects retain their application appearance settings.

`BxA11yService` controls reduced motion; enabling it skips the opening and closing fade.

## Behavior and accessibility

Use a real button trigger. The fade interaction supports trigger arrow keys, menu arrows, Home, End and Escape; focus returns on dismissal. Reduced motion skips the fade. Content keeps its full dimensions and the overlay retains a solid backing throughout its lifetime.

## Playground

Open `/components/dropdown` for a working example and its current value or action result.
