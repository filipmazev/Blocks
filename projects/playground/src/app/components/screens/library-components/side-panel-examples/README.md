# Side panel playground example

Exercises the public declarative panel API, projected sections, and persistent form state. The authoritative library guide is
[SidePanel](../../../../../../../blocks/primitives/components/side-panel/README.md).

## Import

Use `SidePanel` and the three projection directives from `@filip.mazev/blocks/primitives`.

## Usage

Open the panel and change its placement, width, element containment, and optional blocking backdrop. Edit the note, close, and reopen to inspect persistence.
Drag the inner edge or focus it and use arrows. The numeric width input and panel model stay in sync; this example allows shrinking within explicit 240–640px
limits, still capped by its container.

## API

The preview uses SidePanelLayout and a minimum-width `{ '2xl': 'push' }` policy, with overlay below that threshold. The preview owns a boolean open signal and
binds it to the panel model. Preview controls use public Blocks form APIs.

## Appearance and customization

The heading demonstrates `headerIcon` with a themed information icon and backing. Its typography, divider, spacing, and compact close button are shared with
Modal Side; the optional projected banner remains a separate section above it.

Placement and width share the first control row; containment and backdrop toggles share the second and wrap on narrow screens. The preview uses shared semantic
tokens and a bounded example container. Turning containment off shows viewport-relative positioning.

## Behavior and accessibility

The surrounding-page action reports clicks while the nonmodal panel is open. Check keyboard focus, Escape dismissal, focus restoration, narrow bounds, and live
appearance/reduced-motion changes manually.

## Playground

Open `/components/side-panel`.
