# Tag

Informational labels with semantic colors, tonal/filled/outlined variants, optional icons and counts, disabled presentation, and accessible tooltips. Tags do not imply a button or selection action.

## Import

```ts
import { Tag, ITagConfig, TagColor, TagVariant } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-tag [text]="{ key: 'locations.skopje' }" color="accent" variant="tonal"
  leadingIcon="map-pin" trailingIcon="chevron-right" [trailingNumber]="12"
  [tooltip]="{ key: 'locations.description' }" />

<bx-tag [leadingNumber]="42" color="info" variant="filled" ariaLabel="42 locations" />
<bx-tag text="Skopje" /><bx-tag text="+2" tooltip="Ohrid, Bitola" />
```

## API

`text`, `tooltip`, and `ariaLabel` accept `ResolvableText`. `color` selects primary, accent, success, danger, info, warn or neutral. `variant` is tonal (default), filled or outlined. `size` is small or medium. `disabled` changes the visual/accessible presentation without inventing an action.

`leadingIcon`, `trailingIcon`, and `iconSize` configure decorative icons. `leadingNumber` and `trailingNumber` accept numbers, strings such as `+2`, or null to hide a count. Omit text for a number-only tag. Numeric values use `Intl.NumberFormat` with the optional `locale`; strings retain their prefixes.

`config` accepts reusable `ITagConfig` appearance, icon, count and tooltip defaults. Direct inputs take precedence. Consumer CSS variables can override the semantic palette without changing the component.

Without an explicit `tooltip`, a tag automatically shows its complete label only when its rendered text is truncated. Resizing, content/translation changes, and loaded fonts update this condition through the shared [TruncateDirective](../../directives/truncate/README.md). An explicit tooltip still describes the tag even when its label fits, including overflow tags listing hidden selections. Set `[tooltipOnTruncate]="false"` to retain truncation while supplying custom feedback. `ITagConfig.tooltipOnTruncate` provides the reusable default, with the direct input taking precedence. `tooltip=""` also suppresses the automatic tooltip. The public `TruncateDirective`, `TruncatedTextPipe` (`bxTruncatedText`), and `truncatedText()` helper are available for application-owned text.

## Appearance

Uses Blocks semantic theme colors and the shared glass surface. Tags inherit application glassiness, receive surrounding emitted light, and follow opaque/reduced-transparency preferences. They have no hover illumination or press effect because they are informational. Tooltip motion follows `BxA11yService`.

Text tags use small rounded corners. A single number without text or icons uses a circle that grows for longer counts. Override `--bx-tag-background`, `--bx-tag-color`, `--bx-tag-border`, `--bx-tag-radius`, `--bx-tag-padding`, `--bx-tag-gap`, `--bx-tag-font-size`, `--bx-tag-shadow`, `--bx-tag-counter-background`, `--bx-tag-counter-radius`, and `--bx-tag-disabled-opacity` as needed. `--bx-tag-number-size` and `--bx-tag-number-padding` configure number-only circles; `--bx-tag-fill-opacity` and `--bx-tag-outline-opacity` tune the variant tints. Forced colors retain a visible boundary.

## Accessibility and translations

Visible text remains available to assistive technology; decorative icons are hidden. An explicit `ariaLabel` names the tag group when the visible numbers need context. Tooltip tags support hover, keyboard focus and touch-and-hold. `focusable` defaults to true for a tooltip-bearing standalone tag; set it false when a surrounding interactive control supplies keyboard access to the same description.

Text resolves through `BX_I18N`, tracks its optional version signal, and falls back to keys without an adapter. Plain text works directly.

## Selected values

Select and multiselect support `selectionDisplay="tags"`. `tagConfig` sets shared tag appearance, and option `tagConfig` provides per-value overrides. `visibleTagCount` defaults to one and is clamped to at least one. Remaining values become an overflow tag such as `+2`, with their translated names in its tooltip. `tagOverflowText` and `overflowTagConfig` customize that tag.

The parent combobox exposes the complete selection for keyboard users; embedded tags do not introduce nested tab stops or actions. Multiselect's `allSelectedText` still takes precedence when select-all intent is active.

## Playground

Open `/components/tag` for configurable text, colors, variants, icons, both counters, number-only tags, disabled appearance, translations, and resizable conditional tooltips. `/components/truncate` demonstrates the shared directive directly. `/components/multi-select` includes selected-tag mode, visible-tag limits, and a Skopje +2 style overflow example.
