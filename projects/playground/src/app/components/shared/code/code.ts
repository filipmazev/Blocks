import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

import { Tab, TabContentDirective, Tabs } from '@filip.mazev/blocks/primitives';

import { CODE_SNIPPETS } from '@playground/generated/documentation';
import { ICodeFile } from '@playground/interfaces/icode-file.interface';

import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-code',
  imports: [Highlight, Tabs, Tab, TabContentDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './code.html',
  styleUrl: './code.scss'
})
export class Code {
  public readonly files: InputSignal<ICodeFile[]> = input.required<ICodeFile[]>();

  protected codeContent(file: ICodeFile): string {
    return CODE_SNIPPETS[file.path.replace(/^\/+/, '')] ?? `This snippet is unavailable: ${file.title}`;
  }
}
