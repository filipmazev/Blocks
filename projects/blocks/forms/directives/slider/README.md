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
