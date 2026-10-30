# Radio group

Owns one typed form value, group labeling, validation and disabled/readonly state for radio options.

## Import

```ts
import { RadioGroup, Radio } from '@filip.mazev/blocks/forms';
```

## Usage

```html
<bx-radio-group label="Plan" [formField]="account.plan">
  <bx-radio label="Personal" value="personal" />
  <bx-radio label="Team" value="team" />
</bx-radio-group>
```

## API

Bind the group through `[formField]`, `[formControl]`, `formControlName`, `[(ngModel)]`, or standalone `[(value)]`. Individual options retain their option `value`; avoid binding both the group and its children to form controls.

Shared field inputs configure labels, hints, errors, visibility policy, readonly and required state. The group generates a shared native name unless `name` is provided. Legacy individually bound radio controls remain supported.

## Behavior

Native radio semantics provide arrow navigation and one selected option. A disabled group disables its children; readonly blocks changes. Validation is presented once at group level. Focus delegation targets an available native radio.

## Appearance and accessibility

Uses Blocks semantic tokens and the active `ThemingService` configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and `BxA11yService` reduced-motion preferences remain supported.

Text inputs accept `ResolvableText`: plain text or `{ key: 'translation.key' }`. With `BX_I18N`, text is resolved reactively, including already-mounted controls when the adapter's `version` signal changes. Plain text works without an adapter.

## Playground

Open `/components/radio-group`, where the group participates in the complete Signal Forms example.
