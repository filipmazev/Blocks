# Progress bar

Reusable loading feedback integrated with Blocks themes and accessibility preferences.

## Import

```ts
import { ProgressBar } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-progress-bar label="Upload progress" [value]="progress()" />
```

## API

`mode` supports `determinate`, `indeterminate`, `buffer`, and `query`. `value` and `bufferValue` are clamped to 0–100. Unknown progress omits `aria-valuenow`. `label` accepts translations. CSS variables: `--bx-progress-color`, `--bx-progress-track`, `--bx-progress-height`, `--bx-progress-radius`.

## Appearance and accessibility

Uses Blocks semantic tokens and the active `ThemingService` configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and `BxA11yService` reduced-motion preferences remain supported.

Text inputs accept `ResolvableText`: plain text or `{ key: 'translation.key' }`. With `BX_I18N`, text is resolved reactively, including already-mounted controls when the adapter's `version` signal changes. Plain text works without an adapter.

## Playground

Open `/components/progress-bar`. Fake asynchronous requests demonstrate progress and loading buttons. Reduced-motion preferences remove continuous animation while preserving status feedback.
