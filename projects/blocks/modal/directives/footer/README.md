# Modal footer

Projects custom footer content into the active Blocks modal layout.

## Import

```ts
import { ModalFooterDirective } from '@filip.mazev/blocks/modal';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<div *appModalFooter>Custom footer content</div>
```

## API

A standalone structural directive. It captures a TemplateRef and registers it with the owning ModalCore; it has no public inputs.

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

Use only inside content opened by ModalService. The template moves to the active modal view. Keep action buttons keyboard accessible and use ModalRef to close with a result. Outside a modal the directive emits a development warning.

## Playground

Open `/components/modal-footer` for a working example and its current value or action result.
