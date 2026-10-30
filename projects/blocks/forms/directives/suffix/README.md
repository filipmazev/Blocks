# Field suffix

Composable content and native integration for the shared field frame.

## Import

```ts
import { SuffixDirective } from '@filip.mazev/blocks/forms';
```

## Usage

```html
<bx-input-field label="Weight"><span bxSuffix aria-hidden="true">kg</span></bx-input-field>
```

## API and behavior

Projects custom content after the input. Custom interactive suffix actions need accessible names and native button semantics.

## Appearance and accessibility

Uses Blocks semantic tokens and the active `ThemingService` configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and `BxA11yService` reduced-motion preferences remain supported.

Text inputs accept `ResolvableText`: plain text or `{ key: 'translation.key' }`. With `BX_I18N`, text is resolved reactively, including already-mounted controls when the adapter's `version` signal changes. Plain text works without an adapter.

## Playground

Open `/components/suffix` for working field composition and compatibility examples.
