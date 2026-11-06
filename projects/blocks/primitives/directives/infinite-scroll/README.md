# Infinite scroll detection

`InfiniteScrollDirective` detects the bottom boundary of arbitrary scrollable elements. It emits a guarded event without owning data, requests, pagination,
loading indicators, retry actions, or exhaustion. Use it for bounded local progressive rendering; use Forms' shared load-more orchestration for remote paging.

## Import

```typescript
import { InfiniteScrollDirective } from '@filip.mazev/blocks/primitives';
```

Add the standalone directive to the consuming component's imports.

## Usage

```html
<div
    bxInfiniteScroll
    class="results"
    [infiniteScrollThreshold]="128"
    [infiniteScrollDisabled]="!hasMore()"
    [infiniteScrollLoading]="loading()"
    [infiniteScrollRevision]="items()"
    (scrollEnd)="requestNextPage()">
    @for (item of items(); track item.id) {
    <div>{{ item.label }}</div>
    }
</div>
```

Give the wrapper a constrained height and `overflow: auto`. The owner sets loading before starting its promise, appends successful results, and disables the
detector when exhausted. The directive does not assume an HTTP service or cursor format. Pass the new items reference through `infiniteScrollRevision`, or call
`complete()` when completion has no loading cycle or revision change.

For content scrolled by an ancestor, bind that element to `infiniteScrollContainer`. `findScrollContainer(element)` finds a vertical scrolling ancestor or falls
back to the document scrolling element. The host's bottom remains the observed boundary, so unrelated content after the host does not delay rendering.

For finite, locally available data, enable `infiniteScrollCheckOnRender`. Initial rendering, appended content, and resizing then recheck the boundary. Append a
bounded batch on each event and disable when the local dataset is exhausted. This fills an initially short viewport without polling. Leave this option false for
remote data to prevent uncontrolled requests; the [load-more directive](../../../forms/directives/load-more/README.md) provides its reachable fallback and
explicit retry action.

## API

| Member                        | Default     | Behavior                                                                         |
| ----------------------------- | ----------- | -------------------------------------------------------------------------------- |
| `infiniteScrollContainer`     | Host        | Optional actual scroll viewport, including a document scrolling element          |
| `infiniteScrollThreshold`     | `128`       | Distance from the end in CSS pixels                                              |
| `infiniteScrollDisabled`      | `false`     | Suppresses events; owner decides exhaustion                                      |
| `infiniteScrollLoading`       | `false`     | Suppresses events during owner-controlled loading                                |
| `infiniteScrollRevision`      | `undefined` | New items reference or revision acknowledges the previous event                  |
| `infiniteScrollCheckOnRender` | `false`     | Also checks initial/render/content/resize changes; opt in for bounded local data |
| `infiniteScrollEndOffset`     | `0`         | Excludes an owner-controlled footer height from measurement                      |
| `overflowing()`               | Measured    | Read-only overflow state, independent of event suppression                       |
| `scrollEnd`                   | Event       | One boundary event until completion or leaving and reentering the boundary       |
| `complete()`                  | Method      | Acknowledges completion without initiating another event                         |

`measureScrollBoundary(content, container?, endOffset?)` returns the distance, overflow, and viewport height in `IScrollBoundary`.
`observeScrollBoundary(content, container, onScroll, onResize)` installs disposable passive events and geometry observers. Both the directive and Forms'
`LoadMoreDirective` use these helpers; Select and Multiselect continue sharing the same request guards, retry, loading, and fallback orchestration.

[VirtualCollection](../../components/virtual-collection/README.md) independently bounds the mounted DOM in both scroll directions. Give it the revealed items
and the actual scroll container; its placeholders preserve the scroll extent observed by this detector. Detection, virtual rendering, and remote orchestration
remain separate contracts.

## Appearance and customization

The detector creates no DOM and supplies no presentation. Render normal, empty, loading, and error states with Blocks components and semantic tokens in the
owner. Footer offsets allow a separate orchestration layer to exclude its action without tying detection to a particular UI.

## Behavior and accessibility

Scroll handling and measurements run outside Angular, with frame-coalesced detector events and change detection only when state changes or an event emits.
Observers reconnect for a different container, track appended and removed children, and disconnect on destruction. Browser work starts after rendering, so
server rendering does not access browser observers.

Appending preserves scroll position. Owners should use stable tracking keys, announce relevant asynchronous changes, retain existing items on failure, and
provide keyboard-accessible load/retry actions. The detector never retries errors or infers that the loaded page is the complete remote result set.

## Playground

Open `/components/infinite-scroll` or the scrolling example on `/utilities`. Adjust the batch size and container height to exercise local underfill and overflow
transitions. The asynchronous example demonstrates 800 ms requests, retained results after failure, and explicit retry through success.
