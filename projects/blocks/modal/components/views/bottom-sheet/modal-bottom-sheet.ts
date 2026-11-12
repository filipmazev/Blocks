import type { InputSignal, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output, signal, TemplateRef } from '@angular/core';

import { BottomDrawer } from '@filip.mazev/blocks/primitives';

import { ModalConfig } from '@modal/classes/modal-config';
import { ModalBanner } from '@modal/components/shared/ui/banner/modal-banner';
import { ModalCloseMode } from '@modal/types/modal.types';

/**
 * Bottom-sheet presentation for the Modal entry point.
 *
 * The reusable `bx-bottom-drawer` owns the drag handle, swipe gesture, spring settling, safe-area padding and scrollable body. This view supplies the
 * modal banner, registered header/footer templates and the guarded close event, so Modal keeps its existing service contract and variants.
 */
@Component({
  selector: 'bx-modal-bottom-sheet',
  imports: [BottomDrawer, NgTemplateOutlet, ModalBanner],
  templateUrl: './modal-bottom-sheet.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './modal-bottom-sheet.scss'
})
export class ModalBottomSheet<D = unknown, R = unknown> {
  protected readonly isSheetOpen: Signal<boolean> = computed(() => this.isOpen() && !this.isSwipingVerticallyFinished());
  protected readonly isDismissible: Signal<boolean> = computed(() => this.config()?.disableClose !== true);
  protected readonly resolvedMaxHeight: Signal<string> = computed(() => String(this.config()?.style?.mobileConfig?.customHeight ?? '') || '98dvh');
  protected readonly sheetStyles: Signal<string> = computed(
    () =>
      `--bx-drawer-width: 100%; --bx-drawer-min-height: 60dvh; --bx-drawer-body-padding: 0; --bx-drawer-footer-border-color: transparent; ${this.config()?.style?.wrapperStyles ?? ''}`
  );

  /** Current vertical dismissal displacement in CSS pixels, shared with the reusable drawer's drag gesture. Initially `0`. */
  public readonly currentTranslateY: WritableSignal<number> = signal(0);

  /** Whether the sheet should render its exit position because the modal is closing. Initially `false`. */
  public readonly isSwipingVerticallyFinished: WritableSignal<boolean> = signal(false);

  /** Modal DOM identifier supplied by the lifecycle host; null leaves the identifier unset. Required input. */
  public readonly id: InputSignal<string | null> = input.required<string | null>();
  /** Custom modal header template registered with the lifecycle host; null uses the configured banner. Required input. */
  public readonly headerTemplate: InputSignal<TemplateRef<void> | null> = input.required<TemplateRef<void> | null>();
  /** Custom modal footer template registered with the lifecycle host; null omits custom footer content. Required input. */
  public readonly footerTemplate: InputSignal<TemplateRef<void> | null> = input.required<TemplateRef<void> | null>();
  /** Resolved modal configuration supplied by the modal lifecycle host. Required input. */
  public readonly config: InputSignal<ModalConfig<D, R> | undefined> = input.required<ModalConfig<D, R> | undefined>();
  /** Current open state of the overlay. Required input. */
  public readonly isOpen: InputSignal<boolean> = input.required<boolean>();
  /** Whether decorative motion is enabled after applying shared reduced-motion preferences. Required input. */
  public readonly isAnimated: InputSignal<boolean> = input.required<boolean>();
  /** Whether the modal renders its configured heading and close-action banner. Required input. */
  public readonly hasBanner: InputSignal<boolean> = input.required<boolean>();
  /** Duration of overlay entrance and exit motion in milliseconds. Required input. */
  public readonly animationDuration: InputSignal<number> = input.required<number>();

  /** Emits a requested modal close mode; the lifecycle host performs guarded dismissal. */
  // eslint-disable-next-line @angular-eslint/no-output-native -- Preserve the public modal close event name.
  public readonly close: OutputEmitterRef<ModalCloseMode | undefined> = output<ModalCloseMode | undefined>();

  protected onCloseRequest(): void {
    if (this.isDismissible()) this.close.emit('cancel');
  }
}
