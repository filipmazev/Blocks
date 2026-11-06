# Stack layout

A small flex layout for vertical content, action rows and responsive groups.

## Public import

```typescript
import { Stack } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-stack direction="responsive" [gap]="4" align="center" justify="between">
    <span>Project details</span>
    <span>Updated today</span>
</bx-stack>
```

## API

`direction: StackDirection` is vertical (default), horizontal or responsive. Responsive stacks vertically below the shared sm breakpoint. `gap: LayoutGap`
defaults to 4; supported shared spacing keys are 0, 1, 2, 3, 4, 5, 6, 8, 10 and 12. `align: LayoutAlign` is start, center, end or stretch (default).
`justify: LayoutJustify` is start (default), center, end or between. `wrap` defaults to false; enable it for action rows.

## Appearance and customization

`--bx-stack-gap` overrides token-based spacing. CSS flex properties remain available for application-specific proportions.

## Behavior and accessibility

Adds no ARIA role or keyboard behavior. DOM order remains reading and tab order. Use wrapping horizontal stacks for long translated actions; use responsive
direction when content should stack on small screens.

## Playground

`/components/layout/stack` includes live examples and shared appearance controls.
