import { NgTemplateOutlet, NgClass } from '@angular/common';
import { Component, QueryList, TemplateRef, ViewChildren, effect, input, output } from '@angular/core';
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

  private _innerIsOpen = false;

  protected set innerIsOpen(value: boolean) {
    if (value) {
      this._innerIsOpen = false;
      setTimeout(() => {
        this._innerIsOpen = true;
      }, animConst.GENERIC_MODAL_DEFAULT_ANIM_DURATION);
    } else {
      this._innerIsOpen = false;
    }
  }

  protected get innerIsOpen(): boolean {
    return this._innerIsOpen;
  }

  readonly isAnimated = input.required<boolean>();
  readonly isSwipeableModalActive = input.required<boolean>();
  readonly animationDuration = input.required<number>();
  readonly hasDefaultContentWrapperClass = input.required<boolean>();
  readonly hasBanner = input.required<boolean>();

  readonly close = output<ModalCloseMode | undefined>();

  @ViewChildren(ModalSwipeable) swipeableComponents!: QueryList<ModalSwipeable>;
 
  constructor() {
    effect(() => {
      this.innerIsOpen = this.isOpen();
    });
  }

  public get modalClasses(): { [key: string]: boolean } {
    const config = this.config();
    const positionLeft = config?.style?.position === 'left';
    const positionRight = config?.style?.position === 'right';

    return {
      'side-modal-content-wrapper': true,
      'side-modal-default-style': this.hasDefaultContentWrapperClass() || this.hasBanner(),

      'with-footer': this.footerTemplate() !== null,

      'left': positionLeft,
      'right': positionRight,

      'side-modal-animate-in': this.isAnimated() && this.innerIsOpen,
      'side-modal-animate-out': this.isAnimated() && !this.innerIsOpen,
    };
  }
}