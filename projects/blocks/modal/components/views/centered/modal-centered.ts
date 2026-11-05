import type { InputSignal, OutputEmitterRef, Signal } from '@angular/core';

import { NgClass, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output, TemplateRef, viewChildren } from '@angular/core';

import type { IModalCenteredModalClassesState } from '@modal/components/views/centered/interfaces/imodal-centered-modal-classes-state.interface';

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
  public readonly modalClasses: Signal<IModalCenteredModalClassesState> = computed(() => {
    return {
      'centered-modal-content-wrapper': true,
      'centered-modal-default-style': this.hasDefaultContentWrapperClass() || this.hasBanner(),

      'centered-modal-animate-in': this.isAnimated() && this.isOpen(),
      'centered-modal-animate-out': this.isAnimated() && !this.isOpen()
    };
  });

  public readonly headerTemplate: InputSignal<TemplateRef<void> | null> = input.required<TemplateRef<void> | null>();
  public readonly footerTemplate: InputSignal<TemplateRef<void> | null> = input.required<TemplateRef<void> | null>();
  public readonly config: InputSignal<ModalConfig<D, R> | undefined> = input.required<ModalConfig<D, R> | undefined>();
  public readonly id: InputSignal<string | null> = input.required<string | null>();
  public readonly isOpen: InputSignal<boolean> = input.required<boolean>();
  public readonly isAnimated: InputSignal<boolean> = input.required<boolean>();
  public readonly isBottomSheetModalActive: InputSignal<boolean> = input.required<boolean>();
  public readonly animationDuration: InputSignal<number> = input.required<number>();
  public readonly hasDefaultContentWrapperClass: InputSignal<boolean> = input.required<boolean>();
  public readonly hasBanner: InputSignal<boolean> = input.required<boolean>();

  // eslint-disable-next-line @angular-eslint/no-output-native -- Preserve the public modal close event name.
  public readonly close: OutputEmitterRef<ModalCloseMode | undefined> = output<ModalCloseMode | undefined>();
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix -- Keep the existing modal backdrop event.
  public readonly onBackdropClick: OutputEmitterRef<MouseEvent> = output<MouseEvent>();

  public readonly bottomSheet: Signal<readonly ModalBottomSheet<unknown, unknown>[]> = viewChildren(ModalBottomSheet);
}
