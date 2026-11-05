import { LUCIDE_ICON_LOADERS } from '@icons/assets/lucide/icon-loader';
import { IIconDefinition } from '@icons/interfaces/icon-definition.interface';

export async function loadIcon(name: string): Promise<IIconDefinition | null> {
  return LUCIDE_ICON_LOADERS[name as keyof typeof LUCIDE_ICON_LOADERS]?.() ?? null;
}
