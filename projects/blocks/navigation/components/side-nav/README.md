# Side navigation

A route-driven application rail with collapsible sections, a compact icon rail, one shared submenu panel, contextual fuzzy search, and a responsive mobile drawer. It shares `NavigationService` with breadcrumbs and `TopNav`, and shares item, search, level, and focus behavior with top navigation and uses Blocks menu, overlay, theme, surface, search, tag, and accessibility facilities.

## Public import

```ts
import {
  SideNav, SideNavHeaderDirective, SideNavFooterDirective,
  defineNavigation, provideNavigation,
  ISideNavConfig, ISideNavItemContext, ISideNavLayout,
  INavigationTreeGroup, INavigationItem
} from '@filip.mazev/blocks/navigation';
```

`SideNavConfig` aliases `ISideNavConfig`; `NavItem` aliases the resolved `INavigationItem` contract. Interfaces follow the library's `I` naming convention. Import all three components/directives in the shell's Angular `imports`.

## Working usage and withNav

Declare sections once, attach metadata to Angular routes, and provide the same configuration to navigation. Nested routes inherit the parent's section; assigning another section moves that branch to the named section. No component-specific copy of your routing configuration is required.

```ts
import { Routes, provideRouter } from '@angular/router';
import { defineNavigation, provideNavigation } from '@filip.mazev/blocks/navigation';

export const navigation = defineNavigation({
  sections: [
    { id: 'workspace', title: 'Workspace', icon: { name: 'building-2' },
      collapsible: true, showInBreadcrumbs: true },
    { id: 'admin', title: { key: 'sections.admin' }, icon: { name: 'settings' },
      collapsible: true, collapsed: true, showInBreadcrumbs: false }
  ],
  sideNav: { side: 'left', persistenceKey: 'studio.navigation.v1' }
});
const { withNav } = navigation;

export const routes: Routes = [
  withNav({ path: 'projects', children: [
    withNav({ path: 'tokens', loadComponent: () => import('./tokens').then(m => m.Tokens) }, {
      label: { key: 'nav.tokens' }, icon: { name: 'swatch-book' },
      endIcon: { name: 'sparkles' }, keywords: ['palette', 'variables'],
      tags: [{ text: { key: 'nav.new' }, config: { color: 'success' } }],
      showInBreadcrumbs: false
    })
  ] }, { label: 'Projects', section: 'workspace', icon: { name: 'folder' } })
];

// In application providers:
// provideRouter(routes), ...provideNavigation(navigation.config)
```

A route that only groups children can omit a component. Provide an empty child route if that group's own URL should render a page. Parent labels remain links; their adjacent disclosure opens the child menu. In the compact rail, the parent icon opens its menu and the heading link inside navigates to the parent's route.

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

Use `display: flex; min-width: 0` on your shell and `flex: 1; min-width: 0` on its content. The component reserves its own desktop width; the host adjusts its flex order for the configured physical side, including RTL layouts. Mobile drawers reserve zero horizontal space. The built-in Blocks tonal hamburger is fixed at the configured edge and hides while the drawer is open, leaving one close action in its header; reserve room for it in your toolbar. For exact alignment with other toolbar actions, put an application-owned trigger in that toolbar’s flex layout and disable the built-in trigger; bind its `aria-controls` to `navigation.panelId`. A custom trigger can call `navigation.open($event)`, `close()`, or `toggle($event)` with `showMobileTrigger: false`. Passing the click event or opening button ensures focus returns to it even in browsers that do not focus buttons on pointer activation.

Header/footer slots use the modal pattern: directives register `ng-template` references with their containing component. `$implicit` and `collapsed` contain the effective compact presentation state; `mobile` identifies drawer presentation. Keep interactive projected content accessible and avoid fixed widths inside compact slots.

## API

