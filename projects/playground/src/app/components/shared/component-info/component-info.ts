import { afterRenderEffect, Component, ElementRef, inject, input, signal, ChangeDetectionStrategy } from '@angular/core';
import { ICodeFile } from '@playground/interfaces/icode-file.interface';
import { Readme } from '@playground/components/shared/readme/readme';
import { Code } from '@playground/components/shared/code/code';
import { ViewMode } from '@playground/types/common.types';

@Component({
  selector: 'app-component-info',
  imports: [Readme, Code],
  templateUrl: './component-info.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './component-info.scss'
})
export class ComponentInfo {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  public readonly matchHeight = input<HTMLElement>();

  public codeFiles = input.required<ICodeFile[]>();
  public readmePath = input.required<string>();
  protected viewMode = signal<ViewMode>('documentation');
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
