# Field hint

Composable content and native integration for the shared field frame.

## Import

```ts
import { BxHint } from '@filip.mazev/blocks/forms';
```

## Usage

```html
<bx-input-field label="Reference"><bx-hint>Public identifier</bx-hint></bx-input-field>
```

## API and behavior

Use `align="start"` or `align="end"` for projected supporting content. Convenience fields also accept `hint` and `hintEnd` as translated text. Descriptions are connected automatically and replaced by visible errors.

## Appearance and accessibility

Uses Blocks semantic tokens and the active `ThemingService` configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and `BxA11yService` reduced-motion preferences remain supported.

Text inputs accept `ResolvableText`: plain text or `{ key: 'translation.key' }`. With `BX_I18N`, text is resolved reactively, including already-mounted controls when the adapter's `version` signal changes. Plain text works without an adapter.

## Playground

Open `/components/hint` for working field composition and compatibility examples.
