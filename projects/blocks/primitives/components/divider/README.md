# Divider

Separates adjacent content with a horizontal or vertical rule and an optional translated label.

## Public import

```typescript
import { Divider } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-divider />
<bx-divider label="Continue" lineStyle="dashed" />
<bx-stack direction="horizontal"> <span>Start</span><bx-divider orientation="vertical" /><span>End</span> </bx-stack>
```

## API

| Input         | Default      | Behavior                                           |
| ------------- | ------------ | -------------------------------------------------- |
| `orientation` | `horizontal` | `horizontal` or `vertical`                         |
| `lineStyle`   | `solid`      | `solid`, `dashed` or `dotted`                      |
| `label`       | absent       | `ResolvableText` between the two rule segments     |
| `decorative`  | `false`      | Hides the rule and label from assistive technology |

Also exports `DividerOrientation` and `DividerStyle`. The stack example additionally imports `Stack`.

## Appearance and customization

`--bx-divider-color`, `--bx-divider-thickness`, `--bx-divider-margin`, `--bx-divider-gap`, `--bx-divider-text`, `--bx-divider-font-size` and
`--bx-divider-min-height` override shared defaults.

## Behavior and accessibility

Uses separator semantics and reports its orientation. Labels wrap. Vertical dividers stretch within a flex row; give the row a meaningful height. No motion is
required.

## Playground

`/components/divider` includes live examples and shared appearance controls.
