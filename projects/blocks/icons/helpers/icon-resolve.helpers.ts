import { LUCIDE_ICON_LOADERS } from '@icons/constants/lucide/icon-loader.constants';
import { IIconDefinition } from '@icons/interfaces/icon-definition.interface';

/**
 * Load a registered Lucide icon definition on demand, returning null for an unknown name.
 *
 * @param name - Registered Lucide icon name to load.
 */
export async function loadIcon(name: string): Promise<IIconDefinition | null> {
  return LUCIDE_ICON_LOADERS[name as keyof typeof LUCIDE_ICON_LOADERS]?.() ?? null;
}
