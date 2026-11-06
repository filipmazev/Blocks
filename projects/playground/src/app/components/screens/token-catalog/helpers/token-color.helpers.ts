import type { ITokenCatalogColor } from '@playground/components/screens/token-catalog/interfaces/itoken-catalog-color.interface';

/**
 * Converts a browser-resolved CSS color to copyable sRGB formats, retaining transparency.
 *
 * @param value - Computed color value with custom-property references already resolved.
 * @param context - Reusable one-pixel sRGB canvas used to convert CSS colors, including color-mix and wide-gamut values.
 * @returns Formatted values, or undefined if the browser cannot parse the color.
 */
export function formatCatalogColor(value: string, context: CanvasRenderingContext2D): ITokenCatalogColor | undefined {
  context.fillStyle = '#010203';
  context.fillStyle = value;

  const first = context.fillStyle;

  context.fillStyle = '#030201';
  context.fillStyle = value;

  if (context.fillStyle !== first) return undefined;

  context.clearRect(0, 0, 1, 1);
  context.fillRect(0, 0, 1, 1);

  const bytes = context.getImageData(0, 0, 1, 1).data;
  const serialized = String(context.fillStyle);
  const channels = serialized.startsWith('rgba(') ? serialized.match(/[\d.]+/g)?.map(Number) : undefined;
  const slashAlpha = serialized.match(/\/\s*([\d.]+)(%)?\s*\)$/);
  const alpha = channels?.[3] ?? (slashAlpha ? Number(slashAlpha[1]) / (slashAlpha[2] ? 100 : 1) : bytes[3] / 255);
  const roundedAlpha = Math.round(alpha * 10000) / 10000;
  const rgb = channels ? channels.slice(0, 3).map(Math.round) : [bytes[0], bytes[1], bytes[2]];
  const hex = [...rgb, ...(roundedAlpha < 1 ? [Math.round(roundedAlpha * 255)] : [])].map((channel) => channel.toString(16).padStart(2, '0')).join('');

  return {
    hex: `#${hex}`,
    rgb: roundedAlpha < 1 ? `rgba(${rgb.join(', ')}, ${roundedAlpha})` : `rgb(${rgb.join(', ')})`,
    rgba: `rgba(${rgb.join(', ')}, ${roundedAlpha})`
  };
}
