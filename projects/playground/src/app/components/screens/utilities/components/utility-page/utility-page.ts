import type { Signal } from '@angular/core';
import type { Data } from '@angular/router';

import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

import type { IUtilityExample } from '@playground/components/screens/utilities/interfaces/iutility-example.interface';
import type { ICodeFile } from '@playground/interfaces/icode-file.interface';

import { Divider, PageContainer, Stack } from '@filip.mazev/blocks/primitives';

import { UTILITY_EXAMPLES } from '@playground/components/screens/utilities/constants/utility-catalog.constants';
import { ComponentInfo } from '@playground/components/shared/component-info/component-info';

@Component({
  selector: 'app-utility-page',
  imports: [PageContainer, ComponentInfo, Divider, RouterOutlet, Stack],
  templateUrl: './utility-page.html',
  styleUrl: './utility-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UtilityPage {
  private readonly activatedRoute = inject(ActivatedRoute);

  private readonly routeData: Signal<Data> = toSignal(this.activatedRoute.data, { initialValue: this.activatedRoute.snapshot.data });

  protected readonly entry: Signal<IUtilityExample> = computed(
    () => UTILITY_EXAMPLES.find((entry) => entry.id === this.routeData()['utilityId']) ?? UTILITY_EXAMPLES[0]
  );
  protected readonly codeFiles: Signal<ICodeFile[]> = computed(() => {
    const id = this.entry().id;

    const files: ICodeFile[] = [
      { title: `${id}.ts`, path: `assets/code-snippets/utilities/components/${id}/${id}.ts.txt`, language: 'typescript' },
      { title: `${id}.html`, path: `assets/code-snippets/utilities/components/${id}/${id}.html.txt`, language: 'html' },
      { title: 'utility-demo.scss', path: 'assets/code-snippets/utilities/utility-demo.scss.txt', language: 'scss' }
    ];

    if (id === 'color-tokens' || id === 'overlay-positioning')
      files.push({
        title: 'utilities.constants.ts',
        path: 'assets/code-snippets/utilities/constants/utilities.constants.ts.txt',
        language: 'typescript'
      });

    if (id === 'scroll-lock')
      files.push({ title: 'utilities.types.ts', path: 'assets/code-snippets/utilities/types/utilities.types.ts.txt', language: 'typescript' });

    return files;
  });
}
