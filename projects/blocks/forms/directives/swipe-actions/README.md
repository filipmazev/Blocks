# Swipe actions

Reveal contextual actions by moving a row directly with a touch gesture, pointer drag, or horizontal trackpad gesture. The same shared directive works with
MenuItem, native list rows, and other composed row containers. Rows retain their original height and connected silhouette. Right-click and keyboard context
invocation provide the equivalent command list; no three-dot action menus are added.

## Import

```ts
import { SwipeActionsDirective, ISwipeAction, ISwipeActionEvent } from '@filip.mazev/blocks/forms';
import { Menu, MenuItem } from '@filip.mazev/blocks/primitives';
```

Add the standalone directive to the owning component's `imports`. MenuItem is optional for generic row integrations. The directive lives in Forms to reuse
Button while preserving the existing Forms-to-Primitives dependency direction.

## Usage

```ts
protected readonly leftActions: readonly ISwipeAction[] = [
  { id: 'rename', label: 'Rename', icon: 'pencil', color: 'info' },
  { id: 'download', label: 'Download', icon: 'download', color: 'success', handler: () => this.downloadProject() }
];
protected readonly rightActions: readonly ISwipeAction[] = [
  { id: 'delete', label: 'Delete', icon: 'trash-2', role: 'destructive' }
];

protected handleAction(event: ISwipeActionEvent): void {
  // Observe the same event for swipe capsules and context commands.
}
```

```html
<bx-menu>
    <bx-menu-item
        bxSwipeActions
        label="Project"
        icon="folder"
        [leftSwipeActions]="leftActions"
        [rightSwipeActions]="rightActions"
        (swipeAction)="handleAction($event)" />
</bx-menu>
```

For a list row, mark its movable content with `bxSwipeContent`. The host remains stationary and clips overflow; the enclosing primary control moves at its
original dimensions, including its highlight and corner radii. Mark its inner content so the controller can locate that control. Do not apply the directive
directly to a button, input, or native element with restricted children. The public `swipeContent` input can reference an explicit descendant instead of using
the marker.

```html
<ul>
    <li bxSwipeActions [leftSwipeActions]="leftActions">
        <button type="button" (click)="openProject()"><span bxSwipeContent>Project details</span></button>
    </li>
</ul>
```

The application owns row content, dimensions and ordinary activation. MenuItem supplies its internal visual content group automatically, preserving the native
trigger and its material. The directive owns horizontal movement of the primary control; it does not invent list semantics or require application DOM
manipulation.

## API

| Member                | Behavior                                                                                                                                                              |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `leftSwipeActions`    | Optional readonly array, empty by default. A physical leftward gesture reveals the right-hand lane.                                                                   |
| `rightSwipeActions`   | Optional readonly array, empty by default. A physical rightward gesture reveals the left-hand lane.                                                                   |
| `swipeContent`        | Optional descendant `HTMLElement`; defaults to `bxSwipeContent`, or MenuItem's visual content group. Never the host itself.                                           |
| `swipeDisabled`       | Generic row interaction guard, default false; MenuItem's own disabled state is also honored.                                                                          |
| `swipeLoading`        | Generic row busy guard, default false; MenuItem's own busy state is also honored.                                                                                     |
| `swipePreviousLabel`  | `ResolvableText`, default `Previous actions`, for native lane overflow paging.                                                                                        |
| `swipeNextLabel`      | `ResolvableText`, default `Next actions`, for native lane overflow paging.                                                                                            |
| `swipeTooltipDwell`   | Compact action-name dwell in milliseconds; default 400. Large clipped-caption tooltips remain immediate; touch tooltips stay disabled.                                |
| `swipeFullAction`     | Boolean or `ISwipeFullActionConfig`; defaults to true. Configures full pointer/touch release or threshold-crossing trackpad activation.                               |
| `swipeAction`         | Emits `ISwipeActionEvent` once per explicit activation, before an optional handler. Pointer/touch release or a trackpad crossing of the commit threshold can emit it. |
| `swipeActionError`    | Emits `ISwipeActionError` with the original synchronous or asynchronous handler failure.                                                                              |
| `swipeCompletion`     | `'collapse'` (default) or `'dismiss'`; each action can override it through `completion`.                                                                              |
| `swipeRetryLabel`     | Translated default retry prefix, `Retry`. Action `retryLabel` overrides the complete retry name.                                                                      |
| `swipeCompletedLabel` | Translated success status, `Done`, announced with the original action label. The capsule displays a checkmark on success.                                             |
| `swipeLoadingLabel`   | Translated pending status, `Working`, announced with the full-swipe action name.                                                                                      |
| `swipeDismissFocus`   | Optional HTMLElement or container of a focusable control. Receives focus after dismissal only if focus was within the row.                                            |
| `swipeDismissed`      | Emits the successful activation after the exit hides the row; remove its item from application data here.                                                             |
| `restoreSwipeRow()`   | Restores a dismissed row for undo/preview reuse; does not change application data. Pending work and active exits are not interrupted.                                 |
| `swipeState()`        | Readonly signal: `closed`, `dragging`, `settling`, `left`, `right`, `pending`, `error`, `dismissing`, or `dismissed`.                                                 |
| `closeSwipeActions()` | Cancels direct manipulation and closes the lane without running a command. Pending handlers and dismissal cannot be closed.                                           |

