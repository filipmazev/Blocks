import type { lucideNames } from '@icons/constants/lucide/names.constants';
import type { IIconDefinition } from '@icons/interfaces/iicon-definition.interface';

/** Names of the generated Lucide icon definitions. */
export type LucideName = (typeof lucideNames)[number];

/** Lazy definition loaders keyed by generated Lucide names. */
export type LucideIconLoaders = Record<LucideName, () => Promise<IIconDefinition>>;
