import type { AppNavigationSection } from '@playground/app.navigation';

export interface IComponentExample {
  id: string;
  title: string;
  group: AppNavigationSection;
  readme: string;
  symbol: string;
  package: string;
  selector: string;
  description: string;
  example: string;
}
