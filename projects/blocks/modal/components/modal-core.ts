import type { Signal, WritableSignal } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  signal,
  TemplateRef,
  viewChild,
  viewChildren,
  ViewContainerRef
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { filter, from, fromEvent, Observable, of, Subject, take } from 'rxjs';

import type { IWindowDimensions } from '@filip.mazev/blocks/core';

import { BreakpointKey, isTextWithKey, ScrollLockService, uuidv4, WindowDimensionsService } from '@filip.mazev/blocks/core';

import { ModalConfig } from '@modal/classes/modal-config';
import { ModalBackdrop } from '@modal/components/shared/ui/backdrop/modal-backdrop';
import { ModalBottomSheet } from '@modal/components/views/bottom-sheet/modal-bottom-sheet';
import { ModalCentered } from '@modal/components/views/centered/modal-centered';
import { ModalSide } from '@modal/components/views/side/modal-side';
import { IModal } from '@modal/interfaces/imodal.interface';
import { IModalCloseResult } from '@modal/interfaces/imodal-close-result.interface';
import { IModalComponent } from '@modal/interfaces/imodal-component.interface';
import { ModalService } from '@modal/services/modal.service';
import { ModalGlobalSettingsService } from '@modal/services/modal-global-settings.service';
import { ModalCloseMode, ModalLayout } from '@modal/types/modal.types';

import * as animConst from '@modal/constants/modal-animation.constants';

@Component({
  selector: 'bx-modal',
  imports: [NgTemplateOutlet, ModalCentered, ModalSide, ModalBackdrop],
  templateUrl: './modal-core.html',
  // ModalRef assigns configuration and component references through the existing imperative API.
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './modal-core.scss'
})
export class ModalCore<D, R, C extends IModal<D, R> = IModal<D, R>> implements IModalComponent<D, R, C>, OnInit, AfterViewInit, OnDestroy {
  private readonly modalService = inject(ModalService);
  private readonly globalSettings = inject(ModalGlobalSettingsService);
  private readonly scrollLockService = inject(ScrollLockService);
  private readonly windowDimensionsService = inject(WindowDimensionsService);
  private readonly destroyRef = inject(DestroyRef);

  private readonly sideModalComponents: Signal<readonly ModalSide<unknown, unknown>[]> = viewChildren(ModalSide);
  private readonly centeredModalComponents: Signal<readonly ModalCentered<unknown, unknown>[]> = viewChildren(ModalCentered);

  protected readonly headerTemplate: WritableSignal<TemplateRef<void> | null> = signal<TemplateRef<void> | null>(null);
  protected readonly footerTemplate: WritableSignal<TemplateRef<void> | null> = signal<TemplateRef<void> | null>(null);
  protected readonly id: WritableSignal<string | null> = signal<string | null>(null);

  protected readonly isBottomSheetModalActive: WritableSignal<boolean> = signal<boolean>(false);

  protected readonly windowDimensions: Signal<IWindowDimensions> = this.windowDimensionsService.dimensions;

  protected readonly modalContainer: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef>('modalContainer');
  protected readonly contentTemplate: Signal<TemplateRef<HTMLElement> | undefined> = viewChild<TemplateRef<HTMLElement>>('contentTemplate');
  protected readonly dynamicContainer: Signal<ViewContainerRef | undefined> = viewChild('dynamicContainer', {
    read: ViewContainerRef
  });

  public readonly animationDuration: number = animConst.MODAL_DEFAULT_ANIM_DURATION;

  public readonly isOpen: WritableSignal<boolean> = signal<boolean>(true);

  public readonly effectiveLayout: WritableSignal<ModalLayout> = signal<ModalLayout>('center');

  public readonly isCentered: WritableSignal<boolean> = signal<boolean>(false);
  public readonly isSide: WritableSignal<boolean> = signal<boolean>(false);

  public readonly isAnimated: Signal<boolean> = computed(() => this.config?.style.animate ?? this.globalSettings.animate());

  public componentRef: ComponentRef<C> = {} as ComponentRef<C>;
  public config?: ModalConfig<D, R>;
  public closeFunction?: (data: IModalCloseResult<R | undefined>) => void;
  public backdropClickSubject: Subject<MouseEvent> = new Subject<MouseEvent>();
  public backdropClick: Observable<MouseEvent> = this.backdropClickSubject.asObservable();

  protected hasBanner: boolean = false;
  protected hasDefaultContentWrapperClass: boolean = false;

  private isConfirmCloseModalOpen: boolean = false;
  private scrollLockId: string = uuidv4();
  private _sortedBreakpoints: Array<{ width: number; layout: ModalLayout }> = [];
  private _currentVcr: ViewContainerRef | null = null;

  constructor() {
    this.initKeyboardSubscription();

    effect(() => {
      const width = this.windowDimensions().width;

      this.handleLayout(width);
    });

    effect(() => {
      const vcr = this.dynamicContainer();

      if (vcr && this.componentRef) {
        this._currentVcr = vcr;

        if (vcr.indexOf(this.componentRef.hostView) === -1) {
          vcr.insert(this.componentRef.hostView);
        }
      }
    });
  }

  public ngOnInit() {
    this.initParamsFromConfig();
    this.initBreakpointCache();

    this.scrollLockService.disableScroll(this.scrollLockId, {
      animationDuration: this.animationDuration,
      handleTouchInput: true,
      mobileOnlyTouchPrevention: true
    });
  }

  public ngAfterViewInit(): void {
    const width = this.windowDimensionsService.dimensions().width;

    this.handleLayout(width);
  }

