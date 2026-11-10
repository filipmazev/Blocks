# Side navigation

A route-driven application rail with collapsible sections, a compact icon rail, nested browsing inside the panel, contextual fuzzy search, and a responsive
mobile drawer. It shares `NavigationService` with breadcrumbs and `TopNav`, and shares item, search, level, and focus behavior with top navigation. Theme,
surface, search, tag, and accessibility behavior follow the shared Blocks facilities.

## Public import

```ts
import {
    SideNav,
    SideNavHeaderDirective,
    SideNavFooterDirective,
    defineNavigation,
    provideNavigation,
    ISideNavConfig,
    ISideNavItemContext,
    ISideNavLayout,
    INavigationTreeGroup,
    INavigationItem
} from '@filip.mazev/blocks/navigation';
```

`SideNavConfig` aliases `ISideNavConfig`; `NavItem` aliases the resolved `INavigationItem` contract. Interfaces follow the library's `I` naming convention.
Import all three components/directives in the shell's Angular `imports`.

## Working usage and withInAppNavigation

Declare sections once, attach metadata to Angular routes, and provide the same configuration to navigation. Nested routes inherit the parent's section;
assigning another section moves that branch to the named section. No component-specific copy of your routing configuration is required.

```ts
import { Routes, provideRouter } from '@angular/router';
import { defineNavigation, provideNavigation } from '@filip.mazev/blocks/navigation';

export const navigation = defineNavigation({
    sections: [
        { id: 'workspace', title: 'Workspace', icon: { name: 'building-2' }, collapsible: true, showInBreadcrumbs: true },
        { id: 'admin', title: { key: 'sections.admin' }, icon: { name: 'settings' }, collapsible: true, collapsed: true, showInBreadcrumbs: false }
    ],
    sideNav: { side: 'left', persistenceKey: 'studio.navigation.v1' }
});
const { withInAppNavigation } = navigation;

export const routes: Routes = [
    withInAppNavigation(
        {
            path: 'projects',
            children: [
                withInAppNavigation(
                    { path: 'tokens', loadComponent: () => import('./tokens').then((m) => m.Tokens) },
                    {
                        label: { key: 'nav.tokens' },
                        icon: { name: 'swatch-book' },
                        endIcon: { name: 'sparkles' },
                        keywords: ['palette', 'variables'],
                        tags: [{ text: { key: 'nav.new' }, config: { color: 'success' } }],
                        showInBreadcrumbs: false
                    }
                )
            ]
        },
        { label: 'Projects', section: 'workspace', icon: { name: 'folder' } }
    )
];

// In application providers:
// provideRouter(routes), ...provideNavigation(navigation.config)
```

A route that only groups children can omit a component. Provide an empty child route if that group's own URL should render a page. Parent labels remain links;
their adjacent disclosure opens the child list inside the rail. In compact presentation, the parent icon temporarily expands the rail to show its children; the
heading link inside navigates to the parent's route.

```html
<div class="application-shell">
    <bx-side-nav #navigation [config]="{ side: 'left' }" [(collapsed)]="collapsed">
        <ng-template bxSideNavHeader let-compact let-mobile="mobile">
            <a routerLink="/home" aria-label="Studio home">
                <bx-icon name="blocks" />
                @if (!compact) { <strong>Studio</strong> }
            </a>
        </ng-template>
        <ng-template bxSideNavFooter let-compact>
            <bx-icon name="circle-user-round" />
            @if (!compact) { <span>Alex · Workspace admin</span> }
        </ng-template>
    </bx-side-nav>
    <main><!-- router outlet --></main>
</div>
```

Use `display: flex; min-width: 0` on your shell and `flex: 1; min-width: 0` on its content. The component reserves its own desktop width; the host adjusts its
flex order for the configured physical side, including RTL layouts. Mobile drawers reserve zero horizontal space. The built-in Blocks tonal hamburger is fixed
at the configured edge and hides while the drawer is open, leaving one close action in its header; reserve room for it in your toolbar. For exact alignment with
other toolbar actions, put an application-owned trigger in that toolbar’s flex layout and disable the built-in trigger; bind its `aria-controls` to
`navigation.panelId`. A custom trigger can call `navigation.open($event)`, `close()`, or `toggle($event)` with `showMobileTrigger: false`. Passing the click
event or opening button ensures focus returns to it even in browsers that do not focus buttons on pointer activation.

