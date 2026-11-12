/**
 * Structural view of the runtime locale week information.
 *
 * The ECMAScript `WeekInfo` type shipped with some TypeScript versions omits `minimalDays`, so date features read it through this explicit shape.
 */
export interface IWeekInfoSource {
  /** Legacy accessor exposing the locale's week information. */
  readonly weekInfo?: { firstDay?: number; minimalDays?: number };
  /** Current accessor exposing the locale's week information. */
  readonly getWeekInfo?: () => { firstDay?: number; minimalDays?: number };
}
