import type { InputSignal, OutputEmitterRef, Signal } from '@angular/core';

import { NgClass, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output, TemplateRef, viewChildren } from '@angular/core';

import type { IModalCenteredModalClassesState } from '@modal/interfaces/imodal-centered-modal-classes-state.interface';

import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';

import { ModalConfig } from '@modal/classes/modal-config';
import { ModalBanner } from '@modal/components/shared/ui/banner/modal-banner';
import { ModalBottomSheet } from '@modal/components/views/bottom-sheet/modal-bottom-sheet';
import { IModalView } from '@modal/interfaces/imodal-view.interface';
import { ModalCloseMode } from '@modal/types/modal.types';

@Component({
  selector: 'bx-modal-centered',
  imports: [BxSurfaceDirective, NgTemplateOutlet, NgClass, ModalBottomSheet, ModalBanner, Icon],
  templateUrl: './modal-centered.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './modal-centered.scss'
})
export class ModalCentered<D = unknown, R = unknown> implements IModalView<D, R> {
  /** Resolved CSS classes for the modal layout, wrapper, and animation state. */
  public readonly modalClasses: Signal<IModalCenteredModalClassesState> = computed(() => {
    return {
      'centered-modal-content-wrapper': true,
      'centered-modal-default-style': this.hasDefaultContentWrapperClass() || this.hasBanner(),

      'centered-modal-animate-in': this.isAnimated() && this.isOpen(),
      'centered-modal-animate-out': this.isAnimated() && !this.isOpen()
    };
  });

  /** Custom modal header template registered with the lifecycle host; null uses the configured banner. Required input. */
  public readonly headerTemplate: InputSignal<TemplateRef<void> | null> = input.required<TemplateRef<void> | null>();
  /** Custom modal footer template registered with the lifecycle host; null omits custom footer content. Required input. */
  public readonly footerTemplate: InputSignal<TemplateRef<void> | null> = input.required<TemplateRef<void> | null>();
  /** Resolved modal configuration supplied by the modal lifecycle host. Required input. */
  public readonly config: InputSignal<ModalConfig<D, R> | undefined> = input.required<ModalConfig<D, R> | undefined>();
  /** Modal DOM identifier supplied by the lifecycle host; null leaves the identifier unset. Required input. */
  public readonly id: InputSignal<string | null> = input.required<string | null>();
  /** Current open state of the overlay. Required input. */
  public readonly isOpen: InputSignal<boolean> = input.required<boolean>();
  /** Whether decorative motion is enabled after applying shared reduced-motion preferences. Required input. */
  public readonly isAnimated: InputSignal<boolean> = input.required<boolean>();
  /** Whether the responsive layout currently delegates presentation to a bottom sheet. Required input. */
  public readonly isBottomSheetModalActive: InputSignal<boolean> = input.required<boolean>();
  /** Duration of overlay entrance and exit motion in milliseconds. Required input. */
  public readonly animationDuration: InputSignal<number> = input.required<number>();
  /** Whether the view should apply the standard modal content-wrapper styling. Required input. */
  public readonly hasDefaultContentWrapperClass: InputSignal<boolean> = input.required<boolean>();
  /** Whether the modal renders its configured heading and close-action banner. Required input. */
  public readonly hasBanner: InputSignal<boolean> = input.required<boolean>();

  /** Emits a requested modal close mode; the lifecycle host performs guarded dismissal. */
  // eslint-disable-next-line @angular-eslint/no-output-native -- Preserve the public modal close event name.
  public readonly close: OutputEmitterRef<ModalCloseMode | undefined> = output<ModalCloseMode | undefined>();
  /** Emits pointer activation of the backdrop for the lifecycle host to handle. */
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix -- Keep the existing modal backdrop event.
  public readonly onBackdropClick: OutputEmitterRef<MouseEvent> = output<MouseEvent>();

  /** Bottom-sheet child view currently rendered by the responsive modal presentation, if present. */
  public readonly bottomSheet: Signal<readonly ModalBottomSheet<unknown, unknown>[]> = viewChildren(ModalBottomSheet);
}
