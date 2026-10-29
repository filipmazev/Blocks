import { afterRenderEffect, Component, ElementRef, inject, input, ChangeDetectionStrategy } from '@angular/core';
import { Tabs, Tab, TabContentDirective } from '@filip.mazev/blocks/primitives';
import { ICodeFile } from '@playground/interfaces/icode-file.interface';
import { Readme } from '@playground/components/shared/readme/readme';
import { Code } from '@playground/components/shared/code/code';

@Component({
  selector: 'app-component-info',
  imports: [Readme, Code, Tabs, Tab, TabContentDirective],
  templateUrl: './component-info.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './component-info.scss'
})
export class ComponentInfo {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  public readonly matchHeight = input<HTMLElement>();

  public codeFiles = input.required<ICodeFile[]>();
  public readmePath = input.required<string>();
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
