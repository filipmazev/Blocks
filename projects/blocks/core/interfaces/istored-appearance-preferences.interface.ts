/** Untrusted persisted preferences, including names used by older releases. */
export interface IStoredAppearancePreferences {
  translucency?: unknown;
  glassiness?: unknown;
  /** Optional requested policy retained while baseline forces the effective glassiness off. Older entries fall back to glassiness. */
  preferredGlassiness?: unknown;
  tint?: unknown;
  material?: unknown;
  quality?: unknown;
  reducedTransparency?: unknown;
}
