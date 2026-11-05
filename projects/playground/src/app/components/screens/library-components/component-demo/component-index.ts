import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';

import { SearchInput } from '@forms/components/search-input/search-input';

import type { ComponentExample } from './component-catalog';

import { COMPONENT_EXAMPLES } from './component-catalog';

@Component({
  selector: 'app-component-index',
  imports: [RouterLink, BxSurfaceDirective, FormsModule, SearchInput],
  template: `
    <article class="catalog-page">
      <header>
        <p class="eyebrow">Blocks reference</p>
        <h1>Components</h1>
        <p>Explore the controls, surfaces and interactions that make up Blocks. Every example follows your active theme and global appearance configuration.</p>
        <p>For viewport signals, device detection, scroll locking and shared helpers, explore the <a routerLink="/utilities">Utilities playground</a>.</p>
      </header>
      <div class="catalog-search">
        <bx-search-input label="Find a component" placeholder="Search by name or purpose" [ngModel]="query()" (ngModelChange)="query.set($event)" />
      </div>
      <p class="result-count" role="status">{{ filtered().length }} components and directives</p>
      @for (group of groups(); track group.title) {
        <section bxSurface class="catalog-group" [attr.aria-label]="group.title">
          <h2>{{ group.title }}</h2>
          <div class="catalog-grid">
            @for (entry of group.entries; track entry.id) {
              <a bxSurface class="catalog-card" [routerLink]="['/components', entry.id]"
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
    </article>
  `,
  styleUrl: './component-index.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentIndex {
  protected readonly query: WritableSignal<string> = signal('');

  protected readonly filtered: Signal<ComponentExample[]> = computed(() => {
    const term = this.query().trim().toLowerCase();

    return COMPONENT_EXAMPLES.filter((entry) => !term || `${entry.title} ${entry.group} ${entry.description}`.toLowerCase().includes(term));
  });
  protected readonly groups: Signal<
    { title: 'Start' | 'Forms' | 'Primitives' | 'Navigation' | 'Icons' | 'Modals' | 'Notifications' | 'Tools'; entries: ComponentExample[] }[]
  > = computed(() =>
    [...new Set(this.filtered().map((entry) => entry.group))].map((title) => ({ title, entries: this.filtered().filter((entry) => entry.group === title) }))
  );
}
