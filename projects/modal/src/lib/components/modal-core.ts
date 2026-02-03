import { Component, inject, output, ComponentRef, ViewChild, ElementRef, ViewChildren, QueryList, TemplateRef, ViewContainerRef, signal, effect } from "@angular/core";
import { Subject, Observable, fromEvent, filter, take } from "rxjs";
import { NgTemplateOutlet } from "@angular/common";
import { ModalConfig } from "../classes/modal-config";
import { IModalComponenet } from "../interfaces/imodal-component.interface";
import { ModalService } from "../services/modal.service";
import { ModalBackdrop } from "./shared/ui/backdrop/modal-backdrop";
import { ModalCentered } from "./views/centered/modal-centered";
import { ModalSide } from "./views/side/modal-side";
import { ModalBottomSheet } from "./views/bottom-sheet/modal-bottom-sheet";
import { BreakpointKey, ModalCloseMode, ModalLayout } from "../types/modal.types";
import { IModalCloseResult } from "../interfaces/imodal-close-result.interface";
import { DeviceTypeService, ScrollLockService, WindowDimensionsService } from "@filip.mazev/blocks-core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IModal } from "../interfaces/imodal";
import * as animConst from "../constants/modal-animation.constants";

@Component({
    selector: 'modal-core',
    imports: [
        NgTemplateOutlet,
        ModalCentered,
        ModalSide,
        ModalBackdrop
    ],
    templateUrl: './modal-core.html',
    styleUrl: './modal-core.scss',
})
export class ModalCore<
    D = unknown,
    R = any,
    C extends IModal<D, R> = IModal<D, R>>
    implements IModalComponenet<D, R, C> {

    private modalService = inject(ModalService);
    private windowDimensionsService = inject(WindowDimensionsService);
    private scrollLockService = inject(ScrollLockService);
    private deviceTypeService = inject(DeviceTypeService);

    readonly afterClose = output<void>();

    readonly animationDuration: number = animConst.MODAL_DEFAULT_ANIM_DURATION;

    /** The component reference (the component that is being displayed in the modal) */
    public componentRef: ComponentRef<C> = {} as ComponentRef<C>;

    /** The configuration for the modal */
    public config?: ModalConfig<D>;

    public closeFunction?: Function;

    private backdropClickSubject = new Subject<MouseEvent>();

    /* Observable for backdrop clicks */
    public backdropClick: Observable<MouseEvent> = this.backdropClickSubject.asObservable();

    /* Whether the modal is open or not */
    public isOpen = signal<boolean>(true);

    public effectiveLayout = signal<ModalLayout>('center');
    public isCentered = signal<boolean>(false);
    public isSide = signal<boolean>(false);
    
    protected headerTemplate = signal<TemplateRef<any> | null>(null);
    protected footerTemplate = signal<TemplateRef<any> | null>(null);
    
    protected isBottomSheetModalActive = signal<boolean>(false);

    public isAnimated: boolean = false;
    protected hasBanner: boolean = false;
    protected hasDefaultContentWrapperClass: boolean = false;
    
    private isConfirmCloseModalOpen: boolean = false;
    private isSpecialMobileOverflowHandlingEnabled: boolean = false;
    private isScrollDisabled: boolean = false;

    private _sortedBreakpoints: Array<{ width: number, layout: ModalLayout }> = [];

    protected windowDimensions = this.windowDimensionsService.dimensions;

    private _currentVcr: ViewContainerRef | null = null;

    @ViewChild("dynamicContainer", { read: ViewContainerRef })
    set dynamicContainer(vcr: ViewContainerRef | undefined) {
        if (vcr && this.componentRef) {
            this._currentVcr = vcr;
            vcr.insert(this.componentRef.hostView);
        }
    }

    @ViewChild("modalContainer", { static: false }) modalContainer?: ElementRef;
    @ViewChild("contentTemplate") contentTemplate?: TemplateRef<HTMLElement>;

    @ViewChildren(ModalSide) sideModalComponents?: QueryList<ModalSide>;
    @ViewChildren(ModalCentered) centeredModalComponents?: QueryList<ModalCentered>;

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

        const width = this.windowDimensionsService.dimensions().width;
        this.handleLayout(width);
    }

    public ngAfterViewInit(): void {
        if (!this.componentRef) return;
        this.dynamicContainer?.insert(this.componentRef.hostView);
    }

    public ngOnDestroy(): void {
        this.componentRef?.destroy();
        this.dynamicContainer?.clear();
    }

    //#region Subscription Methods

    private initKeyboardSubscription(): void {
        fromEvent<KeyboardEvent>(document, "keydown")
            .pipe(
                filter((event: KeyboardEvent) => event.key === "Escape"),
                takeUntilDestroyed(),
            )
            .subscribe(() => {
                if (!this.isConfirmCloseModalOpen) {
                    this.close("cancel", undefined, true);
                }
            });
    }

    //#endregion

    //#region Initialization Methods

    private initParamsFromConfig() {
        this.isSpecialMobileOverflowHandlingEnabled = (this.deviceTypeService.getDeviceState().isAppleDevice || this.config?.webkitOnlyOverflowMobileHandling === false);

        this.hasBanner =
            this.config !== undefined &&
            ((this.config.bannerText !== undefined && this.config.bannerText.length > 0) ||
                (this.config.disableClose !== true && this.config.style.showCloseButton !== false && this.headerTemplate() === null));

        this.hasDefaultContentWrapperClass = this.config?.style.contentWrapper !== false;
        this.isAnimated = this.config?.style.animate === true;
    }

    private initBreakpointCache(): void {
        const definedBreakpoints = this.config?.style?.breakpoints;
        
        if (definedBreakpoints && Object.keys(definedBreakpoints).length > 0) {
            const serviceBreakpoints = this.windowDimensionsService.breakpoints;
            
            this._sortedBreakpoints = (Object.keys(definedBreakpoints) as BreakpointKey[])
                .map(key => ({
                    width: serviceBreakpoints[key],
                    layout: definedBreakpoints[key]!
                }))
                .sort((a, b) => a.width - b.width);
        }
    }

    //#endregion

    //#region Public Template Methods

    public setHeaderTemplate(template: TemplateRef<any>) {
        this.headerTemplate.set(template);
    }

    public setFooterTemplate(template: TemplateRef<any>) {
        this.footerTemplate.set(template);
    }

    //#endregion

    //#region Closing Methods

    /** 
     * Closes the modal with the specified state and result.
     * @param {ModalCloseMode} state The state of the modal close (e.g., 'confirm', 'cancel').
     * @param {R | undefined} result The result to be returned when the modal closes.
     * @param {boolean} fromInsideInteraction Whether the close was triggered from inside the modal interaction.
     * @param {boolean} forceClose Whether to force close the modal, bypassing any confirmation modals.
    */
    public close(state: ModalCloseMode = "cancel", result: R | undefined = undefined, fromInsideInteraction: boolean = false, forceClose: boolean = false): void {
        if (this.isConfirmCloseModalOpen) return;

        if (this.isScrollDisabled) {
            this.scrollLockService.enableScroll(this.config?.enableExtremeOverflowHandling ?? false);
        }

        if ((this.config && this.config?.disableClose !== true) || !fromInsideInteraction || forceClose) {
            if (this.config?.confirmOnCloseModal && this.shouldOpenConfirmCloseModal(forceClose, state)) {
                const modal = this.modalService.open<IModalCloseResult, any>(this.config.confirmOnCloseModal.component, this.config.confirmOnCloseModal.config);

                this.isConfirmCloseModalOpen = true;

                if (this.isBottomSheetModalActive()) {
                    this.resetBottomSheetModalLayout();
                }

                modal.afterClosed()
                    .pipe(take(1))
                    .subscribe((_result: IModalCloseResult) => {
                        this.isConfirmCloseModalOpen = false;
                        if (_result.state === 'confirm') {
                            this.handleClose(state, result);
                        }
                    });
            } else {
                this.handleClose(state, result);
            }
        } else if (this.isBottomSheetModalActive()) {
            this.resetBottomSheetModalLayout();
        }
    }

    private async handleClose(state: ModalCloseMode, result: R | undefined): Promise<void> {
        this.isOpen.set(false);
        this.setBottomSheetModalFinishedState(true);

        const returnResult = {
            data: result,
            state: state,
        } as IModalCloseResult<R | undefined>;

        if (this.closeFunction) {
            this.closeFunction(returnResult);
        }
    }

    protected onBackdropClick(event: MouseEvent) {
        this.backdropClickSubject.next(event);
        if (this.config?.style?.hasBackdrop && this.config?.disableCloseOnBackdropClick !== true) {
            this.close("cancel", undefined, true);
        }
    }

    //#endregion

    //#region Logical Assertions

    private shouldOpenConfirmCloseModal(forceClose: boolean, state: ModalCloseMode): boolean {
        if (this.config?.confirmOnCloseModal) {
            const closeNotCalledWithForceClose = !forceClose;

            if (closeNotCalledWithForceClose) {
                const configuredForConfirmClose = this.config.confirmOnCloseModal !== undefined;
                const closeCalledWithCancelState = state === "cancel";
                const configuredForConfirmCloseOnSubmit = this.config.confirmOnCloseModal.confirmOnSubmit === true;

                return configuredForConfirmClose && (closeCalledWithCancelState || configuredForConfirmCloseOnSubmit);
            }
        }

        return false;
    }

    //#endregion

    //#region Layout Methods

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
            this.handleBottomSheetModalOpened();
        } else if (!shouldBeBottomSheet && currentSwipeState) {
            this.handleBottomSheetModalClosed();
        }
    }

    private handleBottomSheetModalOpened(): void {
        this.isBottomSheetModalActive.set(true);

        this.scrollLockService.disableScroll({
            mainContainer: this.modalContainer?.nativeElement,
            handleExtremeOverflow: this.config?.enableExtremeOverflowHandling ?? false,
            animationDuration: this.animationDuration,
            handleTouchInput: true,
            mobileOnlyTouchPrevention: true,
        });

        this.isScrollDisabled = true;
    }

    private handleBottomSheetModalClosed(): void {
        this.isBottomSheetModalActive.set(false);
        if (this.isOpen() && this.isSpecialMobileOverflowHandlingEnabled) {
            this.scrollLockService.enableScroll(this.config?.enableExtremeOverflowHandling ?? false);
            this.isScrollDisabled = false;
        }
    }

    //#endregion

    //#region Helper Methods

    private getBottomSheetModal(): ModalBottomSheet | undefined {
        return this.sideModalComponents?.first?.bottomSheet?.first
            ?? this.centeredModalComponents?.first?.bottomSheet?.first
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