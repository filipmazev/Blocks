# Bottom drawer

A reusable bottom drawer that provides the shared Blocks sheet surface, drag handle, swipe-to-dismiss spring, safe-area padding, scrollable body and sticky
footer. It is the extracted foundation used by the Modal bottom-sheet presentation and by date and time pickers on narrow viewports.

## Import

```ts
import { BottomDrawer } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-bottom-drawer
    [(open)]="drawerOpen"
    title="Filters"
    icon="sliders-horizontal"
    subtitle="Narrow the results without leaving the page."
    (closed)="onClosed($event)">
    <p>Drawer content scrolls while the footer stays reachable.</p>

    <div bxDrawerFooter>
        <button bx-button type="button" variant="text" (click)="drawerOpen = false">Cancel</button>
        <button bx-button type="button" (click)="apply()">Apply</button>
    </div>
</bx-bottom-drawer>
```

Set `[embedded]="true"` when an owning overlay already owns the backdrop, focus trap, scroll lock and Escape handling. The Modal bottom-sheet uses this mode:

```html
<bx-bottom-drawer [embedded]="true" [modal]="false" [open]="isOpen()" [(offset)]="currentTranslateY">
    <p>Sheet content</p>
</bx-bottom-drawer>
```

## API

| Input                                                  | Type                                       | Default   | Description                                                                                               |
| ------------------------------------------------------ | ------------------------------------------ | --------- | --------------------------------------------------------------------------------------------------------- |
| `open`                                                 | `boolean`                                  | `false`   | Two-way open state.                                                                                       |
| `offset`                                               | `number`                                   | `0`       | Two-way downward drag displacement in CSS pixels, for hosts coordinating dismissal motion.                |
| `modal`                                                | `boolean`                                  | `true`    | Creates a modal overlay with backdrop, focus trap, scroll lock and Escape handling.                       |
| `embedded`                                             | `boolean`                                  | `false`   | Renders the surface in the owner's DOM with no competing overlay responsibilities.                        |
| `dismissible`                                          | `boolean`                                  | `true`    | Allows user-initiated dismissal.                                                                          |
| `autoClose`                                            | `boolean`                                  | `true`    | Whether a successful close request also closes the drawer. Set false when the owner guards and closes it. |
| `closeOnBackdrop`                                      | `boolean`                                  | `true`    | Backdrop click requests dismissal.                                                                        |
| `showBackdrop`                                         | `boolean`                                  | `true`    | Renders the modal backdrop.                                                                               |
| `showHandle`                                           | `boolean`                                  | `true`    | Renders the touch drag handle.                                                                            |
| `swipeToDismiss`                                       | `boolean`                                  | `true`    | Downward handle drags can dismiss the drawer.                                                             |
| `showCloseButton`                                      | `boolean`                                  | `true`    | Renders the header close action.                                                                          |
| `stickyFooter`                                         | `boolean`                                  | `true`    | Keeps the footer visible while the body scrolls.                                                          |
| `autoFocus`                                            | `boolean`                                  | `true`    | Moves focus into a modal drawer on open.                                                                  |
| `busy`                                                 | `boolean`                                  | `false`   | Shows a busy indicator, sets `aria-busy` and blocks dismissal.                                            |
| `disabled`                                             | `boolean`                                  | `false`   | Disables drawer interactions while content stays readable.                                                |
| `size`                                                 | `'auto' \| 'sm' \| 'md' \| 'lg' \| 'full'` | `'auto'`  | Maximum-height preset.                                                                                    |
| `maxHeight`                                            | `string`                                   | `'92dvh'` | CSS maximum height for the surface.                                                                       |
| `animationDuration`                                    | `number`                                   | `280`     | Entrance, exit and drag-settling duration in milliseconds.                                                |
| `title`, `subtitle`, `icon`, `ariaLabel`, `closeLabel` | `ResolvableText` / `IconName`              | –         | Header content and accessible names; text supports `BX_I18N` translation keys.                            |
| `headerVisible`                                        | `boolean \| undefined`                     | derived   | Forces the header row on or off.                                                                          |
| `panelClass`, `panelStyle`, `surfaceId`                | `string`                                   | `''`      | Consumer styling and DOM identity for the surface.                                                        |
| `closeGuard`                                           | `() => boolean \| Promise<boolean>`        | –         | Optional asynchronous guard consulted before a dismissal.                                                 |

| Output           | Payload                                                                 | Description                                             |
| ---------------- | ----------------------------------------------------------------------- | ------------------------------------------------------- |
| `openChange`     | `boolean`                                                               | Open state change from two-way binding.                 |
| `closeRequest`   | `'backdrop' \| 'escape' \| 'swipe' \| 'close-button' \| 'programmatic'` | Emitted before the guard runs.                          |
| `closed`         | same union                                                              | Emitted after the drawer closes.                        |
| `closeCancelled` | same union                                                              | Emitted when a guard or busy state rejects the request. |

Slots: default content renders in the scrollable body; `[bxDrawerHeader]` adds header content and `[bxDrawerFooter]` adds footer actions.

## Appearance and customization

The drawer uses the shared panel surface material (`panel-surface` mixin), semantic background, text, border and shadow tokens, and the Blocks lighting engine
through `bxSurface`. CSS variables:

- `--bx-drawer-width`: surface width, default `min(100%, 34rem)`.
- `--bx-drawer-max-height`, `--bx-drawer-min-height`: viewport constraints.
- `--bx-drawer-body-padding`: body padding.
- `--bx-drawer-footer-background`, `--bx-drawer-footer-border-color`, `--bx-drawer-handle-color`: footer and handle material.

Reduced transparency and forced colors fall back to the opaque surface. The exit and entrance transitions collapse to zero duration under reduced motion, and
the drag return uses the shared effects spring rather than a separate physics implementation.

The drawer resolves its border from the local neutral theme token rather than inheriting a focused trigger's material edge. Explicit `panelStyle` overrides
remain available.

## Behavior and accessibility

- Modal drawers render as `role="dialog"` with `aria-modal="true"`, an accessible name from `title` or `ariaLabel`, a CDK focus trap, focus restoration and a
  shared scroll lock.
- The drag handle is a native button with an accessible name; tapping it requests dismissal and pointer dragging tracks recent velocity, cancels on Escape,
  pointer cancellation, window blur or resize, and settles with the shared spring.
- The body scrolls independently of the handle, so calendar grids, wheel columns and preset lists keep native scrolling.
- `busy` blocks dismissal and announces activity; `disabled` keeps content readable while preventing handle and close actions.
- Safe-area insets are applied to the surface, and the maximum height uses `dvh` units so mobile browser chrome and the soft keyboard stay usable.
- Nested overlays render above the drawer through the shared CDK overlay stack; an open drawer never traps focus inside an inert ancestor.

## Playground

See the Bottom drawer demo at `/components/bottom-drawer` and the Modal bottom-sheet regression demo at `/components/modal`.
