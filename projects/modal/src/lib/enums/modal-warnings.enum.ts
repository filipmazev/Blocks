export enum ModalWarnings {
    //#region Multi-level modals
    NO_PARENT_PROVIDED = "No parent modal provided for multilevel modal. Please provide a parent modal or set openAsMultilevel to false.",
    MULTILEVEL_INLINE_NOT_SUPPORTED = "As of this version, opening a multi-level modal from inline HTML is not possible. Please set openAsMultilevel to false or open your modal through the ModalService! Opening modal as normal modal.",
    MULTILEVEL_NO_PARENT = "Cannot open a multilevel modal with only one modal open. Please open another modal before opening a multilevel modal or set openAsMultilevel to false.",
    PARENT_MODAL_NOT_SET = "Error setting parent modal. Opening modal as normal modal",
    //#endregion

    //#region Confirm close
    CONFIRM_MODAL_NESTING_NOT_SUPPORTED = "Cannot open a confirm modal from within a confirm modal. If you want to allow this behaviour, set bypassSelfCheck to true in the confirmCloseConfig.",
    //#endregion

    //#region Directive usage
    FOOTER_DIRECTIVE_OUTSIDE_MODAL = "[ModalFooter] Directive used outside of a ModalComponent.",
    HEADER_DIRECTIVE_OUTSIDE_MODAL = "[ModalHeader] Directive used outside of a ModalComponent.",
    //#endregion
}