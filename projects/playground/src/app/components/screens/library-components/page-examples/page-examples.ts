import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { asapScheduler, observeOn } from 'rxjs';

import type { IBxSelectOption } from '@filip.mazev/blocks/forms';
import type { IPageBreadcrumb } from '@filip.mazev/blocks/primitives';

import { Button, InputField, Select, SlideToggle } from '@filip.mazev/blocks/forms';
import { Alert, PageContainer, PageContent, PageFooter, PageHeader, Stack } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'app-page-examples',
  imports: [FormsModule, ReactiveFormsModule, Alert, Button, InputField, Select, SlideToggle, PageContainer, PageContent, PageFooter, PageHeader, Stack],
  templateUrl: './page-examples.html',
  styleUrl: './page-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageExamples {
  protected readonly title: WritableSignal<string> = signal('Workspace overview');
  protected readonly description: WritableSignal<string> = signal('A shared heading and consistent gutters for every page.');

  protected readonly breadcrumbsAfterControl: FormControl<number> = new FormControl(1, { nonNullable: true });

  protected readonly breadcrumbsAfter: Signal<number> = toSignal(this.breadcrumbsAfterControl.valueChanges, {
    initialValue: this.breadcrumbsAfterControl.value
  });

  protected readonly nesting: WritableSignal<number> = signal(1);

  protected readonly automatic: WritableSignal<boolean> = signal(false);
  protected readonly showFooter: WritableSignal<boolean> = signal(true);

  protected readonly result: WritableSignal<string> = signal('No action yet.');

  protected readonly nestingOptions: readonly IBxSelectOption<number>[] = [
    { label: 'Root page', value: 0 },
    { label: 'One nesting', value: 1 },
    { label: 'Two nestings', value: 2 }
  ];

  protected readonly previewBreadcrumbs: Signal<readonly IPageBreadcrumb[]> = computed(() => [
    { label: 'Components', route: '/components' },
    ...(this.nesting() >= 1 ? [{ label: 'Layout', route: '/components/layout' }] : []),
    ...(this.nesting() >= 2 ? [{ label: 'Page container', route: '/components/layout/page-container' }] : [])
  ]);

  constructor() {
    this.breadcrumbsAfterControl.valueChanges.pipe(observeOn(asapScheduler), takeUntilDestroyed()).subscribe(() => {
      const value = this.breadcrumbsAfterControl.value;
      const depth = Math.max(0, Math.trunc(Number(value)) || 0);

      if (depth !== value) this.breadcrumbsAfterControl.setValue(depth);
    });
  }
}
