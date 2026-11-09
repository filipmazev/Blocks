# Declarative side panel

`SidePanel` is a persistent nonmodal surface controlled by its parent through `model<boolean>()`. It supports physical left/right placement, viewport or element
bounds, optional scoped backdrops, and projected header, footer, banner, and body content. It uses no modal service, focus trap, inert page content, or scroll
lock.

## Import

```typescript
import { SidePanel, SidePanelBannerDirective, SidePanelFooterDirective, SidePanelHeaderDirective } from '@filip.mazev/blocks/primitives';
```

Import the component and the slot directives used by the template.

## Usage

```html
<div #contentContainer class="content-region">
    <button bx-button type="button" (click)="filtersOpen.set(true)">Filters</button>
</div>
<bx-side-panel
    [(open)]="filtersOpen"
    placement="left"
    [container]="contentContainer"
    [width]="400"
    ariaLabel="Filters"
    [headerIcon]="{ name: 'sliders-horizontal', color: 'accent', bgColor: 'auto' }">
    <h2 bxSidePanelHeader>Filters</h2>
    <!-- Persistent filter controls -->
    <div bxSidePanelFooter>
        <button bx-button type="button" (click)="filtersOpen.set(false)">Done</button>
    </div>
</bx-side-panel>
```

`filtersOpen` is a writable boolean signal. For stable page containment and responsive push behavior, use [SidePanelLayout](../side-panel-layout/README.md):

```html
<bx-side-panel-layout>
    <bx-side-panel [(open)]="filtersOpen" placement="left" [breakpoints]="{ '2xl': 'push' }" ariaLabel="Filters">
        <h2 bxSidePanelHeader>Filters</h2>
        <!-- Filter controls -->
    </bx-side-panel>
    <div class="page-scroll-content"><!-- Adjacent page content --></div>
</bx-side-panel-layout>
```

Give the layout a constrained height. Its page scroll wrapper can then use `overflow: auto`. A toolbar stays in its own natural-height flex/grid row above the
layout. The panel and its projected controls remain the same instances when mode changes; push reserves space and overlay leaves the content width unchanged.

The element's actual visible bounds determine the surface and backdrop area; no sidebar offsets or relative-position styles are required. Omit `container` for
viewport placement. Ensure an element-bound panel's container has meaningful height.

### Width resizing

```html
<bx-side-panel [(open)]="filtersOpen" placement="left" [width]="360" [resizable]="true" ariaLabel="Filters">
    <!-- Persistent filter controls -->
</bx-side-panel>
```

`width` sets the initial width directly, including CSS lengths. It is now a model, so `[(width)]="panelWidth"` can retain the user's width in application state;
use a `number | string` writable signal because user adjustments write numeric CSS pixels. Existing one-way `[width]` bindings remain supported. Escape
cancellation restores the pre-gesture width, including its original CSS-length representation.

Resizing is opt-in and uses [ResizeHandleDirective](../../directives/resize-handle/README.md). A left panel resizes from its right edge; a right panel resizes
from its left edge. Side panels expose width resizing only, even though the underlying directive also supports top/bottom height resizing for other layouts.

The default maximum is 50% of the containing region, retaining an outside backdrop area. The initial width is constrained to that maximum when resizing is
enabled. `resizeDisableShrink` defaults to true: growth and return to the original rendered width are allowed. Set it to false to enable the default minimum of
30% of the original width. Supply `resizeMinWidth`/`resizeMaxWidth` to use explicit pixel limits; available container width always takes precedence. The
reference is the original rendered width at the first resize gesture. Double-clicking the grip or pressing Enter while it is focused restores that width, within
the current resize bounds. A custom initial width remains as simple as `[width]="360"`.

```html
<bx-side-panel
    [(open)]="editorOpen"
    [(width)]="editorWidth"
    [resizable]="true"
    [resizeDisableShrink]="false"
    [resizeMinWidth]="240"
    [resizeMaxWidth]="720"
    resizeLabel="Resize editor width"
    ariaLabel="Editor">
    <!-- Editor content -->
</bx-side-panel>
```

