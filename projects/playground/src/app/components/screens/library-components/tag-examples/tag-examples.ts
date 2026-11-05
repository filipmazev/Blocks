import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import type { BxSelectOption } from '@forms/types/select-option.types';

import { BX_I18N } from '@filip.mazev/blocks/core';
import { Checkbox, InputField, Select } from '@filip.mazev/blocks/forms';
import { Tag, TagColor, TagVariant } from '@filip.mazev/blocks/primitives';

import { DemoI18nService } from '@playground/components/screens/library-components/form-examples/services/demo-i18n.service';
import { TAG_COLOR_OPTIONS, TAG_VARIANT_OPTIONS } from '@playground/components/screens/library-components/tag-examples/constants/tag-examples.constants';
import { TruncationExamples } from '@playground/components/screens/library-components/truncation-examples/truncation-examples';

@Component({
  selector: 'app-tag-examples',
  imports: [Tag, Checkbox, InputField, Select, TruncationExamples],
  providers: [DemoI18nService, { provide: BX_I18N, useExisting: DemoI18nService }],
  templateUrl: './tag-examples.html',
  styleUrl: './tag-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagExamples {
  protected readonly demoI18nService = inject(DemoI18nService);

  protected readonly label: WritableSignal<string | number | null> = signal<string | number | null>('Skopje');

  protected readonly text: Signal<string> = computed(() => String(this.label() ?? ''));

  protected readonly color: WritableSignal<TagColor | null> = signal<TagColor | null>('accent');
  protected readonly variant: WritableSignal<TagVariant | null> = signal<TagVariant | null>('tonal');

  protected readonly disabled: WritableSignal<boolean> = signal(false);
  protected readonly leadingIcon: WritableSignal<boolean> = signal(true);
  protected readonly trailingIcon: WritableSignal<boolean> = signal(true);
  protected readonly leadingCount: WritableSignal<boolean> = signal(false);
  protected readonly trailingCount: WritableSignal<boolean> = signal(true);

  protected readonly leftNumber: WritableSignal<string | number | null> = signal<string | number | null>(3);
  protected readonly rightNumber: WritableSignal<string | number | null> = signal<string | number | null>(12);

  protected readonly colors: readonly BxSelectOption<TagColor>[] = TAG_COLOR_OPTIONS;
  protected readonly variants: readonly BxSelectOption<TagVariant>[] = TAG_VARIANT_OPTIONS;
}
