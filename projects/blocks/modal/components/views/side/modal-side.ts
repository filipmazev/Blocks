import type { InputSignal, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { NgClass, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, input, output, signal, TemplateRef, viewChildren } from '@angular/core';

import type { IModalSideModalClassesState } from '@modal/components/views/side/interfaces/imodal-side-modal-classes-state.interface';

import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';

import { ModalConfig } from '@modal/classes/modal-config';
import { ModalBanner } from '@modal/components/shared/ui/banner/modal-banner';
import { ModalBottomSheet } from '@modal/components/views/bottom-sheet/modal-bottom-sheet';
import { IModalView } from '@modal/interfaces/imodal-view.interface';
import { ModalCloseMode, ModalLayout } from '@modal/types/modal.types';

@Component({
  selector: 'bx-modal-side',
  imports: [BxSurfaceDirective, NgTemplateOutlet, ModalBottomSheet, NgClass, ModalBanner, Icon],
  templateUrl: './modal-side.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './modal-side.scss'
})
export class ModalSide<D = unknown, R = unknown> implements IModalView<D, R> {
  protected readonly renderOpenClass: WritableSignal<boolean> = signal(false);

  public readonly modalClasses: Signal<IModalSideModalClassesState> = computed(() => {
    const positionLeft = this.layout() === 'left';
    const positionRight = this.layout() === 'right';
    const shouldAnimate = this.isAnimated();

    const isRenderedOpen = this.renderOpenClass();

    return {
      'side-modal-content-wrapper': true,
      'side-modal-default-style': this.hasDefaultContentWrapperClass() || this.hasBanner(),
      'with-footer': this.footerTemplate() !== null,
      left: positionLeft,
      right: positionRight,

      'side-modal-animate-in': shouldAnimate ? isRenderedOpen : true,
      'side-modal-animate-out': shouldAnimate ? !isRenderedOpen : false
    };
  });

  public readonly layout: InputSignal<ModalLayout> = input.required<ModalLayout>();
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

  public readonly bottomSheet: Signal<readonly ModalBottomSheet<unknown, unknown>[]> = viewChildren(ModalBottomSheet);

  constructor() {
    effect(() => {
      const isOpen = this.isOpen();

      if (isOpen) {
        this.renderOpenClass.set(false);

        setTimeout(() => {
          this.renderOpenClass.set(true);
        }, 50);
      } else {
        this.renderOpenClass.set(false);
      }
    });
  }
}
