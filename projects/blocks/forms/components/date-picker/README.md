# Date picker

`DatePicker` is a Forms control for single or multiple dates, date ranges, and whole weeks, months, quarters or years. It combines editable inputs, calendar
navigation, optional presets, restrictions and asynchronous availability using canonical date-only values.

## Import

```ts
import { DatePicker } from '@filip.mazev/blocks/forms';
import type { DatePickerValue, IsoDate } from '@filip.mazev/blocks/core';
```

## Usage

```ts
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import type { DatePickerValue } from '@filip.mazev/blocks/core';
import { DatePicker } from '@filip.mazev/blocks/forms';

@Component({
    selector: 'app-booking-dates',
    imports: [DatePicker],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: ` <bx-date-picker label="Stay" mode="range" dateFormat="dd/MM/yyyy" [months]="1" [presets]="[]" [(value)]="stay" /> `
})
export class BookingDates {
    public readonly stay = signal<DatePickerValue>(null);
}
```

The shared [Forms foundation](../../README.md) also supports Reactive Forms, `ngModel` and Angular Signal Forms. Import the owning Angular form directive for
`[formControl]`, `formControlName`, `[(ngModel)]` or `[formField]` instead of combining these bindings with `[(value)]`.

### Value shapes and selection modes

Dates are canonical Gregorian civil strings (`YYYY-MM-DD`), independent of the displayed calendar and format. They carry no time or zone; do not convert them to
UTC midnight. `null` represents an empty selection.

| Modes                                                      | Nonempty value                                      | Commit behavior                                                       |
| ---------------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------------------------- |
| `single`                                                   | `IsoDate`                                           | Selecting a date commits it.                                          |
| `multiple`                                                 | `readonly IsoDate[]`                                | Each addition or removal commits immediately; the panel stays open.   |
| `range`                                                    | `IDateRange` with inclusive `start` and `end`       | The second endpoint completes and commits the range.                  |
| `week`, `month`, `quarter`, `year`                         | `IsoDate` identifying the first day of the period   | Selecting a period commits its canonical anchor.                      |
| `week-range`, `month-range`, `quarter-range`, `year-range` | `IPeriodRange` containing `start`, `end` and `kind` | The second period commits ordered first-day anchors for both periods. |

For example, a March–May month range stores `{ start: '2026-03-01', end: '2026-05-01', kind: 'month' }`; the end identifies May rather than its last day.
Application-provided `IDateRange` values may have null endpoints, but calendar interaction commits completed ranges.

Month and year modes open their own selection grids, without requiring a day selection:

```html
<bx-date-picker mode="month" label="Month and year" [(value)]="selectedMonth" /> <bx-date-picker mode="year" label="Year" [(value)]="selectedYear" />
```

## API

Inherited field inputs include `label`, `placeholder`, `hint`, `hintEnd`, `appearance`, `required`, `disabled`, `readOnly`, `errorMessages` and error-display
configuration. Framework `readonly` state is supported through the same control foundation.

