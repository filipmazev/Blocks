import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Checkbox, IBxSelectOption, InputField, MultiSelect, SearchInput, Select } from '@filip.mazev/blocks/forms';
import { Menu, MenuItem, Tag, TooltipDirective, TruncateDirective, TruncatedTextPipe } from '@filip.mazev/blocks/primitives';
import { TRUNCATION_CUSTOM_EXAMPLE, TRUNCATION_LOGIC_EXAMPLE, TRUNCATION_PIPE_EXAMPLE } from './constants/truncation-examples.constants';

@Component({
  selector: 'app-truncation-examples',
  imports: [Checkbox, InputField, MultiSelect, SearchInput, Select, Menu, MenuItem, Tag, TooltipDirective, TruncateDirective, TruncatedTextPipe],
  templateUrl: './truncation-examples.html',
  styleUrl: './truncation-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TruncationExamples {
  protected readonly text = signal<string | number | null>('A long location name that can be truncated');
  protected readonly width = signal<string | number | null>(14);
  protected readonly enabled = signal(true);
  protected readonly largeText = signal(false);
  protected readonly automaticTooltips = signal(true);
  protected readonly customTooltip = signal(false);
  protected readonly menuActions = signal(0);
  protected readonly label = computed(() => String(this.text() ?? ''));
  protected readonly options = computed<readonly IBxSelectOption<number>[]>(() => [{ label: this.label(), value: 0 }]);
  protected readonly pipeExample = TRUNCATION_PIPE_EXAMPLE;
  protected readonly customExample = TRUNCATION_CUSTOM_EXAMPLE;
  protected readonly logicExample = TRUNCATION_LOGIC_EXAMPLE;
  protected readonly previewWidth = computed(() => {
    const width = Number(this.width());

    return Number.isFinite(width) ? Math.max(4, Math.min(64, width)) : 14;
  });
}
