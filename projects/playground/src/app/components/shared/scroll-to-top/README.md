# Playground scroll-to-top action

Reusable floating action used by Icons and Tokens. It discovers the actual scroll viewport and shows a Blocks mini FAB after scrolling 400 pixels past the
catalog results' start.

## Import

```typescript
import { ScrollToTop } from '@playground/components/shared/scroll-to-top/scroll-to-top';
```

## Usage

```html
<app-scroll-to-top [container]="scrollContainer()" [boundary]="contentContainer()" [suppressed]="panelOpen()" />
```

## API

`container` optionally supplies the actual scrolling element; omission uses Core's `findScrollContainer()`. `boundary` optionally supplies the results' start,
horizontal bounds, scroll destination, and focus-return target. With a boundary, visibility requires scrolling 400 pixels past its top; preceding documentation
does not count. Omission uses the scroll viewport for horizontal alignment and measures the threshold and destination from scroll position zero. Place the
action inside a positioned viewport region so its bottom edge remains stable while the inner content scrolls. `suppressed`, default false, hides the action
while conflicting controls occupy its area.

## Appearance and customization

Uses the Blocks button, arrow-up icon, tooltip, spacing, and stacking tokens. The action is aligned with the actual grid/results right edge. Horizontal
alignment is refreshed on content/container resize. Visibility follows the results' current position during scrolling and after documentation or viewport
resizing. Push panels resize its viewport naturally; overlay presentation can suppress it.

## Behavior and accessibility

The action and tooltip are named Scroll to catalog top when a boundary is supplied, otherwise Scroll to top. Activation scrolls to the results' current start,
leaving preceding documentation above the viewport. Tooltips appear on hover or keyboard focus with touch long-press disabled. Scrolling is smooth unless
`BxA11yService` requests reduced motion. Activation focuses the results region or scroll container before the disappearing action becomes hidden. Passive
listeners and frame work are cleaned up on destruction. The bounded scroll animation remeasures its destination as virtual rows or responsive layouts change, so
row-height corrections cannot stop it short. Wheel, touch, pointer, or keyboard input cancels the trip immediately; reduced motion removes the animation.

## Playground

Open `/icons` or `/tokens`, expand the documentation, and scroll. The action stays hidden until 400 pixels past the results' start.
