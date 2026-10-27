# Modal banner

The shared modal heading, semantic icon and close action.

## Import

```ts
import { ModalBanner } from '@filip.mazev/blocks/modal';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<bx-modal-banner [header]="{ text: 'Project settings' }" [showCloseButton]="true" (close)="handleClose($event)" />
```

## API

Required inputs: `header` (header config or undefined), `showCloseButton` (boolean). `close` emits a modal close mode or undefined. Header supports text and an optional icon configuration.

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

Prefer configuring `header` on ModalService for a normal dialog. Direct use is available for custom composition; ensure the surrounding dialog has an accessible name and handle close output.

## Playground

Open `/components/modal-banner` for a working example and its current value or action result.
