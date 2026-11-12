/** Weekday initials used by the miniature calendar preview, starting on Monday. */
export const COMPONENT_PREVIEW_WEEKDAYS: readonly string[] = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

/** Days rendered by the miniature calendar preview. */
export const COMPONENT_PREVIEW_DAYS: readonly number[] = Array.from({ length: 28 }, (_, index) => index + 1);
