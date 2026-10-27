import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { FormsModule } from '@angular/forms';
import { SearchInput } from '@forms/components/search-input/search-input';
import { RouterLink } from '@angular/router';
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
      </header>
      <div class="catalog-search">
        <bx-search-input label="Find a component" [ngModel]="query()" (ngModelChange)="query.set($event)" placeholder="Search by name or purpose" />
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
  protected readonly query = signal('');
  protected readonly filtered = computed(() => {
    const term = this.query().trim().toLowerCase();
    return COMPONENT_EXAMPLES.filter((entry) => !term || `${entry.title} ${entry.group} ${entry.description}`.toLowerCase().includes(term));
  });

  protected readonly groups = computed(() =>
    [...new Set(this.filtered().map((entry) => entry.group))].map((title) => ({ title, entries: this.filtered().filter((entry) => entry.group === title) }))
  );
}
