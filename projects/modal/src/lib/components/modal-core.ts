import { NgTemplateOutlet } from "@angular/common";
import { Component, inject, output, ComponentRef, ViewChild, ElementRef, ViewChildren, QueryList, TemplateRef, ViewContainerRef, signal, effect } from "@angular/core";
import { Subject, Observable, fromEvent, filter, take } from "rxjs";
import { GenericModal } from "../classes/generic-modal";
import { GenericModalConfig } from "../classes/generic-modal-config";
import { EMPTY_STRING } from "../constants/generic-modal-common.constants";
import { GenericModalWarnings } from "../enums/generic-modal-warnings.enum";
import { IGenericModalComponenet } from "../interfaces/igeneric-modal-component.interface";
import { GenericModalService } from "../services/generic-modal.service";
import { ModalBackdrop } from "./shared/ui/backdrop/modal-backdrop";
import { ModalCentered } from "./views/centered/modal-centered";
import { ModalSide } from "./views/side/modal-side";
import { ModalSwipeable } from "./views/swipeable/modal-swipeable";
import { ModalCloseMode } from "../types/modal.types";
import { IGenericCloseResult } from "../interfaces/igeneric-close-result.interface";
import { DeviceTypeService, ScrollLockService, WindowDimensionsService } from "@filip.mazev/blocks-core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import * as animConst from "../constants/generic-modal-animation.constants";

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
    C extends GenericModal<D, R> = GenericModal<D, R>>
    implements IGenericModalComponenet<D, R, C> {

    private modalService = inject(GenericModalService);
    private windowDimensionsService = inject(WindowDimensionsService);
    private scrollLockService = inject(ScrollLockService);
    private deviceTypeService = inject(DeviceTypeService);

    readonly afterClose = output<void>();

    readonly animationDuration: number = animConst.GENERIC_MODAL_DEFAULT_ANIM_DURATION;

    public componentRef: ComponentRef<C> = {} as ComponentRef<C>;
    public config?: GenericModalConfig<D>;
    public closeFunction?: Function;

    public backdropClickSubject = new Subject<MouseEvent>();
    public backdropClick: Observable<MouseEvent> = this.backdropClickSubject.asObservable();

    public isOpen = signal<boolean>(true);
    public isSwipeableModalActive = signal<boolean>(false);

    protected headerTemplate = signal<TemplateRef<any> | null>(null);
    protected footerTemplate = signal<TemplateRef<any> | null>(null);

    public isAnimated: boolean = false;
    public isCentered: boolean = false;
    public isSide: boolean = false;
    protected hasBanner: boolean = false;
    protected hasDefaultContentWrapperClass: boolean = false;

    private isConfirmCloseModalOpen: boolean = false;
    private isSpecialMobileOverflowHandlingEnabled: boolean = false;
    private isScrollDisabled: boolean = false;

    protected windowDimensions = this.windowDimensionsService.dimensions;

    @ViewChild("modalContainer", { static: true }) modalContainer?: ElementRef;

    @ViewChildren(ModalSide) sideModalComponents?: QueryList<ModalSide>;
    @ViewChildren(ModalCentered) centeredModalComponents?: QueryList<ModalCentered>;

    @ViewChild("contentTemplate") contentTemplate?: TemplateRef<HTMLElement>;
    @ViewChild("dynamicContainer", { read: ViewContainerRef }) dynamicContainer?: ViewContainerRef;

    constructor() {
        this.initKeyboardSubscription();

        effect(() => {
            const width = this.windowDimensions().width;
            this.handleWindowDimensionChange(width);
        });
    }

    public ngOnInit() {
        this.initParamsFromConfig();

        if (this.config?.style.handleMobile !== false && this.windowDimensionsService.isMobile()) {
            this.handleSwipeableModalOpened();
        } else {
            this.isSwipeableModalActive.set(false);
        }
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
        this.isCentered = this.config?.style.position === "center";
        this.isSide = this.config?.style.position === "left" || this.config?.style.position === "right";
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

    public close(state: ModalCloseMode = "cancel", result: R | undefined = undefined, fromInsideInteraction: boolean = false, forceClose: boolean = false): void {
        if (this.isConfirmCloseModalOpen) return;

        if (this.isScrollDisabled) {
            this.scrollLockService.enableScroll(this.config?.enableExtremeOverflowHandling ?? false);
        }

        if ((this.config && this.config?.disableClose !== true) || !fromInsideInteraction || forceClose) {
            if (this.config?.confirmCloseConfig && this.shouldOpenConfirmCloseModal(forceClose, state)) {
                if (this.shouldOpenConfirmCloseModalSelfCheck()) {
                    const modal = this.modalService.open<IGenericCloseResult, any>(this.config.confirmCloseConfig.confirmModalComponent, {
                        style: this.config.confirmCloseConfig.style ?? {
                            handleMobile: false,
                        },
                        disableClose: true,
                        bannerText: this.config.confirmCloseConfig.bannerText ?? EMPTY_STRING,
                        data: this.config.confirmCloseConfig.data ?? null,
                    });

                    this.isConfirmCloseModalOpen = true;

                    if (this.isSwipeableModalActive()) {
                        this.resetSwipeableModalPosition();
                    }

                    modal.afterClosed()
                        .pipe(take(1))
                        .subscribe((_result: IGenericCloseResult) => {
                            this.isConfirmCloseModalOpen = false;
                            if (_result.state === 'confirm') {
                                this.handleClose(state, result);
                            }
                        });
                } else {
                    if (this.config?.disableConsoleWarnings !== true) {
                        console.warn(GenericModalWarnings.CONFIRM_MODAL_NESTING_NOT_SUPPORTED);
                    }

                    this.handleClose(state, result);
                }
            } else {
                this.handleClose(state, result);
            }
        } else if (this.isSwipeableModalActive()) {
            this.resetSwipeableModalPosition();
        }
    }

    private async handleClose(state: ModalCloseMode, result: R | undefined): Promise<void> {
        this.isOpen.set(false);
        this.setSwipeableModalFinishedState(true);

        const returnResult = {
            data: result,
            state: state,
        } as IGenericCloseResult<R | undefined>;

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
        if (this.config?.confirmCloseConfig) {
            const closeNotCalledWithForceClose = !forceClose;

            if (closeNotCalledWithForceClose) {
                const configuredForConfirmClose = this.config.confirmCloseConfig.confirmClose === true;
                const closeCalledWithCancelState = state === "cancel";
                const configuredForConfirmCloseOnSubmit = this.config.confirmCloseConfig.confirmOnSubmit === true;

                return configuredForConfirmClose && (closeCalledWithCancelState || configuredForConfirmCloseOnSubmit);
            }
        }

        return false;
    }

    private shouldOpenConfirmCloseModalSelfCheck(): boolean {
        if (this.config?.confirmCloseConfig) {
            const hasSelfIdentifier = this.componentRef && this.componentRef.instance && this.componentRef.instance.modal && this.componentRef.instance.modal.selfIdentifier !== EMPTY_STRING;
            const bypassSelfCheck = this.config.confirmCloseConfig.bypassSelfCheck === true;

            return hasSelfIdentifier || bypassSelfCheck;
        }

        return false;
    }

    //#endregion

    //#region Swipable Modal Methods

    private handleWindowDimensionChange(width: number): void {
        if (this.config?.style.handleMobile === false) return;

        const smBreakpoint = this.windowDimensionsService.breakpoints.sm;
        const currentSwipeState = this.isSwipeableModalActive();

        if (width < smBreakpoint && !currentSwipeState) {
            this.handleSwipeableModalOpened();
        } 
        
        if (width >= smBreakpoint && currentSwipeState) {
            this.handleSwipeableModalClosed();
        }
    }

    private handleSwipeableModalOpened(): void {
        this.isSwipeableModalActive.set(true);

        this.scrollLockService.disableScroll({
            mainContainer: this.modalContainer?.nativeElement,
            handleExtremeOverflow: this.config?.enableExtremeOverflowHandling ?? false,
            animationDuration: this.animationDuration,
            handleTouchInput: true,
            mobileOnlyTouchPrevention: true,
        });

        this.isScrollDisabled = true;
    }

    private handleSwipeableModalClosed(): void {
        this.isSwipeableModalActive.set(false);

        if (this.isOpen() && this.isSpecialMobileOverflowHandlingEnabled) {
            this.scrollLockService.enableScroll(this.config?.enableExtremeOverflowHandling ?? false);
            this.isScrollDisabled = false;
        }
    }

    //#endregion

    //#region Helper Methods

    private getSwipeableModal(): ModalSwipeable | undefined {
        return this.sideModalComponents?.first?.swipeableComponents?.first
            ?? this.centeredModalComponents?.first?.swipeableComponents?.first
    }

    private resetSwipeableModalPosition(): void {
        const swipeableModal = this.getSwipeableModal();
        if (swipeableModal) {
            swipeableModal.currentTranslateY.set(0);
        }
    }

    private setSwipeableModalFinishedState(isFinished: boolean): void {
        const swipeableModal = this.getSwipeableModal();
        if (swipeableModal) {
            swipeableModal.isSwipingVerticallyFinished.set(isFinished);
        }
    }

    //#endregion
}
