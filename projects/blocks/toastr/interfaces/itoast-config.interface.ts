import { ThemedColor } from '@filip.mazev/blocks/core';
import { ToastPosition } from '../types/toastr.types';
import type { GlassinessMode, GlassQuality } from '@filip.mazev/blocks/effects/runtime';

/** Toast presentation and lifetime. D is the application-owned data passed to the mounted toast component. */
export interface IToastConfig<D = unknown> {
  /** Optional glassiness policy; defaults to the global toast setting ('auto'). Respects application browser and accessibility policies. */
  glassiness?: GlassinessMode;
  /** Optional material quality; defaults to the global toast setting ('enhanced'). Application baseline still wins. */
  glassQuality?: GlassQuality;
  /** Optional component data; omitted when the component needs no input data. */
  data?: D;
  /** Optional screen placement; defaults to global settings (top-right). */
  position?: ToastPosition;
  /** Optional wrapper class override; uses the default wrapper when absent. */
  wrapperClass?: string;
  /** Optional default backing; defaults to true. False suppresses the added glassiness enhancement. */
  hasDefaultBackground?: boolean;
  /** Optional lifetime in milliseconds; defaults to global settings (5000). */
  durationInMs?: number;
  /** Optional swipe dismissal; defaults to global settings (true). */
  swipeToDismiss?: boolean;
  /** Optional animation preference; defaults to true and never overrides reduced motion. */
  animate?: boolean;

  /** Optional close action visibility; defaults to global settings (true). */
  showCloseButton?: boolean;
  /** Optional semantic close color; defaults to the global setting (text-primary). */
  closeButtonColor?: ThemedColor;

  /** Optional progress visibility; defaults to global settings (true). */
  showProgressBar?: boolean;
  /** Optional progress color; defaults to global settings (text-primary). */
  progressBarColor?: ThemedColor;
}
