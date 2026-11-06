# Virtual collection playground example

Exercises bidirectional measured rendering with 3,000 local items. The authoritative API guide is
[VirtualCollection](../../../../../../../blocks/primitives/components/virtual-collection/README.md).

## Import

Use `VirtualCollection`, `VirtualItemDirective`, and their typed configuration/track-by contracts from `@filip.mazev/blocks/primitives`.

## Usage

Switch between list/grid, adjust the container width and content density, and expand individual item bodies. Scroll or drag the scrollbar in both directions,
then use Scroll to item to visit an index directly.

## API

The example displays the actual mounted item count, contiguous range, and responsive column count. Expanded item IDs remain application-owned so state survives
unmounting. Density changes invalidate geometry declaratively; individual content expansion is detected through row measurement.

## Appearance and customization

Blocks controls/cards and shared tokens provide presentation. The collection owns row geometry, and the actual constrained region owns scrolling.

## Behavior and accessibility

The scroll region has a visible focus outline and accessible name. Item actions retain keyboard access; the collection pins focused rows and restores focused
controls across regrouping where possible. Programmatic scrolling respects reduced motion. No backend or pagination is simulated by this example; existing
load-more examples cover remote request orchestration separately.

## Playground

Open `/components/virtual-collection`. Icons and Tokens provide progressive rendering integrations with this same infrastructure.
