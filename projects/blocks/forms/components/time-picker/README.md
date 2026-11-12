# Time picker

`TimePicker` selects one time through an editable field, inertial wheels or a single-select list. It supports semantic option labels, strict parsing,
restrictions, precision through milliseconds, asynchronous slot availability and optional time-zone selection.

## Import

```ts
import { TimePicker, type ITimePickerOption } from '@filip.mazev/blocks/forms';
import type { IsoTime } from '@filip.mazev/blocks/core';
```

## Usage

```ts
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import type { IsoTime } from '@filip.mazev/blocks/core';
import { TimePicker } from '@filip.mazev/blocks/forms';

@Component({
    selector: 'app-meeting-time',
    imports: [TimePicker],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: ` <bx-time-picker label="Meeting time" [hourCycle]="24" [minuteStep]="15" [(value)]="meetingTime" /> `
})
export class MeetingTime {
    public readonly meetingTime = signal<IsoTime | null>(null);
}
```

Values are canonical wall-clock strings (`HH:mm`, `HH:mm:ss` or `HH:mm:ss.SSS`) at the configured precision, or `null` when empty. They contain no date or zone;
selecting a time zone does not turn the value into an instant. Use Core's date/time utilities when an application needs explicit zoned serialization.

The [Forms foundation](../../README.md) supports Reactive Forms, `ngModel` and Angular Signal Forms. Import the appropriate Angular directive when using
`[formControl]`, `formControlName`, `[(ngModel)]` or `[formField]` instead of combining these bindings with `[(value)]`.

### Semantic options

```ts
import type { ITimePickerOption } from '@filip.mazev/blocks/forms';

const timeOptions: readonly ITimePickerOption[] = [
    { value: '09:00', label: 'Morning' },
    { value: '14:00', label: 'Afternoon' },
    { value: '18:00', label: 'Evening', disabled: true }
];
```

```html
<bx-time-picker label="Preferred time" timePresentation="list" [options]="timeOptions" [(value)]="preferredTime" />
```

A resolved label is displayed in the field while its ISO value is committed. Typing accepts the resolved label or a valid strict time pattern. Supplied options
constrain every input method, including wheels and typed input. Labels accept `ResolvableText`; omission formats the numeric time. An omitted `options` input
generates numeric choices.

## API

Inherited field inputs include `label`, `placeholder`, `hint`, `hintEnd`, `appearance`, `required`, `disabled`, `readOnly`, `errorMessages` and error-display
configuration. Framework `readonly` state is supported by the shared control foundation.

