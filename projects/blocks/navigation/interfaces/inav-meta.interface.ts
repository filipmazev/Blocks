import { IconData } from '@filip.mazev/blocks/icons';
import { NavText } from '../types/navigation.types';

export interface INavMeta<TSection extends string = string> {
  label?: NavText;
  breadcrumb?: NavText;

  icon?: IconData;
  section?: TSection;
  menu?: boolean;
  hidden?: boolean;
  order?: number;
  root?: boolean;
  visible?: () => boolean;
}
