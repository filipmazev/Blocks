/*
 * Public API Surface of core
 */

export * from '@core/services/bx-a11y.service';
export * from '@core/services/bx-overlay-position.service';
export * from '@core/services/bx-shortcut.service';
export * from '@core/services/device-type.service';
export * from '@core/services/scroll-lock.service';
export * from '@core/services/theming.service';
export * from '@core/services/window-dimension.service';

export * from '@core/classes/bx-base-control';

export * from '@core/enums/desktop-os.enum';
export * from '@core/enums/mobile-os.enum';

export * from '@core/interfaces/ibx-custom-validators.interface';
export * from '@core/interfaces/ibx-i18n-adapter.interface';
export * from '@core/interfaces/idevice-state.interface';
export * from '@core/interfaces/iscroll-lock-config.interface';
export * from '@core/interfaces/iwindow-dimensions.interface';

export * from '@core/constants/numeric.constants';
export * from '@core/constants/scroll-lock.constants';
export * from '@core/constants/tokens.constants';
export * from '@core/constants/window-dimension.constants';

export * from '@core/types/core.types';
export * from '@core/types/theme.types';
export * from '@core/types/tokens.types';

export * from '@core/helpers/core-functions';
export * from '@core/helpers/overlay-origin';
export * from '@core/helpers/overlay-theme';
export * from '@core/helpers/resolve-text.helpers';
export * from '@core/helpers/theme-functions';
export * from '@core/helpers/token-functions';
export * from '@core/helpers/uui4';
export * from '@core/tokens/bx-i18n.token';
export * from '@core/types/appearance.types';

export * from '@core/helpers/overlay-origin-visibility.helpers';
export * from '@core/interfaces/ioverlay-origin-options.interface';
export * from '@core/types/overlay-origin.types';

export * from '@core/interfaces/ios-shortcut.interface';
export * from '@core/interfaces/ishortcut-match-options.interface';
export type { ShortcutPlatform } from '@core/types/shortcut.types';
