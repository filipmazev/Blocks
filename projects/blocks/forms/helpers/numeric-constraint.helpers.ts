/**
 * Accept signal-form constraint metadata without narrowing string-valued field bindings.
 *
 * @param value - Optional native numeric constraint to coerce; absent/non-finite values remain undefined.
 */
export function numericConstraint(value: string | number | undefined): number | undefined {
  if (value === undefined || value === '') return undefined;

  const parsed = Number(value);

  return Number.isFinite(parsed) ? parsed : undefined;
}
