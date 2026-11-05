import { ICON_BRAND } from '@icons/constants/icon.constants';
import { IIconDefinition } from '@icons/interfaces/icon-definition.interface';

/**
 * Brand an application-supplied SVG definition for use by the Blocks icon component.
 *
 * @param input - Icon name, view box, and SVG content without the internal brand marker.
 */
export function defineIcon(input: Omit<IIconDefinition, typeof ICON_BRAND>): IIconDefinition {
  return input as IIconDefinition;
}
