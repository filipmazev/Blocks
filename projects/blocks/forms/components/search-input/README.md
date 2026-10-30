# Search input

A searchable text control with one clear action, request loading feedback, and an explicit retry action. Requests and results remain application-owned.

## Import

```ts
import { SearchInput } from '@filip.mazev/blocks/forms';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<bx-search-input label="Find a component" [formControl]="query" (search)="filter($event)" />
```

## API

The control uses Angular 22 native signal control contracts. Use `[formField]`, `[formControl]`, `formControlName`, `[(ngModel)]`, or standalone `[(value)]`. Shared presentation includes labels, hints, tooltips, required/readonly/disabled state, error policies and typed message resolvers. See the [forms guide](../../README.md) for validation, submission, translations and compatibility.

Search value/placeholder ellipsis uses the shared `TruncateDirective`; its native-input measurement accounts for the current font and inline padding. `[tooltipOnTruncate]="false"` disables automatic clipped-value tooltips while keeping ellipsis and measurement. The default inherits `FormSettingsService`, then true.

`search` emits the current string on input and clear. Public methods `clear()`, `focus()`, and `retrySearch()` support integration. `retrySearch()` emits `retry` only when a request error exists and the control is editable and idle.

| Input/output | Default | Behavior |
| --- | --- | --- |
| `loading` | `false` | Application-owned request state; replaces the search icon with the shared spinner. |
| `pending` | `false` | Form validation pending state; also shows busy feedback. |
| `loadError` | `undefined` | `ResolvableText` request failure, independent of form validation. Reveals retry immediately. |
| `loadingLabel` | `undefined` | Optional visible `ResolvableText` loading message. |
| `loadingAriaLabel` | `'Searching'` | `ResolvableText` announcement when no visible loading message is supplied. |
| `retryLabel` | `'Retry search'` | `ResolvableText` retry button text. Remains stable during loading. |
| `retryConfig` | `{}` | `ISearchRetryConfig`: optional accessible name, Blocks button variant/color, outline, and CSS classes. |
| `clearLabel` | `'Clear search'` | `ResolvableText` accessible clear action name. |
| `autocomplete` | `'off'` | Native search autocomplete. |
| `retry` | — | Emits the current query as a string when retry is requested. Does not also emit `search`. |

### Asynchronous requests

```html
<bx-search-input label="Find a component" [(value)]="query"
    [loading]="loading()" [loadError]="loadError()"
    loadingAriaLabel="Searching components" retryLabel="Try again"
    [retryConfig]="{ variant: 'tonal', color: 'accent' }"
    (search)="runSearch($event)" (retry)="runSearch($event)" />
```

For example, the application can coordinate a promise-returning API with cancellation:

```ts
private readonly destroyRef = inject(DestroyRef);
protected readonly query = signal<string | null>('');
protected readonly loading = signal(false);
protected readonly loadError = signal<string | undefined>(undefined);
protected readonly results = signal<readonly string[]>([]);
private request?: AbortController;

constructor() {
  this.destroyRef.onDestroy(() => this.request?.abort());
}

protected async runSearch(query: string): Promise<void> {
  this.request?.abort();
  const request = new AbortController();
  this.request = request;
  this.loading.set(true);
  this.loadError.set(undefined);

  try {
    const results = await this.api.search(query, request.signal);

    if (!request.signal.aborted) this.results.set(results);
  } catch {
    if (!request.signal.aborted) this.loadError.set('Search failed. Try again.');
  } finally {
    if (this.request === request) this.loading.set(false);
  }
}
```

Import `DestroyRef`, `inject`, and `signal` from `@angular/core`. Supply your application API's `search(query, signal): Promise<readonly string[]>`. Add debouncing in the application when useful, and mark loading from the start of that debounce. Keep the previous results during a replacement request or failure; replace them only when the latest request succeeds. A successful empty response is distinct from a failure. Set `loading` synchronously in the event handler and clear `loadError` when starting a new attempt. The component makes no requests and has no pagination behavior.

## Appearance

Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from `ThemingService`; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.

```ts
import { inject } from '@angular/core';
import { ThemingService } from '@filip.mazev/blocks/core';

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ glassiness: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ reducedTransparency: true });
```

`BxA11yService` controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.

The retry action uses the same Blocks `Button` and `LoadingSpinner` as select request feedback. Import `ISearchRetryConfig` from `@filip.mazev/blocks/forms` for typed presentation settings. Native browser search decorations are suppressed so only the named Blocks clear action appears. Set `--bx-search-feedback-gap` to customize the space between the field and its visible status message; it defaults to the shared spacing-2 token and applies equally to initial loading, errors, and retry loading.

## Behavior and accessibility

The output is immediate; debounce expensive network searches in the application. Keep a visible or accessible label instead of relying only on placeholder text.

Busy feedback sets `aria-busy`, uses a polite status announcement, and preserves the input's dimensions. Feedback uses a status row followed by the retry action. On retry, the error is replaced by `loadingLabel` or, when absent, `loadingAriaLabel` as visible searching text. The status row reserves space for both messages so wrapping at narrow widths or zoom does not move the button. The retry button stays mounted in the same position and disabled during its request, displaying its own spinner without a second input spinner. Retry focuses the input so successful completion keeps focus predictable. Loading allows further editing and clearing to cancel or replace a request. Disabled and readonly state prevent clear and retry actions. Readonly mode hides the clear button while keeping the text focusable and selectable. API failures are described by the input without marking the query invalid. Text inputs accept translation keys and update with the active `BX_I18N` language.

## Playground

Open `/components/search-input` for cancellable, debounced fake API requests, loading text, empty results, retained results on failure, retry through to success, and readonly/disabled controls. Enabling Show loading text starts a preview request so the message is immediately observable.
