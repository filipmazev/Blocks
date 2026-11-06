# Modal

Service-driven dialogs with typed content and results, centered and side layouts, responsive bottom sheets, close guards, and shared Blocks appearance.

## Import

```ts
import { Modal, ModalService, ModalHeaderDirective, ModalFooterDirective } from '@filip.mazev/blocks/modal';
```

Install `@filip.mazev/blocks` and follow the [package setup](../README.md). Modal is a secondary entry point of that package.

## Usage

Create standalone content in `message-dialog.ts`:

```ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button } from '@filip.mazev/blocks/forms';
import { Modal } from '@filip.mazev/blocks/modal';

@Component({
    selector: 'app-message-dialog',
    imports: [Button],
    template: '<p>{{ data }}</p><button bx-button (click)="confirm()">Confirm</button>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageDialog extends Modal<string, boolean> {
    protected confirm(): void {
        this.modal.close('confirm', true);
    }
}
```

Open it from an application action:

```ts
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Button } from '@filip.mazev/blocks/forms';
import { ModalService } from '@filip.mazev/blocks/modal';
import { MessageDialog } from './message-dialog';

@Component({
    selector: 'app-example',
    imports: [Button],
    template: '<button bx-button (click)="open()">Open dialog</button>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Example {
    private readonly modalService = inject(ModalService);
    private readonly destroyRef = inject(DestroyRef);

    protected open(): void {
        const ref = this.modalService.open<string, boolean>(MessageDialog, {
            data: 'Save these changes?',
            header: { text: 'Confirm changes' },
            style: { layout: 'center', breakpoints: { sm: 'bottom-sheet' } }
        });

        ref.afterClosed()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((result) => {
                console.log(result.state, result.data);
            });
    }
}
```

For custom header/footer content, add `ModalHeaderDirective` and `ModalFooterDirective` to the content component's imports and use `*appModalHeader` and
`*appModalFooter`. These existing selectors remain supported.

## API

### Content and references

`Modal<D, R>` supplies typed `data`, the active `modal: ModalRef<D, R>`, `onModalInit()`, and `close(result?)` (cancel mode).
`ModalService.open<D, R>(ContentComponent, config?)` returns that reference.

| Member                                | Behavior                                                                                |
| ------------------------------------- | --------------------------------------------------------------------------------------- |
| `close(state?, result?, forceClose?)` | Close with `confirm` or `cancel` mode; force closing bypasses guards.                   |
| `modalState$()`                       | Observe `OPENING`, `OPEN`, `CLOSING`, and `CLOSED`.                                     |
| `backdropClick()`                     | Observe backdrop pointer events.                                                        |
| `afterClosed()`                       | Observe the final `IModalCloseResult<R \| undefined>` with `state` and optional `data`. |
| `modalConfig`                         | Read the resolved configuration.                                                        |

Use supported configuration and slots to customize the dialog. Applications do not need to inspect its component references or DOM.

### Configuration

`IModalConfig<D, R>` accepts:

| Property                          | Default and purpose                                                                            |
| --------------------------------- | ---------------------------------------------------------------------------------------------- |
| `data`                            | Optional typed content payload.                                                                |
| `header`                          | Optional `{ text: ResolvableText, icon?: IIconData }`.                                         |
| `style`                           | Optional `IModalStyleConfig` described below.                                                  |
| `open`                            | `true`; initial open state.                                                                    |
| `disableClose`                    | `false`; prevent ordinary dismissal.                                                           |
| `disableCloseOnBackdropClick`     | `false`; restrict backdrop dismissal only.                                                     |
| `disableCloseOnNavigation`        | `false`; retain the dialog during navigation when enabled.                                     |
| `closeGuard`                      | Optional `ModalCloseGuard`.                                                                    |
| `closeGuardOnlyOnCancel`          | `true`; run the guard for cancellation only.                                                   |
| `id`                              | Generated unique identifier when omitted.                                                      |
| `contentClasses`, `contentStyles` | Optional content presentation overrides.                                                       |
| `afterClose`                      | Optional observable callback contract. Prefer `afterClosed()` for application result handling. |

Instance options override `ModalGlobalSettingsService` defaults. Its `update()` currently applies `animate`, `hasBackdrop`, and `disableCloseOnBackdropClick`;
other exposed default signals can be configured directly before opening.

### Close guards

Extend `ModalCloseGuard` and implement `canClose(modalService)` returning a boolean, Promise, or Observable. A false result retains the dialog.
`ModalConfirmCloseGuard<D, R>(ConfirmationComponent, config)` opens a typed confirmation dialog and waits for its result. Keep application-owned unsaved state
in the application; provide the guard when opening its content. `forceClose: true` deliberately bypasses the guard.