| Input/model/output | Contract |
| --- | --- |
| `config` | `ISideNavConfig`, optional per-instance overrides of `provideNavigation` defaults |
| `groups` | Optional readonly `INavigationTreeGroup[]`; otherwise `NavigationService.menuTreeGroups()` |
| `itemTemplate` | Optional `TemplateRef<ISideNavItemContext>` for content inside the managed link/button |
| `collapsed` / `collapsedChange` | Optional controlled desktop state; defaults to persisted state, then configuration |
| `mobileOpen` / `mobileOpenChange` | Mobile openness, initially false; never persisted |
| `itemSelected` | Resolved `INavigationItem` selected by the user |
| `layoutChange` | `ISideNavLayout`: physical side, current content offset, compact/mobile/open flags |
| `panelId` | Stable drawer ID for an application-owned trigger’s `aria-controls` |
| `layout()` | Readonly computed layout state for application shells |
| `isMobile()`, `isCollapsed()`, `isInlineSubmenus()`, `query()` | Readonly current presentation and query state |
| `search(query)` | Set or clear search programmatically |
| `toggleCollapsed()` | Change the desktop state and update persistence |
| `open(origin?)`, `close()`, `toggle(origin?)` | Mobile drawer controls; pass a click event or opening element for reliable focus return |

`collapsedChange` always emits a boolean, so `[(collapsed)]` works with an ordinary `signal(false)`. Omitting the input lets persistence/configuration own the state; a bound value takes precedence.

`config` options (all optional):

| Option | Default / behavior |
| --- | --- |
| `side` | `'left'`; physical `'right'` changes drawer edge, hamburger placement, and preferred flyout side |
| `position` | `'fixed'`; `'inline'` participates in local layout, useful for previews |
| `width`, `collapsedWidth` | `'17rem'`, `'4.5rem'`; viewport constrained |
| `searchable`, `collapsible` | `true`, `true` |
| `showItemIcons`, `showSectionIcons` | `true`, `true`; hide leading icons in expanded rows/headings while compact triggers retain their icons |
| `collapsed` | `false`; initial state, used when neither saved nor controlled state exists |
| `persistenceKey` | Unset; enables localStorage persistence for panel and section states |
| `mobileBreakpoint` | `'lg'`, from `WindowDimensionsService.breakpoints`; controls the drawer independently of submenu presentation |
| `submenuBreakpoint` | `'xl'`; automatic mode uses inline submenu levels at or below this shared breakpoint |
| `submenuMode` | `'auto'`; `'inline'` keeps levels inside the rail, `'flyout'` explicitly uses one adjacent panel; mobile always uses inline levels |
| `showSearchGuide` | Deprecated compatibility option; ignored because search guides have been removed |
| `backLabel`, `pathLabel` | `'Back'`, `'Navigation path'`; both accept `ResolvableText` |
| `mobile` | Unset; optional responsive override for embedded shells |
| `showMobileTrigger` | `true`; disabling it requires an application trigger |
| `ariaLabel` | `'Main navigation'` |
| `searchPlaceholder`, `searchLabel`, `clearSearchLabel` | `'Search navigation…'`, `'Search navigation'`, `'Clear search'` |
| `emptyText` | `'No matching pages.'` |
| `openLabel`, `closeLabel` | `'Open navigation'`, `'Close navigation'` |
| `collapseLabel`, `expandLabel` | `'Collapse navigation'`, `'Expand navigation'` |
| `submenuLabel`, `resultLabel` | `'Open submenu'`, `'Search result'`; the resolved item label is appended |

Every configurable text accepts `ResolvableText`. Plain strings work without `BX_I18N`; keys fall back to their key when no adapter exists. Language changes reactively update mounted labels, badges, search keywords, and action names when the adapter exposes its version signal. Function-valued `NavText` receives the existing navigation context contract.

Section configuration supports `id`, translated `title`, `icon`, `order`, `collapsible`, initial `collapsed`, and `showInBreadcrumbs`. Route metadata supports translated `label`/`breadcrumb`, `icon`, `endIcon`, `tags`, translated `keywords`, `disabled`, `section`, `order`, `root`, `menu`, `hidden`, `visible`, and `showInBreadcrumbs`. A route's explicit breadcrumb setting overrides its section's setting; otherwise inclusion defaults to true. Breadcrumb suppression does not prevent the route from being current or active.

`hidden` now consistently prunes menu branches as well as suppressing breadcrumbs. If an application previously used `hidden` only to omit a breadcrumb, migrate to `showInBreadcrumbs: false` to keep that menu item visible.

