import type { ComponentExample } from '@playground/components/screens/library-components/component-demo/component-catalog';
import type { ComponentPreviewKind } from '@playground/components/screens/library-components/component-demo/types/component-preview.types';

import { COMPONENT_PREVIEW_KINDS } from '@playground/components/screens/library-components/component-demo/constants/component-preview.constants';

/**
 * Resolve the non-interactive vignette shown on a catalog card.
 * @param entry - Catalog entry whose identifier selects the vignette.
 */
export function componentPreviewKind(entry: ComponentExample): ComponentPreviewKind {
  return COMPONENT_PREVIEW_KINDS[entry.id] ?? 'surface';
}
