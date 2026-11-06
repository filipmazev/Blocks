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
export * from '@core/constants/token-catalog.constants';
export * from '@core/interfaces/icss-token.interface';
export * from '@core/types/token-catalog.types';

export * from '@core/types/core.types';
export * from '@core/types/tokens.types';

export * from '@core/helpers/core-functions.helpers';
export * from '@core/helpers/overlay-origin.helpers';
export * from '@core/helpers/overlay-theme.helpers';
export * from '@core/helpers/resolve-text.helpers';
export * from '@core/helpers/theme-functions.helpers';
export * from '@core/helpers/token-functions.helpers';
export * from '@core/helpers/uuid.helpers';
export * from '@core/tokens/bx-i18n.token';
export * from '@core/types/appearance.types';

export * from '@core/helpers/overlay-origin-visibility.helpers';
export * from '@core/interfaces/ioverlay-origin-options.interface';
export * from '@core/types/overlay-origin.types';

export * from '@core/interfaces/ios-shortcut.interface';
export * from '@core/interfaces/ishortcut-match-options.interface';
export type { ShortcutPlatform } from '@core/types/shortcut.types';

export * from '@core/constants/theme-palettes.constants';
export * from '@core/interfaces/itheming-service-palettes-state.interface';

export * from '@core/helpers/scroll-container.helpers';
export * from '@core/helpers/scroll-boundary.helpers';
export * from '@core/interfaces/iscroll-boundary.interface';