`menu: false` promotes visible descendants; `hidden: true`, failed access checks, or `visible: () => false` hide the whole branch. The legacy flat `menuGroups()` API remains available. `menuTreeGroups()` is the hierarchical API. Dynamic path parameters still need application-owned concrete route entries or deliberate `menu: false`; the side-nav does not invent parameter values. Declare navigation-bearing routes in the eager route tree; unloaded `loadChildren` configurations are not enumerated.

## Appearance and customization

Use application-wide `sideNav` defaults in `defineNavigation`, then instance overrides. Nested configuration updates should preserve unrelated keys, e.g. `config.update(value => ({ ...value, side: 'right' }))`.

| CSS variable | Default |
| --- | --- |
| `--bx-side-nav-width` | Resolved `width` configuration |
| `--bx-side-nav-collapsed-width` | Resolved `collapsedWidth` configuration |
| `--bx-side-nav-height` | `38rem` for inline panels |
| `--bx-side-nav-item-radius` | Shared medium radius |
| `--bx-side-nav-item-background` | Transparent, over the shared panel/menu surface |
| `--bx-side-nav-item-hover-background`, `--bx-side-nav-item-active-background` | Shared accent tonal surfaces; only the active route has the selected border |
| `--bx-side-nav-item-gap` | Shared spacing 2 (`0.5rem`) between adjacent items |
| `--bx-side-nav-menu-width` | `17rem` |
| `--bx-side-nav-menu-max-height` | `32rem`, constrained to the viewport |
| `--bx-side-nav-duration`, `--bx-side-nav-easing` | `250ms`, `ease`; reduced motion takes precedence |
| `--bx-side-nav-backdrop` | Shared backdrop color with a neutral scrim fallback |

Route activity comes from Angular Router matching and updates after navigation, redirects, and browser history changes. Query parameters, matrix parameters, and fragments do not clear selection. Only the most specific matching item receives the selected tonal background and border. For example, `/components/side-nav/overview` selects Side navigation rather than also selecting `/components`. Its owning section uses accent text without a second selected box, including custom trees whose child URLs do not share the parent URL. Only the exact current link receives `aria-current="page"`.

The navigation region is the panel's sole vertical scroller. The compact rail reserves equal scrollbar gutters on both edges and centers icons in the remaining space, aligned with header, search, and footer controls. Activating its search icon expands the rail and focuses the search field without scrolling the page. Its scrollbar gutter and the flyouts' gutters remain reserved when content fits, preventing width shifts. Horizontal overflow is constrained, and labels wrap within the available width.

The background and search use Blocks surfaces. Rows reuse their containing surface; the adjacent submenu panel is opaque, without backdrop filters. Theme inheritance keeps open overlays synchronized with their source. Standard semantic colors, focus styles, forced colors, reduced transparency, and opaque presentation remain available through Blocks.

```html
<ng-template #item let-entry let-active="active" let-compact="collapsed">
  <bx-icon [name]="entry.icon?.name ?? 'circle'" />
  @if (!compact) { <span>{{ entry.label }}</span> }
</ng-template>
<bx-side-nav [itemTemplate]="item" />
```

Item templates should contain presentation only. The surrounding control owns the accessible interaction; avoid nested links/buttons. Application-owned `groups` use stable unique item IDs and resolved section titles; item `data.label` and `data.keywords` may retain translation definitions. Update the groups input when application-owned data changes. The route access adapter applies to service-generated groups; callers supplying groups own their visibility decisions.

## Behavior and accessibility

Every label remains a native route link. Its separate chevron opens children without navigating. The whole navigation chooses one submenu presentation, independent of branch depth:

- At `xl` and below, children replace the current list inside the rail. Inline layouts also measure their containing shell, so a narrow embedded preview uses this behavior on a wide viewport.
- Above that threshold, one opaque adjacent panel opens. All deeper levels replace the list in that same panel; further overlays never accumulate or overlap.
- Mobile drawers always browse inside the panel. `submenuMode: 'inline'` forces this on desktop too; `submenuMode: 'flyout'` is an explicit desktop override for previews or application layouts.

