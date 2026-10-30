# Slider

`SliderDirective` gives a native range input a glass thumb, a recessed track, and a value fill. Native keyboard, touch, disabled, minimum, maximum, step, and Angular forms behavior are preserved.

```ts
import { SliderDirective } from '@filip.mazev/blocks/forms';
```

```html
<label for="volume">Volume</label>
<input id="volume" type="range" bxSlider min="0" max="100" [formControl]="volume" />
```

Import the directive into your component and include the existing Blocks core stylesheet. The directive also supports `ngModel` or native `[value]` and `(input)` bindings. It reads programmatic value changes after Angular renders, so resetting a form updates the fill too.

The slider inherits semantic theme colors. Solid material, reduced transparency, increased contrast, and unsupported backdrop filtering use an opaque thumb. WebKit/Blink and Firefox have separate native thumb and track rules. Provide an associated label or `aria-label` for every slider.

`--bx-slider-thumb-size` sets the native and decorative thumb diameter together, defaulting to `spacing(6)` from the shared tokens. The decorative thumb's position follows the same travel distance as the native thumb.

The bordered glass thumb magnifies and blurs the rail beneath it. Set `--bx-slider-magnification` to adjust the enlargement from its default `1.5`, and `--bx-slider-lens-blur` to adjust the lens and backdrop blur from `1.5px`. It uses the current rail colors and value, including RTL, without reading screen pixels. Reduced transparency, increased contrast and unsupported backdrop filtering use an opaque thumb; forced colors retains the native thumb.

## Labels and ticks

Native `[formField]` binding is supported alongside existing Angular form directives. `discrete` adds a formatted visible value; `displayWith(value)` controls that label. `showTickMarks` adds bounded native tick metadata. For a pair of values use [RangeSlider](../../components/range-slider/README.md).
