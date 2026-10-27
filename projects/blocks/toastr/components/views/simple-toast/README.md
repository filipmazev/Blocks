# Simple toast

A notification with a semantic icon, optional title and message.

## Import

```ts
import { SimpleToast, ToastrService } from '@filip.mazev/blocks/toastr';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<button bx-button (click)="notify()">Show success</button>
```

## API

Use `toastr.queueSuccess({ title: "Saved", message: "Your settings are up to date." })`. Equivalent methods queueInfo, queueWarning and queueDanger set the semantic intent. Request fields include position, durationInMs, animate, showCloseButton and showProgessBar (existing API spelling).

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

Write a concise message with a clear outcome. Use a modal or an inline message when acknowledgement or a long interaction is required. Simple toast content shares the parent toast glass surface.

## Playground

Open `/components/simple-toast` for a working example and its current value or action result.
