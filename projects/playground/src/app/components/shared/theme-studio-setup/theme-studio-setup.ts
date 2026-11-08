import type { ElementRef, Signal, WritableSignal } from '@angular/core';

import { Clipboard } from '@angular/cdk/clipboard';
import { afterRenderEffect, ChangeDetectionStrategy, Component, computed, effect, inject, signal, untracked, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { ICodeFile } from '@playground/interfaces/icode-file.interface';
import type { StudioSetupStep } from '@playground/types/theme-studio.types';

import { Button } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { Modal, ModalFooterDirective, ModalHeaderDirective } from '@filip.mazev/blocks/modal';
import { Stepper } from '@filip.mazev/blocks/navigation';
import { Tab, Tabs } from '@filip.mazev/blocks/primitives';

import { Code } from '@playground/components/shared/code/code';
import { ThemeStudioService } from '@playground/services/theme-studio.service';
import {
  STUDIO_CLI_COMMANDS,
  STUDIO_INSTALL_COMMANDS,
  STUDIO_PACKAGE_MANAGERS,
  STUDIO_SETUP_HEADERS,
  STUDIO_SETUP_IDS,
  STUDIO_SETUP_STEPS
} from '@playground/shared/constants/theme-studio-setup.constants';
import { studioCreateCommand } from '@playground/shared/helpers/theme-studio-setup.helpers';

@Component({
  host: { role: 'dialog', 'aria-modal': 'true', '[attr.aria-label]': 'heading().text' },
  selector: 'app-theme-studio-setup',
  imports: [Button, Icon, Code, Tabs, Tab, RouterLink, Stepper, ModalFooterDirective, ModalHeaderDirective],
  templateUrl: './theme-studio-setup.html',
  styleUrl: './theme-studio-setup.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeStudioSetup extends Modal<undefined, undefined> {
  private readonly clipboard = inject(Clipboard);

  protected readonly themeStudioService = inject(ThemeStudioService);

  private readonly focusContent: WritableSignal<boolean> = signal(false);

  private readonly stepTitle: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('stepTitle');

  protected readonly steps: typeof STUDIO_SETUP_STEPS = STUDIO_SETUP_STEPS;
  protected readonly managers: typeof STUDIO_PACKAGE_MANAGERS = STUDIO_PACKAGE_MANAGERS;

  protected readonly activeStep: WritableSignal<StudioSetupStep> = signal('configure');
  protected readonly method: WritableSignal<string | null> = signal('quick');
  protected readonly projectKind: WritableSignal<string | null> = signal('existing');
  protected readonly manager: WritableSignal<string | null> = signal('npm');
  protected readonly status: WritableSignal<string> = signal('');

  protected readonly heading: Signal<(typeof STUDIO_SETUP_HEADERS)[StudioSetupStep]> = computed(() => STUDIO_SETUP_HEADERS[this.activeStep()]);
  protected readonly install: Signal<string> = computed(() => STUDIO_INSTALL_COMMANDS[this.manager() ?? 'npm']);
  protected readonly command: Signal<string> = computed(
    () =>
      `${this.projectKind() === 'new' ? 'cd my-blocks-app\n' : ''}${STUDIO_CLI_COMMANDS[this.manager() ?? 'npm']} --theme=${this.themeStudioService.themeDocument().palette}`
  );
  protected readonly manualCommand: Signal<string> = computed(() => (this.projectKind() === 'new' ? 'cd my-blocks-app\n' : '') + this.install());
  protected readonly create: Signal<string> = computed(() => studioCreateCommand(this.manager() ?? 'npm'));
  protected readonly createFiles: Signal<ICodeFile[]> = computed(() => [
    { title: 'Create project', path: 'studio-create.sh', language: 'bash', content: this.create() }
  ]);
  protected readonly commandFiles: Signal<ICodeFile[]> = computed(() => [
    { title: 'Quick setup command', path: 'studio-setup.sh', language: 'bash', content: this.command() }
  ]);
  protected readonly installFiles: Signal<ICodeFile[]> = computed(() => [
    {
      title: 'Install command',
      path: 'studio-install.sh',
      language: 'bash',
      content: this.manualCommand()
    }
  ]);
  protected readonly themeFiles: Signal<ICodeFile[]> = computed(() => [
    { title: 'styles.scss', path: 'studio-theme.scss', language: 'scss', content: this.themeStudioService.scss() }
  ]);

  constructor() {
    super();
    effect(() => {
      const header = this.heading();

      untracked(() => this.modal.patch({ header }));
    });
    afterRenderEffect(() => {
      const title = this.stepTitle();

      if (!this.focusContent() || !title) return;

      this.focusContent.set(false);
      title.nativeElement.focus();
    });
  }

  protected selectStep(id: string, focusContent: boolean = false): void {
    const step = STUDIO_SETUP_IDS.find((value) => value === id);

    if (!step || step === this.activeStep()) return;

    this.status.set('');
    this.focusContent.set(focusContent);
    this.activeStep.set(step);
  }

  protected moveStep(direction: number): void {
    const step = STUDIO_SETUP_IDS[STUDIO_SETUP_IDS.indexOf(this.activeStep()) + direction];

    if (step) this.selectStep(step, true);
  }

  protected copy(text: string, label: string): void {
    this.status.set(this.clipboard.copy(text) ? `${label} copied.` : `Copy failed. Select the ${label.toLowerCase()} code block and copy it manually.`);
  }
}
