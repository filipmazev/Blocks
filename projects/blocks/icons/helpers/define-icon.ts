import { ICON_BRAND } from '../constants/icon.constants';
import { IconDefinition } from '../interfaces/icon-definition.interface';

export function defineIcon(input: Omit<IconDefinition, typeof ICON_BRAND>): IconDefinition {
  return input as IconDefinition;
}
