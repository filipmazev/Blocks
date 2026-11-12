# Date and time utilities

Reusable civil-date, time-zone, parsing, formatting, preset and serialization helpers exported by `@filip.mazev/blocks/core`. They work independently of the
pickers for API integration and server round-trips.

## Import

```typescript
import { dateTimeToInstant, parseDotNetDateValue, parseNaturalDateTime, toDotNetOffsetIso, toUnixSeconds } from '@filip.mazev/blocks/core';
```

## Usage

```typescript
const instant = dateTimeToInstant('2026-11-23', '14:30', 'Europe/Berlin');
const offsetIso = instant ? toDotNetOffsetIso(instant, 'Europe/Berlin') : null;
const parsed = parseDotNetDateValue('2026-11-23T14:30:00+01:00');
const natural = parseNaturalDateTime('next friday at 3 pm', {
    now: new Date(),
    timeZone: 'Europe/Berlin',
    locale: 'en-GB',
    calendar: gregorianCalendarAdapter,
    weekStartsOn: 1
});
```

## API

Date-only helpers (`parseIsoDate`, `isValidIsoDate`, `addDays`, `addMonths`, `startOfWeek`, `startOfQuarter`, `periodBounds`) keep civil dates as strings.
Time-zone helpers (`dateTimeToInstant`, `dateTimeFromInstant`, `timeZoneOffset`, `supportedTimeZones`) resolve offsets through `Intl`, including DST gaps and
folds. Serialization helpers convert to and from UTC ISO, offset ISO, Unix seconds/milliseconds, Microsoft JSON dates and modern .NET `DateTime`/
`DateTimeOffset` values. `parseNaturalDateTime` is opt-in, locale-aware and deterministic through the supplied clock.

Calendar adapter `getMonthLabel(anchor, locale, form)` accepts `long`, `short` or `narrow`; omission preserves long labels. `getWeekdayNames(locale, form)` uses
the same name-length contract. Calendar controls default to short months and narrow weekdays, retaining full accessible weekday names. The demo switches between
all three lengths.

`valueHighlightRange('week', date, weekStartsOn)` expands a stored week anchor to its complete seven-day range. The conversion demo displays these bounds with
Monday as the week start; period modes likewise expand single anchors to their whole periods.

## Behavior and limitations

Ambiguous input returns a typed error instead of guessing. `DateTimeKind.Unspecified` is not a unique instant; resolve it with an explicit time zone before
calling instant-based helpers. Non-Gregorian calculations go through a calendar adapter rather than Gregorian arithmetic with translated labels.

## Playground

Open `/utilities/date-time`.
