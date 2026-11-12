# Calendar

Inline, reusable calendar view with single, multiple, range, week, month, quarter and year selection modes, restrictions, metadata and asynchronous availability
requests.

## Import

```ts
import { Calendar } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-calendar mode="range" [months]="2" [min]="'2026-01-01'" [disabledWeekdays]="[0, 6]" [(value)]="range" />
```

## API

| Input                                                                                | Type                                | Default         | Description                                                                                                     |
| ------------------------------------------------------------------------------------ | ----------------------------------- | --------------- | --------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                               | `DatePickerMode`                    | `'single'`      | Selection granularity and interaction model.                                                                    |
| `value`                                                                              | `DatePickerValue`                   | `null`          | Two-way canonical selection. Period modes store period start dates; period ranges store `{ start, end, kind }`. |
| `viewDate`                                                                           | `IsoDate \| null`                   | `null`          | Visible month anchor; updates with navigation and keyboard movement.                                            |
| `months`                                                                             | `number`                            | `1`             | Contiguous month count from 1 to 4.                                                                             |
| `fixedWeeks`                                                                         | `boolean`                           | `true`          | Always render six week rows for stable panel height.                                                            |
| `showWeekNumbers`                                                                    | `boolean`                           | `false`         | Render localized week numbers.                                                                                  |
| `locale`, `calendarId`, `timeZone`, `weekStartsOn`, `minimalDaysInFirstWeek`         | optional                            | shared defaults | Per-instance locale, calendar system and week convention overrides.                                             |
| `min`, `max`, `disabledDates`, `disabledIntervals`, `disabledWeekdays`, `dateFilter` | restrictions                        | –               | Declarative and predicate restrictions.                                                                         |
| `crossingPolicy`                                                                     | `'reject' \| 'allow' \| 'truncate'` | `'reject'`      | Range behavior around restricted dates.                                                                         |
| `minRangeLength`, `maxRangeLength`, `allowSameDay`, `selectionLimit`                 | limits                              | –               | Range and multiple-selection limits.                                                                            |
| `metadata`                                                                           | `readonly IDateMetadata[]`          | `[]`            | Per-date availability, tone, price, badge and application data.                                                 |
| `availability`                                                                       | `IDateAvailability \| undefined`    | –               | Consumer-managed loading, error, retry and metadata state.                                                      |
| `blockUnverifiedAvailability`                                                        | `boolean`                           | `true`          | Dates without loaded availability cannot be committed.                                                          |
| `dayTemplate`, `periodTemplate`, `weekNumberTemplate`                                | `TemplateRef`                       | –               | Presentation slots that preserve the host grid's selection, focus and ARIA contract.                            |

Outputs: `dateSelect`, `selectionRejected`, `visibleRangeChange`, `requestAvailability`, `retryAvailability`, `viewChange`, `monthSelected`, `yearSelected`.

`startView` optionally overrides the initial `days`, `months`, `quarters`, `years` or `decades` view. `viewChange` includes the initial view and navigation.
`monthSelected` and `yearSelected` emit normalized first-day anchors when drilling down, without committing a date. `viewDate` controls the initial visible
date.

`rangeStart` emits the first selected date or period anchor without committing a partial range.

## Appearance and customization

`weekdayNameFormat` defaults to `narrow` (M T W T F S S in English), with full localized names on accessible column headers. `monthNameFormat` defaults to
`short` (Nov, Sep, Dec). Both accept `long`, `short` or `narrow` and update with the locale; use `long` to restore full names.

The calendar uses Blocks semantic tokens for confirmed selection fill, preview tint, today outline and weekend text. Adjacent selected dates and period cells
join into one continuous range block. Shared edges stay square; exposed outer corners round wherever the neighboring cell is unselected. Inward joins at shorter
rows use a matching curved fillet. Ordinary single-cell hover and preview retain rounded corners. Hover or keyboard focus previews the complete week, month,
quarter or year in period-range modes, including before the first anchor is selected. Preview cells remain distinct from committed `aria-selected` state. CSS
variables: `--bx-calendar-cell-size`, `--bx-calendar-text`. Custom templates receive the full cell context and must keep a focusable element and `aria-selected`
state.

## Behavior and accessibility

Navigation uses roving tabindex: arrows move by day, week or period cell; Home/End reach the first/last date in the visible month or period grid.
PageUp/PageDown move the view; Alt+PageUp/PageDown move a year in day view. Enter/Space selects. Day arrows follow RTL direction. Navigation and keyboard
targets respect `min`/`max`; a date filter disables selection without restricting month navigation. Period views expose the same grid semantics. Range previews
are announced through endpoint labels, and unavailable dates remain focusable with `aria-disabled` so screen-reader users hear the restriction instead of
encountering missing cells.

`todayLabel` accepts optional `ResolvableText`. The action selects today through the same mode/restriction guards as a day cell. Use `goToToday()` when only
navigation is needed. Omitted or empty text hides Today and reserves no footer space. `showTodayButton` may also hide it. Comparison highlighting and
`comparisonValue` have been removed.

Availability loading, failure and empty states appear over the existing calendar body without adding footer height. Loading uses a centered indicator; retry
uses a text-action fallback with a reload icon. Unknown or blocked dates remain guarded, and `retryable: false` suppresses retry. `retryTemplate` receives
`ICalendarRetryContext` with a resolved `label` and `retry()` callback. DatePicker and the Calendar playground supply a tonal/accent Blocks button through this
slot, preserving entry-point dependency boundaries.

`showToday` controls only the current-day marker and accessible `aria-current`; it defaults to `true`. The playground exposes a Highlight today toggle
independently of the Today shortcut. Week selection highlights all seven days and prevents choosing weeks with unavailable or out-of-bounds dates.

## Playground

See `/components/calendar`.
