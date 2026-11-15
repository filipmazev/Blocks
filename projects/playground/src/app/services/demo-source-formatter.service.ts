import { Injectable } from '@angular/core';

import type { ICodeFile } from '@playground/interfaces/icode-file.interface';

import { DEMO_SOURCE_FORMAT_OPTIONS } from '@playground/generated/demo-stories/constants/demo-source-format.constants';

@Injectable({ providedIn: 'root' })
export class DemoSourceFormatterService {
  private readonly cache: Map<string, string> = new Map();

  private formatter: Promise<(file: ICodeFile) => Promise<string>> | undefined;

  public async format(file: ICodeFile): Promise<string> {
    const key = `${file.language}\0${file.content}`;
    const cached = this.cache.get(key);

    if (cached !== undefined) return cached;

    this.formatter ??= this.loadFormatter();

    try {
      const formatted = await (await this.formatter)(file);

      if (this.cache.size >= 64) this.cache.clear();

      this.cache.set(key, formatted);

      return formatted;
    } catch (error) {
      this.formatter = undefined;

      throw error;
    }
  }

  //#region Helpers

  private async loadFormatter(): Promise<(file: ICodeFile) => Promise<string>> {
    const [prettier, typescript, estree, html, angular] = await Promise.all([
      import('prettier/standalone'),
      import('prettier/plugins/typescript'),
      import('prettier/plugins/estree'),
      import('prettier/plugins/html'),
      import('prettier/plugins/angular')
    ]);

    return (file) =>
      prettier.format(file.content ?? '', {
        ...DEMO_SOURCE_FORMAT_OPTIONS[file.language === 'typescript' ? 'typescript' : 'html'],
        plugins: [typescript, estree, html, angular]
      });
  }

  //#endregion
}
