import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal, viewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BxShortcutService } from '@filip.mazev/blocks/core';
import { Button, Checkbox, InputField } from '@filip.mazev/blocks/forms';
import { Menu, MenuItem, MenuTriggerDirective } from '@filip.mazev/blocks/primitives';
import {
  MENU_DUPLICATE_SHORTCUT,
  MENU_OPEN_SHORTCUT,
  MENU_SEQUENCE_PREFIX,
  MENU_SHORTCUT_PLATFORMS,
  MENU_VIEW_SHORTCUT
} from './constants/menu-shortcut-examples.constants';

@Component({
  selector: 'app-menu-shortcut-examples',
  imports: [Button, Checkbox, InputField, ReactiveFormsModule, Menu, MenuItem, MenuTriggerDirective],
  templateUrl: './menu-shortcut-examples.html',
  styleUrl: './menu-shortcut-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown)': 'onKeydown($event)',
    '(document:pointerdown)': 'resetSequence()',
    '(window:blur)': 'resetSequence()'
  }
})
export class MenuShortcutExamples {
  protected readonly shortcuts = inject(BxShortcutService);
  private readonly menu = viewChild(MenuTriggerDirective);
  protected readonly openShortcut = MENU_OPEN_SHORTCUT;
  protected readonly sequencePrefix = MENU_SEQUENCE_PREFIX;
  protected readonly viewShortcut = MENU_VIEW_SHORTCUT;
  protected readonly duplicateShortcut = MENU_DUPLICATE_SHORTCUT;
  protected readonly platforms = MENU_SHORTCUT_PLATFORMS;
  protected readonly viewDisabled = new FormControl(false, { nonNullable: true });
  protected readonly typing = new FormControl('', { nonNullable: true });
  protected readonly waitingForView = signal(false);
  protected readonly status = signal('Ready. Open the menu with its button or keyboard shortcut.');
  private sequenceTimer?: ReturnType<typeof setTimeout>;
  private actionCount = 0;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.resetSequence());
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (this.shortcuts.matches(event, this.openShortcut)) {
      event.preventDefault();
      this.resetSequence();
      this.menu()?.open(true);
      this.status.set('Menu opened by shortcut. Use arrow keys, Enter or Escape.');
      return;
    }

    if (this.shortcuts.matches(event, this.sequencePrefix)) {
      event.preventDefault();
      this.resetSequence();
      this.waitingForView.set(true);
      this.sequenceTimer = setTimeout(() => this.resetSequence(), 2000);
      return;
    }

    // The application owns sequence state; the service matches each individual combination.
    if (this.waitingForView()) {
      if (['Meta', 'Control', 'Alt', 'Shift'].includes(event.key) || event.repeat) return;

      const completed = this.shortcuts.matches(event, 'v');
      this.resetSequence();

      if (completed) {
        event.preventDefault();
        this.menu()?.open(true);
        this.status.set('Menu opened by sequence.');
        return;
      }
    }

    if (!this.viewDisabled.value && this.shortcuts.matches(event, this.viewShortcut)) {
      event.preventDefault();
      this.activate('View opened');
    } else if (this.shortcuts.matches(event, this.duplicateShortcut)) {
      event.preventDefault();
      this.activate('Project duplicated');
    }
  }

  protected activate(action: string): void {
    if (action === 'View opened' && this.viewDisabled.value) return;

    this.resetSequence();
    this.status.set(`${action} · action ${++this.actionCount}`);
    this.menu()?.close(true);
  }

  protected resetSequence(): void {
    clearTimeout(this.sequenceTimer);
    this.sequenceTimer = undefined;
    this.waitingForView.set(false);
  }
}
