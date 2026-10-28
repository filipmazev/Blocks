# Breadcrumbs

A route-aware trail derived from Blocks navigation metadata.

## Import

```ts
import { Breadcrumbs } from '@filip.mazev/blocks/navigation';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<bx-breadcrumbs [minimumBreadcrumbs]="1" divider="chevron-right" />
```

## API

`minimumBreadcrumbs` defaults to 2; values below 1 are clamped. `divider` accepts an icon name. Route labels come from `withNav` metadata and `NavigationService`.

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

Register metadata with `withNav` and provide navigation in application configuration. Breadcrumbs navigate using the router and update after navigation. This demo lives under Components so the trail has a real parent route.

## Playground

Open `/components/breadcrumbs` for a working example and its current value or action result.
