import { Component, inject, Renderer2, signal, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenericModalService } from 'modal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('playground');
  
  private viewContainerRef = inject(ViewContainerRef);
  private renderer2 = inject(Renderer2);

  private genericModalService = inject(GenericModalService);
  
  constructor() {
    this.genericModalService.register(this.viewContainerRef, this.renderer2);
  }
}