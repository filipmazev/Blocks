/** Form state that suppresses interactive glass lighting and press effects while preserving focus styling. */
export const NONINTERACTIVE_SURFACE_SELECTOR =
  ':disabled, [aria-disabled="true"], .is-disabled, [inert], [readonly], [aria-readonly="true"], .bx-readonly, .is-readonly';

/** Expansion is a persistent visual state for popup triggers, rather than ordinary layout disclosure controls. */
export const ACTIVE_SURFACE_STATE_SELECTOR =
  ':checked, [aria-checked="true"], [aria-pressed="true"], [aria-selected="true"], [aria-expanded="true"][aria-haspopup]:not([aria-haspopup="false"]), [aria-current]:not([aria-current="false"]):not([aria-current=""])';

/** Editable controls retain focus illumination after pointer focus; actions use keyboard focus illumination. */
export const FIELD_SURFACE_SELECTOR =
  'input:not([type="hidden"], [type="button"], [type="submit"], [type="reset"], [type="checkbox"], [type="radio"]), select, textarea, [role="textbox"], [role="searchbox"], [role="combobox"], [role="spinbutton"], [role="slider"]';
