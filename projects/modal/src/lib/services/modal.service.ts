import { 
    Injectable, 
    inject, 
    Injector, 
    ApplicationRef, 
    EnvironmentInjector, 
    createComponent, 
    RendererFactory2, 
    Renderer2 
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Router, NavigationEnd } from "@angular/router";
import { BehaviorSubject, filter, Observable, map, skip } from "rxjs";
import { Modal } from "../classes/modal";
import { ModalConfig } from "../classes/modal-config";
import { ModalRef } from "../classes/modal-ref";
import { ModalCore } from "../components/modal-core";
import { ModalErrors } from "../enums/modal-errors.enum";
import { IModalConfig } from "../interfaces/imodal-config.interface";
import { IModalService } from "../interfaces/imodal-service.interface";
import { MODAL_DATA } from "../tokens/modal-data.token";
import { ComponentType } from "@angular/cdk/portal";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Injectable({
    providedIn: "root",
})
export class ModalService implements IModalService {

    private router = inject(Router);
    private injector = inject(Injector);
    
    private appRef = inject(ApplicationRef);
    private environmentInjector = inject(EnvironmentInjector);
    
    private rendererFactory = inject(RendererFactory2);
    private renderer: Renderer2;
    
    private document = inject(DOCUMENT);

    //#region Properties

    private modals: Map<{ constructor: Function }, ModalRef | ModalCore> = new Map();
    private modalsSubject = new BehaviorSubject<Map<{ constructor: Function }, ModalRef | ModalCore>>(this.modals);
   
    //#endregion

    constructor() {
        this.renderer = this.rendererFactory.createRenderer(null, null);
        this.createSubscriptions();
    }

    //#region Private Methods

    private createSubscriptions(): void {
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                skip(1), 
                takeUntilDestroyed()
            )
            .subscribe(() => {
                if (this.modalsCount() > 0) {
                    this.closeAll(true);
                }
            });
    }

    //#endregion

    //#region Public Methods

    public open<D, R, C extends Modal<D, R> = Modal<D, R>>(component: ComponentType<C>, config?: IModalConfig<D>): ModalRef<D, R, C> {
        const dataInjector = Injector.create({
            providers: [{ provide: MODAL_DATA, useValue: config?.data }],
            parent: this.injector,
        });

        const wrapperRef = createComponent(ModalCore<D, R, C>, {
            environmentInjector: this.environmentInjector,
            elementInjector: dataInjector
        });

        const contentInjector = Injector.create({
            providers: [
                { provide: ModalCore, useValue: wrapperRef.instance }
            ],
            parent: wrapperRef.injector,
        });

        const contentRef = createComponent(component, {
            environmentInjector: this.environmentInjector,
            elementInjector: contentInjector
        });

        wrapperRef.instance.componentRef = contentRef;
        wrapperRef.instance.config = new ModalConfig(config); 

        this.appRef.attachView(wrapperRef.hostView);
        this.document.body.appendChild(wrapperRef.location.nativeElement);

        const modal = new ModalRef<D, R, C>(
            contentRef,
            component,
            wrapperRef,
            this,
            new ModalConfig(config),
        );

        wrapperRef.onDestroy(() => {
            this.appRef.detachView(wrapperRef.hostView);
            wrapperRef.location.nativeElement.remove();
        });
        
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
                if (modal && modal instanceof ModalRef) {
                    modal.close();
                }
            }
            this.modals.delete(self);
            this.modalsSubject.next(this.modals);
        }
    }

    public closeAll(onNavigate: boolean = false): void {
        this.modals.forEach((modal) => {
            if (modal instanceof ModalRef) {
                if (modal.modalConfig?.disableCloseOnNavigation !== true || !onNavigate) {
                    modal.close("cancel", undefined, true);
                }
            }
        });

        this.modals.clear();
        this.modalsSubject.next(this.modals);
    }

    public get<D, R, C extends Modal<D, R> = Modal<D, R>>(self: { constructor: Function }): ModalRef<D, R, C> | ModalCore<D, R, C> | undefined {
        const modal = this.modals.get(self);
        this.modalRequestedTypeCheck(modal);
        return modal as ModalRef<D, R, C> | ModalCore<D, R, C> | undefined;
    }

    public getSubscribe<D, R, C extends Modal<D, R> = Modal<D, R>>(self: { constructor: Function }): Observable<ModalRef<D, R, C> | ModalCore<D, R, C> | undefined> {
        return this.modalsSubject.asObservable().pipe(map((modals) => {
            const modal = modals.get(self);
            this.modalRequestedTypeCheck(modal);
            return modal as ModalRef<D, R, C> | ModalCore<D, R, C> | undefined;
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

    public modalRequestedTypeCheck(modal: ModalRef | ModalCore | undefined): boolean {
        if (modal) {
            if (modal instanceof ModalRef) {
                if (!(modal.componentRef.instance instanceof Modal)) {
                    throw new Error(ModalErrors.MODAL_DOESNT_MATCH_THE_REQUESTED_TYPES);
                }
            } else if (!(modal instanceof ModalCore)) {
                throw new Error(ModalErrors.MODAL_DOESNT_MATCH_THE_REQUESTED_TYPES);
            }
        }
        return true;
    }
    //#endregion
}