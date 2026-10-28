# Button

An action control with Blocks intent colors, familiar variants and visible focus.

## Import

```ts
import { Button } from '@filip.mazev/blocks/forms';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<button bx-button variant="filled" (click)="save()">Save changes</button>
```

## API

`variant`: text, filled, tonal, icon, fab, mini-fab, extended-fab. `color`: primary, success, danger, info, warn, grayscale. `outlined`, `elevated`, `disabled`, and `interactive` control presentation and availability.

## Appearance

Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from `ThemingService`; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.

Interactive button variants illuminate their border and nearby glass on hover, press and keyboard focus. Text buttons do not emit light, but keep their underline hover and focus outline. The same light remains active for `aria-pressed="true"`, `aria-selected="true"`, `aria-expanded="true"`, or a current `aria-current` value. Primary and grayscale buttons use the application's accent; success, danger, info and warning buttons use their semantic color. Disabled and noninteractive buttons do not emit. No additional effects directive or lighting configuration is needed.

Filled buttons retain their semantic background and paired foreground color across glassiness settings and reduced transparency, including hover and press. Fills keep a minimum tint for readable text while retaining translucency and surface lighting. Text buttons have no background, border, shadow or backdrop blur; hover underlines the label and keyboard focus retains a visible outline. Tonal and outlined buttons keep their glass backing.

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

Use the native `button[bx-button]` selector for actions and `a[bx-button]` with a real `href` for navigation. Give icon-only actions an accessible label. Disabled actions do not emit an action through a click listener.

## Playground

Open `/components/button` for a working example and its current value or action result.
