import type { IGlassSurface } from '@effects/runtime/types/runtime.types';
import type { SurfaceEmissionPainter } from '@effects/runtime/types/surface-emission.types';

export const mounted = new WeakMap<HTMLElement, IGlassSurface>();
/** Descendant light origins reuse their registered surface's emitter paint without mounting another renderer. */
export const emissionPainters = new WeakMap<HTMLElement, SurfaceEmissionPainter>();
