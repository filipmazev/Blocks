import type { INavigationItem, INavigationTreeGroup } from '@filip.mazev/blocks/navigation';

import { COMPONENT_CATEGORIES } from '@playground/components/screens/library-components/component-demo/constants/component-categories.constants';

/**
 * Compose the playground's page hierarchy while preserving service-resolved visibility, text, and existing component destinations.
 * @param groups - Resolved route sections supplied by the shared navigation service.
 * @returns One unlabelled root containing standalone pages, nested component categories, and the tools branch.
 */
export function playgroundNavigationGroups(groups: readonly INavigationTreeGroup[]): INavigationTreeGroup[] {
  const categorySections = new Set<string>(COMPONENT_CATEGORIES.map((category) => category.section));
  const categories: INavigationItem[] = COMPONENT_CATEGORIES.flatMap((category) => {
    const group = groups.find((candidate) => candidate.id === category.section);

    if (!group?.items.length) return [];

    const route = `/components/category/${category.id}`;

    return [{ id: route, route, label: group.title, icon: category.icon, visible: true, children: group.items }];
  });
  const tools = groups.find((group) => group.id === 'Tools');
  const items = groups
    .filter((group) => !categorySections.has(group.id))
    .flatMap((group) => group.items)
    .filter((item) => item.section !== 'Tools' || item.route === '/tools')
    .map((item) => {
      if (item.route === '/components') return { ...item, children: categories };

      if (item.route === '/tools') return { ...item, children: tools?.items.filter((tool) => tool.id !== item.id) ?? [] };

      return item;
    })
    .sort((a, b) => Number(a.route === '/release-notes') - Number(b.route === '/release-notes'));

  return [{ id: 'playground', title: '', items }];
}