| Input                                                                                         | Default                         | Purpose                                                                                    |
| --------------------------------------------------------------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------ |
| `value`                                                                                       | `null`                          | Two-way `IsoTime \| null`; only one time is selected.                                      |
| `timePresentation`                                                                            | `'wheel'`                       | `wheel` columns or a single-select `list`.                                                 |
| `presentation`                                                                                | `'auto'`                        | `popover`, `drawer` or `inline`; auto uses the drawer below the shared mobile breakpoint.  |
| `options`                                                                                     | omitted                         | `readonly ITimePickerOption[]` with canonical values, optional labels and disabled flags.  |
| `interval`                                                                                    | `minuteStep`                    | Numeric minutes or a duration string defining generated list spacing.                      |
| `locale`, `timeZone`                                                                          | shared settings                 | Formatting locale and IANA zone used by the current-time action and slot requests.         |
| `hourCycle`                                                                                   | `'auto'`                        | `12`, `24` or the locale/shared preference.                                                |
| `precision`                                                                                   | `'minute'`                      | `hour`, `minute`, `second` or `millisecond`.                                               |
| `minuteStep`, `secondStep`, `millisecondStep`                                                 | `1`                             | Offered increments and typed-value validation.                                             |
| `loopColumns`                                                                                 | `true`                          | Wheel stepping wraps at either end.                                                        |
| `timeFormat`, `parseFormats`                                                                  | shared format, `[]`             | Display format and optional ordered strict input patterns.                                 |
| `min`, `max`                                                                                  | unbounded                       | Inclusive canonical time bounds.                                                           |
| `disabledTimes`, `disabledIntervals`                                                          | `[]`                            | Blocked times and inclusive time intervals.                                                |
| `timeFilter`                                                                                  | omitted                         | Predicate returning `true` for an unavailable time.                                        |
| `pickerIcon`, `openPickerLabel`                                                               | `clock`, `Choose time`          | Opening icon and translatable accessible action name.                                      |
| `closeOnSelect`                                                                               | omitted                         | Omission closes list choices and keeps wheels open; an explicit boolean overrides both.    |
| `clearable`, `clearLabel`, `clearTooltip`                                                     | `true`, component text, omitted | The field's X and its accessible/tooltip text. Empty tooltip text suppresses it.           |
| `nowLabel`                                                                                    | omitted                         | Optional action selecting the current time through precision, step and restriction guards. |
| `showTimeZone`, `showTimeZoneLabel`                                                           | `false`, `true`                 | Optional IANA zone selector and formatted zone label.                                      |
| `availability`, `resolver`                                                                    | omitted                         | Consumer-managed state or a Promise-based time-slot resolver.                              |
| `loadingLabel`, `loadErrorMessage`, `retryLabel`, `emptyLabel`                                | component defaults              | Translatable availability feedback. Retry defaults to “Retry request”.                     |
| `invalidSelectionLabel`                                                                       | omitted                         | Optional blanket override for contextual time errors.                                      |
| `hourLabel`, `minuteLabel`, `secondLabel`, `millisecondLabel`, `periodLabel`, `timeZoneLabel` | component defaults              | Translatable wheel and zone control names.                                                 |

Outputs are `valueCommit`, `openChange`, `timeZoneChange`, `slotRequest` and `slotRetry`. Methods include `open()`, `close()`, `clear()`, `selectNow()`,
`reloadSlots()` and `retrySlots()`. `reset()` clears local pending text and errors and closes the panel while the form retains ownership of its model.

Numeric `interval` values use minutes. Duration strings support hours, minutes and seconds, including fractions, such as `30m`, `1.5 hours` or `45 seconds`.
Malformed or nonpositive values fall back to `minuteStep`. The generated list is virtualized and uses a minimum quantum of one second; use wheels or explicit
options for subsecond choices.

### Asynchronous availability

Use either `TimeAvailabilityResolver` or consumer-managed `availability: ITimeAvailability`; explicit availability takes precedence. Slot requests include the
locale, time zone, revision and request source. With application-managed loading, handle `slotRequest` and `slotRetry`, set loading before starting the request,
and bind available times or a translated error. The standalone time picker emits a null date context.

```ts
import type { TimeAvailabilityResolver } from '@filip.mazev/blocks/forms';

const resolveTimes: TimeAvailabilityResolver = async () => ({
    times: ['09:00', '09:30', '10:00', '14:00']
});
```

Bind the function with `[resolver]="resolveTimes"`. Replace its body with an application-owned request as needed. Returned times combine with bounds, disabled
choices, explicit options and validation steps; they do not bypass those restrictions.

Loading blocks unconfirmed choices. Rejected Promises show `loadErrorMessage`; stale completions are ignored and previous slot data is retained on failure.
Feedback uses the editor's existing area, preserving its dimensions. Failures stay visible until explicit retry through a centered tonal/accent Blocks button.
Consumer-managed state may set `retryable: false` to hide retry. `reloadSlots()` opens the control if necessary and ignores disabled, readonly or loading
controls.

## Appearance and customization

The field uses the shared Forms material and floating-label behavior. Its placeholder defaults to the first parse pattern or the effective display format. The
field remains editable while its popover is open. The dropdown anchors to the visible field with the shared small overlay gap; hints and errors do not reserve
extra space above it. Drawer presentation uses the wheel or list editor without a duplicate time field. Constrain the host with `max-inline-size` when a
narrower field is needed.

