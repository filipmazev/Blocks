import { NgTemplateOutlet, NgClass } from '@angular/common';
import { Component, input, output, ViewChildren, QueryList, TemplateRef, computed } from '@angular/core';
import { ModalConfig } from '../../../classes/modal-config';
import { IModalView } from '../../../interfaces/imodal-view.interface';
import { ModalCloseMode } from '../../../types/modal.types';
import { ModalBanner } from '../../shared/ui/banner/modal-banner';
import { ModalBottomSheet } from '../bottom-sheet/modal-bottom-sheet';
import { ModalDefaultCloseButton } from '../../shared/ui/default-close-button/default-close-button';

@Component({
  selector: 'app-modal-centered',
  imports: [NgTemplateOutlet, NgClass, ModalBottomSheet, ModalBanner, ModalDefaultCloseButton],
  templateUrl: './modal-centered.html',
  styleUrl: './modal-centered.scss'
})
export class ModalCentered<D = unknown, R = unknown> implements IModalView<D, R> {
  public readonly headerTemplate = input.required<TemplateRef<void> | null>();
  public readonly footerTemplate = input.required<TemplateRef<void> | null>();

  public readonly config = input.required<ModalConfig<D, R> | undefined>();
  public readonly id = input.required<string | null>();
  public readonly isOpen = input.required<boolean>();
  public readonly isAnimated = input.required<boolean>();
  public readonly isBottomSheetModalActive = input.required<boolean>();
  public readonly animationDuration = input.required<number>();
  public readonly hasDefaultContentWrapperClass = input.required<boolean>();
  public readonly hasBanner = input.required<boolean>();
  public readonly close = output<ModalCloseMode | undefined>();
  public readonly onBackdropClick = output<MouseEvent>();

  @ViewChildren(ModalBottomSheet) public bottomSheet!: QueryList<ModalBottomSheet>;

  public modalClasses = computed(() => {
    return {
      'centered-modal-content-wrapper': true,
      'centered-modal-default-style': this.hasDefaultContentWrapperClass() || this.hasBanner(),

      'centered-modal-animate-in': this.isAnimated() && this.isOpen(),
      'centered-modal-animate-out': this.isAnimated() && !this.isOpen()
    };
  });
}
