/** Untrusted persisted preferences, including names used by older releases. */
export interface IStoredAppearancePreferences {
  /** Persisted translucency value before validation against the supported appearance settings. Optional. */
  translucency?: unknown;
  /** Persisted glassiness value before validation against the supported appearance settings. Optional. */
  glassiness?: unknown;
  /** Optional requested policy retained while baseline forces the effective glassiness off. Older entries fall back to glassiness. */
  preferredGlassiness?: unknown;
  /** Persisted tint value before validation against the supported appearance settings. Optional. */
  tint?: unknown;
  /** Persisted material value before validation against the supported appearance settings. Optional. */
  material?: unknown;
  /** Persisted quality value before validation against the supported appearance settings. Optional. */
  quality?: unknown;
  /** Whether opaque presentation is requested; omission follows the owning appearance policy. Optional. */
  reducedTransparency?: unknown;
}
