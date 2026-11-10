import type { StudioColorToken, StudioValues } from '@playground/types/theme-studio.types';
import type { StudioHslColor } from '@playground/types/theme-studio-color.types';

import { formatCatalogColor } from '@playground/components/screens/token-catalog/helpers/token-color.helpers';

import { studioHexContrast } from './theme-studio-contrast.helpers';

/** Map an edited semantic color into the opposite palette, preserving hue and alpha while fitting its role's lightness and contrast.
 * @param name - Semantic token being mapped.
 * @param value - Valid source color.
 * @param source - Source palette baseline, without Studio overrides.
 * @param target - Destination palette baseline, without Studio overrides.
 * @param colors - Effective destination colors, including manual overrides.
 * @param context - Reusable browser canvas for resolving CSS color literals.
 * @returns A hex color; unresolved colors leave the destination unchanged.
 */
export function studioOppositeColor(
  name: StudioColorToken,
  value: string,
  source: StudioValues,
  target: StudioValues,
  colors: StudioValues,
  context: CanvasRenderingContext2D
): string | undefined {
  const hex = formatCatalogColor(value, context)?.hex;
  const from = formatCatalogColor(source[name] ?? '', context)?.hex;
  const to = formatCatalogColor(target[name] ?? '', context)?.hex;

  if (!hex || !from || !to) return undefined;

  const [hue, saturation, lightness, alpha] = studioReadHsl(hex);
  const sourceLightness = studioReadHsl(from)[2];
  const targetLightness = studioReadHsl(to)[2];
  const direction = sourceLightness < 0.5 !== targetLightness < 0.5 ? -1 : 1;
  const desired = Math.max(0, Math.min(1, targetLightness + (lightness - sourceLightness) * direction));
  const surfaces: readonly StudioColorToken[] = [
    '--bx-bg-canvas',
    '--bx-bg-surface',
    '--bx-bg-surface-alt',
    '--bx-bg-element',
    '--bx-bg-element-hover',
    '--bx-bg-element-active',
    '--bx-bg-neutral',
    '--bx-bg-neutral-hover',
    '--bx-bg-neutral-active'
  ];
  const neutralSurface = surfaces.includes(name) || name.endsWith('-subtle') || name === '--bx-scroll-bg';
  const brandFill = /^--bx-(primary|accent)(-hover|-active)?$/.test(name);
  const semanticFill = /^--bx-bg-(info|success|warn|danger)(-hover|-active)?$/.test(name);
  const foreground = name.startsWith('--bx-text-') || name.startsWith('--bx-on-');
  const border = name.startsWith('--bx-border-') || name.startsWith('--bx-scroll-thumb');
  const pair = name.startsWith('--bx-on-') ? name.replace('--bx-on-', '--bx-') : `--bx-on-${name.slice(5)}`;
  const references = neutralSurface
    ? ['--bx-text-primary', '--bx-text-secondary']
    : brandFill
      ? [pair]
      : semanticFill
        ? ['--bx-text-inverse']
        : name.startsWith('--bx-on-')
          ? [pair]
          : name === '--bx-text-inverse'
            ? ['--bx-primary', '--bx-accent', '--bx-bg-info', '--bx-bg-success', '--bx-bg-warn', '--bx-bg-danger']
            : foreground || border
              ? surfaces
              : [];

  const canvas = formatCatalogColor(colors['--bx-bg-canvas'] ?? '', context)?.hex ?? '#ffffff';

  const resolved = references
    .map((reference) => formatCatalogColor(colors[reference as StudioColorToken] ?? '', context)?.hex)
    .filter((color): color is string => color !== undefined);

  const minimum = border ? 3 : 4.5;

  const score = (candidate: string): number =>
    Math.min(
      ...resolved.map((reference) =>
        neutralSurface || brandFill || semanticFill
          ? studioHexContrast(reference, studioCompositeColor(candidate, canvas))
          : studioHexContrast(candidate, studioCompositeColor(reference, canvas))
      )
    );

  const initial = studioWriteHsl([hue, saturation, desired, alpha]);

  if (score(initial) >= minimum || (!foreground && !border && !neutralSurface && !brandFill && !semanticFill)) return initial;

  let best = initial;
  let bestScore = score(initial);
  let distance = Infinity;

  for (let step = 0; step <= 100; step++) {
    const candidateLightness = step / 100;
    const candidate = studioWriteHsl([hue, saturation, candidateLightness, alpha]);
    const contrast = score(candidate);
    const delta = Math.abs(candidateLightness - desired);

    if ((contrast >= minimum && delta < distance) || (distance === Infinity && contrast > bestScore)) {
      best = candidate;
      bestScore = contrast;

      if (contrast >= minimum) distance = delta;
    }
  }

  return best;
}

/** Read hue, saturation, lightness and alpha from a serialized sRGB color.
 * @param hex - Six- or eight-digit hex color.
 * @returns Normalized HSL channels and alpha in [0, 1].
 */
export function studioReadHsl(hex: string): StudioHslColor {
  const [red, green, blue] = [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16) / 255);
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const delta = max - min;
  const lightness = (max + min) / 2;
  const hue = delta === 0 ? 0 : max === red ? ((green - blue) / delta + 6) % 6 : max === green ? (blue - red) / delta + 2 : (red - green) / delta + 4;

  return [hue / 6, delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1)), lightness, hex.length === 9 ? parseInt(hex.slice(7), 16) / 255 : 1];
}

/** Serialize normalized HSL channels without changing the requested alpha.
 * @param color - Hue, saturation, lightness and alpha in [0, 1].
 * @returns Six- or eight-digit hex color.
 */
export function studioWriteHsl(color: StudioHslColor): string {
  const [hue, saturation, lightness, alpha] = color;
  const amplitude = saturation * Math.min(lightness, 1 - lightness);
  const channels = [0, 8, 4].map((offset) => {
    const position = (offset + hue * 12) % 12;

    return Math.round((lightness - amplitude * Math.max(-1, Math.min(position - 3, 9 - position, 1))) * 255);
  });

  return `#${[...channels, ...(alpha < 1 ? [Math.round(alpha * 255)] : [])].map((channel) => channel.toString(16).padStart(2, '0')).join('')}`;
}

/** Flatten a translucent destination surface onto its mode's canvas for contrast measurement.
 * @param hex - Six- or eight-digit foreground hex.
 * @param canvas - Opaque canvas color.
 * @returns Opaque six-digit hex color.
 */
export function studioCompositeColor(hex: string, canvas: string): string {
  const alpha = hex.length === 9 ? parseInt(hex.slice(7), 16) / 255 : 1;

  return `#${[1, 3, 5]
    .map((index) => Math.round(parseInt(hex.slice(index, index + 2), 16) * alpha + parseInt(canvas.slice(index, index + 2), 16) * (1 - alpha)))
    .map((channel) => channel.toString(16).padStart(2, '0'))
    .join('')}`;
}