The panel uses classic blur and tint without SVG refraction. Its default backing adds 18 percentage points to the shared material opacity, about 63.6% at the
default appearance. `--bx-dropdown-opacity` overrides that backing and `--bx-dropdown-min-opacity` sets an optional floor. Opaque/accessibility preferences
remain authoritative.

Wheels use clear magnifying lenses over the moving numbers. Magnification defaults to `1.3` through `--bx-wheel-magnification`; a subtle neutral contour makes
the selected band visible without an accent wash. `--bx-wheel-band-border`, `--bx-wheel-band-background` and `--bx-wheel-band-opacity` customize the band;
background and opacity default to transparent/zero. The [TimeWheel guide](../time-wheel/README.md) describes standalone wheel customization.

List rows share Select/MultiSelect typography, padding, radius, selected/disabled styling, checkmarks, immediate hover feedback and `--bx-select-option-gap`
(default shared spacing 1). There is no quick-select sidebar, repeated time title or reserved footer space.

All configurable text uses `ResolvableText` and optional `BX_I18N`, including semantic choices, field labels, placeholders, errors, actions and accessible wheel
names. Locale/format settings follow explicit inputs, shared application settings, then library defaults.

## Behavior and accessibility

Valid selections commit immediately. List selection closes the panel by default; wheel adjustments remain open for continued editing. Escape and outside
dismissal close the panel without reverting committed values. The field's X is the clear action; no Apply, Cancel or separate Clear footer buttons are rendered.
Omitted or empty `nowLabel` renders no shortcut or reserved space. Now selects, rather than only navigating to, the current allowed time.

Wheels track pointer and wheel/trackpad input continuously, project a bounded release from recent velocity, and settle with the shared spring. Pauses remove
momentum, reversals change intent, interruptions retain velocity, and cancellation restores the committed selection. Ctrl-wheel remains available for browser
zoom. Disabled combinations cannot be selected; an hour change may resolve to the nearest allowed minute in that hour.

The editable combobox controls the panel dialog. ArrowDown moves focus to its wheel/list. Wheels support arrows, PageUp/PageDown and Home/End; list navigation
moves the active option without committing, and Enter/Space selects. Pointer selection, focus restoration, RTL, reduced motion, reduced transparency and forced
colors use the shared library mechanisms. Refraction follows global glassiness/quality and accessibility preferences; opaque fallback preserves readable values.

Malformed text, invalid clock components, bounds, blocked slots and step violations produce distinct field errors. Invalid text stays visible and preserves the
last committed form value; committing it closes the popover so field feedback is not covered. Reopening preserves the pending text and error. Disabled and
readonly controls cannot commit edits; readonly remains distinct from disabled.

### Validation messages

Inherited `errorMessages` accepts plain text, callbacks or translation keys. Supported keys are `timeFormat`, `timeRange`, `timeMin`, `timeMax`, `timeDisabled`,
`timeAvailability`, `timeLoading` and `timeStep`. Callback parameters include `format`, `hourCycle`, formatted bounds and configured steps. Omit
`invalidSelectionLabel` to retain contextual errors.

### Compatibility with the branch draft

Time-range mode, segmented presentation and the preset sidebar are removed. Use separate TimePicker controls for time endpoints with application validation
between them; use labeled `ITimePickerOption` entries in list mode for semantic choices. `TimePresetList` and the combined DateTimePicker component are removed.
Core time-range/preset and date-time utilities remain available for application logic.

`commitPolicy`, `applyLabel`, `cancelLabel` and `errorWrap` remain compatibility inputs without rendered footer actions. Programmatic `apply()` and `cancel()`
remain available for draft integration; they do not delay automatic commits or undo values already committed.

## Playground

The component is available at `/components/time-picker`; this guide describes the library contract and defaults.
