import { Injectable, OnDestroy, inject } from "@angular/core";
import { ModalRef } from "./modal-ref";
import { Subject, takeUntil } from "rxjs";
import { ModalService } from "../services/modal.service";

@Injectable()
export abstract class Modal<D, R> implements OnDestroy {
    protected ModalService = inject(ModalService);

    modal?: ModalRef<D, R>;

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

        this.ModalService
            .getSubscribe<D, R>(this.constructor)
            .pipe(takeUntil(this.modalGetSubscription$))
            .subscribe((modal) => {
                if (modal instanceof ModalRef) {
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
