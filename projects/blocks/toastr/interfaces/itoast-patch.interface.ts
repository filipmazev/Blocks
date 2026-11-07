import type { ThemedColor } from '@filip.mazev/blocks/core';
import type { GlassinessMode, GlassQuality } from '@filip.mazev/blocks/effects/runtime';
import type { ToastDataPatch } from '@toastr/types/toast-patch.types';

/** Supported runtime changes for queued or open notifications. Undefined properties retain their current values.
 * @typeParam D - Application-owned content data. Plain objects merge one level; arrays and other values replace the payload.
 */
export interface IToastPatch<D> {
  /** Update content through the reference's reactive data signal. Null values follow the declared data contract; simple-toast title and icon accept null. */
  data?: ToastDataPatch<D>;
  /** Restart the lifetime in milliseconds; zero disables dismissal. Negative/nonfinite values become zero. Pause state is preserved. */
  durationInMs?: number;
  /** Toggle the built-in dismissal action. */
  showCloseButton?: boolean;
  /** Replace the dismissal action's semantic color; null clears the instance override. */
  closeButtonColor?: ThemedColor | null;
  /** Toggle lifetime progress without restarting the timer. */
  showProgressBar?: boolean;
  /** Replace the lifetime progress color; null clears the instance override. */
  progressBarColor?: ThemedColor | null;
  /** Replace wrapper classes; null restores the default wrapper. */
  wrapperClass?: string | null;
  /** Toggle the default surface backing and glass enhancement. */
  hasDefaultBackground?: boolean;
  /** Update the shared glassiness policy, subject to application and accessibility preferences. */
  glassiness?: GlassinessMode;
  /** Update material quality, subject to the application baseline and device budget. */
  glassQuality?: GlassQuality;
}
