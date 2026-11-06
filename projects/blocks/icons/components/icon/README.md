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

`size` accepts positive finite numbers or numeric strings in CSS pixels, including `[size]="64"`, `size="18"`, and the existing presets. The default is `'24'`;
invalid dimensions fall back to 24. `strokeWidth` accepts positive finite numbers, including fractional values; omission or invalid values use 1.5. Icon
requests completing after an input change or destruction are ignored.

Generated `LUCIDE_CATEGORIES`, `LUCIDE_ICON_CATEGORIES`, and `LucideCategoryId` are available from the same public entry point. Categories come from a pinned
official upstream snapshot and include multiple assignments, resolved inheritance, aliases, and an uncategorized fallback. See the
[generator guide](../../../../../tools/icons/README.md) for synchronization. The mapping contains only icons generated into Blocks.

## Appearance and customization

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
itself. The catalog progressively renders icon previews in bounded batches.

## Playground

Open `/components/icon` for a working example, or `/icons` for categories, persistent catalog preferences, and a live customization inspector.
