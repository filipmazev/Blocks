# Shared row swipe examples

A message list and compact menu demonstrate the same [SwipeActionsDirective](../../../../../../../blocks/forms/directives/swipe-actions/README.md), following
the supplied Apple Mail recording's horizontal capsules and captions.

## Import

This Playground component is registered in the existing Menu and MenuItem Examples tabs. Consumers import `SwipeActionsDirective` from
`@filip.mazev/blocks/forms`; MenuItem is optional for generic list-row integrations.

## Usage

Open `/components/menu-item` or `/components/menu`, select Examples, and find Swipe and context actions. Use horizontal two-finger trackpad scrolling, touch
swiping or pointer dragging directly on a row. Right-click or ContextMenu/Shift+F10 opens the equivalent command list. No three-dot action controls are added.

## API

Rows cover no actions, either direction, both directions, semantic colors, disabled/loading actions, a disabled row, destructive intent and overflow. Overlay
and parent-linked nested menus exercise popup ownership. An explicit context template demonstrates custom-context priority. The output reports action/source.

## Appearance and customization

List and menu sections are stacked with consistent spacing. Rows keep their original height; the complete rounded content highlight moves at fixed dimensions,
with a gap before the transparent action gutter. Individual rows have no borders. Large-row captions stay underneath and receive a tooltip only when truncated.
Compact rows use hover/focus names after a configurable 400 ms dwell, without touch tooltips. Both sizes include constrained groups with round paging arrows,
dedicated gutters, mask fades and spring-aligned paging. Toggle RTL, resize/zoom and use the existing global Appearance controls.

## Behavior and accessibility

Download, Archive and Delete return delayed promises. Full-swipe capsules remain stretched while showing their own spinner. Fail next download or Fail next
archive/delete consumes one simulated failure; the same action exposes a retry icon and label, with the failure reported in the result area. Retry returns the
same delayed request. Download collapses after success. Archive/Delete use dismissal by default, with application data removed on `swipeDismissed`; turn off
Remove completed rows to animate closed instead. Restore rows repopulates removed messages and restores hidden compact previews. Timers clean up on destruction.
Pointer/touch release beyond the threshold activates; trackpads start the request as soon as the commit threshold is crossed. Remaining wheel input is consumed
and successful exit waits for that input to end. Reversing before commit cancels. Read/Unread actions update each message’s blue unread dot above the title and
visible status while retaining its row.

## Playground

Both existing menu pages render the examples below their existing shortcut demonstrations. Generic list rows demonstrate native semantic content using the
shared surface effects infrastructure; action buttons remain Blocks Button instances.

Shared swipe actions have a dedicated `/components/swipe-actions` Playground page. It demonstrates ordered appearance motion, immediate collapse interruption,
cancelable full pointer/touch swipes, trackpad reveal, reduced motion, and asynchronous failure/retry. Content translates without being resized.

For multiple actions, let the entrance finish, ease off and push outward again, or start a fresh swipe. Opening momentum cannot unlock stretch when appearance
completes. At the closed boundary, a direction change or renewed swipe immediately starts another reveal. Content, capsules, captions and padding all accept
continuation. Release motion never adds stretch beyond direct input or normal reveal. Successful trackpad full swipes apply the configured completion after
input settles and the handler succeeds; pending requests retain their stretched presentation. Repeatedly pressing disabled overflow arrows at either end
preserves the exposed row.

The equal-sized Archive and Delete rows both reveal one-to-one and share a resistance factor of 8, held through 15% of additional travel and tapering to one at
90%. Wider stretches scale the excess resistance down using two measured action columns as the reference. Delete retains its later commit point; reverse either
preview before the gesture ends to cancel. Per-action `fullSwipeConfig` overrides and shared row settings are available through action JSON and individual
full-swipe controls in the Swipe Actions Playground. Row presentation, width and RTL are editable; action JSON supports multiple actions, overflow and
unavailable commands. Example toggles use dynamic support sizing so they align with the buttons while the settings row can wrap on narrow screens.

The configurable Playground uses a large mail row with editable sender, subject, preview, unread indicator, width and direction. Compact MenuItems remain
alongside it in Examples.

Read/Unread handlers are synchronous. They show a success checkmark and update the dot without a loading spinner or artificial API wait. The configurable
Playground expands the same first message’s shared template and styles, while keeping its copyable example standalone.
