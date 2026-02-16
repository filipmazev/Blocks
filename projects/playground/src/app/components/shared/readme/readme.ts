import { HttpClient } from '@angular/common/http';
import { Component, inject, input, signal } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-readme',
  imports: [MarkdownModule],
  templateUrl: './readme.html',
  styleUrl: './readme.scss'
})
export class Readme {
  private readonly http = inject(HttpClient);

  public path = input.required<string>();

  protected readmeContent = signal<string>('');

  public ngOnInit() {
    this.loadReadme();
  }

  private loadReadme() {
    this.http.get(this.path(), { responseType: 'text' }).subscribe({
      next: (content) => {
        this.readmeContent.set(content);
      },
      error: (err) => {
        this.readmeContent.set('Failed to load README.md content.');
        console.error(err);
      }
    });
  }
}
