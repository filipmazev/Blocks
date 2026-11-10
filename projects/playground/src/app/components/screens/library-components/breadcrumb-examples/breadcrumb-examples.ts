import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import type { IBreadcrumbItem } from '@filip.mazev/blocks/navigation';
import type { IBreadcrumbTrailConfig } from '@filip.mazev/blocks/primitives';

import { Checkbox, InputField } from '@filip.mazev/blocks/forms';
import { Breadcrumbs } from '@filip.mazev/blocks/navigation';
import { Stack } from '@filip.mazev/blocks/primitives';

import { BREADCRUMB_EXAMPLE_ITEMS } from '@playground/components/screens/library-components/breadcrumb-examples/constants/breadcrumb-examples.constants';

@Component({
  selector: 'app-breadcrumb-examples',
  imports: [Breadcrumbs, Checkbox, InputField, Stack],
  templateUrl: './breadcrumb-examples.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbExamples {
  protected readonly items: readonly IBreadcrumbItem[] = BREADCRUMB_EXAMPLE_ITEMS;

  protected readonly maxVisible: WritableSignal<string | number | null> = signal<string | number | null>(3);

  protected readonly unlimited: WritableSignal<boolean> = signal(false);
  protected readonly hover: WritableSignal<boolean> = signal(true);

  protected readonly config: Signal<IBreadcrumbTrailConfig> = computed(() => ({
    maxVisibleItems: this.unlimited() ? null : Number(this.maxVisible()) || 3,
    openOnHover: this.hover()
  }));
}
