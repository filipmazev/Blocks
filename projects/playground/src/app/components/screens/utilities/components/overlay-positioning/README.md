# Overlay positioning

Extend Blocks overlays with shared connected positioning, visibility tracking, and live theme inheritance.

## Import

```typescript
import { BxOverlayPositionService, inheritOverlayTheme, isOverlayOriginVisible, trackOverlayOrigin } from '@filip.mazev/blocks/core';
```

## Usage

```typescript
import { Overlay } from '@angular/cdk/overlay';
import { inject } from '@angular/core';

import { BxOverlayPositionService, inheritOverlayTheme, trackOverlayOrigin } from '@filip.mazev/blocks/core';

const overlay = inject(Overlay);
const bxOverlayPositionService = inject(BxOverlayPositionService);

// Run after the origin is rendered and attach a portal before tracking.
function attachPreview(origin: HTMLElement) {
    const overlayRef = overlay.create({
        positionStrategy: bxOverlayPositionService.getElementStrategy(origin, 'bottom'),
        scrollStrategy: overlay.scrollStrategies.noop()
    });

    return overlayRef;
}
```

The complete demo source shows portal attachment, theme inheritance, origin tracking, outside-pointer/Escape dismissal, and destruction cleanup.

## API

| Utility                                              | Contract                                                                                                                                              |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `getElementStrategy(element, placement, offset = 8)` | Connected CDK strategy with alternative sides, viewport push and an 8 CSS-pixel viewport margin                                                       |
| `getSubmenuStrategy(element, side, offset = 4)`      | Physical left/right preference with opposite-side fallback and fixed dimensions                                                                       |
| `getCoordinateStrategy(x, y)`                        | Client-coordinate anchor, initially below with a 2 CSS-pixel offset, then fallback positions                                                          |
| `trackOverlayOrigin(overlay, origin, options?)`      | Tracks an attached connected overlay with native anchoring where available, otherwise measured fallback; returns callable cleanup with `reposition()` |
| `isOverlayOriginVisible(origin)`                     | Checks viewport intersection and clipping ancestors; disconnected or zero-size origins return false                                                   |
| `inheritOverlayTheme(source, pane)`                  | Copies inherited theme/appearance context and observes relevant scope attributes; returns observer cleanup                                            |

`IOverlayOriginOptions` can disable native anchoring with `nativeAnchoring: false`, run `onPosition` after positioning, or run `onOriginHidden` when the anchor
leaves view. The owner decides whether to dismiss. Attach content before tracking so size measurement is meaningful. Call both returned cleanup functions before
disposing the overlay; the owner also cleans up its subscriptions and portal.

The demo is an informational preview with focus kept on its trigger. It directly uses an element strategy, visibility guard, origin tracker and inherited theme.
Coordinate and submenu strategies are documented extension points; ready-made
[Context menu](../../../../../../../../blocks/primitives/directives/context-menu/README.md) and
[Menu](../../../../../../../../blocks/primitives/components/menu/README.md) demonstrate their intended interactions. Prefer the public overlay components and
directives when their existing focus, dismissal and accessibility behavior meets your needs.

## Appearance and customization

The interactive example uses public Blocks components, semantic theme variables, and shared spacing and responsive helpers. It follows the active playground
appearance. Open the source tab for the component and template.

## Behavior and accessibility

Use the Blocks select and trigger to try each preferred side. The preview is a Blocks card constrained to the viewport, with scrollable content at larger text
sizes. It inherits mounted theme and appearance changes.

Focus stays on the trigger. Escape, blur, outside pointer events, a hidden origin, and navigation close the preview. Reduced-motion and opaque appearances
follow the shared Blocks surface behavior.

## Playground

Open `/utilities/overlay-positioning` from **Core → Utilities → Overlay positioning**. The demo appears first, followed by separate documentation and code tabs.

Return to the [utilities overview](../../README.md) for the coverage audit and related feature guides.
