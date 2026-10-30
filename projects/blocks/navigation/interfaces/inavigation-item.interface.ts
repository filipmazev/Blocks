import { IconData } from '@filip.mazev/blocks/icons';
import { INavMeta } from './inav-meta.interface';

export interface INavigationItem {
  id: string;
  route: string;
  label: string;
  icon?: IconData;
  section?: string;
  visible: boolean;
  /** Optional breadcrumb inclusion from route metadata. Defaults to the section setting, then true. */
  showInBreadcrumbs?: boolean;
  children?: INavigationItem[];
  data?: INavMeta;
}
