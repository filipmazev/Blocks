# Tabs

Switch between related panels with themed segmented or underline tabs.

## Import

```ts
import { Tabs, Tab, TabContentDirective } from '@filip.mazev/blocks/primitives';
```

Add these standalone declarations to the consuming component's `imports`.

## Usage

```html
<bx-tabs ariaLabel="Project information" [(selectedValue)]="selectedTab">
    <bx-tab label="Documentation" value="documentation">
        <ng-template bxTabContent>
            <app-documentation />
        </ng-template>
    </bx-tab>
    <bx-tab label="Code Examples" value="code" color="accent">
        <ng-template bxTabContent>
            <app-examples />
        </ng-template>
    </bx-tab>
    <bx-tab label="Unavailable" value="unavailable" [disabled]="true" />
</bx-tabs>
```

Initialize `selectedTab` to a tab's value or `null` to select the first enabled tab. Values must be unique within a group. Omitted values receive generated
identifiers.

Use `variant="underline"` for file tabs or a full-width navigation strip. The default `segmented` variant groups the controls in a compact material.

## API

| Declaration           | Input or method                 | Behavior                                                                                                                |
| --------------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `Tabs`                | `ariaLabel: ResolvableText`     | Accessible group name; defaults to `Tabs`.                                                                              |
| `Tabs`                | `variant: TabsVariant`          | `segmented` or `underline`.                                                                                             |
| `Tabs`                | `selectedValue: string \| null` | Two-way selection model with `selectedValueChange`.                                                                     |
| `Tabs`                | `select(value: string)`         | Selects an enabled tab by value.                                                                                        |
| `Tabs`                | `dragSelection: boolean`        | Defaults to true. Drag with a pointer or hold then drag with touch; release selects using position and recent velocity. |
| `Tab`                 | `label: ResolvableText`         | Required visible and accessible label.                                                                                  |
| `Tab`                 | `value: string`                 | Unique selection value.                                                                                                 |
| `Tab`                 | `disabled: boolean`             | Removes the tab from selection and keyboard navigation.                                                                 |
| `Tab`                 | `color: TabColor`               | `primary` (default), `accent`, `success`, `danger`, `info`, `warn`, or `grayscale`.                                     |
| `Tab`                 | `textColor: Color`              | Optional theme token for the header label and its icons.                                                                |
| `Tab`                 | `highlightColor: Color`         | Overrides the selected tint, border, underline and emitted light. Defaults to the tab's color.                          |
| `Tab`                 | `contentColor: Color`           | Optional inherited text color for the panel's content.                                                                  |
| `Tab`                 | `icon: IconName`                | Optional leading Blocks icon.                                                                                           |
| `Tab`                 | `endIcon: IconName`             | Optional trailing Blocks icon.                                                                                          |
| `TabContentDirective` | `ng-template[bxTabContent]`     | Defers construction until selection and destroys the view when deselected.                                              |

Labels accept strings or `{ key: 'translation.key' }` using `BX_I18N`. Removing or disabling the selected tab selects the first enabled tab. An empty or fully
disabled group has no selected panel and a `null` model.

## Per-tab colors and icons

```html
<bx-tabs ariaLabel="Workspace">
    <bx-tab label="Overview" icon="house" color="primary">Overview content.</bx-tab>
    <bx-tab label="Checks" icon="badge-check" endIcon="chevron-right" color="success"> All checks passed. </bx-tab>
    <bx-tab label="Activity" icon="activity" color="info" textColor="text-warn" highlightColor="text-warn" contentColor="text-info"> Recent activity. </bx-tab>
</bx-tabs>
```

Color overrides use the existing Blocks `Color` tokens, including semantic tokens such as `text-success` and palette tokens such as `purple-500`. Tokens follow
the active theme. `textColor` styles the header in both selected and inactive states; `contentColor` supplies an inherited panel color without overriding
projected components' own semantic styles. Icons are decorative and inherit the header's text color. Their leading/trailing placement follows the text
direction.

## Content lifecycle

Direct content is supported for simple panels:

```html
<bx-tabs ariaLabel="Project details">
    <bx-tab label="Overview"><p>Project overview.</p></bx-tab>
    <bx-tab label="Activity"><p>Recent updates.</p></bx-tab>
</bx-tabs>
```

