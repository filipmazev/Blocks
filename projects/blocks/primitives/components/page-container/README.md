# Page container

A shared page layout with responsive gutters, a section label, title, description, content, and optional footer. The playground uses it on every page except
home. It preserves the existing eyebrow and large heading treatment while giving catalogs, examples, utilities, and configurators the same spacing.

## Import

```typescript
import { PageContainer, PageHeader, PageContent, PageFooter } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-page-container sectionTitle="Workspace" pageTitle="Projects" pageDescription="Manage your active projects.">
    <bx-page-content>
        <p>Your projects appear here.</p>
    </bx-page-content>
    <bx-page-footer>
        <button bx-button type="button" (click)="createProject()">Create project</button>
    </bx-page-footer>
</bx-page-container>
```

Content may also be projected directly without `PageContent`. Supply a `bx-page-header` when you need actions or other content below the default heading:

```html
<bx-page-container>
    <bx-page-header [pageTitle]="{ key: 'projects.title' }" [pageDescription]="{ key: 'projects.description' }">
        <button bx-button type="button" (click)="createProject()">Create project</button>
    </bx-page-header>
    <bx-page-content>Project list</bx-page-content>
</bx-page-container>
```

### Automatic navigation

`provideNavigation()` from `@filip.mazev/blocks/navigation` installs `BX_PAGE_NAVIGATION`. The container and header consume this optional reactive adapter
without introducing a dependency from primitives to navigation. No router or navigation provider is needed when using explicit titles without breadcrumb links.

```typescript
import { defineNavigation, provideNavigation } from '@filip.mazev/blocks/navigation';

const navigation = defineNavigation({ sections: [{ id: 'workspace', title: { key: 'workspace.title' } }] });
const { withInAppNavigation } = navigation;

// In application providers: provideRouter(routes), ...provideNavigation(navigation.config)
const routes = [
    withInAppNavigation(
        {
            path: 'projects',
            children: [
                withInAppNavigation(
                    { path: 'details', loadComponent: () => import('./project-details').then((module) => module.ProjectDetails) },
                    { label: { key: 'projects.details' }, menu: true }
                )
            ]
        },
        { label: { key: 'projects.title' }, section: 'workspace', menu: true }
    )
];
```

At `/projects`, the default breadcrumb trail stays hidden. At `/projects/details`, it appears with a link back to Projects. Nesting counts breadcrumb entries
that participate in navigation, excluding routes without breadcrumb metadata. Set `[breadcrumbsAfter]="2"` to wait until two nesting levels. Set it to zero to
show even a root entry, or set `[showBreadcrumbs]="false"` to hide the trail. A custom `breadcrumbs` array follows the same threshold.

The default header resolves `sectionTitle` from the navigation section and `pageTitle` from the active breadcrumb label, falling back to its menu label.
Componentless routes and metadata-free child outlets retain the nearest route's heading. `pageDescription` is always manually supplied. Explicit empty title
strings suppress their automatic values. A projected `PageHeader` owns its own inputs; container heading inputs configure only the generated header.

Long trails show the first and last two entries, with a horizontal ellipsis icon for the hidden ancestors. The final current-page label remains visible.
Configure this with `[breadcrumbConfig]="{ maxVisibleItems: 4, openOnHover: true }"`; `maxVisibleItems: null` shows the complete trail. Hover or activate the
ellipsis to open hidden route links in the existing Blocks menu surface. `overflowLabel`, optional custom `overflowText`, and `placement` are configurable.
`BX_BREADCRUMB_DEFAULTS` from primitives supplies shared defaults. See the [shared trail guide](../breadcrumb-trail/README.md).

## API

| Input                                      | Default            | Behavior                                                                              |
| ------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------- |
| `size: ContainerSize`                      | `xl`               | Shared Container maximum-width preset: `sm`, `md`, `lg`, `xl`, or `full`              |
| `sectionTitle?: ResolvableText`            | Navigation section | Small label above the title; empty string hides it                                    |
| `pageTitle?: ResolvableText`               | Navigation label   | Page heading; empty string hides it                                                   |
| `pageDescription?: ResolvableText`         | None               | Explicit supporting text                                                              |
| `autoResolveTitlesFromNavigation: boolean` | `true`             | Resolves undefined titles from navigation; breadcrumbs are independent                |
| `breadcrumbs?: readonly IPageBreadcrumb[]` | Adapter trail      | Explicit labels and absolute router URLs; an empty array suppresses automatic entries |
| `breadcrumbsAfter: number`                 | `1`                | Minimum nesting before showing breadcrumbs; negative values clamp to zero             |
| `showBreadcrumbs: boolean`                 | `true`             | Enables the trail when its threshold is met                                           |
| `breadcrumbConfig: IBreadcrumbTrailConfig` | `{}`               | Overflow count, translated labels, hover opening, and menu placement                  |
| `breadcrumbLabel: ResolvableText`          | `Breadcrumbs`      | Accessible name for the navigation landmark                                           |

`PageHeader` accepts the same title, description, and `autoResolveTitlesFromNavigation` inputs, plus `headingLevel` (1–6, default 1). It projects additional
header content below the description. `PageContent` and `PageFooter` project content without introducing a new surface, landmark, or scrolling region.

Applications with custom navigation can provide `BX_PAGE_NAVIGATION` as a `Signal<IPageNavigation>`. Its optional titles and ordered `IPageBreadcrumb[]` support
`ResolvableText`; the final breadcrumb represents the current page. All layout text uses the optional `BX_I18N` adapter and reacts to its version signal.
Without an adapter, plain strings render unchanged and translation keys fall back to their keys.

## Appearance and customization

| CSS variable                  | Default                                               |
| ----------------------------- | ----------------------------------------------------- |
| `--bx-container-max-width`    | Shared `size` preset (`xl`: 1280px)                   |
| `--bx-page-padding-inline`    | `clamp(1rem, 3vw, 2.5rem)` from shared spacing tokens |
| `--bx-page-padding-block`     | `clamp(1rem, 3vw, 2.5rem)` from shared spacing tokens |
| `--bx-page-gap`               | Shared spacing 8                                      |
| `--bx-page-section-color`     | `--bx-text-brand`                                     |
| `--bx-page-title-color`       | `--bx-text-heading`                                   |
| `--bx-page-title-size`        | `clamp(2rem, 4vw, 3rem)`                              |
| `--bx-page-description-width` | `48rem`                                               |
| `--bx-page-description-color` | `--bx-text-secondary`                                 |

Use the shared theme and appearance configuration. Nesting a preview can override the padding variables without changing other page instances.

## Behavior and accessibility

The layout does not create a second `main` landmark or a nested scroll area. Place it inside the application's existing `main`. The generated header uses one
native `h1`. For nested examples, project `PageHeader` with `[headingLevel]="2"` or a deeper level.

Breadcrumbs use an ordered list in a named navigation landmark, keyboard-accessible router links, visible focus, and `aria-current="page"` on the final label.
Links preserve the router's normal focus and scrolling policy. Gutters use logical properties; headings and trails wrap for translated content, RTL, narrow
containers, and zoom. Theme changes apply through semantic tokens; no motion is introduced.

## Playground

Open `/components/layout/page-container` to change the title, description, breadcrumb depth, visible count, root/child trail, automatic navigation, and footer.
Choose three nestings to inspect hidden ancestors. The footer action reports its result. `/components/layout` groups Page container, Content container, Stack
layout, Grid layout, and Divider. Existing `/components/container`, `/components/stack`, `/components/grid`, and `/components/divider` URLs redirect to their
layout destinations.
