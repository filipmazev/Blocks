# Load more

Shared incremental loading for a scroll container. The directive appends a footer at the bottom-left, inside the container's padding. Use it for paginated option panels and future data tables or lists; attach it to their scroll wrapper rather than a native `table`, `tbody`, `ul` or `select` element.

## Import

```ts
import { LoadMoreDirective, ILoadMoreRequest, ILoadMoreConfig } from '@filip.mazev/blocks/forms';
```

## Usage

```html
<div bxLoadMore #pager="bxLoadMore" role="region" aria-label="Workspaces" tabindex="0"
  [loadMoreHasMore]="hasMore()"
  [loadMoreLoading]="loading()"
  [loadMoreError]="loadError()"
  [loadMoreRevision]="items()"
  [loadMoreConfig]="paginationAppearance"
  (loadMore)="loadNext($event)">
  @for (item of items(); track item.id) { <div>{{ item.name }}</div> }
</div>
```

Give the wrapper a constrained maximum height and `overflow: auto`. Applications own API calls, cursors, cancellation and data accumulation. The directive never fetches data itself.

## API

- `loadMoreHasMore`: whether another page exists; defaults to false.
- `loadMoreLoading`: application request state; defaults to false.
- `loadMoreError`: optional text or translation key describing a failed request. Failure reveals a retry action even when the container overflows. Without a resolved retry label, it uses a retry icon with the supplied load-more text.
- `loadMoreSuppressed`: temporarily hides the footer and blocks page requests, for example during a search request.
- `loadMoreDisabled`: blocks requests without removing content.
- `loadMoreRevision`: pass the items array or a page revision to acknowledge new data.
- `loadMoreConfig`: `ILoadMoreConfig` controls action text, busy/retry text, accessible label, button variant/color/outline, custom button/footer classes, scroll threshold and `buttonMode` (`auto` or `always`).
- `loadMoreTemplate`: optional `TemplateRef<ILoadMoreContext>` for a custom action. Its context includes the resolved label (`$implicit`), `loading`, `disabled`, and guarded `request()` callback.
- `loadMore`: emits `{ source: 'scroll' | 'button' | 'retry' }`.
- `complete()`: acknowledges completion when no loading-state cycle or items revision is available.
- `actionVisible()`: indicates whether the footer action is visible, allowing an owning component to avoid rendering a second loading indicator.
- `request(source?)`: invokes the same request guard from application code.

## Loading, failure and retry

Set loading before starting the promise. Append data only on success. On failure retain the previous data and page/cursor, set `loadMoreError`, and clear loading in `finally`. Retry the same page; advance its cursor only after success. Clear the error when a retry begins.

The button shows its loading spinner and becomes disabled while loading. A button visible before a request stays visible during it, including when newly appended items create overflow. The error and retry remain reachable after failure, and scroll events cannot automatically retry a failing request. Request guards prevent duplicates until a loading cycle completes, the revision changes, or `complete()` is called.

When more data exists without usable item overflow, auto mode displays the footer action. Container resizing, viewport/zoom resizing, and data changes re-evaluate overflow. The footer itself does not count as item overflow, preventing show/hide oscillation. Always mode retains an explicit action even with a scrollbar. There is no automatic fetch loop to fill the viewport.

## Custom action

```html
<ng-template #customAction let-label let-loading="loading" let-disabled="disabled" let-request="request">
  <button bx-button type="button" variant="tonal" color="accent"
    [loading]="loading" [disabled]="disabled" (click)="request()">{{ label }}</button>
</ng-template>
```

Pass the template through `loadMoreTemplate`. Keep the action keyboard-accessible and represent its busy/disabled states. `--bx-load-more-padding` changes footer padding; the default has no additional horizontal inset. Button classes and semantic theme variables customize appearance without DOM access.

## Appearance and accessibility

Uses Blocks semantic tokens and the active `ThemingService` configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and `BxA11yService` reduced-motion preferences remain supported.

Text inputs accept `ResolvableText`: plain text or `{ key: 'translation.key' }`. With `BX_I18N`, text is resolved reactively, including already-mounted controls when the adapter's `version` signal changes. Plain text works without an adapter.

## Playground

Open `/components/load-more`. Fake API requests take 800ms. Use small pages for the no-scrollbar action, **Fail next page now** for a failed request, then **Retry request**. The event log distinguishes loading, failed, retry and successful states.
