import { NgTemplateOutlet, NgClass } from '@angular/common';
import { Component, QueryList, TemplateRef, ViewChildren, effect, input, output, signal, computed } from '@angular/core';
import { GenericModalConfig } from '../../../classes/generic-modal-config';
import { IGenericModalView } from '../../../interfaces/igeneric-modal-view.interface';
import { ModalCloseMode } from '../../../types/modal.types';
import { ModalBanner } from '../../shared/ui/banner/modal-banner';
import { ModalSwipeable } from '../swipeable/modal-swipeable';
import { ModalDefaultCloseButton } from '../../shared/ui/default-close-button/default-close-button';
import * as animConst from '../../../constants/generic-modal-animation.constants';

@Component({
  selector: 'modal-side',
  imports: [
    NgTemplateOutlet,
    ModalSwipeable,
    NgClass,
    ModalBanner,
    ModalDefaultCloseButton
  ],
  templateUrl: './modal-side.html',
  styleUrl: './modal-side.scss',
})
export class ModalSide<D = unknown> implements IGenericModalView<D> {
  readonly headerTemplate = input.required<TemplateRef<any> | null>();
  readonly footerTemplate = input.required<TemplateRef<any> | null>();
  readonly config = input.required<GenericModalConfig<D> | undefined>();
  readonly isOpen = input.required<boolean>();
  readonly isAnimated = input.required<boolean>();
  readonly isSwipeableModalActive = input.required<boolean>();
  readonly animationDuration = input.required<number>();
  readonly hasDefaultContentWrapperClass = input.required<boolean>();
  readonly hasBanner = input.required<boolean>();

  readonly close = output<ModalCloseMode | undefined>();

  @ViewChildren(ModalSwipeable) swipeableComponents!: QueryList<ModalSwipeable>;

  protected renderOpenClass = signal(false);

  public modalClasses = computed(() => {
    const config = this.config();
    const positionLeft = config?.style?.position === 'left';
    const positionRight = config?.style?.position === 'right';
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