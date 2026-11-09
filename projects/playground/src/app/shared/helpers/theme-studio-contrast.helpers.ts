import { formatCatalogColor } from '@playground/components/screens/token-catalog/helpers/token-color.helpers';

/** Compute sRGB contrast for resolved theme roles; alpha foregrounds are composited over the background.
 * @param foreground - Browser-supported color for the text role.
 * @param background - Opaque background role; transparent backgrounds cannot certify a combination.
 * @param context - Reusable one-pixel canvas for CSS color resolution.
 * @returns Contrast ratio, or zero if either color is unresolved or the background is translucent.
 */
export function studioColorContrast(foreground: string, background: string, context: CanvasRenderingContext2D): number {
  const fg = formatCatalogColor(foreground, context)?.hex;
  const bg = formatCatalogColor(background, context)?.hex;

  if (!fg || !bg || (bg.length === 9 && !bg.endsWith('ff'))) return 0;

  return studioHexContrast(fg, bg);
}

/** Measure sRGB contrast for serialized colors, compositing foreground alpha over an opaque background.
 * @param fg - Six- or eight-digit foreground hex.
 * @param bg - Six-digit opaque background hex.
 * @returns Relative luminance contrast ratio.
 */
export function studioHexContrast(fg: string, bg: string): number {
  const alpha = fg.length === 9 ? parseInt(fg.slice(7), 16) / 255 : 1;
  const channels = (hex: string) => [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16) / 255);
  const base = channels(bg);
  const ink = channels(fg).map((value, index) => value * alpha + base[index] * (1 - alpha));
  const luminance = (rgb: readonly number[]) =>
    rgb
      .map((value) => (value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4))
      .reduce((sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index], 0);
  const first = luminance(ink);
  const second = luminance(base);

  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
}
