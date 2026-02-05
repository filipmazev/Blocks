import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  packages = [
    {
      name: '@filip.mazev/blocks-core',
      description: 'The infrastructure layer. Handles responsive breakpoints, deep theming, scroll locking, device detection and more.',
      link: 'https://www.npmjs.com/package/@filip.mazev/blocks-core',
      icon: 'hub'
    },
    {
      name: '@filip.mazev/modal',
      description: 'A service-driven modal system supporting center/side layouts, mobile swipe gestures, dynamic content and much more.',
      link: 'https://www.npmjs.com/package/@filip.mazev/modal',
      icon: 'web_asset'
    }
  ];

  features = [
    {
      title: 'Unified Responsiveness',
      desc: 'Responsiveness as a shared contract. TypeScript streams and SCSS mixins stay perfectly in sync, ensuring logic never desyncs from layout.',
      icon: 'devices'
    },
    {
      title: 'Deep Theming',
      desc: 'Built into the core. Supports creating distinct palettes with runtime switching for light and dark with different themes available out of the box.',
      icon: 'palette'
    },
    {
      title: 'Mobile-First Interaction',
      desc: 'Native-feeling physics. Automatic scroll locking and swipe-to-close gestures ensure your web app feels like a native app.',
      icon: 'touch_app'
    }
  ];
}