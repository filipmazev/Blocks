/** Ignore absent overrides without discarding meaningful false, zero, or empty values. */
export function definedNavigationConfig<T extends object>(config: T | undefined): Partial<T> {
  return Object.fromEntries(Object.entries(config ?? {}).filter(([, value]) => value !== undefined)) as Partial<T>;
}
