# Picker surface

Shared orchestration host for date and time picker content. Resolves inline, anchored popover and reusable bottom-drawer presentations while owning outside
dismissal, Escape, focus restoration, theme and lighting inheritance.

## Import

```ts
import { PickerSurface } from '@filip.mazev/blocks/forms';
```

## Usage

```html
<bx-picker-surface
    [(open)]="isOpen"
    [presentation]="presentation"
    [origin]="trigger"
    [content]="panelTemplate"
    [ariaLabel]="'Choose a date'"
    (dismiss)="cancel()" />
```

## API

Inputs: `open`, `presentation` (`'popover' | 'drawer' | 'inline'`), `origin` (anchor element), `content` (panel `TemplateRef`), `ariaLabel`, `panelClass`,
`panelWidth`, `panelId` (dialog ID for combobox controls), `autoFocus` (default `true`), `dismissOnOutside`, `dismissOnEscape`. Outputs: `dismiss`,
`openedChange`.

## Appearance and customization

The popover panel inherits the trigger's Blocks theme and lighting through the shared overlay helpers. Drawer presentation uses `bx-bottom-drawer`; content
controls its own padding and width. The drawer supplies the material and neutral contour; picker content omits its inner backing and rim so there is no divider
beneath the drag handle.

## Behavior and accessibility

Popovers preserve their natural content size across selection and repositioning; viewport limits and the content's own scrolling region remain authoritative.
Use an origin containing the field subscript when validation must stay visible above the popup. Popovers use collision-aware CDK positioning, restore focus to
the trigger and close on Escape or outside pointer interaction. Drawers trap focus and lock page scroll through the reusable drawer. Handle, backdrop and Escape
dismissal emit `dismiss` to the owner. Rapid reopening cancels the previous closing surface, and breakpoint changes preserve the owner's draft. Inline
presentation keeps content in the document flow for embedded use.

## Playground

See `/components/date-picker` and `/components/time-picker`.
