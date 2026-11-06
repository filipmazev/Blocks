import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { IUtilityExample } from '@playground/components/screens/utilities/interfaces/iutility-example.interface';

import { Button, SearchInput } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { Alert, Card, Grid, PageContainer, Stack, Tag } from '@filip.mazev/blocks/primitives';

import { UTILITY_EXAMPLES } from '@playground/components/screens/utilities/constants/utility-catalog.constants';
import { Readme } from '@playground/components/shared/readme/readme';

@Component({
  selector: 'app-utilities',
  imports: [PageContainer, Alert, Button, Card, Grid, Icon, Readme, RouterLink, SearchInput, Stack, Tag],
  templateUrl: './utilities.html',
  styleUrl: './utilities.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Utilities {
  protected readonly query: WritableSignal<string> = signal('');

  protected readonly examples: Signal<readonly IUtilityExample[]> = computed(() => {
    const term = this.query().trim().toLowerCase();

    return UTILITY_EXAMPLES.filter((entry) => !term || `${entry.title} ${entry.description} ${entry.symbol}`.toLowerCase().includes(term));
  });
}
