# Bottom sheet

A bottom-aligned modal surface suitable for compact actions and mobile layouts.

## Import

```ts
import { ModalBottomSheet } from '@filip.mazev/blocks/modal';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open bottom sheet</button>
```

## API

`ModalService.open(ContentComponent, config)` accepts data, header, style, close behavior and guards. Style `layout` selects center, left, right or bottom-sheet; `animate`, `hasBackdrop`, and `showCloseButton` customize presentation. Observe `afterClosed()` for the close result.

```ts
this.modals.open(DialogContent, {
  header: { text: "Bottom sheet" },
  style: { layout: "bottom-sheet", hasBackdrop: true }
});
```

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

Open through `ModalService` so focus management, close guards, backdrop behavior, lifecycle and cleanup remain coordinated. `Modal` content receives its typed data and `ModalRef`; call `modal.close(mode, result)` to return a result. Do not instantiate service-owned view wrappers as general page containers.

## Playground

Open `/components/modal-bottom-sheet` for a working example and its current value or action result.
