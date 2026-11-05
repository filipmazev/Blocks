import type { ILighting } from './ilighting.interface';
/**
 * Describes the surface hooks contract.
 */
export interface ISurfaceHooks {
  /** Optional element used for hit testing when the painted surface differs from its interactive target. */
  hitTarget?: HTMLElement;
  /** Applies the resolved scene illumination to this surface. */
  light(value: ILighting): void;
  /** Returns whether the surface currently responds to pointer and keyboard interaction. */
  interactive(): boolean;
  /** Returns an optional semantic color emitted during interaction. */
  emission?(): string | undefined;
  /** Resolve source-local CSS colors before projecting them into another element's variable scope. */
  resolveEmission?(color: string): string;
  /** Returns an optional semantic color emitted while the surface is focused. */
  focusEmission?(): string | undefined;
  /** Updates whether the surface emits light, optionally selecting its emission color. */
  emit?(active: boolean, color?: string): void;
  /** Starts the pressed-state deformation for this surface. */
  press(): void;
  /** Releases the pressed-state deformation for this surface. */
  release(): void;
  /** Synchronizes surface state from its current DOM attributes and configuration. */
  sync(): void;
  /** Notifies the surface when it enters or leaves the visible rendering area. */
  visibility?(visible: boolean): void;
}
