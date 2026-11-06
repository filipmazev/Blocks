# Side panel layout

`SidePanelLayout` supplies stable bounds for declarative overlay and push panels alongside a page's content. It keeps containment in CSS and reserves real space
for push panels without reparenting or recreating their content when modes change.

## Import

```typescript
import { SidePanel, SidePanelLayout, SidePanelHeaderDirective } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-side-panel-layout>
    <bx-side-panel [(open)]="filtersOpen" placement="left" [breakpoints]="{ '2xl': 'push' }" ariaLabel="Filters">
        <h2 bxSidePanelHeader>Filters</h2>
        <!-- Filter controls -->
    </bx-side-panel>
    <main class="workspace-content"><!-- Page content; give its scroll wrapper overflow: auto. --></main>
</bx-side-panel-layout>
```

Give the layout a definite available height or a constrained flex/grid slot. A page with a toolbar can use a column flex shell: the toolbar occupies its natural
height, and the layout fills `flex: 1` with `min-block-size: 0`. This keeps panels below the toolbar without numeric offsets or scroll-time rectangle tracking.

## API

The layout has no configuration inputs. Direct `bx-side-panel` children occupy their physical left/right slots; all other content is projected into the flexible
middle region. A panel's `layoutMode`, `breakpoints`, `width`, `placement`, and `open` model determine its slot. Default mode is overlay. Breakpoint overrides
use the shared minimum-width `BreakpointKey` contract and `WindowDimensionsService`; the highest matching configured breakpoint wins.

## Appearance and customization

The host is a positioned, isolated flex region with viewport-constrained clipping. Configure surfaces and projected sections on each panel. Size the host with
your existing Blocks layout tokens and keep the middle content's actual scroll wrapper constrained.

## Behavior and accessibility

Push mode reserves space, while overlay mode leaves content width unchanged. Both preserve the same panel instance and projected form state. Mode and open
changes coordinate slot-width transitions with panel motion; reduced motion removes those transitions. The layout adds no focus trap, scroll lock, or modal
semantics. Child panels provide the existing top-layer overlay context for dropdowns and tooltips.

An explicit panel `container="viewport"` escapes this layout and uses overlay mode. An arbitrary external element can still provide overlay bounds. Push mode
requires this layout host; standalone panels otherwise retain overlay behavior.

## Playground

Open `/components/side-panel` to exercise containment and breakpoint behavior, or `/icons` for coordinated responsive panels and a resizing virtual grid.
