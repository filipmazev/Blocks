import type { GlassQuality } from '@effects/runtime/types/runtime.types';

import type { ISurfaceOptions } from './isurface-options.interface';
/**
 * Describes the appearance configuration contract.
 */
export interface IAppearanceConfiguration extends Omit<ISurfaceOptions, 'interactive' | 'emission' | 'focusEmission'> {
  /** Shared rendering budget. Omitted values inherit the root attribute; 'baseline' temporarily sets glassiness to 'off', preserving the requested policy. */
  quality?: GlassQuality;
}
