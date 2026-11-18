import { THEME_NAME_MAX_LENGTH } from '@playground/shared/constants/theme-storage.constants';

/** Trim a theme name and collapse repeated whitespace before validation or persistence.
 * @param raw - Untrusted user input.
 * @returns The trimmed name; empty or whitespace-only input yields an empty string.
 */
export function normalizeThemeName(raw: string): string {
  return raw.trim().replace(/\s+/g, ' ');
}

/** Validate a theme name without mutating it.
 * @param raw - Untrusted user input.
 * @returns True when the trimmed name is non-empty and within the length limit.
 */
export function isValidThemeName(raw: string): boolean {
  const name = normalizeThemeName(raw);

  return name.length > 0 && name.length <= THEME_NAME_MAX_LENGTH;
}

/** Produce a safe download filename from a theme name.
 * @param name - Saved theme display name.
 * @returns A filename-safe slug, falling back to `theme` when nothing remains.
 */
export function sanitizeThemeFilename(name: string): string {
  return (
    normalizeThemeName(name)
      .replace(/[^a-z0-9._-]+/gi, '-')
      .replace(/^-+|-+$/g, '') || 'theme'
  );
}
