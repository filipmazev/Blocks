# Native control

Composable content and native integration for the shared field frame.

## Import

```ts
import { NativeControlDirective } from '@filip.mazev/blocks/forms';
```

## Usage

```html
<bx-form-field label="Notes"><textarea bxInput label="Notes" [formField]="account.note"></textarea></bx-form-field>
```

## API and behavior

Registers a native input, textarea or select with the field frame. Import the desired Angular forms directives separately. Native attributes and third-party directives remain available. `BX_FORM_FIELD_CONTROL` and `IFormFieldControl` allow consumer controls to register their own state and focus contract.

## Appearance and accessibility

Uses Blocks semantic tokens and the active `ThemingService` configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and `BxA11yService` reduced-motion preferences remain supported.

Text inputs accept `ResolvableText`: plain text or `{ key: 'translation.key' }`. With `BX_I18N`, text is resolved reactively, including already-mounted controls when the adapter's `version` signal changes. Plain text works without an adapter.

## Playground

Open `/components/native-control` for working field composition and compatibility examples.
