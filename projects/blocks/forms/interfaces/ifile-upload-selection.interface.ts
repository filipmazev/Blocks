import type { FileUploadStartMode } from '@forms/types/file-upload.types';

/** File picker and drop validation options shared by the upload view and session. */
export interface IFileUploadSelection {
  /** Allow more than one file in a batch. Defaults to false. */
  readonly multiple?: boolean;
  /** When an accepted selection uploads. Defaults to manual start. */
  readonly startMode?: FileUploadStartMode;
  /** Optional replacement allowlist. Use MIME types, MIME wildcards or dot-prefixed extensions. An empty list allows any type. */
  readonly acceptedTypes?: readonly string[];
  /** Optional additions to the resolved allowlist. An unrestricted allowlist remains unrestricted. */
  readonly additionalTypes?: readonly string[];
  /** Optional maximum size of an individual file in bytes. Defaults to no limit. */
  readonly maxFileSize?: number;
  /** Optional maximum files per batch. Single-file mode caps this at one. Multiple-file mode has no limit by default. */
  readonly maxFiles?: number;
}
