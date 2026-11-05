/**
 * Describes the tag palette contract.
 */
export interface ITagPalette {
  /** Foreground color used for text. */
  text: string;
  /** Filled background color for the semantic intent. */
  fill: string;
  /** Foreground color paired with the filled background. */
  onFill: string;
  /** Tonal background color for the semantic intent. */
  tonal: string;
  /** Border color for the semantic intent. */
  border: string;
}
