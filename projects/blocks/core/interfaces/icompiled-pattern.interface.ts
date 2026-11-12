/**
 * Compiled representation of a date or time pattern used by strict parsing.
 */
export interface ICompiledPattern {
  /** Regular expression matching the complete pattern. */
  readonly regex: RegExp;
  /** Ordered field names captured by the expression. */
  readonly tokens: readonly string[];
}
