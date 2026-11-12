# Time wheel

One inertial, accessible time wheel column used by the time picker.

## Import

```ts
import { TimeWheel } from '@filip.mazev/blocks/forms';
```

## Usage

```html
<bx-time-wheel [options]="minuteOptions" label="Minute" type="minute" [(value)]="minute" />
```

## API

Inputs: `options` (`ITimeColumnOption[]`), `value` (string), `label` (`ResolvableText`), `type` (`'hour' | 'minute' | 'second' | 'millisecond' | 'period'`),
`loop` (default `true`), `disabled`, `itemHeight` (default `40`), `visibleItems` (default `5`). Outputs: `valueChange`, `activated`. Public `step(direction)`
moves selection programmatically.

## Appearance and customization

Uses the shared soft spring and recent-velocity projection, edge fading and semantic text tokens. The selected band is a magnifying glass lens over the moving
numbers. A clipped, accessibility-hidden rendering follows the same wheel position and enlarges only the content under the lens; the original listbox remains
the sole interaction and accessibility target. The shared renderer supplies clear refraction without an added color wash or emitted focus light. Customize
magnification through `--bx-wheel-magnification` (default `1.3`), tint through `--bx-wheel-band-background` (default transparent), and opacity through
`--bx-wheel-band-opacity` (default `0`). `--bx-wheel-refraction-depth-scale` defaults to `4`, extending the optical region inward independently of the band
border radius. The renderer bounds this region to half of each band dimension independently. A subtle neutral outline makes the lens visible even over empty
space; `--bx-wheel-band-border` overrides its default primary foreground mixed at 14% opacity. The existing neutral glass rim gives the band depth without an
accent wash. Edge displacement is restrained and lightly smoothed to keep large AM/PM labels legible. Application glassiness, quality and accessibility
preferences govern refraction. Reduced motion removes decorative travel; reduced transparency retains an opaque band with readable enlarged numbers.

## Behavior and accessibility

The viewport is a focusable listbox; options expose `aria-selected` and `aria-disabled`. Pointer drag captures recent velocity, projects a bounded target and
retargets the spring when interrupted. Native wheel/trackpad deltas move the track continuously; increasing input speed carries more release momentum, then the
shared spring decelerates into an enabled option. Pixel, line and page deltas are normalized. Keyboard arrows and paging work identically, and disabled options
are skipped rather than committed. A pause removes release momentum; reversing direction updates intent immediately. Pointer cancellation and Escape during a
drag or wheel gesture restore the current selection without committing. Release projection is bounded to twelve extra rows; a single mouse notch does not
fabricate velocity. Looping keeps its coordinate origin continuous while wrapping and during interruption. Repeated visual copies are hidden from accessibility
APIs.

## Playground

See `/components/time-picker`.
