# Multiselect

Checkbox-style multiple selection with remote pagination and explicit select-all intent.

## Import

```ts
import { MultiSelect, IBxSelectOption, ISelectAllChange } from '@filip.mazev/blocks/forms';
```

## Usage

```html
<bx-multi-select label="Workspaces" [options]="options()" [formField]="account.workspaces"
  [loading]="loading()" [hasMore]="hasMore()" [loadError]="loadError()"
  [isSearchable]="true" [externalFiltering]="true" [selectionScope]="query()"
  (search)="search($event)" (loadMore)="loadNext($event)"
  (selectAllIntentChange)="handleSelectAll($event)" />
```

## API

Shares single-select options, comparison, templates, field presentation and pagination inputs. Bind `[formField]`, `[formControl]`, `formControlName`, `[(ngModel)]`, or standalone `[(value)]`. Form models should initialize the field with `[]`.

`showSelectAll` defaults to true. `selectAllLabel` is translatable. `selectAll` is a boolean model for intent; `selectAllChange` is its boolean model event. `selectAllIntentChange` emits the detailed `ISelectAllChange<T>` with selected intent, scope, loaded values and reason. `selectionScope` defaults to the current search term.

`selectionChange` emits `{ value, source }`; sources distinguish `user`, `select-all`, and automatic `page` selection. Standard value changes remain available through the chosen Angular form API or `valueChange`.

## Select-all semantics

Enabling select all selects eligible loaded options. Future eligible options in the same scope are selected as pages arrive. Disabled options and disabled groups are excluded.

Unchecking an option disables select-all intent, removes only that value, retains other selections, and emits an `item-deselected` intent event. Future pages are no longer automatically selected. Explicitly turning select all off removes eligible current-scope selections while retaining unrelated selections.

A scope change ends select-all intent and emits `scope-change`, retaining explicit selections. Reset clears intent and emits `reset`. Loaded selected values are finite: the application uses intent plus scope when an API needs to select the entire remote result set. Do not send the loaded array as if it enumerated every remote record.

## Behavior

The panel stays open while selecting. Arrow keys, Home/End, typeahead, Enter/Space, Escape and Tab support keyboard interaction. Visual checkboxes are non-interactive indicators inside listbox options, avoiding nested checkbox focus targets. `compareWith` supports stable object-value identity across API responses.

Pagination and failure/retry use the shared [load-more directive](../../directives/load-more/README.md). Existing items stay visible during incremental requests and after failed pages. The application owns request cancellation and page/cursor state.

## Appearance and accessibility

Uses Blocks semantic tokens and the active `ThemingService` configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and `BxA11yService` reduced-motion preferences remain supported.

Text inputs accept `ResolvableText`: plain text or `{ key: 'translation.key' }`. With `BX_I18N`, text is resolved reactively, including already-mounted controls when the adapter's `version` signal changes. Plain text works without an adapter.

## Playground

Open `/components/multi-select`. Enable select all, load another page, deselect one item and load again. Selection and intent events are shown separately. The page includes fake requests, failure/retry, page-size controls and live translation changes.

## Selected-value summaries

`allSelectedText` replaces the listed values while select-all intent is enabled, for example `All locations` or `{ key: 'locations.all' }`. This is separate from `selectAllLabel`, which names the select-all action inside the panel.

`summaryThreshold` defaults to 2 and is clamped to a minimum of 2. More selections than the threshold use `selectedCountText`, whose default is `{count} selected`. Supply `{count} locations selected` or a translation key; the translation adapter receives `{ count }`.

When at least two selected labels cannot fit the available width, the count summary is also used below the configured threshold. A tooltip on hover, keyboard focus, or touch-and-hold exposes the full loaded selection. A custom `triggerTemplate` remains available for completely custom presentation.

The searchable playground includes 24 locations, tag-display controls and a summary-threshold control next to the page-size selector. Search terms remain visible and consistent with their results after closing and reopening the panel. The trigger's caret slot displays busy state without changing its dimensions.

## Tags

Set `selectionDisplay="tags"` to use the separate Blocks `Tag` component for selected values. `visibleTagCount` defaults to one; additional selections are represented by `tagOverflowText` (`+{count}` by default) with a tooltip listing their names. Customize ordinary tags with `tagConfig`, individual options with `option.tagConfig`, and the overflow tag with `overflowTagConfig`. Embedded tags have no separate tab stop; the combobox supplies the full selection description for keyboard access. `allSelectedText` remains the caption when select-all intent is active.

An ordinary tag automatically shows its full label on hover or touch-and-hold only when that label is clipped. Explicit tooltip descriptions and overflow-tag lists remain available independently of clipping. The combobox retains the complete selection tooltip for keyboard users, including a single clipped tag. In tag mode, touch tooltips belong to the tags so they do not overlap a parent tooltip. Labels, plain values, and the full-selection fit test all reuse `TruncateDirective`. `[tooltipOnTruncate]="false"` disables automatic selection/truncation tooltips while preserving clipping, summary behavior, and explicit overflow-tag descriptions. This setting inherits `FormSettingsService` defaults and also suppresses automatic tooltips on ordinary embedded tags.

## Search loading

The debounce/request period hides pagination actions and old results. Provide `loadingLabel` for centered loading text; without it, a simple centered spinner is shown. `loadingAriaLabel` supplies a translatable accessible name. Once results arrive, filtered pages can be paginated normally.
