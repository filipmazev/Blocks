# Grid layout

Responsive CSS grid for cards and general content without a separate layout framework.

## Public import

```typescript
import { Grid } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-grid minColumnWidth="16rem" [gap]="4">
  <bx-card title="Project one" />
  <bx-card title="Project two" />
</bx-grid>
```

## API

`minColumnWidth` defaults to 16rem and controls auto-fit columns. Optional `columns` selects a fixed count clamped to 1–24. `gap: LayoutGap` defaults to 4 and uses the shared spacing scale. Fixed and automatic grids become one column below the shared sm breakpoint. The usage also imports `Card`.

## Appearance and customization

`--bx-grid-gap` overrides spacing. Minimum column width never exceeds the parent. Fixed columns use minmax(0, 1fr) to allow long content to shrink.

## Behavior and accessibility

Keeps natural DOM order without adding roles or keyboard behavior. Place semantic sections and controls inside the grid. Text enlargement, narrow containers and RTL use normal CSS layout.

## Playground

`/components/grid` includes live examples and shared appearance controls.

