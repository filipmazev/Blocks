import type { InputSignal, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { NgClass, NgTemplateOutlet } from '@angular/common';
import {
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  output,
  signal,
  TemplateRef,
  viewChildren
} from '@angular/core';

import type { IModalSideModalClassesState } from '@modal/interfaces/imodal-side-modal-classes-state.interface';

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

  /** Resolved CSS classes for the modal layout, wrapper, and animation state. */
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

  /** Modal presentation layout used when an instance does not provide an override. Required input. */
  public readonly layout: InputSignal<ModalLayout> = input.required<ModalLayout>();
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

  /** Bottom-sheet child view currently rendered by the responsive modal presentation, if present. */
  public readonly bottomSheet: Signal<readonly ModalBottomSheet<unknown, unknown>[]> = viewChildren(ModalBottomSheet);

  constructor() {
    const nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

    let previouslyOpen = false;

    afterRenderEffect((onCleanup) => {
      const open = this.isOpen();
      const animated = this.isAnimated();
      const view = nativeElement.ownerDocument.defaultView;

      const entering = open && !previouslyOpen;

      previouslyOpen = open;
      this.renderOpenClass.set(open && (!animated || !entering));

      if (!open || !animated || !entering || !view) return;

      let frame = view.requestAnimationFrame(() => {
        frame = view.requestAnimationFrame(() => this.renderOpenClass.set(true));
      });

      onCleanup(() => view.cancelAnimationFrame(frame));
    });
  }
}
