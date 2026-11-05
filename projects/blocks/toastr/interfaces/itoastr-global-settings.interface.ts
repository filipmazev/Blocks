import type { ThemedColor } from '@filip.mazev/blocks/core';
import type { GlassinessMode, GlassQuality } from '@filip.mazev/blocks/effects/runtime';
import type { ToastPosition } from '@toastr/types/toastr.types';

/** Shared toast defaults. update() merges a partial value and per-toast configuration takes precedence. */
export interface IToastrGlobalSettings {
  /** Screen placement; defaults to top-right. */
  position: ToastPosition;
  /** Entrance/exit animation preference; defaults to true and respects reduced motion. */
  animate: boolean;
  /** Optional custom wrapper class; no class override by default. */
  wrapperClass: string;
  /** Lifetime in milliseconds; defaults to 5000. */
  durationInMs: number;
  /** Swipe dismissal; defaults to true. */
  swipeToDismiss: boolean;
  /** Maximum simultaneously open toasts across positions; defaults to 4. */
  maxOpened: number;
  /** Selected toast glassiness policy; defaults to auto on supported browsers. */
  glassiness: GlassinessMode;
  /** Toast material detail; defaults to enhanced, subject to the application's baseline/device policy. */
  glassQuality: GlassQuality;
  /** Close action visibility; defaults to true. */
  showCloseButton: boolean;
  /** Semantic close action color; defaults to text-primary. */
  closeButtonColor: ThemedColor;
  /** Progress visibility; defaults to true. */
  showProgressBar: boolean;
  /** Semantic progress color; defaults to text-primary. */
  progressBarColor: ThemedColor;
}
