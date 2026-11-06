import type { Signal, WritableSignal } from '@angular/core';
import type { Data } from '@angular/router';

import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { PageContainer, PageHeader } from '@filip.mazev/blocks/primitives';

import { SearchInput } from '@forms/components/search-input/search-input';
import { componentRoute } from '@playground/components/screens/library-components/component-demo/helpers/component-route.helpers';

import type { ComponentExample } from './component-catalog';

import { COMPONENT_EXAMPLES } from './component-catalog';

@Component({
  selector: 'app-component-index',
  imports: [PageContainer, PageHeader, RouterLink, BxSurfaceDirective, FormsModule, SearchInput],
  template: `
    <bx-page-container>
      <bx-page-header
        [sectionTitle]="layoutOnly() ? 'Primitives' : 'Blocks reference'"
        [pageTitle]="layoutOnly() ? 'Layout' : 'Components'"
        [pageDescription]="
          layoutOnly()
            ? 'Compose consistent pages with containers, sections, responsive stacks, grids, and dividers.'
            : 'Explore the controls, surfaces and interactions that make up Blocks. Every example follows your active theme and global appearance configuration.'
        ">
        <p>For viewport signals, device detection, scroll locking and shared helpers, explore the <a routerLink="/utilities">Utilities playground</a>.</p>
      </bx-page-header>
      <div class="catalog-search">
        <bx-search-input label="Find a component" placeholder="Search by name or purpose" [ngModel]="query()" (ngModelChange)="query.set($event)" />
      </div>
      <p class="result-count" role="status">{{ filtered().length }} components and directives</p>
      @for (group of groups(); track group.title) {
        <section bxSurface class="catalog-group" [attr.aria-label]="group.title">
          <h2>{{ group.title }}</h2>
          <div class="catalog-grid">
            @for (entry of group.entries; track entry.id) {
              <a bxSurface class="catalog-card" [routerLink]="componentRoute(entry)"
                ><h3>{{ entry.title }}</h3>
                <p>{{ entry.description }}</p>
                <code>{{ entry.selector }}</code></a
              >
            }
          </div>
        </section>
      } @empty {
        <p>No components match this search. Try a shorter name.</p>
      }
    </bx-page-container>
  `,
  styleUrl: './component-index.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentIndex {
  private readonly activatedRoute = inject(ActivatedRoute);

  private readonly routeData: Signal<Data> = toSignal(this.activatedRoute.data, { initialValue: this.activatedRoute.snapshot.data });

  protected readonly componentRoute: typeof componentRoute = componentRoute;

  protected readonly layoutOnly: Signal<boolean> = computed(() => this.routeData()['layout'] === true);

  protected readonly query: WritableSignal<string> = signal('');

  protected readonly filtered: Signal<ComponentExample[]> = computed(() => {
    const term = this.query().trim().toLowerCase();

    return COMPONENT_EXAMPLES.filter(
      (entry) => (!this.layoutOnly() || entry.layout) && (!term || `${entry.title} ${entry.group} ${entry.description}`.toLowerCase().includes(term))
    );
  });
  protected readonly groups: Signal<
    { title: 'Start' | 'Core' | 'Forms' | 'Primitives' | 'Navigation' | 'Icons' | 'Modals' | 'Notifications' | 'Tools'; entries: ComponentExample[] }[]
  > = computed(() =>
    [...new Set(this.filtered().map((entry) => entry.group))].map((title) => ({ title, entries: this.filtered().filter((entry) => entry.group === title) }))
  );
}
