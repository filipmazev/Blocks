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

`variant`: text, filled, tonal, icon, fab, mini-fab, extended-fab. `color`: primary, accent, success, danger, info, warn, grayscale. `outlined`, `elevated`, `disabled`, and `interactive` control presentation and availability.

Use the active palette's second tone for supporting actions:

```html
<button bx-button variant="tonal" color="accent">Explore</button>
```

## Appearance

Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from `ThemingService`; adjusting glassiness updates existing components and overlays. Icon, tonal and outlined glass buttons follow the full glassiness range without a minimum button-specific tint. Content-only parts share their containing surface instead of adding another backdrop filter.

Interactive button variants illuminate their border and nearby glass on hover, press and keyboard focus. Text buttons do not emit light, but keep their underline hover and focus outline. The same light remains active for `aria-pressed="true"`, `aria-selected="true"`, `aria-expanded="true"`, or a current `aria-current` value. Primary and grayscale buttons use the primary palette role; accent buttons use the second tone; success, danger, info and warning buttons use their semantic color. Disabled and noninteractive buttons do not emit. No additional effects directive or lighting configuration is needed.

Filled buttons retain their semantic background and paired foreground color across glassiness settings and reduced transparency, including hover and press. Filled actions use an opaque palette fill and a foreground matched to each interaction state. Surface lighting remains active; tonal and outlined actions retain translucency. Text buttons have no background, border, shadow or backdrop blur; hover underlines the label and keyboard focus retains a visible outline. Tonal and outlined buttons keep their glass backing.

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

`surfaceEffects` defaults to `true`. Set `[surfaceEffects]="false"` for dense collections such as the icon catalog to retain Blocks button styling, theme updates, focus, loading and disabled behavior without mounting per-button runtime glass lighting or deformation. It can be changed while mounted. An explicitly applied `bxSurface` directive continues to own its surface independently.

## Playground

Open `/components/button` for a working example and its current value or action result.

## Asynchronous actions

`loading` enables a spinner, exposes `aria-busy`, and disables activation independently from the `disabled` input. When loading ends, the original disabled state is retained. The spinner appears before the text and replaces a projected Blocks icon at its original size, including under page zoom or surface transforms. An icon-only button retains its accessible name and dimensions.

```html
<button bx-button type="button" variant="filled" [loading]="saving()" (click)="save()">
  <bx-icon name="save" size="20" />Save changes
</button>
```

For another icon implementation, import `ButtonIconDirective` and mark its element `bxButtonIcon`. Plain text buttons get an icon-sized spinner only during loading. Spinner colors inherit the button foreground; `BxA11yService` removes rotation in reduced-motion mode.

Open `/components/button-loading` for fake asynchronous actions with and without icons. Application code owns the promise and loading state.
