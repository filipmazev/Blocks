import type { ResizeHandleSource } from '@primitives/types/resize-handle.types';

/** Start/completion information for an owner-controlled size adjustment. */
export interface IResizeHandleEvent {
  /** Current bounded size in CSS pixels. */
  value: number;
  /** Rendered size at the start of this gesture, in CSS pixels. */
  initialValue: number;
  /** Pointer or keyboard interaction producing the event. */
  source: ResizeHandleSource;
  /** Whether Escape, pointer cancellation, lost focus/capture, disabling, or changing edges canceled this gesture. Destruction emits no completion. */
  canceled: boolean;
}
