# Date preset list

Accessible quick-select list for dates, multiple dates, ranges and calendar periods.

## Import

```ts
import { DatePresetList } from '@filip.mazev/blocks/forms';
```

## Usage

```html
<bx-date-preset-list [presets]="presets" [context]="presetContext" [activeValue]="selection" (presetSelect)="apply($event)" />
```

## API

Inputs: `presets` (`IDatePreset[]`), `context` (`IDatePresetContext`), `activeValue` (`DatePickerValue`), legacy `activeRange` (`IDateRange | null`),
`horizontal` (default `false`) and `ariaLabel`. Output: `presetSelect`. Presets resolve deterministically from the supplied clock, locale, calendar, time zone
and week conventions; labels, descriptions and groups accept `BX_I18N` translation keys.

## Appearance and customization

Vertical sidebar or horizontal chip row for narrow layouts. Active presets use semantic accent fill; groups are labelled for scanability.

## Behavior and accessibility

Buttons are native, keyboard reachable and expose `aria-pressed`. Disabled presets remain visible but cannot be activated; no action depends on hover.

## Playground

See `/components/date-picker`.
