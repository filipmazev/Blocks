import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { ICodeFile } from '@playground/interfaces/icode-file.interface';
import { Highlight } from 'ngx-highlightjs';
import { CODE_SNIPPETS } from '../../../generated/documentation';

@Component({
  selector: 'app-code',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './code.html',
  styleUrl: './code.scss'
})
export class Code {
  private readonly selectedPath = signal<string | null>(null);
  protected readonly activeFile = computed(() => this.files().find((file) => file.path === this.selectedPath()) ?? this.files()[0] ?? null);
  protected readonly codeContent = computed(() => {
    const file = this.activeFile();
    return file ? (CODE_SNIPPETS[file.path.replace(/^\/+/, '')] ?? `This snippet is unavailable: ${file.title}`) : '';
  });

  public files = input.required<ICodeFile[]>();

  protected selectFile(file: ICodeFile) {
    this.selectedPath.set(file.path);
  }
}