`ISwipeAction` requires a stable `id`, `label: ResolvableText`, and Lucide `icon`. IDs must be unique across both arrays for one row. Optional `color` uses
Button's semantic roles, defaulting to primary or danger for `role: 'destructive'`. Optional `disabled` and `loading` default to false and guard both
presentations. Optional `ariaLabel` accepts translated text and must contain the exact visible label. Optional `handler` receives the activation event and may
return a promise. Events include `action`, `source` (`swipe`, `context`, or `full-swipe`) the native activation `event`, and `retry: true` when explicitly
retrying a rejected command.

### Asynchronous lifecycle

Return the operation's promise from `handler`. Its button shows a spinner and blocks repeated invocation. Synchronous handlers show a success checkmark without
creating a loading indicator; promise-backed handlers replace the spinner with that checkmark on success. Success feedback remains visible during the existing
close/exit animation and introduces no added dwell. A full swipe holds the edge capsule fully stretched while pending; it does not return to the small capsule.
Other gestures and outside clicks cannot hide pending work. Rejection emits `swipeActionError`, replaces the icon with `retryIcon` (default `rotate-cw`), and
presents `retryLabel` (default the translated retry prefix plus action label). A failed full swipe keeps its stretched capsule and shows the retry text inside
it. Retry is explicit; the same handler receives `retry: true`. Escape or outside interaction can close a failed presentation; its retry state remains available
when reopened. Ordinary clicked/context requests retain their existing presentation while busy.

Successful commands use action `completion`, then row `swipeCompletion`, then `'collapse'`. Collapse clears outward velocity and begins the existing closing
spring. Dismiss preserves the action's extended presentation while the row exits and its occupied space collapses. The directive hides the row, then emits
`swipeDismissed`; the application removes the item from its own data. It never manually removes Angular-owned DOM. Live reduced motion skips decorative exit
travel. `restoreSwipeRow()` restores a hidden row when the application has retained it, such as a preview or undo flow.

```ts
protected readonly actions: readonly ISwipeAction[] = [
  {
    id: 'delete', label: 'Delete', icon: 'trash-2', role: 'destructive', completion: 'dismiss',
    retryLabel: 'Retry Delete', handler: () => this.deleteProject()
  }
];
```

```html
<li bxSwipeActions [leftSwipeActions]="actions" (swipeDismissed)="removeProjectFromList()">
    <button type="button"><span bxSwipeContent>Project details</span></button>
</li>
```

Keep API deletion in the promise-returning handler and local collection removal in `swipeDismissed`, so the exit can finish before Angular destroys the view.
Read/unread or other row updates can keep the default collapse behavior. Focus within a dismissed row moves to `swipeDismissFocus` when provided, otherwise to
the next or previous available sibling control. Focus outside the row is never moved by its completion. If no fallback exists, provide an explicit destination.

