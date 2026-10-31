# Top navigation

A responsive horizontal route navigation bar with brand/action slots, a compact menu, contextual search, and one shared panel for every nesting level. It uses the same route state, item views, Back behavior, search matching, focus/scroll bookmarks, and tonal styling as `SideNav`.

## Public import

```ts
import {
  TopNav, TopNavBrandDirective, TopNavActionsDirective,
  ITopNavConfig, ITopNavSlotContext, INavigationItemContext,
  defineNavigation, provideNavigation
} from '@filip.mazev/blocks/navigation';
```

Import the component and any slot directives used by your standalone shell. Root links come from `NavigationService.menuTreeGroups()` unless the optional `groups` input is supplied. An explicit empty array omits the primary menu control while preserving brand/actions; with search disabled this also serves as a toolbar shell.

## Working usage

```ts
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopNav, TopNavBrandDirective, TopNavActionsDirective, ITopNavConfig } from '@filip.mazev/blocks/navigation';
import { Button } from '@filip.mazev/blocks/forms';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TopNav, TopNavBrandDirective, TopNavActionsDirective, Button],
  template: `
    <bx-top-nav [config]="config" [(opened)]="menuOpen">
      <ng-template bxTopNavBrand let-compact>
        <a routerLink="/home">Studio</a>
      </ng-template>
      <ng-template bxTopNavActions>
        <a bx-button variant="tonal" color="grayscale" routerLink="/settings">Settings</a>
      </ng-template>
    </bx-top-nav>
  `
})
export class Header {
  protected readonly menuOpen = signal(false);
  protected readonly config: ITopNavConfig = { compactBreakpoint: 'lg', position: 'sticky' };
}
```

Declare the same route metadata used by side navigation and breadcrumbs:

```ts
const navigation = defineNavigation({
  sections: [{ id: 'workspace', title: 'Workspace' }],
  topNav: { searchable: true, ariaLabel: { key: 'navigation.primary' } }
});
const { withNav } = navigation;
const routes = [
  withNav({ path: 'projects', children: [
    withNav({ path: 'tokens', loadComponent: () => import('./tokens').then(m => m.Tokens) },
      { label: { key: 'navigation.tokens' }, icon: { name: 'swatch-book' } })
  ] }, { label: 'Projects', section: 'workspace', icon: { name: 'folder' } })
];
// Application providers: provideRouter(routes), ...provideNavigation(navigation.config)
```

A parent label always navigates to the parent's own route. Its separate chevron opens children without navigating. Declare an empty child route if the parent URL should render its own page. Parameterized menu destinations still require concrete application-owned entries; navigation does not invent parameter values.

## API

| Input/model/output/method | Contract |
| --- | --- |
| `config` | Optional `ITopNavConfig`; instance settings override `provideNavigation().topNav`, then library defaults |
| `groups` | Optional readonly `INavigationTreeGroup[]`; otherwise hierarchical route sections from `NavigationService` |
| `itemTemplate` | Optional `TemplateRef<INavigationItemContext>` inside the managed page link/button; search paths remain visible |
| `opened` / `openedChange` | Two-way panel state, initially false, never persisted |
| `itemSelected` | The selected resolved `INavigationItem`; selecting a page closes the panel |
| `isCompact()`, `query()` | Readonly resolved presentation and current search query |
| `panelId` | Stable panel ID for an application-owned trigger's `aria-controls` |
| `open(origin?, focusSearch?)` | Open the panel; pass a click event/element for positioning and focus return; the second argument optionally focuses search |
| `close(restoreFocus?)` | Close the panel; defaults to restoring the opening control's focus |
| `toggle(origin?)` | Toggle the panel from an optional click event or element |
| `search(query)` | Search programmatically, opening the panel if necessary; an empty query restores browsing |

`ITopNavConfig` options are optional:

| Option | Default / behavior |
| --- | --- |
| `position`, `top` | `'sticky'`, `'0px'`; `'inline'` leaves positioning to the containing layout |
| `compactBreakpoint` | Shared `'lg'` breakpoint, applied to both the viewport and the bar's available width |
| `compact` | Unset for automatic presentation; true forces compact, false bypasses the breakpoint. Content that does not fit always uses compact navigation |
| `panelWidth`, `panelMaxHeight` | `'24rem'`, `'32rem'`; viewport constraints and the available space above/below the trigger take precedence |
| `searchable` | `true`; the toolbar search button opens the same shared panel |
| `showItemIcons`, `showSectionIcons` | `false`, `false`; optional leading item icons and panel section icons |
| `showSearchGuide` | Deprecated compatibility option; ignored because search guides have been removed |
| `ariaLabel` | `'Main navigation'` |
| `searchPlaceholder`, `searchLabel`, `clearSearchLabel` | `'Search navigation…'`, `'Search navigation'`, `'Clear search'` |
| `openLabel`, `closeLabel` | `'Open navigation'`, `'Close navigation'` |
| `emptyText` | `'No matching pages.'` |
| `submenuLabel`, `resultLabel` | `'Open submenu'`, `'Search result'` |
| `backLabel`, `pathLabel` | `'Back'`, `'Navigation path'` |

All configurable text accepts `ResolvableText`. `BX_I18N` is optional; strings work without it, missing adapters fall back to translation keys, and an adapter version signal refreshes mounted labels, badges, keywords, action names, and paths. Section titles supplied by application-owned `groups` are resolved strings, so update that input when the language changes. The playground shares one live language adapter between its fixtures and navigation.

