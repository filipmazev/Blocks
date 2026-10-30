import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Button, InputField } from '@filip.mazev/blocks/forms';
import { Modal as ModalContent, ModalHeaderDirective, ModalFooterDirective } from '@filip.mazev/blocks/modal';
import { IComponentDialogData } from './interfaces/icomponent-dialog-data.interface';

@Component({
  selector: 'app-component-dialog',
  imports: [Button, InputField, ReactiveFormsModule, ModalHeaderDirective, ModalFooterDirective],
  template: `
    <div *appModalHeader>
      <strong>{{ data.title }}</strong>
    </div>
    <div class="dialog-body">
      <p>{{ data.description }}</p>
      <bx-input-field label="Project name" [formControl]="name" />
    </div>
    <div *appModalFooter class="dialog-actions">
      <button bx-button (click)="close()">Cancel</button>
      <button bx-button variant="filled" (click)="confirm()">Save changes</button>
    </div>
  `,
  styleUrl: './component-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentDialog extends ModalContent<IComponentDialogData, string> {
  protected readonly name = new FormControl('Blocks workspace', { nonNullable: true });
  protected confirm(): void {
    this.modal.close('confirm', this.name.value);
  }
}
