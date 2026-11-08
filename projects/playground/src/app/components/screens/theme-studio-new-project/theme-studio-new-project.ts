import type { Signal, WritableSignal } from '@angular/core';

import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { ICodeFile } from '@playground/interfaces/icode-file.interface';

import { Button } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { PageContainer, Tab, Tabs } from '@filip.mazev/blocks/primitives';

import { Code } from '@playground/components/shared/code/code';
import { ThemeStudioService } from '@playground/services/theme-studio.service';
import { STUDIO_CLI_COMMANDS, STUDIO_PACKAGE_MANAGERS } from '@playground/shared/constants/theme-studio-setup.constants';
import { studioCreateCommand } from '@playground/shared/helpers/theme-studio-setup.helpers';

@Component({
  selector: 'app-theme-studio-new-project',
  imports: [RouterLink, Button, Icon, Code, PageContainer, Tab, Tabs],
  templateUrl: './theme-studio-new-project.html',
  styleUrl: './theme-studio-new-project.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeStudioNewProject {
  private readonly clipboard = inject(Clipboard);
  private readonly themeStudioService = inject(ThemeStudioService);

  protected readonly managers: typeof STUDIO_PACKAGE_MANAGERS = STUDIO_PACKAGE_MANAGERS;

  protected readonly manager: WritableSignal<string | null> = signal('npm');
  protected readonly status: WritableSignal<string> = signal('');

  protected readonly create: Signal<string> = computed(() => studioCreateCommand(this.manager() ?? 'npm'));
  protected readonly setup: Signal<string> = computed(
    () => `cd my-blocks-app\n${STUDIO_CLI_COMMANDS[this.manager() ?? 'npm']} --theme=${this.themeStudioService.themeDocument().palette}`
  );
  protected readonly createFiles: Signal<ICodeFile[]> = computed(() => [
    { title: 'Create project command', path: 'studio-create.sh', language: 'bash', content: this.create() }
  ]);
  protected readonly setupFiles: Signal<ICodeFile[]> = computed(() => [
    { title: 'Initialize Blocks command', path: 'studio-setup.sh', language: 'bash', content: this.setup() }
  ]);

  protected copy(value: string): void {
    this.status.set(this.clipboard.copy(value) ? 'Command copied.' : 'Copy failed. Select the code block and copy manually.');
  }
}