| Input                                                                     | Default                   | Purpose                                                                                                                  |
| ------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                   | `null`                    | Two-way `DatePickerValue`; use the value shape appropriate to `mode`.                                                    |
| `mode`                                                                    | `'single'`                | One of the eleven selection modes above.                                                                                 |
| `presentation`                                                            | `'auto'`                  | `popover`, `drawer` or `inline`; auto uses the drawer below the shared mobile breakpoint.                                |
| `months`                                                                  | `0`                       | Auto selects two months for desktop ranges and one otherwise; set an explicit count for a fixed layout.                  |
| `editable`, `separateFields`                                              | `true`, `false`           | Enable typed editing and optionally render coordinated start/end fields for ranges.                                      |
| `dateFormat`, `parseFormats`                                              | shared format, `[]`       | Display pattern and ordered strict input patterns. The first parse pattern supplies the default placeholder.             |
| `locale`, `calendarId`, `timeZone`                                        | shared settings           | Locale, calendar adapter and zone used for formatting and the current date.                                              |
| `weekStartsOn`, `minimalDaysInFirstWeek`                                  | locale/shared settings    | Zero-based first weekday and localized week-number convention.                                                           |
| `startAt`, `startView`                                                    | `null`, mode-dependent    | Initial visible date and `days`, `months`, `quarters`, `years` or `decades` view. No date is selected by opening a view. |
| `min`, `max`                                                              | unbounded                 | Inclusive ISO boundaries. Composite Signal Forms values are normalized to their earliest/latest date.                    |
| `disabledDates`, `disabledIntervals`, `disabledWeekdays`                  | `[]`                      | Block individual dates, inclusive intervals or zero-based weekdays.                                                      |
| `dateFilter`                                                              | omitted                   | Predicate returning `true` for an unavailable date.                                                                      |
| `crossingPolicy`                                                          | `'reject'`                | Reject, allow or truncate a range crossing restricted dates.                                                             |
| `minRangeLength`, `maxRangeLength`, `allowSameDay`                        | `1`, `null`, `true`       | Inclusive day-count limits and same-day range policy.                                                                    |
| `selectionLimit`                                                          | `null`                    | Maximum selected date count in multiple mode.                                                                            |
| `presets`, `presetsPlacement`                                             | built-ins, `'start'`      | Preset choices in any mode; placement accepts `start`, `end` or `hidden`. An empty array hides the list.                 |
| `closeOnSelect`, `clearable`                                              | `true`, `true`            | Close completed single/range selections and expose the field's clear action. Multiple mode stays open.                   |
| `pickerIcon`, `openPickerLabel`                                           | `calendar`, `Choose date` | Configurable opening icon and translatable accessible action name.                                                       |
| `todayLabel`, `showTodayButton`, `showToday`                              | omitted, `true`, `true`   | Optional Today action, action visibility, and an independent current-day marker.                                         |
| `weekdayNameFormat`, `monthNameFormat`                                    | `'narrow'`, `'short'`     | Localized heading lengths; both also accept `long`, `short` and `narrow`.                                                |
| `visibleTagCount`, `tagConfig`, `overflowTagConfig`                       | `1`, `{}`, `{}`           | Multiple-date tags, their presentation, and the overflow tag.                                                            |
| `clearLabel`, `clearTooltip`, `selectedDatesLabel`, `moreDatesLabel`      | component defaults        | Accessible and translated clear/tag text. Empty `clearTooltip` suppresses its tooltip.                                   |
| `startLabel`, `endLabel`                                                  | `Start date`, `End date`  | Range endpoint placeholders.                                                                                             |
| `dayTemplate`                                                             | omitted                   | `TemplateRef<ICalendarDayContext>` preserving calendar selection and accessibility behavior.                             |
| `availability`, `resolver`                                                | omitted                   | Consumer-managed state or a Promise-based date availability resolver.                                                    |
| `loadingLabel`, `loadErrorMessage`, `retryLabel`, `invalidSelectionLabel` | component defaults        | Translatable feedback; `invalidSelectionLabel` optionally replaces contextual validation messages.                       |

Outputs are `valueCommit`, `draftChange`, `openChange`, `visibleRangeChange`, `request`, `retry`, `parseFailed`, `viewChange`, `monthSelected` and
`yearSelected`. `draftChange` can describe an incomplete range. `valueCommit` reports accepted committed values. `monthSelected` and `yearSelected` report
normalized anchors while drilling down; they do not themselves commit a date.

Methods include `open()`, `close()`, `clear()`, `goToToday()`, `reloadAvailability()` and `retryAvailability()`. `goToToday()` navigates without selecting.
`reset()` clears local pending text and validation, closes the panel and leaves ownership of the bound value with the form.

### Presets

`IDatePreset` labels, descriptions and groups accept `ResolvableText`. Resolvers return a date, date array or range; the control adapts it to the active mode
before applying restrictions and limits. Single modes use the final date, period modes normalize its anchor, multiple mode expands range dates, and ranges use
both endpoints. `disabled: true` retains a visible unavailable item. The list scrolls independently of the calendar.

```ts
import { addDays, type IDatePreset } from '@filip.mazev/blocks/core';

const presets: readonly IDatePreset[] = [
    { id: 'today', label: 'Today', resolve: (context) => context.today },
    { id: 'tomorrow', label: 'Tomorrow', resolve: (context) => addDays(context.today, 1) }
];
```

### Asynchronous availability

Use either a `DateAvailabilityResolver` or application-managed `availability: IDateAvailability`. Explicit `availability` takes precedence over the resolver.
Requests identify the visible date interval, month keys, calendar, locale, time zone, revision and source. With application-managed state, handle `request` and
`retry`, set `loading` before starting work, and bind returned metadata or a translated error.

```ts
import { enumerateDates, type DateAvailabilityResolver } from '@filip.mazev/blocks/core';

const resolveDates: DateAvailabilityResolver = async (request) => ({
    dates: enumerateDates(request.start, request.end).map((date) => ({ date, status: 'available' }))
});
```

Bind this function through `[resolver]="resolveDates"`. This minimal example marks the requested interval available; an application can replace the body with
its own API request returning `IDateAvailabilityResult`. Dates absent from loaded metadata remain unknown and cannot be selected. Metadata can also carry
badges, descriptions, semantic tones, prices and application data for custom cells.

