# Editable autocomplete

An editable string control with optional suggestions. Free text remains valid; choosing a suggestion inserts its value. Integrates with the shared form-field
and signal, reactive and template-driven forms contracts.

## Public import

```typescript
import { Autocomplete } from '@filip.mazev/blocks/forms';
```

## Usage

```html
<bx-autocomplete label="Destination" [options]="suggestions" [(value)]="destination" />
```

## API

`value` is a `string | null` model. `options` accepts `readonly IAutocompleteOption[]`, each with a unique string `value`, optional `ResolvableText label` and
optional `disabled`.

| API                                 | Default          | Behavior                                                                                                             |
| ----------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| `externalFiltering`                 | false            | Application supplies filtered results                                                                                |
| `inlineCompletion`                  | true             | Shows an uncommitted gray suffix for the first matching suggestion                                                   |
| `clearable`                         | true             | Shows the select-style clear action for nonempty text; hidden while readonly                                         |
| `clearLabel`                        | Clear selection  | Translated accessible name of the clear action                                                                       |
| `clearTooltip`                      | clearLabel       | Optional translated tooltip; empty string disables it                                                                |
| `searching`                         | false            | Replaces stale results with a distinct loading state                                                                 |
| `loading`                           | false            | Application-owned initial/incremental request state                                                                  |
| `hasMore`                           | false            | Explicit remote exhaustion contract                                                                                  |
| `loadError`                         | absent           | Retains options and offers explicit retry                                                                            |
| `loadMoreConfig / loadMoreTemplate` | {} / absent      | Shared `ILoadMoreConfig` and `ILoadMoreContext`                                                                      |
| `loadMoreRevision`                  | options array    | Override the request-completion revision                                                                             |
| `optionTemplate`                    | absent           | `TemplateRef<IAutocompleteOptionContext>`; keep its content noninteractive                                           |
| `emptyText / loadingText`           | descriptive text | Translatable status messages                                                                                         |
| `autocomplete`                      | off              | Native browser autocomplete attribute                                                                                |
| `queryChange`                       | —                | Text edits; application owns debounce and cancellation                                                               |
| `optionSelected`                    | —                | Selected `IAutocompleteOption`                                                                                       |
| `loadMore`                          | —                | `ILoadMoreRequest` with scroll, button or retry source                                                               |
| `openedChange`                      | —                | Boolean panel state changes                                                                                          |
| `open() / close() / isOpen()`       | —                | Public panel controls                                                                                                |
| `completeLoadMore()`                | —                | Releases a request with no loading cycle or revision change                                                          |
| `clear()`                           | —                | Clears text, marks touched, focuses the input and emits queryChange with an empty string; respects disabled/readonly |

Inherits labels, placeholders, hints, validation, disabled, lowercase `readonly` and consumer `readOnly`, focus and reset behavior. See the
[forms guide](../../README.md).

For a standalone component, import `Autocomplete` and declare:

```typescript
public destination: string | null = '';
public readonly suggestions: readonly IAutocompleteOption[] = [
  { value: 'Skopje' }, { value: 'Ohrid' }, { value: 'Unavailable', disabled: true }
];
```

Import `IAutocompleteOption` from the forms public entry point.

## Appearance and customization

Dropdown backing uses the classic blur and tint with 18 percentage points of extra opacity (about 63.6% at the default appearance). It does not use SVG
refraction. `--bx-dropdown-opacity` overrides the backing; shared opaque and accessibility preferences remain authoritative.

Dropdowns share the Blocks glass material. `--bx-dropdown-opacity` overrides the active material opacity; `--bx-dropdown-min-opacity` sets its minimum (default
`0`). Omit both to follow the theme. Shared opaque appearance, reduced transparency and forced-color fallbacks remain authoritative.

`--bx-autocomplete-panel-height`, `--bx-autocomplete-panel-padding`, `--bx-autocomplete-background`, `--bx-autocomplete-radius` and
`--bx-autocomplete-completion-color`. The editable control reuses InputField's styling, including its height, typography, spacing, floating label, required
marker, focus state and filled/outlined appearance. Its inline completion shares the native input's metrics. Results use the same translucent Blocks material as
Select/MultiSelect and date/time pickers, with shared opaque and reduced-transparency fallbacks. Options wrap, panel width follows the control, and height is
constrained to the viewport. Custom option templates receive the option, resolved label, active state and index.

## Behavior and accessibility

Typing `Sk` can show a muted `opje` suffix for `Skopje`, without changing the form value. The hint appears only with the caret at the end, no selection, and an
available prefix match; it is hidden during replacement searches and IME composition. Accept it with the forward arrow (Right in LTR, Left in RTL), End or
Enter. The full selected suggestion becomes the value only on acceptance. Set `inlineCompletion` to false to use list suggestions alone.

Up/Down move between available suggestions while focus stays in the combobox; Enter selects; Escape closes. Other native editing keys retain their meaning. IME
composition does not issue partial searches. Tab visits the clear action when present, then the shared load-more/retry action, before continuing through the
page. Readonly preserves readable, focusable text and prevents editing.

The clear action reuses the shared field-clear appearance used by Select/MultiSelect. It remains disabled on disabled controls and is absent on readonly
controls. Clearing keeps focus in the editable input and lets the application refresh suggestions for the empty query. The trailing Blocks `chevron-down`
follows the open state and is replaced by a same-size decorative spinner during requests. Caret dimensions and gaps share Select's field-caret mixin; trailing
padding, clear-action placement and available text spacing match Select while preserving InputField's full height and vertical text padding.

For asynchronous results bind `[externalFiltering]="true"`, `[searching]="searching()"`, `[loading]="loading()"`, `[hasMore]="hasMore()"`,
`[loadError]="error()"`, handle `(queryChange)` and forward `(loadMore)` to your request coordinator. Set loading before starting requests. Cancel or ignore
stale queries; retain loaded data and the failed cursor on failure; advance the cursor only on success. Clear errors when retrying. Searching suppresses old
results and pagination without implying exhaustion.

The shared LoadMoreDirective deduplicates requests, exposes an action when no scrollbar exists and preserves its button spinner during loading. Customize
normal/loading/retry text through `ILoadMoreConfig`; custom footer templates must use the guarded callback and preserve keyboard access.

The open suggestion panel holds its own `ScrollLockService` lock, so page scrolling is frozen while suggestions are presented without releasing a surrounding
dialog, drawer or navigation lock.

The playground includes a runnable mock service with delayed initial/search/incremental requests, failure followed by explicit successful retry, empty results
and a compact page-size control for exercising overflow transitions. Its load-more/error/retry footer shares the select/multi-select styling, with tonal accent
actions. Source: `projects/playground/src/app/components/screens/library-components/essentials-examples/services/autocomplete-demo.service.ts`.

### Motion and material response

Suggestions use the shared overlay opacity/scale spring and a persistent surface following the active descendant or hovered enabled option. Typing and keyboard
navigation retain their existing focus and selection contracts. Closing immediately reports the closed state, makes the old panel inert, and releases it after
exit; reopening or destruction cancels stale completion. Reduced motion closes immediately. Async filtering and pagination remain application-owned. Inspect
`/components/autocomplete` with rapid edits, keyboard selection, pending results, and `/appearance` settings.

## Playground

`/components/autocomplete` includes live examples and shared appearance controls.
