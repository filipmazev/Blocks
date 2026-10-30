# Loading indicator

Reusable loading feedback integrated with Blocks themes and accessibility preferences.

## Import

```ts
import { LoadingIndicator } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-loading-indicator label="Fetching results" />
```

## API

`label` accepts translated text; `size` controls its decorative spinner. The host is a polite busy status region. Project optional supporting content after the status text. CSS variables: `--bx-loading-color`, `--bx-loading-gap`.

## Appearance and accessibility

Uses Blocks semantic tokens and the active `ThemingService` configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and `BxA11yService` reduced-motion preferences remain supported.

Text inputs accept `ResolvableText`: plain text or `{ key: 'translation.key' }`. With `BX_I18N`, text is resolved reactively, including already-mounted controls when the adapter's `version` signal changes. Plain text works without an adapter.

## Playground

Open `/components/loading-indicator`. Fake asynchronous requests demonstrate progress and loading buttons. Reduced-motion preferences remove continuous animation while preserving status feedback.
