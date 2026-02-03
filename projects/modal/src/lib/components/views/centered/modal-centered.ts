import { NgTemplateOutlet, NgClass } from "@angular/common";
import { Component, input, output, ViewChildren, QueryList, TemplateRef, computed } from "@angular/core";
import { GenericModalConfig } from "../../../classes/generic-modal-config";
import { IGenericModalView } from "../../../interfaces/igeneric-modal-view.interface";
import { ModalCloseMode } from "../../../types/modal.types";
import { ModalBanner } from "../../shared/ui/banner/modal-banner";
import { ModalSwipeable } from "../swipeable/modal-swipeable";
import { ModalDefaultCloseButton } from "../../shared/ui/default-close-button/default-close-button";

@Component({
    selector: 'modal-centered',
    imports: [
        NgTemplateOutlet,
        NgClass,
        ModalSwipeable,
        ModalBanner,
        ModalDefaultCloseButton
    ],
    templateUrl: './modal-centered.html',
    styleUrl: './modal-centered.scss'
})
export class ModalCentered<D = unknown> implements IGenericModalView<D> {
    readonly headerTemplate = input.required<TemplateRef<any> | null>();
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

    public modalClasses = computed(() => {
        return {
            'centered-modal-content-wrapper': true,
            'centered-modal-default-style': this.hasDefaultContentWrapperClass() || this.hasBanner(),

            'centered-modal-animate-in': this.isAnimated() && this.isOpen(),
            'centered-modal-animate-out': this.isAnimated() && !this.isOpen(),
        };
    });
}