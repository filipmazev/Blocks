# Swipe message row

Shared mail content for the Swipe Actions Playground and list examples. This internal presentation keeps a blue unread dot above the full-width title and uses a
borderless, rounded hover/active control.

## Import

Internal Playground component, imported as `SwipeMessageRow` from `@playground/components/shared/swipe-message-row/swipe-message-row`.

## Usage

Apply `bxSwipeActions` to its host or an enclosing list item. Its primary button supplies the `bxSwipeContent` marker. The shared swipe controller moves that
button at its original size, including its rounded highlight.

## API

`label`, `subject`, `preview`, `unread`, `disabled`, and `loading` configure the row. `open` reports ordinary activation. Read/unread updates in the examples
are synchronous and retain the row.

## Appearance and customization

`--bx-swipe-row-radius` overrides the row radius. Lists derive their nested radius from the container's border and padding. The unread dot uses the existing
blue palette token and forced-color Highlight; visible Read/Unread text also communicates state. Read messages remove the dot without indenting their title.

## Behavior and accessibility

The native button is named by its title and described by its visible read status. The controller provides the equivalent swipe and keyboard context actions.
Rows have no independent material border; action gutters remain transparent.

## Playground

The first list row in `/components/swipe-actions` Examples and its configurable Playground share this component and default message content.
