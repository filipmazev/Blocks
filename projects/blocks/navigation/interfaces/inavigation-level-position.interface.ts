/** Internal scroll and focus bookmark for a navigation level. */
export interface INavigationLevelPosition {
  /** Saved vertical scroll position in CSS pixels. */
  scrollTop: number;
  /** ID of the item to restore or reveal. Optional. */
  itemId?: string;
  /** ID of the section to restore or reveal. Optional. */
  sectionId?: string;
  /** Whether the interaction came from a disclosure control. */
  disclosure: boolean;
}
