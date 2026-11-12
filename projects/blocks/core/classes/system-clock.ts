import type { IClock } from '@core/interfaces/iclock.interface';

/**
 * Default clock backed by the runtime's wall clock.
 *
 * Date and time controls inject `BX_CLOCK` rather than calling `new Date()` so applications can supply a deterministic clock.
 */
export class SystemClock implements IClock {
  /**
   * Return the current system instant.
   */
  public now(): Date {
    return new Date();
  }
}
