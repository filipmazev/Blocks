# Centered modal

A focused dialog centered in the available viewport.

## Import

```ts
import { ModalCentered } from '@filip.mazev/blocks/modal';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open centered modal</button>
```

## API

`ModalService.open(ContentComponent, config)` accepts data, header, style, close behavior and guards. Style `layout` selects center, left, right or
bottom-sheet; `animate`, `hasBackdrop`, and `showCloseButton` customize presentation. Observe `afterClosed()` for the close result.

```ts
this.modalService.open(DialogContent, {
    header: { text: 'Centered modal' },
    style: { layout: 'center', hasBackdrop: true }
});
```

## Appearance

Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from `ThemingService`; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.

```ts
import { inject } from '@angular/core';
import { ThemingService } from '@filip.mazev/blocks/core';

private readonly themingService = inject(ThemingService);

// Application-wide, including open overlays.
this.themingService.setAppearance({ translucency: 0.5 });
// Opaque presentation retains the same layout and component API.
this.themingService.setAppearance({ reducedTransparency: true });
```

`BxA11yService` controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.

## Behavior and accessibility

Open through `ModalService` so focus management, close guards, backdrop behavior, lifecycle and cleanup remain coordinated. `Modal` content receives its typed
data and `ModalRef`; call `modal.close(mode, result)` to return a result. Do not instantiate service-owned view wrappers as general page containers.

The centered entrance and exit retain the centered zoom and content fade. Transform and opacity animate on their owning layers rather than propagating an
inherited custom property through every filtered descendant. Starting styles apply before first paint; the dimming cutout follows the frame. The content,
dimming cutout and blur backdrop fade out together over 175ms. Teardown waits for the rendered exit transitions to finish, including an interrupted entrance,
rather than counting from the close request. Live reduced motion removes the transitions.

## Playground

Open `/components/modal-centered` for a working example and its current value or action result.
