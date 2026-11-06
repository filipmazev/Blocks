import type { LUCIDE_CATEGORIES } from '@icons/constants/lucide-categories.constants';

/** Stable identifier of a generated official Lucide category or the uncategorized fallback. */
export type LucideCategoryId = (typeof LUCIDE_CATEGORIES)[number]['id'];
