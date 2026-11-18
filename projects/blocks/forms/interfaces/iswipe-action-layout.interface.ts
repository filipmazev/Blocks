/** Measured action geometry, in CSS pixels, used by the gesture controller. */
export interface ISwipeActionLayout {
  /** Reveal distance for a leftward swipe; zero when that group is empty. */
  readonly left: number;
  /** Reveal distance for a rightward swipe; zero when that group is empty. */
  readonly right: number;
  /** Maximum bounded overdrag distance; shared by both physical directions. */
  readonly full: number;
  /** Measured full-size action column including its horizontal padding. */
  readonly column: number;
}
