import { Injectable, inject, Injector, ViewContainerRef, Renderer2 } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { BehaviorSubject, Subject, filter, takeUntil, Observable, map, skip } from "rxjs";
import { GenericModal } from "../classes/generic-modal";
import { GenericModalConfig } from "../classes/generic-modal-config";
import { GenericModalRef } from "../classes/generic-modal-ref";
import { GenericModalComponent } from "../components/generic-modal";
import { GenericModalErrors } from "../enums/generic-modal-errors.enum";
import { IGenericModalConfig } from "../interfaces/igeneric-modal-config.interface";
import { IGenericModalService } from "../interfaces/igeneric-modal-service.interface";
import { GENERIC_MODAL_DATA } from "../tokens/generic-modal-data.token";
import { ComponentType } from "@angular/cdk/portal";

@Injectable({
    providedIn: "root",
})
export class GenericModalService implements IGenericModalService {
    private router = inject(Router);
    protected injector = inject(Injector);

    //#region Properties

    private modals: Map<{ constructor: Function }, GenericModalRef | GenericModalComponent> = new Map();
    private modalsSubject = new BehaviorSubject<Map<{ constructor: Function }, GenericModalRef | GenericModalComponent>>(this.modals);

    public viewContainer?: ViewContainerRef;
    public renderer?: Renderer2;

    private unsubscribe$ = new Subject<void>();

    //#endregion

    constructor() {
        this.createSubscriptions();
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    //#region Private Methods

    private createSubscriptions(): void {
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                skip(1), 
                takeUntil(this.unsubscribe$)
            )
            .subscribe(() => {
                if (this.modalsCount() > 0) {
                    this.closeAll(true);
                }
            });
    }

    //#endregion

    //#region Public Methods

    public register(viewContainer: ViewContainerRef, renderer: Renderer2): void {
        this.viewContainer = viewContainer;
        this.renderer = renderer;
    }

    public open<D, R, C extends GenericModal<D, R> = GenericModal<D, R>>(component: ComponentType<C>, config?: IGenericModalConfig<D>): GenericModalRef<D, R, C> {
        if (!this.viewContainer || !this.renderer) {
            throw new Error(GenericModalErrors.GENERIC_MODAL_SERVICE_RENDERER_NOT_SET);
        }

        const dataInjector = Injector.create({
            providers: [{ provide: GENERIC_MODAL_DATA, useValue: config?.data }],
            parent: this.injector,
        });

        const wrapperRef = this.viewContainer.createComponent(GenericModalComponent<D, R, C>, {
            injector: dataInjector,
        });

        const contentInjector = Injector.create({
            providers: [
                { provide: GenericModalComponent, useValue: wrapperRef.instance }
            ],
            parent: wrapperRef.injector,
        });

        const contentRef = this.viewContainer.createComponent(component, {
            injector: contentInjector,
        });

        const modal = new GenericModalRef<D, R, C>(
            contentRef,
            component,
            wrapperRef,
            this,
            new GenericModalConfig(config),
        );

        const modalElement = modal.componentRef.location.nativeElement;
        this.renderer.setStyle(modalElement, 'height', '97%');
        this.renderer.setStyle(modalElement, 'width', '100%');
        this.renderer.setStyle(modalElement, 'display', 'flex');
        this.renderer.setStyle(modalElement, 'flex-grow', '1');

        this.modals.set(modal.selfIdentifier, modal);
        this.modalsSubject.next(this.modals);

        modal.open();

        return modal;
    }

    public close(self: { constructor: Function }, fromCloseFunction: boolean | undefined = false): void {
        if (this.modals.has(self)) {
            if (fromCloseFunction !== true) {

                const modal = this.modals.get(self);
                if (modal && modal instanceof GenericModalRef) {
                    modal.close();
                }
            }
            this.modals.delete(self);
            this.modalsSubject.next(this.modals);
        }
    }

    public closeAll(onNavigate: boolean = false): void {
        this.modals.forEach((modal) => {
            if (modal instanceof GenericModalRef) {
                if (modal.modalConfig?.disableCloseOnNavigation !== true || !onNavigate) {
                    modal.close("cancel", undefined, true);
                }
            }
        });

        this.modals.clear();
        this.modalsSubject.next(this.modals);
    }

    public get<D, R, C extends GenericModal<D, R> = GenericModal<D, R>>(self: { constructor: Function }): GenericModalRef<D, R, C> | GenericModalComponent<D, R, C> | undefined {
        const modal = this.modals.get(self);
        this.modalRequestedTypeCheck(modal);
        return modal as GenericModalRef<D, R, C> | GenericModalComponent<D, R, C> | undefined;
    }

    public getSubscribe<D, R, C extends GenericModal<D, R> = GenericModal<D, R>>(self: { constructor: Function }): Observable<GenericModalRef<D, R, C> | GenericModalComponent<D, R, C> | undefined> {
        return this.modalsSubject.asObservable().pipe(map((modals) => {
            const modal = modals.get(self);
            this.modalRequestedTypeCheck(modal);
            return modal as GenericModalRef<D, R, C> | GenericModalComponent<D, R, C> | undefined;
        }));
    }

    public modalsCount(): number {
        return this.modals.size;
    }

    public find(self: { constructor: Function }): boolean {
        return this.modals.has(self);
    }

    //#endregion

    //#region Helper Methods

    public modalRequestedTypeCheck(modal: GenericModalRef | GenericModalComponent | undefined): boolean {
        if (modal) {
            if (modal instanceof GenericModalRef) {
                if (!(modal.componentRef.instance instanceof GenericModal)) {
                    throw new Error(GenericModalErrors.MODAL_DOESNT_MATCH_THE_REQUESTED_TYPES);
                }
            } else if (!(modal instanceof GenericModalComponent)) {
                throw new Error(GenericModalErrors.MODAL_DOESNT_MATCH_THE_REQUESTED_TYPES);
            }
        }

        return true;
    }

    //#endregion
}