The desktop collapse/expand control stays at the bottom of the footer, anchored to the same outer edge in both states. Custom footer content appears above it.
Mobile close remains in the header.

Header/footer slots use the modal pattern: directives register `ng-template` references with their containing component. `$implicit` and `collapsed` contain the
effective compact presentation state; `mobile` identifies drawer presentation. Keep interactive projected content accessible and avoid fixed widths inside
compact slots.

## API

| Input/model/output                            | Contract                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `config`                                      | `ISideNavConfig`, optional per-instance overrides of `provideNavigation` defaults          |
| `groups`                                      | Optional readonly `INavigationTreeGroup[]`; otherwise `NavigationService.menuTreeGroups()` |
| `itemTemplate`                                | Optional `TemplateRef<ISideNavItemContext>` for content inside the managed link/button     |
| `collapsed` / `collapsedChange`               | Optional controlled desktop state; defaults to persisted state, then configuration         |
| `mobileOpen` / `mobileOpenChange`             | Mobile openness, initially false; never persisted                                          |
| `itemSelected`                                | Resolved `INavigationItem` selected by the user                                            |
| `layoutChange`                                | `ISideNavLayout`: physical side, current content offset, compact/mobile/open flags         |
| `panelId`                                     | Stable drawer ID for an application-owned trigger’s `aria-controls`                        |
| `layout()`                                    | Readonly computed layout state for application shells                                      |
| `isMobile()`, `isCollapsed()`, `query()`      | Readonly current presentation and query state                                              |
| `search(query)`                               | Set or clear search programmatically                                                       |
| `toggleCollapsed()`                           | Change the desktop state and update persistence                                            |
| `open(origin?)`, `close()`, `toggle(origin?)` | Mobile drawer controls; pass a click event or opening element for reliable focus return    |

`collapsedChange` always emits a boolean, so `[(collapsed)]` works with an ordinary `signal(false)`. Omitting the input lets persistence/configuration own the
state; a bound value takes precedence.

`config` options (all optional):

| Option                                                 | Default / behavior                                                                                            |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| `side`                                                 | `'left'`; physical `'right'` changes drawer edge and hamburger placement                                      |
| `position`                                             | `'fixed'`; `'inline'` participates in local layout, useful for previews                                       |
| `width`, `collapsedWidth`                              | `'17rem'`, `'4.5rem'`; viewport constrained                                                                   |
| `searchable`, `collapsible`                            | `true`, `true`                                                                                                |
| `showItemIcons`, `showSectionIcons`                    | `true`, `true`; hide leading icons in expanded rows/headings while compact triggers retain their icons        |
| `collapsed`                                            | `false`; initial state, used when neither saved nor controlled state exists                                   |
| `persistenceKey`                                       | Unset; enables localStorage persistence for panel and section states                                          |
| `mobileBreakpoint`                                     | `'lg'`, from `WindowDimensionsService.breakpoints`; controls the drawer independently of submenu presentation |
| `showSearchGuide`                                      | Deprecated compatibility option; ignored because search guides have been removed                              |
| `backLabel`, `pathLabel`                               | `'Back'`, `'Navigation path'`; both accept `ResolvableText`                                                   |
| `mobile`                                               | Unset; optional responsive override for embedded shells                                                       |
| `showMobileTrigger`                                    | `true`; disabling it requires an application trigger                                                          |
| `ariaLabel`                                            | `'Main navigation'`                                                                                           |
| `searchPlaceholder`, `searchLabel`, `clearSearchLabel` | `'Search navigation…'`, `'Search navigation'`, `'Clear search'`                                               |
| `emptyText`                                            | `'No matching pages.'`                                                                                        |
| `openLabel`, `closeLabel`                              | `'Open navigation'`, `'Close navigation'`                                                                     |
| `collapseLabel`, `expandLabel`                         | `'Collapse navigation'`, `'Expand navigation'`                                                                |
| `submenuLabel`, `resultLabel`                          | `'Open submenu'`, `'Search result'`; the resolved item label is appended                                      |

