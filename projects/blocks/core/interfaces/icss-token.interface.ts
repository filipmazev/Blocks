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
  /** Whether this property belongs to the curated application theme contract. False for palettes, local hooks, effects, and runtime state. */
  readonly themeEditable: boolean;
  /** Distinct compiled declaration values; these are source defaults, not live computed values. Empty when no CSS declaration exists. */
  readonly defaults: readonly string[];
  /** Distinct var() fallback expressions; these are not declarations and do not imply root availability. */
  readonly fallbacks: readonly string[];
  /** Compiled selectors declaring the property; empty for reference-only and registered runtime properties. */
  readonly selectors: readonly string[];
  /** Source paths referencing or declaring the property; `global` denotes the compiled Core styles and catalog theme fixture. */
  readonly sources: readonly string[];
}
