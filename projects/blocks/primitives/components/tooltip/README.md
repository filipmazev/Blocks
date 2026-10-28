# Tooltip

A short descriptive surface for supplementary help.

## Import

```ts
import { Tooltip } from '@filip.mazev/blocks/primitives';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<bx-tooltip text="Changes are saved automatically." />
```

## API

`text` is required and accepts plain text or a translation key object. For automatic positioning and trigger handling, use `TooltipDirective` instead.

## Appearance

Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from `ThemingService`; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.

Tooltips retain their neutral, opaque background while nearby emissive colors light the border. The arrow shares the body's background and border lighting so the bubble remains one continuous shape. Positioned tooltips receive light from their trigger's context, including inside dialogs, while remaining transparent to pointer events. The overview includes a persistent tooltip preview beside the light orb.

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

Do not put essential instructions only in a tooltip. Direct use requires the application to supply positioning, visibility and a relationship to its trigger. Prefer the directive for interactive pages.

## Playground

Open `/components/tooltip` for a working example and its current value or action result.
