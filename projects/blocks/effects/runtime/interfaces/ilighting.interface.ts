import type { ILightContribution } from './ilight-contribution.interface';
/**
 * Describes the lighting contract.
 */
export interface ILighting {
  /** First paint and viewport re-entry already have a current sample and must not fade in. */
  immediate?: boolean;
  /** Horizontal coordinate in the owning coordinate system, in CSS pixels. */
  x: number;
  /** Vertical coordinate in the owning coordinate system, in CSS pixels. */
  y: number;
  /** Strength of the light contribution. */
  strength: number;
  /** CSS color or supported semantic color token used for this item. */
  color: string;
  /** Resolved CSS color for illumination along the surface rim. */
  rim: string;
  /** Individual light contributions combined to render the surface. */
  contributions: ILightContribution[];
  /** Resolved CSS color for reflected illumination. */
  reflection: string;
  /** Strength of reflected illumination. */
  reflectionStrength: number;
  /** Horizontal coordinate of the reflected illumination. */
  reflectionX: number;
  /** Vertical coordinate of the reflected illumination. */
  reflectionY: number;
}
