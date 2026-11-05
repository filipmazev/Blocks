import { ICON_BRAND } from '@icons/constants/icon.constants';

/**
 * Describes the icon definition contract.
 */
export interface IIconDefinition {
  /** Name identifying this icon. */
  readonly name: string;
  /** SVG coordinate-system viewBox used when rendering the icon. */
  readonly viewBox: string;
  /** SVG child markup placed inside the icon viewBox. */
  readonly svgContent: string;
  /** Internal brand identifying a validated icon definition. */
  readonly [ICON_BRAND]: true;
}
