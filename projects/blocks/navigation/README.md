# Navigation

Declare UI sections once with `defineNavigation`. Its `withInAppNavigation` helper restricts each route's `section` to the declared IDs and checks the remaining
navigation metadata. Declarations can live in `app.routes.ts` or a shared `app.navigation.ts` used by multiple route files.

```ts
import { defineNavigation } from '@filip.mazev/blocks/navigation';
import { Routes } from '@angular/router';

export const navigation = defineNavigation({
    sections: [
        { id: 'start', title: 'Get started' },
        { id: 'forms', title: 'Form controls' }
    ]
});

const { withInAppNavigation } = navigation;

export const routes: Routes = [
    withInAppNavigation({ path: 'home', loadComponent: () => import('./home').then((m) => m.Home) }, { label: 'Overview', section: 'start' })
];

// withInAppNavigation({}, { section: 'typo' }); // TypeScript error: undeclared section.
```

Provide the same configuration in your application's providers:

```ts
import { provideNavigation } from '@filip.mazev/blocks/navigation';
import { navigation } from './app.routes';

// In ApplicationConfig.providers, alongside provideRouter(routes):
provideNavigation(navigation.config);
```

`NavigationService.menuGroups()` returns nonempty `{ id, title, items }` groups. Sections follow declaration order unless their numeric `order` is specified;
sections with an order come first. Titles default to the section ID. Each group's items are flat entries from the menu tree, including descendants, with
existing route ordering, access checks, visibility and translations applied. Excluded parent containers do not become links. `menu()` continues to expose the
menu tree.

The standalone `withInAppNavigation` and `provideNavigation` helpers remain available. For these existing callers, undeclared sections appear after declared
sections with their ID as the title. Items without a section appear in a group with an empty ID and title. Type checking against a declaration applies when
using the `withInAppNavigation` returned by `defineNavigation`.

The UI can apply search to `menuGroups()` without defining section titles, ordering or flattening. Track groups by `id` and entries by `route`.

Run the grouping and metadata type checks with `npm run test:navigation`.

## Navigation views

`SideNav` and `TopNav` consume the same hierarchical route sections, metadata, access filtering, translation adapter, and most-specific active route. They share
item presentation, one-level-at-a-time browsing, flat contextual search, and focus/scroll restoration. Configure application defaults through `sideNav` and
`topNav` in `defineNavigation`; instance configuration overrides those settings.

See [side navigation](components/side-nav/README.md) and [top navigation](components/top-nav/README.md) for public imports, configuration, slots, accessibility,
and runnable examples. Their playground routes are `/components/side-nav` and `/components/top-nav`.

## Page layout integration

`provideNavigation()` also provides the optional `BX_PAGE_NAVIGATION` adapter from primitives. `NavigationService.page` exposes reactive section and page titles
plus breadcrumbs for [PageContainer](../primitives/components/page-container/README.md). Descriptions remain application-owned. Breadcrumbs appear after one
nesting by default and the threshold can be configured on each container. Existing Breadcrumbs components retain their own display settings.

## Stepper workflows

[Stepper](components/stepper/README.md) provides passive progress, externally controlled section navigation and guarded wizards through the same `bx-stepper`
component. Import `Stepper`, `Step` and its optional template directives from `@filip.mazev/blocks/navigation`.
