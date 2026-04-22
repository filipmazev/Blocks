import { computed, inject, Injectable, Signal } from "@angular/core";
import { ActivatedRouteSnapshot, NavigationEnd, Router, Routes } from "@angular/router";
import { NAVIGATION_CONFIG } from "../tokens/navigation-config.token";
import { IResolvedNavigation } from "../interfaces/iresolved-navigation.interface";
import { filter } from "rxjs";
import { IBreadcrumbItem } from "../interfaces/ibreadcrumb-item.interface";
import { INavMeta } from "../interfaces/inav-meta.interface";
import { INavigationItem } from "../interfaces/inavigation-item.interface";
import { NAVIGATION_ACCESS_ADAPTER } from "../tokens/navigation-access-adapter.token";
import { toSignal } from "@angular/core/rxjs-interop";
import { INavContext } from "../interfaces/inav-context.interface";
import { BX_I18N, isTextWithKey, ResolvableText } from "@filip.mazev/blocks/core";
import { NavText } from "../types/navigation.types";

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private readonly router = inject(Router);
  private readonly config = inject(NAVIGATION_CONFIG, { optional: true });
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly accessAdapter = inject(NAVIGATION_ACCESS_ADAPTER, { optional: true });

  private readonly navEnd = toSignal(
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
  );

  public readonly current = computed<IResolvedNavigation>(() => {
    this.navEnd(); 
    this.i18n?.version?.();
    return this.resolveCurrent(this.router.routerState.snapshot.root);
  });

  public readonly routeBase = computed<string | undefined>(() => {
    return this.accessAdapter?.resolveBaseRoute();
  });

  public readonly routes: Signal<INavigationItem[]> = computed(() => {
    this.i18n?.version?.();
    return this.extractRoutes(this.router.config);
  });

  public readonly baseRoute = computed<string | undefined>(() => {
    const viewableRoutes = this.routes();
    
    const primaryPrefix = this.routeBase(); 

    let firstFoundRoot: string | undefined;

    const findRootRoute = (items: INavigationItem[]): string | undefined => {
      for (const item of items) {
        if (item.data?.root) {
          if (!firstFoundRoot) {
            firstFoundRoot = item.route;
          }

          if (primaryPrefix && item.route.startsWith(primaryPrefix)) {
            return item.route;
          }
        }
        
        if (item.children?.length) {
          const childRoot = findRootRoute(item.children);
          if (childRoot) return childRoot;
        }
      }
      return undefined;
    };

    const perfectMatch = findRootRoute(viewableRoutes);

    return perfectMatch ?? firstFoundRoot ?? primaryPrefix;
  });

  public readonly menu = computed(() => this.buildMenu(this.routes()));

  public navigateBack(): void {
    const breadcrumbs = this.current().breadcrumbs;
    
    if (breadcrumbs.length > 1) {
      const previousBreadcrumb = breadcrumbs[breadcrumbs.length - 2];
      this.router.navigateByUrl(previousBreadcrumb.route);
    } else {
      this.router.navigateByUrl(this.routeBase() ?? '/');
    }
  }

  //#region Helpers

  private extractRoutes(routes: Routes, parentSegment: string[] = []): INavigationItem[] {
    const items: INavigationItem[] = [];

    for(const route of routes) {
      if(route.redirectTo) continue;

      if (this.accessAdapter && !this.accessAdapter.canAccessMenu(route.data ?? {})) {
        continue;
      }

      const ownPath = route.path ?? '';
      
      const fullSegments = ownPath 
        ? [...parentSegment, ownPath] 
        : [...parentSegment];

      const fullRoute = '/' + fullSegments.filter(Boolean).join('/');

      const children = route.children?.length
        ? this.extractRoutes(route.children, fullSegments)
        : [];
        
      const nav = route.data?.['nav'] as INavMeta | undefined;

      if(!nav) {
        items.push(...children);
        continue;
      }

      const item = {
        id: fullRoute,
        route: fullRoute,
        label: this.resolveNavText(nav.label, { snapshot: undefined }) ?? '',
        icon: nav.icon,
        section: nav.section,
        visible: nav.visible ? nav.visible() : true,
        data: nav,
        children
      };

      items.push(item);
    }

    return this.sortNavigationItems(items);
  }

  private resolveCurrent(root: ActivatedRouteSnapshot): IResolvedNavigation {
    let currentNode: ActivatedRouteSnapshot | null = root;
    let finalSnapshot: ActivatedRouteSnapshot | undefined;

    while (currentNode) {
      const next: ActivatedRouteSnapshot | null = currentNode.children.find(child => child.outlet === 'primary') ?? null;
      if (!next) {
        finalSnapshot = currentNode;
        break;
      }
      currentNode = next;
    }

    if (!finalSnapshot) return { breadcrumbs: [] };

    const urlSegments = finalSnapshot.pathFromRoot
      .flatMap(s => s.url.map(u => u.path))
      .filter(Boolean);

    const breadcrumbs: IBreadcrumbItem[] = [];
    const allItems = this.flattenRoutes(this.routes());
    let currentUrl = '';

    for (const segment of urlSegments) {
      currentUrl += '/' + segment;
      
      const matchingItem = this.matchRouteToUrl(allItems, currentUrl);

      if (matchingItem && matchingItem.data && !matchingItem.data.hidden) {
        const ctx: INavContext = { snapshot: finalSnapshot };
        
        const label = this.resolveNavText(matchingItem.data.breadcrumb, ctx) 
                   ?? this.resolveNavText(matchingItem.data.label, ctx);
        
        if (label && breadcrumbs[breadcrumbs.length - 1]?.label !== label) {
          breadcrumbs.push({ label, route: currentUrl });
        }
      }
    }

    const leafNav = finalSnapshot.routeConfig?.data?.['nav'] as INavMeta | undefined;
    const fullUrl = '/' + urlSegments.join('/');
    
    let current: INavigationItem | undefined;

    if (leafNav && !leafNav.hidden) {
      current = {
        id: fullUrl,
        route: fullUrl,
        label: this.resolveNavText(leafNav.label, { snapshot: finalSnapshot }) ?? '',
        icon: leafNav.icon,
        section: leafNav.section,
        visible: leafNav.visible ? leafNav.visible() : true,
        data: leafNav
      };
    }

    return { current, breadcrumbs };
  }

  private buildMenu(items: INavigationItem[]): INavigationItem[] {
    return items
      .map((item): INavigationItem | null => {
        const children = this.buildMenu(item.children ?? []);
        const includeSelf = item.visible && item.data?.menu !== false;

        if (!includeSelf && !children.length) {
          return null;
        }

        return {
          ...item,
          children
        };
      }) 
      .filter((item): item is INavigationItem => item !== null);
  }

  private sortNavigationItems(items: INavigationItem[]): INavigationItem[] {
    const customSort = this.config?.sortItems;

    return [...items].sort((a, b) => {
      if(customSort) {
        return customSort(a, b);
      }

      const orderA = a.data?.order ?? Number.POSITIVE_INFINITY;
      const orderB = b.data?.order ?? Number.POSITIVE_INFINITY;

      if(orderA !== orderB) return orderA - orderB;
      return a.label.localeCompare(b.label);
    });
  }

  private matchRouteToUrl(items: INavigationItem[], url: string): INavigationItem | undefined {
    const exactMatch = items.find(i => i.route === url);
    if (exactMatch) return exactMatch;

    return items.find(i => {
      if (!i.route.includes(':')) return false;
      const routeRegex = new RegExp('^' + i.route.replace(/:[^\s/]+/g, '([^/]+)') + '$');
      return routeRegex.test(url);
    });
  }

  private flattenRoutes(items: INavigationItem[]): INavigationItem[] {
    return items.reduce((acc, item) => {
      acc.push(item);
      if (item.children) acc.push(...this.flattenRoutes(item.children));
      return acc;
    }, [] as INavigationItem[]);
  }

  private resolveNavText(textDef: NavText | undefined, ctx: INavContext): string | undefined {
    if (!textDef) return undefined;

    const text: ResolvableText = typeof textDef === 'function' 
      ? textDef(ctx) 
      : textDef;
      
    if (isTextWithKey(text)) {
      return this.i18n?.translate(text.key, { route: ctx.snapshot });
    }

    return text;
  }

  //#endregion
}