## API

| Input/model             | Default                | Purpose                                                                                                         |
| ----------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------- |
| `open` / `openChange`   | `false`                | Parent-controlled model and user dismissal updates                                                              |
| `panelId`               | Generated unique ID    | Stable surface ID for `aria-controls`                                                                           |
| `placement`             | `'right'`              | Physical `'left'` or `'right'` edge                                                                             |
| `headerIcon`            | `undefined`            | Decorative `IIconData` beside projected heading; defaults to 24px and supports semantic color/background/stroke |
| `width` / `widthChange` | `400`                  | Initial/current pixel or CSS-length width model; user resizing writes numeric pixels                            |
| `resizable`             | `false`                | Enable an inner-edge width separator                                                                            |
| `resizeMinWidth`        | Relative               | Optional pixel minimum; defaults to 30% when shrinking is enabled                                               |
| `resizeMaxWidth`        | Relative               | Optional pixel maximum; defaults to 50% of container                                                            |
| `resizeDisableShrink`   | `true`                 | Prevent shrinking below the original rendered width                                                             |
| `resizeLabel`           | `'Resize panel width'` | Translatable accessible handle name                                                                             |
| `resizeIdleDelay`       | `2000`                 | Milliseconds before the idle grip fades; zero keeps it revealed                                                 |
| `container`             | `undefined`            | Nearest SidePanelLayout, or viewport without one; explicit element bounds or 'viewport' override this           |
| `layoutMode`            | `'overlay'`            | Base push/overlay mode; push requires SidePanelLayout                                                           |
| `breakpoints`           | `undefined`            | Typed minimum-width modes; the highest matching configured threshold wins                                       |
| `currentLayoutMode()`   | Resolved               | Effective mode after viewport resolution and layout availability                                                |
| `backdrop`              | `false`                | Blocks pointer interaction inside the configured bounds                                                         |
| `closeOnBackdrop`       | `true`                 | Backdrop activation requests model closure                                                                      |
| `closeOnEscape`         | `true`                 | Unhandled Escape closes the open panel, including focus on the surrounding page                                 |
| `showCloseButton`       | `true`                 | Built-in accessible close control                                                                               |
| `ariaLabel`             | `'Side panel'`         | `ResolvableText` accessible region name                                                                         |
| `labelledBy`            | `undefined`            | Visible label element ID, taking precedence over `ariaLabel`                                                    |
| `closeLabel`            | `'Close panel'`        | `ResolvableText` close-control name                                                                             |
| `autoFocus`             | `true`                 | Focuses the surface once when opening                                                                           |
| `restoreFocus`          | `true`                 | Returns focus if it remains inside the closing surface                                                          |
| `animationDuration`     | `175`                  | Entrance/exit milliseconds; reduced-motion preferences force zero                                               |

Slots are `[bxSidePanelBanner]`, `[bxSidePanelHeader]`, `[bxSidePanelFooter]`, and unmarked body content. Omitted sections consume no spacing. The body scrolls
independently; header and footer stay reachable. The component has no imperative opening methods or separate lifecycle events; the open model is the state
contract.

## Appearance and customization

The panel shares surface material, square corners, frame, header/footer, banner, and close-control presentation with Modal Side. Its `bxSurface` material
follows the existing `ThemingService`, lighting, transparency, contrast, and theme inheritance helpers. Existing modal lifecycle and presentation APIs remain
available.

The heading row uses the same banner presentation as Modal Side: aligned icon/text, shared title typography, divider spacing, and the compact 32px close button.
Set `headerIcon` to an `IIconData` value for the leading icon; `name`, optional `size` (24px), `color`, `bgColor`, and `strokeWidth` match modal banner icons.
The icon is decorative; projected text and `ariaLabel` / `labelledBy` provide the panel name. Projected headings remain application-owned; reset their margin to
zero and use `font: inherit` to retain the shared banner typography. The separate `bxSidePanelBanner` slot remains available above the heading.

