import { NgTemplateOutlet } from "@angular/common";
import { Component, inject, ChangeDetectorRef, output, ComponentRef, ViewChild, ElementRef, ViewChildren, QueryList, TemplateRef, ViewContainerRef, signal } from "@angular/core";
import { Subject, Observable, takeUntil, fromEvent, filter, take } from "rxjs";
import { GenericModal } from "../classes/generic-modal";
import { GenericModalConfig } from "../classes/generic-modal-config";
import { EMPTY_STRING } from "../constants/generic-modal-common.constants";
import { GenericModalWarnings } from "../enums/generic-modal-warnings.enum";
import { IGenericModalComponenet } from "../interfaces/igeneric-modal-component.interface";
import { GenericModalService } from "../services/generic-modal.service";
import { ModalBackdrop } from "./views/backdrop/modal-backdrop";
import { ModalCentered } from "./views/centered/modal-centered";
import { ModalSide } from "./views/side/modal-side";
import { ModalSwipeable } from "./views/swipeable/modal-swipeable";
import { ModalCloseMode } from "../types/modal.types";
import { IGenericCloseResult } from "../interfaces/igeneric-close-result.interface";
import { DeviceTypeService, ScrollLockService, WindowDimensions, WindowDimensionsService } from "@filip.mazev/common-parts";
import * as animConst from "../constants/generic-modal-animation.constants";

