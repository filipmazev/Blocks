import { NgTemplateOutlet, NgClass } from "@angular/common";
import { Component, input, output, ViewChildren, QueryList, TemplateRef } from "@angular/core";
import { GenericModalConfig } from "../../../classes/generic-modal-config";
import { IGenericModalView } from "../../../interfaces/igeneric-modal-view.interface";
import { ModalCloseMode } from "../../../types/modal.types";
import { ModalBanner } from "../banner/modal-banner";
import { ModalSwipeable } from "../swipeable/modal-swipeable";

@Component({
    selector: 'modal-centered',
    imports: [
        NgTemplateOutlet,
        NgClass,
        ModalSwipeable,
        ModalBanner,
    ],
    templateUrl: './modal-centered.html',
    styleUrl: './modal-centered.scss'
})
export class ModalCentered<D = unknown> implements IGenericModalView<D> {
    readonly footerTemplate = input.required<TemplateRef<any> | null>();
    
    readonly config = input.required<GenericModalConfig<D> | undefined>();
    readonly isOpen = input.required<boolean>();
    readonly isAnimated = input.required<boolean>();
    readonly isSwipeableModalActive = input.required<boolean>();
    readonly animationDuration = input.required<number>();
    readonly hasDefaultContentWrapperClass = input.required<boolean>();
    readonly hasBanner = input.required<boolean>();

    readonly close = output<ModalCloseMode | undefined>();
    readonly onBackdropClick = output<MouseEvent>();

    @ViewChildren(ModalSwipeable) swipeableComponents!: QueryList<ModalSwipeable>;

    public get modalClasses(): { [key: string]: boolean } {
        return {
            'centered-modal-content-wrapper': true,
            'centered-modal-default-style': this.hasDefaultContentWrapperClass() || this.hasBanner(),

            'centered-modal-animate-in': this.isAnimated() && this.isOpen(),
            'centered-modal-animate-out': this.isAnimated() && !this.isOpen(),
        };
    }
}