Every configurable text accepts `ResolvableText`. Plain strings work without `BX_I18N`; keys fall back to their key when no adapter exists. Language changes
reactively update mounted labels, badges, search keywords, and action names when the adapter exposes its version signal. Function-valued `NavText` receives the
existing navigation context contract.

Section configuration supports `id`, translated `title`, `icon`, `order`, `collapsible`, initial `collapsed`, and `showInBreadcrumbs`. Route metadata supports
translated `label`/`breadcrumb`, `icon`, `endIcon`, `tags`, translated `keywords`, `disabled`, `section`, `order`, `root`, `menu`, `hidden`, `visible`, and
`showInBreadcrumbs`. A route's explicit breadcrumb setting overrides its section's setting; otherwise inclusion defaults to true. Breadcrumb suppression does
not prevent the route from being current or active.

`hidden` now consistently prunes menu branches as well as suppressing breadcrumbs. If an application previously used `hidden` only to omit a breadcrumb, migrate
to `showInBreadcrumbs: false` to keep that menu item visible.

`menu: false` promotes visible descendants; `hidden: true`, failed access checks, or `visible: () => false` hide the whole branch. The legacy flat
`menuGroups()` API remains available. `menuTreeGroups()` is the hierarchical API. Dynamic path parameters still need application-owned concrete route entries or
deliberate `menu: false`; the side-nav does not invent parameter values. Declare navigation-bearing routes in the eager route tree; unloaded `loadChildren`
configurations are not enumerated.

## Appearance and customization

Use application-wide `sideNav` defaults in `defineNavigation`, then instance overrides. Nested configuration updates should preserve unrelated keys, e.g.
`config.update(value => ({ ...value, side: 'right' }))`.

| CSS variable                                                                  | Default                                                                     |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `--bx-side-nav-width`                                                         | Resolved `width` configuration                                              |
| `--bx-side-nav-collapsed-width`                                               | Resolved `collapsedWidth` configuration                                     |
| `--bx-side-nav-icon-center`                                                   | Half the rail's inner width; shared centerline for brand and controls       |
| `--bx-side-nav-header-padding-inline-start`                                   | Automatic leading-visual alignment; ordinary padding for text-only content  |
| `--bx-side-nav-footer-padding-inline-start`                                   | Automatic leading-visual alignment; ordinary padding for text-only content  |
| `--bx-nav-icon-column-size`                                                   | Item icon column computed from rail width, padding and scrollbar gutters    |
| `--bx-side-nav-height`                                                        | `38rem` for inline panels                                                   |
| `--bx-side-nav-item-radius`                                                   | Shared medium radius                                                        |
| `--bx-side-nav-item-background`                                               | Transparent, over the shared panel/menu surface                             |
| `--bx-side-nav-item-hover-background`, `--bx-side-nav-item-active-background` | Shared accent tonal surfaces; only the active route has the selected border |
| `--bx-side-nav-item-gap`                                                      | Shared spacing 2 (`0.5rem`) between adjacent items                          |
| `--bx-side-nav-duration`, `--bx-side-nav-easing`                              | `250ms`, `ease`; reduced motion takes precedence                            |
| `--bx-side-nav-label-duration`                                                | `90ms` label fade as desktop expansion finishes; reduced motion skips it    |
| `--bx-side-nav-backdrop`                                                      | Shared backdrop color with a neutral scrim fallback                         |
| `--bx-side-nav-material-opacity`                                              | Global material + 45 opacity points; minimum 52%, default about 90.6%       |

Route activity comes from Angular Router matching and updates after navigation, redirects, and browser history changes. Query parameters, matrix parameters, and
fragments do not clear selection. Only the most specific matching item receives the selected tonal background and border. For example,
`/components/side-nav/overview` selects Side navigation rather than also selecting `/components`. Its owning section uses accent text without a second selected
box, including custom trees whose child URLs do not share the parent URL. Only the exact current link receives `aria-current="page"`.

