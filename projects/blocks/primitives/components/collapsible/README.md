# Collapsible

A standalone disclosure. The same component also provides the bx-accordion-item selector.

## Public import

```typescript
import { Collapsible } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-collapsible title="Project details" [(expanded)]="expanded" [region]="true">
    <p>Persistent content.</p>
</bx-collapsible>
<bx-collapsible title="Notifications" [titleTemplate]="heading" />
<ng-template #heading let-title let-expanded="expanded">
    <span>{{ title }} · {{ expanded ? 'Open' : 'Closed' }}</span>
</ng-template>
<bx-collapsible title="Notifications" [trailingTemplate]="status" />
<ng-template #status><bx-tag text="Current theme" size="small" [focusable]="false" /></ng-template>
<bx-collapsible title="Lazy content" [contentTemplate]="details" />
<ng-template #details><p>Created only while expanded.</p></ng-template>
```

## API

| API                   | Default   | Behavior                                                                                                              |
| --------------------- | --------- | --------------------------------------------------------------------------------------------------------------------- |
| `title`               | required  | Translated heading and button name                                                                                    |
| `expanded`            | false     | Two-way state model                                                                                                   |
| `disabled`            | false     | Prevents toggling and heading focus                                                                                   |
| `readonly / readOnly` | false     | Prevents user toggling while retaining focus                                                                          |
| `headingLevel`        | 3         | Heading level, clamped to 1–6                                                                                         |
| `region`              | false     | Adds a named region for substantial content                                                                           |
| `titleTemplate`       | absent    | Noninteractive heading template with `ICollapsibleTitleContext`: `$implicit` translated title and `expanded` state    |
| `trailingTemplate`    | absent    | Noninteractive content at the heading's logical end, before the chevron; receives the same context as `titleTemplate` |
| `contentTemplate`     | absent    | Lazy template, recreated on expansion                                                                                 |
| `id`                  | generated | Base ID for the trigger and panel                                                                                     |
| `toggle() / focus()`  | —         | Guarded toggle and heading focus                                                                                      |

Keep title templates noninteractive; the enclosing native button owns keyboard activation and the accessible name. Use a number-only `Tag` for counts.

`trailingTemplate` places status text, tags, or icons on the right in LTR layouts and on the left in RTL layouts. Content can wrap on narrow screens. Import
`Tag` from the Primitives entry point for the example above. Keep trailing content noninteractive and set embedded tags to `[focusable]="false"`; the heading
remains one disclosure button, and its accessible name includes the status content.

Projected content remains mounted while collapsed; lazy template state is recreated on reopening. Application-driven expanded changes remain possible for
disabled/readonly sections.

## Appearance and customization

`--bx-collapsible-background`, `--bx-collapsible-border`, `--bx-collapsible-radius`, `--bx-collapsible-padding` and `--bx-collapsible-content-padding` follow
shared semantic defaults.

The heading's hover background follows the surface's inner corners. Expanded headings keep rounded top corners and square bottom corners, with no divider
between the heading and content. Accordion items share this appearance.

## Behavior and accessibility

Native button activation, aria-expanded and aria-controls connect the heading and panel. Hidden panels are inert. Programmatic collapse moves contained focus to
the heading. Optional regions avoid filling the page with unnecessary landmarks.

## Playground

`/components/collapsible` includes live examples and shared appearance controls.
