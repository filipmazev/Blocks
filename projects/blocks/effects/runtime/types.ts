export type GlassQuality = 'auto' | 'baseline' | 'enhanced';

export interface SurfaceOptions {
  /** 0–1 glassiness; omitted values inherit the application's balanced default. */
  glassiness?: number;
  /** Override automatic action/control detection for interaction lighting and press deformation. */
  interactive?: boolean;
  /** Override the default theme accent/error color emitted on interaction or an active ARIA state. */
  emission?: string;
  /** Override illumination for any focus. Omitted: editable fields illuminate on focus; actions illuminate only on keyboard focus. */
  focusEmission?: string;
  reducedMotion?: boolean;
  reducedTransparency?: boolean;
}
export interface AppearanceConfiguration extends Omit<SurfaceOptions, 'interactive' | 'emission' | 'focusEmission'> {
  quality?: GlassQuality;
}
export interface AppearanceConfigurationController {
  /** Merge a partial application-wide configuration. */
  update(options: AppearanceConfiguration): void;
  destroy(): void;
}
export interface GlassSurface {
  update(options: SurfaceOptions): void;
  destroy(): void;
}
export type MotionResult = 'finished' | 'cancelled';
export interface GlassTransitionOptions {
  reducedMotion?: boolean;
  /** Called on each fade frame; avoid synchronous layout writes here. */
  onUpdate?: () => void;
}
export interface GlassTransition {
  enter(): Promise<MotionResult>;
  exit(): Promise<MotionResult>;
  refresh(): void;
  destroy(): void;
}
/** @deprecated Use GlassTransitionOptions. */
export type LiquidTransitionOptions = GlassTransitionOptions;
/** @deprecated Use GlassTransition. */
export type LiquidTransition = GlassTransition;

/** A light in viewport CSS pixels. An element supplies its live center when present. */
export interface GlassLight {
  element?: HTMLElement;
  /** Emit from the element's lower border instead of a single point. */
  edge?: 'bottom';
  /** Source position within the element, from 0 to 1. Defaults to its center. */
  offsetX?: number;
  offsetY?: number;
  /** Illuminate neighboring surfaces; the emitter can render its own light separately. */
  excludeSource?: boolean;
  /** Exclude a containing surface when the light is anchored to one of its children. */
  excludeElement?: HTMLElement;
  x?: number;
  y?: number;
  /** Height above the glass plane in CSS pixels. Defaults to 180. */
  z?: number;
  color?: string;
  intensity?: number;
  /** Falloff radius in CSS pixels. Defaults to 640. */
  radius?: number;
}
/** An inexpensive colored reflection proxy for a foreground or background object. */
export interface GlassReflector {
  element: HTMLElement;
  /** Defaults to the element's computed background color. */
  color?: string;
  intensity?: number;
  /** Signed depth relative to the glass plane. Defaults to 80. */
  depth?: number;
}
export interface GlassSceneOptions {
  /** Reuse receiver measurements for frequent light-only updates. refresh() still invalidates them. */
  reuseGeometry?: boolean;
  /** At most four lights and four reflectors are evaluated per scene. */
  lights?: readonly GlassLight[];
  reflectors?: readonly GlassReflector[];
}
export interface GlassScene {
  update(options: GlassSceneOptions): void;
  /** Call after moving a registered light/reflector without scrolling or resizing. */
  refresh(): void;
  destroy(): void;
}
