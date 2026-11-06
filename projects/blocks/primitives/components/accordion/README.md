# Accordion

Coordinates direct collapsible children into single or multiple expanded sections.

## Public import

```typescript
import { Accordion, Collapsible } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-accordion [multiple]="false">
    <bx-accordion-item title="Overview" [expanded]="true"><p>Project overview.</p></bx-accordion-item>
    <bx-accordion-item title="Details"><p>Project details.</p></bx-accordion-item>
</bx-accordion>
```

## API

`multiple` defaults to false. `collapseAll()` closes every child. Import `Collapsible` for the `bx-accordion-item` selector; it exposes the same inputs and
`expanded` model as [Collapsible](../collapsible/README.md).

Use each item's `titleTemplate` to add noninteractive heading content such as number-only Blocks tags.

Use `trailingTemplate` for status tags or other noninteractive content at the heading's logical end, before its disclosure icon. It receives the same typed
context as `titleTemplate`. `/tokens` demonstrates compact palette headings with current-theme and companion tags.

Place items directly inside the accordion. Nested accordions coordinate their own items. Single mode reconciles programmatic expanded-state changes and
initially open children.

## Appearance and customization

`--bx-accordion-gap` controls spacing. Each child supports the collapsible surface variables. No parallel animation or theme configuration is introduced.

## Behavior and accessibility

ArrowUp/ArrowDown wrap between enabled headings; Home/End choose the first/last heading. Enter/Space toggle the focused item. Disabled items are skipped;
readonly items stay focusable. Closing a section returns focus from its content to its heading. Panels have no motion dependency.

## Playground

`/components/accordion` includes live examples and shared appearance controls.
