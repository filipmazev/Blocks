/** IndexedDB database name used for locally persisted custom themes. */
export const THEME_STORAGE_DB_NAME = 'blocks-theme-studio';

/** IndexedDB object store name holding the saved-theme records. */
export const THEME_STORAGE_STORE = 'themes';

/** IndexedDB database version; increment to run migrations in the upgrade handler. */
export const THEME_STORAGE_VERSION = 1;

/** Persisted record schema version, independent of the IndexedDB version. */
export const SAVED_THEME_SCHEMA_VERSION = 1;

/** Maximum number of locally saved custom themes per browser storage profile. */
export const SAVED_THEME_LIMIT = 5;

/** Maximum allowed length of a saved-theme name. */
export const THEME_NAME_MAX_LENGTH = 25;

/** Stable custom-theme selection; built-in palette storage remains owned by ThemingService. */
export const SELECTED_SAVED_THEME_KEY = 'blocks-selected-saved-theme';

/** Brief saved-theme download feedback interval, in milliseconds. */
export const SAVED_THEME_DOWNLOAD_DELAY_MS = 250;
