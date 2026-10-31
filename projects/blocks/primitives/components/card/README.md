# Card

A general themed content surface built with the existing surface engine.

## Public import

```typescript
import { Card } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-card title="Project" subtitle="Updated recently" variant="outlined">
  <p>Project content.</p>
  <div bxCardFooter>Last updated today</div>
</bx-card>
```

## API

`title` and `subtitle` accept `ResolvableText`. `headingLevel` defaults to 3 and is clamped to 1–6. `variant: CardVariant` is outlined (default), elevated or filled. Optional `opaque` follows application appearance when absent.

Slots: `bxCardMedia`, `bxCardHeader`, default body and `bxCardFooter`. Header content follows the optional generated title/subtitle. Empty sections take no space. Project semantic content and Blocks actions into these slots.

## Appearance and customization

`--bx-card-background`, `--bx-card-color`, `--bx-card-border`, `--bx-card-radius`, `--bx-card-shadow`, `--bx-card-padding` and `--bx-card-title-size`. Material changes update mounted surfaces; theme tokens remain inherited.

## Behavior and accessibility

A card is a container; its links and buttons provide interaction. The optional title has heading semantics. Long content wraps. Combine with Grid and Container for responsive pages; give projected images a responsive width and meaningful alternative text.

## Playground

`/components/card` includes live examples and shared appearance controls.

