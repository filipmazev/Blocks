import type { InputSignal, ResourceRef, Signal, WritableSignal } from '@angular/core';

import { afterRenderEffect, ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, resource, signal, viewChild } from '@angular/core';

import type { ICodeFile } from '@playground/interfaces/icode-file.interface';

import { Button } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { DropdownDirective, Menu, MenuItem } from '@filip.mazev/blocks/primitives';

import { CODE_SNIPPETS } from '@playground/generated/documentation';
import { ClipboardFeedbackService } from '@playground/services/clipboard-feedback.service';
import { DemoSourceFormatterService } from '@playground/services/demo-source-formatter.service';

import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-code',
  host: { '[class.fill-height]': 'fillHeight()' },
  imports: [Button, Icon, DropdownDirective, Menu, MenuItem, Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './code.html',
  styleUrl: './code.scss'
})
export class Code {
  private readonly clipboardFeedbackService = inject(ClipboardFeedbackService);
  private readonly demoSourceFormatterService = inject(DemoSourceFormatterService);

  private readonly copyButton: Signal<ElementRef<HTMLButtonElement> | undefined> = viewChild('copyButton', { read: ElementRef });
  private readonly retryButton: Signal<ElementRef<HTMLButtonElement> | undefined> = viewChild('retryButton', { read: ElementRef });

  protected readonly retryRequested: WritableSignal<boolean> = signal(false);

  protected readonly selectedPath: WritableSignal<string | undefined> = signal(undefined);

  protected readonly copyStatus: WritableSignal<string> = signal('');

  protected readonly selectedFile: Signal<ICodeFile | undefined> = computed(
    () => this.files().find((file) => file.path === this.selectedPath()) ?? this.files()[0]
  );
  protected readonly formatRequest: Signal<ICodeFile | undefined> = computed(
    () => {
      const file = this.selectedFile();

      return this.formatSource() && file ? { ...file, content: this.sourceContent(file) } : undefined;
    },
    { equal: (previous, next) => previous?.path === next?.path && previous?.content === next?.content && previous?.language === next?.language }
  );

  protected readonly formattedContent: ResourceRef<string | undefined> = resource({
    params: () => this.formatRequest(),
    loader: ({ params }) => this.demoSourceFormatterService.format(params)
  });

  public readonly files: InputSignal<ICodeFile[]> = input.required<ICodeFile[]>();
  public readonly maxHeight: InputSignal<string> = input('45rem');
  public readonly fillHeight: InputSignal<boolean> = input(false);
  public readonly formatSource: InputSignal<boolean> = input(false);

  constructor() {
    afterRenderEffect(() => {
      if (!this.retryRequested() || !this.formattedContent.hasValue()) return;

      const retryButton = this.retryButton()?.nativeElement;

      if (retryButton && retryButton.ownerDocument.activeElement === retryButton) this.copyButton()?.nativeElement.focus();

      this.retryRequested.set(false);
    });
  }

  protected copy(file: ICodeFile): void {
    if (this.formatSource() && !this.formattedContent.hasValue()) return;

    this.copyStatus.set(this.clipboardFeedbackService.copy(this.codeContent(file)) ? '' : 'Copy failed. Select the code and copy it manually.');
  }

  protected select(file: ICodeFile): void {
    this.selectedPath.set(file.path);
    this.copyStatus.set('');
  }

  protected retryFormatting(): void {
    if (this.formattedContent.isLoading()) return;

    this.retryRequested.set(true);
    this.formattedContent.reload();
  }

  protected codeContent(file: ICodeFile): string {
    return this.formatSource() ? (this.formattedContent.hasValue() ? this.formattedContent.value() : '') : this.sourceContent(file);
  }

  //#region Helpers

  private sourceContent(file: ICodeFile): string {
    return file.content ?? CODE_SNIPPETS[file.path.replace(/^\/+/, '')] ?? `This snippet is unavailable: ${file.title}`;
  }

  //#endregion
}