  public ngOnDestroy(): void {
    this.componentRef?.destroy();
    this.dynamicContainer()?.clear();
    this.scrollLockService.enableScroll(this.scrollLockId);
  }

  public setHeaderTemplate(template: TemplateRef<void>) {
    this.headerTemplate.set(template);
  }

  public setFooterTemplate(template: TemplateRef<void>) {
    this.footerTemplate.set(template);
  }

  public close(state: ModalCloseMode = 'cancel', result: R | undefined = undefined, fromInsideInteraction: boolean = false, forceClose: boolean = false): void {
    if (forceClose) {
      this.handleClose(state, result);

      return;
    }

    if (this.config?.disableClose === true && fromInsideInteraction) {
      return;
    }

    const shouldCheckCloseGuard = this.config?.closeGuardOnlyOnCancel !== true || state !== 'confirm';

    if (shouldCheckCloseGuard && this.config?.closeGuard) {
      const guardResult = this.config.closeGuard.canClose(this.modalService);

      const canClose$ = guardResult instanceof Observable ? guardResult : guardResult instanceof Promise ? from(guardResult) : of(guardResult);

      if (this.isBottomSheetModalActive()) {
        this.resetBottomSheetModalLayout();
      }

      canClose$.pipe(take(1)).subscribe((canClose) => {
        if (canClose) {
          this.handleClose(state, result);
        }
      });

      return;
    }

    this.handleClose(state, result);
  }

  protected onBackdropClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (!this.isOpen()) {
      return;
    }

    this.backdropClickSubject.next(event);

    if (this.config?.style?.hasBackdrop && this.config?.disableCloseOnBackdropClick !== true) {
      this.close('cancel', undefined, true);
    }
  }

  //#region Helpers

  private initKeyboardSubscription(): void {
    fromEvent<KeyboardEvent>(document, 'keydown')
      .pipe(
        filter((event: KeyboardEvent) => event.key === 'Escape' && !event.defaultPrevented),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        if (!this.isConfirmCloseModalOpen) {
          this.close('cancel', undefined, true);
        }
      });
  }

  private initParamsFromConfig() {
    this.id.set(this.config?.id ?? this.scrollLockId);

    let hasHeaderText = false;

    if (this.config?.header?.text) {
      const text = this.config.header.text;

      hasHeaderText = isTextWithKey(text) ? !!text.key : text.length > 0;
    }

    this.hasBanner =
      this.config !== undefined &&
      ((this.config.header !== undefined && (hasHeaderText || this.config.header?.icon !== undefined)) ||
        (this.config.disableClose !== true && this.config.style.showCloseButton !== false && this.headerTemplate() === null));

    this.hasDefaultContentWrapperClass = this.config?.style.contentWrapper !== false;
  }

  private initBreakpointCache(): void {
    const definedBreakpoints = this.config?.style?.breakpoints;

    if (definedBreakpoints && Object.keys(definedBreakpoints).length > 0) {
      const serviceBreakpoints = this.windowDimensionsService.breakpoints;

      this._sortedBreakpoints = (Object.keys(definedBreakpoints) as BreakpointKey[])
        .map((key) => ({
          width: serviceBreakpoints[key],
          layout: definedBreakpoints[key] ?? this.config?.style.layout ?? 'center'
        }))
        .sort((a, b) => a.width - b.width);
    }
  }

  private async handleClose(state: ModalCloseMode, result: R | undefined): Promise<void> {
    this.isOpen.set(false);
    this.setBottomSheetModalFinishedState(true);

    const returnResult = {
      data: result,
      state: state
    } as IModalCloseResult<R | undefined>;

    if (this.closeFunction) {
      this.closeFunction(returnResult);
    }
  }

  private handleLayout(width: number): void {
    if (!this.config) return;

    let resolvedLayout: ModalLayout = this.config.style.layout;

    for (const bp of this._sortedBreakpoints) {
      if (width <= bp.width) {
        resolvedLayout = bp.layout;
        break;
      }
    }

    const prevIsSide = this.isSide();
    const nextIsSide = resolvedLayout === 'left' || resolvedLayout === 'right';
    const layoutTypeChanged = prevIsSide !== nextIsSide;

    if (layoutTypeChanged && this._currentVcr && this.componentRef) {
      const index = this._currentVcr.indexOf(this.componentRef.hostView);

      if (index !== -1) {
        this._currentVcr.detach(index);
      }
    }

    this.effectiveLayout.set(resolvedLayout);
    this.isSide.set(nextIsSide);
    this.isCentered.set(resolvedLayout === 'center' || resolvedLayout === 'bottom-sheet');

    const shouldBeBottomSheet = resolvedLayout === 'bottom-sheet';
    const currentSwipeState = this.isBottomSheetModalActive();

    if (shouldBeBottomSheet && !currentSwipeState) {
      this.isBottomSheetModalActive.set(true);
    } else if (!shouldBeBottomSheet && currentSwipeState) {
      this.isBottomSheetModalActive.set(false);
    }
  }

  private getBottomSheetModal(): ModalBottomSheet | undefined {
    return this.sideModalComponents()[0]?.bottomSheet()[0] ?? this.centeredModalComponents()[0]?.bottomSheet()[0];
  }

  private resetBottomSheetModalLayout(): void {
    const bottomSheet = this.getBottomSheetModal();

    if (bottomSheet) {
      bottomSheet.currentTranslateY.set(0);
    }
  }

  private setBottomSheetModalFinishedState(isFinished: boolean): void {
    const bottomSheet = this.getBottomSheetModal();

    if (bottomSheet) {
      bottomSheet.isSwipingVerticallyFinished.set(isFinished);
    }

    this.isBottomSheetModalActive.set(false);
  }

  //#endregion
}
