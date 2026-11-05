import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { Checkbox, IBxSelectOption, InputField, MultiSelect, SearchInput, Select } from '@filip.mazev/blocks/forms';
import { Menu, MenuItem, Tag, TooltipDirective, TruncateDirective, TruncatedTextPipe } from '@filip.mazev/blocks/primitives';

import {
  TRUNCATION_CUSTOM_EXAMPLE,
  TRUNCATION_LOGIC_EXAMPLE,
  TRUNCATION_PIPE_EXAMPLE
} from '@playground/components/screens/library-components/truncation-examples/constants/truncation-examples.constants';

import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-truncation-examples',
  imports: [Highlight, Checkbox, InputField, MultiSelect, SearchInput, Select, Menu, MenuItem, Tag, TooltipDirective, TruncateDirective, TruncatedTextPipe],
  templateUrl: './truncation-examples.html',
  styleUrl: './truncation-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TruncationExamples {
  protected readonly text: WritableSignal<string | number | null> = signal<string | number | null>('A long location name that can be truncated');

  protected readonly width: WritableSignal<string | number | null> = signal<string | number | null>(14);

  protected readonly enabled: WritableSignal<boolean> = signal(true);
  protected readonly largeText: WritableSignal<boolean> = signal(false);
  protected readonly automaticTooltips: WritableSignal<boolean> = signal(true);
  protected readonly customTooltip: WritableSignal<boolean> = signal(false);

  protected readonly menuActions: WritableSignal<number> = signal(0);

  protected readonly label: Signal<string> = computed(() => String(this.text() ?? ''));
  protected readonly options: Signal<readonly IBxSelectOption<number>[]> = computed<readonly IBxSelectOption<number>[]>(() => [
    { label: this.label(), value: 0 }
  ]);

  protected readonly pipeExample: '<span bxTruncate #overflow="bxTruncate"\n    [bxTooltip]="label() | bxTruncatedText: overflow.truncated()"\n    [attr.tabindex]="overflow.truncated() ? 0 : null"\n    bxTooltipTouch="longpress">{{ label() }}</span>' =
    TRUNCATION_PIPE_EXAMPLE;
  protected readonly customExample: '<bx-tag [text]="label()" [tooltipOnTruncate]="false" tooltip="My application tooltip" />\n<bx-input-field [label]="label()" [tooltipOnTruncate]="false" />\n<bx-select label="Location" [options]="options()" [tooltipOnTruncate]="false" />' =
    TRUNCATION_CUSTOM_EXAMPLE;
  protected readonly logicExample: "import { TruncateDirective, TruncatedTextPipe, TooltipDirective, truncatedText } from '@filip.mazev/blocks/primitives';\n\n// Read the exported directive's truncated() and text() signals in your own logic.\nconst tooltip = truncatedText(label(), overflow.truncated(), automaticTooltips());\n\n// Application-wide form default; individual controls can override it.\nformSettings.update({ tooltipOnTruncate: false });" =
    TRUNCATION_LOGIC_EXAMPLE;

  protected readonly previewWidth: Signal<number> = computed(() => {
    const width = Number(this.width());

    return Number.isFinite(width) ? Math.max(4, Math.min(64, width)) : 14;
  });
}