@Component({
    selector: "generic-modal",
    imports: [
        NgTemplateOutlet,
        ModalCentered,
        ModalSide,
        ModalBackdrop
    ],
    templateUrl: "./generic-modal.html",
    styleUrl: "./generic-modal.scss",
})
export class GenericModalComponent<
    D = unknown,
    R = any,
    C extends GenericModal<D, R> = GenericModal<D, R>>
    implements IGenericModalComponenet<D, R, C> {
    private modalService = inject(GenericModalService);
    private windowDimensionService = inject(WindowDimensionsService);
    private scrollLockService = inject(ScrollLockService);
    private deviceTypeService = inject(DeviceTypeService);
    cdr = inject(ChangeDetectorRef);

    readonly afterClose = output<void>();

    readonly animationDuration: number = animConst.GENERIC_MODAL_DEFAULT_ANIM_DURATION;

    public componentRef: ComponentRef<C> = {} as ComponentRef<C>;
    public config?: GenericModalConfig<D>;

    public closeFunction?: Function;
    public backdropClickSubject = new Subject<MouseEvent>();
    public backdropClick: Observable<MouseEvent> = this.backdropClickSubject.asObservable();

    public footerTemplate = signal<TemplateRef<any> | null>(null);

    private _isOpen: boolean = true;
    public get isOpen(): boolean {
        return this._isOpen;
    }
    private set isOpen(value: boolean) {
        this._isOpen = value;
        this.cdr.detectChanges();
    }

    public isSwipeableModalActive: boolean = false;
    public isAnimated: boolean = false;
    public isCentered: boolean = false;
    public isSide: boolean = false;

    protected hasBanner: boolean = false;
    protected hasDefaultContentWrapperClass: boolean = false;

    private isConfirmCloseModalOpen: boolean = false;
    private isSpecialMobileOverflowHandlingEnabled: boolean = false;
    private isScrollDisabled: boolean = false;

    protected windowDimensions: WindowDimensions;

    private unsubscribe$ = new Subject<void>();

    @ViewChild("modalContainer", { static: true }) modalContainer?: ElementRef;

    @ViewChildren(ModalSide) sideModalComponents?: QueryList<ModalSide>;
    @ViewChildren(ModalCentered) centeredModalComponents?: QueryList<ModalCentered>;

    @ViewChild("contentTemplate") contentTemplate?: TemplateRef<HTMLElement>;
    @ViewChild("dynamicContainer", { read: ViewContainerRef }) dynamicContainer?: ViewContainerRef;

    constructor() {
        this.windowDimensions = this.windowDimensionService.getWindowDimensions();
    }

    public ngOnInit() {
        this.initParamsFromConfig();
        this.createSubscriptions();

        if (this.config?.style.handleMobile !== false && this.windowDimensions.width < this.windowDimensions.threshold_sm) {
            this.isSwipeableModalActive = true;
        } else {
            this.isSwipeableModalActive = false;
        }
    }

    public ngAfterViewInit(): void {
        if (!this.componentRef) return;
        this.dynamicContainer?.insert(this.componentRef.hostView);
    }

    public ngOnDestroy(): void {
        this.componentRef?.destroy();
        this.dynamicContainer?.clear();
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    //#region Subscription Methods

    private createSubscriptions(): void {
        this.windowDimensionService
            .getWindowDimensions$()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((dimensions) => {
                this.windowDimensions = dimensions;
                this.handleWindowDimensionChange();
            });

        fromEvent<KeyboardEvent>(document, "keydown")
            .pipe(
                filter((event: KeyboardEvent) => event.key === "Escape"),
                takeUntil(this.unsubscribe$),
            )
            .subscribe(() => {
                if (!this.isConfirmCloseModalOpen) {
                    this.close("cancel", undefined, true);
                }
            });
    }

    private handleWindowDimensionChange(): void {
        if (this.config?.style.handleMobile !== false) {
            if (this.windowDimensions.width < this.windowDimensions.threshold_sm && !this.isSwipeableModalActive) {
                this.isSwipeableModalActive = true;

                if (this.isOpen) {
                    if (this.isSpecialMobileOverflowHandlingEnabled) {
                        this.scrollLockService.disableScroll({
                            mainContainer: this.modalContainer?.nativeElement,
                            handleExtremeOverflow: this.config?.enableExtremeOverflowHandling ?? false,
                            animationDuration: this.animationDuration,
                            handleTouchInput: true,
                            mobileOnlyTouchPrevention: true,
                        });

                        this.isScrollDisabled = true;
                    }
                }
            }

            if (this.windowDimensions.width >= this.windowDimensions.threshold_sm && this.isSwipeableModalActive) {
                this.isSwipeableModalActive = false;
                if (this.isOpen) {
                    if (this.isSpecialMobileOverflowHandlingEnabled) {
                        this.scrollLockService.enableScroll(this.config?.enableExtremeOverflowHandling ?? false);
                        this.isScrollDisabled = false;
                    }
                }
            }
        }
    }

    //#endregion

    //#region Initialization Methods

    private initParamsFromConfig() {
        this.isSpecialMobileOverflowHandlingEnabled = (this.deviceTypeService.getDeviceState().isAppleDevice || this.config?.webkitOnlyOverflowMobileHandling === false);

        this.hasBanner =
            this.config !== undefined &&
            ((this.config.bannerText !== undefined && this.config.bannerText.length > 0) ||
                (this.config.bannerIcons && this.config.bannerIcons.length > 0) ||
                this.config.disableClose !== true &&
                this.config.style.showCloseButton !== false);

        this.hasDefaultContentWrapperClass = this.config?.style.contentWrapper !== false;

        this.isAnimated = this.config?.style.animate === true && (this.config?.style.contentWrapper !== false || this.hasBanner);
        this.isCentered = this.config?.style.position === "center";
        this.isSide = this.config?.style.position === "left" || this.config?.style.position === "right";
    }

    //#endregion

    //#region Public Template Methods

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
                        bannerIcons: this.config.confirmCloseConfig.bannerIcons ?? [],
                        data: this.config.confirmCloseConfig.data ?? null,
                    });

                    this.isConfirmCloseModalOpen = true;

                    if (this.isSwipeableModalActive) {
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
        } else if (this.isSwipeableModalActive) {
            this.resetSwipeableModalPosition();
        }
    }

    private async handleClose(state: ModalCloseMode, result: R | undefined): Promise<void> {
        this.isOpen = false;
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

    //#region Helper Methods

    private getSwipeableModal(): ModalSwipeable | undefined {
        return this.sideModalComponents?.first?.swipeableComponents?.first
            ?? this.centeredModalComponents?.first?.swipeableComponents?.first
    }

    private resetSwipeableModalPosition(): void {
        const swipeableModal = this.getSwipeableModal();
        if (swipeableModal) {
            swipeableModal.currentTranslateY = 0;
        }
    }

    private setSwipeableModalFinishedState(isFinished: boolean): void {
        const swipeableModal = this.getSwipeableModal();
        if (swipeableModal) {
            swipeableModal.isSwipingVerticallyFinished = isFinished;
        }
    }

    //#endregion
}
