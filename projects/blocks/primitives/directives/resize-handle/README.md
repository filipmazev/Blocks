# Resize handle

`ResizeHandleDirective` supplies a reusable, focusable resize separator. It adjusts an application-owned numeric size from pointer dragging or the keyboard,
without positioning elements, applying dimensions to targets, or owning table/list/panel data.

## Import

```typescript
import { ResizeHandleDirective, type IResizeHandleEvent, type ResizeHandleEdge } from '@filip.mazev/blocks/primitives';
```

Add the standalone directive to the consuming component's imports.

## Usage

```html
<div #container class="workspace">
    <section #surface [style.width.px]="width()">
        <!-- Content -->
        <div
            bxResizeHandle
            resizeEdge="right"
            resizeLabel="Resize workspace width"
            [resizeTarget]="surface"
            [resizeContainer]="container"
            [(resizeValue)]="width"></div>
    </section>
</div>
```

`width` is a writable numeric signal. Position and style the handle on the appropriate physical edge. A width handle usually spans the surface height; a height
handle spans its width. Use a reachable pointer/touch target and a visible focus indicator. Use `resizeEdge="top"` or `"bottom"` with a height model for rows or
vertically stacked regions; `"left"` and `"right"` adjust width for columns or side-by-side regions.

## API

| Member                              | Default                           | Behavior                                                                                |
| ----------------------------------- | --------------------------------- | --------------------------------------------------------------------------------------- |
| `resizeValue` / `resizeValueChange` | `0`                               | Owner-controlled size in CSS pixels; never writes target styles                         |
| `resizeEdge`                        | `'right'`                         | Physical left/right width edge or top/bottom height edge                                |
| `resizeTarget`                      | `undefined`                       | Optional element providing the actual rendered size at gesture start                    |
| `resizeContainer`                   | Target parent, then handle parent | Available containing width/height for bounds                                            |
| `resizeActivityContainer`           | Bounds container                  | Optional pointer-activity region, independent of portal geometry                        |
| `resizeMinSize`                     | 30% of original                   | Optional explicit pixel minimum; shrink prevention takes precedence                     |
| `resizeMaxSize`                     | 50% of container                  | Optional explicit pixel maximum; never exceeds available container size                 |
| `resizeInitialSize`                 | First gesture's rendered size     | Optional explicit reference for relative minimums and shrink prevention                 |
| `resizeDisableShrink`               | `true`                            | Prevent sizes below the original; enlarged sizes can return to the original             |
| `resizeDisabled`                    | `false`                           | Prevent interaction and cancel an active gesture                                        |
| `resizeLabel`                       | `'Resize'`                        | Accessible `ResolvableText` name, resolved reactively through optional `BX_I18N`        |
| `resizeControls`                    | Target ID when available          | Controlled element's ID for `aria-controls`                                             |
| `resizeStep`                        | `10`                              | Keyboard increment in CSS pixels; Shift multiplies it by five                           |
| `resizeIdleDelay`                   | `2000`                            | Milliseconds before the idle grip fades; zero keeps it revealed                         |
| `indicatorVisible()`                | Computed                          | Recent container pointer activity or an active gesture; exposed as `.bx-resize-visible` |
| `resizing()`                        | `false`                           | Read-only pointer/keyboard gesture state for suspending owner transitions               |
| `minSize()` / `maxSize()`           | Computed                          | Effective pixel bounds, including available container size                              |
| `resizeStart` / `resizeEnd`         | Events                            | `IResizeHandleEvent`: current/start size, source, and cancellation state                |

The reference size is captured once at the first gesture unless `resizeInitialSize` is supplied. Changing between width and height axes resets the implicit
reference. Width/height are measured from the selected physical axis; the owner can set different explicit limits when changing axes.

Double-click the handle or press Enter while it is focused to restore that axis's original size. Reset uses `resizeInitialSize` when supplied, otherwise the
first gesture's rendered size, and respects the current minimum, maximum, and container bounds. It emits the ordinary start, model-change, and completion events
with pointer or keyboard source. Disabled handles ignore reset.

By default shrinking below the original is disabled, so the effective minimum is the original size. To permit shrinking to the default 30% floor, set
`[resizeDisableShrink]="false"`. Explicit minimum/maximum values replace the relative defaults. A smaller available container always wins over conflicting
minimum constraints. Container resizing updates bounds through `ResizeObserver`; the directive constrains emitted values rather than changing application-owned
sizes during unrelated layout changes.

## Appearance and customization

The directive supplies separator semantics, cursor, pointer capture, and touch/selection behavior. It creates no markup or surface. Style its host using Blocks
semantic tokens; `.bx-resizing` marks active gestures. Layout owners should suspend width/height transitions while `resizing()` is true. The directive never
introduces a theme, fetches data, or manipulates table internals.

For the shared presentation used by SidePanel and the standalone demo, import `core/styles/helpers` and include `resize-grip` on the positioned handle. It uses
a compact 8 × 24px pill with three dots. Hovering or dragging replaces the dots with a 4px rail running along the resized edge, inset by shared spacing 2 at
both ends so its pill-shaped caps remain visible. It uses the same background color as the dot grip. Top/bottom handles rotate the grip and run horizontally.
Keep the host's hit area at least 24px; the visual grip does not determine pointer target size.

The idle grip fades after `resizeIdleDelay` milliseconds without pointer activity in `resizeActivityContainer` (or the bounds container). Movement reveals it
again. Hover, focus, and active resizing retain a visible edge. Coarse-pointer/touch and forced-color modes keep a discovery grip visible. `BxA11yService` and
the system reduced-motion preference suppress fading. Activity listeners run outside Angular and timers/listeners are released when disabled, reconnected, or
destroyed.

Customize `--bx-resize-rail-color`, `--bx-resize-grip-background`, `--bx-resize-grip-color`, `--bx-resize-grip-border`, and `--bx-resize-grip-duration` through
the shared semantic theme.

## Behavior and accessibility

The separator exposes orientation, current value, bounds, accessible name, and controlled surface. Left/right width handles are vertical separators; top/bottom
height handles are horizontal separators. Native pointer events support mouse, pen, and touch. Pointer moves are frame-coalesced, with the final position
committed before completion. Pointer capture/document listeners retain the gesture outside the original hit area. Selection and cursor styles are restored on
completion, cancellation, disabling, loss of capture/window focus, and destruction.

Arrow keys move the selected physical edge by `resizeStep`; Shift uses five times that step. Home and End select the effective minimum/maximum. Keyboard
gestures end on key release or blur. Escape cancels the current gesture and restores its starting size before any surrounding overlay handles Escape. Destroyed
handles release listeners and styles without emitting late events. Browser geometry starts after rendering, keeping server rendering safe.

## Playground

Open `/components/resize-handle` for all four edges, default relative bounds, explicit pixel limits, shrink prevention, keyboard resizing, double-click/Enter
reset, and event feedback. `/components/side-panel` demonstrates width-model integration. `/icons` enables resizing only on Filters.
