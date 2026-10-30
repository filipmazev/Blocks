# Truncation examples

Interactive playground content for shared truncation and automatic tag tooltips.

## Usage

The component catalog renders `<app-truncation-examples />` at `/components/truncate`; the tag playground embeds it at `/components/tag`.

## API

This internal demo has no inputs or outputs. Blocks input fields edit its text and container width; checkboxes toggle text ellipsis and larger typography. An output shows the shared directive's measured state. Additional switches disable automatic truncation tooltips or demonstrate an application-owned description.

## Appearance and behavior

The preview uses Blocks spacing, borders, radius, and responsive helpers. Its text and tag containers are constrained to the available width. Generic text composes `TruncateDirective` with `TooltipDirective`; tags supply their own automatic tooltip. Both expose the complete clipped text through hover, keyboard focus, and touch-and-hold. The demo imports all library declarations from public package entry points.

Settings and switches use separate aligned grids. Previews sit in equal-width cards with consistent headings, fixed-height preview areas, and reserved caption space. The available-width setting only resizes content inside each card, so changing it does not rearrange the examples. Long wrapped content scrolls inside the preview area instead of shifting later rows. Cards stack on narrow screens.

## Public API examples

The page includes copyable examples for `bxTruncatedText`, `truncatedText()`, `tooltipOnTruncate`, and `FormSettingsService` defaults. Tag, menu-item, input, search, select, and multiselect previews share the width and tooltip controls.
