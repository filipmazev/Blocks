import { HttpClient } from '@angular/common/http';
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ICodeFile } from '@playground/interfaces/icode-file.interface';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-code',
  imports: [Highlight],
  templateUrl: './code.html',
  styleUrl: './code.scss'
})
export class Code implements OnInit {
  public files = input.required<ICodeFile[]>();
  protected activeFile = signal<ICodeFile | null>(null);
  protected codeContent = signal<string>('');
  private http = inject(HttpClient);

  public ngOnInit(): void {
    if (this.files().length > 0 && !this.activeFile()) {
      this.selectFile(this.files()[0]);
    }
  }

  protected selectFile(file: ICodeFile) {
    this.activeFile.set(file);
    this.codeContent.set('Loading...');

    this.http.get(file.path, { responseType: 'text' }).subscribe({
      next: (content) => {
        this.codeContent.set(content);
      },
      error: () => this.codeContent.set(`Error: Could not load file at ${file.path}`)
    });
  }
}