`bxTopNavBrand` and `bxTopNavActions` register templates with their owner. Their `ITopNavSlotContext` contains `$implicit`/`compact` and `open`. Both slots remain available in compact presentation. Keep projected controls responsive and provide accessible names for icon-only actions.

```html
<ng-template #item let-entry let-active="active">
  <span>{{ entry.label }}</span>
  @if (active) { <small aria-hidden="true">✓</small> }
</ng-template>
<bx-top-nav [itemTemplate]="item" />
```

Custom item content is presentation only; do not place nested links/buttons inside it. Native links preserve modified-click and open-in-new-tab behavior. Supplying new `groups` arrays updates mounted navigation without a transport dependency; applications own loading, access policy, and request lifecycle for custom trees. Service-generated groups retain the existing route visibility/access adapter contracts.

## Appearance and customization

The bar uses the shared Blocks surface. Its panel is an opaque menu surface with semantic colors and theme inheritance. It intentionally uses no nested backdrop filter. Keep the component outside another `bxSurface` when demonstrating bar blur, since Blocks suppresses nested glass passes.

| CSS variable | Default |
| --- | --- |
| `--bx-top-nav-top` | Resolved sticky offset |
| `--bx-top-nav-panel-width`, `--bx-top-nav-panel-max-height` | Resolved width/height settings |
| `--bx-top-nav-height`, `--bx-top-nav-gap` | `3.75rem` minimum height and shared spacing 2 between bar regions |
| `--bx-top-nav-padding-inline`, `--bx-top-nav-padding-block` | Shared spacing 3 and spacing 2 |
| `--bx-top-nav-radius` | Shared medium radius |
| `--bx-top-nav-item-radius`, `--bx-top-nav-item-gap` | Shared medium radius, spacing 2 |
| `--bx-top-nav-item-background` | Transparent |
| `--bx-top-nav-item-hover-background`, `--bx-top-nav-item-active-background` | Shared accent tonal surface |

Only the most specific matching route gets selected styling. Query parameters, matrix parameters, fragments, and redirect URLs do not produce multiple selected routes. A horizontal ancestor may use accent text for context without acquiring the selected box. Section headings in the panel likewise use accent text. Page links and disclosures have independent hover and focus surfaces.

## Behavior and accessibility

The bar measures its primary links and remaining space after brand/actions. It switches to the compact menu at the configured breakpoint or whenever content does not fit, including changes from translation, slot content, fonts, resizing, and browser zoom. Links are not left hidden behind an essential horizontal scrollbar. A compact slot that shrinks its brand/actions does not cause repeated expand/collapse feedback.

Both presentations use one dropdown panel. The first disclosure opens it below the bar using `MenuTriggerDirective` and the existing overlay context. Further disclosures replace its list; recursive overlays never accumulate. Back and the clickable ancestor path remain above the scrolling list. Ancestor buttons open their submenu panels without navigating to their pages, and the parent's heading remains a route link. Back restores the previous list's scroll and disclosure focus. The browsing path survives presentation changes; the panel can reattach to the compact control when its former origin disappears.

Search always renders flat direct matches with muted parent paths. It does not open nested panels or color ancestors as selected. After navigating to a result, clearing search opens its containing submenu and scrolls the selected row into view while retaining search-field focus. Without a successful selection it restores the prior browsing location and scroll position. A result label navigates directly; its disclosure leaves search and browses the result's children. Search results have no floating guides; the legacy `showSearchGuide` option is ignored and the former guide CSS variables no longer affect the component.

Horizontal links use a menubar with one tab stop, Left/Right movement respecting RTL, Home/End, and Down to open a parent's submenu. The panel uses native links and menu semantics; Up/Down and Home/End navigate a list. Back, Escape, or the opposite arrow returns one nested level. Escape at the panel root or its close action dismisses it and restores the opening control. Tab stays inside the open panel; outside clicks and route changes close it. Focus return uses `preventScroll`.

The panel is nonmodal: it does not lock page scrolling. Shared native CSS anchoring follows scrolling and closes a panel whose origin becomes clipped/offscreen. The bar's overlay context supports sticky headers and top-layer surfaces; theme, palette, opaque appearance, forced colors, and accessibility changes update mounted controls and overlays. Resize/direction observers, subscriptions, focus traps, and overlays clean up with their owners. Browser measurements are deferred until rendering and guarded for SSR.

## Playground

Visit `/components/top-nav` (redirects to `/components/top-nav/overview`). The demo uses the same four-level fixture, keywords, tags, disabled item, and language dropdown with English, Spanish, French, and German translations as side navigation. Page links stay on the top-nav demo route family, so route highlighting and selection feedback remain observable.

Change preview width, force compact, add action controls, toggle icons/RTL/custom templates/sticky presentation, and switch languages. The preview uses the shared `sm` breakpoint so both presentations can be exercised within the documentation layout; library defaults remain `lg`. Try `dsgn tkns`, `palette`, `tokens`, or `Palette`, enter several levels, and use Back or clear search to inspect context and restoration. Appearance controls in the application toolbar apply to this component and its open panel.

The playground application's own toolbar also uses `TopNav`: it supplies an empty `groups` array and disables search to retain the existing sidenav as the sole primary navigation. The sidenav trigger lives in the brand slot; Appearance, palette, and theme-mode controls live in the actions slot. Their dropdowns retain the existing overlay context.
