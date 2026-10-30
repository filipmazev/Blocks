# Tooltip trigger

Connects a help surface to a trigger using the overlay positioning system.

## Import

```ts
import { TooltipDirective } from '@filip.mazev/blocks/primitives';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<button bx-button bxTooltip="Saves this project" placement="top">Save</button>
```

## API

`bxTooltip`: required text or translation key. `placement`: top, bottom, left, right, and supported aligned placements. `show()` and `hide()` expose explicit lifecycle control.

Changing the text updates an open tooltip. Empty text dismisses it; restoring text while hovered or keyboard-focused reveals it again. This supports labels that only need a tooltip while truncated.

Use the shared [TruncateDirective](../truncate/README.md) for ellipsis and reactive truncation detection instead of duplicating element-size observers. Pass `resolvedText | bxTruncatedText: overflow.truncated()` to `bxTooltip` using the public `TruncatedTextPipe`; the owner supplies an appropriate focus target and visible focus styling.

`bxTooltipHover` defaults to `true`. Set it to `false` to keep the keyboard description while nested content supplies its own pointer tooltip, such as an overflow tag within a select trigger.

`bxTooltipTouch` defaults to `'none'`: normal touch taps activate the control without showing its tooltip. Set it to `'longpress'` for an optional touch-and-hold hint, or `'tap'` on a dedicated information button that has no other action.

```html
<button type="button" bxTooltip="Appearance settings apply to all components" bxTooltipTouch="tap" aria-label="More information">ⓘ</button>
<button type="button" bxTooltip="Optional extra context" bxTooltipTouch="longpress">Hold for a hint</button>
```

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

Keep trigger text meaningful without its tooltip. Use short, non-interactive text; put interactive help in a menu or dialog.

Tooltips open on mouse hover and keyboard focus. Touch focus and compatibility mouse events do not show ordinary tooltips. Screen-reader descriptions remain available while the visual tooltip is hidden, and existing `aria-describedby` references are preserved. Supply an accessible label independently for icon-only controls.

Optional long press opens after 500 ms. Moving more than 10 CSS pixels, scrolling, another finger, cancellation, or releasing early cancels it. Releasing after a successful hold does not click the control; the hint dismisses after 1.5 seconds, or on another press or scrolling. Editable controls and existing text selections keep their native behavior. For dedicated non-selectable hold targets, apply `user-select: none` and `-webkit-touch-callout: none` in the target's styles.

Long-press hints yield to a `bxContextMenu` directive on the trigger or an ancestor. Dedicated tap help remains available. Avoid assigning multiple hold gestures to one target.

Tap mode is intended for dedicated help buttons, including the built-in form-field information buttons. Tap again, tap elsewhere, scroll, or press Escape to dismiss the help. Use a separate popover or dialog for interactive or essential explanations rather than hiding them in a tooltip.

## Playground

Open `/components/tooltip-directive` for a working example and its current value or action result.
