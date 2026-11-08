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

`variant`: text, filled, tonal, icon, fab, mini-fab, extended-fab. `color`: primary, accent, success, danger, info, warn, grayscale. `outlined`, `elevated`,
`disabled`, and `interactive` control presentation and availability.

`glassiness` is an explicit per-button opt-in: omitted buttons keep their existing material. Set `glassiness="auto"` for supported browsers, or `"on"` to test
other engines. Application-wide Off, baseline quality, opaque intent fills and accessibility still take precedence. Automatic rendering uses one SVG backdrop
pass; Enhanced adds the full reflection/bevel treatment. Text and icons keep their semantic theme colors; active refraction maintains a minimum tint and blur
even at the clearest translucency setting.

```html
<button bx-button variant="icon" glassiness="auto" aria-label="Bookmark">
    <bx-icon name="bookmark" />
</button>
```

Use the active palette's second tone for supporting actions:

```html
<button bx-button variant="tonal" color="accent">Explore</button>
```

## Appearance

Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from `ThemingService`; adjusting
translucency updates existing components and overlays. Icon, tonal and outlined glass buttons follow the full translucency range without a minimum
button-specific tint. Content-only parts share their containing surface instead of adding another backdrop filter.

Interactive button variants illuminate their border and nearby glass on hover, press and keyboard focus. Text buttons do not emit light, but keep their
underline hover and focus outline. The same light remains active for `aria-pressed="true"`, `aria-selected="true"`, a current `aria-current` value, or an
expanded popup trigger (`aria-expanded="true"` with `aria-haspopup`). Plain expansion controls, such as a rail collapse action, do not acquire selected styling
solely from `aria-expanded`. If an application used expansion as a toggle selection, use `aria-pressed` for that toggle instead. Primary and grayscale buttons
use the primary palette role; accent buttons use the second tone; success, danger, info and warning buttons use their semantic color. Disabled and
noninteractive buttons do not emit. Pointer focus alone does not keep an action illuminated after the pointer leaves; focus stays on the native control and
keyboard focus remains visible. Touch does not latch hover illumination. No additional effects directive or lighting configuration is needed.

Selected actions also retain an inset contour independently of lighting or transparency. Selected text buttons underline their label. These cues track the same
ARIA selection states and do not change the hit target or label dimensions.

Filled buttons retain their semantic background and paired foreground color across translucency settings and reduced transparency, including hover and press.
Filled actions use an opaque palette fill and a foreground matched to each interaction state. Surface lighting remains active; tonal and outlined actions retain
translucency. Text buttons have no background, border, shadow or backdrop blur; hover underlines the label and keyboard focus retains a visible outline. Tonal
and outlined buttons keep their glass backing.

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

Press feedback keeps button labels and icons undistorted. Translucent glass buttons deepen their existing inset reflection and gather a soft theme-colored
sheen; solid filled and floating actions use their semantic pressed color. The shared pressure spring returns the material to rest, including quick taps. The
hit area, text geometry, layout, and overlay origin stay fixed. Release, cancellation, blur, and removal clear pressure. Text buttons and surface opt-outs
retain native press feedback.

| CSS variable               | Default / behavior                                                                      |
| -------------------------- | --------------------------------------------------------------------------------------- |
| `--bx-button-press-shadow` | Semantic inset shadow for translucent buttons; `none` for solid filled/floating actions |
| `--bx-glass-press-opacity` | `0.6` for translucent buttons; `0` for solid filled/floating actions                    |

The former `--bx-button-press-compression` and `--bx-button-press-offset` content effects have been removed deliberately; remove those overrides when migrating.
Customize the supported material variables instead. Reduced motion keeps static color/inset/underline feedback. Reduced transparency retains the opaque pressed
appearance. Forced colors preserve a visible pressed outline; disabled and noninteractive controls do not illuminate.

## Behavior and accessibility

Use the native `button[bx-button]` selector for actions and `a[bx-button]` with a real `href` for navigation. Give icon-only actions an accessible label.
Disabled actions do not emit an action through a click listener.

`surfaceEffects` defaults to `true`. Set `[surfaceEffects]="false"` for dense collections such as the icon catalog to retain Blocks button styling, theme
updates, focus, loading and disabled behavior without mounting per-button runtime glass lighting or deformation. It can be changed while mounted. An explicitly
applied `bxSurface` directive continues to own its surface independently.

### Motion and material response

Surface-backed buttons reuse the existing pressure spring on their material, with fixed text and icon geometry. Repeated presses remain responsive, and reduced
motion retains static press feedback. Inspect `/components/button`.

Filled/floating intent emits more strongly than outlined, tonal, icon, or grayscale intent. Danger and warning receive modest semantic emphasis. This local
calibration uses the existing surface engine and leaves environmental reception independent; original fills, colors, and public appearance inputs remain intact.

## Playground

Open `/components/button` for filled, tonal, text, icon, outlined, floating, disabled, and runtime-effects-disabled examples with observable action results.
Press and release with mouse, touch, Enter, or Space, then move the pointer away while leaving focus on the button to inspect its resting state. The global
Appearance controls also exercise theme, translucency, and reduced-motion changes.

## Asynchronous actions

`loading` enables a spinner, exposes `aria-busy`, and disables activation independently from the `disabled` input. When loading ends, the original disabled
state is retained. The spinner appears before the text and replaces a projected Blocks icon at its original size, including under page zoom or surface
transforms. An icon-only button retains its accessible name and dimensions.

```html
<button bx-button type="button" variant="filled" [loading]="saving()" (click)="save()"><bx-icon name="save" size="20" />Save changes</button>
```

For another icon implementation, import `ButtonIconDirective` and mark its element `bxButtonIcon`. Plain text buttons get an icon-sized spinner only during
loading. Spinner colors inherit the button foreground; `BxA11yService` removes rotation in reduced-motion mode.

Open `/components/button-loading` for fake asynchronous actions with and without icons. Application code owns the promise and loading state.
