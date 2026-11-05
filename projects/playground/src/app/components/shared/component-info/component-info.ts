import type { InputSignal } from '@angular/core';

import { afterRenderEffect, ChangeDetectionStrategy, Component, ElementRef, inject, input } from '@angular/core';

import { Tab, TabContentDirective, Tabs } from '@filip.mazev/blocks/primitives';

import { Code } from '@playground/components/shared/code/code';
import { Readme } from '@playground/components/shared/readme/readme';
import { ICodeFile } from '@playground/interfaces/icode-file.interface';

@Component({
  selector: 'app-component-info',
  imports: [Readme, Code, Tabs, Tab, TabContentDirective],
  templateUrl: './component-info.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './component-info.scss'
})
export class ComponentInfo {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  public readonly matchHeight: InputSignal<HTMLElement | undefined> = input<HTMLElement>();
  public readonly codeFiles: InputSignal<ICodeFile[]> = input.required<ICodeFile[]>();
  public readonly readmePath: InputSignal<string> = input.required<string>();

  constructor() {
    afterRenderEffect((onCleanup) => {
      const target = this.matchHeight();

      if (!target) return;

      const resize = () => (this.element.style.height = `${target.getBoundingClientRect().height}px`);

      resize();

      const observer = new ResizeObserver(resize);

      observer.observe(target);
      onCleanup(() => {
        observer.disconnect();
        this.element.style.removeProperty('height');
      });
    });
  }
}
