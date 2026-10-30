import { INavigationItem, INavigationTreeGroup } from '@filip.mazev/blocks/navigation';

export const SIDE_NAV_DEMO_GROUPS: readonly INavigationTreeGroup[] = [
  {
    id: 'workspace',
    title: 'Workspace',
    icon: { name: 'building-2' },
    collapsible: true,
    items: [
      { id: 'overview', route: '/components/side-nav/overview', label: 'Overview', icon: { name: 'house' }, visible: true },
      {
        id: 'projects',
        route: '/components/side-nav/projects',
        label: 'Projects',
        icon: { name: 'folder' },
        visible: true,
        data: { tags: [{ text: '12', config: { color: 'info' } }] },
        children: [
          {
            id: 'design',
            route: '/components/side-nav/design',
            label: 'Design system',
            icon: { name: 'palette' },
            visible: true,
            children: [
              {
                id: 'library',
                route: '/components/side-nav/library',
                label: 'Component library',
                icon: { name: 'blocks' },
                visible: true,
                children: [
                  ...Array.from({ length: 14 }, (_, index): INavigationItem => ({
                    id: `pattern-${index}`,
                    route: `/components/side-nav/pattern-${index}`,
                    label: `Pattern ${index + 1}`,
                    icon: { name: 'component' },
                    visible: true
                  })),
                  {
                    id: 'tokens',
                    route: '/components/side-nav/tokens',
                    label: 'Design tokens',
                    icon: { name: 'swatch-book' },
                    visible: true,
                    data: {
                      label: { key: 'nav.tokens' },
                      keywords: [{ key: 'nav.palette' }, { key: 'nav.variables' }],
                      endIcon: { name: 'sparkles' },
                      tags: [{ text: { key: 'nav.new' }, config: { color: 'success' } }]
                    }
                  },
                  { id: 'accessibility', route: '/components/side-nav/accessibility', label: 'Accessibility', icon: { name: 'accessibility' }, visible: true }
                ]
              },
              { id: 'research', route: '/components/side-nav/research', label: 'Research', icon: { name: 'flask-conical' }, visible: true }
            ]
          },
          { id: 'releases', route: '/components/side-nav/releases', label: 'Releases', icon: { name: 'rocket' }, visible: true }
        ]
      },
      { id: 'reports', route: '/components/side-nav/reports', label: 'Reports', icon: { name: 'chart-column' }, visible: true },
      { id: 'disabled', route: '/components/side-nav/disabled', label: 'Restricted area', icon: { name: 'lock' }, visible: true, data: { disabled: true } }
    ]
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: { name: 'settings' },
    collapsible: true,
    items: [
      { id: 'members', route: '/components/side-nav/members', label: 'Team members', icon: { name: 'users' }, visible: true },
      { id: 'billing', route: '/components/side-nav/billing', label: 'Billing', icon: { name: 'credit-card' }, visible: true }
    ]
  }
];

