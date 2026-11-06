import type { CssTokenCategory, CssTokenKind, CssTokenScope } from '@core/types/token-catalog.types';

/** Describes a discovered Blocks CSS custom property, including its availability and source-level values. */
export interface ICssToken {
  /** Custom-property name, including the leading `--bx-`. */
  readonly name: string;
  /** Ready-to-use `var(--bx-…)` reference; local and runtime properties can require a fallback. */
  readonly reference: string;
  /** Foundation or feature category used for browsing and filtering. */
  readonly category: CssTokenCategory;
  /** Readable semantic role, palette, or component group. */
  readonly group: string;
  /** Appropriate visual preview; arbitrary local values are presented as text. */
  readonly kind: CssTokenKind;
  /** Availability: global utility, themed role, local declaration/fallback, or runtime-only reference. */
  readonly scope: CssTokenScope;
  /** Distinct compiled declaration values; these are source defaults, not live computed values. Empty when no CSS declaration exists. */
  readonly defaults: readonly string[];
}
