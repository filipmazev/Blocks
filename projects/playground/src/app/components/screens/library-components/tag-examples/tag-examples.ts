import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { BX_I18N } from '@filip.mazev/blocks/core';
import { Button, Checkbox, InputField, Select } from '@filip.mazev/blocks/forms';
import { Tag, TagColor, TagVariant } from '@filip.mazev/blocks/primitives';
import { TAG_COLOR_OPTIONS, TAG_VARIANT_OPTIONS } from './constants/tag-examples.constants';
import { DemoI18nService } from '../form-examples/services/demo-i18n.service';
import { TruncationExamples } from '../truncation-examples/truncation-examples';

@Component({
  selector: 'app-tag-examples',
  imports: [Tag, Button, Checkbox, InputField, Select, TruncationExamples],
  providers: [DemoI18nService, { provide: BX_I18N, useExisting: DemoI18nService }],
  templateUrl: './tag-examples.html',
  styleUrl: './tag-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagExamples {
  protected readonly translations = inject(DemoI18nService);
  protected readonly label = signal<string | number | null>('Skopje');
  protected readonly text = computed(() => String(this.label() ?? ''));
  protected readonly color = signal<TagColor | null>('accent');
  protected readonly variant = signal<TagVariant | null>('tonal');
  protected readonly disabled = signal(false);
  protected readonly leadingIcon = signal(true);
  protected readonly trailingIcon = signal(true);
  protected readonly leadingCount = signal(false);
  protected readonly trailingCount = signal(true);
  protected readonly leftNumber = signal<string | number | null>(3);
  protected readonly rightNumber = signal<string | number | null>(12);
  protected readonly colors = TAG_COLOR_OPTIONS;
  protected readonly variants = TAG_VARIANT_OPTIONS;
}
