import { ICON_BRAND } from '@icons/constants/icon.constants';
import { IIconDefinition } from '@icons/interfaces/icon-definition.interface';

export function defineIcon(input: Omit<IIconDefinition, typeof ICON_BRAND>): IIconDefinition {
  return input as IIconDefinition;
}
