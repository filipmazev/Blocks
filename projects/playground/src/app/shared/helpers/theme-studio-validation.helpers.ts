import type { IThemeStudioDocument } from '@playground/interfaces/itheme-studio-document.interface';

import { THEME_PALETTE_IDS } from '@filip.mazev/blocks/core';

import { STUDIO_BORDER_STYLES, STUDIO_CONTROLS } from '@playground/shared/constants/theme-studio.constants';

/** Validate a literal color without accepting references, expressions or declarations.
 * @param value - Trimmed CSS color literal.
 */
export function isStudioColor(value: string): boolean {
  if (/^#[\da-f]{3,4}$|^#[\da-f]{6}$|^#[\da-f]{8}$/i.test(value) || /^(black|white|transparent)$/i.test(value)) return true;

  const match = /^(rgb|rgba|hsl|hsla)\(([^()]+)\)$/i.exec(value);

  if (!match) return false;

  const body = match[2].trim();
  const legacy = body.includes(',');
  const sections = body.split('/');
  const parts = legacy ? body.split(/\s*,\s*/) : [...sections[0].trim().split(/\s+/), ...(sections.length === 2 ? [sections[1].trim()] : [])];

  if ((legacy && body.includes('/')) || sections.length > 2 || (!legacy && sections[0].trim().split(/\s+/).length !== 3)) return false;

  if (match[1].startsWith('hsl') && parts[0].endsWith('%')) return false;

  if (legacy && match[1].startsWith('rgb') && parts.slice(0, 3).some((part) => part.endsWith('%') !== parts[0].endsWith('%'))) return false;

  if (parts.length < 3 || parts.length > 4 || parts.some((part) => !/^\d*\.?\d+%?$/.test(part))) return false;

  return parts.every((part, index) => {
    const number = parseFloat(part);
    const percent = part.endsWith('%');
    const max = index === 3 ? (percent ? 100 : 1) : match[1].startsWith('hsl') ? (index === 0 ? 360 : 100) : percent ? 100 : 255;

    return Number.isFinite(number) && number <= max && (!match[1].startsWith('hsl') || index === 0 || index === 3 || percent);
  });
}

/** Check a bounded literal length.
 * @param value - Length text; unitless zero is supported.
 * @param maxPixels - Absolute px limit.
 * @param maxRelative - rem/em limit.
 * @param signed - Whether negative offsets are permitted; defaults to false.
 */
export function isStudioLength(value: string, maxPixels: number, maxRelative: number, signed = false): boolean {
  const match = /^(-?\d*\.?\d+)(px|rem|em)?$/.exec(value);

  if (!match) return false;

  const number = Number(match[1]);

  return (
    Number.isFinite(number) &&
    (signed || number >= 0) &&
    (match[2] !== undefined || number === 0) &&
    Math.abs(number) <= (match[2] === 'px' ? maxPixels : maxRelative)
  );
}

/** Normalize and validate one allowlisted theme value. Empty text is invalid; reset is a separate action.
 * @param name - Generated theme token name.
 * @param raw - User text, retained separately on validation failure.
 * @returns Normalized value, or null when unsupported.
 */
export function normalizeStudioValue(name: string, raw: string): string | null {
  const control = STUDIO_CONTROLS.find((entry) => entry.name === name);
  const value = raw.trim().toLowerCase().replace(/\s+/g, ' ');

  if (!control || !value || value.length > 600 || /[;{}\\]|\/\*|var\(|calc\(|url\(/.test(value)) return null;

  if (control.family === 'Colors') return isStudioColor(value) ? value : null;

  if (name === '--bx-border-style') return STUDIO_BORDER_STYLES.includes(value) ? value : null;

  if (control.family === 'Shadows') {
    if (value === 'none') return '0 0 0 0 transparent';

    const shadows = value.split(/,(?![^()]*\))/);

    if (shadows.length > 4) return null;

    const valid = shadows.every((shadow) => {
      const match = /^(inset\s+)?(.+?)\s+(#[\da-f]+|rgba?\([^()]+\)|hsla?\([^()]+\)|black|white|transparent)$/.exec(shadow.trim());

      if (!match || !isStudioColor(match[3])) return false;

      const lengths = match[2].split(/\s+/);

      return lengths.length >= 2 && lengths.length <= 4 && lengths.every((length, index) => isStudioLength(length, 128, 8, index !== 2));
    });

    return valid ? value : null;
  }

  return isStudioLength(value, control.family === 'Borders' ? 8 : 128, control.family === 'Borders' ? 0.5 : 8) ? value : null;
}

/** Validate a whole versioned document before export or restoration.
 * @param value - Untrusted document candidate.
 */
export function isStudioDocument(value: unknown): value is IThemeStudioDocument {
  if (!value || typeof value !== 'object') return false;

  const record = value as Record<string, unknown>;

  if (record['version'] !== 1 || !THEME_PALETTE_IDS.some((id) => id === record['palette'])) return false;

  return ['shared', 'light', 'dark'].every((mode) => {
    const entries = record[mode];

    if (!entries || typeof entries !== 'object' || Array.isArray(entries)) return false;

    return Object.entries(entries).every(([name, text]) => {
      const control = STUDIO_CONTROLS.find((entry) => entry.name === name);

      return (
        !!control &&
        (mode === 'shared' ? control.family !== 'Colors' : control.family === 'Colors') &&
        typeof text === 'string' &&
        normalizeStudioValue(name, text) !== null
      );
    });
  });
}
