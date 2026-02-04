import { NgTemplateOutlet, NgClass } from '@angular/common';
import { Component, QueryList, TemplateRef, ViewChildren, effect, input, output, signal, computed } from '@angular/core';
import { ModalConfig } from '../../../classes/modal-config';
import { IModalView } from '../../../interfaces/imodal-view.interface';
import { ModalCloseMode, ModalLayout } from '../../../types/modal.types';
import { ModalBanner } from '../../shared/ui/banner/modal-banner';
import { ModalBottomSheet } from '../bottom-sheet/modal-bottom-sheet';
import { ModalDefaultCloseButton } from '../../shared/ui/default-close-button/default-close-button';

@Component({
  selector: 'modal-side',
  imports: [
    NgTemplateOutlet,
    ModalBottomSheet,
    NgClass,
    ModalBanner,
    ModalDefaultCloseButton
  ],
  templateUrl: './modal-side.html',
  styleUrl: './modal-side.scss',
})
export class ModalSide<D = unknown> implements IModalView<D> {
  public readonly layout = input.required<ModalLayout>();
  public readonly headerTemplate = input.required<TemplateRef<any> | null>();
  public readonly footerTemplate = input.required<TemplateRef<any> | null>();
  public readonly config = input.required<ModalConfig<D> | undefined>();
  public readonly id = input.required<string | null>();
  public readonly isOpen = input.required<boolean>();
  public readonly isAnimated = input.required<boolean>();
  public readonly isBottomSheetModalActive = input.required<boolean>();
  public readonly animationDuration = input.required<number>();
  public readonly hasDefaultContentWrapperClass = input.required<boolean>();
  public readonly hasBanner = input.required<boolean>();

  public readonly close = output<ModalCloseMode | undefined>();

  @ViewChildren(ModalBottomSheet) bottomSheet!: QueryList<ModalBottomSheet>;

  protected renderOpenClass = signal(false);

  public modalClasses = computed(() => {
    const positionLeft = this.layout() === 'left';
    const positionRight = this.layout() === 'right';
    const shouldAnimate = this.isAnimated();

    const isRenderedOpen = this.renderOpenClass();

    return {
      'side-modal-content-wrapper': true,
      'side-modal-default-style': this.hasDefaultContentWrapperClass() || this.hasBanner(),
      'with-footer': this.footerTemplate() !== null,
      'left': positionLeft,
      'right': positionRight,

      'side-modal-animate-in': shouldAnimate ? isRenderedOpen : true,
      'side-modal-animate-out': shouldAnimate ? !isRenderedOpen : false,
    };
  });

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