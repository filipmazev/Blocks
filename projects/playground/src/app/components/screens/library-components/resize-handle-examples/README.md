# Resize handle playground example

Exercises the public resize directive independently of panels. See the authoritative
[Resize handle guide](../../../../../../../blocks/primitives/directives/resize-handle/README.md).

## Import

Use `ResizeHandleDirective` and its edge/event contracts from `@filip.mazev/blocks/primitives`.

## Usage

Choose left/right to resize width or top/bottom to resize height. Toggle shrink prevention and explicit bounds, then drag or use the focused handle's keyboard
controls. Reset restores the example's 180px starting size.

## API

The owner applies the size model to its surface. Default bounds use the container and original size. Optional numeric controls replace the minimum/maximum; the
status reports start, completion, and cancellation rather than announcing every pointer movement.

## Appearance and customization

The demo uses Blocks form controls, semantic surfaces, and a touch-sized handle with a visible focus indicator. The directive itself supplies no layout. Toggles
and the reset action share a centered row with dynamic supporting-text spacing so their controls align. The compact dotted grip lives outside the surface in its
spacing gutter; hover/drag replaces it with a neutral full-edge line. The idle grip fades after two seconds and reappears on pointer activity. Default limits
use half the container.

## Behavior and accessibility

Arrow keys move by 10px and Shift by 50px; Home/End select the bounds. Escape restores the gesture start. The effective bounds and size are visible for manual
inspection. A left/top handle moves in the opposite coordinate direction to increase size.

## Playground

Open `/components/resize-handle`, `/components/side-panel`, or `/icons`.
