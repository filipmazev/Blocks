# Icon

An asynchronously loaded SVG icon using semantic foreground and background tokens.

## Import

```ts
import { Icon } from '@filip.mazev/blocks/icons';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<bx-icon name="sparkles" size="32" color="text-primary" [decorative]="false" ariaLabel="Highlights" />
```

## API

`name` is required. `size`, `strokeWidth`, `color`, `bgColor`, `decorative`, `ariaLabel` configure rendering. Color accepts a semantic token or themed color;
`bgColor="auto"` derives a complementary token.

`size` accepts the string values `'16'`, `'20'`, `'24'`, `'28'`, `'32'`, `'36'`, `'40'`, `'44'` and `'48'`, measured in pixels. The default is `'24'`. For a
small icon between the first two sizes, choose `'16'` or `'20'`; `'18'` is not supported by `IconSize`.

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

Leave decorative icons hidden from assistive technology; meaningful standalone icons need `decorative=false` and `ariaLabel`. Label icon buttons on the button
itself. The catalog paginates icon previews to bound SVG work.

## Playground

Open `/components/icon` for a working example and its current value or action result.
