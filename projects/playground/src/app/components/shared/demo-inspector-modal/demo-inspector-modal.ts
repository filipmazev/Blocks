import type { TemplateRef } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Modal } from '@filip.mazev/blocks/modal';

@Component({
  selector: 'app-demo-inspector-modal',
  imports: [NgTemplateOutlet],
  templateUrl: './demo-inspector-modal.html',
  styleUrl: './demo-inspector-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoInspectorModal extends Modal<TemplateRef<unknown>, undefined> {}