The navigation region is the panel's sole vertical scroller. Both states reserve the same scrollbar gutters and retain the header, search row, icon insets and
footer padding. The compact search action shares the input's reserved row, and the hidden input is inert, preserving layout without leaving an extra focus
target. Both direct links and submenu icons show their labels in tooltips when compact. Activating its search icon expands the rail and focuses the search field
without scrolling the page. The root and nested lists reserve their scrollbar gutters when content fits, preventing width shifts. Horizontal overflow is
constrained, and labels wrap within the available width.

Navigation icons remain centered in their compact highlights and share the logo/search/collapse centerline in both states. Header and footer slots automatically
align their first leading visual to that same axis, including icons, images, inline SVG logos, canvas, and visuals wrapped in brand links. The slot owns the
inset and reacts to rendered size and content changes; consumers do not need icon-width calculations or logo margins. Text-only slots retain ordinary padding.
For an opaque custom visual host, mark it with `data-bx-side-nav-leading` so the library can measure its outer box. The optional header/footer padding variables
above override automatic alignment when an application deliberately needs another layout.

Custom item templates can give their leading icon `inline-size: var(--bx-nav-icon-column-size, auto)` and `justify-content: center`. Existing collapsed sections
stay collapsed when switching to the rail; their section actions remain available to enter the section.

Expanded item links mirror the leading icon's column inset at their trailing edge, keeping tags and end icons clear of the selected border. The calculation uses
the item's configured icon size; iconless entries retain ordinary text padding. `--bx-nav-item-padding-inline-end` optionally overrides this trailing inset, and
compact icons keep their existing centered layout.

Root and nested lists share their horizontal insets and icon column. The nested Back action uses the logo/search/collapse centerline, and text-only rows retain
the label inset of rows with icons, including custom item templates. When every visible root row is iconless, the root uses ordinary item padding without
reserving an icon column. Nested text-only levels retain the column to preserve their alignment with the parent level. Custom templates with a wrapped leading
icon can set `--bx-nav-iconless-padding-inline: 0` on their `bx-side-nav` and reserve the leading column themselves. Scrollbar gutters are measured on the
currently rendered list, including direct entry into a nested route and transitions between short and scrollable levels.

The nested header reserves the same height with or without an ancestor trail, so entering deeper levels does not push the item list down. Equal container
padding surrounds the heading and Back control; the search row does not add another gap above this header. Ancestors stay on one line, with additional entries
moving into the overflow menu as width becomes constrained. Long section/current-parent names and individual ancestors truncate with full-name tooltips on
hover, keyboard focus, or touch-and-hold; ordinary taps keep their existing browsing/navigation actions. Overflow-menu labels wrap to show their full names.

Customize header sizing through `--bx-nav-level-header-padding-block` (spacing 2), `--bx-nav-level-line-size` (spacing 6), and `--bx-nav-level-heading-gap`
(spacing 1). The reserved heading height is two line sizes plus the gap, independent of breadcrumb count and label length.

Search results do not reserve an icon column for iconless entries, even when other results have icons. Each result's parent path aligns with its label. The path
remains descriptive inside the result's native page link, so clicking its labels or ellipsis still selects the result. Hidden search ancestors are
noninteractive tooltip text; they never navigate or steal the result's activation.

Nested ancestor paths and search-result paths share `config.breadcrumbConfig`. The default retains the first and last two entries and places the middle entries
in an interactive ellipsis menu. Configure `maxVisibleItems`, `overflowLabel`, `overflowText`, `openOnHover`, and `placement`; use `maxVisibleItems: null` to
remove the configured count limit. Compact nested headers still condense the trail to fit their width. Hidden nested ancestors browse their original levels
through Blocks menu items. Search paths use descriptive overflow tooltips. Interactive browsing paths support hover, click/tap, and keyboard activation. Global
`BX_BREADCRUMB_DEFAULTS` from primitives supplies shared defaults; instance values override application `sideNav` settings property by property. See the
[shared trail guide](../../../primitives/components/breadcrumb-trail/README.md).

```html
<bx-side-nav [config]="{ breadcrumbConfig: { maxVisibleItems: 3, overflowLabel: { key: 'nav.hiddenAncestors' }, openOnHover: true } }" />
```