Set these variables on the component or a theme scope:

| Variable                      | Default                                                                     |
| ----------------------------- | --------------------------------------------------------------------------- |
| `--bx-panel-bg`               | `--bx-modal-bg`, then `--bx-bg-surface`                                     |
| `--bx-panel-text`             | `--bx-modal-text`, then `--bx-text-primary`                                 |
| `--bx-panel-material-opacity` | Global material + 45 opacity points; minimum 52%, default about 90.6%       |
| `--bx-panel-padding`          | Shared spacing 4                                                            |
| `--bx-panel-gap`              | Shared spacing 4                                                            |
| `--bx-panel-z-index`          | Shared fixed layer, below modal overlays                                    |
| `--bx-panel-resize-gutter`    | Shared spacing 6; space between the panel and adjacent content for the grip |
| `--bx-panel-backdrop`         | Shared backdrop fallback                                                    |

Projected content remains under the consumer's control. Use semantic tokens and Blocks controls; long content can wrap, and the panel shrinks to narrow bounds.

## Behavior and accessibility

The panel is an accessible complementary region, not a modal dialog. It never sets `aria-modal`, traps focus, or makes surrounding content inert. An optional
backdrop blocks pointer interaction only inside its bounds; normal keyboard access to the page remains available. Use Modal when the task requires modal
semantics and focus trapping.

Nested Selects, Multiselects, dropdowns, popovers, and tooltips inherit `BX_OVERLAY_CONTEXT` with top-layer hosting, so floating content is not clipped or
hidden behind the panel. Explicit nested overlay contexts still follow their existing contract. All four surface corners are square, shared with Modal Side.

On opening, focus moves to the surface unless `autoFocus` is false. On closing, it returns to the opening element only if focus is still inside the panel;
interactions elsewhere retain their focus. The panel observes unhandled Escape for its complete open lifetime, including after icon/content updates and focus
changes. Child overlays can consume Escape first. The built-in close action remains keyboard-accessible on touch-sized surfaces. Supply an accessible
alternative if hiding it.

Content stays mounted and becomes inert and hidden from assistive technology while closed. CSS transitions respond directly to the model, allowing rapid
reversals without pending completion timers. `BxA11yService` preference changes update mounted motion immediately. Inside SidePanelLayout, CSS containment
anchors the layer without scroll-driven measurements or a body portal. The stable parent bounds stay below any toolbar outside that layout. Arbitrary external
element bounds use synchronous, ancestor-filtered positioning; viewport presentation remains available. Theme/lighting inheritance is applied when hosting
externally. Listeners, observers, inheritance, and externally hosted nodes are disposed on destruction.

Resize handles support mouse, pen, touch, and keyboard arrows with Home/End bounds. Pointer moves are frame-coalesced. Active resizing temporarily disables
panel/slot size motion so the edge tracks the pointer directly; normal entrance/exit motion resumes afterward. The handle has a touch-sized hit area around the
inner edge and remains outside the scrolling body. A spacing gutter holds a compact pill with three dots without overlapping the surface or adjacent content.
Push layout reserves the gutter alongside the panel. The grip fades after two seconds of pointer inactivity, reappears on movement within the panel's content
region, and uses a neutral full-height line without dots on hover or while dragging. Focus and touch retain a visible affordance; reduced motion removes fades.
Set `resizeIdleDelay` to configure the delay or zero to keep the idle grip visible. Escape first cancels resizing, then can dismiss the panel on the next
activation.

Text accepts plain strings without an adapter. Optional `BX_I18N` resolution tracks the adapter's language revision through computed state.

## Playground

Open `/components/side-panel` to change placement, width, containment, and backdrop while open and verify persistent form content. `/icons` demonstrates
coordinated Filters and Details panels constrained to the main content region.
