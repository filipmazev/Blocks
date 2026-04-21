import { INavContext } from "./inav-context.interface";
import { IconData } from "@filip.mazev/blocks/icons";

export interface INavMeta {
  label?: string | ((ctx: INavContext) => string);
  breadcrumb?: string | ((ctx: INavContext) => string);

  labelKey?: string;
  breadcrumbKey?: string;

  icon?: IconData;
  section?: string;
  menu?: boolean;
  hidden?: boolean;
  order?: number;
  root?: boolean;
  visible?: () => boolean;
}