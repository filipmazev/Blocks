import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '@icons/components/icon.component';
import { IconName } from '@icons/types/icon.types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected packages: IPackage[] = [
    {
      name: '@filip.mazev/blocks-core',
      description: 'The infrastructure layer. Handles responsive breakpoints, deep theming, scroll locking, device detection and more.',
      link: 'https://www.npmjs.com/package/@filip.mazev/blocks-core',
      icon: 'square-terminal'
    },
    {
      name: '@filip.mazev/modal',
      description: 'A service-driven modal system supporting center/side layouts, mobile swipe gestures, dynamic content and much more.',
      link: 'https://www.npmjs.com/package/@filip.mazev/modal',
      icon: 'square-square'
    },
    {
      name: '@filip.mazev/toastr',
      description: 'A powerful toast service with built-in support for custom components, multiple placements, auto-dismissal and more.',
      link: 'https://www.npmjs.com/package/@filip.mazev/toastr',
      icon: 'bell'
    }
  ];

  protected features: IFeature[] = [
    {
      title: 'Unified Responsiveness',
      description: 'Responsiveness as a shared contract. TypeScript streams and SCSS mixins stay perfectly in sync, ensuring logic never desyncs from layout.',
      icon: 'smartphone'
    },
    {
      title: 'Deep Theming',
      description:
        'Built into the core. Supports creating distinct palettes with runtime switching for light and dark with different themes available out of the box.',
      icon: 'brush'
    },
    {
      title: 'Mobile-First Interaction',
      description: 'Native-feeling physics. Automatic scroll locking and swipe-to-close gestures ensure your web app feels like a native app.',
      icon: 'fingerprint-pattern'
    }
  ];
}

interface IPackage {
  name: string;
  description: string;
  link: string;
  icon: IconName;
}

interface IFeature {
  title: string;
  description: string;
  icon: IconName;
}
