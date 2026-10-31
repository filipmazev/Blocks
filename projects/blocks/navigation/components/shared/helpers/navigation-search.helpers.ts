import { INavigationTreeGroup } from '../../../interfaces/inavigation-tree-group.interface';
import { INavigationItem } from '../../../interfaces/inavigation-item.interface';
import { INavigationSearchEntry } from '../interfaces/inavigation-search-entry.interface';
import { INavigationSearchResult } from '../interfaces/inavigation-search-result.interface';

/** Accent-insensitive normalization shared by fuzzy labels and keywords. */
export function normalizeNavText(value: string): string {
  return value.normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase().trim();
}

/** Substring and subsequence matching with a single-edit fallback for ordinary typing mistakes. */
export function navMatchScore(label: string, query: string): number {
  const text = normalizeNavText(label);
  const term = normalizeNavText(query);

  if (!term) return 0;
  if (text === term) return 1000;
  if (text.includes(term)) return Math.max(600, 800 - text.indexOf(term) - (text.length - term.length));

  let index = 0;
  let gaps = 0;

  for (const letter of text) {
    if (letter === term[index]) index++;
    else if (index) gaps++;
  }

  if (index === term.length) return Math.max(1, 500 - gaps - text.length);
  if (term.length < 4) return -1;

  for (const word of text.split(/\s+/)) {
    if (Math.abs(word.length - term.length) > 1) continue;
    const previous = Array.from({ length: term.length + 1 }, (_, i) => i);

    for (let row = 1; row <= word.length; row++) {
      let diagonal = previous[0];
      previous[0] = row;
      for (let column = 1; column <= term.length; column++) {
        const saved = previous[column];
        previous[column] = Math.min(previous[column] + 1, previous[column - 1] + 1, diagonal + (word[row - 1] === term[column - 1] ? 0 : 1));
        diagonal = saved;
      }
    }
    if (previous[term.length] <= 1) return 250;
  }

  return -1;
}

/** Ranks direct matches without opening menus or dropping the context of nested results. */
export function searchNavigation(groups: readonly INavigationTreeGroup[], query: string): INavigationSearchResult {
  if (!query.trim()) return { entries: [] };
  const entries: INavigationSearchEntry[] = [];
  const visit = (items: INavigationItem[], ancestors: INavigationItem[], sectionTitle: string): void => {
    for (const item of items) {
      const keywords = item.data?.keywords?.filter((keyword): keyword is string => typeof keyword === 'string') ?? [];
      const score = Math.max(navMatchScore(item.label, query), ...keywords.map((term) => navMatchScore(term, query)), navMatchScore(sectionTitle, query) - 100);

      if (score >= 0) {
        entries.push({
          item,
          path: [...ancestors.map((ancestor) => ancestor.id), item.id],
          context: [sectionTitle, ...ancestors.map((ancestor) => ancestor.label)].filter(Boolean).join(' › '),
          score
        });
      }

      if (!item.data?.disabled) visit(item.children ?? [], [...ancestors, item], sectionTitle);
    }
  };

  for (const group of groups) visit(group.items, [], group.title);

  entries.sort((a, b) => b.score - a.score);
  const best = entries.find((entry) => !entry.item.data?.disabled);

  return { entries, label: best?.item.label };
}

/** Finds an item's ancestors without imposing a maximum menu depth. */
export function findNavigationPath(groups: readonly INavigationTreeGroup[], id: string): string[] {
  const visit = (items: INavigationItem[], path: string[]): string[] | undefined => {
    for (const item of items) {
      const next = [...path, item.id];

      if (item.id === id) return next;
      const found = visit(item.children ?? [], next);

      if (found) return found;
    }

    return undefined;
  };
  for (const group of groups) {
    const result = visit(group.items, []);

    if (result) return result;
  }

  return [];
}
