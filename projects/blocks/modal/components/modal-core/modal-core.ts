import type { Signal, WritableSignal } from '@angular/core';

import { DOCUMENT, NgClass, NgTemplateOutlet } from '@angular/common';
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

import { filter, finalize, from, fromEvent, Observable, of, Subject, take } from 'rxjs';

import type { IWindowDimensions } from '@filip.mazev/blocks/core';

import { BreakpointKey, BxA11yService, isTextWithKey, ScrollLockService, uuidv4, WindowDimensionsService } from '@filip.mazev/blocks/core';

import { ModalConfig } from '@modal/classes/modal-config';
import { ModalRef } from '@modal/classes/modal-ref';
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
  imports: [NgClass, NgTemplateOutlet, ModalCentered, ModalSide, ModalBackdrop],
  host: {
    '[class.has-backdrop]': 'config().style.hasBackdrop',
    '[class.is-nested]': 'nestingDepth() > 0',
    '[style.--bx-modal-material-opacity]': 'materialOpacity()'
  },
  templateUrl: './modal-core.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './modal-core.scss'
})
export class ModalCore<D, R, C extends IModal<D, R> = IModal<D, R>> implements IModalComponent<D, R, C>, OnInit, AfterViewInit, OnDestroy {
  private readonly modalService = inject(ModalService);
  private readonly modalGlobalSettingsService = inject(ModalGlobalSettingsService);
  private readonly scrollLockService = inject(ScrollLockService);
  private readonly windowDimensionsService = inject(WindowDimensionsService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly bxA11yService = inject(BxA11yService);
  private readonly modalRef = inject<ModalRef<D, R, C>>(ModalRef);

  private readonly sideModalComponents: Signal<readonly ModalSide<unknown, unknown>[]> = viewChildren(ModalSide);
  private readonly centeredModalComponents: Signal<readonly ModalCentered<unknown, unknown>[]> = viewChildren(ModalCentered);

  protected readonly headerTemplate: WritableSignal<TemplateRef<void> | null> = signal<TemplateRef<void> | null>(null);
  protected readonly footerTemplate: WritableSignal<TemplateRef<void> | null> = signal<TemplateRef<void> | null>(null);

  protected readonly isBottomSheetModalActive: WritableSignal<boolean> = signal<boolean>(false);

  protected readonly windowDimensions: Signal<IWindowDimensions> = this.windowDimensionsService.dimensions;

  protected readonly id: Signal<string> = computed(() => this.config().id ?? this.scrollLockId);
  protected readonly hasBanner: Signal<boolean> = computed(() => {
    const config = this.config();
    const header = config.header;
    const text = header?.text;
    const hasText = text && (isTextWithKey(text) ? !!text.key : text.length > 0);

    return !!(hasText || header?.icon || header?.loading || (!config.disableClose && config.style.showCloseButton !== false && !this.headerTemplate()));
  });
  protected readonly hasDefaultContentWrapperClass: Signal<boolean> = computed(() => this.config().style.contentWrapper !== false);
  protected readonly materialOpacity: Signal<number> = computed(() => {
    const depth = this.nestingDepth();
    const floors = this.modalGlobalSettingsService.nestedOpacityFloors();

    if (depth <= 0 || floors.length === 0) return 0.52;

    const requested = floors[Math.min(depth - 1, floors.length - 1)];
    const fallback = depth === 1 ? 0.9 : 1;

    return Number.isFinite(requested) ? Math.max(0.52, Math.min(1, requested)) : fallback;
  });

  protected readonly modalContainer: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef>('modalContainer');
  protected readonly contentTemplate: Signal<TemplateRef<HTMLElement> | undefined> = viewChild<TemplateRef<HTMLElement>>('contentTemplate');
  protected readonly dynamicContainer: Signal<ViewContainerRef | undefined> = viewChild('dynamicContainer', {
    read: ViewContainerRef
  });

  /** Resolved configuration shared with the active ModalRef; updates reactively after patch(). */
  public readonly config: Signal<ModalConfig<D, R>> = this.modalRef.config;
  /** Resolved modal entrance/exit duration in milliseconds. */
  public readonly animationDuration: number = animConst.MODAL_DEFAULT_ANIM_DURATION;

  /** Current open state of the overlay. Initially `true`. */
  public readonly isOpen: WritableSignal<boolean> = signal<boolean>(true);

  /** Resolved modal layout after applying the current viewport breakpoint overrides. Initially `'center'`. */
  public readonly effectiveLayout: WritableSignal<ModalLayout> = signal<ModalLayout>('center');

  /** Whether the resolved modal layout uses centered presentation. Initially `false`. */
  public readonly isCentered: WritableSignal<boolean> = signal<boolean>(false);
  /** Whether the resolved modal layout uses a left or right side panel. Initially `false`. */
  public readonly isSide: WritableSignal<boolean> = signal<boolean>(false);

  /** Zero-based mounted dialog depth assigned by ModalService. Nested depth raises only this dialog's material-opacity floor. Initially zero. */
  public readonly nestingDepth: WritableSignal<number> = signal(0);

  /** Whether decorative motion is enabled after applying shared reduced-motion preferences. */
  public readonly isAnimated: Signal<boolean> = computed(() => !this.bxA11yService.isReducedMotion() && this.config().style.animate);

  /** Dynamically created content component reference assigned by the owning overlay service. */
  public componentRef?: ComponentRef<C>;
  /** Lifecycle callback receiving the final modal close mode and optional result. */
  public closeFunction?: (data: IModalCloseResult<R | undefined>) => void;
  /** Event source used by the modal host to publish backdrop pointer activations. */
  public backdropClickSubject: Subject<MouseEvent> = new Subject<MouseEvent>();
  /** Observable of backdrop pointer activations, independent of whether a close guard allows dismissal. */
  public backdropClick: Observable<MouseEvent> = this.backdropClickSubject.asObservable();

  private isCloseGuardPending: boolean = false;
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

  /** Resolve modal configuration and breakpoint overrides, then acquire this modal's background scroll lock. */
  public ngOnInit(): void {
    this.initBreakpointCache();

    this.scrollLockService.disableScroll(this.scrollLockId, {
      animationDuration: this.animationDuration,
      handleTouchInput: true,
      mobileOnlyTouchPrevention: true
    });
  }

  /** Apply the responsive modal layout after the content containers have rendered. */
  public ngAfterViewInit(): void {
    const width = this.windowDimensionsService.dimensions().width;

    this.handleLayout(width);
  }

  /** Destroy mounted modal content, clear its view container, and release only this modal's scroll lock. */
  public ngOnDestroy(): void {
    if (this.componentRef && !this.componentRef.hostView.destroyed) this.componentRef.destroy();

    this.dynamicContainer()?.clear();
    this.scrollLockService.enableScroll(this.scrollLockId);
    this.closeFunction = undefined;
    this.backdropClickSubject.complete();
  }

  /**
   * Register the template used by the component's custom header slot.
   *
   * @param template - Header template to render; null clears an optional registered template.
   */
  public setHeaderTemplate(template: TemplateRef<void>): void {
    this.headerTemplate.set(template);
  }

  /**
   * Register the template used by the component's custom footer slot.
   *
   * @param template - Footer template to render; null clears an optional registered template.
   */
  public setFooterTemplate(template: TemplateRef<void>): void {
    this.footerTemplate.set(template);
  }

  /**
   * Request modal closure, applying disabled-dismissal behavior and asynchronous close guards unless force closing is requested.
   *
   * @param state - Close mode reported to the caller, distinguishing confirmation from cancellation. Defaults to `'cancel'`.
   * @param result - Optional typed content result delivered when closure completes. Defaults to `undefined`.
   * @param fromInsideInteraction - Whether dismissal came from an internal action such as Escape or the backdrop, which must honor disableClose.
   * Defaults to `false`.
   * @param forceClose - Whether to bypass disabled-dismissal checks and close guards. Defaults to `false`.
   */
  public close(state: ModalCloseMode = 'cancel', result: R | undefined = undefined, fromInsideInteraction: boolean = false, forceClose: boolean = false): void {
    if (!this.isOpen() || (this.isCloseGuardPending && !forceClose)) return;

    if (forceClose) {
      this.handleClose(state, result);

      return;
    }

    if (this.config().disableClose === true && fromInsideInteraction) {
      this.resetBottomSheetModalLayout();

      return;
    }

    const shouldCheckCloseGuard = this.config().closeGuardOnlyOnCancel !== true || state !== 'confirm';
    const closeGuard = this.config().closeGuard;

    if (shouldCheckCloseGuard && closeGuard) {
      this.isCloseGuardPending = true;

      try {
        const guardResult = closeGuard.canClose(this.modalService);
        const canClose$ = guardResult instanceof Observable ? guardResult : guardResult instanceof Promise ? from(guardResult) : of(guardResult);

        if (this.isBottomSheetModalActive()) this.resetBottomSheetModalLayout();

        canClose$
          .pipe(
            take(1),
            takeUntilDestroyed(this.destroyRef),
            finalize(() => {
              this.isCloseGuardPending = false;
            })
          )
          .subscribe((canClose) => {
            if (canClose && (!fromInsideInteraction || !this.config().disableClose)) this.handleClose(state, result);
          });
      } catch (error) {
        this.isCloseGuardPending = false;

        throw error;
      }

      return;
    }

    this.handleClose(state, result);
  }

  protected onBackdropClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    if (!this.isOpen()) {
      return;
    }

    this.backdropClickSubject.next(event);

    if (this.config().style?.hasBackdrop && this.config().disableCloseOnBackdropClick !== true) {
      this.close('cancel', undefined, true);
    }
  }

  //#region Helpers

  private initKeyboardSubscription(): void {
    fromEvent<KeyboardEvent>(this.document, 'keydown')
      .pipe(
        filter((event: KeyboardEvent) => event.key === 'Escape' && !event.defaultPrevented),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((event) => {
        if (!this.modalService.isTopmost(this.modalRef)) return;

        event.preventDefault();
        this.close('cancel', undefined, true);
      });
  }

  private initBreakpointCache(): void {
    const definedBreakpoints = this.config().style?.breakpoints;

    if (definedBreakpoints && Object.keys(definedBreakpoints).length > 0) {
      const serviceBreakpoints = this.windowDimensionsService.breakpoints;

      this._sortedBreakpoints = (Object.keys(definedBreakpoints) as BreakpointKey[])
        .map((key) => ({
          width: serviceBreakpoints[key],
          layout: definedBreakpoints[key] ?? this.config().style.layout ?? 'center'
        }))
        .sort((a, b) => a.width - b.width);
    }
  }

  private async handleClose(state: ModalCloseMode, result: R | undefined): Promise<void> {
    if (!this.isOpen()) return;

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
    if (!this.isOpen()) return;

    let resolvedLayout: ModalLayout = this.config().style.layout;

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
  }

  //#endregion
}