`swipeAction` is an observation event; Angular outputs do not await asynchronous subscribers. Do not run the same operation in both the output and handler.
Application-owned `loading` remains an availability/presentation flag; return a promise for managed completion and retry. Replace action arrays immutably when
flags change. Work completing after destruction or a newer operation cannot update the presentation. Translated labels, retry/status text, accessible names and
navigation use optional `BX_I18N` version tracking; plain strings work without an adapter.

### Full swipe and appearance motion

On trackpads, multiple actions stay at their normal reveal until the visible action entrance springs finish. Opening input is discarded at that boundary:
steady, accelerating or decaying opening input cannot become stretch merely because the animation finished. Ease off and push outward again, or start a fresh
swipe, to stretch. There is no additional animation cooldown. Reduced motion completes appearance immediately, while preserving intent checks.

Collapse consumes the current gesture. At the closed boundary, a direction change or renewed impulse can immediately open either side; decaying momentum stays
closed. Release springs cannot stretch the action beyond the distance reached by input or the normal reveal destination. Content, buttons, captions and padding
share the same gesture behavior. Zero-delta events are ignored; a vertical tail settles without activating the full-swipe action.

Revealing actions always follows input one-to-one, including single actions. Resistance starts only when stretching beyond the fully revealed lane. Ordinary
actions use a factor of 1.25, tapering to one at 40% of additional travel. Destructive actions use a factor of 8, held through 15% and tapering to one at 90%.

For stretches longer than two measured action columns, the extra resistance above one is scaled by `two columns / stretch distance`. This bounds the extra input
effort on wide rows while keeping movement no faster than one-to-one. The plateau/end points still follow the available stretch fraction. Reversal uses the same
invertible curve without jumps. Archive explicitly uses the destructive resistance curve in the demo, without becoming a destructive command. A single action
has no entrance gate.

`swipeFullAction` accepts a boolean (default `true`) or `ISwipeFullActionConfig`: `enabled` (true), `armThreshold` (0.65), `commitThreshold` (0.78 for ordinary
actions, 0.94 for destructive actions), and translated `readyLabel` (`Release to activate`). Trackpad settings are `resistance` (initial factor before width
adjustment, 1.25 normally or 8 for destructive actions, clamped to 1–12), `resistancePlateau` (0 normally or 0.15 for destructive actions, clamped to 0–0.35),
and `resistanceEnd` (0.4 normally or 0.9 for destructive actions, clamped above the plateau and at most 1). Plateau/end fractions always use additional travel
beyond reveal. Pointer/touch movement stays one-to-one. `ISwipeAction.fullSwipeConfig` overrides settings per action; explicit action settings take precedence
over explicit row settings and role defaults. `fullSwipe: false` and row `swipeFullAction: false` remain authoritative opt-outs. These are Blocks calibration
defaults, not Apple's undocumented native constants. Thresholds are fractions of the **additional** travel beyond the normal lane. An individual action can opt
out with `fullSwipe: false`. The physical outermost visible command stretches toward content; peers fade and move away, and the edge icon moves inward while its
caption fades. Reverse before release for pointer/touch, or before trackpad input settles, to cancel. Disabled and loading commands never arm. A single action
extends toward the row edge, bounded on wide rows by `--bx-swipe-full-max-width` (default 36rem). Pointer/touch activation waits for release beyond the commit
threshold. Trackpads invoke immediately when actual travel crosses the commit threshold; momentum tails no longer delay the request or its spinner. The
committed burst is consumed without duplicate invocation. If the handler finishes while wheel input is still arriving, the row stays stretched until that burst
ends (80 ms of quiet); asynchronous requests still retain their presentation until they finish. Reverse before crossing the commit threshold to cancel. After
dispatch, the command belongs to the application and cannot be rolled back by reversing a wheel tail. Browsers do not expose stationary trackpad finger contact;
pointer/touch retain explicit release semantics. Pointer/touch gestures wait for their explicit release event, including a stationary hold. Cancellation and
projected velocity never activate an action; the actual accumulated movement must reach the threshold. Constrained groups allow stretching only when their
outermost command is visible. An asynchronous full swipe stays fully stretched through pending and failure; success applies the configured collapse or dismiss
behavior.

