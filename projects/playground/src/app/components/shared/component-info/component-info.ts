import { Component, input, signal } from '@angular/core';
import { ICodeFile } from '../../../shared/interfaces/icode-file.interface';
import { Readme } from '../readme/readme';
import { Code } from '../code/code';
import { ViewMode } from '../../../shared/types/common.types';

@Component({
  selector: 'app-component-info',
  imports: [
    Readme,
    Code
  ],
  templateUrl: './component-info.html',
  styleUrl: './component-info.scss',
})
export class ComponentInfo {
  public codeFiles = input.required<ICodeFile[]>();
  public readmePath = input.required<string>();

  protected viewMode = signal<ViewMode>('documentation');
}
