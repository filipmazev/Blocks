import type { MotionResult } from '@effects/runtime/types';
/**
 * Describes the glass transition contract.
 */
export interface IGlassTransition {
  /** Runs the entrance transition and resolves with its completion result. */
  enter(): Promise<MotionResult>;
  /** Runs the exit transition and resolves with its completion result. */
  exit(): Promise<MotionResult>;
  /** Recomputes the instance from the current DOM and shared configuration. */
  refresh(): void;
  /** Releases observers, listeners and rendering resources owned by this instance. */
  destroy(): void;
}