Angular constructs directly projected components eagerly. Use `ng-template bxTabContent` for lazy documentation, syntax highlighting or other work that should
run only for the selected panel. Panel-local state is recreated when revisiting a lazy panel; keep persistent state in the consuming component or a service.

## Appearance

Tabs use Blocks semantic colors, spacing, radius, focus and surface effects. The shared glass header remains transmissive, while the selected tab has a
translucent tint and emits a restrained amount of its highlight color into nearby surfaces. The default highlight follows the primary palette role. Use
`color="accent"` for the second tone, such as supporting Code Examples navigation. The initial render uses the same glass styling before the runtime mounts, and
transitions apply to later interactions. Appearance settings and reduced motion follow `ThemingService` and `BxA11yService`, like other primitives. Forced
colors use a visible selected outline.

Reduced transparency gives the header and selected tint opaque fills. Foreground tab triggers leave that selection visible; hover uses a separate neutral fill.
The selected shape and underline remain visible independently of text color, and live preference changes preserve selection, scrolling, and dragging.

`--bx-tabs-panel-gap` customizes the space below the headers. Panels follow the page's natural scroll flow by default. For a bounded viewer, set
`--bx-tabs-panel-overflow: auto` together with `--bx-tabs-max-panel-height` or a constrained group height to keep headers visible while content scrolls. Let the
panel own scrolling instead of also adding scroll containers to nested code blocks. Header labels scroll horizontally only when the actual tab row exceeds the
available width; the animated surface is clipped in a separate decorative layer so stretching and overshoot cannot create a scrollbar. The glass decoration sits
outside that scroll area.

## Keyboard and accessibility

Mouse and pen can press a header and drag immediately. Touch swipes retain native horizontal header scrolling and vertical page scrolling. Hold a tab for 200 ms
before dragging to select instead; the material responds when the hold is ready. Pinch zoom and ordinary taps remain available. Set `[dragSelection]="false"` to
disable selection dragging for every input without changing scrolling, clicks, or keyboard navigation.

During selection dragging, the surface tracks the actual gesture and interpolates its width between enabled headers. Panels, `selectedValue`, and ARIA selection
remain committed until release. A release projects recent velocity toward the nearest enabled header, bounded to a local tab span; a short pause removes
momentum for precise placement. A flick can therefore reach the next tab before the pointer reaches its midpoint. The release spring retains gesture velocity.
Escape, pointer cancellation, lost capture, window blur, vertical scrolling, or release beyond the header's vertical tolerance restores the committed selection.
External selection, changed geometry and removed/disabled targets cancel stale gestures. Holding near an overflowing header's edges scrolls continuously using
the shared frame clock. Release, cancellation and scroll boundaries stop that work.

Programmatic changes and clicks use the same retargetable spring. Rapid changes preserve position and velocity, and variable-width headers resize the surface
continuously. There is no entrance movement. Live reduced motion snaps selection and removes pressure/stretch while retaining direct manipulation and selected
state. Reduced transparency uses the engine's opaque fallback independently. The moving surface remains a receiver in the existing lighting engine. Panels
switch immediately to preserve dynamic content height; no panel-position animation is introduced. Programmatic replacement of a focused panel returns focus to
the newly selected header.

Tab enters the selected header; another Tab moves into its panel. Left and Right select and focus the next enabled header, wrapping at the ends and respecting
right-to-left layout. Home and End select the first and last enabled tabs. Native Enter and Space activation also work.

Each header has `role="tab"`, roving `tabindex`, `aria-selected` and a matching `aria-controls`. Panels use `role="tabpanel"`, a matching `aria-labelledby`, and
unique generated IDs. Nested groups maintain independent selection and keyboard handling.

## Playground

Open `/components/tabs` for enabled and disabled tabs, dynamic selection, lazy content and both appearances. The modal and toast configurators also use Tabs for
Documentation, Code Examples and source files.

The pilot controls include unequal-width labels, programmatic selection, dynamic insertion/removal and an overflow list. Compare quick touch swipes with
hold-and-drag, slow placement with short flicks, and stationary edge scrolling. Use `/appearance` for light/dark/custom palettes and independent reduced-motion
and opaque-surface settings.
