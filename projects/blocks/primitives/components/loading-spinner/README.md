# Loading spinner

Reusable loading feedback integrated with Blocks themes and accessibility preferences.

## Import

```ts
import { LoadingSpinner } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-loading-spinner label="Fetching results" [size]="24" />
```

## API

`size` is the diameter in pixels (20 by default). `label` is translatable. `decorative` defaults to false; set it to true when surrounding content already names the operation. CSS variables: `--bx-spinner-color`, `--bx-spinner-stroke`, `--bx-spinner-size`.

## Appearance and accessibility

Uses Blocks semantic tokens and the active `ThemingService` configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and `BxA11yService` reduced-motion preferences remain supported.

Text inputs accept `ResolvableText`: plain text or `{ key: 'translation.key' }`. With `BX_I18N`, text is resolved reactively, including already-mounted controls when the adapter's `version` signal changes. Plain text works without an adapter.

## Playground

Open `/components/loading-spinner`. Fake asynchronous requests demonstrate progress and loading buttons. Reduced-motion preferences remove continuous animation while preserving status feedback.