Resolver orchestration ignores stale results and retains loaded metadata on failure. A rejected Promise displays `loadErrorMessage`; loading and retry use the
existing calendar area, avoiding a footer or panel-height change. Retry defaults to a centered tonal/accent Blocks button labeled “Retry request”. Consumer
state may set `retryable: false` to suppress it. `reloadAvailability()` opens the control if necessary and ignores loading, disabled or readonly controls.

## Appearance and customization

The field uses the shared Forms label, error and material styles. Editable empty fields float their label on focus and reveal the effective date-format
placeholder. Trigger-only fields and multiple-date controls keep an empty label centered when opened; their labels float once populated.

Range inputs reveal separate `startLabel`/`endLabel` placeholders; `separateFields` optionally separates their field presentation. Multiple selections render
shared Tags with truncation, removable visible items and a `+N` overflow tooltip, matching MultiSelect's presentation.

The panel stays compact independently of its field's width. The field fills its assigned form column; set `max-inline-size` on the host when a narrower field is
needed. `pickerIcon="chevron-down"` can replace the default calendar icon. Clicking the opening icon again closes the active panel. Popover positioning tracks
the field through scrolling and calendar interactions.

The panel uses classic blur and tint, without SVG refraction. Its default backing adds 18 percentage points to shared material opacity, about 63.6% at the
default appearance. `--bx-dropdown-opacity` overrides it and `--bx-dropdown-min-opacity` sets an optional floor. Opaque and accessibility preferences take
precedence. The [Calendar guide](../../../primitives/components/calendar/README.md) documents cell styling and templates; drawer variables apply in drawer mode.

Weekday headings default to narrow initials, with full accessible names; months default to short names. These formats respond to locale changes. Configurable
text uses `ResolvableText` and optional `BX_I18N`, including labels, endpoint placeholders, shortcuts, errors, presets and accessible names.

## Behavior and accessibility

Single dates and completed ranges commit immediately, and the panel closes after a brief pause so the chosen day reads as a settled selection. Multiple-date
additions/removals commit individually. Escape or outside dismissal closes the panel without reverting values already committed. No Apply, Cancel or separate
Clear footer actions are rendered; the field's X is the clear action.

Typed parsing is strict. Without `parseFormats`, the display pattern and canonical ISO dates are accepted. Natural-language parsing is opt-in through
`allowNaturalLanguage`. Invalid manual input, reversed range endpoints and invalid restrictions are reported in the field while retaining the committed value.

Whole-week selection follows `weekStartsOn`, displays all seven days, and includes weeks crossing month/year boundaries. Typing a date in week mode selects its
canonical week start. A week containing unavailable or out-of-bounds dates cannot be selected. Week and period-range hover/focus previews show complete periods;
confirmed ranges use continuous joined selection bands rather than separate highlighted cells.

An open popover holds its own `ScrollLockService` lock, so page scrolling is frozen while the panel is presented without affecting the surrounding overlay's
lock. Drawer presentation delegates locking to `BottomDrawer`.

`todayLabel` is optional: omission or empty text renders no action or reserved space. When present, Today selects through the same mode and restriction guards.
`showToday` independently controls the current-day marker and `aria-current`; it does not enable the shortcut.

The calendar supports roving grid focus, directional keys, Home/End, PageUp/PageDown and Enter/Space selection, with Escape dismissal and predictable focus
restoration. Editable inputs expose combobox semantics; trigger-only variants use named buttons. Disabled and readonly controls cannot commit edits; readonly is
distinct from disabled. Live reduced motion, reduced transparency, forced colors and RTL remain supported.

### Validation messages

Customize inherited `errorMessages` with plain text, callbacks or translation keys. Date keys include `dateParse`, `dateMin`, `dateMax`, `dateOrder`,
`dateDisabled`, `dateAvailability`, `dateMinLength`, `dateMaxLength`, `dateSameDay`, `dateLimit`, `dateIncomplete` and `dateCrossing`. Callback parameters
include `format`, canonical bounds and start, their formatted counterparts, and configured range/selection limits. Omit `invalidSelectionLabel` to retain these
specific messages rather than one blanket error.

### Compatibility with the branch draft

`commitPolicy`, `applyLabel` and `cancelLabel` remain compatibility inputs without rendered footer actions. `apply()` and `cancel()` remain programmatic draft
actions; they do not change the immediate-selection contract. Typed editing defaults to `true`; set `[editable]="false"` for a trigger-only control. Comparison
inputs and comparison highlighting are removed. Combined date-time selection uses separate DatePicker and TimePicker controls with application validation; the
combined DateTimePicker component is removed.

## Playground

The component is available at `/components/date-picker`; this guide describes the library contract and defaults.
