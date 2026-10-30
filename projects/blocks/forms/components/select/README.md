# Select

A typed single-value control with searchable, grouped options and remote pagination.

## Import

```ts
import { Select, IBxSelectOption } from '@filip.mazev/blocks/forms';
```

## Usage

```html
<bx-select label="Workspace" [options]="options()" [formField]="account.workspace"
  [isSearchable]="true" [externalFiltering]="true"
  [loading]="loading()" [hasMore]="hasMore()" [loadError]="loadError()"
  [loadMoreConfig]="paginationAppearance" (search)="search($event)" (loadMore)="loadNext($event)" />
```

## API

Supports Signal Forms, Reactive Forms, Template-driven Forms, and standalone `[(value)]`. Existing `[formControl]` and `formControlName` bindings remain available. `BxSelectOption` remains as a compatibility alias for `IBxSelectOption`.

Options provide `label`, `value`, optional `disabled`, `icon`, `group` and `groupDisabled`. Labels and group headings accept translation keys. `compareWith(a, b)` defaults to `Object.is`; supply a comparator for object values. Selected labels are retained when filtering replaces the visible results. `searchValue` is a string model: the term and matching results persist together across panel close/reopen. Bind it when application code needs to clear or replace a query.

`isSearchable`, `externalFiltering`, `searchPlaceholder`, `searchDebounce`, and `emptyMessage` configure search. `search` emits debounced terms; external filtering leaves request cancellation and results ownership with the application. `loadingLabel` names loading feedback.

`optionTemplate` receives `$implicit` (option), `selected`, and `index`. `triggerTemplate` receives `$implicit` (form value) and resolved `labels`. `panelClass` customizes the panel. `--bx-select-panel-background`, `--bx-select-panel-border`, and `--bx-select-panel-shadow` customize the opaque surface, contrast and elevation independently from the form container. `--bx-select-panel-height` changes the maximum panel height, which is also constrained to the viewport.

`selectionChange` emits `{ value, source: 'user' }`. `openedChange` reports panel state. `open()`, `close()`, and `toggleOpen()` control the panel. Readonly state prevents value changes without changing the form's disabled state.

## Pagination

`hasMore`, `loading`, `loadError`, `loadMoreConfig`, and `loadMoreTemplate` feed the shared [load-more directive](../../directives/load-more/README.md). `loadMore` distinguishes scroll, button and retry requests. Append pages rather than replacing previously loaded items during ordinary pagination. Retain items and the failed cursor on error.

Small result pages expose a bottom-left action when no item scrollbar exists. A visible action stays present while loading. Errors show an explicit retry even with overflow. Applications need not know the viewport size or reproduce fallback behavior.

## Behavior and accessibility

Arrow keys, Home/End, typeahead, Enter/Space, Escape, Alt+ArrowUp and Tab support panel interaction. Focus returns appropriately when the panel closes. Field error/hint descriptions and invalid/required states are connected automatically.

Panels retain the shared overlay positioning, theme inheritance and top-layer context behavior. Provide `BX_OVERLAY_CONTEXT` through the existing overlay-context directive for custom top-layer containers.

## Appearance and accessibility

Uses Blocks semantic tokens and the active `ThemingService` configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and `BxA11yService` reduced-motion preferences remain supported.

Text inputs accept `ResolvableText`: plain text or `{ key: 'translation.key' }`. With `BX_I18N`, text is resolved reactively, including already-mounted controls when the adapter's `version` signal changes. Plain text works without an adapter.

## Playground

Open `/components/select` for mock pagination, external filtering, loading, failed requests and retry. Switch page sizes to exercise the scroll and fallback-action states.

## Busy presentation

The trigger replaces its caret with a same-size spinner, preserving width. When a visible load-more or retry button starts a request, that button stays mounted and shows its own spinner. The panel uses a row-aligned loading indicator only when no footer button is visible; the two loading presentations are mutually exclusive.

## Tags and search feedback

`selectionDisplay="tags"` renders the selected value through the standalone Blocks `Tag` component. `tagConfig` controls common appearance and `option.tagConfig` provides per-option overrides. See the [tag guide](../../../primitives/components/tag/README.md).

Clipped tag labels automatically expose their full text in a tooltip; fitting labels do not. Explicit option/tag tooltip descriptions retain their existing behavior. The parent combobox supplies keyboard access to the complete selection without adding nested tab stops. Labels and plain values also use the shared truncation directive. Set `[tooltipOnTruncate]="false"` to disable automatic truncation tooltips, including ordinary selected tags, while retaining ellipsis and custom templates. Per-tag configuration can disable the tag tooltip when the owner is enabled. The component inherits the shared `FormSettingsService` default.

While searching (including debounce and the external request), old results and load-more actions are suppressed. `loadingLabel` provides centered loading text; without it, the panel displays a simple centered spinner named by `loadingAriaLabel`. Pagination becomes available for the filtered result set after the request completes.

## Option spacing

Rounded option rows have a small gap, shared by select and multiselect. Set `--bx-select-option-gap` on the control to customize it (default: Blocks `spacing(1)`). All built-in selection and caret icons use Blocks `Icon`; searching uses Blocks `SearchInput`.

## Clearing selection

A Blocks × icon button appears before the dropdown/loading indicator, with equal spacing between the action and the selected text/tags and between the two icons, when a selection exists. Its reserved space prevents overlap with selected text or tags. Set `[clearable]="false"` to hide it, or use `clearLabel` (`ResolvableText`, default `'Clear selection'`) to customize its accessible name. `clearTooltip` accepts its own `ResolvableText`, defaults to the resolved `clearLabel` when omitted, and can be set to an empty string to hide the tooltip.

`clearSelection()` performs the same guarded action programmatically. Clearing closes the panel, marks the control touched and returns focus to the combobox; it preserves Angular's blur/submit update policy. The action is hidden while readonly and disabled when the control is disabled. Keyboard users can Tab to the action and activate it with Enter or Space.

Clearing writes `null` and emits `selectionChange` with `{ value: null, source: 'clear' }`. Required controls report validation through the existing error policy.

```html
<bx-select [options]="locations" [clearLabel]="{ key: 'locations.clearAction' }"
  [clearTooltip]="{ key: 'locations.clearTooltip' }" />
```

Use `[clearable]="false"` for required selections that must retain a value or for lists with an explicit “None” option. This input controls the clear action independently of validation; `required` continues to enforce form validity. The select/multiselect playground includes an “Allow clearing selection” switch; configuration controls such as page size deliberately hide the clear action.

```html
<bx-select [options]="options" [clearable]="false" />
```
