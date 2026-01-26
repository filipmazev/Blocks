import { OnDestroy, Renderer2, ViewContainerRef } from "@angular/core";
import { ComponentType } from "@angular/cdk/portal";
import { IGenericModalConfig } from "./igeneric-modal-config.interface";
import { Observable } from "rxjs";
import { GenericModalRef } from "../classes/generic-modal-ref";
import { GenericModalComponent } from "../components/generic-modal";

export interface IGenericModalService extends OnDestroy {
    viewContainer?: ViewContainerRef;
    register: (viewContainer: ViewContainerRef, renderer: Renderer2) => void;

    open: (component: ComponentType<any>, config?: IGenericModalConfig<any>) => GenericModalRef<any, any, any>;

    close: (self: { constructor: Function }, fromCloseFunction: boolean | undefined) => void;
    closeAll: () => void;

    get: (self: { constructor: Function }) => GenericModalRef<any, any, any> | GenericModalComponent<any, any, any> | undefined;
    getSubscribe(self: { constructor: Function }): Observable<GenericModalRef<any, any, any> | GenericModalComponent<any, any, any> | undefined>;

    modalsCount: () => number;
}