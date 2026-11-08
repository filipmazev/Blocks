import type { IThemeStudioShadow } from '@playground/interfaces/itheme-studio-shadow.interface';

/** Read the first shadow layer while leaving any unedited imported layers intact in the document.
 * @param value - Valid CSS box-shadow literal.
 * @param rootSize - Root font size in pixels for rem/em input.
 */
export function readStudioShadow(value: string, rootSize: number): IThemeStudioShadow | null {
  if (value.trim().toLowerCase() === 'none') return { x: 0, y: 0, blur: 0, spread: 0, color: 'transparent', opacity: 0 };

  const first = value.split(/,(?![^()]*\))/)[0].trim();
  const match = /^(?:inset\s+)?(.+?)\s+(#[\da-f]+|rgba?\([^()]+\)|hsla?\([^()]+\)|black|white|transparent)$/i.exec(first);

  if (!match) return null;

  const lengths = match[1].split(/\s+/).map((text) => parseFloat(text) * (/r?em$/.test(text) ? rootSize : 1));

  return { x: lengths[0] ?? 0, y: lengths[1] ?? 0, blur: lengths[2] ?? 0, spread: lengths[3] ?? 0, color: match[2], opacity: 100 };
}

/** Serialize the structured shadow through the same literal grammar as preview and export.
 * @param shadow - Bounded offsets, blur, spread, sRGB color and percent opacity.
 */
export function writeStudioShadow(shadow: IThemeStudioShadow): string {
  const alpha = Math.round((shadow.opacity / 100) * 255)
    .toString(16)
    .padStart(2, '0');

  return `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color.slice(0, 7)}${alpha}`;
}
