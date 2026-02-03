import { NgTemplateOutlet, NgClass } from "@angular/common";
import { Component, input, output, ViewChildren, QueryList, TemplateRef, computed } from "@angular/core";
import { ModalConfig } from "../../../classes/modal-config";
import { IModalView } from "../../../interfaces/imodal-view.interface";
import { ModalCloseMode, ModalLayout } from "../../../types/modal.types";
import { ModalBanner } from "../../shared/ui/banner/modal-banner";
import { ModalBottomSheet } from "../bottom-sheet/modal-bottom-sheet";
import { ModalDefaultCloseButton } from "../../shared/ui/default-close-button/default-close-button";

@Component({
    selector: 'modal-centered',
    imports: [
        NgTemplateOutlet,
        NgClass,
        ModalBottomSheet,
        ModalBanner,
        ModalDefaultCloseButton
    ],
    templateUrl: './modal-centered.html',
    styleUrl: './modal-centered.scss'
})
export class ModalCentered<D = unknown> implements IModalView<D> {
    readonly headerTemplate = input.required<TemplateRef<any> | null>();
    readonly footerTemplate = input.required<TemplateRef<any> | null>();

    readonly config = input.required<ModalConfig<D> | undefined>();
    readonly isOpen = input.required<boolean>();
    readonly isAnimated = input.required<boolean>();
    readonly isBottomSheetModalActive = input.required<boolean>();
    readonly animationDuration = input.required<number>();
    readonly hasDefaultContentWrapperClass = input.required<boolean>();
    readonly hasBanner = input.required<boolean>();

    readonly close = output<ModalCloseMode | undefined>();
    readonly onBackdropClick = output<MouseEvent>();

    @ViewChildren(ModalBottomSheet) bottomSheet!: QueryList<ModalBottomSheet>;

    public modalClasses = computed(() => {
        return {
            'centered-modal-content-wrapper': true,
            'centered-modal-default-style': this.hasDefaultContentWrapperClass() || this.hasBanner(),

            'centered-modal-animate-in': this.isAnimated() && this.isOpen(),
            'centered-modal-animate-out': this.isAnimated() && !this.isOpen(),
        };
    });
}