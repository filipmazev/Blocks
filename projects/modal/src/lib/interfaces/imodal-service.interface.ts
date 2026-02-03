import { ComponentType } from "@angular/cdk/portal";
import { IModalConfig } from "./imodal-config.interface";
import { Observable } from "rxjs";
import { ModalRef } from "../classes/modal-ref";
import { ModalCore } from "../components/modal-core";

export interface IModalService {
    open: (component: ComponentType<any>, config?: IModalConfig<any>) => ModalRef<any, any, any>;

    close: (self: { constructor: Function }, fromCloseFunction: boolean | undefined) => void;
    closeAll: () => void;

    get: (self: { constructor: Function }) => ModalRef<any, any, any> | ModalCore<any, any, any> | undefined;
    getSubscribe(self: { constructor: Function }): Observable<ModalRef<any, any, any> | ModalCore<any, any, any> | undefined>;

    modalsCount: () => number;
}