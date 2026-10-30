# Range slider

Two constrained range thumbs bound to a `[number, number]` form value.

## Import

```ts
import { RangeSlider } from '@filip.mazev/blocks/forms';
```

## Usage

```html
<bx-range-slider label="Budget" [(value)]="range" [min]="0" [max]="100"
  [step]="10" [discrete]="true" [showTickMarks]="true" />
```

## API

Supports Angular forms and standalone value binding. `min`, `max`, and `step` configure the range. `discrete` shows formatted values; `displayWith(value)` customizes display and accessible value text. `startLabel` and `endLabel` are translatable thumb names. `showTickMarks` shows bounded tick indicators.

Ticks mark actual step values and are centered on the thumbs' travel, including ranges where the step does not divide the span evenly. The selection fill uses the same thumb centers in LTR and RTL. Set `--bx-slider-thumb-size` to customize both native and decorative thumbs together; it defaults to the shared `spacing(6)` token, and the fill and tick insets follow that size.

Each bordered glass thumb magnifies and blurs the rail below it, including both selection boundaries when the thumbs are close. `--bx-slider-magnification` controls the enlargement and defaults to `1.5`; `--bx-slider-lens-blur` sets the lens and backdrop blur and defaults to `1.5px`. The lens follows values, resizing, theme changes and RTL without per-frame pixel sampling. Reduced transparency and increased contrast use the opaque fallback; forced colors keeps the native thumbs.

Thumbs cannot cross. Each thumb retains native keyboard input and an accessible name. Initialize form values with a pair of numbers. Shared hints, errors, readonly and disabled state are supported.

## Appearance and accessibility

Uses Blocks semantic tokens and the active `ThemingService` configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and `BxA11yService` reduced-motion preferences remain supported.

Text inputs accept `ResolvableText`: plain text or `{ key: 'translation.key' }`. With `BX_I18N`, text is resolved reactively, including already-mounted controls when the adapter's `version` signal changes. Plain text works without an adapter.

## Playground

Open `/components/range-slider` for a live pair, labels and ticks.

The rail shares the normal slider's border, inset shadow, neutral background and pill radius, with the selected interval filled between the two thumb centers.
