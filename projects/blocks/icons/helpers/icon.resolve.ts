import { IconDefinition } from '../interfaces/icon-definition.interface';
import { LUCIDE_ICON_LOADERS } from '../assets/lucide/icon-loader';

export async function loadIcon(name: string): Promise<IconDefinition | null> {
  return LUCIDE_ICON_LOADERS[name as keyof typeof LUCIDE_ICON_LOADERS]?.() ?? null;
}
