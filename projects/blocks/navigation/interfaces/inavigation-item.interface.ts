import { IconData } from "@filip.mazev/blocks/icons";
import { INavMeta } from "./inav-meta.interface";

export interface INavigationItem {
  id: string;
  route: string;
  label: string;
  icon?: IconData;
  section?: string;
  visible: boolean;
  children?: INavigationItem[];
  data?: INavMeta;
}