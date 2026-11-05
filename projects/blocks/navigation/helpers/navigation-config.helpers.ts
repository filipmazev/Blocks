/**
 * Ignore absent overrides without discarding meaningful false, zero, or empty values.
 *
 * @param config - Partial navigation configuration to copy without undefined entries.
 * @typeParam T - Partial navigation configuration type preserved while undefined entries are removed.
 */
export function definedNavigationConfig<T extends object>(config: T | undefined): Partial<T> {
  return Object.fromEntries(Object.entries(config ?? {}).filter(([, value]) => value !== undefined)) as Partial<T>;
}
