import { afterNextRender, ChangeDetectionStrategy, Component, effect, inject, Injector, input, signal, viewChildren } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
import { AutocompleteDemoService } from './services/autocomplete-demo.service';
import { AUTOCOMPLETE_PAGE_SIZES } from './constants/autocomplete-options.constants';

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
  private readonly chips = viewChildren(Chip);
  protected readonly remote = inject(AutocompleteDemoService);
  protected readonly pageSizes = AUTOCOMPLETE_PAGE_SIZES;
  protected readonly selected = signal(false);
  protected readonly removableChips = signal(['Angular', 'Design', 'Accessibility']);
  protected readonly tones: readonly AlertTone[] = ['default', 'info', 'danger', 'warning', 'success'];
  protected readonly skeletonVisible = signal(true);
  protected readonly expanded = signal(false);
  protected readonly multiple = signal(false);
  protected readonly readOnly = signal(false);
  protected readonly alertVisible = signal(true);
  protected readonly status = signal('Ready');
  protected readonly destination = new FormControl<string | null>('');
  protected readonly chipConfig = { color: 'accent' as const };
  public readonly example = input.required<string>();

  constructor() {
    effect(() => {
      if (this.example() === 'autocomplete') this.remote.search('');
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
