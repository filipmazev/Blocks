import type { GlassinessMode } from '@effects/runtime/types/refraction.types';
import type { GlassQuality } from '@effects/runtime/types/runtime.types';
/**
 * Describes the surface options contract.
 */
export interface ISurfaceOptions {
  /** Optional local renderer quality. The application's baseline policy and accessibility settings still take precedence. */
  quality?: GlassQuality;
  /** 0–1 translucency; omitted values inherit the application's balanced default. */
  translucency?: number;
  /** Explicitly opt this surface into refraction. Omitted surfaces keep their existing material. 'auto' follows browser policy; 'on' allows other engines. */
  glassiness?: GlassinessMode;
  /** Override automatic action/control detection for interaction lighting and press deformation. */
  interactive?: boolean;
  /**
   * Override the default theme accent/error color emitted on interaction or an active ARIA state. Set `false` to disable automatic emission while retaining
   * press feedback and received lighting. An explicit `focusEmission` can still enable focus-only emission. Omission uses the theme accent/error color.
   */
  emission?: string | false;
  /** Optional descendant CSS selector defining the visible light source bounds. Omission or no match uses the entire surface. */
  emissionOrigin?: string;
  /** Local emission multiplier, clamped to 0–2; defaults to 1. Reception and press feedback are independent. */
  emissionStrength?: number;
  /** Override illumination for any focus. Omitted: editable fields illuminate on focus; actions illuminate only on keyboard focus. */
  focusEmission?: string;
  /** Whether motion should be reduced; omission follows the owning accessibility policy. Optional. */
  reducedMotion?: boolean;
  /** Optional opaque presentation request. Defaults to inheritance; false cannot override an owning or operating-system reduced-transparency preference. */
  reducedTransparency?: boolean;
}
