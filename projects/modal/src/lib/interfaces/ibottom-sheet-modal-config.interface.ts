/**
 * Interface for Bottom Sheet Modal Configuration
 * @param {number} downSwipeLimit (optional) The limit for down swipe to close the modal (1/N of modal height needs to be reached to trigger close), will default to MODAL_DOWN_SWIPE_LIMIT = 3
 * @param {number} customHeight (optional) Custom height for the bottom sheet modal
 */
export interface IBottomSheetModalConfig {
    downSwipeLimit?: number;
    customHeight?: number;
}