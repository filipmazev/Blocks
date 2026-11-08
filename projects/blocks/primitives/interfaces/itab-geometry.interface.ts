/** Cached header geometry in the tab list's scrolling coordinate space. */
export interface ITabGeometry {
  /** Native enabled tab trigger. */
  element: HTMLButtonElement;
  /** Stable application value committed on release. */
  value: string;
  /** Physical left offset in CSS pixels, including scrolled content. */
  left: number;
  /** Physical top offset in CSS pixels. */
  top: number;
  /** Trigger width in CSS pixels. */
  width: number;
  /** Trigger height in CSS pixels. */
  height: number;
}
