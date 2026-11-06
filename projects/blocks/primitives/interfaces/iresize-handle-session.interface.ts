import type { ResizeHandleSource } from '@primitives/types/resize-handle.types';

/** Internal active resize gesture and reversible document interaction styles. */
export interface IResizeHandleSession {
  /** Gesture source. */
  source: ResizeHandleSource;
  /** Rendered size to restore when canceled. */
  initialValue: number;
  /** Pointer coordinate on the active axis at gesture start. */
  position: number;
  /** Captured pointer identity, absent for keyboard gestures. */
  pointerId?: number;
  /** Original inline document selection style. */
  userSelect: string;
  /** Priority of the original inline selection style. */
  userSelectPriority: string;
  /** Original inline document cursor. */
  cursor: string;
  /** Priority of the original inline cursor. */
  cursorPriority: string;
}