### Declarative nonmodal panels

For page-owned inspectors and filters, use [SidePanel](../primitives/components/side-panel/README.md) from the primitives entry point with its boolean `open`
model. It shares square panel corners, surface material, layout, and close-control presentation with Modal Side while keeping nonmodal behavior separate. Modal
continues to own its guarded service lifecycle, modal semantics, nested stacking, backdrops, focus trapping/restoration, and scroll locks.

## Appearance and customization

`IModalStyleConfig` supports `layout: 'center' | 'left' | 'right' | 'bottom-sheet'`, responsive `breakpoints`, `animate` (true), `hasBackdrop` (true),
`showCloseButton` (true), `closeDelay` (175 ms), `contentWrapper` (true), `overrideFullHeight` (false), and optional `wrapperClasses`/`wrapperStyles`.
`mobileConfig` accepts `downSwipeLimit` (3) and optional `customHeight` for bottom sheets.

Breakpoints use a max-width strategy: sort overrides from smallest to largest and apply the first matching threshold. Above all thresholds, use `layout`. Keys
match the [core breakpoint tokens](../core/README.md): `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, and `4xl`.

The dialog inherits palette, semantic tokens, and appearance from `ThemingService`. See the
[appearance guide](../../playground/src/app/components/screens/appearance/README.md) for application-wide configuration.

All modal layouts share the declarative SidePanel's translucent surface material and semantic background tokens. `--bx-modal-bg` and `--bx-modal-text` remain
modal-specific overrides, falling back to `--bx-panel-bg` / `--bx-panel-text` and then `--bx-bg-surface` / `--bx-text-primary`. Root dialogs retain their normal
0.52 opacity floor and shared appearance preferences. Left/right modal panels have four square corners; centered dialogs and bottom sheets retain their shapes.

The first dialog paints dimming outside its surface, while the shared backdrop retains blur and pointer dismissal. This prevents the root surface from blending
with its own black scrim. Its centered animation keeps dimming on an unscaled frame, so the backdrop remains viewport-sized during zoom.

### Nested dialogs

Each nested dialog restores an independent fixed backdrop and dims the parent normally. Opening or closing a child never changes the parent's material or turns
its backdrop off. The first nested dialog uses a minimum 0.9 material opacity; the next nested dialog and deeper levels use 1. More opaque application or
accessibility settings still take precedence. This policy applies to centered, side, and bottom-sheet layouts, including responsive layout changes and close
guards. Depth follows the mounted modal stack and updates when an intervening dialog is removed; a dialog remains mounted through its close animation.

Customize the floors through the shared settings service. Index zero is the first nested dialog; the last entry repeats for deeper levels. An empty array
retains ordinary material at every depth. Values clamp to 0.52–1; nonfinite entries use the defaults for their depth. Replace the array when updating it;
mounted modals respond reactively.

```typescript
import { inject } from '@angular/core';
import { ModalGlobalSettingsService } from '@filip.mazev/blocks/modal';

private readonly modalGlobalSettingsService = inject(ModalGlobalSettingsService);

// First nested dialog: at least 90% opaque; further nesting: fully opaque.
this.modalGlobalSettingsService.nestedOpacityFloors.set([0.9, 1]);
```

`hasBackdrop: false` keeps that dialog's backdrop off. Reduced-transparency and forced-color modes retain the opaque fallback.

## Behavior and accessibility

Open content through `ModalService` so focus handling, Escape/backdrop dismissal, close guards, scroll locks, layout, and cleanup stay coordinated.
`ScrollLockService` keeps separate locks for concurrent overlays. Closing one overlay does not unlock another. Reduced motion takes precedence over requested
animation; reduced transparency and forced colors receive opaque backdrop presentation.

Header text accepts `ResolvableText` and updates through the optional `BX_I18N` adapter. Content components own the translation and accessible naming of their
custom actions, descriptions, errors, and form controls. Keep actions reachable in constrained viewports and preserve focus when completing asynchronous work.

## Playground

The live dialog includes **Open nested dialog**, which can be used recursively to compare the root, 90% nested, and fully opaque deeper surfaces. Closing a
child returns to its parent. The confirm-close guard exercises the same independent backdrop and depth policy.

Open `/modal` for the configurator, `/components/modal-core` for the lifecycle host, or the centered, side, bottom-sheet, header, footer, and backdrop entries
in the component catalog. The examples demonstrate typed results and guarded dismissal.