Each capsule and caption starts its own spring as its column enters the exposed area, with a 50 ms stagger capped at 150 ms, left-to-right or reversed in RTL;
single commands use smaller deformation. Live reduced motion removes decorative travel and deformation. Content translates at its original width and height,
avoiding text reflow. Reversing an exposed side only collapses it within that gesture. Gestures can start on the content or an exposed action. A fresh gesture
can immediately open the other side while the previous close is settling.

## Appearance and customization

Wide horizontal Button capsules have centered icons and separate captions below. Lanes that would require carousel paging switch to icon-only circles; short
rows retain pills when the action group fits. Their dimensions adapt to the row's actual height; actions do not enlarge the row or reflow its content. The
primary control moves at its original width and height, carrying its rounded hover/active highlight with it. The host clips the movement and the action gutter
stays transparent. Keep generic row material on the moving primary control, not on the host around the actions. The examples use borderless rows within one list
container.

Larger rows show single-line captions underneath, with shared truncation and a tooltip only on clipped text. Compact rows omit captions and show the action name
on mouse hover or keyboard focus after `swipeTooltipDwell` (400 ms initially). Compact names use TooltipDirective's `bxTooltipDwell`; large clipped-caption
tooltips keep their immediate default. Touch tooltips remain disabled. Disabled and busy captions are muted independently of the Button's guarded appearance.
The same native icon slot is retained in a busy context row.

| CSS variable                                              | Behavior                                                                                                                       |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `--bx-swipe-content-gap`                                  | Space between the rounded moving content and the action lane, default `spacing(2)`.                                            |
| `--bx-swipe-action-height`                                | Desired capsule height, default `spacing(10)`, bounded by the available row/caption space.                                     |
| `--bx-swipe-action-width`                                 | Action column width, default measured capsule height × 2.5 plus `spacing(2)`, or height plus `spacing(2)` for compact circles. |
| `--bx-swipe-content-min-width`                            | Desired visible content region, default 50%; overflow may reserve extra room for one full action and its controls.             |
| `--bx-swipe-overflow-gap`, `--bx-swipe-overflow-padding`  | Gaps around paging controls and outer inset; both default to `spacing(1)`.                                                     |
| `--bx-swipe-overflow-fade`                                | Overflow edge fade, default `spacing(3)`; only edges with more actions fade. Forced colors omit the mask.                      |
| `--bx-button-capsule-width`, `--bx-button-capsule-height` | Independent Button capsule geometry outside the swipe panel.                                                                   |

Keep touch-oriented row content tall enough for comfortable targets. Compact desktop menus retain their existing density. Long action groups remain in their
native horizontal lane with circular, vertically centered Previous/Next controls in compact padded gutters with 32px hit targets. A directional mask softens
overflow edges. Paging springs to measured action anchors and retargets repeated clicks; native touch/trackpad input interrupts it. There is no competing CSS
snap at completion. Keyboard focus also reaches overflow; extremely narrow layouts that cannot fit a complete action and both controls retain
right-click/keyboard context access. No action is moved into a three-dot menu. Context lists independently scroll within viewport bounds.

Disabled overflow arrows keep their hit area inside the revealed action group. Pressing a disabled arrow preserves focus and leaves the row open; enabled arrows
retain native focus and keyboard activation.

Filled semantic colors, lighting, opaque intent fills, pressure, loading and high-contrast treatment reuse Button. Live reduced motion snaps settling while
retaining direct manipulation. Reduced transparency adapts the material independently.

## Behavior and accessibility

