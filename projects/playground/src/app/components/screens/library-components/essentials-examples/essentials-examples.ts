import type { InputSignal, Signal, WritableSignal } from '@angular/core';

import { afterNextRender, ChangeDetectionStrategy, Component, effect, inject, Injector, input, signal, viewChildren } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import type { BxSelectOption } from '@forms/types/select-option.types';

import { Color } from '@filip.mazev/blocks/core';
import { Autocomplete, Button, Checkbox, InputField, Select } from '@filip.mazev/blocks/forms';
import {
  Accordion,
  Alert,
  AlertTone,
  Card,
  Chip,
  Collapsible,
  Container,
  Divider,
  Grid,
  Popover,
  PopoverDirective,
  Skeleton,
  Stack
} from '@filip.mazev/blocks/primitives';

import { AUTOCOMPLETE_PAGE_SIZES } from '@playground/components/screens/library-components/essentials-examples/constants/autocomplete-options.constants';
import { CARD_HIGHLIGHT_OPTIONS } from '@playground/components/screens/library-components/essentials-examples/constants/card-options.constants';
import { AutocompleteDemoService } from '@playground/components/screens/library-components/essentials-examples/services/autocomplete-demo.service';

@Component({
  selector: 'app-essentials-examples',
  imports: [
    ReactiveFormsModule,
    Autocomplete,
    Button,
    Checkbox,
    InputField,
    Select,
    Accordion,
    Alert,
    Card,
    Chip,
    Collapsible,
    Container,
    Divider,
    Grid,
    Popover,
    PopoverDirective,
    Skeleton,
    Stack
  ],
  providers: [AutocompleteDemoService],
  templateUrl: './essentials-examples.html',
  styleUrl: './essentials-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'data-bx-light-scope': '' }
})
export class EssentialsExamples {
  private readonly injector = inject(Injector);

  protected readonly autocompleteDemoService = inject(AutocompleteDemoService);

  private readonly chips: Signal<readonly Chip[]> = viewChildren(Chip);

  protected readonly pageSizes: readonly BxSelectOption<number>[] = AUTOCOMPLETE_PAGE_SIZES;

  protected readonly selected: WritableSignal<boolean> = signal(false);

  protected readonly removableChips: WritableSignal<string[]> = signal(['Angular', 'Design', 'Accessibility']);

  protected readonly tones: readonly AlertTone[] = ['default', 'info', 'danger', 'warning', 'success'];

  protected readonly skeletonVisible: WritableSignal<boolean> = signal(true);
  protected readonly expanded: WritableSignal<boolean> = signal(false);
  protected readonly multiple: WritableSignal<boolean> = signal(false);
  protected readonly readOnly: WritableSignal<boolean> = signal(false);
  protected readonly alertVisible: WritableSignal<boolean> = signal(true);

  protected readonly status: WritableSignal<string> = signal('Ready');

  protected readonly destination: FormControl<string | null> = new FormControl<string | null>('');
  protected readonly chipConfig: { color: 'accent' } = { color: 'accent' as const };
  protected readonly cardHighlightOptions: readonly BxSelectOption<Color>[] = CARD_HIGHLIGHT_OPTIONS;

  protected readonly cardHighlight: WritableSignal<Color> = signal<Color>('accent');

  protected readonly cardClickable: WritableSignal<boolean> = signal(true);
  protected readonly cardDisabled: WritableSignal<boolean> = signal(false);
  protected readonly cardReadOnly: WritableSignal<boolean> = signal(false);
  protected readonly cardSelected: WritableSignal<boolean> = signal(false);

  public readonly example: InputSignal<string> = input.required<string>();

  constructor() {
    effect(() => {
      if (this.example() === 'autocomplete') this.autocompleteDemoService.search('');
    });
  }

  protected removeChip(label: string): void {
    const index = this.removableChips().indexOf(label);

    this.removableChips.update((chips) => chips.filter((chip) => chip !== label));
    this.status.set('Removed ' + label);
    afterNextRender(
      () => {
        const chips = this.chips().slice(1);

        chips[Math.min(index, chips.length - 1)]?.focus();
      },
      { injector: this.injector }
    );
  }

  protected resetChips(): void {
    this.removableChips.set(['Angular', 'Design', 'Accessibility']);
  }
}
