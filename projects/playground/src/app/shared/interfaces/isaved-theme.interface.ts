import type { IThemeStudioDocument } from './itheme-studio-document.interface';

/** A locally persisted, independently reproducible custom theme snapshot. */
export interface ISavedTheme {
  /** Stable unique identifier, independent of the theme name. */
  readonly id: string;
  /** User-defined display name, trimmed and validated before persistence. */
  readonly name: string;
  /** Complete serializable theme configuration, including light and dark counterparts and shared overrides. */
  readonly document: IThemeStudioDocument;
  /** Creation time as a Unix epoch in milliseconds. */
  readonly createdAt: number;
  /** Last-modified time as a Unix epoch in milliseconds. */
  readonly updatedAt: number;
  /** Persisted schema version for future compatibility and migration. */
  readonly schemaVersion: number;
}
