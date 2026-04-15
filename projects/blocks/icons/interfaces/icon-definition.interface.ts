import { ICON_BRAND } from '../constants/icon.constants';

export interface IconDefinition {
  readonly name: string;
  readonly viewBox: string;
  readonly svgContent: string;
  readonly [ICON_BRAND]: true;
}
