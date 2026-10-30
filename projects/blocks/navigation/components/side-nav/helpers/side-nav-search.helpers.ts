import { INavigationTreeGroup } from '../../../interfaces/inavigation-tree-group.interface';
import { INavigationItem } from '../../../interfaces/inavigation-item.interface';
import { ISideNavSearchResult } from '../interfaces/iside-nav-search-result.interface';

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

/** Keeps matching branches and their ancestors, choosing one best target to reveal automatically. */
export function searchNavigation(groups: readonly INavigationTreeGroup[], query: string): ISideNavSearchResult {
  if (!query.trim()) return { groups, path: [] };
  let bestScore = -1;
  let bestPath: string[] = [];
  let bestLabel: string | undefined;
  const filter = (items: INavigationItem[], path: string[], sectionTitle: string): INavigationItem[] =>
    items.flatMap((item) => {
      const nextPath = [...path, item.id];
      const children = item.data?.disabled ? [] : filter(item.children ?? [], nextPath, sectionTitle);
      const keywords = item.data?.keywords?.filter((keyword): keyword is string => typeof keyword === 'string') ?? [];
      const score = Math.max(navMatchScore(item.label, query), ...keywords.map((term) => navMatchScore(term, query)), navMatchScore(sectionTitle, query) - 100);

      if (score > bestScore && !item.data?.disabled) {
        bestScore = score;
        bestPath = nextPath;
        bestLabel = item.label;
      }

      return score >= 0 || children.length ? [{ ...item, children: score >= 0 && !children.length ? item.children : children }] : [];
    });
  const filtered = groups.map((group) => ({ ...group, items: filter(group.items, [], group.title) })).filter((group) => group.items.length);
  return { groups: filtered, path: bestPath, target: bestPath.at(-1), label: bestLabel };
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