Desktop expansion lays out content at its final width behind the panel's clipping edge, preventing labels from repeatedly wrapping as the rail opens. Labels and
disclosure arrows fade in with search during the final 60ms of the width transition, using its remaining running time. Initial expanded rendering and mobile
drawers have no label delay. Reduced motion removes both the delay and fade, including when the preference changes during expansion. Keyboard focus reveals
content immediately; accessible names remain available throughout. Pending reveal work is cancelled on collapse, presentation changes, and destruction.

Custom header/footer and item templates can follow the same reveal by setting `opacity: var(--bx-side-nav-label-opacity, 1)` on their text and transitioning
opacity with `var(--bx-side-nav-label-transition-duration, 0ms)`. These inherited values also handle reduced motion and keyboard focus; keep icons and focus
indicators outside the faded text.

The background and search use Blocks surfaces. Rows reuse their containing surface, and nested lists remain inside the same themed panel. Standard semantic
colors, focus styles, forced colors, reduced transparency, and opaque presentation remain available through Blocks. Programmatic row focus does not apply the
hover fill; keyboard focus keeps its visible outline, and route selection belongs only to the most-specific active item.

```html
<ng-template #item let-entry let-active="active" let-compact="collapsed">
    <bx-icon [name]="entry.icon?.name ?? 'circle'" />
    @if (!compact) { <span>{{ entry.label }}</span> }
</ng-template>
<bx-side-nav [itemTemplate]="item" />
```

Item templates should contain presentation only. The surrounding control owns the accessible interaction; avoid nested links/buttons. Application-owned `groups`
use stable unique item IDs and resolved section titles; item `data.label` and `data.keywords` may retain translation definitions. Update the groups input when
application-owned data changes. The route access adapter applies to service-generated groups; callers supplying groups own their visibility decisions.

## Behavior and accessibility

Every label remains a native route link. Its separate chevron opens children without navigating. At every viewport width and nesting depth, children replace the
current list inside the sidebar. The navigation never creates an adjacent submenu popup.

Back and the ancestor path stay above the scrolling list. Each ancestor button returns to a browsing level without navigating to its page. The first,
section-labelled action returns directly to the full navigation root when the section was only a grouping label. For example, clicking Core after opening
Utilities from the main list restores all sections and reveals Utilities in the sidebar. The item that opened the branch receives focus; the page's scroll
position stays unchanged. If the section's own list was explicitly opened, such as from the compact rail, that action returns to the section level instead.
Other ancestor actions also reveal the child item used to enter the deeper branch. The current parent's heading remains a link to its own page. Returning to a
level restores its scroll position and focus.

Opening a new level focuses its active route when present, otherwise its first enabled item. Changing the available width preserves the browsing path. A compact
rail temporarily expands while browsing children without changing its saved collapse preference, and returns to the rail when browsing returns to the root.

Explicitly collapsing a nested level shows the root rail while preserving its browsing path and scroll position. The originating root item or section is
highlighted; expanding restores the same nested list. This branch highlight does not mark the ancestor as the current page. Selecting a different root page from
the compact rail clears the suspended branch, while opening another parent replaces it with that parent's children. The browsing path is retained only for the
mounted instance; persistent storage continues to save only desktop and section-collapse preferences.

Levels slide briefly on explicit browsing changes; reduced motion disables the slide. Opening a submenu requires a disclosure click, touch, or keyboard action.

Search normalizes accents and case, ranks exact/subsequence/keyword matches, and tolerates a single edit in words of at least four characters. It renders a flat
list of direct matches with translated parent paths in the main navigation, inside the sidebar. Searching never opens submenus. Labels navigate directly; result
disclosures leave search and browse the chosen item's children. After navigating to a search result, clearing search opens its containing submenu and scrolls
that result into view, preserving search-field focus. Clearing without a successful selection restores the previous browsing level and its scroll position.
Search temporarily expands a compact rail without changing its saved preference. Search covers the currently supplied tree, not unloaded or remote results.

Search results use muted parent paths without floating arrows, extra selection colors, or outlines. The page link and its separate disclosure have independent
hover and focus surfaces; selection belongs to the page link. The legacy `showSearchGuide` option is ignored, and the former guide CSS variables and
`--bx-side-nav-item-highlight-background` no longer affect the component.

