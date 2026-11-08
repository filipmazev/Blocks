# Modal backdrop

The background scrim that separates an open modal from page content.

## Import

```ts
import { ModalBackdrop } from '@filip.mazev/blocks/modal';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open modal backdrop</button>
```

## API

The reusable backdrop exposes `isAnimated` (false), `isOpen` (false), `label: ResolvableText` ("Close dialog"), and `tabIndex` (0), and emits
`click: MouseEvent`. Mobile side navigation uses the same component with its translated close label and tab index -1 because its panel supplies a close action.

`ModalService.open(ContentComponent, config)` accepts data, header, style, close behavior and guards. Style `layout` selects center, left, right or
bottom-sheet; `animate`, `hasBackdrop`, and `showCloseButton` customize presentation. Observe `afterClosed()` for the close result.

```ts
this.modalService.open(DialogContent, {
    header: { text: 'Modal backdrop' },
    style: { layout: 'center', hasBackdrop: true }
});
```

## Appearance

`--bx-modal-backdrop-position` defaults to `fixed`, `--bx-modal-backdrop-z-index` to the shared modal layer, and `--bx-modal-backdrop-background` to the shared
dim scrim. Owners can set these variables to contain or stack the backdrop without reaching into its DOM. Reduced-transparency and forced-color fallbacks take
precedence over the ordinary background override.

ModalService uses this same backdrop for centered, side, and bottom-sheet dialogs. In that composition the backdrop supplies blur and dismissal, while the root
surface paints dimming outside its own border to avoid a gray tint. Nested dialogs use independent filled backdrops with their own blur and dismissal; older
backdrop/material layers stay intact. Nested material becomes at least 90% opaque at the first nested level and fully opaque at deeper levels by default.
Standalone backdrops and mobile navigation retain their existing filled-scrim presentation.

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

When animated, the backdrop fades its blur and fill over 175ms on opening and closing. Starting styles establish the entrance before first paint; changing
direction continues from the current opacity. With `isAnimated` false, presentation changes immediately.

Open through `ModalService` so focus management, close guards, backdrop behavior, lifecycle and cleanup remain coordinated. `Modal` content receives its typed
data and `ModalRef`; call `modal.close(mode, result)` to return a result. Do not instantiate service-owned view wrappers as general page containers.

## Playground

Open `/components/modal-backdrop` for a working example and its current value or action result.
