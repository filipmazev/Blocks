import type { IThemeStudioDocument } from '@playground/interfaces/itheme-studio-document.interface';

import { inheritOverlayOwnership } from '@filip.mazev/blocks/core';

import { sanitizeThemeFilename } from '@playground/shared/helpers/theme-name.helpers';
import { exportStudioScss } from '@playground/shared/helpers/theme-studio-export.helpers';

/** Serialize and download a complete theme document as a Studio artifact.
 * @param doc - Owner document for temporary anchor creation and URL lifecycle.
 * @param document - Validated theme document to serialize.
 * @param format - Download format; SCSS for application styles, JSON for portable editing.
 * @param filename - Base name; sanitized and completed with the format extension.
 * @returns True when the download was started; false on unavailable or failed serialization.
 */
export function downloadThemeArtifact(doc: Document, document: IThemeStudioDocument, format: 'scss' | 'json', filename: string): boolean {
  const win = doc.defaultView;

  if (!win) return false;

  try {
    const contents = format === 'scss' ? exportStudioScss(document) : `${JSON.stringify(document, null, 4)}\n`;
    const url = win.URL.createObjectURL(new Blob([contents], { type: format === 'scss' ? 'text/x-scss;charset=utf-8' : 'application/json' }));
    const anchor = doc.createElement('a');
    const origin = doc.activeElement;
    const disconnectOwnership = origin instanceof HTMLElement ? inheritOverlayOwnership(origin, anchor) : undefined;

    try {
      anchor.href = url;
      anchor.download = `blocks-${sanitizeThemeFilename(filename)}.${format}`;
      doc.body.append(anchor);
      anchor.click();

      return true;
    } finally {
      disconnectOwnership?.();
      anchor.remove();
      win.URL.revokeObjectURL(url);
    }
  } catch {
    return false;
  }
}