Menus retain `menu`/`menuitem` semantics, accessible names, native links, and separate disclosure buttons. Enter/Space or the arrow towards the submenu opens
children. Up/Down and Home/End move within the current menu. Back, Escape, or the opposite arrow returns one level, restoring scroll and focus; Escape at the
root can dismiss the mobile drawer. Mobile drawers trap Tab; desktop navigation remains part of the page's normal tab order.

```html
<!-- App-wide defaults can set the same options through defineNavigation(). -->
<bx-side-nav [config]="{ backLabel: { key: 'nav.back' }, pathLabel: { key: 'nav.path' } }" />
```

### Migration from adjacent submenu panels

Remove `submenuMode` and `submenuBreakpoint` from configuration and remove imports of `SideNavSubmenuMode`. These options and the type are no longer exposed;
all nested browsing uses the panel itself. Remove calls to `isInlineSubmenus()` because there is no submenu presentation switch. The retired
`--bx-side-nav-menu-width` and `--bx-side-nav-menu-max-height` variables no longer apply. Use `width` for the sidebar width and `--bx-side-nav-height` for an
embedded panel's height. Back and ancestor labels remain configurable through the shared text contract.

Fixed mobile navigation uses a labelled modal drawer with focus capture/trapping, scroll locking, the shared `ModalBackdrop` click-to-close scrim (including
blur and opaque accessibility fallbacks), a Blocks icon-only close button with hover feedback, and Escape dismissal. Closing restores the opening control's
focus. A submenu consumes Escape before the drawer does. Resizing out of mobile mode closes the drawer and releases its lock. Browser-only persistence and
viewport observation are guarded; unavailable/malformed storage falls back to usable defaults. Storage is scoped by your chosen key and is read when that key
changes, without cross-tab synchronization.

The fixed mobile drawer follows the layout viewport while open, including window resizing and restored-page changes. Opening the search keyboard does not shrink
or shift the drawer to the smaller visual viewport; the keyboard covers the lower portion instead. Closing or switching presentation releases the viewport
listeners and restores the default panel geometry.

For an inline mobile preview, use a positioned shell (`position: relative`) with a minimum height and `overflow: hidden`. Its drawer and scrim stay inside that
shell and do not lock page scrolling. Off-screen drawer content is clipped without creating a scroll container, and focus capture uses `preventScroll` to keep
the surrounding content stationary during either slide direction. Keep the shell outside another `bxSurface`: Blocks intentionally disables blur for nested
glass. Presentation changes establish the closed layout immediately; explicit open/close actions animate the slide. Reduced motion disables that animation.

## Playground

Visit `/components/side-nav`. The application shell also uses `SideNav` with real `withInAppNavigation` routes, a persistent collapsible icon rail, its Blocks
brand, and the built-in footer collapse control. Components groups the five component categories, with Layout nested under Primitives; Tools groups the
configurators behind its own overview. Tokens, Icons, and Utilities remain separate root entries. Existing component and configurator URLs remain valid. The
dedicated demo supplies a four-level fixture tree so selections remain on the demo page, and exposes side, collapsed/mobile presentation, RTL, custom item
content, item-icon visibility, panel height, optional search, and a live language dropdown with English, Spanish, French, and German translations covering every
menu item, section, action, demo control, instruction, and selection result. The mobile checkbox explicitly controls the embedded presentation, independent of
the application shell’s responsive navigation. Desktop and mobile browse the same nested lists. Try `dsgn tkns`, `palette`, `tokens`, or `Palette` for flat
contextual results, clear the search, and use the disclosures and Back control through all four levels. Turn item icons off to compare root text padding with
nested label alignment. Collapse a deep level using the footer or the icon-rail checkbox, then expand it to restore that list and its scroll position; the
compact rail highlights its originating branch.

Enable Long labels to exercise oversized section and item names at every level, including full-name tooltips, compact ancestor overflow, narrow presentation,
and unchanged header/list geometry while browsing deeper.

The fixed drawer acquires its own `ScrollLockService` lock only while its mobile overlay presentation is open. Closing, route navigation, changing to desktop or
inline presentation, and destruction release that lock; a concurrently open modal keeps its own lock. `--bx-side-nav-backdrop` remains available for an explicit
scrim color. Embedded inline presentation uses the same backdrop inside its shell without locking the page.
