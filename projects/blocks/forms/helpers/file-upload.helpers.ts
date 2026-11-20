import { FILE_UPLOAD_ACCEPTED_TYPES } from '@forms/constants/file-upload.constants';
import { IFileUploadSelection } from '@forms/interfaces/ifile-upload-selection.interface';

/**
 * Resolves the accepted type list shared by the native picker and dropped files.
 * @param selection - Optional accepted type overrides and additions.
 */
export function resolveFileUploadTypes(selection: IFileUploadSelection): readonly string[] {
  const types = selection.acceptedTypes ?? FILE_UPLOAD_ACCEPTED_TYPES;

  return types.length ? [...new Set([...types, ...(selection.additionalTypes ?? [])].map((type) => type.trim().toLowerCase()).filter(Boolean))] : [];
}

/**
 * Returns whether a file matches the native picker type rules.
 * @param file - Candidate browser file.
 * @param types - Normalized MIME types, MIME wildcards or dot-prefixed extensions. An empty list allows any file.
 */
export function acceptsUploadType(file: File, types: readonly string[]): boolean {
  const name = file.name.toLowerCase();
  const mime = file.type.toLowerCase();

  return (
    !types.length ||
    types.some((type) => {
      if (type.startsWith('.')) return name.endsWith(type);

      if (type.endsWith('/*')) return mime.startsWith(type.slice(0, -1));

      return mime === type;
    })
  );
}

/**
 * Resolves the maximum accepted files in one batch.
 * @param selection - Optional multiple mode and a count limit; single-file mode caps the limit at one.
 */
export function resolveFileUploadCount(selection: IFileUploadSelection): number {
  const limit = selection.maxFiles ?? Infinity;
  const count = Number.isNaN(limit) ? Infinity : Math.max(0, Math.floor(limit));

  return selection.multiple ? count : Math.min(count, 1);
}
