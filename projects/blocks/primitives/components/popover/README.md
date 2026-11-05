# Popover

A general content surface and trigger for interactive help, compact forms and contextual details. Uses the existing CDK overlay, theme inheritance and surface
engine.

## Public import

```typescript
import { Popover, PopoverDirective } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<button [bxPopover]="details" #popover="bxPopover" [popoverConfig]="{ ariaLabel: 'Project details', placement: 'bottom' }">Details</button>
<ng-template #details>
    <bx-popover>
        <p>Interactive content belongs here.</p>
        <button (click)="popover.close()">Done</button>
    </bx-popover>
</ng-template>
```

## API

| API                           | Default  | Behavior                                  |
| ----------------------------- | -------- | ----------------------------------------- |
| `[bxPopover]`                 | required | Content `TemplateRef<unknown>`            |
| `popoverConfig`               | `{}`     | `IPopoverConfig` overrides                |
| `popoverDisabled`             | `false`  | Prevents opening and closes an open panel |
| `isOpen()`                    | `false`  | Read-only trigger state                   |
| `openedChange`                | —        | Emits a boolean after opening or closing  |
| `open() / close() / toggle()` | —        | Programmatic trigger methods              |
| `close(false)`                | —        | Dismiss without restoring trigger focus   |
| `opaque` on `bx-popover`      | absent   | Local reduced-transparency override       |

`IPopoverConfig`: `placement` (bottom), `offset` (8px), `ariaLabel` (Details), `autoFocus` (true), `closeOnOutside` (true), `closeOnEscape` (true),
`closeOnFocusOutside` (true). Labels accept `ResolvableText`.

Provide `{ provide: BX_POPOVER_DEFAULTS, useValue: { placement: 'top' } }` for application defaults. Instance properties win, followed by shared defaults and
library defaults.

## Appearance and customization

`--bx-popover-width`, `--bx-popover-max-width`, `--bx-popover-padding`, `--bx-popover-background`, `--bx-popover-color`, `--bx-popover-border`,
`--bx-popover-radius` and `--bx-popover-shadow`. Use Blocks buttons and fields for controls inside the content. The material wrapper clips decorative layers; a
separate content region scrolls vertically only when its content exceeds the available viewport.

## Behavior and accessibility

Use a native button trigger. The directive owns nonmodal dialog semantics and its translated accessible name. Focus moves to the first tabbable control or the
panel; Escape restores trigger focus. Tab exits at the panel boundary. Inside clicks stay open. Surface motion follows BxA11yService. Panels scroll within the
viewport and inherit live theme changes, including modal/top-layer contexts. For a modal interaction use the modal package.

## Playground

`/components/popover` includes live examples and shared appearance controls.
