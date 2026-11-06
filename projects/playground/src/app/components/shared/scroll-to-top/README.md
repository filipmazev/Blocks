# Playground scroll-to-top action

Reusable floating action used by Icons and Tokens. It discovers the actual scroll viewport and shows a Blocks mini FAB after 400 pixels.

## Import

```typescript
import { ScrollToTop } from '@playground/components/shared/scroll-to-top/scroll-to-top';
```

## Usage

```html
<app-scroll-to-top [container]="scrollContainer()" [boundary]="contentContainer()" [suppressed]="panelOpen()" />
```

## API

`container` optionally supplies the actual scrolling element; omission uses Core's `findScrollContainer()`. `boundary` optionally supplies the grid's horizontal
bounds and focus-return target; omission uses the scroll viewport for horizontal alignment. Place the action inside a positioned viewport region so its bottom
edge remains stable while the inner content scrolls. `suppressed`, default false, hides the action while conflicting controls occupy its area.

## Appearance and customization

Uses the Blocks button, arrow-up icon, tooltip, spacing, and stacking tokens. The action is aligned with the actual grid/results right edge. Geometry is
refreshed on content/container resize rather than recalculated during scrolling. Push panels resize its viewport naturally; overlay presentation can suppress
it.

## Behavior and accessibility

The action and tooltip are named Scroll to top. Tooltips appear on hover or keyboard focus with touch long-press disabled. Scrolling is smooth unless
`BxA11yService` requests reduced motion. Activation focuses the results region or scroll container before the disappearing action becomes hidden. Passive
listeners and frame work are cleaned up on destruction.

## Playground

Open `/icons` or `/tokens` and scroll beyond 400 pixels.
