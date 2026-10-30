# Truncated text

Shared single-line ellipsis styling, reactive overflow detection, and conditional text selection. `TruncateDirective` measures the rendered element. `TruncatedTextPipe` and `truncatedText()` use that measured state for tooltips or application-owned feedback. The pure pipe does not poll the DOM or own observers.

## Import

```ts
import { TruncateDirective, TruncatedTextPipe, TooltipDirective, truncatedText } from '@filip.mazev/blocks/primitives';
```

Add the standalone directive, pipe, and tooltip directive to the component's `imports` when composing a conditional tooltip. Include Blocks' established `core/styles/index` global entry once; it supplies the shared `.bx-truncate` utility used by the directive.

## Usage

```html
<div class="label-container">
  <span bxTruncate #overflow="bxTruncate"
      [bxTooltip]="label() | bxTruncatedText: overflow.truncated()"
      [attr.tabindex]="overflow.truncated() ? 0 : null"
      bxTooltipTouch="longpress" placement="top">{{ label() }}</span>
</div>
```

```ts
import { signal } from '@angular/core';

protected readonly label = signal('A long location name that may not fit');
```

Constrain the available width so overflow can occur:

```scss
.label-container {
    inline-size: 14rem;
    max-inline-size: 100%;
    min-inline-size: 0;
}
```

## API

| API | Default | Purpose |
| --- | --- | --- |
| `[bxTruncate]` | `true` | Enables block display and the shared ellipsis utility. False removes the directive's styling/class and reports no truncation. |
| `#overflow="bxTruncate"` | — | Exports the directive for template access. |
| `truncated()` | `false` | Readonly signal indicating overflow of the rendered content box. Remains false during server rendering. |
| `text()` | `''` | Readonly signal with current DOM text or a native input's value/placeholder, refreshed after rendering. Useful for projected content. |
| `truncatedChange` | — | Boolean event emitted when the measured state changes. |
| `refresh()` | — | Immediately rechecks after an application-owned style or layout change outside normal Angular rendering. Safe before rendering or after destruction. |

### Public pipe and helper

```html
<!-- Empty text disables the existing tooltip when content fits or the feature is off. -->
<span bxTruncate #overflow="bxTruncate"
    [bxTooltip]="label() | bxTruncatedText: overflow.truncated(): automaticTooltips()">{{ label() }}</span>
```

`bxTruncatedText` accepts text, the measured boolean, and an optional enabled boolean (default true). It returns the original string or translation-key object when both booleans are true, otherwise an empty string. Null and undefined text become empty strings. It preserves `ResolvableText` for the existing translation adapter.

The exported `truncatedText(text, truncated, enabled = true)` helper provides the same behavior in TypeScript. Read the directive signals directly when custom behavior is more useful:

```ts
import { computed, signal, viewChild } from '@angular/core';
import { TruncateDirective, truncatedText } from '@filip.mazev/blocks/primitives';

protected readonly overflow = viewChild(TruncateDirective);
protected readonly label = signal('A long label');
protected readonly automaticTooltips = signal(true);
protected readonly customFeedback = computed(() =>
  truncatedText(this.label(), this.overflow()?.truncated() ?? false, this.automaticTooltips())
);
```

The pipe is pure: pass the current `truncated()` boolean rather than an element or directive object. This lets Angular update its result when measurement changes.

### Disable automatic tooltips without disabling truncation

```html
<bx-tag [text]="label()" [tooltipOnTruncate]="false" tooltip="My application description" />
<bx-menu-item [label]="label()" [tooltipOnTruncate]="false" />
<bx-input-field [label]="label()" [tooltipOnTruncate]="false" />
<bx-search-input [value]="label()" [tooltipOnTruncate]="false" />
<bx-select label="Location" [options]="options()" [tooltipOnTruncate]="false" />
<bx-multi-select label="Locations" [options]="options()" [tooltipOnTruncate]="false" />
```

`tooltipOnTruncate` defaults to true. False suppresses the component's automatic ellipsis tooltip while retaining ellipsis and measurement, so an application can attach its own tooltip. Explicit tag tooltip descriptions and overflow-tag lists are independent; they retain their existing contract. `ITagConfig.tooltipOnTruncate` supplies a reusable tag default, and a direct tag input takes precedence.

Forms resolve the instance input, then shared application settings, then true:

```ts
import { inject } from '@angular/core';
import { FormSettingsService } from '@filip.mazev/blocks/forms';

private readonly formSettings = inject(FormSettingsService);

// For example, in application initialization:
this.formSettings.update({ tooltipOnTruncate: false });
```

`[bxTruncate]="false"` is a separate choice: it disables ellipsis itself on a custom text element. `tooltipOnTruncate` only disables automatic tooltips on an owning component.

## Appearance and customization

The directive supplies ellipsis mechanics rather than a theme or a tooltip. Keep widths, typography, colors, borders, and focus styling on the owning control or container using Blocks tokens. Apply it to the text element rather than a wrapper containing icons, counters, or actions. The shared `truncate-text` Sass mixin is available through `core/styles/helpers` for stylesheet-only integrations; the directive and existing components use that same utility.

All existing library ellipsis sites use the shared implementation: tag labels, menu-item content, floating input labels, search values/placeholders, select/multiselect captions and values, and multiselect's full-selection measurement. Menu `wrapLabel` disables ellipsis through the same directive. The appearance preview's clipped status text also uses it. Custom select trigger templates keep application-owned presentation.

## Behavior and accessibility

Resize and content observers, Angular render callbacks, viewport changes, and font loading refresh measurement. Checks are coalesced into animation frames. Observers, listeners, and pending frames are cleaned up on destruction; asynchronous font completion is guarded. Browser measurement starts after rendering.

Native single-line input values are measured with their current font and inline padding, since their rendered values are not DOM text nodes. Regular text uses its content-box overflow metrics. Full-selection summary measurement uses a constrained, visually hidden copy of the text and the same directive.

The complete text stays in the DOM for assistive technology. The directive does not add focusability, roles, action semantics, or text of its own. The owner provides keyboard access and a visible focus indicator when a tooltip needs an independent focus target. Use the existing `TooltipDirective` for hover, keyboard focus, touch-and-hold, overlay theming, positioning, and reduced-motion behavior. Passing an empty tooltip while text fits also removes its description and dismisses an open tooltip.

Translation stays in the caller: resolve `ResolvableText` through `BX_I18N` in a computation that reads the adapter's version, then render and pass that same resolved string to the tooltip. Rendered language changes trigger new measurements.

## Playground

Open `/components/truncate` for the short pipe example, helper/custom logic, application defaults, opt-out examples, and interactive previews across tags, menus, input fields, search, select and multiselect. Edit text, adjust width, enlarge typography, disable automatic tooltips, or supply a custom tag/text tooltip. `/components/tag` includes the same demo alongside tag customization.

Previews use an aligned responsive card grid. Width changes affect each example inside its card; preview areas and caption space stay reserved. Wrapped content scrolls inside its preview rather than moving later examples.
