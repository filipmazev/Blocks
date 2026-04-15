import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Icon } from '@icons/components/icon';
import { Button } from '@button/components/button';
import { IconName } from '@icons/types/icon.types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, Icon, Button],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
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

interface IFeature {
  title: string;
  description: string;
  icon: IconName;
}