Back and the clickable ancestor path stay above the scrolling list. Each ancestor button opens that submenu panel without navigating to its page; the section button opens its root list. The current parent's heading is also a link to its own page. Returning to a level restores its scroll position and disclosure focus. Changing the available width preserves the browsing path; a compact rail temporarily expands when it needs to display inline levels without changing its saved collapse preference. Levels slide briefly on explicit browsing changes; reduced motion disables the slide. Opening a submenu requires a disclosure click, touch, or keyboard action; hovering a label no longer opens menus.

Search normalizes accents and case, ranks exact/subsequence/keyword matches, and tolerates a single edit in words of at least four characters. It renders a flat list of direct matches with translated parent paths in the main navigation, with identical behavior in both presentations. Searching never opens submenus. Labels navigate directly; result disclosures leave search and browse the chosen item's children. After navigating to a search result, clearing search opens its containing submenu and scrolls that result into view, preserving search-field focus. Clearing without a successful selection restores the previous browsing level and its scroll position. Search temporarily expands a compact rail without changing its saved preference. Search covers the currently supplied tree, not unloaded or remote results.

Search results use muted parent paths without floating arrows, extra selection colors, or outlines. The page link and its separate disclosure have independent hover and focus surfaces; selection belongs to the page link. The legacy `showSearchGuide` option is ignored, and the former guide CSS variables and `--bx-side-nav-item-highlight-background` no longer affect the component.

Menus retain `menu`/`menuitem` semantics, accessible names, native links, and separate disclosure buttons. Enter/Space or the arrow towards the submenu opens children. Up/Down and Home/End move within the current menu. Back, Escape, or the opposite arrow returns one level, restoring scroll and focus; Escape at the root can dismiss the mobile drawer. Tab cycles inside the adjacent panel or mobile drawer. Clicking outside closes the adjacent panel.

The adjacent panel reuses `MenuTriggerDirective`, native CSS anchoring, origin visibility tracking, theme inheritance, and the measured fallback used by Blocks dropdowns. Scrolling does not write overlay positions when native anchoring is available. The panel closes when its origin leaves its clipping container or the viewport. It honors `bxOverlayContext`; menus opened from dialogs or top-layer overlays retain that layer.

```html
<!-- App-wide defaults can set the same options through defineNavigation(). -->
<bx-side-nav [config]="{ submenuBreakpoint: 'xl', submenuMode: 'auto', backLabel: { key: 'nav.back' } }" />
```

Fixed mobile navigation uses a labelled modal drawer with focus capture/trapping, scroll locking, a click-to-close scrim, a Blocks icon-only close button with hover feedback, and Escape dismissal. Closing restores the opening control's focus. A submenu consumes Escape before the drawer does. Resizing out of mobile mode closes the drawer and releases its lock. Browser-only persistence and measurement are guarded; unavailable/malformed storage falls back to usable defaults. Storage is scoped by your chosen key and is read when that key changes, without cross-tab synchronization.

For an inline mobile preview, use a positioned shell (`position: relative`) with a minimum height and `overflow: hidden`. Its drawer and scrim stay inside that shell and do not lock page scrolling. Off-screen drawer content is clipped without creating a scroll container, and focus capture uses `preventScroll` to keep the surrounding content stationary during either slide direction. Keep the shell outside another `bxSurface`: Blocks intentionally disables blur for nested glass. Presentation changes establish the closed layout immediately; explicit open/close actions animate the slide. Reduced motion disables that animation.

## Playground

Visit `/components/side-nav`. The application shell also uses `SideNav` with real `withNav` routes, an expanded text-only menu, its Blocks brand, and no footer. Its compact control and leading item/section icons are disabled; these remain available in the dedicated demo. The dedicated demo supplies a four-level fixture tree so selections remain on the demo page, and exposes side, collapsed/mobile presentation, RTL, custom item content, panel height, optional search, and a live language dropdown with English, Spanish, French, and German translations covering every menu item, section, action, demo control, instruction, and selection result. The mobile checkbox explicitly controls the embedded presentation, independent of the application shell’s responsive navigation. Use the adjacent-panel control to compare the two desktop presentations. Try `dsgn tkns`, `palette`, `tokens`, or `Palette` for flat contextual results, clear the search, and use the disclosures and Back control through all four levels.
