export enum GenericModalErrors {
    //#region General
    MODAL_DOESNT_MATCH_THE_REQUESTED_TYPES = "The modal doesn't match the requested types.",
    GENERIC_MODAL_SERVICE_RENDERER_NOT_SET = "ViewContainer and Renderer not set, please set the view container in the constructor of app.module.ts / app.ts (by calling register), before opening a modal",
    //#endregion

    //#region Multi-level modals
    PARENT_MODAL_CANT_BE_THE_SAME_AS_CHILD = "Parent modal cannot be the same as the child modal",
    PARENT_MODAL_NOT_FOUND = "Parent modal does not exist",
    PARENT_MODAL_NOT_PROVIDED = "No parent modal provided for multilevel modal",
    //#endregion
}