# Swipe action panel

Internal presentation for [shared Swipe actions](../../directives/swipe-actions/README.md). It renders existing Buttons as horizontal capsules with captions
underneath, plus the existing context menu for right-click/keyboard invocation. The directive owns gestures, command lifecycle and coordination.

## Import

This component is internal. Import `SwipeActionsDirective` from `@filip.mazev/blocks/forms` instead.

## Usage

Apply `bxSwipeActions` to a row container or MenuItem and bind its action arrays. Mark generic movable content with `bxSwipeContent`.

## API

Internal inputs supply physical groups, reveal distance, pending identifiers, availability, overflow labels, and the visible focus origin. Outputs forward
explicit activation and measured lane geometry. No persistence or application command orchestration lives here.

## Appearance and customization

Capsules and captions adapt to the existing row height. Internal CSS classes are namespaced to avoid application style collisions. Disabled/loading captions
remain centered and muted. Only truncated large-row captions have tooltips. Compact names use TooltipDirective dwell, while clipped large captions open
immediately; touch tooltips stay disabled. Native scrolling and circular Previous/Next controls handle overflow in separate padded gutters. Directional masks
soften edges, and the shared spring targets measured anchors without CSS re-snapping. Filled semantic controls opt out of menu-row background suppression.

## Behavior and accessibility

Closed lanes are inert; dragging lanes stay available to gesture input while their controls leave keyboard navigation. Native Button guards and MenuItem busy
state share one action definition. The existing context overlay handles keyboard navigation, positioning and theme inheritance. Disabled overflow arrows retain
a surrounding hit area that prevents focus from falling through to the page and collapsing the row. Promise handlers keep their presentation visible while
pending. Full activations remain stretched, with an inline Retry label after rejection. Success applies the controller’s collapse or dismiss policy.
Pointer/touch release or trackpad commit-threshold crossing activates the command. Success applies completion after any ongoing wheel input ends. Reduced motion
skips decorative travel.

## Playground

The shared message-list and MenuItem examples are reachable on the Examples tab at `/components/menu-item` and `/components/menu`.

Shared swipe actions have a dedicated `/components/swipe-actions` Playground page. It demonstrates ordered appearance motion, immediate collapse interruption,
cancelable full pointer/touch swipes, trackpad reveal, reduced motion, and asynchronous failure/retry. Content translates without being resized.
