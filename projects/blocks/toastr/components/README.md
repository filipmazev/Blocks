# Toast core

The toast lifecycle host with progress, dismissal and content composition.

## Import

```ts
import { ToastCore, ToastrService } from '@filip.mazev/blocks/toastr';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<button bx-button (click)="notify()">Show notification</button>
```

## API

Use `ToastrService.queueToast(ContentComponent, config)` for custom content, or queueInfo, queueSuccess, queueWarning and queueDanger for common messages. Config controls position, durationInMs, progress and close actions.

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

Create notifications through the service; the wrapper owns timers, pause/resume and cleanup. Keep important information available outside transient messages. The playground’s toast page can show all four semantic intents.

## Playground

Open `/components/toast-core` for a working example and its current value or action result.
