# Slider

`SliderDirective` gives a native range input a glass thumb, a recessed track, and a value fill. Native keyboard, touch, disabled, minimum, maximum, step, and
Angular forms behavior are preserved.

```ts
import { SliderDirective } from '@filip.mazev/blocks/forms';
```

```html
<label for="volume">Volume</label> <input id="volume" type="range" bxSlider min="0" max="100" [formControl]="volume" />
```

Import the directive into your component and include the existing Blocks core stylesheet. The directive also supports `ngModel` or native `[value]` and
`(input)` bindings. It reads programmatic value changes after Angular renders, so resetting a form updates the fill too.

The slider inherits semantic theme colors. Solid material, reduced transparency, increased contrast, and unsupported backdrop filtering use an opaque thumb.
WebKit/Blink and Firefox have separate native thumb and track rules. Provide an associated label or `aria-label` for every slider.

`--bx-slider-thumb-size` sets the native and decorative thumb diameter together, defaulting to `spacing(6)` from the shared tokens. The decorative thumb's
position follows the same travel distance as the native thumb.

The held thumb uses the same clear local refraction as TimeWheel over its magnified rail, without an added tinted backing. The native thumb remains the only hit
target; the lens adds no input listeners or value prediction. `glassiness` optionally overrides its default `auto` policy. Global Off, baseline and
accessibility preferences still win. The resting thumb stays opaque.

The held glass thumb magnifies and blurs the rail beneath it. Its native border and shadow are removed while refraction is active and restored at rest. Set
`--bx-slider-magnification` to adjust the enlargement from its default `1.5`, and `--bx-slider-lens-blur` to adjust the lens and backdrop blur from `1.5px`. It
uses the current rail colors and value, including RTL, without reading screen pixels. Reduced transparency, increased contrast and unsupported backdrop
filtering use an opaque thumb; forced colors retains the native thumb.

The held thumb scales past its resting silhouette. That overflow is clipped on the slider's own shell, so a slider inside a scrolling panel never grows a scroll
container; `--bx-slider-overflow-clip-margin` extends the painted region beyond the shell from its default `0.75rem`, which also keeps the focus ring and any
enlarged decoration visible.

The control permanently reserves vertical room for its enlarged thumb, including custom `--bx-slider-thumb-size` values, so pressing does not change layout.
`--bx-slider-vertical-padding` defaults to shared spacing 2 on each side, in addition to the larger of spacing 10 or 1.25 times the thumb diameter. RangeSlider
uses the same height and rail center. The held thumb has no border width, avoiding an inner rounded-overflow clip that flattened its upper and lower edges in
Chrome at enlarged zoom. The resting border returns after the pressure spring settles.

## Labels and ticks

Native `[formField]` binding is supported alongside existing Angular form directives. `discrete` adds a formatted visible value; `displayWith(value)` controls
that label. `showTickMarks` adds bounded native tick metadata. For a pair of values use [RangeSlider](../../components/range-slider/README.md).

## Behavior and accessibility

Native values, thumb centers, and fill endpoints update immediately. Holding enlarges the existing magnifying lens, with capped velocity stretch; release
springs back to a fully opaque resting thumb; motion never delays the native value. The lens and fill share the existing engine's received lighting. Pointer
cancellation, blur, hidden documents, disabled/readonly changes, and destruction release gesture state. Live reduced motion clears deformation and stops its
clock. Existing glass/opaque fallbacks remain independent. Inspect `/components/slider` with rapid drags and `/appearance` for accessibility settings.

Removing a slider also removes its decorative wrapper. Conditional views and template outlets can repeatedly show or hide the control without leaving extra
sliders behind.
