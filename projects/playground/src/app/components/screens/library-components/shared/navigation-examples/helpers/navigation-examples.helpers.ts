import { IBxI18nAdapter } from '@filip.mazev/blocks/core';
import { INavigationItem, INavigationTreeGroup } from '@filip.mazev/blocks/navigation';
import { NAVIGATION_DEMO_GROUPS } from '../constants/navigation-examples.constants';

/** Shares one four-level tree and language adapter between the side- and top-navigation demos. */
export function navigationDemoGroups(basePath: string, adapter: IBxI18nAdapter): INavigationTreeGroup[] {
  adapter.version?.();
  return NAVIGATION_DEMO_GROUPS.map((group) => ({
    ...group,
    title: adapter.translate(`nav.${group.id}`),
    items: localizeDemoItems(group.items, basePath, adapter)
  }));
}

export function localizeDemoItems(items: INavigationItem[], basePath: string, adapter: IBxI18nAdapter): INavigationItem[] {
  return items.map((item) => ({
    ...item,
    route: `${basePath}/${item.id}`,
    label: adapter.translate(`nav.${item.id}`),
    data: { ...item.data, label: { key: `nav.${item.id}` }, keywords: [...(item.data?.keywords ?? []), item.label] },
    children: localizeDemoItems(item.children ?? [], basePath, adapter)
  }));
}
