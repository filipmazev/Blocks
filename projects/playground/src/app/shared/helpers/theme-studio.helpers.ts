import type { ModalService } from '@filip.mazev/blocks/modal';
import type { ThemeStudioService } from '@playground/services/theme-studio.service';

import { ThemeStudioSetup } from '@playground/components/shared/theme-studio-setup/theme-studio-setup';
import { STUDIO_SETUP_HEADERS } from '@playground/shared/constants/theme-studio-setup.constants';
import { StudioMode } from '@playground/types/theme-studio.types';

/** Opens the shared copy/setup wizard from the studio panel and the studio demo page. */
export function openThemeStudioSetup(modalService: ModalService, themeStudioService: ThemeStudioService): void {
  themeStudioService.finishEdit();
  modalService.open<undefined, undefined>(ThemeStudioSetup, {
    header: STUDIO_SETUP_HEADERS.configure,
    style: {
      layout: 'center',
      breakpoints: { sm: 'bottom-sheet' },
      wrapperStyles: 'inline-size: 48rem; max-inline-size: 100%; block-size: min(52rem, 88dvh);'
    }
  });
}

/** Applies a studio mode selection to the shared theming service; `auto` follows the device theme. */
export function applyStudioMode(themeStudioService: ThemeStudioService, value: string | null): void {
  if (value === 'auto') themeStudioService.themingService.setApplicationTheme(null);
  else if (value === 'light' || value === 'dark') themeStudioService.themingService.setApplicationTheme(value as StudioMode);
}
