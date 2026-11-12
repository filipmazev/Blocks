/**
 * Result of a strict date or time parse.
 */
export interface IParseResult<T> {
  /** Parsed value when parsing succeeded; null otherwise. */
  readonly value: T | null;
  /** Machine-readable failure kind used to select a translated validation message, or null on success. */
  readonly error: 'empty' | 'format' | 'range' | 'ambiguous' | 'unsupported' | null;
  /** Human-readable English diagnostic intended for logs and development; not for direct display. */
  readonly message: string | null;
}
