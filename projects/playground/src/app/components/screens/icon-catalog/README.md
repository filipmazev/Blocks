# Lucide icon catalog

Browse generated Lucide icons with search, official category filters, progressive rendering, and a nonmodal customization inspector. Catalog-wide preferences
survive navigation and reloads; per-icon inspector changes remain separate and last for the current visit.

## Import

```typescript
import { Icon, LUCIDE_CATEGORIES, LUCIDE_ICON_CATEGORIES } from '@filip.mazev/blocks/icons';
import { InfiniteScrollDirective, SidePanel, SidePanelLayout, VirtualCollection, VirtualItemDirective } from '@filip.mazev/blocks/primitives';
```

## Usage

Open `/icons`. Search by icon identifier and select **Filters** for catalog size, stroke width, and the collapsible **Category** section. Existing Blocks chips
list all categories side by side, with a checkmark and opaque accent fill for the selected choice. Only one category is selected at a time. Activating the
selected chip retains that choice; selecting another replaces it. Reset all restores appearance and the unrestricted category default while keeping the search.
The Filters button has a plain label without an active-filter count.

Filters resizes from its right edge using the shared resize directive. Its initial width is 360px; the default maximum is 50% of the main-content container.
Shrinking below the original rendered width is disabled by default. Its width persists while the panel is closed/reopened during this visit. Details remains
non-resizable. Keyboard users can focus the separator and use arrows, Home/End, and Escape.

Select any icon for its right-side Details panel. The preview, semantic color picker, size/stroke sliders, background toggle, and Angular example update
reactively. Copy uses the exact displayed example and announces success or failure. Selecting another tile updates the current panel in place. The active tile
highlight and pressed state clear when Details closes or another panel opens. Inspector settings are retained independently per selected icon during the visit;
a new inspector starts at at least 64 pixels using the current catalog stroke width and the accent color, listed first in the color selector. Reset
customization restores those starting values.

## API

The catalog uses public [Icon](../../../../../../blocks/icons/components/icon/README.md),
[SidePanel](../../../../../../blocks/primitives/components/side-panel/README.md), and
[InfiniteScrollDirective](../../../../../../blocks/primitives/directives/infinite-scroll/README.md) APIs.

Generated category maps are imported directly. Runtime filtering performs lookups without name-based classification or network requests. Metadata comes from
[official Lucide source](https://github.com/lucide-icons/lucide) through a pinned local build snapshot; the
[generator guide](../../../../../../../tools/icons/README.md) documents synchronization.

Preferences use the versioned `blocks.icon-catalog.v1` local-storage record. Restore validates dimensions, stroke bounds, and current category identifiers;
malformed/unknown values fall back safely. Older records containing multiple categories restore only the first valid generated category. Writes are debounced
for 200 ms and flushed on navigation or page exit. Reset updates storage immediately. Storage denial and server rendering are supported without throwing. Search
and derived result lists are not persisted.

## Appearance and customization

Filters and Details use the shared side-panel/modal-banner heading styles, themed leading icons through `headerIcon`, and the same compact close action.

All controls use Blocks components/directives and semantic spacing, color, border, radius, and responsive grid styling. Colors remain theme tokens rather than
fixed RGB values. Background customization uses the supported `bgColor="auto"` icon API. Code omits default size/stroke properties and background when turned
off.

The catalogs use a constrained main-content viewport below the toolbar's natural-height row. SidePanelLayout contains both panels, excluding global navigation
and the toolbar without offsets or document-scroll tracking. Filters uses `{ '2xl': 'push' }`: larger screens reserve panel space and resize the virtual grid;
smaller screens use overlay mode. Details keeps its default overlay presentation. Each panel's breakpoint policy is independently configurable. Mode changes
retain the panel and its projected controls. The body scrolls independently from reachable fixed header/footer actions, including at narrow viewport widths.

## Behavior and accessibility

The catalog initially reveals 72 icons, appending bounded batches near the bottom. VirtualCollection independently mounts a measured row window with 800-pixel
overscan, unmounts distant tiles in either direction, and restores them on return. Changing size invalidates row geometry with stable scroll anchoring; changing
stroke width updates only mounted SVGs. Grid columns recalculate when push panels, viewport widths, or zoom change. Local underfill checks continue only until
the finite result set fills the viewport or is exhausted. Search/category changes reset the reveal count, stable names track tiles, and append operations
preserve scroll position. A Show more button gives keyboard users an explicit route to the next batch. Empty results and result counts use status announcements.

Search matches case-insensitive partial words in any order, treating spaces, hyphens, and underscores as separators. For example, `arrow down`, `down arrow`,
and `arrow-down` find `arrow-down`; this follows the Tokens catalog's word-matching behavior.

A single active-panel signal coordinates Filters and Details. Closing preserves filter and inspector settings; tile highlighting is shown only while Details is
open. Panels use complementary region semantics, optional focus restoration, a close control, and Escape dismissal; the page remains interactive without focus
trapping, scroll locking, or modal semantics. Existing Blocks controls provide labeled keyboard-accessible sliders and selections. Setting information tooltips
support focus, hover, and touch tap.

Scroll to catalog top appears after scrolling 400 pixels past the start of the results in the actual scroll viewport, staying hidden while reading the
documentation above the catalog. Its threshold follows documentation expansion and viewport changes. It uses a Blocks tooltip without touch long-press and
respects shared reduced-motion preferences. It is aligned to the grid's actual horizontal bounds inside its positioned viewport. It remains visible beside push
panels and is hidden while an overlay panel is open to keep actions clear. Activation returns to the start of the results, leaving documentation above the
viewport. The Tokens catalog uses the same action; Utilities no longer renders it.

## Playground

Open `/icons` from Tools. Related interactive infrastructure demos are `/components/side-panel`, `/components/infinite-scroll`, and `/utilities`.
