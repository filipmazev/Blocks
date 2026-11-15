import { signal } from '@angular/core';

import type { BxA11yService } from '@filip.mazev/blocks/core';

/** Local motion preference for catalog stills; avoids creating a service that changes the document's accessibility settings. */
export const COMPONENT_PREVIEW_A11Y: Pick<BxA11yService, 'isReducedMotion'> = { isReducedMotion: signal(true).asReadonly() };
