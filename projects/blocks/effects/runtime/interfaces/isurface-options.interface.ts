import type { GlassinessMode } from '@effects/runtime/refraction/types/refraction.types';
import type { GlassQuality } from '@effects/runtime/types';
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
  /** Override the default theme accent/error color emitted on interaction or an active ARIA state. */
  emission?: string;
  /** Override illumination for any focus. Omitted: editable fields illuminate on focus; actions illuminate only on keyboard focus. */
  focusEmission?: string;
  /** Whether motion should be reduced; omission follows the owning accessibility policy. Optional. */
  reducedMotion?: boolean;
  /** Whether opaque presentation is requested; omission follows the owning appearance policy. Optional. */
  reducedTransparency?: boolean;
}
