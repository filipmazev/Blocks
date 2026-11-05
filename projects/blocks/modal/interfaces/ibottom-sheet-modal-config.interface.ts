/**
 * Interface for Bottom Sheet Modal Configuration
 */
export interface IBottomSheetModalConfig {
  /** (optional) The limit for down swipe to close the modal (1/N of modal height needs to be reached to trigger close), will default to MODAL_DOWN_SWIPE_LIMIT = 3 */
  downSwipeLimit?: number;
  /** (optional) Custom height for the bottom sheet modal */
  customHeight?: number;
}
