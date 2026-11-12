/** Quiet interval in milliseconds after the final native wheel event before snapping to an enabled option. */
export const TIME_WHEEL_IDLE_MS: number = 80;
/** Bounded release projection in seconds; faster recent movement travels farther before settling. */
export const TIME_WHEEL_PROJECTION_SECONDS: number = 0.24;
/** Maximum additional rows projected on release, independent of the number of pointer or wheel samples. */
export const TIME_WHEEL_MAX_PROJECTED_ROWS: number = 12;
