# Field prefix

Composable content and native integration for the shared field frame.

## Import

```ts
import { PrefixDirective } from '@filip.mazev/blocks/forms';
```

## Usage

```html
<bx-input-field label="Amount"><span bxPrefix aria-hidden="true">$</span></bx-input-field>
```

## API and behavior

Projects custom content before the input. Keep decorative prefixes hidden from assistive technology; express meaningful units in the label or description.

## Appearance and accessibility

Uses Blocks semantic tokens and the active `ThemingService` configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and `BxA11yService` reduced-motion preferences remain supported.

Text inputs accept `ResolvableText`: plain text or `{ key: 'translation.key' }`. With `BX_I18N`, text is resolved reactively, including already-mounted controls when the adapter's `version` signal changes. Plain text works without an adapter.

## Playground

Open `/components/prefix` for working field composition and compatibility examples.
