import { IconData } from "@filip.mazev/blocks/icons";
import { NavText } from "../types/navigation.types";

export interface INavMeta {
  label?: NavText;
  breadcrumb?: NavText;

  icon?: IconData;
  section?: string;
  menu?: boolean;
  hidden?: boolean;
  order?: number;
  root?: boolean;
  visible?: () => boolean;
}