Pointer gestures claim horizontal intent only after a shared threshold. Touch gestures that start vertically retain native scrolling; once a horizontal swipe is
claimed, vertical drift cannot scroll the page or an enclosing menu until release or cancellation. Adding a second touch cancels the swipe and leaves pinch zoom
available. Horizontal wheel/trackpad bursts use the same rendered position, signed velocity and bounded release destination. Content follows each horizontal
event directly; the shared spring settles only on release. Predominantly vertical wheel input scrolls normally; Ctrl+wheel zoom is never claimed. Ordinary
trackpad bursts settle after an 80 ms idle interval; A stretched gesture invokes at the commit threshold; the same idle interval determines when ongoing input
has ended for completion presentation. Physical gesture directions and configured action ordering remain unchanged in RTL; row and caption text retain their own
direction.

Recent signed velocity, stationary-pause detection and bounded projection come from the existing effects runtime. Settling can be grabbed or reversed without a
jump. Ordinary reveal release never executes a command; only the full-swipe threshold described above does. Cancellation, lost capture, Escape, hidden
documents, teardown and a superseding row roll back owned manipulation. Opening another row closes the previous idle reveal; an in-flight request retains its
visible pending state. Outside interaction and focus leaving the row close idle or failed lanes; pending handlers retain their state.

Right-click, ContextMenu and Shift+F10 open the existing `ContextMenuDirective`. All left actions precede all right actions, each in developer order. Context
icons lead their labels, with shared semantic colors and disabled/busy states. Arrow keys, Home, End and Escape reuse existing context navigation. Dismissal
restores focus to the actual visible trigger; closed lanes are inert; dragging lanes retain pointer input while their controls leave keyboard navigation.
Ordinary rows and empty action arrays retain their existing behavior. Destructive confirmation remains application-owned.

An explicit `bxContextMenu` on the same host retains priority for native right-click and keyboard invocation; its template is not replaced or merged. Swipe
capsules still expose the configured actions. Use only the automatic context if keyboard access to that same shared list is desired.

## Playground

Open `/components/swipe-actions` for its dedicated configurable playground and documentation, or `/components/menu-item` or `/components/menu`, select Examples,
and find Swipe and context actions. A message list and compact MenuItems use the same directive. Examples include both directions, ordinary rows, overflow,
disabled/loading/destructive commands, explicit contexts, nested/overlay menus and RTL. Download demonstrates pending feedback, success-driven collapse, a
visible failed state and a Retry download action that retries the same request. Global Appearance controls exercise themes and motion. The configurable
Playground exposes resistance, plateau/end fractions, arm/commit thresholds and the ready label as individual controls, alongside action JSON, row presentation,
tooltip dwell and RTL. Action JSON supports multiple actions, overflow and unavailable commands; the Examples tab demonstrates these combinations. Archive
explicitly uses the same strong resistance curve as Delete in the examples.

Archive and Delete demonstrate retained full-width loading, failure and retry, and row removal after the exit event. “Remove completed rows” switches success to
collapse; “Restore rows” repopulates the list. The configurable Playground exposes completion and retry/status text, plus a Restore row control for dismissed
previews.

The configurable Playground uses a large mail-style row with editable sender, subject, preview, unread indicator and width. Compact MenuItems remain in
Examples. Message-list Read/Unread actions synchronously update a blue unread dot above the title and visible status, then collapse without removing the row.
Read messages omit the dot without leaving a title indent.

Each action also accepts `iconTemplate` for a custom noninteractive visual in both the capsule and context row. It takes precedence over `icon`; retry,
completion and busy feedback retain their established icons and spinner.

Exposed MenuItem and Select/MultiSelect rows retain the shared selection highlight while actions are visible, including when the pointer moves into the action
lane. The highlight does not commit selection; selected and danger states retain their semantic colors.

Generic composed rows receive `data-bx-swipe-active` on both the host and the moving primary control. Use this presentation attribute to retain the row's
existing hover/highlight fill while actions are exposed; the directive restores any original control attribute on teardown. The shared mail example and
generated configurable preview use the same styling source.

The shared menu/option highlight tracks the moving primary control during reveal and remains associated with that row while hovering its action lane. Generic
mail previews keep their own existing hover fill; neither path changes committed selection or covers the action gutter with another backing.
