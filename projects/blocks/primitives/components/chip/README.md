# Interactive chip

A compact native action, toggle or removable token using Blocks semantic palettes.

## Public import

```typescript
import { Chip } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-chip label="Design" [(selected)]="designSelected" />
<bx-chip label="Angular" [selectable]="false" [removable]="true" (removed)="removeAngular()" />
<bx-chip label="Fixed selection" [selected]="true" [readOnly]="true" />
```

## API

| API                   | Default  | Behavior                                              |
| --------------------- | -------- | ----------------------------------------------------- |
| `label`               | required | `ResolvableText`                                      |
| `selected`            | false    | Two-way selection model                               |
| `selectable`          | true     | Toggles selection and exposes aria-pressed            |
| `deselectable`        | true     | Allows an active selectable chip to be deselected     |
| `removable`           | false    | Separate accessible remove action                     |
| `disabled`            | false    | Removes both actions from normal focus                |
| `readonly / readOnly` | false    | Prevents activation and removal while retaining focus |
| `config`              | {}       | `IChipConfig` appearance and remove label             |
| `activated`           | —        | Main action, after selection changes                  |
| `removed`             | —        | Removal request; application owns the array           |
| `focus(options?)`     | —        | Focuses the main action                               |

`deselectable` defaults to true. Set it to false for an application-coordinated single-choice group: activating an unselected chip selects it, while activating
an already selected chip leaves it selected. The owner clears selection on the other chips. `activated` still emits for each enabled activation.

`IChipConfig` supports `color` (primary), `variant` (tonal), `size` (medium), optional `icon`, and translatable `removeLabel` (Remove {label}). Provide
`BX_CHIP_DEFAULTS` for shared values; instance configuration wins.

## Appearance and customization

`--bx-chip-background`, `--bx-chip-color`, `--bx-chip-border`, `--bx-chip-radius`, `--bx-chip-min-height`, `--bx-chip-hover-background` and
`--bx-chip-remove-background`, and `--bx-chip-fill-opacity` override the shared tag palette and spacing defaults. Main-action hover fills the entire chip behind
the separate circular remove action for tonal/outlined chips. Filled chips preserve their fill and use an inset hover outline, keeping the theme's on-fill text
contrast stable; `--bx-chip-hover-background` can override that behavior. Filled chips default to an opaque semantic fill (`--bx-chip-fill-opacity: 1`),
matching filled-button intent and keeping primary selection visible.

## Behavior and accessibility

Enter and Space activate native buttons. Delete or Backspace on the main action requests removal when enabled. Selection has a check mark and inset outline. The
label wraps. The application should move focus to an adjacent chip or another action after removing the focused item; the playground demonstrates this. This
primitive is not a form field; use selectedChange to coordinate application or form state.

## Playground

`/components/chip` includes live examples and shared appearance controls.
