import {
  Component,
  inject,
  ComponentRef,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  TemplateRef,
  ViewContainerRef,
  signal,
  effect,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { Subject, Observable, fromEvent, filter, take, from, of } from 'rxjs';
import { NgTemplateOutlet } from '@angular/common';
import { ModalConfig } from '../classes/modal-config';
import { IModalComponent } from '../interfaces/imodal-component.interface';
import { ModalService } from '../services/modal.service';
import { ModalBackdrop } from './shared/ui/backdrop/modal-backdrop';
import { ModalCentered } from './views/centered/modal-centered';
import { ModalSide } from './views/side/modal-side';
import { ModalBottomSheet } from './views/bottom-sheet/modal-bottom-sheet';
import { BreakpointKey, ModalCloseMode, ModalLayout } from '../types/modal.types';
import { IModalCloseResult } from '../interfaces/imodal-close-result.interface';
import { ScrollLockService, uuidv4, WindowDimensionsService } from '@filip.mazev/blocks-core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IModal } from '../interfaces/imodal.interface';
import * as animConst from '../constants/modal-animation.constants';

@Component({
  selector: 'app-modal',
  imports: [NgTemplateOutlet, ModalCentered, ModalSide, ModalBackdrop],
  templateUrl: './modal-core.html',
  styleUrl: './modal-core.scss'
})
export class ModalCore<D, R, C extends IModal<D, R> = IModal<D, R>> implements IModalComponent<D, R, C>, OnInit, AfterViewInit {
  public componentRef: ComponentRef<C> = {} as ComponentRef<C>;
  public config?: ModalConfig<D, R>;
  public closeFunction?: (data: IModalCloseResult<R | undefined>) => void;
  public backdropClickSubject = new Subject<MouseEvent>();
  public backdropClick: Observable<MouseEvent> = this.backdropClickSubject.asObservable();
  public isOpen = signal<boolean>(true);
  public effectiveLayout = signal<ModalLayout>('center');
  public isCentered = signal<boolean>(false);
  public isSide = signal<boolean>(false);
  public isAnimated: boolean = false;

  public readonly animationDuration: number = animConst.MODAL_DEFAULT_ANIM_DURATION;

  protected headerTemplate = signal<TemplateRef<void> | null>(null);
  protected footerTemplate = signal<TemplateRef<void> | null>(null);
  protected id = signal<string | null>(null);
  protected isBottomSheetModalActive = signal<boolean>(false);
  protected hasBanner: boolean = false;

  protected hasDefaultContentWrapperClass: boolean = false;

  protected modalService = inject(ModalService);
  protected scrollLockService = inject(ScrollLockService);
  protected windowDimensionsService = inject(WindowDimensionsService);

  protected windowDimensions = this.windowDimensionsService.dimensions;

  @ViewChild('modalContainer', { static: false }) protected modalContainer?: ElementRef;
  @ViewChild('contentTemplate') protected contentTemplate?: TemplateRef<HTMLElement>;

  @ViewChildren(ModalSide) private sideModalComponents?: QueryList<ModalSide>;
  @ViewChildren(ModalCentered) private centeredModalComponents?: QueryList<ModalCentered>;

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
    if (!this.componentRef) return;
    this.dynamicContainer?.insert(this.componentRef.hostView);

    const width = this.windowDimensionsService.dimensions().width;
    this.handleLayout(width);
  }

  public ngOnDestroy(): void {
    this.componentRef?.destroy();
    this.dynamicContainer?.clear();
    this.scrollLockService.enableScroll(this.scrollLockId);
  }

  //#region Public Template Methods
  public setHeaderTemplate(template: TemplateRef<void>) {
    this.headerTemplate.set(template);
  }

  //#endregion
  public setFooterTemplate(template: TemplateRef<void>) {
    this.footerTemplate.set(template);
  }

  //#region Closing Methods
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

  //#endregion
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

  @ViewChild('dynamicContainer', { read: ViewContainerRef })
  protected set dynamicContainer(vcr: ViewContainerRef | undefined) {
    if (vcr && this.componentRef) {
      this._currentVcr = vcr;
      vcr.insert(this.componentRef.hostView);
    }
  }

  //#region Subscription Methods

  private initKeyboardSubscription(): void {
    fromEvent<KeyboardEvent>(document, 'keydown')
      .pipe(
        filter((event: KeyboardEvent) => event.key === 'Escape'),
        takeUntilDestroyed()
      )
      .subscribe(() => {
        if (!this.isConfirmCloseModalOpen) {
          this.close('cancel', undefined, true);
        }
      });
  }

  //#endregion

  //#region Initialization Methods

  private initParamsFromConfig() {
    this.id.set(this.config?.id ?? this.scrollLockId);

    this.hasBanner =
      this.config !== undefined &&
      ((this.config.bannerText !== undefined && this.config.bannerText.length > 0) ||
        (this.config.disableClose !== true && this.config.style.showCloseButton !== false && this.headerTemplate() === null));

    this.hasDefaultContentWrapperClass = this.config?.style.contentWrapper !== false;
    this.isAnimated = this.config?.style.animate === true;
  }

  private initBreakpointCache(): void {
    // eslint-disable-next-line no-debugger
    debugger;

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

  //#endregion

  //#region Helper Methods

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
    return this.sideModalComponents?.first?.bottomSheet?.first ?? this.centeredModalComponents?.first?.bottomSheet?.first;
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
