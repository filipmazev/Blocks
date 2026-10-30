# Checkbox indicator

The reusable, decorative checkbox face used by Blocks checkbox controls and multiselect options. Supports unchecked, checked and partial selection using Blocks surfaces and icons.

## Import

```ts
import { CheckboxIndicator } from '@filip.mazev/blocks/forms';
```

Add `CheckboxIndicator` to the standalone component's `imports`.

## Usage

```html
<button type="button" role="checkbox" [attr.aria-checked]="partial() ? 'mixed' : selected()"
  (click)="toggleSelection()">
  <bx-checkbox-indicator [checked]="selected()" [indeterminate]="partial()" />
  Select all locations
</button>
```

Use `Checkbox` for a standalone form control. Use this indicator inside an existing interactive control whose semantics and events are already managed.

## API

| Input | Default | Behavior |
| --- | --- | --- |
| `checked` | `false` | Shows the Blocks check icon and accent face. |
| `indeterminate` | `false` | Shows the Blocks minus icon and accent face; takes precedence over checked. |
| `invalid` | `false` | Uses validation colors from the theme. |
| `disabled` | `false` | Suppresses the active surface finish; the owner provides disabled semantics and opacity. |

## Appearance and customization

Uses the same shared surface and choice finish as `Checkbox`. `--bx-checkbox-size` customizes its dimensions (default `1.125rem`). Semantic tokens control colors and radius; theme and appearance changes update mounted indicators. Motion follows the shared accessibility styles. Forced colors and high contrast flatten the decorative finish.

## Behavior and accessibility

The indicator is always hidden from assistive technology, has no tab stop and does not handle pointer or keyboard input. The owner must supply an accessible label, visible focus, checked/mixed state, readonly/disabled handling and keyboard interaction. Multiselect uses listbox option semantics for each row and checkbox semantics for the select-all action without nested interactive elements.

## Playground

Open `/components/checkbox-indicator` for live unchecked, checked and partial states controlled by Blocks checkboxes. `/components/checkbox` and `/components/multi-select` demonstrate its integration.
