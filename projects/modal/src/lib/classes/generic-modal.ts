import { Injectable, OnDestroy, inject } from "@angular/core";
import { GenericModalRef } from "./generic-modal-ref";
import { Subject, takeUntil } from "rxjs";
import { GenericModalService } from "../services/generic-modal.service";

@Injectable()
export abstract class GenericModal<D, R> implements OnDestroy {
    protected genericModalService = inject(GenericModalService);

    modal?: GenericModalRef<D, R>;

    protected modalGetSubscription$ = new Subject<void>();

    constructor() {
        this.createModalSubscription();
    }

    ngOnDestroy(): void {
        this.onDestroy();
        this.unsubscribeModalGet();
    }

    protected createModalSubscription() {
        this.modalGetSubscription$ = new Subject<void>();

        this.genericModalService
            .getSubscribe<D, R>(this.constructor)
            .pipe(takeUntil(this.modalGetSubscription$))
            .subscribe((modal) => {
                if (modal instanceof GenericModalRef) {
                    this.modal = modal;
                    this.afterModalGet();
                    this.modalGetSubscription$.next();
                    this.modalGetSubscription$.complete();
                }
            });
    }

    protected unsubscribeModalGet() {
        this.modalGetSubscription$.next();
        this.modalGetSubscription$.complete();
    }

    abstract afterModalGet(): void;
    abstract onDestroy(): void;

    public close() {
        this.modal?.close();
    }
}
