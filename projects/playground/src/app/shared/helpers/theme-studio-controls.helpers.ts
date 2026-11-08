import type { IThemeStudioLength } from '@playground/interfaces/itheme-studio-length.interface';

/** Read a validated length for the numeric and range controls.
 * @param value - Effective or currently edited literal length.
 */
export function parseStudioLength(value: string): IThemeStudioLength | null {
  const match = /^(\d*\.?\d+)(px|rem|em)?$/.exec(value);

  if (!match) return null;

  return { amount: Number(match[1]), unit: (match[2] ?? 'px') as IThemeStudioLength['unit'] };
}
