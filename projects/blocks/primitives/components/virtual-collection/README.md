# Virtual collection

`VirtualCollection<T>` renders a bidirectional sliding window of measured rows. Responsive grids and vertical lists retain their scroll extent with spacers
while unmounting distant content. It is separate from scroll-end detection, progressive reveal counts, and asynchronous load-more orchestration.

## Import

```typescript
import { VirtualCollection, VirtualItemDirective, type IVirtualCollectionConfig, type VirtualTrackBy } from '@filip.mazev/blocks/primitives';
```

Import the standalone component and item-template directive.

## Usage

```typescript
protected readonly itemKey: VirtualTrackBy<Workspace> = (item) => item.id;
protected readonly virtualConfig: IVirtualCollectionConfig = {
    layout: 'grid',
    minColumnWidth: '12rem',
    estimatedRowHeight: 180,
    overscan: 800
};
```

```html
<div #viewport class="results-viewport" tabindex="0" role="region" aria-label="Workspaces">
    <bx-virtual-collection #collection [items]="items()" [trackBy]="itemKey" [config]="virtualConfig" [scrollContainer]="viewport">
        <ng-template [bxVirtualItem]="collection" let-item let-index="index">
            <bx-card [title]="item.name" [surfaceEffects]="false">
                <button bx-button type="button" (click)="select(item)">Open workspace {{ index + 1 }}</button>
            </bx-card>
        </ng-template>
    </bx-virtual-collection>
</div>
```

Constrain `.results-viewport` with a height and `overflow: auto`; set `overflow-anchor: none` so the collection owns scroll correction. The component can also
observe a scrolling ancestor or the document when `scrollContainer` is omitted. Use stable unique keys, immutable item arrays, and application-owned selection
and expanded/edit state. An unmounted item's component-local state is recreated when it returns.

For progressive loading, pass the supplied/revealed item prefix, and put `bxInfiniteScroll` or `bxLoadMore` on the actual scroll wrapper. Append data through
the owner. The virtual component never fetches, retries, infers exhaustion, or changes the supplied data. A future table can use list mode with
application-owned row templates, `role="rowgroup"`, and `itemRole="row"`; table semantics, headers, pagination, and selection remain the owner's responsibility.
Do not place its div-based rendering inside native elements with restricted children.

## API

| Member                            | Default      | Purpose                                                                     |
| --------------------------------- | ------------ | --------------------------------------------------------------------------- |
| `items`                           | `[]`         | Full supplied/revealed data, including temporarily unmounted items          |
| `trackBy`                         | Required     | `(item, index) => string \| number` stable unique identity                  |
| `config.layout`                   | `'list'`     | `'list'` or responsive row-based `'grid'`                                   |
| `config.estimatedRowHeight`       | `128`        | Positive CSS-pixel row-height estimate, excluding the row gap               |
| `config.overscan`                 | `800`        | Extra mounted pixels above and below the viewport                           |
| `config.minColumnWidth`           | `'7rem'`     | CSS length or pixel number used to resolve grid columns                     |
| `scrollContainer`                 | Discovered   | Actual element or document scroll viewport                                  |
| `measurementRevision`             | `undefined`  | Clear stale height estimates after size, density, or typography changes     |
| `itemRole`                        | `'listitem'` | Accessible role on each item wrapper                                        |
| `renderedRange()`                 | Measured     | Contiguous `{ start, end, columns }` range; end is exclusive                |
| `renderedItems()`                 | Measured     | Mounted data, including an independently pinned focused row                 |
| `scrollToIndex(index, behavior?)` | Method       | Scroll to a supplied item, clamping the index; pre-mount calls are deferred |
| `scrollToItem(key, behavior?)`    | Method       | Scroll to an existing supplied key; missing keys leave position unchanged   |
| `refreshMeasurements()`           | Method       | Imperatively clear heights while retaining the visible anchor               |

The typed `bxVirtualItem` context exposes `$implicit`, `index`, and `count`. Count describes supplied items rather than a complete remote result set.

## Appearance and customization

The component supplies geometry and semantics; projected content supplies presentation. Use Blocks components and semantic tokens. Set `--bx-virtual-row-gap`
and `--bx-virtual-column-gap`; both default to shared spacing 3. `minColumnWidth` accepts font-relative lengths. Grid columns are measured from CSS, so
constrained containers, push panels, browser zoom, and text scaling participate in the same layout.

## Behavior and accessibility

Rows use cached measured heights or the configured estimate. A shared `ResizeObserver` updates mounted rows, and a prefix-sum tree handles height updates and
offset lookups efficiently. Width/column changes and `measurementRevision` invalidate stale heights. Spacer changes apply scroll correction after rendering so
the first visible stable key remains anchored. Unknown distant heights remain estimates until visited; use a realistic estimate to minimize corrections.

Passive scroll events update the range synchronously, with pixel overscan in both directions. DOM size depends on viewport height, row sizes, columns, and
overscan rather than distance traveled. Far-offscreen collections can render only their placeholder extent. A focused row stays mounted independently without
rendering all rows between it and the viewport. Responsive regrouping restores the focused control within its stable item when available.

Item wrappers expose positions and counts, and interactive projected controls retain native focus and keyboard behavior. Label the actual viewport and provide
visible focus. Reduced-motion preferences override smooth programmatic scrolling. Observers and listeners disconnect on destruction; browser measurements start
after rendering. When `ResizeObserver` is unavailable, estimates still support windowed rendering, but dynamic height accuracy is limited.

## Playground

Open `/components/virtual-collection` for 3,000 variable-height items, list/grid selection, width and density controls, expandable content, mounted counts, and
programmatic scrolling. `/icons` and `/tokens` combine this component with progressive local rendering and ordinary search/group controls.
