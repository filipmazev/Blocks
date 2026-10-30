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

## Option spacing

Rounded option rows have a small gap, shared by select and multiselect. Set `--bx-select-option-gap` on the control to customize it (default: Blocks `spacing(1)`). All built-in selection and caret icons use Blocks `Icon`; searching uses Blocks `SearchInput`.

Option and select-all checkboxes reuse the public `CheckboxIndicator` component, including its indeterminate state and themed finish. The option button remains the interactive target. `--bx-checkbox-size` customizes indicator dimensions without changing keyboard behavior.

The select-all checkbox also shows checked when every selectable loaded row is individually selected, including deselecting and reselecting the last missing row. Disabled rows and disabled groups do not contribute to this state. Clicking a checked header clears the eligible loaded rows. This finite visual state does not activate remote select-all intent: future pages remain unselected unless the explicit select-all action enabled intent.

## Clearing selection

A Blocks × icon button appears before the dropdown/loading indicator, with equal spacing between the action and the selected text/tags and between the two icons, when a selection exists. Its reserved space prevents overlap with selected text or tags. Set `[clearable]="false"` to hide it, or use `clearLabel` (`ResolvableText`, default `'Clear selection'`) to customize its accessible name. `clearTooltip` accepts its own `ResolvableText`, defaults to the resolved `clearLabel` when omitted, and can be set to an empty string to hide the tooltip.

`clearSelection()` performs the same guarded action programmatically. Clearing closes the panel, marks the control touched and returns focus to the combobox; it preserves Angular's blur/submit update policy. The action is hidden while readonly and disabled when the control is disabled. Keyboard users can Tab to the action and activate it with Enter or Space.

Clearing writes `[]`, disables future-page select-all intent and emits `selectionChange` with `{ value: [], source: 'clear' }`. If intent was enabled, `selectAllIntentChange` also emits with `selected: false` and `reason: 'clear'`. Required controls continue to use the existing validation policy.

```html
<bx-multi-select [options]="locations" [clearLabel]="{ key: 'locations.clearAction' }"
  [clearTooltip]="{ key: 'locations.clearTooltip' }" />
```

Use `[clearable]="false"` for required selections that must retain a value or for lists with an explicit “None” option. This input controls the clear action independently of validation; `required` continues to enforce form validity. The select/multiselect playground includes an “Allow clearing selection” switch; configuration controls such as page size deliberately hide the clear action.

```html
<bx-multi-select [options]="options" [clearable]="false" />
```

## Select-all tooltip

`allSelectedTooltip` accepts the tooltip text for active `selectAll` intent, including the trigger's keyboard tooltip and the “all selected” tag's hover/touch tooltip. Pass `false` or an empty string to disable both. This also prevents the tag's automatic clipped-label tooltip or `tagConfig.tooltip` from replacing disabled feedback. Ordinary finite selections keep their existing tooltip behavior when intent ends.

Omitting the input preserves the list of loaded selected labels, subject to `tooltipOnTruncate`. Those labels describe only loaded items. For remote “ALL” selection, disable that feedback or supply application-owned text representing the full selectable scope:

```html
<bx-multi-select [options]="loadedLocations" [(value)]="selected" [(selectAll)]="allSelected"
  allSelectedText="All locations" [allSelectedTooltip]="false" />

<bx-multi-select [options]="loadedLocations" [(value)]="selected" [(selectAll)]="allSelected"
  allSelectedText="All locations" [allSelectedTooltip]="allLocationsTooltip()" />
```

Compute `allLocationsTooltip` in the application using its API's total of selectable results. For example, return `'All ' + pagination.selectableTotal + ' locations'` or call the application's translation service with the total. Exclude disabled options and disabled groups across the whole result set, including unloaded pages. Do not subtract only the disabled items on the current page or substitute the loaded selected count for a remote total. If the API does not provide enough information, disable the tooltip or use a general description such as “All matching locations”.

The component accepts `ResolvableText`, so simple translation keys also work and react to `BX_I18N` version changes. Interpolation, pluralization, total calculation and any more complex translation logic belong to the application; the component has no tooltip-parameters or pagination-total API. Updating the supplied text refreshes mounted tooltips. Explicit custom tooltips work independently of automatic `tooltipOnTruncate` feedback; `false` disables only select-all feedback.

The playground defaults to application-formatted text using the fake API's `selectableTotal`: 23 selectable locations across 24 results, excluding disabled Vienna even before its page loads. The total follows search scope. **Select-all tooltip** also demonstrates custom finished text, disabled feedback and the optional loaded-label compatibility behavior, in text and tag display.
