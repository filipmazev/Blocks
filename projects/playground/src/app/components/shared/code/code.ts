import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Tabs, Tab, TabContentDirective } from '@filip.mazev/blocks/primitives';
import { ICodeFile } from '@playground/interfaces/icode-file.interface';
import { Highlight } from 'ngx-highlightjs';
import { CODE_SNIPPETS } from '../../../generated/documentation';

@Component({
  selector: 'app-code',
  imports: [Highlight, Tabs, Tab, TabContentDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './code.html',
  styleUrl: './code.scss'
})
export class Code {
  public readonly files = input.required<ICodeFile[]>();

  protected codeContent(file: ICodeFile): string {
    return CODE_SNIPPETS[file.path.replace(/^\/+/, '')] ?? `This snippet is unavailable: ${file.title}`;
  }
}