export const SIDE_NAV_DEMO_TRANSLATIONS: Readonly<Record<string, Readonly<Record<string, string>>>> = {
  en: {
    'nav.workspace': 'Workspace',
    'nav.settings': 'Settings',
    'nav.overview': 'Overview',
    'nav.projects': 'Projects',
    'nav.design': 'Design system',
    'nav.library': 'Component library',
    'nav.tokens': 'Design tokens',
    'nav.accessibility': 'Accessibility',
    'nav.research': 'Research',
    'nav.releases': 'Releases',
    'nav.reports': 'Reports',
    'nav.disabled': 'Restricted area',
    'nav.members': 'Team members',
    'nav.billing': 'Billing',
    'nav.new': 'New',
    'nav.search': 'Search demo navigation',
    'nav.placeholder': 'Try “dsgn tkns” or “palette”',
    'nav.name': 'Demo workspace',
    'nav.clear': 'Clear search',
    'nav.empty': 'No matching pages.',
    'nav.open': 'Open navigation',
    'nav.close': 'Close navigation',
    'nav.collapse': 'Collapse navigation',
    'nav.expand': 'Expand navigation',
    'nav.submenu': 'Open submenu',
    'nav.result': 'Search result',
    'demo.right': 'Right side',
    'demo.rail': 'Icon rail',
    'demo.mobile': 'Force mobile drawer',
    'demo.search': 'Search',
    'demo.rtl': 'RTL',
    'demo.custom': 'Custom item template',
    'demo.height': 'Panel height (px)',
    'demo.language': 'Language',
    'demo.instructions':
      'Hover Projects or use its disclosure. Search “dsgn tkns” to reveal four levels and a persistent pointer. Select the result, then clear the search to reveal it again.',
    'demo.studio': 'Studio',
    'demo.admin': 'Alex · Workspace admin',
    'demo.title': 'A calmer workspace',
    'demo.description': 'The header, footer, item presentation, side and panel size are configurable. The mobile drawer stays inside this preview.',
    'demo.open': 'Open demo drawer',
    'demo.select': 'Select a page to see its stable ID here.',
    'demo.keyboard': 'Arrow keys, Home/End, Enter and Escape work through the nested menus. Tab stays inside an open flyout or mobile drawer.',
    'demo.routes': 'Configure real routes with withNav',
    'nav.palette': 'palette',
    'nav.variables': 'color variables',
    'nav.pattern-0': 'Pattern 1',
    'nav.pattern-1': 'Pattern 2',
    'nav.pattern-2': 'Pattern 3',
    'nav.pattern-3': 'Pattern 4',
    'nav.pattern-4': 'Pattern 5',
    'nav.pattern-5': 'Pattern 6',
    'nav.pattern-6': 'Pattern 7',
    'nav.pattern-7': 'Pattern 8',
    'nav.pattern-8': 'Pattern 9',
    'nav.pattern-9': 'Pattern 10',
    'nav.pattern-10': 'Pattern 11',
    'nav.pattern-11': 'Pattern 12',
    'nav.pattern-12': 'Pattern 13',
    'nav.pattern-13': 'Pattern 14'
  },
  mk: {
    'nav.workspace': 'Работен простор',
    'nav.settings': 'Поставки',
    'nav.overview': 'Преглед',
    'nav.projects': 'Проекти',
    'nav.design': 'Дизајн систем',
    'nav.library': 'Библиотека на компоненти',
    'nav.tokens': 'Дизајн токени',
    'nav.accessibility': 'Пристапност',
    'nav.research': 'Истражување',
    'nav.releases': 'Изданија',
    'nav.reports': 'Извештаи',
    'nav.disabled': 'Ограничен пристап',
    'nav.members': 'Членови на тимот',
    'nav.billing': 'Наплата',
    'nav.new': 'Ново',
    'nav.search': 'Пребарај навигација',
    'nav.placeholder': 'Пребарај „токени“ или „палета“',
    'nav.name': 'Демо работен простор',
    'nav.clear': 'Исчисти пребарување',
    'nav.empty': 'Нема соодветни страници.',
    'nav.open': 'Отвори навигација',
    'nav.close': 'Затвори навигација',
    'nav.collapse': 'Собери навигација',
    'nav.expand': 'Прошири навигација',
    'nav.submenu': 'Отвори подмени',
    'nav.result': 'Резултат од пребарување',
    'demo.right': 'Десна страна',
    'demo.rail': 'Лента со икони',
    'demo.mobile': 'Мобилен приказ',
    'demo.search': 'Пребарување',
    'demo.rtl': 'Оддесно налево',
    'demo.custom': 'Сопствен шаблон за ставки',
    'demo.height': 'Висина на панелот (px)',
    'demo.language': 'Јазик',
    'demo.instructions':
      'Поставете го покажувачот врз Проекти или отворете го подменито. Пребарајте „токени“ за да се прикажат четири нивоа и покажувач до резултатот. Изберете го резултатот, па исчистете го пребарувањето за повторно да го прикажете.',
    'demo.studio': 'Студио',
    'demo.admin': 'Алекс · Администратор',
    'demo.title': 'Помирен работен простор',
    'demo.description':
      'Заглавјето, подножјето, изгледот на ставките, страната и големината на панелот се прилагодливи. Мобилната навигација останува во овој преглед.',
    'demo.open': 'Отвори демо навигација',
    'demo.select': 'Изберете страница за да го видите нејзиниот идентификатор.',
    'demo.keyboard': 'Стрелките, Home/End, Enter и Escape работат низ вгнездените менија. Tab останува во отвореното подмени или мобилната навигација.',
    'demo.routes': 'Конфигурирајте вистински рути со withNav',
    'nav.palette': 'палета',
    'nav.variables': 'променливи за бои',
    'nav.pattern-0': 'Шаблон 1',
    'nav.pattern-1': 'Шаблон 2',
    'nav.pattern-2': 'Шаблон 3',
    'nav.pattern-3': 'Шаблон 4',
    'nav.pattern-4': 'Шаблон 5',
    'nav.pattern-5': 'Шаблон 6',
    'nav.pattern-6': 'Шаблон 7',
    'nav.pattern-7': 'Шаблон 8',
    'nav.pattern-8': 'Шаблон 9',
    'nav.pattern-9': 'Шаблон 10',
    'nav.pattern-10': 'Шаблон 11',
    'nav.pattern-11': 'Шаблон 12',
    'nav.pattern-12': 'Шаблон 13',
    'nav.pattern-13': 'Шаблон 14'
  }
};

export const SIDE_NAV_ROUTE_EXAMPLE = `const navigation = defineNavigation({
  sections: [{ id: 'workspace', title: 'Workspace', icon: { name: 'building-2' },
    collapsible: true, showInBreadcrumbs: true }],
  sideNav: { side: 'left', persistenceKey: 'my-app.navigation' }
});
const { withNav } = navigation;
export const routes: Routes = [withNav({ path: 'projects', children: [
  withNav({ path: 'tokens', loadComponent: () => import('./tokens').then(m => m.Tokens) },
    { label: { key: 'nav.tokens' }, icon: { name: 'swatch-book' },
      keywords: ['palette'], tags: [{ text: 'New' }], showInBreadcrumbs: false })
]}, { label: 'Projects', section: 'workspace', icon: { name: 'folder' } })];
// In application providers:
provideRouter(routes), provideNavigation(navigation.config)
// In your shell: <bx-side-nav />`;
